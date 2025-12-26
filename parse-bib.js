const fs = require('fs');
const path = require('path');

const publicationsMdPath = path.join(__dirname, '_pages', 'publications.md');
const papersBibPath = path.join(__dirname, '_bibliography', 'new_papers.bib');

const publicationsMd = fs.readFileSync(publicationsMdPath, 'utf8');

const publications = publicationsMd.split('<div class="publication-item">').slice(1);

let bibtexEntries = '';

for (const publication of publications) {
    const titleMatch = publication.match(/<p class="publication-title">(.*?)<\/p>/);
    const authorsMatch = publication.match(/<p class="publication-authors">(.*?)<\/p>/);
    const detailsMatch = publication.match(/<p class="publication-details">(.*?)<\/p>/);

    if (titleMatch && authorsMatch && detailsMatch) {
        const title = titleMatch[1].replace(/\d+\. /, '');
        const authors = authorsMatch[1].replace(/ and /g, ' and ').split(', ').map(author => author.trim()).join(' and ');
        const details = detailsMatch[1];

        const yearMatch = details.match(/(\d{4})/);
        const year = yearMatch ? yearMatch[1] : '';

        const journalMatch = details.match(/(.*?)\s\d/);
        const journal = journalMatch ? journalMatch[1].replace(/\|/g, '').trim() : '';

        const doiMatch = details.match(/DOI<\/a>.*?href="(.*?)"/);
        const doi = doiMatch ? doiMatch[1] : '';

        const arxivMatch = details.match(/arXiv:(\d+\.\d+)/);
        const arxiv = arxivMatch ? arxivMatch[1] : '';

        const key = `${authors.split(' ')[0].replace(/,/g, '')}${year}${title.split(' ')[0]}`;

        let bibtexEntry = `@article{${key},\n`;
        bibtexEntry += `  title         = {${title}},
`;
        bibtexEntry += `  author        = {${authors}},
`;
        if (journal) bibtexEntry += `  journal       = {${journal}},
`;
        if (year) bibtexEntry += `  year          = {${year}},
`;
        if (doi) bibtexEntry += `  doi           = {${doi.replace('https://doi.org/', '')}},
`;
        if (arxiv) bibtexEntry += `  arxiv         = {${arxiv}},
`;
        bibtexEntry += `}

`;

        bibtexEntries += bibtexEntry;
    }
}

fs.writeFileSync(papersBibPath, bibtexEntries);

console.log('Successfully converted publications to BibTeX!');
