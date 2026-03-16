document.addEventListener("DOMContentLoaded", function() {
    
    // --- CITATION DATA ---
    const yearStats = {
        2012: 20,
        2013: 33,
        2014: 49,
        2015: 50,
        2016: 65,
        2017: 115,
        2018: 144,
        2019: 207,
        2020: 322,
        2021: 226,
        2022: 336,
        2023: 393,
        2024: 425,
        2025: 326,
        2026: 11
    };

    // Get Today's Date for the Label
    const today = new Date();
    const dateString = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' }); // e.g. "07 Jan"

    const labels = Object.keys(yearStats).sort((a, b) => a - b).map(year => {
        if (year === '2026') return `2026`;
        return year;
    });

    const dataCites = Object.keys(yearStats).sort((a, b) => a - b).map(year => yearStats[year]);

    // Setup Chart Context
    const ctx = document.getElementById('impactChart').getContext('2d');

    // Create a "Glow" Gradient
    let gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(255, 193, 7, 0.6)'); 
    gradient.addColorStop(1, 'rgba(255, 193, 7, 0.0)'); 

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Citations',
                data: dataCites,
                borderColor: '#ffc107',
                backgroundColor: gradient,
                borderWidth: 3,
                pointBackgroundColor: '#1e1e1e',
                pointBorderColor: '#ffc107',
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            
            // --- CONFIGURATION FOR OLDER CHART.JS VERSIONS (v2) ---
            legend: { display: false },
            title: { 
                display: true, 
                text: 'Citations per Year', 
                fontColor: '#f0f0f0', 
                fontSize: 18 
            },
            tooltips: {
                mode: 'index',
                intersect: false,
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                titleFontColor: '#000',
                bodyFontColor: '#000'
            },
            
            // --- CONFIGURATION FOR NEWER CHART.JS VERSIONS (v3/v4) ---
            plugins: {
                legend: { display: false },
                title: {
                    display: true,
                    text: 'Citations per year',
                    color: '#f0f0f0',
                    font: { size: 18, weight: '600', family: 'sans-serif' },
                    padding: { bottom: 20 }
                },
                tooltip: {
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    titleColor: '#000',
                    bodyColor: '#000',
                    padding: 12,
                    displayColors: false,
                    callbacks: {
                        label: function(context) {
                            return context.parsed.y + ' Citations';
                        }
                    }
                }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: '#aaaaaa' }
                },
                y: {
                    beginAtZero: true,
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#aaaaaa' }
                }
            }
        }
    });
});

// Configuration: Your name variations to detect "First Author" status
const MY_NAMES = ["S. SHARMA", "SUSHIL SHARMA", "S.K. SHARMA", "S. K. SHARMA"];

document.addEventListener("DOMContentLoaded", function() {
    initSmartLinks();
    generateCollaborationGraph();
});

// 1. SMART FILTERING FUNCTION
function filterPublications() {
    var input = document.getElementById('pub-search');
    var filter = input.value.trim().toUpperCase();
    var container = document.getElementById('pub-list');
    var cards = container.getElementsByClassName('publication-card');
    var count = 0;

    // Detect specific search commands
    var searchType = "GENERAL";
    var query = filter;
    
    if (filter.startsWith("AUTHOR:")) {
        searchType = "AUTHOR";
        query = filter.replace("AUTHOR:", "").trim();
    } else if (filter.startsWith("YEAR:")) {
        searchType = "YEAR";
        query = filter.replace("YEAR:", "").trim();
    } else if (filter.startsWith("FIRST:")) {
        searchType = "FIRST"; // Search only papers where specific person is first author
        query = filter.replace("FIRST:", "").trim();
    }

    for (var i = 0; i < cards.length; i++) {
        var card = cards[i];
        var title = card.querySelector('.pub-title').innerText.toUpperCase();
        var authors = card.querySelector('.pub-authors').innerText.toUpperCase();
        var year = card.getAttribute('data-year');
        var isMatch = false;

        if (searchType === "AUTHOR") {
            isMatch = authors.indexOf(query) > -1;
        } else if (searchType === "YEAR") {
            isMatch = year.indexOf(query) > -1;
        } else if (searchType === "FIRST") {
            // Check if the query matches the *start* of the author string
            // We split by comma to get the first author block
            var firstAuthor = authors.split(',')[0].trim();
            isMatch = firstAuthor.indexOf(query) > -1;
        } else {
            // General search (Title + Author + Year)
            var text = title + " " + authors + " " + year;
            isMatch = text.indexOf(query) > -1;
        }

        if (isMatch) {
            card.style.display = "";
            count++;
        } else {
            card.style.display = "none";
        }
    }
    document.getElementById('count-label').innerText = "Showing " + count + " publications";
}

// 3. COLLABORATION GRAPH GENERATOR
function generateCollaborationGraph() {
    var cards = document.getElementsByClassName('publication-card');
    var collaborators = {}; // Map: Name -> Count

    for (var i = 0; i < cards.length; i++) {
        // Clean author string: remove "et al", remove "...", split by commas
        var rawAuthors = cards[i].querySelector('.pub-authors').innerText;
        
        // Basic cleanup
        var cleanText = rawAuthors.replace(/et al\.?/gi, "").replace(/\.\.\./g, ",");
        var names = cleanText.split(",");

        names.forEach(function(name) {
            name = name.trim();
            var upperName = name.toUpperCase();
            
            // Skip empty strings and skip YOUR own name
            if (name.length < 3) return;
            if (MY_NAMES.some(my => upperName.includes(my))) return;

            // Simple normalization (e.g., "P. Moskal" matches "Paweł Moskal")
            // This is a naive check; for better results, consistent naming in HTML is best.
            // We will use the full name as the key for now.
            if (collaborators[name]) {
                collaborators[name]++;
            } else {
                collaborators[name] = 1;
            }
        });
    }

    // Sort collaborators by count (descending)
    var sortedCollabs = Object.keys(collaborators).map(function(key) {
        return [key, collaborators[key]];
    }).sort(function(first, second) {
        return second[1] - first[1];
    });

    // Take top 15 collaborators
    var topCollabs = sortedCollabs.slice(0, 20);

    // Render to HTML
    var cloudContainer = document.getElementById('collaborator-cloud');
    if (topCollabs.length > 0) {
        document.getElementById('stats-section').style.display = "block";
        
        topCollabs.forEach(function(item) {
            var name = item[0];
            var count = item[1];
            
            var tag = document.createElement("span");
            tag.className = "collaborator-tag";
            tag.innerHTML = name + ' <span class="collab-count">' + count + '</span>';
            
            // Optional: Click a collaborator to filter specifically for them!
            tag.style.cursor = "pointer";
            tag.onclick = function() {
                var searchBox = document.getElementById('pub-search');
                searchBox.value = "author:" + name;
                filterPublications(); // Trigger search
                window.scrollTo(0, 0); // Scroll to top
            };
            
            cloudContainer.appendChild(tag);
        });
    }
}

// 4. SMART LINKS (Your existing requested feature)
function initSmartLinks() {
    var titles = document.querySelectorAll('.pub-title');
    titles.forEach(function(h5) {
        // Skip if badge was added inside (check if A tag exists first)
        if (!h5.querySelector('a')) {
            // Be careful to exclude the badge text if it was already added
            // Safest way: Get the text node only
            var text = h5.childNodes[0].nodeValue; 
            if(!text) text = h5.innerText; // Fallback

            var searchUrl = "https://scholar.google.com/scholar?q=" + encodeURIComponent(text);
            
            var link = document.createElement('a');
            link.href = searchUrl;
            link.target = "_blank";
            link.innerText = text;
            
            // Clear and re-append (preserving badges if any exist)
            // But since this runs first, we can just replace content usually.
            // A safer approach for Mixed Content:
            h5.innerHTML = ""; 
            h5.appendChild(link);
        }
    });
}
