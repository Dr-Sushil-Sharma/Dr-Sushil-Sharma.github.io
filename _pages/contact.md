---
layout: page
permalink: /contact/
title: Contact
description: How to get in touch and where to find me online.
nav: true
nav_order: 9
---

<div class="row mb-4">
    <div class="col-12">
        <p class="lead">
            I am always open to discussing research, potential collaborations, or opportunities for student supervision. The best way to reach me is via email.
        </p>
    </div>
</div>

<div class="row mb-5">
    
    <div class="col-md-5 mb-4 mb-md-0">
        <div class="contact-card h-100">
            <h3 class="card-title mb-4">Get in Touch</h3>
            
            <div class="contact-item">
                <div class="icon-box">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-text">
                    <span class="label">Email</span>
                    <a href="mailto:sushil.sharma@uj.edu.pl" class="value">sushil.sharma@uj.edu.pl</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="icon-box">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-text">
                    <span class="label">Office Location</span>
                    <span class="value">Room: F-1-29</span>
                    <span class="value text-muted small">Dept. of Experimental Particle Physics</span>
                    <span class="value text-muted small">Jagiellonian University</span>
                </div>
            </div>

            <div class="contact-item">
                <div class="icon-box">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="contact-text">
                    <span class="label">Office Hours</span>
                    <span class="value">By appointment (please email)</span>
                </div>
            </div>

        </div>
    </div>

    <div class="col-md-7">
        <div class="map-container h-100">
            <iframe
                src="https://maps.google.com/maps?q=Faculty+of+Physics,+Astronomy+and+Applied+Computer+Science+Jagiellonian+University&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style="border:0; min-height: 350px; border-radius: 8px;"
                allowfullscreen=""
                loading="lazy">
            </iframe>
        </div>
    </div>

</div>

<hr>

<h3 class="mb-4 mt-4 text-center">Connect Online</h3>

<div class="row justify-content-center">
    
    <div class="col-6 col-md-3 mb-3">
        <a href="https://scholar.google.com/citations?user=1lsvWAcAAAAJ&hl=en" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="ai ai-google-scholar ai-3x social-icon scholar"></i>
                <span class="social-name">Google Scholar</span>
            </div>
        </a>
    </div>

    <div class="col-6 col-md-3 mb-3">
        <a href="https://www.linkedin.com/in/sushil-sharma-b68472b1/" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="fab fa-linkedin fa-3x social-icon linkedin"></i>
                <span class="social-name">LinkedIn</span>
            </div>
        </a>
    </div>

    <div class="col-6 col-md-3 mb-3">
        <a href="https://github.com/Dr-Sushil-Sharma/Dr-Sushil-Sharma.github.io" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="fab fa-github fa-3x social-icon github"></i>
                <span class="social-name">GitHub</span>
            </div>
        </a>
    </div>

    <div class="col-6 col-md-3 mb-3">
        <a href="https://www.facebook.com/sushil.sharma.uj" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="fab fa-facebook fa-3x social-icon facebook"></i>
                <span class="social-name">Facebook</span>
            </div>
        </a>
    </div>

</div>

<style>
/* === Contact Card Styling === */
.contact-card {
    padding: 2rem;
    background: #ffffff;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}
.card-title { font-weight: 700; margin-bottom: 1.5rem; }
.contact-item { display: flex; align-items: flex-start; margin-bottom: 1.5rem; }
.icon-box {
    width: 40px; height: 40px; display: flex; align-items: center; justify-content: center;
    background: #f8f9fa; border-radius: 50%; margin-right: 15px; color: var(--global-theme-color, #007bff);
}
.contact-text { display: flex; flex-direction: column; }
.label { font-size: 0.75rem; text-transform: uppercase; letter-spacing: 0.5px; color: #6c757d; font-weight: 600; margin-bottom: 2px; }
.value { font-size: 1rem; color: #212529; font-weight: 500; }
a.value:hover { text-decoration: underline; color: var(--global-theme-color, #007bff); }

/* === Map Styling === */
.map-container { overflow: hidden; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.03); border: 1px solid #e1e4e8; }

/* === Social Cards Styling === */
.social-card-link { text-decoration: none !important; }
.social-card {
    display: flex; flex-direction: column; align-items: center; justify-content: center;
    padding: 1.5rem; background: #fff; border: 1px solid #e1e4e8; border-radius: 8px;
    transition: all 0.2s ease; height: 100%;
}
.social-card:hover { transform: translateY(-5px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); border-color: var(--global-theme-color, #007bff); }
.social-icon { margin-bottom: 1rem; transition: color 0.2s; }
.social-name { font-weight: 600; color: #495057; }

/* Brand Colors on Hover */
.social-card:hover .scholar { color: #4285F4; }
.social-card:hover .linkedin { color: #0077b5; }
.social-card:hover .github { color: #333; }
.social-card:hover .facebook { color: #1877F2; }

/* === Dark Mode Adjustments === */
@media (prefers-color-scheme: dark) {
    .contact-card, .social-card { background: #2b2b2b; border-color: #444; }
    .icon-box { background: #3a3a3a; color: var(--global-theme-color, #66b0ff); }
    .value, .card-title, .social-name { color: #f8f9fa; }
    .label { color: #adb5bd; }
    .social-card:hover { background: #323232; }
    .map-container { border-color: #444; filter: grayscale(20%) invert(90%); }
    .social-card:hover .github { color: #fff; }
}
</style>

<hr class="my-5">

<div class="row">
    <div class="col-12 text-center">
        <h3 class="mb-2 font-weight-bold" style="font-family: 'Courier New', monospace;">SECURE CHANNEL</h3>
        <p class="text-muted small">
            <i class="fas fa-terminal"></i> Direct line encrypted. Align the quantum pathways to establish connection.
        </p>
    </div>
</div>

<div class="terminal-wrapper mt-3">
    <div class="scan-line"></div>
    
    <div class="terminal-screen" id="puzzle-screen">
        <div class="status-bar">
            <span>SYSTEM: OFFLINE</span>
            <span>ERROR: PATH_BLOCKED</span>
        </div>
        
        <div class="puzzle-grid" id="grid">
            </div>

        <div class="instruction">CLICK TILES TO ROTATE & CONNECT THE GREEN TO RED</div>
    </div>

    <div class="terminal-screen" id="success-screen" style="display: none;">
        <div class="matrix-bg"></div>
        <div class="success-content">
            <h2 class="access-granted">ACCESS GRANTED</h2>
            <p>Connection established securely.</p>
            <div class="revealed-email">
                <span id="typewriter-email"></span><span class="cursor">_</span>
            </div>
            <button class="btn btn-outline-success btn-sm mt-3" onclick="resetPuzzle()">RESET LINK</button>
        </div>
    </div>

</div>

<style>
/* === Retro Terminal Styling === */
.terminal-wrapper {
    position: relative;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    background: #0d1117;
    border: 2px solid #333;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 30px rgba(0, 255, 0, 0.05);
    font-family: 'Courier New', Courier, monospace;
}

.terminal-screen {
    padding: 20px;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle, #161b22 0%, #0d1117 100%);
}

/* CRT Scanline Effect */
.scan-line {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 5px;
    background: rgba(0, 255, 0, 0.1);
    animation: scan 3s linear infinite;
    pointer-events: none;
    z-index: 10;
}
@keyframes scan { 0% { top: -5%; } 100% { top: 105%; } }

/* Puzzle Grid */
.puzzle-grid {
    display: grid;
    grid-template-columns: repeat(5, 50px);
    grid-template-rows: repeat(5, 50px);
    gap: 5px;
    margin: 20px 0;
}

.tile {
    width: 50px; height: 50px;
    background: #21262d;
    border: 1px solid #30363d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s, background 0.3s;
}
.tile:hover { background: #30363d; }
.tile.active { box-shadow: 0 0 10px #00ff00; border-color: #00ff00; }

/* The "Pipes" / Beam paths */
.path {
    width: 100%; height: 100%;
    position: relative;
    pointer-events: none;
}
.path::before {
    content: ''; position: absolute;
    background: #444; transition: background 0.3s;
}
/* Pipe shapes: I is straight, L is corner (Right-Bottom by default) */
.shape-I::before { top: 22px; left: 0; width: 100%; height: 6px; } 
.shape-L::before { top: 22px; left: 22px; width: 28px; height: 6px; } 
.shape-L::after  { content: ''; position: absolute; top: 22px; left: 22px; width: 6px; height: 28px; background: #444; } 

/* Active Beam Color */
.tile.lit .path::before, .tile.lit .shape-L::after { background: #00ff00; box-shadow: 0 0 8px #00ff00; }

.status-bar {
    width: 100%;
    display: flex; justify-content: space-between;
    color: #ff4444; font-size: 0.8rem;
    border-bottom: 1px solid #333;
    padding-bottom: 5px;
}
.instruction { color: #8b949e; font-size: 0.7rem; margin-top: 10px; }

/* Success Screen */
.success-content { text-align: center; z-index: 2; color: #00ff00; }
.access-granted { font-size: 2rem; animation: blink 1s infinite; margin-bottom: 1rem; }
.revealed-email { font-size: 1.2rem; background: rgba(0, 255, 0, 0.1); padding: 10px 20px; border: 1px solid #00ff00; }
.cursor { animation: blink 1s infinite; }

@keyframes blink { 50% { opacity: 0; } }
</style>

<script>
// === PUZZLE LOGIC ===
const gridSize = 5;
const gridEl = document.getElementById('grid');
let grid = []; // Stores tile state

// Define the "Correct" path. 
// Path: (0,0)->(0,1)->(0,2)->(1,2)->(2,2)->(2,3)->(2,4)
const solutionPath = [
    {r:0, c:0, type:'I', correctRot: 0},  // Horizontal
    {r:0, c:1, type:'I', correctRot: 0},  // Horizontal
    {r:0, c:2, type:'L', correctRot: 90}, // Connects Left to Bottom
    {r:1, c:2, type:'I', correctRot: 90}, // Vertical
    {r:2, c:2, type:'L', correctRot: 270}, // Connects Top to Right
    {r:2, c:3, type:'I', correctRot: 0},  // Horizontal
    {r:2, c:4, type:'I', correctRot: 0}   // Horizontal
];

function initPuzzle() {
    gridEl.innerHTML = '';
    grid = [];
    
    // Fill Grid
    for(let r=0; r<gridSize; r++) {
        let row = [];
        for(let c=0; c<gridSize; c++) {
            // Check if this spot is part of the solution
            let sol = solutionPath.find(p => p.r === r && p.c === c);
            
            let type = sol ? sol.type : (Math.random() > 0.5 ? 'I' : 'L'); // Random noise tiles
            let rot = Math.floor(Math.random() * 4) * 90; // Random start rotation
            
            // Create DOM
            let tile = document.createElement('div');
            tile.className = 'tile';
            tile.onclick = () => rotateTile(r, c);
            
            let inner = document.createElement('div');
            inner.className = `path shape-${type}`;
            inner.style.transform = `rotate(${rot}deg)`;
            tile.appendChild(inner);
            
            gridEl.appendChild(tile);
            
            row.push({
                el: tile,
                inner: inner,
                type: type,
                rot: rot,
                isSol: !!sol,
                solRot: sol ? sol.correctRot : -1
            });
        }
        grid.push(row);
    }
    
    // Mark Start and End visually
    grid[0][0].el.style.borderLeft = "3px solid #00ff00"; // Source
    grid[2][4].el.style.borderRight = "3px solid #ff4444"; // Detector
    
    checkConnection();
}

function rotateTile(r, c) {
    let tile = grid[r][c];
    tile.rot = (tile.rot + 90) % 360;
    tile.inner.style.transform = `rotate(${tile.rot}deg)`;
    checkConnection();
}

function checkConnection() {
    let connected = true;
    
    // 1. Reset all lights
    grid.flat().forEach(t => t.el.classList.remove('lit'));
    
    // 2. Check solution path sequence
    for(let i=0; i<solutionPath.length; i++) {
        let p = solutionPath[i];
        let tile = grid[p.r][p.c];
        
        // Allow equivalent rotations for 'I' shape (0 == 180, 90 == 270)
        let current = tile.rot;
        let target = p.correctRot;
        let isCorrect = false;
        
        if (tile.type === 'I') {
            isCorrect = (current % 180) === (target % 180);
        } else { // L shape
            isCorrect = current === target;
        }
        
        if(isCorrect) {
            tile.el.classList.add('lit');
        } else {
            connected = false;
            break; // Stop beam here
        }
    }
    
    if(connected) {
        grid[2][4].el.style.borderRight = "3px solid #00ff00"; // Detector Green
        setTimeout(unlockTerminal, 500);
    } else {
        grid[2][4].el.style.borderRight = "3px solid #ff4444"; // Detector Red
    }
}

function unlockTerminal() {
    document.getElementById('puzzle-screen').style.display = 'none';
    document.getElementById('success-screen').style.display = 'flex';
    typeWriter("sushil.sharma@uj.edu.pl");
}

function typeWriter(text) {
    let i = 0;
    let elem = document.getElementById("typewriter-email");
    elem.innerHTML = "";
    function type() {
        if (i < text.length) {
            elem.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    type();
}

function resetPuzzle() {
    document.getElementById('success-screen').style.display = 'none';
    document.getElementById('puzzle-screen').style.display = 'flex';
    initPuzzle();
}

// Start
initPuzzle();
</script>
