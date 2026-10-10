#!/usr/bin/env python3
"""Validate generated GitHub Pages routes and same-site links."""

from __future__ import annotations

import sys
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urljoin, urlsplit
from xml.etree import ElementTree


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "docs"
CONFIG = ROOT / "config.toml"
REQUIRED_ROUTES = (
    "index.html",
    "advisory/index.html",
    "leadership-impact/index.html",
    "proof-of-work/index.html",
    "projects/index.html",
    "recruiting-craft/index.html",
    "ai-native-talent/index.html",
    "raising-the-bar/index.html",
    "founder-hindsight/index.html",
)
URL_ATTRIBUTES = ("href", "src")


class PageParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.urls: list[tuple[str, str]] = []
        self.anchors: set[str] = set()
        self.canonicals: list[str] = []
        self.description = ""

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        if tag == "link" and values.get("rel") == "canonical":
            self.canonicals.append(values.get("href", ""))
        if tag == "meta" and values.get("name") == "description":
            self.description = values.get("content", "") or ""
        self._record(attrs)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)

    def _record(self, attrs: list[tuple[str, str | None]]) -> None:
        values = dict(attrs)
        for name in ("id", "name"):
            value = values.get(name)
            if value:
                self.anchors.add(value)
        for name in URL_ATTRIBUTES:
            value = values.get(name)
            if value:
                self.urls.append((name, value.strip()))


def route_file(path: str) -> Path:
    """Resolve a site-relative URL path to a generated file."""
    decoded = unquote(path).lstrip("/")
    if not decoded or decoded.endswith("/"):
        decoded += "index.html"
    candidate = OUTPUT / decoded
    if candidate.is_file():
        return candidate
    if not Path(decoded).suffix and (candidate / "index.html").is_file():
        return candidate / "index.html"
    return candidate


def display(path: Path) -> str:
    return path.relative_to(OUTPUT).as_posix()


def main() -> int:
    if not OUTPUT.is_dir():
        print("docs/ is missing. Run ./build.sh first.", file=sys.stderr)
        return 1

    missing_required = [route for route in REQUIRED_ROUTES if not (OUTPUT / route).is_file()]
    if not (OUTPUT / ".nojekyll").is_file():
        missing_required.append(".nojekyll")
    if missing_required:
        print("Missing required output: " + ", ".join(missing_required), file=sys.stderr)
        return 1

    config_text = CONFIG.read_text(encoding="utf-8")
    match = re.search(r'^base_url\s*=\s*"([^"]+)"\s*$', config_text, re.MULTILINE)
    if match is None:
        print("Could not read base_url from config.toml.", file=sys.stderr)
        return 1
    base_url = match.group(1).rstrip("/") + "/"
    base_parts = urlsplit(base_url)
    base_path = base_parts.path.rstrip("/") + "/"

    robots_file = OUTPUT / "robots.txt"
    if not robots_file.is_file():
        print("robots.txt is missing.", file=sys.stderr)
        return 1
    sitemap_urls = re.findall(r"^Sitemap:\s*(\S+)", robots_file.read_text(), re.MULTILINE)
    if not sitemap_urls:
        print("robots.txt must advertise the generated sitemap.", file=sys.stderr)
        return 1
    for sitemap_url in sitemap_urls:
        if not sitemap_url.startswith(base_url):
            print(f"Sitemap must use the canonical site URL: {sitemap_url}", file=sys.stderr)
            return 1
        sitemap_file = route_file(sitemap_url[len(base_url):])
        try:
            ElementTree.parse(sitemap_file)
        except (OSError, ElementTree.ParseError) as error:
            print(f"Advertised sitemap is missing or invalid: {error}", file=sys.stderr)
            return 1

    pages: dict[Path, PageParser] = {}
    for html_file in sorted(OUTPUT.rglob("*.html")):
        parser = PageParser()
        try:
            parser.feed(html_file.read_text(encoding="utf-8"))
        except (OSError, UnicodeError) as error:
            print(f"Could not read {display(html_file)}: {error}", file=sys.stderr)
            return 1
        pages[html_file.resolve()] = parser

    errors: list[str] = []
    # Protect the focused search landing pages in the existing CI gate.
    for route in (display(path) for path in OUTPUT.rglob("index.html")):
        path = (OUTPUT / route).resolve()
        parser = pages[path]
        expected = base_url + route.removesuffix("index.html")
        if parser.canonicals != [expected]:
            errors.append(f"{route}: canonical must be {expected}")
        if not parser.description.strip():
            errors.append(f"{route}: missing search description")
        html = path.read_text()
        if not re.search(r"<title>[^<]+</title>", html):
            errors.append(f"{route}: missing title")
        for payload in re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.S):
            try:
                json.loads(payload)
            except json.JSONDecodeError:
                errors.append(f"{route}: invalid structured data JSON")
    book_html = (OUTPUT / "raising-the-bar/index.html").read_text()
    if '"@type": "Book"' not in book_html:
        errors.append("Book landing page must include Book structured data")
    checked_links = 0
    for source_file, parser in pages.items():
        source_rel = source_file.relative_to(OUTPUT.resolve())
        if source_rel.name == "index.html":
            source_url = urljoin(base_url, source_rel.parent.as_posix().rstrip("/") + "/")
        else:
            source_url = urljoin(base_url, source_rel.as_posix())

        for attr, raw_url in parser.urls:
            if not raw_url or raw_url.startswith("//"):
                continue
            target_url = urljoin(source_url, raw_url)
            parsed = urlsplit(target_url)
            if parsed.scheme not in ("http", "https"):
                continue
            if parsed.netloc.lower() != base_parts.netloc.lower():
                continue
            if not (parsed.path == base_path.rstrip("/") or parsed.path.startswith(base_path)):
                continue

            site_path = parsed.path[len(base_path) :] if parsed.path.startswith(base_path) else ""
            target_file = route_file(site_path)
            checked_links += 1
            if not target_file.is_file():
                errors.append(f"{display(source_file)}: {attr} target not found: {raw_url}")
                continue

            fragment = unquote(parsed.fragment)
            if fragment:
                target_parser = pages.get(target_file.resolve())
                if target_parser is not None and fragment not in target_parser.anchors:
                    errors.append(
                        f"{display(source_file)}: anchor #{fragment} not found in {display(target_file)}"
                    )

    if errors:
        print("Broken same-site links or anchors:", file=sys.stderr)
        for error in errors:
            print(f"- {error}", file=sys.stderr)
        return 1

    print(f"Checked {len(pages)} HTML pages and {checked_links} same-site links; all required routes and anchors exist.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
