import bibtexparser

with open('_bibliography/papers.bib') as bibtex_file:
    bib_database = bibtexparser.load(bibtex_file)
    print("Parsed successfully!" if bib_database.entries else "Parse failed.")