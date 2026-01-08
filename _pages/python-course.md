---
layout: page
title: Python for Beginners
permalink: /teaching/python/
description: "From Zero to Hero: A comprehensive guide to Python programming for physicists and engineers."
nav: false
---

<style>
  .post-header { display: none !important; }
  
  /* --- LOGIN SCREEN STYLES --- */
  #login-overlay {
    position: fixed; top: 0; left: 0; width: 100%; height: 100%;
    background: #121212; z-index: 9999;
    display: flex; justify-content: center; align-items: center; flex-direction: column;
  }
  .login-box {
    background: #1e1e1e; padding: 2.5rem; border-radius: 12px;
    box-shadow: 0 15px 40px rgba(0,0,0,0.6); text-align: center;
    border: 1px solid #333; width: 90%; max-width: 420px;
  }
  .login-input-group {
    position: relative;
    margin: 20px 0 10px 0;
  }
  .login-input {
    width: 100%; padding: 12px 45px 12px 15px; /* Extra right padding for the eye icon */
    border-radius: 6px; border: 1px solid #444;
    background: #2b2b2b; color: #fff; font-size: 1.1rem;
    outline: none; transition: border-color 0.3s;
  }
  .login-input:focus { border-color: #007bff; }
  
  /* Show Password Toggle Styling */
  .toggle-password {
    position: absolute; right: 15px; top: 50%;
    transform: translateY(-50%); cursor: pointer;
    color: #888; font-size: 0.9rem; user-select: none;
  }
  .toggle-password:hover { color: #fff; }

  .login-btn {
    width: 100%; padding: 12px; border-radius: 6px; border: none;
    background: #007bff; color: white; font-weight: bold; font-size: 1rem;
    cursor: pointer; transition: background 0.2s, transform 0.1s;
    margin-top: 10px;
  }
  .login-btn:hover { background: #0056b3; }
  .login-btn:active { transform: scale(0.98); }

  .error-msg { 
    color: #ff5f56; font-size: 0.9rem; margin-top: 15px; 
    display: none; line-height: 1.5; background: rgba(255, 95, 86, 0.1);
    padding: 10px; border-radius: 4px; border: 1px solid rgba(255, 95, 86, 0.2);
  }
  .contact-link { color: #ff5f56; text-decoration: underline; font-weight: bold; }
</style>

<div id="login-overlay">
    <div class="login-box">
        <h2 style="color: #fff; margin-bottom: 0.5rem; font-weight: 700;">Restricted Access</h2>
        <p style="color: #aaa; font-size: 0.95rem; margin-bottom: 1.5rem;">
            <i class="fas fa-lock text-primary mr-1"></i> 
            Please enter the course password.
        </p>
        
        <div class="login-input-group">
            <input type="password" id="passwordInput" class="login-input" placeholder="Password" onkeyup="if(event.key==='Enter') verifyPassword()">
            <span class="toggle-password" onclick="togglePasswordVisibility()">
                <i class="fas fa-eye" id="eyeIcon"></i>
            </span>
        </div>

        <button class="login-btn" onclick="verifyPassword()">Unlock Course Materials</button>
        
        <div id="errorMsg" class="error-msg">
            <strong>Incorrect Password.</strong><br>
            Please contact:<br> 
            <a href="mailto:sushil.sharma@uj.edu.pl" class="contact-link">sushil.sharma@uj.edu.pl</a>
        </div>
    </div>
</div>

<div id="protected-content" style="display:none;">

    <link href="https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">

    <div class="course-header mb-5">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h1 class="display-4 font-weight-bold gradient-text">Python for Beginners</h1>
                <p class="lead text-muted mt-3">
                    A structured journey from "Hello World" to scientific computing. 
                    Access lectures, code snippets, and solutions directly from the repository.
                </p>
                <div class="mt-4">
                    <a href="#syllabus" class="btn btn-primary btn-lg px-4 mr-2 rounded-pill shadow-sm">Start Learning</a>
                    <a href="https://github.com/Official-Satyam-Tiwari/PythonCourseForBeginners" target="_blank" class="btn btn-outline-secondary btn-lg px-4 rounded-pill">
                        <i class="fab fa-github"></i> GitHub Repo
                    </a>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="terminal-window shadow-lg">
                    <div class="terminal-bar">
                        <div class="dot red"></div>
                        <div class="dot yellow"></div>
                        <div class="dot green"></div>
                        <span class="terminal-title">python3 — interactive</span>
                    </div>
                    <div class="terminal-body">
                        <div id="typewriter-code"></div>
                        <span class="cursor">_</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <hr class="my-5">

    <div class="row mb-5">
        <div class="col-12 text-center mb-4">
            <h3 class="font-weight-bold">Course Materials</h3>
            <p class="text-muted">Everything you need to succeed.</p>
        </div>
        
        <div class="col-md-4 mb-3">
            <div class="resource-card shadow-sm">
                <div class="res-icon bg-light-primary text-primary"><i class="fas fa-file-pdf"></i></div>
                <div class="res-info">
                    <h5>Lecture Notes</h5>
                    <p>Comprehensive PDFs</p>
                </div>
                <a href="https://github.com/Official-Satyam-Tiwari/PythonCourseForBeginners" class="res-btn"><i class="fas fa-download"></i></a>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="resource-card shadow-sm">
                <div class="res-icon bg-light-success text-success"><i class="fas fa-code"></i></div>
                <div class="res-info">
                    <h5>Code Examples</h5>
                    <p>.py and .ipynb files</p>
                </div>
                <a href="https://github.com/Official-Satyam-Tiwari/PythonCourseForBeginners" class="res-btn"><i class="fas fa-external-link-alt"></i></a>
            </div>
        </div>

        <div class="col-md-4 mb-3">
            <div class="resource-card shadow-sm">
                <div class="res-icon bg-light-warning text-warning"><i class="fas fa-check-circle"></i></div>
                <div class="res-info">
                    <h5>Solutions</h5>
                    <p>Verify your answers</p>
                </div>
                <a href="https://github.com/Official-Satyam-Tiwari/PythonCourseForBeginners" class="res-btn"><i class="fas fa-lock-open"></i></a>
            </div>
        </div>
    </div>

    <div class="row" id="syllabus">
        <div class="col-12">
            <h3 class="font-weight-bold mb-4">Course Syllabus</h3>
            
            <div class="timeline">
                
                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="mb-0 font-weight-bold text-primary">01. Introduction & Basics</h5>
                            <span class="badge badge-light border">Week 1</span>
                        </div>
                        <p class="text-muted mb-3">Setting up the environment (Anaconda, Jupyter). Variables, Data Types (int, float, string), and basic Input/Output.</p>
                        <ul class="topic-list">
                            <li><i class="fas fa-check small text-success mr-2"></i>Installation</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Hello World</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Variables</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="mb-0 font-weight-bold text-primary">02. Control Flow</h5>
                            <span class="badge badge-light border">Week 2</span>
                        </div>
                        <p class="text-muted mb-3">Making decisions with code. Conditional statements and loops.</p>
                        <ul class="topic-list">
                            <li><i class="fas fa-check small text-success mr-2"></i>If / Else / Elif</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>For Loops</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>While Loops</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="mb-0 font-weight-bold text-primary">03. Data Structures</h5>
                            <span class="badge badge-light border">Week 3</span>
                        </div>
                        <p class="text-muted mb-3">Organizing data efficiently. Lists, Tuples, Sets, and Dictionaries.</p>
                        <ul class="topic-list">
                            <li><i class="fas fa-check small text-success mr-2"></i>List Slicing</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Dictionary Keys</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Mutability</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="mb-0 font-weight-bold text-primary">04. Functions & Modules</h5>
                            <span class="badge badge-light border">Week 4</span>
                        </div>
                        <p class="text-muted mb-3">Writing reusable code. Defining functions, parameters, and importing libraries.</p>
                        <ul class="topic-list">
                            <li><i class="fas fa-check small text-success mr-2"></i>def keyword</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Return values</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Import math</li>
                        </ul>
                    </div>
                </div>

                <div class="timeline-item">
                    <div class="timeline-marker"></div>
                    <div class="timeline-content shadow-sm">
                        <div class="d-flex justify-content-between align-items-center mb-2">
                            <h5 class="mb-0 font-weight-bold text-primary">05. Scientific Python</h5>
                            <span class="badge badge-light border">Week 5</span>
                        </div>
                        <p class="text-muted mb-3">The physicist's toolkit. Introduction to NumPy arrays and Matplotlib plotting.</p>
                        <ul class="topic-list">
                            <li><i class="fas fa-check small text-success mr-2"></i>NumPy Arrays</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Plotting Graphs</li>
                            <li><i class="fas fa-check small text-success mr-2"></i>Data Analysis</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12 text-center">
            <a href="/teaching/" class="btn btn-link text-muted"><i class="fas fa-arrow-left"></i> Back to Teaching</a>
        </div>
    </div>

    <style>
    /* Gradient Text */
    .gradient-text {
        background: -webkit-linear-gradient(45deg, #007bff, #00d2ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    /* Terminal Window */
    .terminal-window {
        background: #1e1e1e;
        border-radius: 8px;
        font-family: 'Fira Code', monospace;
        overflow: hidden;
        height: 300px;
        border: 1px solid #333;
    }
    .terminal-bar {
        background: #2d2d2d;
        padding: 8px 12px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #333;
    }
    .dot { width: 12px; height: 12px; border-radius: 50%; margin-right: 6px; }
    .red { background: #ff5f56; }
    .yellow { background: #ffbd2e; }
    .green { background: #27c93f; }
    .terminal-title { margin-left: 10px; color: #999; font-size: 0.8rem; }
    .terminal-body { padding: 20px; color: #d4d4d4; font-size: 0.9rem; line-height: 1.5; }
    .cursor { animation: blink 1s infinite; font-weight: bold; color: #00d2ff; }
    @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }

    /* Resource Cards */
    .resource-card {
        background: #fff;
        padding: 20px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        border: 1px solid #eee;
        transition: transform 0.2s;
    }
    .resource-card:hover { transform: translateY(-5px); border-color: var(--global-theme-color, #007bff); }
    .res-icon {
        width: 50px; height: 50px;
        border-radius: 10px;
        display: flex; align-items: center; justify-content: center;
        font-size: 1.5rem; margin-right: 15px;
    }
    .bg-light-primary { background: rgba(0, 123, 255, 0.1); }
    .bg-light-success { background: rgba(40, 167, 69, 0.1); }
    .bg-light-warning { background: rgba(255, 193, 7, 0.1); }
    .res-info h5 { margin: 0; font-size: 1rem; font-weight: 700; }
    .res-info p { margin: 0; font-size: 0.8rem; color: #666; }
    .res-btn { margin-left: auto; color: #ccc; transition: 0.2s; }
    .resource-card:hover .res-btn { color: var(--global-theme-color, #007bff); }

    /* Timeline */
    .timeline {
        position: relative;
        padding-left: 30px;
        border-left: 2px solid #e9ecef;
    }
    .timeline-item { position: relative; margin-bottom: 30px; }
    .timeline-marker {
        position: absolute; left: -36px; top: 15px;
        width: 14px; height: 14px;
        border-radius: 50%;
        background: #fff; border: 3px solid var(--global-theme-color, #007bff);
        box-shadow: 0 0 0 4px #f8f9fa;
    }
    .timeline-content {
        background: #fff; padding: 20px; border-radius: 8px; border: 1px solid #f1f1f1;
        transition: 0.3s;
    }
    .timeline-content:hover { border-color: var(--global-theme-color, #007bff); }
    .topic-list { list-style: none; padding: 0; margin: 0; display: flex; flex-wrap: wrap; }
    .topic-list li { width: 50%; margin-bottom: 5px; font-size: 0.9rem; color: #555; }

    /* Dark Mode */
    @media (prefers-color-scheme: dark) {
        .terminal-window { box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .resource-card, .timeline-content { background: #2b2b2b; border-color: #444; }
        .res-info h5, .timeline-content h5 { color: #fff; }
        .res-info p, .timeline-content p, .topic-list li { color: #bbb; }
        .timeline { border-left-color: #444; }
        .timeline-marker { background: #2b2b2b; box-shadow: 0 0 0 4px #1a1a1a; }
    }
    </style>

    <script>
    // Typing Animation for Terminal
    const codeLines = [
        ">>> import physics",
        ">>> student = 'Ready to learn'",
        ">>> print('Hello, World!')",
        "Hello, World!",
        ">>> if passion:",
        "...     success = True",
        ">>> start_course()"
    ];

    const typeEl = document.getElementById('typewriter-code');
    let lineIndex = 0;
    let charIndex = 0;

    function typeLine() {
        if (lineIndex < codeLines.length) {
            if (charIndex < codeLines[lineIndex].length) {
                typeEl.innerHTML += codeLines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeLine, 50 + Math.random() * 50);
            } else {
                typeEl.innerHTML += "<br>";
                lineIndex++;
                charIndex = 0;
                setTimeout(typeLine, 300);
            }
        }
    }
    </script>

</div>

<script>
  function verifyPassword() {
    // Correct Password: "Sharma2026"
    // Base64 Encoded: "U2hhcm1hMjAyNg=="
    const correctHash = "U2hhcm1hMjAyNg==";
    
    // Trim removes accidental spaces
    var password = document.getElementById("passwordInput").value.trim();
    var errorMsg = document.getElementById("errorMsg");
    
    // Simple Base64 Encoding (Built-in to browser, no libraries needed)
    var enteredHash = btoa(password);

    if (enteredHash === correctHash) { 
      document.getElementById("login-overlay").style.display = "none";
      document.getElementById("protected-content").style.display = "block";
      // Trigger animation after unlock
      setTimeout(typeLine, 500);
    } else {
      errorMsg.style.display = "block";
      // Shake animation effect
      var box = document.querySelector(".login-box");
      box.style.transform = "translateX(10px)";
      setTimeout(() => box.style.transform = "translateX(-10px)", 100);
      setTimeout(() => box.style.transform = "translateX(0)", 200);
    }
  }

  function togglePasswordVisibility() {
    var input = document.getElementById("passwordInput");
    var icon = document.getElementById("eyeIcon");
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
  }
</script>