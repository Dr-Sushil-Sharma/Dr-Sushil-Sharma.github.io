---
layout: page
title: ""
permalink: /
description: Assistant Professor at <a href='https://koza.if.uj.edu.pl/'>Jagiellonian University</a>.
nav: true
nav_order: 1
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

<style>
/* --- GLOBAL PAGE STYLES --- */
/* Hide default theme headers */
.post-header, .page-header, .page-title { display: none !important; }

/* Custom Title Style */
.hello-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.5rem;
    font-weight: 700;
    color: var(--global-theme-color);
    margin-bottom: 1rem;
    letter-spacing: -0.5px;
}

/* Bio Text Styling */
.bio-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1.1rem;
    line-height: 1.6;
    font-weight: 400;
    color: #4a4a4a;
}

/* Profile Image */
.profile-img-container img {
    border: 4px solid #fff;
    transition: transform 0.3s ease;
}
.profile-img-container img:hover {
    transform: scale(1.05);
}

/* Dark mode adjustment */
@media (prefers-color-scheme: dark) {
    .bio-text { color: #d0d0d0; }
    .profile-img-container img { border-color: #444 !important; }
}
</style>

<div class="row mt-4 align-items-center">
    
    <div class="col-md-4 text-center">
        <div class="profile-img-container mb-3">
            <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Sushil Sharma" class="img-fluid rounded-circle shadow-sm" style="max-width: 220px;">
        </div>

        <div class="text-muted small mt-2">
            <div class="font-weight-bold" style="font-size: 1rem;">Dept. of Experimental Particle Physics</div>
            <div>Jagiellonian University</div>
            <div>Kraków, Poland</div>
        </div>

        <div class="social-icons mt-4">
            <a href="mailto:sushil.sharma@uj.edu.pl" class="text-muted mx-2" title="Email"><i class="fas fa-envelope fa-2x"></i></a>
            <a href="https://scholar.google.com/citations?user=1lsvWAcAAAAJ&hl=en" target="_blank" class="text-muted mx-2" title="Google Scholar"><i class="ai ai-google-scholar ai-2x"></i></a>
            <a href="https://www.linkedin.com/in/sushil-sharma-b68472b1/" target="_blank" class="text-muted mx-2" title="LinkedIn"><i class="fab fa-linkedin fa-2x"></i></a>
        </div>

        <div class="mt-4">
            <a href="https://koza.if.uj.edu.pl/staff/ssharma" target="_blank" class="btn btn-outline-primary rounded-pill px-4">
                View University Profile
            </a>
        </div>
    </div>

    <div class="col-md-8">
        <h1 class="hello-title">Hello, I'm <span style="font-style: italic;">Sushil Sharma</span>.</h1>

        <div class="bio-text text-justify">
            <p>
                I am an experimental particle physicist dedicated to advancing our understanding of fundamental physics through innovative instrumentation and precise data analysis.
            </p>
            <p>
                Currently, I serve as an <strong>Assistant Professor</strong> at the Department of Experimental Particle Physics and Applications at <a href="https://www.uj.edu.pl" target="_blank">Jagiellonian University</a>. My academic journey is built on a foundation of rigorous research, holding a Ph.D. with distinction in Nuclear Physics from Jagiellonian University, followed by impactful postdoctoral fellowships at the University of Warsaw and TIFPA, INFN in Trento, Italy.
            </p>
            <p>
                My work focuses on the realization of nuclear physics experiments, computer-based raw data analysis, and the model description of observables. I am particularly passionate about developing new technologies for particle detection.
            </p>
        </div>
    </div>

</div>

<hr class="my-5">

<div class="row">
    <div class="col-12">
        <h3 class="mb-4 text-center font-weight-bold">Research Focus</h3>
    </div>
</div>

<div class="row">
    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-heartbeat fa-2x"></i></div>
            <h5 class="interest-title">Medical Physics</h5>
            <p class="interest-text">Positron Emission Tomography (PET) & Medical Imaging</p>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-atom fa-2x"></i></div>
            <h5 class="interest-title">Particle Physics</h5>
            <p class="interest-text">Fundamental interactions and particle properties</p>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-bomb fa-2x"></i></div>
            <h5 class="interest-title">Spallation Physics</h5>
            <p class="interest-text">Reaction dynamics and model validation</p>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-radiation fa-2x"></i></div>
            <h5 class="interest-title">Nuclear Reactions</h5>
            <p class="interest-text">Fusion, fission, and reaction mechanisms</p>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-layer-group fa-2x"></i></div>
            <h5 class="interest-title">Nuclear Structure</h5>
            <p class="interest-text">Properties of atomic nuclei and high-spin states</p>
        </div>
    </div>
    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-microchip fa-2x"></i></div>
            <h5 class="interest-title">Instrumentation</h5>
            <p class="interest-text">New hardware/software techniques in particle detection</p>
        </div>
    </div>
</div>

<style>
.interest-card {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 2rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
}
.interest-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    border-color: var(--global-theme-color, #007bff);
}
.icon-wrapper {
    margin-bottom: 1rem;
    color: #6c757d;
    transition: color 0.3s ease;
}
.interest-card:hover .icon-wrapper { color: var(--global-theme-color, #007bff); }
.interest-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; }
.interest-text { font-size: 0.9rem; color: #666; }

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .interest-card { background: #2b2b2b; border-color: #444; }
    .interest-card:hover { background: #323232; }
    .interest-title { color: #f0f0f0; }
    .interest-text { color: #aaa; }
    .icon-wrapper { color: #888; }
    .interest-card:hover .icon-wrapper { color: var(--global-theme-color, #66b0ff); }
}
</style>

<hr class="my-5">

<div class="row mb-4">
    <div class="col-12 text-center">
        <h3 class="font-weight-bold">Recent Research</h3>
        <p class="text-muted">Latest selected contributions.</p>
    </div>
</div>

<div id="recent-pubs-container" class="recent-pubs-wrapper">
    <div class="text-center py-5">
        <i class="fas fa-spinner fa-spin fa-2x text-muted"></i>
    </div>
</div>

<div class="row mt-2 mb-5">
    <div class="col-12 text-center">
        <a href="{{ '/publications/' | relative_url }}" class="btn btn-outline-light rounded-pill px-4">
            View All Publications <i class="fas fa-arrow-right ml-1"></i>
        </a>
    </div>
</div>

<style>
/* --- FULL WIDTH CARD STYLING --- */
.pub-card-full {
    display: block;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e9ecef;
    border-left: 5px solid var(--global-theme-color, #007bff);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.pub-card-full:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    border-color: #d0d0d0;
}

.pub-card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pub-info { flex: 1; padding-right: 20px; }

.pub-card-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-family: 'Roboto', sans-serif;
}
.pub-card-title a { color: inherit; text-decoration: none; }
.pub-card-title a:hover { color: var(--global-theme-color, #007bff); }

.pub-card-meta { font-size: 0.95rem; color: #6c757d; line-height: 1.5; }
.pub-author-list { font-style: italic; margin-bottom: 0.2rem; }

.pub-journal-badge {
    display: inline-block;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    color: #495057;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    margin-top: 5px;
}

/* Right Side Actions */
.pub-actions {
    text-align: right;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.pub-year {
    font-size: 1.5rem;
    font-weight: 900;
    color: #e0e0e0;
    line-height: 1;
    margin-bottom: 10px;
}

.btn-read {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    background: transparent;
    border: 1px solid var(--global-theme-color, #007bff);
    color: var(--global-theme-color, #007bff);
    transition: all 0.2s;
    white-space: nowrap;
}
.pub-card-full:hover .btn-read {
    background: var(--global-theme-color, #007bff);
    color: white;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .pub-card-content { flex-direction: column; align-items: flex-start; }
    .pub-info { padding-right: 0; margin-bottom: 1rem; }
    .pub-actions {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #eee;
        padding-top: 10px;
    }
    .pub-year { margin-bottom: 0; font-size: 1.2rem; }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
    .pub-card-full {
        background: #2b2b2b;
        border-color: #444;
        border-left-color: var(--global-theme-color, #66b0ff);
    }
    .pub-card-title { color: #f1f1f1; }
    .pub-card-meta { color: #b0b0b0; }
    .pub-journal-badge { background: #333; border-color: #555; color: #ccc; }
    .pub-year { color: #444; }
    .pub-card-full:hover { border-color: #666; }
    .btn-read { color: #fff; border-color: #fff; }
    .pub-card-full:hover .btn-read { background: #fff; color: #000; }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch Publications
    fetch("{{ '/publications/' | relative_url }}")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const articles = doc.querySelectorAll('.publication-card.article');
            const limit = 5; // Show top 5 articles
            const container = document.getElementById('recent-pubs-container');
            
            container.innerHTML = ""; // Clear loader

            if(articles.length === 0) {
                container.innerHTML = '<div class="text-muted text-center p-4">No recent publications found.</div>';
                return;
            }

            for (let i = 0; i < Math.min(articles.length, limit); i++) {
                const sourceCard = articles[i];
                
                // Get inner HTML for title (preserves formatting if any)
                const titleHTML = sourceCard.querySelector('.pub-title').innerHTML;
                // Get raw text for search
                const rawTitle = sourceCard.querySelector('.pub-title').innerText.trim();
                
                const authors = sourceCard.querySelector('.pub-authors').innerText;
                const displayAuthors = authors.length > 80 ? authors.substring(0, 80) + "..." : authors;
                
                const journal = sourceCard.querySelector('.journal-name').innerText;
                const year = sourceCard.getAttribute('data-year');

                // --- GOOGLE SCHOLAR TRICK ---
                // Instead of looking for a direct link, we generate a search URL
                const link = "https://scholar.google.com/scholar?q=" + encodeURIComponent(rawTitle);

                // Build Full Width Card
                const cardHTML = `
                    <div class="pub-card-full">
                        <a href="${link}" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
                        <div class="pub-card-content">
                            <div class="pub-info">
                                <div class="pub-card-title">${titleHTML}</div>
                                <div class="pub-card-meta">
                                    <div class="pub-author-list">${displayAuthors}</div>
                                    <span class="pub-journal-badge">${journal}</span>
                                </div>
                            </div>
                            <div class="pub-actions">
                                <div class="pub-year">${year}</div>
                                <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('recent-pubs-container').innerHTML = '<div class="text-danger text-center">Unable to load publications.</div>';
        });
});
</script>

<hr class="my-5">

<div class="canvas-container mt-3">
    <canvas id="physicsCanvas"></canvas>
    <div class="canvas-overlay">
        <h2>The Positronium Field</h2>
        <p>Simulating particle dynamics in real-time.</p>
    </div>
</div>

<style>
.canvas-container {
    position: relative;
    width: 100%;
    height: 450px;
    background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid #333;
}
canvas { display: block; width: 100%; height: 100%; }
.canvas-overlay {
    position: absolute; bottom: 20px; left: 20px;
    color: rgba(255, 255, 255, 0.5); pointer-events: none;
    font-family: 'Roboto', sans-serif;
}
.canvas-overlay h2 { font-size: 1.5rem; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; }
.canvas-overlay p { font-size: 0.9rem; margin: 0; }
</style>

<script>
const canvas = document.getElementById('physicsCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 120;
const mouse = { x: undefined, y: undefined, radius: 150 };

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
canvas.addEventListener('mouseleave', function() { mouse.x = undefined; mouse.y = undefined; });
canvas.addEventListener('click', function() {
    particles.forEach(p => {
        let dx = p.x - mouse.x; let dy = p.y - mouse.y;
        if (Math.sqrt(dx*dx + dy*dy) < 200) {
            let force = 40;
            p.speedX += (dx/Math.sqrt(dx*dx + dy*dy)) * force;
            p.speedY += (dy/Math.sqrt(dx*dx + dy*dy)) * force;
            p.color = '#ffffff';
        }
    });
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        
        if (mouse.x != undefined) {
            let dx = mouse.x - this.x; let dy = mouse.y - this.y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < mouse.radius) {
                let force = (mouse.radius - dist) / mouse.radius;
                this.speedX += (dx/dist) * force * 0.6;
                this.speedY += (dy/dist) * force * 0.6;
                this.color = '#00e5ff';
            } else {
                this.speedX *= 0.98; this.speedY *= 0.98;
                if(Math.abs(this.speedX) < 0.5) this.speedX = Math.random() * 2 - 1;
                if(Math.abs(this.speedY) < 0.5) this.speedY = Math.random() * 2 - 1;
                this.color = 'rgba(100, 200, 255, 0.7)';
            }
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() { particles = []; for (let i=0; i<particleCount; i++) particles.push(new Particle()); }
function animate() {
    ctx.fillStyle = 'rgba(20, 20, 30, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i=0; i<particles.length; i++) {
        particles[i].update(); particles[i].draw();
        for (let j=i; j<particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
                ctx.beginPath();
                if (mouse.x != undefined && Math.sqrt((particles[i].x-mouse.x)**2 + (particles[i].y-mouse.y)**2) < 150) {
                     ctx.strokeStyle = 'rgba(0, 229, 255, ' + (1 - dist/100) + ')';
                     ctx.lineWidth = 1;
                } else {
                    ctx.strokeStyle = 'rgba(100, 100, 100, 0.1)';
                    ctx.lineWidth = 0.2;
                }
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}
init(); animate();
</script>