const canvas = document.getElementById('orbitCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const coreRadius = 30;

// Resize canvas
function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas(); 

// The "Professor" / Core
const core = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    color: '#ffc107',
    pulse: 0
};

// Student Particle Class
class Student {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.radius = Math.random() * 3 + 2;
        this.color = `hsl(${Math.random() * 60 + 180}, 100%, 70%)`; // Cyans and Blues
        
        // Physics: Velocity
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        
        // Trail
        this.history = [];
    }

    update() {
        // Calculate distance to core
        const dx = core.x - this.x;
        const dy = core.y - this.y;
        const dist = Math.sqrt(dx*dx + dy*dy);

        // GRAVITY: Accelerate towards the core (Mentorship influence)
        if(dist > coreRadius) {
            const force = 500 / (dist * dist); 
            this.vx += (dx / dist) * force;
            this.vy += (dy / dist) * force;
        }

        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off walls or reset if lost in space
        if(this.x < 0 || this.x > canvas.width) this.vx *= -0.9;
        if(this.y < 0 || this.y > canvas.height) this.vy *= -0.9;

        // Store history for trails
        this.history.push({x: this.x, y: this.y});
        if(this.history.length > 20) this.history.shift();
    }

    draw() {
        // Draw Trail
        ctx.beginPath();
        for(let i = 0; i < this.history.length; i++) {
            ctx.lineTo(this.history[i].x, this.history[i].y);
        }
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 0.5;
        ctx.stroke();

        // Draw Particle
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = "#fff";
        ctx.fill();
    }
}

// Click to add students
canvas.addEventListener('click', function(e) {
    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Spawn 3 students
    for(let i=0; i<3; i++) {
        particles.push(new Student(x + Math.random()*10, y + Math.random()*10));
    }
});

// Initial Population
for(let i=0; i<5; i++) {
    particles.push(new Student(Math.random()*canvas.width, Math.random()*canvas.height));
}

function animate() {
    // Fading background for trail effect
    ctx.fillStyle = 'rgba(15, 32, 39, 0.2)'; 
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Update Core Position
    core.x = canvas.width / 2;
    core.y = canvas.height / 2;

    // Draw Core (You)
    core.pulse += 0.05;
    const pulseSize = coreRadius + Math.sin(core.pulse) * 5;
    
    ctx.beginPath();
    ctx.arc(core.x, core.y, pulseSize, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(255, 193, 7, 0.3)'; // Glow
    ctx.fill();

    ctx.beginPath();
    ctx.arc(core.x, core.y, coreRadius/2, 0, Math.PI * 2);
    ctx.fillStyle = core.color; // Solid center
    ctx.fill();

    // Update & Draw Students
    particles.forEach(p => {
        p.update();
        p.draw();
    });

    requestAnimationFrame(animate);
}

animate();
