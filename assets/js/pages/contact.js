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
