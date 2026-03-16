document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch Publications
    fetch("/publications/")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const articles = doc.querySelectorAll('.publication-card.article');
            const limit = 10; // Show top 5 articles
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
