---
layout: page
title: "Personal"
permalink: /personal/
description: "A glimplse of my personal life."
nav: true
nav_order: 8
---

<style>
  .post-header { display: none !important; }
  .page-content { padding: 0 !important; width: 100%; max-width: 100%; }
</style>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Dancing+Script:wght@700&family=Montserrat:wght@300;500&display=swap" rel="stylesheet">

<style>
/* === INTRO SECTION STYLES === */
.intro-text h2 {
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    font-size: 3rem;
}
.intro-text .lead {
    font-family: 'Playfair Display', serif;
    font-style: italic;
    font-size: 1.5rem;
}
.highlight-name {
    font-family: 'Dancing Script', cursive;
    font-size: 1.8rem;
    color: var(--global-theme-color, #007bff);
    font-weight: bold;
    padding: 0 5px;
}
@keyframes heartbeat {
  0% { transform: scale(1); }
  15% { transform: scale(1.3); }
  30% { transform: scale(1); }
  45% { transform: scale(1.15); }
  60% { transform: scale(1); }
}
.animated-heart {
  animation: heartbeat 2s infinite;
  color: #d63384; 
}

/* === 3D SCENE CONTAINER === */
#drag-container {
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  /* Centering Logic */
  align-items: center;
  justify-content: center;
  
  width: 100%;
  height: 900px; /* Increased height to prevent clipping */
  perspective: 1500px;
  overflow: hidden;
  background: radial-gradient(circle at center, #1a1a2e 0%, #000 100%);
  border-radius: 12px;
  cursor: grab;
  margin-bottom: 50px;
}

#drag-container:active {
  cursor: grabbing;
}

/* === THE SPINNING RING === */
#spin-container {
  position: relative;
  display: flex;
  margin: auto;
  transform-style: preserve-3d;
  width: 300px; /* Match imgWidth */
  height: 420px; /* Match imgHeight */
  /* top: 15%;  <-- REMOVED THIS so it stays centered */
  animation: spinRevert 100s infinite linear;
}

/* === PHOTOS === */
#spin-container img {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  object-fit: cover;
  -webkit-box-reflect: below 15px linear-gradient(transparent, transparent, rgba(0,0,0,0.4));
  transition: transform 0.5s ease, border-color 0.3s;
  border: 4px solid white;
}

#spin-container img:hover {
  box-shadow: 0 0 40px rgba(0, 123, 255, 0.9);
  border-color: #007bff;
  transform: scale(1.05) translateY(-10px);
}

/* === CENTER TEXT === */
#spin-container p {
  font-family: 'Dancing Script', cursive;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  color: #fff;
  font-size: 4rem;
  font-weight: bold;
  text-align: center;
  text-shadow: 0 0 15px #ff0055, 0 0 30px #ff0055;
  white-space: nowrap;
  margin-top: 50px;
}

/* === GROUND EFFECT === */
#ground {
  width: 1400px;
  height: 1400px;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%, -50%) rotateX(90deg);
  background: -webkit-radial-gradient(center center, farthest-side , rgba(255,255,255,0.1), transparent);
}

/* === ANIMATIONS === */
@keyframes spin {
  from{ transform: rotateY(0deg); }
  to{ transform: rotateY(360deg); }
}
@keyframes spinRevert {
  from{ transform: rotateY(360deg); }
  to{ transform: rotateY(0deg); }
}

/* === OVERLAY TEXT === */
.overlay-info {
    position: absolute;
    bottom: 30px;
    left: 30px;
    color: rgba(255,255,255,0.6);
    font-family: 'Montserrat', sans-serif;
    pointer-events: none;
    z-index: 100;
}

/* === FOCUS MODAL === */
.focus-modal {
    position: fixed;
    top: 0; left: 0; width: 100%; height: 100%;
    background: rgba(0,0,0,0.95);
    z-index: 9999;
    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.focus-modal img {
    max-height: 85vh;
    max-width: 90vw;
    border: 5px solid #fff;
    border-radius: 8px;
    box-shadow: 0 0 60px rgba(255,255,255,0.2);
}
.close-btn {
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    margin-top: 20px;
    font-family: sans-serif;
    border: 1px solid #fff;
    padding: 8px 30px;
    border-radius: 50px;
    transition: 0.3s;
}
.close-btn:hover { background: #fff; color: #000; }

/* Dark Mode Override */
@media (prefers-color-scheme: light) {
    #drag-container { background: radial-gradient(circle at center, #222 0%, #000 100%); }
}
</style>

<div class="row mb-5 intro-text">
    <div class="col-12 text-center">
        <h2>My World</h2>
        <div class="mt-3 mb-4">
            <i class="fas fa-heart animated-heart fa-2x"></i>
        </div>
        <p class="lead text-muted">
            "Physics explains the universe, but my family gives it meaning."
        </p>
        <p class="mt-3" style="font-size: 1.2rem;">
            Dedicated to my beloved wife <span class="highlight-name">Neha</span> and our wonderful daughter <span class="highlight-name">Ananya (Alicia)</span>.
        </p>
    </div>
</div>

<hr class="mb-5">

<div id="drag-container">
  <div id="spin-container">
    
    <img src="{{ '/assets/img/Personal/1.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/2.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/3.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/4.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/5.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/6.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/7.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/8.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/9.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">
    <img src="{{ '/assets/img/Personal/10.jpg' | relative_url }}" onclick="openFocus(this.src)" alt="">

    <p>Neha & Mikkad</p>

  </div>
  <div id="ground"></div>
  
  <div class="overlay-info">
      <h2 style="color: #fff; font-family: 'Playfair Display'; margin:0;">My Universe</h2>
      <small><i class="fas fa-hand-rock"></i> Drag to Rotate &nbsp;|&nbsp; <i class="fas fa-mouse-pointer"></i> Click to Focus</small>
  </div>
</div>

<div class="focus-modal" id="focusModal">
    <img src="" id="focusImg">
    <div class="close-btn" onclick="closeFocus()">Close Memory</div>
</div>

<script>
/* =========================================
   3D CAROUSEL LOGIC
   ========================================= */
var radius = 550; 
var autoRotate = true; 
var rotateSpeed = -60; 
var imgWidth = 300; 
var imgHeight = 420; 

setTimeout(init, 100);

var odrag = document.getElementById('drag-container');
var ospin = document.getElementById('spin-container');
var aImg = ospin.getElementsByTagName('img');
var aEle = [...aImg]; 

// Apply sizes
ospin.style.width = imgWidth + "px";
ospin.style.height = imgHeight + "px";

var ground = document.getElementById('ground');
ground.style.width = radius * 3 + "px";
ground.style.height = radius * 3 + "px";

function init(delayTime) {
  for (var i = 0; i < aEle.length; i++) {
    aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
    aEle[i].style.transition = "transform 1s";
    aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
  }
}

function applyTranform(obj) {
  if(tY > 180) tY = 180;
  if(tY < 0) tY = 0;
  obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
}

function playSpin(yes) {
  ospin.style.animationPlayState = (yes?'running':'paused');
}

var sX, sY, nX, nY, desX = 0,
    desY = 0,
    tX = 0,
    tY = 0; // Starts flat and centered

// Auto Spin Logic
if (autoRotate) {
  var animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
  ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
}

// Mouse/Touch Drag Logic
document.onpointerdown = function (e) {
  clearInterval(odrag.timer);
  e = e || window.event;
  var sX = e.clientX,
      sY = e.clientY;

  this.onpointermove = function (e) {
    e = e || window.event;
    var nX = e.clientX,
        nY = e.clientY;
    desX = nX - sX;
    desY = nY - sY;
    tX += desX * 0.1;
    tY += desY * 0.1;
    applyTranform(odrag);
    sX = nX;
    sY = nY;
  };

  this.onpointerup = function (e) {
    odrag.timer = setInterval(function () {
      desX *= 0.95;
      desY *= 0.95;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      playSpin(false);
      if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
        clearInterval(odrag.timer);
        playSpin(true);
      }
    }, 17);
    this.onpointermove = this.onpointerup = null;
  };

  return false;
};

// Zoom / Scroll logic
document.onmousewheel = function(e) {
  e = e || window.event;
  var d = e.wheelDelta / 20 || -e.detail;
  radius += d;
  init(1);
};

/* =========================================
   LIGHTBOX LOGIC
   ========================================= */
function openFocus(src) {
    document.getElementById('focusImg').src = src;
    document.getElementById('focusModal').style.display = 'flex';
}

function closeFocus() {
    document.getElementById('focusModal').style.display = 'none';
}
</script>
