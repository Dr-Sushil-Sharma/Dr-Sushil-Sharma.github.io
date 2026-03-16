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
