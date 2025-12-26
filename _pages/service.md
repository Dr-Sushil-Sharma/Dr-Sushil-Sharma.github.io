---
layout: page
permalink: /service/
title: Service
description: My contributions to the academic community through committee work, reviewing, and outreach.
nav: true
nav_order: 7
---

<div class="row mb-4">
    <div class="col-sm-12">
        <p class="lead">
            I am committed to contributing to the academic community and broader society through various professional service activities, ensuring the growth of scientific exchange and peer review.
        </p>
    </div>
</div>

<hr>

<div class="row mb-5">
    <div class="col-12">
        <h3 class="mb-4"><i class="fas fa-book-reader mr-2"></i> Editorial & Reviewing</h3>
        
        <div class="service-card featured-service">
            <div class="service-icon">
                <i class="fas fa-pen-nib fa-2x"></i>
            </div>
            <div class="service-content">
                <h5 class="service-title">Associate Editor</h5>
                <p class="service-subtitle">EJNMMI Physics Journal (Springer)</p>
                <a href="https://link.springer.com/journal/40658/editorial-board" target="_blank" class="btn btn-sm btn-outline-primary mt-2">
                    View Editorial Board <i class="fas fa-external-link-alt ml-1"></i>
                </a>
            </div>
        </div>
    </div>
</div>

<div class="row">
    <div class="col-12">
        <h3 class="mb-4"><i class="fas fa-users-cog mr-2"></i> Organizing Committees</h3>
        
        <div class="service-list">
            
            <div class="service-card">
                <div class="service-year">2019</div>
                <div class="service-content">
                    <h5 class="service-title">Scientific Secretary</h5>
                    <p class="service-text">3rd Jagiellonian Symposium on Fundamental and Applied Subatomic Physics & DAE International Symposium on Nuclear Physics</p>
                    <p class="service-meta"><i class="fas fa-university mr-1"></i> Jagiellonian University, Krakow, Poland</p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-year">2014</div>
                <div class="service-content">
                    <h5 class="service-title">Co-organizer</h5>
                    <p class="service-text">II Symposium on Applied Nuclear Physics and Innovative Technologies</p>
                    <p class="service-meta"><i class="fas fa-map-marker-alt mr-1"></i> Krakow, Poland</p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-year">2014</div>
                <div class="service-content">
                    <h5 class="service-title">Co-organizer</h5>
                    <p class="service-text">13th International Workshop on Meson Production, Properties and Interaction</p>
                    <p class="service-meta"><i class="fas fa-map-marker-alt mr-1"></i> Krakow, Poland</p>
                </div>
            </div>

            <div class="service-card">
                <div class="service-year">2013</div>
                <div class="service-content">
                    <h5 class="service-title">Co-organizer</h5>
                    <p class="service-text">Symposium on Applied Nuclear Physics and Innovative Technologies</p>
                    <p class="service-meta"><i class="fas fa-map-marker-alt mr-1"></i> Krakow, Poland</p>
                </div>
            </div>

        </div>
    </div>
</div>

<div class="row mt-5">
    <div class="col-12">
        <h3 class="mb-4 text-muted"><i class="fas fa-hands-helping mr-2"></i> Outreach</h3>
        <div class="alert alert-light border" role="alert">
            <i class="fas fa-info-circle mr-2"></i> Outreach and community engagement activities will be updated soon.
        </div>
    </div>
</div>


<style>
/* === Card Styling === */
.service-card {
    display: flex;
    flex-direction: row;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    background: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    transition: transform 0.2s, box-shadow 0.2s;
    align-items: center;
}

.service-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
    border-color: var(--global-theme-color, #007bff);
}

/* === Editorial Featured Card === */
.service-card.featured-service {
    border-left: 5px solid #28a745; /* Green accent for service */
    background: #f8fff9; /* Very light green tint */
}

.service-icon {
    padding-right: 1.5rem;
    color: #28a745;
}

.service-subtitle {
    font-size: 1rem;
    color: #6c757d;
    margin-bottom: 0.5rem;
}

/* === Committee List Styling === */
.service-year {
    font-size: 1.5rem;
    font-weight: 700;
    color: #495057;
    padding-right: 1.5rem;
    border-right: 2px solid #f1f1f1;
    min-width: 90px;
    text-align: right;
    align-self: flex-start; /* Align year to top */
}

.service-content {
    padding-left: 1.5rem;
    flex: 1;
}

.service-title {
    font-weight: 700;
    color: #212529;
    margin-bottom: 0.3rem;
}

.service-text {
    margin-bottom: 0.3rem;
    font-size: 1rem;
    color: #333;
}

.service-meta {
    font-size: 0.85rem;
    color: #888;
    margin-bottom: 0;
}

/* === Dark Mode Support === */
@media (prefers-color-scheme: dark) {
    .service-card {
        background: #2b2b2b;
        border-color: #444;
    }
    
    .service-card:hover {
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    }
    
    .service-card.featured-service {
        background: #232b23; /* Dark green tint */
        border-left-color: #28a745;
    }

    .service-title {
        color: #f1f1f1;
    }

    .service-text {
        color: #d1d1d1;
    }

    .service-subtitle {
        color: #adb5bd;
    }

    .service-year {
        color: #ced4da;
        border-right-color: #444;
    }
    
    .alert-light {
        background-color: #333;
        border-color: #444;
        color: #ccc;
    }
}

/* === Mobile Responsiveness === */
@media (max-width: 576px) {
    .service-card {
        flex-direction: column;
        align-items: flex-start;
    }
    .service-year {
        text-align: left;
        border-right: none;
        border-bottom: 2px solid #f1f1f1;
        padding-right: 0;
        padding-bottom: 0.5rem;
        margin-bottom: 0.8rem;
        width: 100%;
    }
    
    @media (prefers-color-scheme: dark) {
        .service-year { border-bottom-color: #444; }
    }

    .service-content {
        padding-left: 0;
    }
    
    .service-icon {
        margin-bottom: 1rem;
    }
}
</style>