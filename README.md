# Sushil Sharma Portfolio Template

Welcome to the customized academic portfolio website! This project is a tailored, stripped-down, and data-driven version of a Jekyll template, designed specifically for rapid updates without needing deep technical knowledge. 

## 🏗️ 1. Static vs Dynamic Websites

This is a **Static Website** built with [Jekyll](https://jekyllrb.com/). 
- **Dynamic Websites** (like WordPress or Facebook) use a database to store content and build pages on the fly every time a user visits.
- **Static Websites** (like this one) use flat files (Markdown, YAML, HTML). The site is entirely pre-built into HTML files by Jekyll *before* it is served to the user. 
  - **Pros:** They are incredibly fast, highly secure (no databases to hack), and can be hosted for free on platforms like GitHub Pages.
  - **Cons:** You have to "rebuild" the site to see changes, rather than just clicking "Save" in an admin dashboard.

Because it is static, you will update the content by modifying text files locally or directly in the GitHub interface. When you push your changes, GitHub Pages will automatically rebuild the site.

---

## 📂 2. Project Structure Overview

Here is the core structure of the repository that you need to know about:

```text
├── _data/                 <-- 🚨 THIS IS WHERE YOU EDIT CONTENT 🚨
│   ├── about.yml          # Bio, profile info, and publications
│   ├── contact.yml        # Contact details, office hours, social links
│   ├── research.yml       # Research areas and past projects
│   ├── service.yml        # Editorial roles, awards, committees
│   ├── speaking.yml       # Talks, seminars, and visits
│   └── teaching.yml       # Philosophy, courses, and mentored students
│
├── _pages/                # The actual "pages" of the site. You RARELY need to edit these.
│   ├── about.md, contact.md, etc.
│
├── _includes/sections/    # The HTML templates that render the data from _data/
│
├── assets/
│   ├── css/pages/         # Custom styling for specific pages (Dark mode, layout)
│   ├── js/pages/          # Custom interactions or animations for pages
│   └── img/               # Your photos, logos, and images go here
│
└── _config.yml            # Global site settings (URL, title, navigation)
```

---

## 📝 3. How to Edit the Website (For Non-Technical Users)

We have converted all the complex, messy HTML code into simple, organized **YAML (`.yml`) data files**. 

If you want to add a new talk, a new student, or update your bio, you **only** need to edit the files inside the `_data/` folder. You do not need to touch HTML or CSS.

### Example 1: Adding a New Talk
1. Open `_data/speaking.yml`
2. Scroll to the `talks:` section.
3. Copy an existing block and paste it at the top of the list, then change the details:
```yaml
  - title: "My Amazing New Discovery"
    year: 2026
    event: "International Conference on Physics"
    location: "Tokyo, Japan"
    date: "August 10-14"
```

### Example 2: Adding a New PhD Student
1. Place their photo in the `assets/img/` folder.
2. Open `_data/teaching.yml`
3. Scroll to the `students:` list and add them:
```yaml
    - name: Jane Doe
      image: /assets/img/jane_doe.jpg
      period: "2026 - Present"
      status: PhD Candidate
      badge_color: badge-primary
      branch: left
```

### Example 3: Updating Your Bio
1. Open `_data/about.yml`
2. Find the `bio:` section. Each line starting with `-` is a new paragraph.
```yaml
bio:
  - "This is my first paragraph containing **bold text**."
  - "This is my second paragraph."
```

*Note: Make sure to keep the indentation (spaces at the start of the line) exact, as YAML relies on spacing to structure data!*

---

## 🤖 4. Advanced Changes Using AI (Antigravity/LLMs)

If you ever want to make larger structural changes—like completely redesigning a page, adding a new page, or fixing a visual bug—you can efficiently guide an AI assistant like **Antigravity**, ChatGPT, or Claude to do it for you.

**Tips for Prompting the AI:**
1. **Be specific about the architecture**: Tell the AI, *"This is a Jekyll site where data is stored in `_data/` and rendered via Liquid templates in `_includes/sections/`. The base theme is dark-mode only."*
2. **Adding a New Page**: Ask the AI: *"I want to create a new page for 'Grants'. Please create a `_data/grants.yml` file for the schema, an `_includes/sections/grants-page.liquid` template to render it, and a `_pages/grants.md` file to route it. Then update `_config.yml` to add it to the header navigation."*
3. **Changing Styles**: Say, *"I want to change the color of the buttons on the Teaching page. Please check `assets/css/pages/teaching.css` and update the hover effects to use `#ff0000`."*
4. **Fixing Data Errors**: If the site fails to build on GitHub, copy the error logs from GitHub Actions and paste it to the AI: *"My Jekyll site failed to build with this error. I just edited `_data/speaking.yml`. What line is the YAML syntax error on?"*

---

## 🚀 5. Deploying Changes

Because this site is hosted via GitHub Pages, deploying is fully automatic.
1. Make your changes locally or directly on github.com.
2. **Commit** and **Push** your changes to the `master` or `main` branch.
3. GitHub Actions will automatically start a workflow to rebuild the Jekyll site.
4. After ~1-2 minutes, refresh your live website URL and your updates will be live!
