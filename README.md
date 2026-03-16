# 🌟 Dr. Sushil Sharma Portfolio: The Ultimate Guide

Welcome to the definitive manual for your customized academic portfolio website! This project is a streamlined, data-driven Jekyll template engineered for fast, painless updates without requiring deep technical knowledge. 

---

## 🚀 0. Getting Started (From Scratch)

If you have a completely fresh laptop and want to run this website locally on your computer to preview changes, follow these setup instructions. 

### Step A: Install the Prerequisites
Jekyll requires **Ruby**. Because Jekyll doesn't natively support Windows, we highly recommend using **WSL** (Windows Subsystem for Linux) if you are on a Windows machine.

**For Windows (Using WSL):**
1. Open PowerShell as Administrator and install WSL by running: `wsl --install`
2. Restart your computer.
3. Open the "Ubuntu" app from your Start Menu.
4. Update Linux and install Ruby:
   ```bash
   sudo apt update && sudo apt upgrade -y
   sudo apt install ruby-full build-essential zlib1g-dev -y
   ```
5. Configure Ruby to install packages (gems) in your user folder instead of requiring root access:
   ```bash
   echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
   echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
   echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```

**For macOS:**
1. Open Terminal and install Homebrew (if you don't have it): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`
2. Install Ruby: `brew install ruby`

**For Linux (Ubuntu/Debian):**
1. Open Terminal and run: `sudo apt install ruby-full build-essential zlib1g-dev -y`

### Step B: Install Jekyll and Bundler
Once Ruby is installed, run this command in your terminal/WSL:
```bash
gem install jekyll bundler
```

### Step C: Download (Clone) Your Website
We need to download the source code from GitHub onto your computer.
1. In your terminal, navigate to where you want the folder (e.g., your Desktop): `cd ~/Desktop`
2. Clone the repository (replace the URL with your actual repository link):
   ```bash
   git clone https://github.com/Dr-Sushil-Sharma/Dr-Sushil-Sharma.github.io.git
   ```
3. Move into the website folder:
   ```bash
   cd Dr-Sushil-Sharma.github.io
   ```

### Step D: Install Project Dependencies
Run this command inside the website folder to install all the specific libraries this website needs:
```bash
bundle install
```

### Step E: Run the Website Locally
To launch a local server and preview your site, run:
```bash
bundle exec jekyll serve
```
Open your web browser and go to: `http://localhost:4000/`. You can now edit files in the repository, and the website will automatically refresh in your browser!

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
