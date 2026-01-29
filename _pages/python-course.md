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
    width: 100%; padding: 12px 45px 12px 15px;
    border-radius: 6px; border: 1px solid #444;
    background: #2b2b2b; color: #fff; font-size: 1.1rem;
    outline: none; transition: border-color 0.3s;
  }
  .login-input:focus { border-color: #007bff; }
  
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

    <!-- HEADER SECTION -->
    <div class="course-header mb-5">
        <div class="row align-items-center">
            <div class="col-lg-6 mb-4 mb-lg-0">
                <h1 class="display-4 font-weight-bold gradient-text">Python for Beginners</h1>
                <p class="lead text-muted mt-3">
                    A structured journey from "Hello World" to scientific computing with NumPy, Pandas, and OOP.
                </p>
                <div class="course-meta mt-3">
                    <p class="mb-1"><i class="fas fa-user-tie mr-2 text-primary"></i><strong>Instructor:</strong> Dr. S. Sharma, Assistant Professor</p>
                    <p class="mb-1"><i class="fas fa-user-graduate mr-2 text-success"></i><strong>TA:</strong> Satyam Tiwari, PhD Student</p>
                    <p class="mb-0"><i class="fas fa-university mr-2 text-info"></i><strong>Jagiellonian University</strong> — Dept. of Theory of Nuclear Systems</p>
                </div>
                <div class="mt-4">
                    <a href="#lectures" class="btn btn-primary btn-lg px-4 mr-2 rounded-pill shadow-sm">View Lectures</a>
                    <a href="#tutorials" class="btn btn-outline-success btn-lg px-4 rounded-pill">Tutorials</a>
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

    <!-- QUICK STATS -->
    <div class="row mb-5 text-center">
        <div class="col-md-3 col-6 mb-3">
            <div class="stat-card">
                <div class="stat-number text-primary">8</div>
                <div class="stat-label">Lectures</div>
            </div>
        </div>
        <div class="col-md-3 col-6 mb-3">
            <div class="stat-card">
                <div class="stat-number text-success">8</div>
                <div class="stat-label">Tutorials</div>
            </div>
        </div>
        <div class="col-md-3 col-6 mb-3">
            <div class="stat-card">
                <div class="stat-number text-warning">8</div>
                <div class="stat-label">Weeks</div>
            </div>
        </div>
        <div class="col-md-3 col-6 mb-3">
            <div class="stat-card">
                <div class="stat-number text-info">✓</div>
                <div class="stat-label">Solutions Included</div>
            </div>
        </div>
    </div>

    <!-- LECTURES SECTION -->
    <div id="lectures" class="mb-5">
        <h3 class="font-weight-bold mb-4"><i class="fas fa-chalkboard-teacher mr-2 text-primary"></i>Lecture Materials</h3>
        <p class="text-muted mb-4">Click on any lecture to expand details. All materials available as PDF downloads.</p>
        
        <div class="accordion" id="lecturesAccordion">
            
            <!-- Lecture 01 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec01">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">01</span>
                            <span class="lecture-title">Introduction to Python</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 1</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-01.pdf', 'Lecture 01: Introduction to Python');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-01.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec01" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Getting Started with Python Programming</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Programming Languages Overview</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Why Python? Key Features</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Python Environment Setup</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Hello World Program</li>
                                </ul>
                            </div>
                        </div>
                        <p class="text-muted small mt-2"><strong>Key Concepts:</strong> Interpreted vs Compiled languages, Interactive programming, OOP fundamentals</p>
                    </div>
                </div>
            </div>

            <!-- Lecture 02 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec02">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">02</span>
                            <span class="lecture-title">Data Types and Strings</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 2</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-02.pdf', 'Lecture 02: Data Types and Strings');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-02.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec02" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Understanding Python's Core Data Structures</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Variables & Naming Rules</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Dynamic Typing</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Strings: Indexing & Slicing</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Numbers (int, float, complex)</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Lists, Tuples, Dictionaries</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Sets & Booleans</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lecture 03 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec03">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">03</span>
                            <span class="lecture-title">Flow Control</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 3</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-03.pdf', 'Lecture 03: Flow Control');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-03.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec03" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Program Logic and Decision Making</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>If / Elif / Else Statements</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>For Loops</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>While Loops</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>range(), enumerate(), zip()</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lecture 04 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec04">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">04</span>
                            <span class="lecture-title">Functions</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 4</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-04.pdf', 'Lecture 04: Functions');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-04.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec04" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Modular Programming and Code Reusability</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Defining Functions (def)</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Parameters & Arguments</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Return Values</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>*args and **kwargs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lecture 05 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec05">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">05</span>
                            <span class="lecture-title">File Handling and Modules</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 5</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-05.pdf', 'Lecture 05: File Handling and Modules');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-05.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec05" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Working with Files and External Libraries</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>File Operations (r, w, a)</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Context Managers (with)</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Importing Modules</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>PIP Package Manager</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lecture 06 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec06">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">06</span>
                            <span class="lecture-title">Error Handling and Debugging</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 6</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-06.pdf', 'Lecture 06: Error Handling and Debugging');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-06.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec06" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Writing Robust Python Code</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Try / Except Blocks</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Finally Clause</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Raising Exceptions</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Debugging Techniques</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lecture 07 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec07">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">07</span>
                            <span class="lecture-title">NumPy, Pandas, and Matplotlib</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 7</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-07.pdf', 'Lecture 07: NumPy, Pandas, and Matplotlib');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-07.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec07" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Introduction to Scientific Python</strong></p>
                        <div class="row">
                            <div class="col-md-4">
                                <h6 class="text-primary"><i class="fas fa-cube mr-1"></i> NumPy</h6>
                                <p class="small">Numerical computing with arrays</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="text-success"><i class="fas fa-table mr-1"></i> Pandas</h6>
                                <p class="small">Data manipulation and analysis</p>
                            </div>
                            <div class="col-md-4">
                                <h6 class="text-warning"><i class="fas fa-chart-line mr-1"></i> Matplotlib</h6>
                                <p class="small">Data visualization</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Lecture 08 -->
            <div class="lecture-card mb-3">
                <div class="lecture-header" data-toggle="collapse" data-target="#lec08">
                    <div class="d-flex justify-content-between align-items-center">
                        <div>
                            <span class="lecture-number">08</span>
                            <span class="lecture-title">Object-Oriented Programming & Statistics</span>
                        </div>
                        <div class="lecture-meta">
                            <span class="badge badge-light border mr-2">Week 8</span>
                            <div class="btn-group-viewer">
                                <button class="btn btn-sm btn-info btn-viewer" onclick="event.stopPropagation(); openPdfViewer('/assets/Python_Page/Lectures/Lec-08.pdf', 'Lecture 08: OOP and Statistics');">
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="/assets/Python_Page/Lectures/Lec-08.pdf" class="btn btn-sm btn-primary btn-viewer" onclick="event.stopPropagation();">
                                    <i class="fas fa-download"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="lec08" class="collapse" data-parent="#lecturesAccordion">
                    <div class="lecture-body">
                        <p><strong>Advanced Python Concepts</strong></p>
                        <div class="row">
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Classes and Objects</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Encapsulation</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Inheritance</li>
                                </ul>
                            </div>
                            <div class="col-md-6">
                                <ul class="topic-list-detailed">
                                    <li><i class="fas fa-check text-success mr-2"></i>Polymorphism</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Mean, Median, Mode</li>
                                    <li><i class="fas fa-check text-success mr-2"></i>Variance & Std Dev</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <hr class="my-5">

    <!-- TUTORIALS SECTION -->
    <div id="tutorials" class="mb-5">
        <h3 class="font-weight-bold mb-4"><i class="fas fa-laptop-code mr-2 text-success"></i>Tutorial Materials <span class="badge badge-success ml-2">Solutions Included</span></h3>
        <p class="text-muted mb-4">Hands-on practice with solved examples. Run notebooks in Google Colab or Jupyter.</p>
        
        <div class="row">
            
            <!-- Tutorial 01 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card">
                    <div class="tutorial-header">
                        <span class="tutorial-number">01</span>
                        <span class="difficulty-badge">Beginner</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Getting Started</h5>
                        <p class="tutorial-desc">IDE Setup, Google Colab, Markdown Basics</p>
                        <span class="format-badge pdf"><i class="fas fa-file-pdf"></i> PDF</span>
                    </div>
                    <div class="tutorial-footer">
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-info btn-viewer" onclick="openPdfViewer('/assets/Python_Page/Tutorials/Tut-01.pdf', 'Tutorial 01: Getting Started');">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-01.pdf" class="btn btn-sm btn-outline-primary btn-viewer">
                                <i class="fas fa-download"></i> Download
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 02 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card">
                    <div class="tutorial-header">
                        <span class="tutorial-number">02</span>
                        <span class="difficulty-badge">Beginner</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Variables, Data Types & Strings</h5>
                        <p class="tutorial-desc">Keywords, Dynamic Typing, String Methods, Lists, Dictionaries</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> Secret Agent Generator, Palindrome Detector</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-02.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-02.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-02.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 03 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card">
                    <div class="tutorial-header">
                        <span class="tutorial-number">03</span>
                        <span class="difficulty-badge">Beginner</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Data Structures Deep Dive</h5>
                        <p class="tutorial-desc">Advanced Lists, Tuples, Dictionaries, Sets</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> split(), find(), union(), intersection()</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-03.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-03.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-03.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 04 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card">
                    <div class="tutorial-header">
                        <span class="tutorial-number">04</span>
                        <span class="difficulty-badge">Intermediate</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Loops and Functions</h5>
                        <p class="tutorial-desc">Pattern Questions, While Loops, Continue/Break</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> Vowel Counter, Find Largest, Common Elements</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-04.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-04.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-04.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 05 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card">
                    <div class="tutorial-header">
                        <span class="tutorial-number">05</span>
                        <span class="difficulty-badge">Intermediate</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Functions Deep Dive</h5>
                        <p class="tutorial-desc">*args, List Operations, Palindrome, Prime Numbers</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> Max of Three, Sum, Multiply, Reverse</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-05.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-05.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-05.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 06 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card">
                    <div class="tutorial-header">
                        <span class="tutorial-number">06</span>
                        <span class="difficulty-badge">Intermediate</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Files, Modules & Data Science</h5>
                        <p class="tutorial-desc">Log Analyzer, Custom Modules, NumPy Arrays, Matplotlib</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> File Handling, Slicing, Subplots</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-06.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-06.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-06.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 07 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card featured">
                    <div class="tutorial-header">
                        <span class="tutorial-number">07</span>
                        <span class="difficulty-badge">Advanced</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">NumPy, Pandas & Matplotlib</h5>
                        <p class="tutorial-desc">2D Arrays, DataFrames, Publication-Quality Plots</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> Broadcasting, Data Filtering, Figure Customization</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-07.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-07.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-07.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Tutorial 08 -->
            <div class="col-12 mb-4">
                <div class="tutorial-card featured">
                    <div class="tutorial-header">
                        <span class="tutorial-number">08</span>
                        <span class="difficulty-badge">Advanced</span>
                    </div>
                    <div class="tutorial-content">
                        <h5 class="tutorial-title">Object-Oriented Programming</h5>
                        <p class="tutorial-desc">Classes, __init__, self, Inheritance, super()</p>
                        <div class="practice-problems">
                            <small><i class="fas fa-puzzle-piece mr-1"></i> Blueprints, Methods, Object Behavior</small>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-08.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
                            </button>
                            <button class="btn btn-sm btn-nbviewer btn-viewer" onclick="openInNbviewer('/assets/Python_Page/Tutorials/Tut-08.ipynb');" title="View in nbviewer">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <a href="/assets/Python_Page/Tutorials/Tut-08.ipynb" class="btn btn-sm btn-outline-success btn-viewer" title="Download">
                                <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <!-- HOW TO USE SECTION -->
        <div class="how-to-use-box mt-5">
            <h5 class="font-weight-bold mb-4"><i class="fab fa-google mr-2"></i>Quick Access Buttons</h5>
            <p class="text-muted mb-4">Each tutorial has three action buttons:</p>
            
            <div class="colab-steps">
                <div class="colab-step">
                    <div class="colab-step-number" style="background: linear-gradient(135deg, #F9AB00, #E37400);"><i class="fab fa-google"></i></div>
                    <div class="colab-step-content">
                        <h6><i class="fab fa-google mr-2" style="color: #F9AB00;"></i>Open in Colab</h6>
                        <p>Opens the notebook directly in Google Colab - run code instantly in the cloud!</p>
                    </div>
                </div>
                
                <div class="colab-step">
                    <div class="colab-step-number" style="background: linear-gradient(135deg, #F37626, #E24A28);"><i class="fas fa-eye"></i></div>
                    <div class="colab-step-content">
                        <h6><i class="fas fa-eye mr-2" style="color: #F37626;"></i>View in nbviewer</h6>
                        <p>Preview the notebook contents without downloading or running any code.</p>
                    </div>
                </div>
                
                <div class="colab-step">
                    <div class="colab-step-number" style="background: linear-gradient(135deg, #28a745, #20c997);"><i class="fas fa-download"></i></div>
                    <div class="colab-step-content">
                        <h6><i class="fas fa-download mr-2 text-success"></i>Download</h6>
                        <p>Download the <code>.ipynb</code> file to run locally in Jupyter Notebook.</p>
                    </div>
                </div>
            </div>
            
            <div class="colab-tip mt-4">
                <i class="fas fa-lightbulb mr-2"></i>
                <strong>Tip:</strong> For lectures, click <strong>View</strong> to read PDFs directly in your browser!
            </div>
        </div>

    </div>

    <hr class="my-5">

    <!-- LEARNING PATH -->
    <div class="mb-5">
        <h3 class="font-weight-bold mb-4"><i class="fas fa-road mr-2 text-info"></i>Learning Path</h3>
        <p class="text-muted mb-4">Follow this journey from beginner to advanced Python programming</p>
        
        <div class="learning-journey">
            
            <div class="journey-step" onclick="scrollToSection('lec01')">
                <div class="step-number">1</div>
                <div class="step-content">
                    <h5 class="step-title">Introduction to Python</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-01</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-01</span>
                    </div>
                    <p class="step-topics">Programming basics, Environment setup, Hello World</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="scrollToSection('lec02')">
                <div class="step-number">2</div>
                <div class="step-content">
                    <h5 class="step-title">Data Types & Strings</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-02</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-02</span>
                    </div>
                    <p class="step-topics">Variables, Numbers, Strings, Lists, Dictionaries</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="scrollToSection('lec03')">
                <div class="step-number">3</div>
                <div class="step-content">
                    <h5 class="step-title">Flow Control</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-03</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-03</span>
                    </div>
                    <p class="step-topics">If/Else, For Loops, While Loops</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="scrollToSection('lec04')">
                <div class="step-number">4</div>
                <div class="step-content">
                    <h5 class="step-title">Functions</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-04</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-04</span>
                    </div>
                    <p class="step-topics">Defining functions, Parameters, Return values</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="scrollToSection('lec05')">
                <div class="step-number">5</div>
                <div class="step-content">
                    <h5 class="step-title">File Handling & Modules</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-05</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-05</span>
                    </div>
                    <p class="step-topics">Read/Write files, Context managers, PIP</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="scrollToSection('lec06')">
                <div class="step-number">6</div>
                <div class="step-content">
                    <h5 class="step-title">Error Handling</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-06</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-06</span>
                    </div>
                    <p class="step-topics">Try/Except, Debugging, Custom exceptions</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="scrollToSection('lec07')">
                <div class="step-number">7</div>
                <div class="step-content">
                    <h5 class="step-title">Data Science Libraries</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-07</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-07</span>
                    </div>
                    <p class="step-topics">NumPy, Pandas, Matplotlib</p>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step final" onclick="scrollToSection('lec08')">
                <div class="step-number"><i class="fas fa-trophy"></i></div>
                <div class="step-content">
                    <h5 class="step-title">OOP & Statistics</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-08</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-08</span>
                    </div>
                    <p class="step-topics">Classes, Inheritance, Mean, Variance</p>
                </div>
                <div class="step-complete"><i class="fas fa-flag-checkered"></i></div>
            </div>

        </div>
    </div>

    <hr class="my-5">

    <!-- RESOURCES -->
    <div class="row mb-5">
        <div class="col-md-6 mb-4">
            <h5 class="font-weight-bold mb-3"><i class="fas fa-tools mr-2 text-warning"></i>Prerequisites</h5>
            <ul class="resource-list">
                <li><i class="fas fa-check-circle text-success mr-2"></i>Python 3.x installed</li>
                <li><i class="fas fa-check-circle text-success mr-2"></i>Google Colab account (recommended)</li>
                <li><i class="fas fa-check-circle text-success mr-2"></i>Text editor (VSCode, PyCharm)</li>
            </ul>
        </div>
        <div class="col-md-6 mb-4">
            <h5 class="font-weight-bold mb-3"><i class="fas fa-book-open mr-2 text-info"></i>Recommended Resources</h5>
            <ul class="resource-list">
                <li><a href="https://docs.python.org/3/" target="_blank"><i class="fas fa-external-link-alt mr-2"></i>Python Documentation</a></li>
                <li><a href="https://greenteapress.com/wp/think-python-2e/" target="_blank"><i class="fas fa-external-link-alt mr-2"></i>Think Python (Free Book)</a></li>
                <li><a href="https://colab.research.google.com/" target="_blank"><i class="fas fa-external-link-alt mr-2"></i>Google Colab</a></li>
                <li><a href="http://pythontutor.com/" target="_blank"><i class="fas fa-external-link-alt mr-2"></i>Python Tutor (Visualize Code)</a></li>
            </ul>
        </div>
    </div>

    <!-- TIPS -->
    <div class="tips-box mb-5">
        <h5 class="font-weight-bold mb-3"><i class="fas fa-lightbulb mr-2"></i>Tips for Success</h5>
        <div class="row">
            <div class="col-md-6">
                <ul class="mb-0">
                    <li>Try problems yourself before looking at solutions</li>
                    <li>Experiment with code modifications</li>
                </ul>
            </div>
            <div class="col-md-6">
                <ul class="mb-0">
                    <li>Read error messages carefully</li>
                    <li>Don't skip the fundamentals</li>
                </ul>
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

    /* Course Meta */
    .course-meta p {
        font-size: 0.95rem;
    }

    /* Stats */
    .stat-card {
        padding: 20px;
    }
    .stat-number {
        font-size: 2.5rem;
        font-weight: 700;
    }
    .stat-label {
        font-size: 0.9rem;
        color: #666;
    }

    /* Terminal Window */
    .terminal-window {
        background: #1e1e1e;
        border-radius: 8px;
        font-family: 'Fira Code', monospace;
        overflow: hidden;
        height: 280px;
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

    /* Lecture Cards */
    .lecture-card {
        background: #fff;
        border-radius: 8px;
        border: 1px solid #e9ecef;
        overflow: hidden;
        transition: 0.3s;
    }
    .lecture-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        border-color: var(--global-theme-color, #007bff);
    }
    .lecture-header {
        padding: 15px 20px;
        cursor: pointer;
        background: #f8f9fa;
        transition: background 0.2s;
    }
    .lecture-header:hover {
        background: #f1f3f5;
    }
    .lecture-number {
        display: inline-block;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background: linear-gradient(135deg, #007bff, #00d2ff);
        color: white;
        border-radius: 50%;
        font-weight: 700;
        font-size: 0.85rem;
        margin-right: 12px;
    }
    .lecture-title {
        font-weight: 600;
        font-size: 1.05rem;
    }
    .lecture-body {
        padding: 20px;
        border-top: 1px solid #e9ecef;
    }
    .topic-list-detailed {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    .topic-list-detailed li {
        margin-bottom: 8px;
        font-size: 0.9rem;
    }

    /* Tutorial Cards - Beautiful Horizontal Layout */
    .tutorial-card {
        background: linear-gradient(135deg, #ffffff 0%, #f8fffe 100%);
        border-radius: 16px;
        border: 2px solid #e0f2e9;
        padding: 0;
        display: flex;
        flex-direction: row;
        align-items: stretch;
        transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        overflow: hidden;
        position: relative;
    }
    .tutorial-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #28a745, #20c997, #17a2b8);
        opacity: 0;
        transition: opacity 0.3s;
    }
    .tutorial-card:hover::before {
        opacity: 1;
    }
    .tutorial-card:hover {
        transform: translateY(-3px);
        box-shadow: 0 15px 40px rgba(40, 167, 69, 0.15);
        border-color: #28a745;
    }
    .tutorial-card.featured {
        border-color: #dc3545;
        background: linear-gradient(135deg, #ffffff 0%, #fff8f8 100%);
    }
    .tutorial-card.featured::before {
        background: linear-gradient(90deg, #dc3545, #e91e63, #ff5722);
        opacity: 1;
    }
    .tutorial-card.featured:hover {
        box-shadow: 0 15px 40px rgba(220, 53, 69, 0.15);
    }
    
    /* Left Section - Number */
    .tutorial-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 25px 30px;
        background: linear-gradient(135deg, #28a745, #20c997);
        min-width: 100px;
        gap: 10px;
    }
    .tutorial-card.featured .tutorial-header {
        background: linear-gradient(135deg, #dc3545, #e91e63);
    }
    .tutorial-number {
        font-size: 2rem;
        font-weight: 800;
        color: white;
        line-height: 1;
        text-shadow: 0 2px 4px rgba(0,0,0,0.2);
    }
    .difficulty-badge {
        font-size: 0.65rem;
        padding: 4px 10px;
        border-radius: 20px;
        background: rgba(255,255,255,0.25);
        color: white;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    /* Center Section - Content */
    .tutorial-content {
        flex: 1;
        padding: 20px 25px;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .tutorial-title {
        font-weight: 700;
        margin-bottom: 6px;
        font-size: 1.15rem;
        color: #2c3e50;
    }
    .tutorial-desc {
        color: #666;
        font-size: 0.9rem;
        margin-bottom: 8px;
        line-height: 1.4;
    }
    .practice-problems {
        background: linear-gradient(135deg, #f0f9ff 0%, #e8f5e9 100%);
        padding: 8px 14px;
        border-radius: 8px;
        color: #555;
        font-size: 0.8rem;
        display: inline-block;
        border-left: 3px solid #28a745;
    }
    .tutorial-card.featured .practice-problems {
        background: linear-gradient(135deg, #fff5f5 0%, #fce4ec 100%);
        border-left-color: #dc3545;
    }
    
    /* Right Section - Footer/Buttons */
    .tutorial-footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 25px;
        gap: 12px;
        background: rgba(0,0,0,0.02);
        border-left: 1px solid rgba(0,0,0,0.05);
        min-width: 180px;
    }
    .tutorial-card.featured .tutorial-footer {
        background: rgba(220, 53, 69, 0.03);
    }
    
    /* Mobile Responsive for Tutorial Cards */
    @media (max-width: 768px) {
        .tutorial-card {
            flex-direction: column;
        }
        .tutorial-header {
            flex-direction: row;
            padding: 15px 20px;
            min-width: auto;
        }
        .tutorial-number {
            font-size: 1.5rem;
        }
        .tutorial-content {
            padding: 15px 20px;
        }
        .tutorial-footer {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: center;
            border-left: none;
            border-top: 1px solid rgba(0,0,0,0.05);
            padding: 15px;
            min-width: auto;
        }
    }
    .format-badge {
        font-size: 0.75rem;
        padding: 4px 10px;
        border-radius: 20px;
        font-weight: 600;
    }
    .format-badge.pdf {
        background: #fff3cd;
        color: #856404;
    }
    .format-badge.jupyter {
        background: #d4edda;
        color: #155724;
    }

    /* Learning Table */
    .learning-table {
        font-size: 0.9rem;
    }
    .learning-table th {
        font-weight: 600;
    }

    /* Resource List */
    .resource-list {
        list-style: none;
        padding: 0;
    }
    .resource-list li {
        margin-bottom: 10px;
        font-size: 0.95rem;
    }
    .resource-list a {
        color: var(--global-theme-color, #007bff);
        text-decoration: none;
    }
    .resource-list a:hover {
        text-decoration: underline;
    }

    /* Tips Box */
    .tips-box {
        background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
        border: 1px solid #ffc107;
        border-radius: 12px;
        padding: 20px;
    }
    .tips-box ul {
        margin-bottom: 0;
    }
    .tips-box li {
        margin-bottom: 5px;
    }

    /* How to Use Colab Box */
    .how-to-use-box {
        background: linear-gradient(135deg, #e8f4fd 0%, #f0f7ff 100%);
        border: 2px solid #4285f4;
        border-radius: 16px;
        padding: 25px;
    }
    .how-to-use-box h5 {
        color: #4285f4;
    }
    .colab-steps {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .colab-step {
        display: flex;
        align-items: flex-start;
        background: #fff;
        border-radius: 12px;
        padding: 15px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
    .colab-step-number {
        width: 35px;
        height: 35px;
        min-width: 35px;
        border-radius: 50%;
        background: linear-gradient(135deg, #4285f4, #34a853);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        margin-right: 15px;
    }
    .colab-step-content h6 {
        margin-bottom: 5px;
        font-weight: 600;
    }
    .colab-step-content p {
        margin: 0;
        font-size: 0.9rem;
        color: #555;
    }
    .colab-step-content code {
        background: #f1f3f4;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.85rem;
    }
    .colab-tip {
        background: #fff9e6;
        border-left: 4px solid #fbbc04;
        padding: 12px 15px;
        border-radius: 0 8px 8px 0;
        font-size: 0.9rem;
        color: #555;
    }
    .colab-tip a {
        color: #4285f4;
    }

    /* PDF Viewer Modal */
    .pdf-viewer-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.85);
        z-index: 10000;
        align-items: center;
        justify-content: center;
        padding: 20px;
    }
    .pdf-viewer-container {
        width: 100%;
        max-width: 1200px;
        height: 90vh;
        background: #fff;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    .pdf-viewer-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 20px;
        background: linear-gradient(135deg, #007bff, #00d2ff);
        color: white;
    }
    .pdf-viewer-header h5 {
        margin: 0;
        font-weight: 600;
    }
    .pdf-viewer-close {
        background: rgba(255, 255, 255, 0.2);
        border: none;
        color: white;
        width: 35px;
        height: 35px;
        border-radius: 50%;
        cursor: pointer;
        font-size: 1rem;
        transition: 0.3s;
    }
    .pdf-viewer-close:hover {
        background: rgba(255, 255, 255, 0.3);
    }
    .pdf-frame {
        width: 100%;
        height: calc(90vh - 60px);
        border: none;
    }

    /* Viewer Button Styles */
    .btn-group-viewer {
        display: flex;
        gap: 5px;
        flex-wrap: wrap;
    }
    .btn-viewer {
        font-size: 0.75rem;
        padding: 4px 8px;
        border-radius: 6px;
    }
    .btn-colab {
        background: linear-gradient(135deg, #F9AB00, #E37400);
        color: white;
        border: none;
    }
    .btn-colab:hover {
        background: linear-gradient(135deg, #E37400, #C26200);
        color: white;
    }
    .btn-nbviewer {
        background: linear-gradient(135deg, #F37626, #E24A28);
        color: white;
        border: none;
    }
    .btn-nbviewer:hover {
        background: linear-gradient(135deg, #E24A28, #C23820);
        color: white;
    }

    /* Learning Journey */
    .learning-journey {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    .journey-step {
        display: flex;
        align-items: center;
        background: #fff;
        border: 2px solid #e9ecef;
        border-radius: 12px;
        padding: 20px;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
    }
    .journey-step:hover {
        border-color: var(--global-theme-color, #007bff);
        transform: translateX(10px);
        box-shadow: 0 8px 25px rgba(0, 123, 255, 0.15);
    }
    .journey-step.final {
        border-color: #28a745;
        background: linear-gradient(135deg, #f8fff8 0%, #e8f5e9 100%);
    }
    .journey-step.final:hover {
        border-color: #28a745;
        box-shadow: 0 8px 25px rgba(40, 167, 69, 0.2);
    }
    .step-number {
        width: 50px;
        height: 50px;
        min-width: 50px;
        border-radius: 50%;
        background: linear-gradient(135deg, #007bff, #00d2ff);
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 1.3rem;
        margin-right: 20px;
    }
    .journey-step.final .step-number {
        background: linear-gradient(135deg, #28a745, #20c997);
    }
    .step-content {
        flex: 1;
    }
    .step-title {
        font-weight: 700;
        margin-bottom: 8px;
        color: #333;
    }
    .step-materials {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        margin-bottom: 8px;
    }
    .material-tag {
        font-size: 0.75rem;
        padding: 4px 10px;
        border-radius: 20px;
        font-weight: 600;
    }
    .material-tag.lecture {
        background: rgba(0, 123, 255, 0.1);
        color: #007bff;
    }
    .material-tag.tutorial {
        background: rgba(40, 167, 69, 0.1);
        color: #28a745;
    }
    .step-topics {
        margin: 0;
        font-size: 0.85rem;
        color: #666;
    }
    .step-arrow, .step-complete {
        font-size: 1.2rem;
        color: #ccc;
        margin-left: 15px;
        transition: 0.3s;
    }
    .journey-step:hover .step-arrow {
        color: var(--global-theme-color, #007bff);
        transform: translateX(5px);
    }
    .step-complete {
        color: #28a745;
    }

    @media (max-width: 576px) {
        .journey-step {
            padding: 15px;
        }
        .step-number {
            width: 40px;
            height: 40px;
            min-width: 40px;
            font-size: 1rem;
            margin-right: 12px;
        }
        .step-materials {
            flex-direction: column;
            gap: 5px;
        }
    }

    /* Dark Mode */
    @media (prefers-color-scheme: dark) {
        .terminal-window { box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
        .lecture-card, .tutorial-card { background: #2b2b2b; border-color: #444; }
        .tutorial-card.featured { 
            background: linear-gradient(135deg, #2b2b2b 0%, #3a2a2a 100%); 
            border-color: #dc3545; 
        }
        .tutorial-card.featured:hover {
            box-shadow: 0 10px 30px rgba(220, 53, 69, 0.2);
        }
        .lecture-header { background: #333; }
        .lecture-header:hover { background: #3a3a3a; }
        .lecture-body { border-top-color: #444; }
        .lecture-title, .tutorial-title { color: #fff; }
        .tutorial-desc, .topic-list-detailed li { color: #bbb; }
        .practice-problems { background: #333; color: #aaa; }
        .tutorial-footer { border-top-color: #444; }
        .format-badge.pdf { background: #4a4020; color: #ffc107; }
        .format-badge.jupyter { background: #1a3a20; color: #28a745; }
        .tips-box { background: #3a3520; border-color: #ffc107; color: #eee; }
        .tips-box li { color: #ddd; }
        .stat-label { color: #aaa; }
        .course-meta p { color: #bbb; }
        .resource-list li { color: #bbb; }
        /* Learning Journey Dark Mode */
        .journey-step { background: #2b2b2b; border-color: #444; }
        .journey-step:hover { border-color: #007bff; box-shadow: 0 8px 25px rgba(0, 123, 255, 0.2); }
        .journey-step.final { background: linear-gradient(135deg, #2b2b2b 0%, #1a3a20 100%); border-color: #28a745; }
        .step-title { color: #fff; }
        .step-topics { color: #aaa; }
        .material-tag.lecture { background: rgba(0, 123, 255, 0.2); }
        .material-tag.tutorial { background: rgba(40, 167, 69, 0.2); }
        /* How to Use Colab Dark Mode */
        .how-to-use-box { background: linear-gradient(135deg, #1a2530 0%, #2a3540 100%); border-color: #4285f4; }
        .how-to-use-box h5 { color: #7aafff; }
        .colab-step { background: #2b2b2b; }
        .colab-step-content h6 { color: #fff; }
        .colab-step-content p { color: #bbb; }
        .colab-step-content code { background: #3a3a3a; color: #ddd; }
        .colab-tip { background: #3a3520; color: #ddd; }
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

    // Scroll to section when clicking journey steps
    function scrollToSection(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Briefly highlight the card
            element.parentElement.style.transform = 'scale(1.02)';
            element.parentElement.style.boxShadow = '0 10px 40px rgba(0, 123, 255, 0.3)';
            setTimeout(() => {
                element.parentElement.style.transform = '';
                element.parentElement.style.boxShadow = '';
            }, 1000);
        }
    }
    </script>

</div>

<script>
  function verifyPassword() {
    // Correct Password: "Sharma2026"
    // Base64 Encoded: "U2hhcm1hMjAyNg=="
    const correctHash = "U2hhcm1hMjAyNg==";
    
    var password = document.getElementById("passwordInput").value.trim();
    var errorMsg = document.getElementById("errorMsg");
    
    var enteredHash = btoa(password);

    if (enteredHash === correctHash) { 
      document.getElementById("login-overlay").style.display = "none";
      document.getElementById("protected-content").style.display = "block";
      setTimeout(typeLine, 500);
    } else {
      errorMsg.style.display = "block";
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

  // PDF Viewer Modal Functions
  function openPdfViewer(pdfUrl, title) {
    document.getElementById('pdfViewerTitle').textContent = title;
    document.getElementById('pdfFrame').src = pdfUrl;
    document.getElementById('pdfViewerModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closePdfViewer() {
    document.getElementById('pdfViewerModal').style.display = 'none';
    document.getElementById('pdfFrame').src = '';
    document.body.style.overflow = 'auto';
  }

  // Close modal on escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closePdfViewer();
  });

  // Open in Google Colab
  function openInColab(notebookPath) {
    const repoUrl = 'https://github.com/Dr-Sushil-Sharma/Dr-Sushil-Sharma.github.io/blob/main';
    const colabUrl = `https://colab.research.google.com/github/Dr-Sushil-Sharma/Dr-Sushil-Sharma.github.io/blob/main${notebookPath}`;
    window.open(colabUrl, '_blank');
  }

  // Open in nbviewer
  function openInNbviewer(notebookPath) {
    const nbviewerUrl = `https://nbviewer.org/github/Dr-Sushil-Sharma/Dr-Sushil-Sharma.github.io/blob/main${notebookPath}`;
    window.open(nbviewerUrl, '_blank');
  }
</script>

<!-- PDF Viewer Modal -->
<div id="pdfViewerModal" class="pdf-viewer-modal">
    <div class="pdf-viewer-container">
        <div class="pdf-viewer-header">
            <h5 id="pdfViewerTitle">PDF Viewer</h5>
            <button class="pdf-viewer-close" onclick="closePdfViewer()">
                <i class="fas fa-times"></i>
            </button>
        </div>
        <iframe id="pdfFrame" class="pdf-frame"></iframe>
    </div>
</div>
