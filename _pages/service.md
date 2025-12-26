---
layout: page
permalink: /service/
title: Service
description: My contributions to the academic community through committee work, reviewing, and outreach.
nav: true
nav_order: 7
---

<div class="row mb-4">
    <div class="col-sm-12">
        <p class="lead">
            I am committed to contributing to the academic community and broader society through various professional service activities, ensuring the growth of scientific exchange and peer review.
        </p>
    </div>
</div>

<hr>

<div class="row mb-5">
    <div class="col-12">
        <h3 class="mb-4"><i class="fas fa-book-reader mr-2"></i> Editorial & Reviewing</h3>
        
        <div class="service-card featured-service">
            <div class="service-icon">
                <i class="fas fa-pen-nib fa-2x"></i>
            </div>
            <div class="service-content">
                <h5 class="service-title">Associate Editor</h5>
                <p class="service-subtitle">EJNMMI Physics Journal (Springer)</p>
                <a href="https://link.springer.com/journal/40658/editorial-board" target="_blank" class="btn btn-sm btn-outline-primary mt-2">
                    View Editorial Board <i class="fas fa-external-link-alt ml-1"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-12">
        <h3 class="mb-4"><i class="fas fa-users-cog mr-2"></i> Organizing Committees</h3>
        
        <div class="service-list">
            
            <div class="service-card">
                <div class="service-year">2019</div>
                <div class="service-content">
                    <h5 class="service-title">Scientific Secretary</h5>
                    <p class="service-text">3rd Jagiellonian Symposium on Fundamental and Applied Subatomic Physics & DAE International Symposium on Nuclear Physics</p>
                    <p class="service-meta"><i class="fas fa-university mr-1"></i> Jagiellonian University, Krakow, Poland</p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-year">2014</div>
                <div class="service-content">
                    <h5 class="service-title">Co-organizer</h5>
                    <p class="service-text">II Symposium on Applied Nuclear Physics and Innovative Technologies</p>
                    <p class="service-meta"><i class="fas fa-map-marker-alt mr-1"></i> Krakow, Poland</p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-year">2014</div>
                <div class="service-content">
                    <h5 class="service-title">Co-organizer</h5>
                    <p class="service-text">13th International Workshop on Meson Production, Properties and Interaction</p>
                    <p class="service-meta"><i class="fas fa-map-marker-alt mr-1"></i> Krakow, Poland</p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-year">2013</div>
                <div class="service-content">
                    <h5 class="service-title">Co-organizer</h5>
                    <p class="service-text">Symposium on Applied Nuclear Physics and Innovative Technologies</p>
                    <p class="service-meta"><i class="fas fa-map-marker-alt mr-1"></i> Krakow, Poland</p>
                </div>
            </div>

        </div>
    </div>

</div>

<div class="row mt-5">
    <div class="col-12">
        <h3 class="mb-4 text-muted"><i class="fas fa-hands-helping mr-2"></i> Outreach</h3>
        <div class="alert alert-light border" role="alert">
            <i class="fas fa-info-circle mr-2"></i> Outreach and community engagement activities will be updated soon.
        </div>
    </div>
</div>

<style>
/* === Card Styling === */
.service-card {
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    transition: transform 0.2s, box-shadow 0.2s;
    align-items: center;
}
.service-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    border-color: var(--global-theme-color, #007bff);
}
.service-card.featured-service {
    border-left: 5px solid #28a745;
    background: #f8fff9;
}
.service-icon { padding-right: 1.5rem; color: #28a745; }
.service-subtitle { font-size: 1rem; color: #6c757d; margin-bottom: 0.5rem; }

/* === Committee List Styling === */
.service-year {
    font-size: 1.5rem; font-weight: 700; color: #495057;
    padding-right: 1.5rem; border-right: 2px solid #f1f1f1;
    min-width: 90px; text-align: right; align-self: flex-start;
}
.service-content { padding-left: 1.5rem; flex: 1; }
.service-title { font-weight: 700; color: #212529; margin-bottom: 0.3rem; }
.service-text { margin-bottom: 0.3rem; font-size: 1rem; color: #333; }
.service-meta { font-size: 0.85rem; color: #888; margin-bottom: 0; }

/* === Dark Mode Support === */
@media (prefers-color-scheme: dark) {
    .service-card { background: #2b2b2b; border-color: #444; }
    .service-card:hover { box-shadow: 0 5px 15px rgba(0,0,0,0.3); }
    .service-card.featured-service { background: #232b23; border-left-color: #28a745; }
    .service-title { color: #f1f1f1; }
    .service-text { color: #d1d1d1; }
    .service-subtitle { color: #adb5bd; }
    .service-year { color: #ced4da; border-right-color: #444; }
    .alert-light { background-color: #333; border-color: #444; color: #ccc; }
}

/* === Mobile Responsiveness === */
@media (max-width: 576px) {
    .service-card { flex-direction: column; align-items: flex-start; }
    .service-year {
        text-align: left; border-right: none; border-bottom: 2px solid #f1f1f1;
        padding-right: 0; padding-bottom: 0.5rem; margin-bottom: 0.8rem; width: 100%;
    }
    @media (prefers-color-scheme: dark) { .service-year { border-bottom-color: #444; } }
    .service-content { padding-left: 0; }
    .service-icon { margin-bottom: 1rem; }
}
</style>

<hr class="my-5">

<div class="row">
    <div class="col-12 text-center">
        <h3 class="mb-2 font-weight-bold">Service Topology</h3>
        <p class="text-muted small">
            <i class="fas fa-project-diagram"></i> <strong>Drag</strong> the nodes to explore the network of my academic contributions.
        </p>
    </div>
</div>

<div class="network-container mt-3">
    <canvas id="networkCanvas"></canvas>
    <div class="network-overlay">
        <h2>Collaboration Graph</h2>
        <p>Connecting community & science.</p>
    </div>
</div>

<style>
.network-container {
    position: relative;
    width: 100%;
    height: 500px;
    background: #111;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid #333;
}
canvas { display: block; width: 100%; height: 100%; cursor: grab; }
canvas:active { cursor: grabbing; }

.network-overlay {
    position: absolute;
    bottom: 20px;
    left: 20px;
    color: rgba(255, 255, 255, 0.6);
    pointer-events: none;
    font-family: 'Roboto', sans-serif;
}
.network-overlay h2 {
    font-size: 1.5rem; margin: 0; font-weight: 700;
    text-transform: uppercase; letter-spacing: 2px; color: #fff;
}
</style>

<script>
const canvas = document.getElementById('networkCanvas');
const ctx = canvas.getContext('2d');

let width, height;

// --- CONFIGURATION ---
// Define the nodes of your network
const nodes = [
    { id: 0, label: "Me", type: "core", r: 35 },
    { id: 1, label: "EJNMMI Physics", type: "journal", r: 25 },
    { id: 2, label: "Springer", type: "journal", r: 20 },
    { id: 3, label: "Jagiellonian Univ.", type: "inst", r: 25 },
    { id: 4, label: "Krakow", type: "loc", r: 15 },
    { id: 5, label: "Jagiellonian Symp.", type: "conf", r: 22 },
    { id: 6, label: "DAE Symposium", type: "conf", r: 22 },
    { id: 7, label: "Nuclear Physics", type: "field", r: 18 },
    { id: 8, label: "Meson Workshop", type: "conf", r: 20 },
    { id: 9, label: "Applied Nuclear", type: "conf", r: 20 },
];

// Define connections (links)
const links = [
    { source: 0, target: 1 }, // Me -> EJNMMI
    { source: 1, target: 2 }, // EJNMMI -> Springer
    { source: 0, target: 3 }, // Me -> Jagiellonian
    { source: 3, target: 4 }, // Jagiellonian -> Krakow
    { source: 0, target: 5 }, // Me -> Jag Symposium
    { source: 5, target: 3 }, // Jag Symp -> Jagiellonian
    { source: 0, target: 6 }, // Me -> DAE
    { source: 5, target: 7 }, // Jag Symp -> Nuclear Phys
    { source: 6, target: 7 }, // DAE -> Nuclear Phys
    { source: 0, target: 8 }, // Me -> Meson
    { source: 0, target: 9 }, // Me -> Applied Nuclear
    { source: 8, target: 4 }, // Meson -> Krakow
    { source: 9, target: 4 }, // Applied -> Krakow
];

// Color Palette
const colors = {
    core: "#ffc107",   // Gold
    journal: "#28a745", // Green
    inst: "#007bff",   // Blue
    conf: "#e83e8c",   // Pink
    loc: "#6c757d",    // Gray
    field: "#17a2b8"   // Cyan
};

// Physics Variables
let simulationParticles = [];
const repulsion = 1000;
const springLength = 100;
const friction = 0.9;

function resize() {
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

// Initialize Particles positions
nodes.forEach(node => {
    node.x = width/2 + (Math.random() - 0.5) * 50;
    node.y = height/2 + (Math.random() - 0.5) * 50;
    node.vx = 0;
    node.vy = 0;
});

// Mouse Interaction
let draggedNode = null;
let mouseX = 0;
let mouseY = 0;

canvas.addEventListener('mousedown', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
    
    // Find clicked node
    for(let node of nodes) {
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        if(Math.sqrt(dx*dx + dy*dy) < node.r) {
            draggedNode = node;
            break;
        }
    }
});

canvas.addEventListener('mousemove', e => {
    const rect = canvas.getBoundingClientRect();
    mouseX = e.clientX - rect.left;
    mouseY = e.clientY - rect.top;
});

canvas.addEventListener('mouseup', () => { draggedNode = null; });
canvas.addEventListener('mouseleave', () => { draggedNode = null; });

function updatePhysics() {
    // 1. Repulsion (Nodes push apart)
    for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
            let dx = nodes[j].x - nodes[i].x;
            let dy = nodes[j].y - nodes[i].y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist === 0) dist = 0.1;

            const force = repulsion / (dist * dist);
            const fx = (dx / dist) * force;
            const fy = (dy / dist) * force;

            nodes[i].vx -= fx;
            nodes[i].vy -= fy;
            nodes[j].vx += fx;
            nodes[j].vy += fy;
        }
    }

    // 2. Spring (Links pull together)
    links.forEach(link => {
        const u = nodes[link.source];
        const v = nodes[link.target];
        
        let dx = v.x - u.x;
        let dy = v.y - u.y;
        let dist = Math.sqrt(dx*dx + dy*dy);
        if (dist === 0) dist = 0.1;

        const displacement = dist - springLength;
        const force = displacement * 0.05; // Spring constant
        
        const fx = (dx / dist) * force;
        const fy = (dy / dist) * force;

        u.vx += fx;
        u.vy += fy;
        v.vx -= fx;
        v.vy -= fy;
    });

    // 3. Center Gravity (Keep whole blob in middle)
    nodes.forEach(node => {
        const dx = (width/2) - node.x;
        const dy = (height/2) - node.y;
        node.vx += dx * 0.005;
        node.vy += dy * 0.005;
    });

    // 4. Update Position & Mouse Drag
    nodes.forEach(node => {
        if (node === draggedNode) {
            node.x = mouseX;
            node.y = mouseY;
            node.vx = 0;
            node.vy = 0;
        } else {
            node.x += node.vx;
            node.y += node.vy;
            node.vx *= friction;
            node.vy *= friction;
        }
    });
}

function draw() {
    ctx.clearRect(0, 0, width, height);

    // Draw Links
    ctx.strokeStyle = "rgba(255,255,255,0.2)";
    ctx.lineWidth = 1.5;
    links.forEach(link => {
        const u = nodes[link.source];
        const v = nodes[link.target];
        ctx.beginPath();
        ctx.moveTo(u.x, u.y);
        ctx.lineTo(v.x, v.y);
        ctx.stroke();
    });

    // Draw Nodes
    nodes.forEach(node => {
        // Circle
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fillStyle = colors[node.type] || "#fff";
        ctx.fill();
        
        // Border
        ctx.strokeStyle = "#fff";
        ctx.lineWidth = 2;
        ctx.stroke();

        // Label
        ctx.fillStyle = "#fff";
        ctx.font = "bold 12px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(node.label, node.x, node.y + node.r + 15);
    });

    updatePhysics();
    requestAnimationFrame(draw);
}

draw();
</script>
