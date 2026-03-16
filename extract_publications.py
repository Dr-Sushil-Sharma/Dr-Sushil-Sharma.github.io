import re
import yaml

content = open('_includes/sections/publications-page.liquid', 'r', encoding='utf-8').read()

# Stats
# <div class="h2 font-weight-bold mb-0" style="color: #ffc107;">2,758</div>
stats = {
    'citations': re.search(r'>Total Citations<.*?>(.+?)</div>', content, re.DOTALL).group(1).strip(),
    'h_index': re.search(r'>h-index<.*?>(.+?)</div>', content, re.DOTALL).group(1).strip(),
    'i10_index': re.search(r'>i10-index<.*?>(.+?)</div>', content, re.DOTALL).group(1).strip()
}

articles = []
proceedings = []
posters = []

blocks = re.finditer(r'<div class="publication-card (.*?)" data-year="(\d+)">(.*?)</div>\s*</div>', content, re.DOTALL)

for b in blocks:
    pub_type = b.group(1).strip()
    year = int(b.group(2).strip())
    inner_html = b.group(3)
    
    # Title and URL
    title_match = re.search(r'<h5 class="pub-title">(.*?)</h5>', inner_html, re.DOTALL)
    title_html = title_match.group(1).strip()
    
    url = ""
    if '<a href=' in title_html:
        url_match = re.search(r'<a href="(.*?)"[^>]*>(.*?)</a>', title_html, re.DOTALL)
        if url_match:
            url = url_match.group(1).strip()
            title = url_match.group(2).strip()
            title = re.sub(r'\s+', ' ', title)
        else:
            title = title_html
    else:
        title = title_html
        title = re.sub(r'\s+', ' ', title)
        
    title = title.replace('\n', ' ').strip()
    
    # Authors
    authors_match = re.search(r'<p class="pub-authors">(.*?)</p>', inner_html, re.DOTALL)
    authors = authors_match.group(1).strip() if authors_match else ""
    authors = re.sub(r'\s+', ' ', authors)
    
    # Journal / Venue
    journal_match = re.search(r'<span class="journal-name">(.*?)</span>', inner_html, re.DOTALL)
    journal = journal_match.group(1).strip() if journal_match else ""
    journal = re.sub(r'\s+', ' ', journal)
    
    entry = {
        'title': title,
        'authors': authors,
        'journal': journal,
        'year': year
    }
    if url and url != "#":
        entry['url'] = url
        
    if pub_type == 'article':
        articles.append(entry)
    elif pub_type == 'proceeding':
        proceedings.append(entry)
    elif pub_type == 'poster':
        posters.append(entry)

yaml_data = {
    'stats': stats,
    'articles': articles,
    'proceedings': proceedings,
    'posters': posters
}

# sort by year desc
def sort_by_year(arr):
    arr.sort(key=lambda x: x['year'], reverse=True)

sort_by_year(yaml_data['articles'])
sort_by_year(yaml_data['proceedings'])
sort_by_year(yaml_data['posters'])

with open('_data/publications.yml', 'w', encoding='utf-8') as f:
    yaml.dump(yaml_data, f, sort_keys=False, allow_unicode=True, default_flow_style=False)

print(f"Extracted {len(articles)} articles, {len(proceedings)} proceedings, {len(posters)} posters.")
