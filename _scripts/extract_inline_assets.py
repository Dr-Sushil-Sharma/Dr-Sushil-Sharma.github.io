#!/usr/bin/env python3
"""
Extract inline <style> and <script> blocks from _pages/*.md files
into separate CSS/JS files under assets/css/pages/ and assets/js/pages/.

Then replace those blocks in the .md files with <link> / <script src=> references.
"""

import os
import re

# Paths
PROJECT_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PAGES_DIR = os.path.join(PROJECT_ROOT, "_pages")
CSS_OUT_DIR = os.path.join(PROJECT_ROOT, "assets", "css", "pages")
JS_OUT_DIR = os.path.join(PROJECT_ROOT, "assets", "js", "pages")

# Pages to process (basename -> slug for output files)
PAGES = {
    "about.md": "about",
    "projects.md": "projects",
    "publications.md": "publications",
    "contact.md": "contact",
    "teaching.md": "teaching",
    "speaking.md": "speaking",
    "service.md": "service",
    "research.md": "research",
    "repositories.md": "repositories",
    "python-course.md": "python-course",
}

# CDN script tags to keep inline (matched by src attribute containing these substrings)
CDN_MARKERS = [
    "cdn.jsdelivr.net",
    "unpkg.com",
    "cdnjs.cloudflare.com",
    "fonts.googleapis.com",
]


def is_cdn_script(tag_line):
    """Check if a <script> tag is a CDN import (has src= pointing to external URL)."""
    if 'src=' not in tag_line:
        return False
    for marker in CDN_MARKERS:
        if marker in tag_line:
            return True
    return False


def extract_blocks(content, open_tag_re, close_tag):
    """
    Extract all blocks matching open_tag_re ... close_tag from content.
    Returns list of (start_pos, end_pos, inner_content, full_match) tuples.
    """
    blocks = []
    pos = 0
    while True:
        m = open_tag_re.search(content, pos)
        if not m:
            break
        start = m.start()
        # Find matching close tag
        close_pos = content.find(close_tag, m.end())
        if close_pos == -1:
            break
        end = close_pos + len(close_tag)
        inner = content[m.end():close_pos]
        full = content[start:end]
        blocks.append((start, end, inner, full))
        pos = end
    return blocks


def process_page(md_filename, slug):
    """Process a single _pages file."""
    md_path = os.path.join(PAGES_DIR, md_filename)
    if not os.path.exists(md_path):
        print(f"  SKIP: {md_path} not found")
        return

    with open(md_path, "r", encoding="utf-8") as f:
        content = f.read()

    # ---- Extract <style> blocks ----
    style_re = re.compile(r'<style\b[^>]*>', re.IGNORECASE)
    style_blocks = extract_blocks(content, style_re, '</style>')

    css_parts = []
    for _, _, inner, _ in style_blocks:
        # Strip common leading whitespace
        lines = inner.split('\n')
        # Remove empty first/last lines
        while lines and lines[0].strip() == '':
            lines.pop(0)
        while lines and lines[-1].strip() == '':
            lines.pop()
        css_parts.append('\n'.join(lines))

    if css_parts:
        css_content = '\n\n'.join(css_parts) + '\n'
        css_path = os.path.join(CSS_OUT_DIR, f"{slug}.css")
        with open(css_path, "w", encoding="utf-8") as f:
            f.write(css_content)
        print(f"  CSS: Wrote {len(style_blocks)} blocks -> {css_path}")

    # ---- Extract <script> blocks (skip CDN imports) ----
    script_re = re.compile(r'<script\b[^>]*>', re.IGNORECASE)
    script_blocks = extract_blocks(content, script_re, '</script>')

    js_parts = []
    cdn_blocks = []  # blocks to keep in the md file
    for start, end, inner, full in script_blocks:
        # Check the opening tag line
        opening_tag = full[:full.find('>') + 1]
        if is_cdn_script(opening_tag):
            # This is a CDN import, keep it in place
            cdn_blocks.append((start, end, full))
            continue
        # This is inline JS
        lines = inner.split('\n')
        while lines and lines[0].strip() == '':
            lines.pop(0)
        while lines and lines[-1].strip() == '':
            lines.pop()
        js_parts.append('\n'.join(lines))

    if js_parts:
        js_content = '\n\n'.join(js_parts) + '\n'
        js_path = os.path.join(JS_OUT_DIR, f"{slug}.js")
        with open(js_path, "w", encoding="utf-8") as f:
            f.write(js_content)
        print(f"  JS:  Wrote {len(js_parts)} blocks -> {js_path}")

    # ---- Replace blocks in the markdown ----
    # We need to replace from last to first to preserve positions.
    # Collect all replacements: (start, end, replacement_text)
    replacements = []

    # Replace style blocks - the first one gets the <link> tag, others become empty
    for i, (start, end, inner, full) in enumerate(style_blocks):
        if i == 0:
            link_tag = f'<link rel="stylesheet" href="{{{{ \'/assets/css/pages/{slug}.css\' | relative_url }}}}">'
            replacements.append((start, end, link_tag))
        else:
            replacements.append((start, end, ''))

    # Replace inline script blocks (not CDN ones)
    inline_script_blocks = [(s, e, inner, full) for s, e, inner, full in script_blocks
                            if not is_cdn_script(full[:full.find('>') + 1])]

    for i, (start, end, inner, full) in enumerate(inline_script_blocks):
        if i == 0:
            script_tag = f'<script src="{{{{ \'/assets/js/pages/{slug}.js\' | relative_url }}}}"></script>'
            replacements.append((start, end, script_tag))
        else:
            replacements.append((start, end, ''))

    # Sort replacements by position (descending) to avoid shifting
    replacements.sort(key=lambda x: x[0], reverse=True)

    for start, end, replacement in replacements:
        content = content[:start] + replacement + content[end:]

    # Clean up excessive blank lines (more than 2 consecutive)
    content = re.sub(r'\n{4,}', '\n\n\n', content)

    # Write back
    with open(md_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  MD:  Updated {md_path}")


def main():
    # Create output directories
    os.makedirs(CSS_OUT_DIR, exist_ok=True)
    os.makedirs(JS_OUT_DIR, exist_ok=True)

    print("=== Extracting inline CSS/JS from _pages ===\n")

    for md_file, slug in PAGES.items():
        print(f"Processing: {md_file}")
        process_page(md_file, slug)
        print()

    print("=== Done! ===")
    print(f"CSS files: {CSS_OUT_DIR}")
    print(f"JS files:  {JS_OUT_DIR}")


if __name__ == "__main__":
    main()
