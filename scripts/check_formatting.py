#!/usr/bin/env python3
"""Structural formatting gate. Browser review remains necessary for visual QA."""
from html.parser import HTMLParser
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
class Cards(HTMLParser):
    def __init__(self):
        super().__init__()
        self.cards = []
        self.current = None
        self.headings = 0
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == 'a' and 'talent-system-card' in a.get('class', '').split():
            assert self.current is None, 'Nested system links'
            self.current = {'href': a.get('href',''), 'headings': 0, 'ctas': 0}
        if self.current is not None:
            assert tag != 'br', 'No forced line breaks in system cards'
            if tag == 'h3': self.current['headings'] += 1
            if 'text-link' in a.get('class','').split(): self.current['ctas'] += 1
    def handle_endtag(self, tag):
        if tag == 'a' and self.current is not None:
            self.cards.append(self.current)
            self.current = None

p = Cards()
p.feed((ROOT/'docs/index.html').read_text())
assert len(p.cards) == 3, 'Homepage must have three equal system cards'
for card, slug in zip(p.cards, ['sourcing-compass','gabbar-interview-evaluator','ta-centcom']):
    assert card['href'].endswith('/projects/'+slug+'/'), f'Unexpected card order: {card}'
    assert card['headings'] == 1 and card['ctas'] == 1, 'Each card needs one heading and CTA'
css = (ROOT/'static/css/global.css').read_text()
checks = {
    'three-column desktop grid': r'\.talent-system-grid\s*\{[^}]*grid-template-columns:\s*repeat\(3, minmax\(0, 1fr\)\)',
    'single-column responsive grid': r'@media\s*\(max-width: 900px\)\s*\{\s*\.talent-system-grid\s*\{\s*grid-template-columns:\s*minmax\(0, 1fr\)',
    'centred card CTAs': r'\.talent-system-card > \.text-link\s*\{[^}]*align-self:\s*center;[^}]*text-align:\s*center;',
    'centred hero CTA': r'\.hero-copy > \.button-row\s*\{[^}]*justify-content:\s*center;',
    'centred pathway CTAs': r'\.pathway-card > \.text-link,[^{]+\{[^}]*align-self:\s*center;',
    'centred section CTAs': r'\.section-actions,[^{]+\{[^}]*text-align:\s*center;',
}
for label, pattern in checks.items():
    assert re.search(pattern, css, re.S), 'Missing layout rule: '+label
print('Formatting contracts passed: card structure, responsive grid, and CTA alignment rules.')
