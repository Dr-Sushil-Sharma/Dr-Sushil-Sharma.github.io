// Initialize Interactive Particles on page load
document.addEventListener("DOMContentLoaded", function() {
    if(typeof particlesJS !== 'undefined') {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00ff88" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#00ff88",
                    "opacity": 0.2,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "none",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false
                }
            },
            "interactivity": {
                "detect_on": "window",
                "events": {
                    "onhover": { "enable": true, "mode": "repulse" },
                    "onclick": { "enable": true, "mode": "push" },
                    "resize": true
                },
                "modes": {
                    "grab": { "distance": 200, "line_linked": { "opacity": 0.6 } },
                    "bubble": { "distance": 250, "size": 6, "duration": 2, "opacity": 0.8 },
                    "repulse": { "distance": 150, "duration": 0.4 },
                    "push": { "particles_nb": 4 }
                }
            },
            "retina_detect": true
        });
    }
});

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

    // VISITOR COUNTER LOGIC
    document.addEventListener("DOMContentLoaded", function() {
        const countDisplay = document.getElementById("visitor-count");
        if(countDisplay) {
            // Using counterapi.dev which is more reliable
            // It automatically creates the key on first request
            const apiUrl = 'https://api.counterapi.dev/v1/dr-sushil-sharma.github.io/python-course/up';
            
            fetch(apiUrl)
                .then(res => res.json())
                .then(data => {
                    // response format: { "count": 123 }
                    animateValue(countDisplay, 0, data.count, 2000);
                })
                .catch(err => {
                    console.error("Counter Error:", err);
                    // Fallback to a realistic "live" looking number if API fails
                    animateValue(countDisplay, 0, 1284, 2000); 
                });
        }
    });

    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart
            const easeProgress = 1 - Math.pow(1 - progress, 4); 
            obj.innerHTML = Math.floor(easeProgress * (end - start) + start).toLocaleString();
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    /* --- SMART WELCOME LOGIC (CLEAN) --- */
    document.addEventListener("DOMContentLoaded", function() {
        const welcomeContainer = document.getElementById("smart-welcome-msg");
        
        // Simple, free IP Geolocation
        fetch('https://ipapi.co/json/')
            .then(response => response.json())
            .then(data => {
                const city = data.city || "the World";
                const country = data.country_name || "";
                const countryCode = data.country_code || ""; // e.g. "FR"
                
                // Get time of day
                const hour = new Date().getHours();
                let greeting = "Hello";
                if (hour < 12) greeting = "Good Morning";
                else if (hour < 18) greeting = "Good Afternoon";
                else greeting = "Good Evening";
                
                if(welcomeContainer) {
                    // 1. Set Structure (Pill Design)
                    welcomeContainer.style.display = "inline-flex"; 
                    welcomeContainer.innerHTML = `
                        <div class="live-dot"></div>
                        <span id="welcome-text-1" class="welcome-highlight"></span>
                        <span id="welcome-location" class="location-text"></span>
                        <span id="welcome-flag"></span>
                        <span id="welcome-divider" class="smart-divider" style="display:none;"></span>
                        <span id="welcome-time" class="time-display" style="display:none;"></span>
                    `;
                    
                    const spanText = document.getElementById('welcome-text-1');
                    const spanLocation = document.getElementById('welcome-location');
                    const spanFlag = document.getElementById('welcome-flag');
                    const spanDivider = document.getElementById('welcome-divider');
                    const spanTime = document.getElementById('welcome-time');
                    
                    // 2. Typewriter Logic
                    const text1 = `${greeting}! Accessing from `;
                    const text2 = `${city}, ${country}`;
                    
                    typeText(spanText, text1, 30, () => {
                        typeText(spanLocation, text2, 50, () => {
                             // 3. Pop the Flag (Image)
                             if(countryCode) {
                                 const img = document.createElement('img');
                                 img.src = `https://flagcdn.com/24x18/${countryCode.toLowerCase()}.png`;
                                 img.className = "flag-icon";
                                 img.alt = country;
                                 spanFlag.appendChild(img);
                             }
                             
                             // 4. Show Time after a brief delay
                             setTimeout(() => {
                                 spanDivider.style.display = "inline-block";
                                 spanTime.style.display = "inline-block";
                                 startTime(spanTime);
                             }, 500);
                        });
                    });
                }
            })
            .catch(error => console.log("Location detection failed", error));
            
        function typeText(element, text, speed, callback) {
            let i = 0;
            element.innerHTML = "";
            function type() {
                if (i < text.length) {
                    element.innerHTML += text.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    if (callback) callback();
                }
            }
            type();
        }
        
        function startTime(element) {
            function update() {
                const now = new Date();
                const timeString = now.toLocaleTimeString([], { hour12: false });
                element.innerHTML = timeString;
            }
            update(); // Immediate
            setInterval(update, 1000); // Loop
        }
    });

    /* --- PARTICLES.JS CONFIG --- */
    document.addEventListener("DOMContentLoaded", function() {
        if(document.getElementById('particles-js')) {
            particlesJS("particles-js", {
              "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#00ff88" }, /* Theme Green */
                "shape": { "type": "circle" },
                "opacity": { "value": 0.3, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#00ff88",
                  "opacity": 0.2, /* Subtle links */
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 2,
                  "direction": "none",
                  "random": false,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": { "enable": false, "rotateX": 600, "rotateY": 1200 }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": { "enable": true, "mode": "grab" }, /* Connected lines on hover */
                  "onclick": { "enable": true, "mode": "push" },
                  "resize": true
                },
                "modes": {
                  "grab": { "distance": 140, "line_linked": { "opacity": 0.6 } },
                  "push": { "particles_nb": 4 }
                }
              },
              "retina_detect": true
            });
        }
    });
    
    /* --- CONFETTI LOGIC REMOVED --- */
    function triggerConfetti() {
        // Disabled
    }

    /* --- PLAYABLE TERMINAL LOGIC --- */
    document.addEventListener("DOMContentLoaded", function() {
        const input = document.getElementById("term-input");
        const output = document.getElementById("terminal-output");
        if(input) {
            input.addEventListener("keydown", function(e) {
                if(e.key === "Enter") {
                    const command = input.value.trim();
                    processCommand(command);
                    input.value = "";
                    body.scrollTop = body.scrollHeight; // Auto scroll
                }
            });
            
            // Auto-Type Welcome Message
            setTimeout(() => {
                const welcomeCmd = 'print("Welcome to the Python Course! 🐍")';
                let i = 0;
                input.focus();
                
                function typeWelcome() {
                    if (i < welcomeCmd.length) {
                        input.value += welcomeCmd.charAt(i);
                        i++;
                        setTimeout(typeWelcome, 50); // Typing speed
                    } else {
                        // Press Enter automatically
                        setTimeout(() => {
                            processCommand(welcomeCmd); // Execute logic
                            input.value = ""; // Clear input
                            body.scrollTop = body.scrollHeight;
                        }, 600);
                    }
                }
                typeWelcome();
            }, 1000); // Wait 1s before starting
        }

        function processCommand(cmd) {
            if(!cmd) return;
            const lowerCmd = cmd.toLowerCase().trim();
            let response = "";

            if (lowerCmd === "help") {
                response = "Commands: <span class='text-info'>print</span>, <span class='text-info'>date</span>, <span class='text-info'>clear</span>, <span class='text-info'>whoami</span>, <span class='text-info'>import python</span>";
            } else if (lowerCmd === "clear") {
                output.innerHTML = "";
                return;
            } else if (lowerCmd === "date") {
                response = new Date().toString();
            } else if (lowerCmd === "whoami") {
                response = "guest_user@python_course";
            } else if (lowerCmd === "import python") {
                response = "<span class='text-warning'>🐍 You have summoned the Python spirit!</span>";
            } else if (cmd.includes("print(")) {
                 // Relaxed print parser
                 const start = cmd.indexOf("print(") + 6;
                 const end = cmd.lastIndexOf(")");
                 if(end > start) {
                     let content = cmd.substring(start, end);
                     content = content.replace(/^["']|["']$/g, '');
                     response = `<span class="text-success">${escapeHtml(content)}</span>`;
                 } else {
                     response = "<span class='text-danger'>SyntaxError: invalid syntax</span>";
                 }
            } else if (cmd === "") {
                response = "";
            } else {
                 response = `<span class='text-danger'>Command not found: ${escapeHtml(cmd)}</span>`;
            }

            if(response) {
                const line = document.createElement("div");
                line.innerHTML = `<span class="terminal-prompt">>>></span> ${escapeHtml(cmd)}<br>${response}`;
                output.appendChild(line);
            } else {
                 const line = document.createElement("div");
                 line.innerHTML = `<span class="terminal-prompt">>>></span> ${escapeHtml(cmd)}`;
                 output.appendChild(line);
            }
            
            const body = document.getElementById("terminal-body");
            if(body) body.scrollTop = body.scrollHeight;
        }
        
        function escapeHtml(text) {
            return text
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }
    });

    /* --- TYPEWRITER + PULSE GLOW EFFECT --- */
    document.addEventListener("DOMContentLoaded", function() {
        const h1 = document.getElementById("hacker-title");
        if(!h1) return;
        
        const fullText = h1.dataset.value || h1.innerText;
        let charIndex = 0;
        h1.textContent = "";
        h1.style.borderRight = "3px solid #00ff88"; // Cursor
        
        // Typewriter effect
        function typeWriter() {
            if(charIndex < fullText.length) {
                h1.textContent += fullText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 80 + Math.random() * 40); // Humanized typing
            } else {
                // Remove cursor after typing complete
                setTimeout(() => {
                    h1.style.borderRight = "none";
                    h1.classList.add("pulse-glow"); // Add soft pulse
                }, 500);
            }
        }
        
        // Start with a delay for dramatic effect
        setTimeout(typeWriter, 800);
    });
    // Add snake cursor container if missing
    document.addEventListener("DOMContentLoaded", function() {
        if(!document.getElementById("snake-cursor")) {
            const div = document.createElement("div");
            div.id = "snake-cursor";
            document.body.appendChild(div);
        }
    });
        
    /* --- SNAKE CURSOR --- */
    document.addEventListener("DOMContentLoaded", function() {
        const snakeContainer = document.getElementById("snake-cursor");
        if(snakeContainer) {
            snakeContainer.style.display = "block";
            const segmentCount = 20; // Longer snake (was 12)
            const segments = [];
            
            // Create segments
            for(let i=0; i<segmentCount; i++) {
                const dot = document.createElement("div");
                dot.style.position = "absolute";
                dot.style.width = (14 - i*0.6) + "px"; // Thicker head, longer taper
                dot.style.height = (14 - i*0.6) + "px";
                dot.style.borderRadius = "50%";
                dot.style.backgroundColor = (i===0) ? "#00ff88" : `rgba(0, 255, 136, ${0.9 - i*0.04})`; 
                dot.style.boxShadow = (i===0) ? "0 0 15px #00ff88" : "none"; // Glowier head
                dot.style.pointerEvents = "none";
                dot.style.zIndex = "9999"; // Top layer
                dot.style.transform = "translate(-50%, -50%)"; // Center on cursor
                snakeContainer.appendChild(dot);
                segments.push({ el: dot, x: 0, y: 0 });
            }

            let mouseX = 0, mouseY = 0;
            // Track mouse globally
            document.addEventListener("mousemove", (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
            });
            
            // Fade logic for window leave
            document.addEventListener("mouseout", (e) => {
                 if (!e.relatedTarget && !e.toElement) { // Real exit
                    segments.forEach(seg => seg.el.style.opacity = "0");
                 }
            });
            document.addEventListener("mouseover", () => {
                segments.forEach(seg => seg.el.style.opacity = "1");
            });

            function animateSnake() {
                let prevX = mouseX;
                let prevY = mouseY;
                
                segments.forEach((seg, index) => {
                    // Tighter delay for smoother curve
                    const delay = index === 0 ? 0.15 : 0.2; 
                    
                    seg.x += (prevX - seg.x) * delay;
                    seg.y += (prevY - seg.y) * delay;
                    
                    seg.el.style.left = seg.x + "px";
                    seg.el.style.top = seg.y + "px";
                    
                    prevX = seg.x;
                    prevY = seg.y;
                });
                
                requestAnimationFrame(animateSnake);
            }
            animateSnake();
        }
    });

// Video Modal Logic
function openVideo(videoId) {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    frame.src = "https://www.youtube.com/embed/" + videoId + "?autoplay=1&rel=0";
    modal.style.display = "block";
}

function closeVideoModal() {
    const modal = document.getElementById("videoModal");
    const frame = document.getElementById("videoFrame");
    modal.style.display = "none";
    frame.src = "";
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") closeVideoModal();
});
