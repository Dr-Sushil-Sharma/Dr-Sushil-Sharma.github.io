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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://www.w3schools.com/python/python_intro.asp" target="_blank" class="mr-2">W3Schools Intro</a>
                            <a href="https://realpython.com/installing-python/" target="_blank" class="mr-2">Real Python Installation</a>
                        </div>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://www.w3schools.com/python/python_strings.asp" target="_blank" class="mr-2">W3Schools Strings</a>
                            <a href="https://realpython.com/python-data-types/" target="_blank" class="mr-2">Real Python Data Types</a>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://www.hackerrank.com/challenges/py-if-else/problem" target="_blank" class="mr-2">HackerRank If-Else</a>
                            <a href="https://realpython.com/python-conditional-statements/" target="_blank" class="mr-2">Real Python Flow Control</a>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://www.hackerrank.com/challenges/write-a-function/problem" target="_blank" class="mr-2">HackerRank Functions</a>
                            <a href="https://www.w3schools.com/python/python_functions.asp" target="_blank" class="mr-2">W3Schools Functions</a>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://realpython.com/read-write-files-python/" target="_blank" class="mr-2">Real Python File I/O</a>
                            <a href="https://www.w3schools.com/python/python_modules.asp" target="_blank" class="mr-2">W3Schools Modules</a>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://www.w3schools.com/python/python_try_except.asp" target="_blank" class="mr-2">W3Schools Try/Except</a>
                            <a href="https://realpython.com/python-exceptions/" target="_blank" class="mr-2">Real Python Exceptions</a>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://realpython.com/numpy-tutorial/" target="_blank" class="mr-2">Real Python NumPy</a>
                            <a href="https://pandas.pydata.org/pandas-docs/stable/user_guide/10min.html" target="_blank" class="mr-2">Pandas Documentation</a>
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
                        <div class="mt-3 small pt-2">
                            <i class="fas fa-link text-muted mr-1"></i> <strong>Practice:</strong>
                            <a href="https://realpython.com/python3-object-oriented-programming/" target="_blank" class="mr-2">Real Python OOP</a>
                            <a href="https://realpython.com/python-statistics/" target="_blank" class="mr-2">Real Python Statistics</a>
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
                        <div class="practice-links mt-2 small">
                             <a href="https://www.markdownguide.org/basic-syntax/" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> Markdown Guide</a>
                             <a href="https://code.visualstudio.com/docs/python/python-tutorial" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> VS Code Setup</a>
                        </div>
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
                        <div class="practice-links mt-2 small">
                             <a href="https://codingbat.com/python/String-1" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> CodingBat Strings</a>
                             <a href="https://www.hackerrank.com/challenges/string-validators/problem" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> HackerRank Strings</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-02.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
                        <div class="practice-links mt-2 small">
                             <a href="https://www.geeksforgeeks.org/python-lists/" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> GFG Lists</a>
                             <a href="https://www.hackerrank.com/challenges/py-introduction-to-sets/problem" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> HackerRank Sets</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-03.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
                        <div class="practice-links mt-2 small">
                             <a href="https://codingbat.com/python/Logic-2" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> CodingBat Logic</a>
                             <a href="https://www.hackerrank.com/challenges/python-loops/problem" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> HackerRank Loops</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-04.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
                        <div class="practice-links mt-2 small">
                             <a href="https://realpython.com/python-kwargs-and-args/" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> Real Python *args</a>
                             <a href="https://www.geeksforgeeks.org/recursion-in-python/" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> GFG Recursion</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-05.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
                        <div class="practice-links mt-2 small">
                             <a href="https://realpython.com/python-modules-packages/" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> Real Python Modules</a>
                             <a href="https://matplotlib.org/stable/tutorials/pyplot.html" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> Matplotlib Guide</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-06.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
                        <div class="practice-links mt-2 small">
                             <a href="https://www.kaggle.com/learn/pandas" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> Kaggle Pandas</a>
                             <a href="https://numpy.org/doc/stable/user/quickstart.html" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> NumPy Quickstart</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-07.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
                        <div class="practice-links mt-2 small">
                             <a href="https://realpython.com/inheritance-composition-python/" target="_blank" class="mr-2"><i class="fas fa-external-link-alt text-muted mr-1"></i> Real Python Inheritance</a>
                             <a href="https://www.geeksforgeeks.org/python-oops-concepts/" target="_blank"><i class="fas fa-external-link-alt text-muted mr-1"></i> GFG OOP Concepts</a>
                        </div>
                    </div>
                    <div class="tutorial-footer">
                        <span class="format-badge jupyter"><i class="fas fa-book"></i> Jupyter</span>
                        <div class="btn-group-viewer">
                            <button class="btn btn-sm btn-colab btn-viewer" onclick="openInColab('/assets/Python_Page/Tutorials/Tut-08.ipynb');" title="Open in Colab">
                                <i class="fab fa-google"></i> Colab
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
            <p class="text-muted mb-4">Each tutorial has two action buttons:</p>

            <div class="colab-steps">
                <div class="colab-step">
                    <div class="colab-step-number" style="background: linear-gradient(135deg, #F9AB00, #E37400);"><i class="fab fa-google"></i></div>
                    <div class="colab-step-content">
                        <h6><i class="fab fa-google mr-2" style="color: #F9AB00;"></i>Open in Colab</h6>
                        <p>Opens the notebook in Google Colab. <strong>Important:</strong> Click <em>File → Save a copy in Drive</em> to save your work!</p>
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
                <i class="fas fa-exclamation-triangle mr-2" style="color: #F9AB00;"></i>
                <strong>Remember:</strong> When using Colab, always save a copy to your Google Drive to keep your progress!
            </div>
        </div>

    </div>

    <hr class="my-5">

    <!-- LEARNING PATH -->
    <div class="mb-5">
        <h3 class="font-weight-bold mb-4"><i class="fas fa-road mr-2 text-info"></i>Learning Path</h3>
        <p class="text-muted mb-4">Follow this journey from beginner to advanced Python programming</p>

        <div class="learning-journey">

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">1</div>
                <div class="step-content">
                    <h5 class="step-title">Introduction to Python</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-01</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-01</span>
                    </div>
                    <p class="step-topics">Programming basics, Environment setup, Hello World</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Python Syntax & Comments</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Variables & Assignment</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Input & Output</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec01')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">2</div>
                <div class="step-content">
                    <h5 class="step-title">Data Types & Strings</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-02</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-02</span>
                    </div>
                    <p class="step-topics">Variables, Numbers, Strings, Lists, Dictionaries</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>String Slicing & Methods</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>List operations (append, pop)</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Dictionary keys & values</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec02')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">3</div>
                <div class="step-content">
                    <h5 class="step-title">Flow Control</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-03</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-03</span>
                    </div>
                    <p class="step-topics">If/Else, For Loops, While Loops</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Conditional Logic</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Iterating with Loops</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Break & Continue</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec03')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">4</div>
                <div class="step-content">
                    <h5 class="step-title">Functions</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-04</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-04</span>
                    </div>
                    <p class="step-topics">Defining functions, Parameters, Return values</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Defining Functions (def)</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Arguments & Return Values</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Scope & Lifetime</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec04')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">5</div>
                <div class="step-content">
                    <h5 class="step-title">File Handling & Modules</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-05</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-05</span>
                    </div>
                    <p class="step-topics">Read/Write files, Context managers, PIP</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Reading & Writing Files</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Context Managers (with)</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Importing Modules</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec05')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">6</div>
                <div class="step-content">
                    <h5 class="step-title">Error Handling</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-06</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-06</span>
                    </div>
                    <p class="step-topics">Try/Except, Debugging, Custom exceptions</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Try, Except, Finally</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Debugging Strategies</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Raising Exceptions</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec06')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step" onclick="toggleStep(this)">
                <div class="step-icon-wrapper">7</div>
                <div class="step-content">
                    <h5 class="step-title">Data Science Libraries</h5>
                    <div class="step-materials">
                        <span class="material-tag lecture"><i class="fas fa-chalkboard-teacher"></i> Lec-07</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-07</span>
                    </div>
                    <p class="step-topics">NumPy, Pandas, Matplotlib</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>NumPy Arrays</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Pandas DataFrames</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Matplotlib Plotting</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-primary rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec07')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
            </div>

            <div class="journey-step final" onclick="toggleStep(this)">
                <div class="step-icon-wrapper" style="border-color: #28a745; color: #28a745;">8</div>
                <div class="step-content">
                    <h5 class="step-title">OOP & Statistics</h5>
                    <div class="step-materials">
                         <span class="material-tag lecture" style="background: rgba(40,167,69,0.1); color:#28a745;"><i class="fas fa-chalkboard-teacher"></i> Lec-08</span>
                        <span class="material-tag tutorial"><i class="fas fa-laptop-code"></i> Tut-08</span>
                    </div>
                    <p class="step-topics">Classes, Inheritance, Statistics</p>
                    <div class="step-details">
                         <ul class="fa-ul small mb-2">
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Classes & Objects</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Inheritance & Polymorphism</li>
                            <li><span class="fa-li"><i class="fas fa-check text-success"></i></span>Basic Statistics</li>
                        </ul>
                        <div class="text-right">
                            <button class="btn btn-sm btn-outline-success rounded-pill py-0" onclick="event.stopPropagation(); scrollToSection('lec08')">Go to Materials</button>
                        </div>
                    </div>
                </div>
                <div class="step-arrow"><i class="fas fa-chevron-right"></i></div>
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
        width: 120px;
        min-width: 120px;
        max-width: 120px;
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
        background: rgba(255,255,255,0.25) !important;
        color: white !important;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        border: none !important;
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
        background: rgba(40, 167, 69, 0.1);
        padding: 8px 14px;
        border-radius: 8px;
        color: inherit;
        font-size: 0.8rem;
        display: inline-block;
        border-left: 3px solid #28a745;
    }
    .tutorial-card.featured .practice-problems {
        background: rgba(220, 53, 69, 0.1);
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
    /* --- LEARNING PATH ANIMATIONS --- */
    @keyframes wave { 0% { transform: rotate(0deg); } 20% { transform: rotate(-15deg); } 40% { transform: rotate(10deg); } 60% { transform: rotate(-5deg); } 100% { transform: rotate(0deg); } }
    @keyframes float { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
    @keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0.7); } 70% { box-shadow: 0 0 0 10px rgba(40, 167, 69, 0); } 100% { box-shadow: 0 0 0 0 rgba(40, 167, 69, 0); } }
    @keyframes spin-slow { 100% { transform: rotate(360deg); } }
    @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-3px); } 75% { transform: translateX(3px); } }
    @keyframes grow-bar { 0% { height: 0; } 100% { height: 100%; } }
    @keyframes stack-up { 0% { transform: translateY(10px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }

    /* --- TIMELINE STYLES --- */
    .learning-journey {
        position: relative;
        padding: 20px 0;
    }
    .learning-journey::before {
        content: '';
        position: absolute;
        left: 29px;
        top: 0;
        bottom: 0;
        width: 3px;
        background: rgba(0,0,0,0.1);
        z-index: 0;
    }
    .journey-step {
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid rgba(0,0,0,0.08);
        border-radius: 16px;
        padding: 20px;
        margin-bottom: 25px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        transition: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        position: relative;
        z-index: 1;
        cursor: pointer;
    }
    .journey-step:hover {
        transform: translateY(-5px) scale(1.01);
        box-shadow: 0 15px 30px rgba(0,0,0,0.08);
        border-color: var(--global-theme-color, #007bff);
    }
    .step-icon-wrapper {
        width: 60px;
        height: 60px;
        min-width: 60px;
        border-radius: 50%;
        background: white;
        border: 3px solid #007bff;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 25px;
        font-size: 1.5rem;
        font-weight: 800;
        font-family: 'Poppins', sans-serif;
        color: #007bff;
        z-index: 2;
        transition: 0.3s;
        box-shadow: 0 5px 15px rgba(0,123,255,0.2);
    }
    .journey-step:hover .step-icon-wrapper {
        background: #007bff;
        color: white;
        transform: scale(1.1);
    }
    /* Specific Icon Animations - Removed for Numbers */
    /* .journey-step:hover .fa-hand-paper { animation: wave 1s infinite; } */

    .step-content { flex: 1; }
    .step-title {
        font-weight: 700;
        margin-bottom: 8px;
        background: linear-gradient(90deg, #333, #555);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 1.15rem;
    }
    .journey-step:hover .step-title {
        background: linear-gradient(90deg, #007bff, #00d2ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .step-arrow {
        color: #ddd;
        font-size: 1.2rem;
        transition: 0.3s;
    }
    .journey-step:hover .step-arrow {
        color: #007bff;
        transform: translateX(5px);
    }

    /* Mobile Timeline */
    @media (max-width: 576px) {
        .learning-journey::before { left: 20px; }
        .journey-step { padding: 15px; flex-direction: row; }
        .step-icon-wrapper { width: 40px; height: 40px; min-width: 40px; font-size: 1rem; margin-right: 15px; border-width: 2px; }
        .step-title { font-size: 1rem; }
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

        /* FIX: Reset gradient text in dark mode for visibility */
        .step-title {
            background: none !important;
            -webkit-text-fill-color: #fff !important;
            color: #fff !important;
        }
        .journey-step:hover .step-title {
             background: linear-gradient(90deg, #007bff, #00d2ff) !important;
             -webkit-background-clip: text !important;
             -webkit-text-fill-color: transparent !important;
        }

        .step-topics { color: #aaa; }
        .material-tag.lecture { background: rgba(0, 123, 255, 0.2); }
        .material-tag.tutorial { background: rgba(40, 167, 69, 0.2); }

        /* Details Dark Mode */
        .step-details { border-top-color: #444; color: #bbb; }

        /* How to Use Colab Dark Mode */
        .how-to-use-box { background: linear-gradient(135deg, #1a2530 0%, #2a3540 100%); border-color: #4285f4; }
        .how-to-use-box h5 { color: #7aafff; }
        .colab-step { background: #2b2b2b; }
        .colab-step-content h6 { color: #fff; }
        .colab-step-content p { color: #bbb; }
        .colab-step-content code { background: #3a3a3a; color: #ddd; }
        .colab-tip { background: #3a3520; color: #ddd; }
    }

    /* Expandable Details Styles */
    .step-details {
        display: none;
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px dashed #eee;
        color: #555;
        font-size: 0.9rem;
        animation: fadeIn 0.4s ease-in-out;
    }
    .journey-step.active .step-details {
        display: block;
    }
    .journey-step.active .step-arrow {
        transform: rotate(90deg);
        color: var(--global-theme-color, #007bff);
    }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-5px); } to { opacity: 1; transform: translateY(0); } }

    /* --- PYTHON GAME STYLES --- */
    .game-section { margin-top: 60px; margin-bottom: 40px; }
    .game-terminal {
        background: #1e1e1e;
        border-radius: 12px;
        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        overflow: hidden;
        border: 1px solid #333;
        font-family: 'Consolas', 'Monaco', monospace;
        max-width: 800px;
        width: 95%; /* Responsive width */
        margin: 0 auto;
        position: relative; /* Contain absolute overlay */
    }
    .game-header {
        background: #252526;
        padding: 10px 15px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #333;
    }
    .game-dot { height: 12px; width: 12px; border-radius: 50%; margin-right: 8px; }
    .dot-red { background: #ff5f56; } .dot-yellow { background: #ffbd2e; } .dot-green { background: #27c93f; }
    .game-title { color: #ccc; font-size: 0.9rem; margin-left: 10px; }

    .game-content { padding: 30px; position: relative; }
    .code-display {
        background: #000;
        padding: 20px;
        border-radius: 8px;
        border-left: 4px solid #007bff;
        color: #d4d4d4;
        font-size: 1.1rem;
        margin-bottom: 25px;
        white-space: pre-wrap;
        box-shadow: inset 0 0 20px rgba(0,0,0,0.5);
    }
    .keyword { color: #569cd6; } .string { color: #ce9178; } .function { color: #dcdcaa; } .number { color: #b5cea8; } .comment { color: #6a9955; }

    .options-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
    .game-btn {
        background: #2d2d2d;
        border: 1px solid #444;
        color: #ddd;
        padding: 15px;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.2s;
        text-align: left;
        font-family: inherit;
        font-size: 1rem;
    }
    .game-btn:hover { background: #3d3d3d; border-color: #666; transform: translateY(-2px); }
    .game-btn.correct { background: #155724; border-color: #28a745; color: #fff; }
    .game-btn.wrong { background: #721c24; border-color: #dc3545; color: #fff; animation: shake 0.4s; }

    .game-footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
        padding-top: 20px;
        border-top: 1px solid #333;
    }
    .score-display { color: #ffd700; font-weight: bold; }

    .game-overlay {
        position: absolute; top: 0; left: 0; right: 0; bottom: 0;
        background: rgba(30,30,30,0.95);
        display: flex; flex-direction: column;
        align-items: center; justify-content: center;
        z-index: 10;
        text-align: center;
    }
    .hidden { display: none !important; }

    @keyframes shake { 0%, 100% { transform: translateX(0); } 25% { transform: translateX(-5px); } 75% { transform: translateX(5px); } }

    .game-input {
        background: transparent;
        border: none;
        border-bottom: 2px solid #555;
        color: #00d2ff;
        font-family: 'Consolas', monospace;
        font-size: 1.2rem;
        width: 200px;
        text-align: center;
        outline: none;
        transition: 0.3s;
    }
    .game-input:focus {
        border-bottom-color: #00d2ff;
        box-shadow: 0 5px 15px rgba(0, 210, 255, 0.1);
    }
    @media (max-width: 576px) {
        .options-grid { grid-template-columns: 1fr; }
        .game-input { width: 100%; box-sizing: border-box; }
        .game-header { font-size: 0.8rem; }
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
        // Ensure ID has # prefix for specific selector if needed,
        // but getElementById doesn't need it.
        // However, for jQuery collapse we usually target the ID.

        // 1. Expand the target lecture
        // The ID passed (e.g. 'lec01') is the ID of the collapsible div
        $('#' + sectionId).collapse('show');

        // 2. Scroll to the card
        const element = document.getElementById(sectionId);
        if (element) {
            // Find the parent card to scroll to header
            const card = element.closest('.lecture-card');
            if (card) {
                $('html, body').animate({
                    scrollTop: $(card).offset().top - 100
                }, 800);

                // Highlight effect
                card.style.transition = "0.3s";
                card.style.transform = 'scale(1.02)';
                card.style.boxShadow = '0 10px 40px rgba(0, 123, 255, 0.3)';
                setTimeout(() => {
                    card.style.transform = 'scale(1)';
                    card.style.boxShadow = '';
                }, 1000);
            }
        }
    }

    function toggleStep(element) {
        // Toggle the active state of the clicked step
        element.classList.toggle('active');
    }
    </script>

    <!-- PYTHON OUTPUT CHALLENGE GAME -->
    <div class="game-section">
        <div class="text-center mb-4">
            <h4 class="font-weight-bold" style="color: #333;">🐍 Python Output Challenge</h4>
            <p class="text-muted">Can you predict the output of these code snippets?</p>
        </div>

        <div class="game-terminal">
            <div class="game-header">
                <div class="game-dot dot-red"></div>
                <div class="game-dot dot-yellow"></div>
                <div class="game-dot dot-green"></div>
                <div class="game-title">user@python-course:~/challenges$ python3 quiz.py</div>
            </div>

            <div class="game-content" id="game-ui">
                <div class="text-center py-5">
                    <h5 class="text-white mb-4">Choose Your Challenge</h5>
                    <div class="d-flex flex-column align-items-center">
                        <button class="btn btn-primary px-4 py-2 m-2" style="width: 280px;" onclick="startGame(1)">
                            <i class="fas fa-terminal mr-2"></i> Level 1: Predict Output
                        </button>
                        <button class="btn btn-outline-info px-4 py-2 m-2" style="width: 280px;" onclick="startGame(2)">
                            <i class="fas fa-code mr-2"></i> Level 2: Code Master
                        </button>
                        <button class="btn btn-outline-danger px-4 py-2 m-2" style="width: 280px;" onclick="startGame(3)">
                            <i class="fas fa-skull mr-2"></i> Level 3: Problem Solving
                        </button>
                    </div>
                </div>
            </div>

            <!-- Hidden Result Overlay -->
            <div id="game-overlay" class="game-overlay hidden">
                <h3 class="text-white mb-3" id="final-message">Game Over!</h3>
                <div class="score-display display-4 mb-4" id="final-score">0/5</div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-light mr-3" onclick="startGame()"><i class="fas fa-redo mr-2"></i>Play Again</button>
                    <button id="share-btn" class="btn btn-primary" onclick="shareResult()"><i class="fas fa-share-alt mr-2"></i>Share Result</button>
                </div>
            </div>
        </div>
    </div>

    <script>
    // Expanded Question Bank (2 per Lecture Topic)
    const level1Questions = [
        // Lec 01: Intro
        { code: "print(type(5.0))", options: ["&lt;class 'int'&gt;", "&lt;class 'float'&gt;", "&lt;class 'str'&gt;"], answer: 1, note: "5.0 is a floating-point number." },
        { code: "print('Hello' + ' ' + 'World')", options: ["Hello World", "Hello+World", "Error"], answer: 0, note: "String concatenation joins strings together." },

        // Lec 02: Data Types
        { code: "x = [1, 2, 3]\nx.append(4)\nprint(x[-1])", options: ["3", "4", "Error"], answer: 1, note: "append(4) adds 4 to the end. Index -1 gives the last element." },
        { code: "d = {'a': 1, 'b': 2}\nprint(d.get('c', 3))", options: ["None", "Error", "3"], answer: 2, note: "get() returns the default value (3) if the key 'c' is missing." },

        // Lec 03: Flow Control
        { code: "for i in range(2, 5):\n    print(i, end='')", options: ["2345", "234", "345"], answer: 1, note: "range(2, 5) goes from 2 up to (but not including) 5." },
        { code: "x = 5\nwhile x > 3:\n    x -= 1\nprint(x)", options: ["3", "2", "4"], answer: 0, note: "The loop stops when x is 3 (3 > 3 is False)." },

        // Lec 04: Functions
        { code: "def add(a, b=10):\n    return a + b\nprint(add(5))", options: ["5", "15", "Error"], answer: 1, note: "b uses default value 10. 5 + 10 = 15." },
        { code: "x = 10\ndef func():\n    global x\n    x = 20\nfunc()\nprint(x)", options: ["10", "20", "Error"], answer: 1, note: "'global' keyword allows modifying the global variable x." },

        // Lec 05: Files
        { code: "with open('f.txt', 'w') as f:\n    f.write('Hi')\n# Is file closed?", options: ["Yes", "No", "Error"], answer: 0, note: "The 'with' statement automatically closes the file." },
        { code: "import math\nprint(math.floor(3.9))", options: ["3", "4", "3.9"], answer: 0, note: "floor() rounds down to the nearest integer." },

        // Lec 06: Errors
        { code: "try:\n    print(1/0)\nexcept:\n    print('A')\nfinally:\n    print('B')", options: ["A", "B", "A B"], answer: 2, note: "Finally block always runs, even after an exception." },
        { code: "raise ValueError('X')", options: ["Prints X", "Crash: ValueError", "Ignores it"], answer: 1, note: "The 'raise' keyword manually triggers an exception." },

        // Lec 07: Data Science
        { code: "import numpy as np\na = np.array([1, 2])\nprint(a * 2)", options: ["[1, 2, 1, 2]", "[2, 4]", "Error"], answer: 1, note: "NumPy arrays perform element-wise multiplication." },
        { code: "# Pandas\ndf.loc[0, 'Age']", options: ["Row 0, Col 'Age'", "Row 'Age', Col 0", "Error"], answer: 0, note: ".loc uses label-based indexing (Row, Col)." },

        // Lec 08: OOP
        { code: "class Dog:\n    def bark(self):\n        return 'Woof'\nprint(Dog().bark())", options: ["Woof", "None", "Error"], answer: 0, note: "Instance method called on a new object." },
        { code: "class A: pass\nclass B(A): pass\nprint(issubclass(B, A))", options: ["True", "False", "Error"], answer: 0, note: "B inherits from A, so it is a subclass." }
    ];

    const level2Questions = [
        { code: "___(mylist)", answer: "len", note: "len() returns the length of a list." },
        { code: "___ my_func():", answer: "def", note: "def is used to define a function." },
        { code: "for x ___ mylist:", answer: "in", note: "The 'in' keyword iterates through a sequence." },
        { code: "x = ___(5.5) # Cast to integer", answer: "int", note: "int() casts a float to an integer." },
        { code: "with open('f.txt', '___') as f: # Write mode", answer: "w", note: "'w' opens a file for writing." },
        { code: "___ math", answer: "import", note: "import is used to include modules." },
        { code: "if x > 5:\n    print('Big')\n___:\n    print('Small')", answer: "else", note: "else handles the false case of an if statement." },
        { code: "class Dog(___): # Inherit from Animal", answer: "animal", note: "Parent class goes in parentheses." }
    ];

    const level3Questions = [
        { code: "What is the result of: 2 ** 3", answer: "8", note: "2 to the power of 3 is 8." },
        { code: "What is len('Hello')?", answer: "5", note: "The string 'Hello' has 5 characters." },
        { code: "Result of: 10 % 3", answer: "1", note: "The modulus operator % returns the remainder (1)." },
        { code: "Output of: 'A' * 3", answer: "AAA", note: "Multiplying a string repeats it." },
        { code: "Sum of list: [1, 2, 3]", answer: "6", note: "1 + 2 + 3 = 6." },
        { code: "Value of: bool(0)", answer: "False", note: "0 evaluates to False in Boolean logic." },
        { code: "Index of 'b' in ['a', 'b', 'c']", answer: "1", note: "List indices start at 0, so 'b' is at index 1." }
    ];

    let gameQuestions = [];
    let currentQ = 0;
    let score = 0;
    let currentLevel = 1;

    function startGame(level = 1) {
        currentLevel = level;
        currentQ = 0;
        score = 0;

        let title = "";
        if (level === 1) {
            gameQuestions = [...level1Questions].sort(() => 0.5 - Math.random()).slice(0, 8);
            title = "user@python-course:~/challenges$ python3 level1.py";
        } else if (level === 2) {
            gameQuestions = [...level2Questions].sort(() => 0.5 - Math.random()).slice(0, 5);
            title = "user@python-course:~/challenges$ python3 level2.py";
        } else {
            // Level 3
            gameQuestions = [...level3Questions].sort(() => 0.5 - Math.random()).slice(0, 5);
            title = "user@python-course:~/challenges$ python3 level3_hard_mode.py";
        }

        document.querySelector('.game-title').textContent = title;
        document.getElementById('game-overlay').classList.add('hidden');
        loadQuestion();
    }

    function loadQuestion() {
        if (currentQ >= gameQuestions.length) {
            endGame();
            return;
        }

        const q = gameQuestions[currentQ];
        const ui = document.getElementById('game-ui');

        let contentHtml = '';

        if (currentLevel === 1) {
             contentHtml = `
                <div class="code-display"><span class="keyword">print</span>(<span class="string">output</span>)</div>
                <div class="options-grid">
                    ${q.options.map((opt, i) => `<button class="game-btn" onclick="checkAnswer(${i}, this)">${opt}</button>`).join('')}
                </div>
            `;
        } else if (currentLevel === 2) {
            contentHtml = `
                <div class="code-display" id="l2-code"></div>
                ${getInputHtml()}
            `;
        } else {
            // Level 3: Text Problem
            contentHtml = `
                <div class="mb-4 p-4" style="background: #2d2d2d; border-radius: 8px; border-left: 4px solid #dc3545;">
                    <h5 class="text-light mb-0"><i class="fas fa-question-circle mr-2"></i>Problem:</h5>
                    <div class="mt-2 text-monospace text-white h5" id="l3-text"></div>
                </div>
                ${getInputHtml()}
            `;
        }

        let html = `
            <div class="d-flex justify-content-between text-muted mb-2 small">
                <span>Level ${currentLevel} | Q ${currentQ + 1}/${gameQuestions.length}</span>
                <span>Score: ${score}</span>
            </div>
            ${contentHtml}
            <div id="feedback-area" class="mt-3 text-center" style="height: 24px;"></div>
        `;

        ui.innerHTML = html;

        if (currentLevel === 1) {
            typeCode(q.code, ui.querySelector('.code-display'));
        } else if (currentLevel === 2) {
            typeCode(q.code, ui.querySelector('#l2-code'), true);
            focusInput();
        } else {
            typeText(q.code, ui.querySelector('#l3-text'));
            focusInput();
        }
    }

    function getInputHtml() {
        return `
            <div class="mt-4 text-center">
                <input type="text" id="game-input" class="game-input" placeholder="Type answer..." autocomplete="off" onkeypress="handleEnter(event)">
                <button class="btn btn-success ml-2" onclick="checkAnswerInput()">Check <i class="fas fa-check"></i></button>
                <div class="small text-muted mt-2">Type your answer and press Enter</div>
            </div>
        `;
    }

    function focusInput() {
        setTimeout(() => {
            const input = document.getElementById('game-input');
            if(input) input.focus();
        }, 500);
    }

    function typeText(text, element) {
        element.textContent = '';
        let i = 0;
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, 20);
            }
        }
        type();
    }

    function typeCode(text, element, isL2 = false) {
        element.innerHTML = ''; // Start empty
        let i = 0;
        const speed = 15;

        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            } else {
                // Syntax highlighting
                let formatted = element.textContent;

                // Hide keywords to protect
                formatted = formatted.replace(/\bclass\b/g, '##KW_CLASS##');

                formatted = formatted
                    .replace(/\bprint\b/g, '<span class="function">print</span>')
                    .replace(/\bdef\b/g, '<span class="keyword">def</span>')
                    .replace(/\breturn\b/g, '<span class="keyword">return</span>')
                    .replace(/\bimport\b/g, '<span class="keyword">import</span>')
                    .replace(/\bif\b/g, '<span class="keyword">if</span>')
                    .replace(/\belse\b/g, '<span class="keyword">else</span>')
                    .replace(/(___)/g, '<span class="text-warning font-weight-bold">___</span>') // Highlight blank
                    .replace(/('[^']*')/g, '<span class="string">$1</span>')
                    .replace(/(\b\d+\b)/g, '<span class="number">$1</span>');

                formatted = formatted.replace(/##KW_CLASS##/g, '<span class="keyword">class</span>');

                element.innerHTML = formatted;
            }
        }
        type();
    }

    // Level 1 Check
    function checkAnswer(selected, btn) {
        const q = gameQuestions[currentQ];
        const buttons = document.querySelectorAll('.game-btn');
        const feedback = document.getElementById('feedback-area');

        buttons.forEach(b => b.onclick = null);

        if (selected === q.answer) {
            btn.classList.add('correct');
            feedback.innerHTML = `<span class="text-success small">${q.note}</span>`;
            score++;
        } else {
            btn.classList.add('wrong');
            // Find correct button
             buttons[q.answer].classList.add('correct');
            feedback.innerHTML = `<span class="text-danger small">Oops! ${q.note}</span>`;
        }

        setTimeout(() => {
            currentQ++;
            loadQuestion();
        }, 2200);
    }

    // Level 2 Check
    // Level 2 & 3 Check (Input)
    function checkAnswerInput() {
        const input = document.getElementById('game-input');
        const val = input.value.trim().toLowerCase();
        const q = gameQuestions[currentQ];
        const feedback = document.getElementById('feedback-area');
        const btn = document.querySelector('.btn-success'); // Check button

        if (!val) return;

        input.disabled = true;
        btn.disabled = true;

        // Flexible validation logic:
        // Some answers might be numbers, some text. Lowercase comparison works for most.
        if (val === q.answer.toString().toLowerCase()) {
            input.style.borderColor = "#28a745";
            input.style.color = "#28a745";
            feedback.innerHTML = `<span class="text-success small">Correct! ${q.note}</span>`;
            score++;
        } else {
            input.style.borderColor = "#dc3545";
            input.style.color = "#dc3545";
            feedback.innerHTML = `<span class="text-danger small">Wrong! Answer: ${q.answer}. ${q.note}</span>`;
        }

        setTimeout(() => {
            currentQ++;
            loadQuestion();
        }, 2200);
    }

    function handleEnter(e) {
        if (e.key === 'Enter') checkAnswerInput();
    }

    function endGame() {
        const overlay = document.getElementById('game-overlay');
        const scoreEl = document.getElementById('final-score');
        const msg = document.getElementById('final-message');

        scoreEl.textContent = `${score}/${gameQuestions.length}`;

        // Dynamic Buttons
        let buttonsHtml = '';

        if (currentLevel === 1) {
            if (score >= 5) { // Unlock Level 2
                 msg.innerHTML = "🏆 Level 1 Complete!";
                 msg.style.color = "#28a745";
                 buttonsHtml = `
                    <button class="btn btn-warning mr-2" onclick="startGame(2)">Level 2 <i class="fas fa-arrow-right"></i></button>
                    <button class="btn btn-outline-light mr-2" onclick="showMenu()">Menu</button>
                    <button id="share-btn" class="btn btn-primary" onclick="shareResult()"><i class="fas fa-share-alt"></i></button>
                 `;
            } else {
                msg.innerHTML = "👾 Try Again!";
                msg.style.color = "#ffc107";
                buttonsHtml = `
                    <button class="btn btn-outline-light mr-2" onclick="startGame(1)"><i class="fas fa-redo"></i> Retry</button>
                    <button class="btn btn-outline-light" onclick="showMenu()">Menu</button>
                 `;
            }
        } else if (currentLevel === 2) {
             if (score >= 3) { // Level 2 Win -> Unlock L3
                 msg.innerHTML = "👑 CODE MASTER!";
                 msg.style.color = "#00d2ff";
                 buttonsHtml = `
                    <button class="btn btn-danger mr-2" onclick="startGame(3)">Level 3 <i class="fas fa-skull"></i></button>
                    <button class="btn btn-outline-light mr-2" onclick="showMenu()">Menu</button>
                    <button id="share-btn" class="btn btn-primary" onclick="shareResult()">Share</button>
                 `;
             } else {
                 msg.innerHTML = "🐛 Keep Formatting...";
                 msg.style.color = "#dc3545";
                 buttonsHtml = `
                    <button class="btn btn-outline-light mr-2" onclick="startGame(2)">Retry L2</button>
                    <button class="btn btn-outline-light" onclick="showMenu()">Menu</button>
                 `;
             }
        } else {
            // Level 3 Win
            if (score >= 3) {
                 msg.innerHTML = "🔥 PYTHON LEGEND! 🔥";
                 msg.style.color = "#dc3545"; // Red for Hard Mode
                 buttonsHtml = `
                    <button class="btn btn-outline-light mr-2" onclick="showMenu()">Menu</button>
                    <button id="share-btn" class="btn btn-primary" onclick="shareResult()">Share Victory</button>
                 `;
            } else {
                 msg.innerHTML = "💀 So Close...";
                 msg.style.color = "#666";
                 buttonsHtml = `
                    <button class="btn btn-outline-light mr-2" onclick="startGame(3)">Retry L3</button>
                    <button class="btn btn-outline-light" onclick="showMenu()">Menu</button>
                 `;
            }
        }

        // Update overlay buttons
        const container = overlay.querySelector('.d-flex');
        if (container) {
            container.innerHTML = buttonsHtml;
        } else {
             const div = document.createElement('div');
             div.className = "d-flex justify-content-center";
             div.innerHTML = buttonsHtml;
             overlay.appendChild(div);
        }

        overlay.classList.remove('hidden');
    }

    function showMenu() {
        const ui = document.getElementById('game-ui');
        const overlay = document.getElementById('game-overlay');

        overlay.classList.add('hidden');

        ui.innerHTML = `
            <div class="text-center py-5">
                <h5 class="text-white mb-4">Choose Your Challenge</h5>
                <div class="d-flex flex-column align-items-center">
                    <button class="btn btn-primary px-4 py-2 m-2" style="width: 280px;" onclick="startGame(1)">
                        <i class="fas fa-terminal mr-2"></i> Level 1: Predict Output
                    </button>
                    <button class="btn btn-outline-info px-4 py-2 m-2" style="width: 280px;" onclick="startGame(2)">
                        <i class="fas fa-code mr-2"></i> Level 2: Code Master
                    </button>
                    <button class="btn btn-outline-danger px-4 py-2 m-2" style="width: 280px;" onclick="startGame(3)">
                        <i class="fas fa-skull mr-2"></i> Level 3: Problem Solving
                    </button>
                </div>
            </div>
        `;
    }


    function shareResult() {
        const text = `I just scored ${score}/${gameQuestions.length} on Python Challenge Level ${currentLevel}! 🐍 Can you beat me?`;
        navigator.clipboard.writeText(text).then(() => {
            const btn = document.getElementById('share-btn');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
            btn.classList.replace('btn-primary', 'btn-success');
            setTimeout(() => {
                btn.innerHTML = originalHTML;
                btn.classList.replace('btn-success', 'btn-primary');
            }, 2000);
        });
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
