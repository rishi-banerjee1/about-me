#!/usr/bin/env python3
"""Guard against forced heading breaks and the narrow desktop article layout."""

from html.parser import HTMLParser
from pathlib import Path
import re


ROOT = Path(__file__).resolve().parents[1]
CSS = (ROOT / "static/css/global.css").read_text()


def declarations(selector):
    matches = re.findall(rf"{selector}\s*\{{([^}}]*)\}}", CSS, re.S)
    assert matches, f"Missing heading layout rule: {selector}"
    return matches


global_headings = declarations(r"h1,\s*h2,\s*h3")[0]
assert re.search(r"text-wrap:\s*wrap\s*;", global_headings), "Headings must wrap naturally"

article = declarations(r"\.standard-prose")[0]
body = declarations(r"\.standard-prose\s*>\s*p,\s*\.standard-prose\s*>\s*ul,\s*\.standard-prose\s*>\s*ol")[0]
article_width = int(re.search(r"max-width:\s*(\d+)px", article).group(1))
body_width = int(re.search(r"max-width:\s*(\d+)px", body).group(1))
assert article_width >= 900 and article_width - body_width >= 120, "Article headings need more room than body copy"

for rule in declarations(r"\.craft-hero h1"):
    assert "max-width" not in rule, "Do not force a character-width break in the Art & Craft title"


class HeadingBreaks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.heading = None
        self.breaks = []

    def handle_starttag(self, tag, attrs):
        if tag in {"h1", "h2", "h3"}:
            self.heading = tag
        elif tag == "br" and self.heading:
            self.breaks.append(self.heading)

    def handle_endtag(self, tag):
        if tag == self.heading:
            self.heading = None


checked = 0
for page in (ROOT / "docs").rglob("*.html"):
    html = page.read_text()
    if "copyright.js" not in html:
        continue  # Standalone static pages have their own layout.
    parser = HeadingBreaks()
    parser.feed(html)
    assert not parser.breaks, f"Forced line break inside a heading: {page}"
    checked += 1

assert checked, "No generated site pages were checked"
print(f"Heading layout contracts passed on {checked} pages.")
