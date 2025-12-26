---
layout: page
title: Projects
permalink: /project/
nav: true
nav_order: 6
---

<style>
  .post-header { display: none !important; }
</style>

<style>
  /* Gradient Text for Title */
  .gradient-text {
    background: -webkit-linear-gradient(45deg, #007bff, #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Card Hover Effects */
  .feature-card {
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    background: var(--global-card-bg-color); /* Adapts to theme */
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
  }

  /* Timeline styling for Description */
  .phase-block {
    border-left: 4px solid #e9ecef;
    padding-left: 2rem;
    position: relative;
    margin-bottom: 2rem;
  }
  
  .phase-block:hover {
    border-left-color: #007bff;
  }

  .phase-icon {
    position: absolute;
    left: -1.6rem;
    top: 0;
    background: white; /* Match page bg */
    padding: 5px 0;
  }
  
  /* Dark mode adjustment for phase icon background */
  @media (prefers-color-scheme: dark) {
    .phase-icon { background: #121212; }
  }
</style>

<div class="container">
  
  <div class="row mb-5 align-items-center">
    <div class="col-md-12 text-center">
      <h1 class="display-4 font-weight-bold gradient-text">Gravitational Behavior of Positronium</h1>
      <p class="lead mt-3">Probing the fundamental interaction between matter and antimatter.</p>
      
      <div class="mt-4">
        <span class="badge badge-pill badge-light border p-2 mr-2">
          <i class="fas fa-fingerprint text-muted mr-1"></i> 2023/50/E/ST2/00574
        </span>
        <span class="badge badge-pill badge-light border p-2">
          <i class="fas fa-user-circle text-muted mr-1"></i> PI: Dr. Sushil Sharma
        </span>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm feature-card">
        <div class="card-body text-center p-4">
          <div class="mb-3">
            <span class="fa-stack fa-2x">
              <i class="fas fa-circle fa-stack-2x text-primary opacity-25" style="opacity: 0.2;"></i>
              <i class="fas fa-bullseye fa-stack-1x text-primary"></i>
            </span>
          </div>
          <h4 class="card-title font-weight-bold">Project Aim</h4>
          <p class="card-text text-muted">To measure the effect of Earth's gravitational force on the positronium atom (Ps) by extending its lifetime via Rydberg excitation and observing its fall.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm feature-card">
        <div class="card-body text-center p-4">
          <div class="mb-3">
            <span class="fa-stack fa-2x">
              <i class="fas fa-circle fa-stack-2x text-success opacity-25" style="opacity: 0.2;"></i>
              <i class="fas fa-question fa-stack-1x text-success"></i>
            </span>
          </div>
          <h4 class="card-title font-weight-bold">Motivation</h4>
          <p class="card-text text-muted">Addressing the century-old mystery: Does antimatter fall like matter? This project pioneers Ps as an alternative to antihydrogen for testing the Weak Equivalence Principle.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm feature-card">
        <div class="card-body text-center p-4">
          <div class="mb-3">
            <span class="fa-stack fa-2x">
              <i class="fas fa-circle fa-stack-2x text-info opacity-25" style="opacity: 0.2;"></i>
              <i class="fas fa-cogs fa-stack-1x text-info"></i>
            </span>
          </div>
          <h4 class="card-title font-weight-bold">Methodology</h4>
          <p class="card-text text-muted">A dual approach using laser manipulation for long-lived Ps atoms and a J-PET based detection system to reconstruct annihilation vertices with high precision.</p>
        </div>
      </div>
    </div>

  </div>

  <hr class="my-5">

  <div class="row">
    <div class="col-12 text-center mb-4">
      <h3>Experimental Approach</h3>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="phase-block">
        <div class="phase-icon"><i class="fas fa-wave-square fa-2x text-primary"></i></div>
        <h4 class="text-primary">Phase I: Interferometry</h4>
        <p class="text-justify">
          In the first phase, Ps atoms will be created in the <strong>PsICO positron beam</strong> at AML. We employ laser cooling and excitation to a metastable Rydberg state, extending the lifetime significantly. 
        </p>
        <p class="text-justify">
          A deflectometer/interferometer system consisting of <strong>three equally spaced gratings</strong> will measure the inertial forces. The first two gratings create a fringe pattern on the third. This pattern is scanned with sub-nanometer accuracy using a piezo nanopositioning system. By comparing annihilation probabilities on the stopper versus the grating, we determine the strength of the gravitational force.
        </p>
      </div>
    </div>

    <div class="col-md-6">
      <div class="phase-block">
        <div class="phase-icon"><i class="fas fa-microchip fa-2x text-info"></i></div>
        <h4 class="text-info">Phase II: Detection</h4>
        <p class="text-justify">
          The second phase involves a sophisticated detection system to reconstruct the vertices of Ps atoms annihilating at the grating or stopper.
        </p>
        <p class="text-justify">
          We will construct <strong>four modular detection units</strong> leveraging the expertise of the <a href="http://koza.if.uj.edu.pl/" target="_blank">J-PET collaboration</a>. Each unit consists of multiple plastic scintillators read out by Silicon Photomultipliers (SiPMs). Signal acquisition is entirely <strong>FPGA-based</strong>, capable of handling high count rates, allowing us to separately register annihilation photons from the grating and the stopper.
        </p>
      </div>
    </div>

  </div>

  <div class="row mt-5">
    <div class="col-12">
      <div class="bg-body shadow-sm rounded p-5">
        <div class="row align-items-center">
          <div class="col-md-2 text-center">
            <i class="fas fa-rocket fa-4x text-warning mb-3 mb-md-0"></i>
          </div>
          <div class="col-md-10">
            <h4 class="fw-bold">Expected Impact</h4>
            <p class="mb-0">
              This project aims to provide the <strong>first direct measurement</strong>
              of the gravitational effect on positronium. By combining laser physics,
              particle detection, and digital signal processing, this facility will pave
              the way for new tests of fundamental physics in the pure leptonic sector,
              offering insights into the nature of gravity and the matter–antimatter balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>

<hr class="my-5">

<div class="row">
    <div class="col-12 text-center">
        <h3 class="mb-2 font-weight-bold gradient-text">The Virtual Laboratory</h3>
        <p class="text-muted">
            Simulate the experiment. Control the <strong>Laser Excitation</strong> and the unknown <strong>Antimatter Gravity ($\bar{g}$)</strong> to see how Positronium behaves in the beamline.
        </p>
    </div>
</div>

<div class="sim-wrapper mt-3">
    <canvas id="simCanvas"></canvas>
    
    <div class="sim-hud">
        <div class="hud-item">
            <span class="hud-label">Beam Status</span>
            <span class="hud-value" id="hudStatus">STANDBY</span>
        </div>
        <div class="hud-item">
            <span class="hud-label">Deflection ($\Delta y$)</span>
            <span class="hud-value" id="hudDeflection">0.00 nm</span>
        </div>
    </div>

    <div class="sim-controls">

        <div class="control-group">
            <label><i class="fas fa-bolt text-warning"></i> Rydberg Laser</label>
            <div class="btn-group btn-group-sm w-100">
                <button class="btn btn-outline-light active" onclick="setLaser(false)" id="btnLaserOff">OFF</button>
                <button class="btn btn-outline-warning" onclick="setLaser(true)" id="btnLaserOn">ON</button>
            </div>
            <small class="text-muted mt-1 d-block" style="font-size: 0.7rem;">Extends Ps lifetime</small>
        </div>

        <div class="control-group">
            <label><i class="fas fa-globe-americas text-info"></i> Antimatter Gravity ($\bar{g}$)</label>
            <input type="range" class="custom-range" id="gravityRange" min="-1" max="1" step="0.1" value="1" oninput="updateGravity(this.value)">
            <div class="d-flex justify-content-between text-white small">
                <span>-1g (Up)</span>
                <span id="gValue">1.0g</span>
                <span>1g (Down)</span>
            </div>
        </div>

        <div class="control-group">
            <button class="btn btn-primary w-100 py-2" onclick="firePulse()">
                <i class="fas fa-play"></i> Fire Pulse
            </button>
        </div>

    </div>

</div>

<style>
/* === Simulator Container === */
.sim-wrapper {
    position: relative;
    width: 100%;
    height: 500px;
    background: #0b0c10; /* Dark vacuum chamber */
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #333;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

canvas {
    display: block;
    width: 100%;
    height: 100%;
}

/* === HUD === */
.sim-hud {
    position: absolute;
    top: 20px;
    left: 20px;
    display: flex;
    gap: 20px;
    pointer-events: none;
}
.hud-item {
    background: rgba(31, 40, 51, 0.9);
    border: 1px solid #45a29e;
    padding: 10px 15px;
    border-radius: 4px;
    color: #66fcf1;
    font-family: 'Courier New', monospace;
    min-width: 140px;
}
.hud-label { display: block; font-size: 0.7rem; opacity: 0.7; text-transform: uppercase; }
.hud-value { display: block; font-size: 1.1rem; font-weight: bold; }

/* === Controls Panel === */
.sim-controls {
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(31, 40, 51, 0.95);
    border: 1px solid #666;
    padding: 15px 25px;
    border-radius: 50px;
    display: flex;
    gap: 30px;
    align-items: center;
    backdrop-filter: blur(5px);
    width: 90%;
    max-width: 700px;
    justify-content: space-around;
}

.control-group {
    flex: 1;
    color: #fff;
}
.control-group label {
    font-size: 0.85rem;
    font-weight: 600;
    margin-bottom: 5px;
    display: block;
}

/* Range Slider Styling */
.custom-range {
    -webkit-appearance: none;
    width: 100%;
    height: 6px;
    background: #444;
    border-radius: 5px;
    outline: none;
}
.custom-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: #007bff;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 123, 255, 0.8);
}

/* Mobile Tweaks */
@media (max-width: 768px) {
    .sim-controls {
        flex-direction: column;
        border-radius: 12px;
        bottom: 10px;
        gap: 15px;
        padding: 15px;
    }
    .hud-item { min-width: auto; }
}
</style>

<script>
const canvas = document.getElementById('simCanvas');
const ctx = canvas.getContext('2d');

let width, height;
let particles = [];
let explosions = [];

// Experiment State
let gravityMultiplier = 1.0; // 1g = normal matter
let isLaserOn = false;
let isFiring = false;

// Config
const BEAM_SPEED = 8;
const BASE_GRAVITY = 0.15; // Visual gravity constant
const LIFETIME_SHORT = 40; // Frames before annihilation (Ground state)
const LIFETIME_LONG = 400; // Frames (Rydberg state)

// --- RESIZE ---
function resize() {
    width = canvas.parentElement.clientWidth;
    height = canvas.parentElement.clientHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

// --- CONTROLS ---
function updateGravity(val) {
    gravityMultiplier = parseFloat(val);
    document.getElementById('gValue').innerText = gravityMultiplier.toFixed(1) + "g";
}

function setLaser(state) {
    isLaserOn = state;
    document.getElementById('btnLaserOn').classList.toggle('active', state);
    document.getElementById('btnLaserOff').classList.toggle('active', !state);
    
    // Visual Laser Effect
    const laserColor = state ? "rgba(255, 193, 7, 0.2)" : "rgba(50, 50, 50, 0.1)";
}

function firePulse() {
    if(isFiring) return;
    isFiring = true;
    document.getElementById('hudStatus').innerText = "PULSE FIRED";
    document.getElementById('hudStatus').style.color = "#ffc107";
    document.getElementById('hudDeflection').innerText = "...";

    // Spawn 50 particles
    let count = 0;
    const interval = setInterval(() => {
        spawnParticle();
        count++;
        if(count > 40) {
            clearInterval(interval);
            isFiring = false;
            setTimeout(() => {
                 document.getElementById('hudStatus').innerText = "STANDBY";
                 document.getElementById('hudStatus').style.color = "#66fcf1";
            }, 1000);
        }
    }, 20);
}

function spawnParticle() {
    particles.push({
        x: 50,
        y: height / 2 + (Math.random() - 0.5) * 10,
        vx: BEAM_SPEED + (Math.random() - 0.5),
        vy: (Math.random() - 0.5) * 0.5,
        life: 0,
        maxLife: isLaserOn ? LIFETIME_LONG : LIFETIME_SHORT, // Key physics logic
        isRydberg: false,
        color: '#fff'
    });
}

// --- PHYSICS & RENDER ---
function drawEnvironment() {
    // 1. Source (Left)
    ctx.fillStyle = "#333";
    ctx.fillRect(0, height/2 - 25, 40, 50);
    ctx.fillStyle = "#666"; // Nozzle
    ctx.fillRect(40, height/2 - 10, 10, 20);

    // 2. Laser Zone
    if (isLaserOn) {
        let grad = ctx.createLinearGradient(60, 0, 300, 0);
        grad.addColorStop(0, "rgba(255, 193, 7, 0)");
        grad.addColorStop(0.5, "rgba(255, 193, 7, 0.15)");
        grad.addColorStop(1, "rgba(255, 193, 7, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(60, 0, 240, height);
        
        ctx.font = "12px Arial";
        ctx.fillStyle = "rgba(255, 193, 7, 0.8)";
        ctx.fillText("RYDBERG EXCITATION ZONE", 80, height - 20);
    }

    // 3. Gratings (The Interferometer)
    ctx.fillStyle = "#45a29e";
    for(let x of [400, 600]) {
        // Draw dashed lines representing gratings
        for(let y=0; y<height; y+=20) {
            ctx.fillRect(x, y, 4, 10);
        }
    }

    // 4. Detector (Right Wall)
    ctx.fillStyle = "#1f2833";
    ctx.fillRect(width - 40, 0, 40, height);
    // Detector Grid
    ctx.strokeStyle = "#45a29e";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width - 40, 0);
    ctx.lineTo(width - 40, height);
    ctx.stroke();
}

function updateParticles() {
    // Laser Zone Boundary
    const laserStart = 60;
    const laserEnd = 300;

    for (let i = particles.length - 1; i >= 0; i--) {
        let p = particles[i];
        
        // Physics
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Laser Interaction
        if (isLaserOn && p.x > laserStart && p.x < laserEnd && !p.isRydberg) {
            p.isRydberg = true;
            p.color = "#ffc107"; // Turn Gold
            p.maxLife = LIFETIME_LONG; // Extend life
        }

        // Gravity Effect (Only applies after gratings for visualization)
        if (p.x > 300) {
            p.vy += BASE_GRAVITY * gravityMultiplier;
        }

        // 1. Check Death (Annihilation in flight)
        if (p.life > p.maxLife) {
            explode(p.x, p.y, "rgba(255, 255, 255, 0.5)"); // Fade out
            particles.splice(i, 1);
            continue;
        }

        // 2. Check Detector Hit
        if (p.x >= width - 40) {
            let deflection = (p.y - height/2);
            // Invert visually if gravity is inverted
            updateHUD(deflection); 
            explode(width - 40, p.y, p.color, true); // Big hit
            particles.splice(i, 1);
            continue;
        }

        // 3. Check Wall Hit (Top/Bottom)
        if (p.y < 0 || p.y > height) {
            particles.splice(i, 1);
            continue;
        }

        // Draw Particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, 2, 0, Math.PI*2);
        ctx.fillStyle = p.color;
        ctx.fill();
        
        // Trail
        ctx.fillStyle = "rgba(255,255,255,0.1)";
        ctx.fillRect(p.x - 10, p.y, 10, 1);
    }
}

function explode(x, y, color, isHit = false) {
    explosions.push({
        x: x, y: y,
        radius: 1,
        color: color,
        alpha: 1,
        isHit: isHit
    });
}

function updateExplosions() {
    for (let i = explosions.length - 1; i >= 0; i--) {
        let e = explosions[i];
        e.radius += e.isHit ? 2 : 0.5;
        e.alpha -= 0.05;

        if (e.alpha <= 0) {
            explosions.splice(i, 1);
            continue;
        }

        ctx.beginPath();
        ctx.arc(e.x, e.y, e.radius, 0, Math.PI*2);
        ctx.fillStyle = e.color;
        ctx.globalAlpha = e.alpha;
        ctx.fill();
        ctx.globalAlpha = 1;
        
        // J-PET Ring Effect on Hit
        if(e.isHit) {
            ctx.strokeStyle = "#45a29e";
            ctx.beginPath();
            ctx.arc(e.x, e.y, e.radius * 1.5, 0, Math.PI*2);
            ctx.stroke();
        }
    }
}

let avgDeflection = 0;
let hitCount = 0;

function updateHUD(deflection) {
    if(!isFiring) { avgDeflection = 0; hitCount = 0; return; }
    
    // Accumulate average for smooth reading
    avgDeflection = (avgDeflection * hitCount + deflection) / (hitCount + 1);
    hitCount++;
    
    // Scale for display (pixels to pseudo-nanometers)
    let displayVal = (avgDeflection * 10).toFixed(2); 
    document.getElementById('hudDeflection').innerText = displayVal + " nm";
    
    if(displayVal > 50) document.getElementById('hudDeflection').style.color = "#ff4444"; // Falling
    else if(displayVal < -50) document.getElementById('hudDeflection').style.color = "#ff4444"; // Antigravity
    else document.getElementById('hudDeflection').style.color = "#66fcf1";
}

// --- MAIN LOOP ---
function animate() {
    ctx.fillStyle = "#0b0c10";
    ctx.fillRect(0, 0, width, height);

    drawEnvironment();
    updateParticles();
    updateExplosions();

    requestAnimationFrame(animate);
}

animate();
</script>
