---
layout: page
permalink: /contact/
title: Contact
description: How to get in touch and where to find me online.
nav: true
nav_order: 9
---

<div class="row mb-4">
    <div class="col-12">
        <p class="lead">
            I am always open to discussing research, potential collaborations, or opportunities for student supervision. The best way to reach me is via email.
        </p>
    </div>
</div>

<div class="row mb-5">
    
    <div class="col-md-5 mb-4 mb-md-0">
        <div class="contact-card h-100">
            <h3 class="card-title mb-4">Get in Touch</h3>
            
            <div class="contact-item">
                <div class="icon-box">
                    <i class="fas fa-envelope"></i>
                </div>
                <div class="contact-text">
                    <span class="label">Email</span>
                    <a href="mailto:sushil.sharma@uj.edu.pl" class="value">sushil.sharma@uj.edu.pl</a>
                </div>
            </div>

            <div class="contact-item">
                <div class="icon-box">
                    <i class="fas fa-map-marker-alt"></i>
                </div>
                <div class="contact-text">
                    <span class="label">Office Location</span>
                    <span class="value">Room: F-1-29</span>
                    <span class="value text-muted small">Dept. of Experimental Particle Physics</span>
                    <span class="value text-muted small">Jagiellonian University</span>
                </div>
            </div>

            <div class="contact-item">
                <div class="icon-box">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="contact-text">
                    <span class="label">Office Hours</span>
                    <span class="value">By appointment (please email)</span>
                </div>
            </div>

        </div>
    </div>

    <div class="col-md-7">
        <div class="map-container h-100">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2562.146602066228!2d19.90325431571683!3d50.04603997942152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b62b703668f%3A0x62955543666d6d84!2sFaculty%20of%20Physics%2C%20Astronomy%20and%20Applied%20Computer%20Science%20Jagiellonian%20University!5e0!3m2!1sen!2spl!4v1677685000000!5m2!1sen!2spl" 
                width="100%" 
                height="100%" 
                style="border:0; min-height: 350px; border-radius: 8px;" 
                allowfullscreen="" 
                loading="lazy">
            </iframe>
        </div>
    </div>
</div>

<hr>

<h3 class="mb-4 mt-4 text-center">Connect Online</h3>

<div class="row justify-content-center">
    
    <div class="col-6 col-md-3 mb-3">
        <a href="https://scholar.google.com/citations?user=1lsvWAcAAAAJ&hl=en" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="ai ai-google-scholar ai-3x social-icon scholar"></i>
                <span class="social-name">Google Scholar</span>
            </div>
        </a>
    </div>

    <div class="col-6 col-md-3 mb-3">
        <a href="https://www.linkedin.com/in/sushil-sharma-b68472b1/" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="fab fa-linkedin fa-3x social-icon linkedin"></i>
                <span class="social-name">LinkedIn</span>
            </div>
        </a>
    </div>

    <div class="col-6 col-md-3 mb-3">
        <a href="https://github.com/Dr-Sushil-Sharma/Dr-Sushil-Sharma.github.io" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="fab fa-github fa-3x social-icon github"></i>
                <span class="social-name">GitHub</span>
            </div>
        </a>
    </div>

    <div class="col-6 col-md-3 mb-3">
        <a href="https://www.facebook.com/sushil.sharma.uj" target="_blank" class="social-card-link">
            <div class="social-card">
                <i class="fab fa-facebook fa-3x social-icon facebook"></i>
                <span class="social-name">Facebook</span>
            </div>
        </a>
    </div>

</div>

<style>
/* === Contact Card Styling === */
.contact-card {
    padding: 2rem;
    background: #ffffff;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.03);
}

.card-title {
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.contact-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 1.5rem;
}

.icon-box {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f8f9fa;
    border-radius: 50%;
    margin-right: 15px;
    color: var(--global-theme-color, #007bff);
}

.contact-text {
    display: flex;
    flex-direction: column;
}

.label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #6c757d;
    font-weight: 600;
    margin-bottom: 2px;
}

.value {
    font-size: 1rem;
    color: #212529;
    font-weight: 500;
}

a.value:hover {
    text-decoration: underline;
    color: var(--global-theme-color, #007bff);
}

/* === Map Styling === */
.map-container {
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.03);
    border: 1px solid #e1e4e8;
}

/* === Social Cards Styling === */
.social-card-link {
    text-decoration: none !important;
}

.social-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background: #fff;
    border: 1px solid #e1e4e8;
    border-radius: 8px;
    transition: all 0.2s ease;
    height: 100%;
}

.social-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-color: var(--global-theme-color, #007bff);
}

.social-icon {
    margin-bottom: 1rem;
    transition: color 0.2s;
}

.social-name {
    font-weight: 600;
    color: #495057;
}

/* Brand Colors on Hover */
.social-card:hover .scholar { color: #4285F4; }
.social-card:hover .linkedin { color: #0077b5; }
.social-card:hover .github { color: #333; }
.social-card:hover .facebook { color: #1877F2; }

/* === Dark Mode Adjustments === */
@media (prefers-color-scheme: dark) {
    .contact-card, .social-card {
        background: #2b2b2b;
        border-color: #444;
    }

    .icon-box {
        background: #3a3a3a;
        color: var(--global-theme-color, #66b0ff);
    }

    .value, .card-title, .social-name {
        color: #f8f9fa;
    }

    .label {
        color: #adb5bd;
    }
    
    .social-card:hover {
        background: #323232;
    }
    
    .map-container {
        border-color: #444;
        filter: grayscale(20%) invert(90%); /* Cool trick to darken the map */
    }
    
    /* Revert map colors slightly on hover if desired, or keep dark */
    .social-card:hover .github { color: #fff; }
}
</style>