# 🌟 Dr. Sushil Sharma Portfolio: The Ultimate Guide

Welcome to the definitive manual for your customized academic portfolio website! This project is a streamlined, data-driven Jekyll template engineered for fast, painless updates without requiring deep technical knowledge. 

---

## 🏗️ 1. Static vs Dynamic Websites

This is a **Static Website** built with [Jekyll](https://jekyllrb.com/). 
- **Dynamic Websites** (WordPress, Facebook) use databases to construct pages on-the-fly when a user clicks a link.
- **Static Websites** (like this) pre-build all pages into flat HTML files. 
  - **Pros:** Blazing fast, ultra-secure (no database to hack), and hosted for free on GitHub Pages.
  - **Cons:** You don't have a "login dashboard." You edit text files, and GitHub rebuilds the website automatically in the background.

---

## 📂 2. Project Directory Map

Where does everything live?

```text
├── _data/                 <-- 🚨 EDIT CONTENT HERE (YAML Text Files) 🚨
│   ├── about.yml          # Homepage: Bio, profile, highlights
│   ├── contact.yml        # Contact: Email, office, social links
│   ├── research.yml       # Research: Focus areas
│   ├── service.yml        # Accomplishments: Awards, committees, editorial
│   ├── speaking.yml       # Talks: Seminars and posters
│   ├── teaching.yml       # Teaching: Students, philosophy, courses
│   └── repositories.yml   # Personal: Photo carousel config
│
├── _pages/                # The route files connecting URLs to templates
├── _includes/sections/    # The HTML templates that render the data 
├── assets/
│   ├── css/pages/         # Custom dark-theme styling per page
│   └── img/               # 📷 ALL PHOTOS GO HERE
└── _config.yml            # Global site settings (URL, title, nav menu)
```

---

## 📝 3. Page-by-Page Update Guide

Here is exactly how to update every single page on the website.

### 🏠 Home / About Page
- **File to Edit**: `_data/about.yml`
- **What you can change**: Your Bio, Profile Photo, Contact Bar, Research Interests (the grid of cards), and the "Selected Highlight Publications."
- **How to update Profile Photo**: Replace `assets/img/prof_pic.jpg` with a new photo of the same name, or upload a new photo to `assets/img/` and change the `image:` path in `about.yml`.
- **How to update Bio**: Find the `bio:` section. Each bullet point (`- >`) is a new paragraph.

### 📚 Publications Page
- **File to Edit**: `_data/publications.yml`
- **What you can change**: Your overall stats (citations, h-index, i10-index) and your full list of articles, proceedings, and posters.
- **How to add a Publication**: Scroll to the relevant array (e.g., `articles:`). Copy an existing block and paste it at the top.
```yaml
- title: "Groundbreaking new research in Physics"
  authors: "S. Sharma, et al."
  journal: "Nature Physics 20 (2026)"
  year: 2026
  url: "https://doi.org/10.1038/s41567-026"
```

### 🎤 Talks (Speaking) Page
- **File to Edit**: `_data/speaking.yml`
- **How to add a Talk**: Scroll to the `talks:` section, copy an existing block, and paste it at the top of the list:
```yaml
  - title: "My Amazing New Discovery"
    year: 2026
    event: "International Conference on Physics"
    location: "Tokyo, Japan"
    date: "August 10-14"
```

### 🎓 Teaching & Mentorship Page
- **File to Edit**: `_data/teaching.yml`
- **How to add a PhD Student**:
   1. Upload their photo to `assets/img/`.
   2. Open `_data/teaching.yml`.
   3. Scroll to the `students:` list and add them:
```yaml
    - name: Jane Doe
      image: /assets/img/jane_doe.jpg
      period: "2026 - Present"
      status: PhD Candidate
      badge_color: badge-primary
      branch: left
```

### 🏆 Accomplishments (Service) Page
- **File to Edit**: `_data/service.yml`
- **What you can change**: Editorial Roles, Awards & Grants, Organizing Committees, and the floating Impact Stats at the bottom.
- **How to add an Award**: Find the `awards:` array and insert:
```yaml
  - title: "Nobel Prize in Physics"
    year: 2030
    text: "Awarded for groundbreaking work in positronium."
    featured: true
```

### 🌍 Personal (My World) Page
- **File to Edit**: `_data/repositories.yml` *(Note: this file powers the Personal page)*
- **How to manage Photos**: 
  1. This page displays a dynamic 3D carousel. To add photos, drop them into the `assets/img/Personal/` folder.
  2. The photos **must** be named sequentially starting from 1 (e.g., `1.jpg`, `2.jpg`, ... `10.jpg`). 
  3. If you add `11.jpg` and `12.jpg`, open `_data/repositories.yml` and change `count: 10` to `count: 12`.

### 🔬 Research Page
- **File to Edit**: `_data/research.yml`
- **What you can change**: The intro paragraphs and the specific research "badges" (Medical Physics, Reaction Mechanisms, etc.). 

### ✉️ Contact Page
- **File to Edit**: `_data/contact.yml`
- **What you can change**: Office hours, location, and social media links.
- **How to update Socials**: Find the `socials:` array. You can update your Google Scholar, LinkedIn, GitHub, or Facebook URLs here.

### ⚙️ Global Settings & Navigation
- **File to Edit**: `_config.yml`
- **What you can change**: The website's title, base domain, Google Analytics tracking IDs, and the top header navigation menu.

---

## 🖼️ 4. Managing Images effectively
1. **Always use `/assets/img/`**: Do not put images in random folders. Put them in `assets/img/`.
2. **Path referencing**: When typing an image path in YAML, always start with a slash: `/assets/img/my_photo.jpg`.
3. **Compression**: To keep the site loading fast, try to compress huge photos (like 5MB DSLR shots) to under 500kb before uploading.

---

## 🤖 5. Advanced Development with AI (Antigravity/LLMs)

If you ever want to make larger structural changes—like creating an entirely new page or redesigning a feature—you don't need to learn coding. You can guide an AI assistant like **Antigravity**, ChatGPT, or Claude.

**Tips for Prompting the AI:**
1. **Provide Context**: Tell the AI, *"This is a Jekyll static site. Page logic is in `_includes/sections/[page].liquid`, driven by data in `_data/[page].yml`. All CSS is in `assets/css/pages/`. The theme is permanently Dark Mode."*
2. **Adding a New Page**: Ask the AI: *"I want to create a 'Grants' page. Create `_data/grants.yml` for the data, `_includes/sections/grants-page.liquid` for the HTML, and `_pages/grants.md` to route it. Finally, tell me how to add it to `_config.yml`'s header."*
3. **Changing CSS Colors**: Say, *"I want the 'Teaching' page titles to be bright green instead of white. Please edit `assets/css/pages/teaching.css`."*
4. **Fixing Build Errors**: If GitHub Action fails to build the site, copy the error logs from GitHub and paste them to the AI: *"My Jekyll site failed with a YAML Parsing Error. I just edited `contact.yml`. Can you find the missing quote?"*

---

## 🚀 6. Deploying Changes (Going Live)

Because this site is hosted on GitHub Pages, deployment is entirely automated.
1. Make your changes locally or directly via the web editor on github.com.
2. **Commit** and **Push** your changes to the repository (`main` or `master` branch).
3. GitHub Actions will automatically start a `pages-build-deployment` workflow.
4. Wait about 1 to 2 minutes. 
5. Refresh your website (`https://dr-sushil-sharma.github.io/`) and your updates will be live!
