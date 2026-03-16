/* =========================================
   1. THE SCRAPER
   Fetches your publications page and extracts data
   ========================================= */
const pubSourceUrl = '/publications/';

async function scrapePublications() {
    try {
        const response = await fetch(pubSourceUrl);
        const text = await response.text();
        
        // Parse HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, 'text/html');
        
        // Find all cards
        const cards = doc.querySelectorAll('.publication-card');
        const data = [];

        cards.forEach((card, index) => {
            const title = card.querySelector('.pub-title')?.innerText || "Untitled";
            const authors = card.querySelector('.pub-authors')?.innerText || "Unknown";
            const yearStr = card.getAttribute('data-year') || "2020";
            const year = parseInt(yearStr);
            
            // Try to find a link (DOI or arXiv)
            const linkTag = card.querySelector('.pub-links a');
            const link = linkTag ? linkTag.href : "#";

            data.push({
                id: index,
                title: title,
                authors: authors,
                year: year,
                link: link
            });
        });

        document.getElementById('loading-text').style.display = 'none';
        initGalaxy(data);

    } catch (error) {
        console.error("Scraping failed:", error);
        document.getElementById('loading-text').innerText = "DATA LINK FAILED";
    }
}

/* =========================================
   2. THE GALAXY VISUALIZATION
   ========================================= */
function initGalaxy(papers) {
    const canvas = document.getElementById('galaxyCanvas');
    const ctx = canvas.getContext('2d');
    let width, height;

    // Viewport State
    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let lastX, lastY;
    let hoveredNode = null;

    // Process Data into Nodes
    // We group them by year to create "rings" or "clusters"
    const nodes = [];
    const particles = []; // Background stars

    // Sort by year
    papers.sort((a, b) => a.year - b.year);
    const minYear = papers[0].year;
    const maxYear = papers[papers.length-1].year;

    papers.forEach((p, i) => {
        // Calculate position based on timeline (Spiral layout)
        // Angle increases with index
        const angle = i * 0.5; 
        // Radius increases with year
        const yearFactor = (p.year - minYear) / ((maxYear - minYear) || 1);
        const radius = 100 + (yearFactor * 300) + (Math.random() * 50);

        nodes.push({
            ...p,
            x: Math.cos(angle) * radius,
            y: Math.sin(angle) * radius,
            baseX: Math.cos(angle) * radius,
            baseY: Math.sin(angle) * radius,
            size: 6 + Math.random() * 4,
            color: `hsl(${200 + (yearFactor * 60)}, 100%, 70%)`, // Blue to Purple gradient
            pulse: Math.random() * Math.PI
        });
    });

    // Background Dust
    for(let i=0; i<300; i++) {
        particles.push({
            x: (Math.random() - 0.5) * 2000,
            y: (Math.random() - 0.5) * 2000,
            size: Math.random() * 1.5,
            alpha: Math.random() * 0.5
        });
    }

    function resize() {
        width = canvas.parentElement.clientWidth;
        height = canvas.parentElement.clientHeight;
        canvas.width = width;
        canvas.height = height;
        // Center the view initially
        offsetX = width / 2;
        offsetY = height / 2;
    }
    window.addEventListener('resize', resize);
    resize();

    /* --- INPUT HANDLING --- */
    canvas.addEventListener('mousedown', e => {
        isDragging = true;
        lastX = e.clientX;
        lastY = e.clientY;
        canvas.style.cursor = "grabbing";
    });
    
    window.addEventListener('mouseup', () => {
        isDragging = false;
        canvas.style.cursor = "move";
        
        // If we clicked on a node, open the HUD
        if(hoveredNode) {
            showHud(hoveredNode);
        } else {
            // hideHud();
        }
    });

    canvas.addEventListener('mousemove', e => {
        if(isDragging) {
            const dx = e.clientX - lastX;
            const dy = e.clientY - lastY;
            offsetX += dx;
            offsetY += dy;
            lastX = e.clientX;
            lastY = e.clientY;
        }

        // Hover Detection
        const mx = (e.clientX - canvas.getBoundingClientRect().left - offsetX) / scale;
        const my = (e.clientY - canvas.getBoundingClientRect().top - offsetY) / scale;

        hoveredNode = null;
        let hit = false;
        for(let n of nodes) {
            let dx = mx - n.x;
            let dy = my - n.y;
            if(Math.sqrt(dx*dx + dy*dy) < n.size + 10) {
                hoveredNode = n;
                hit = true;
                break;
            }
        }
        canvas.style.cursor = hit ? "pointer" : (isDragging ? "grabbing" : "move");
    });

    canvas.addEventListener('wheel', e => {
        e.preventDefault();
        const zoomSpeed = 0.001;
        scale += e.deltaY * -zoomSpeed;
        scale = Math.min(Math.max(.2, scale), 4);
    });

    /* --- RENDER LOOP --- */
    function animate() {
        ctx.fillStyle = "#090A0F";
        ctx.fillRect(0, 0, width, height);

        ctx.save();
        ctx.translate(offsetX, offsetY);
        ctx.scale(scale, scale);

        // Draw Connections (Constellations)
        ctx.strokeStyle = "rgba(0, 210, 255, 0.05)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        for(let i=0; i<nodes.length - 1; i++) {
             // Connect chronological papers
             ctx.moveTo(nodes[i].x, nodes[i].y);
             ctx.lineTo(nodes[i+1].x, nodes[i+1].y);
        }
        ctx.stroke();

        // Draw Background Stars
        ctx.fillStyle = "#fff";
        particles.forEach(p => {
            ctx.globalAlpha = p.alpha;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
            ctx.fill();
        });
        ctx.globalAlpha = 1;

        // Draw Nodes (Papers)
        nodes.forEach(n => {
            // Pulse animation
            n.pulse += 0.05;
            const glow = Math.sin(n.pulse) * 2 + 2;

            // Glow ring
            if(n === hoveredNode) {
                ctx.shadowBlur = 20;
                ctx.shadowColor = n.color;
                ctx.fillStyle = "#fff";
            } else {
                ctx.shadowBlur = 0;
                ctx.fillStyle = n.color;
            }

            ctx.beginPath();
            ctx.arc(n.x, n.y, n.size, 0, Math.PI*2);
            ctx.fill();

            // Ring
            ctx.strokeStyle = n.color;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.arc(n.x, n.y, n.size + glow, 0, Math.PI*2);
            ctx.stroke();
            
            // Year Label (sparse)
            if(n.size > 8) {
                ctx.fillStyle = "rgba(255,255,255,0.3)";
                ctx.font = "10px Arial";
                ctx.fillText(n.year, n.x + 12, n.y + 3);
            }
        });

        ctx.restore();
        requestAnimationFrame(animate);
    }

    animate();

    // Helper functions
    window.resetZoom = function() {
        scale = 1;
        offsetX = width/2;
        offsetY = height/2;
    }
}

function showHud(data) {
    const hud = document.getElementById('hud-panel');
    document.getElementById('hudYear').innerText = data.year;
    document.getElementById('hudTitle').innerText = data.title;
    document.getElementById('hudAuthor').innerText = data.authors;
    document.getElementById('hudLink').href = data.link;
    
    hud.classList.add('active');
}

// Start
scrapePublications();
