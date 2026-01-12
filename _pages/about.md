---
layout: page
title: ""
permalink: /
description: Assistant Professor at <a href='https://koza.if.uj.edu.pl/'>Jagiellonian University</a>.
nav: true
nav_order: 1
---

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">

<style>
/* --- GLOBAL PAGE STYLES --- */
.post-header, .page-header, .page-title { display: none !important; }

/* Custom Title Style */
.hello-title {
    font-family: 'Playfair Display', serif;
    font-size: 2.8rem;
    font-weight: 700;
    color: var(--global-theme-color);
    margin-bottom: 0.5rem;
    letter-spacing: -0.5px;
}

/* --- PROFILE CARD STYLES (Dark Theme) --- */
.profile-card {
    background: linear-gradient(135deg, #2b323c 0%, #1a1c20 100%);
    border-radius: 16px;
    padding: 2.5rem 1.5rem;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    color: #ffffff;
    width: 100%;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Subtle decorative circle in background */
.profile-card::before {
    content: '';
    position: absolute;
    top: -50px; left: -50px;
    width: 150px; height: 150px;
    background: rgba(255,255,255,0.03);
    border-radius: 50%;
    pointer-events: none;
}

.profile-img-container img {
    border: 4px solid rgba(255,255,255,0.2);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    transition: transform 0.3s ease, border-color 0.3s ease;
}
.profile-img-container img:hover {
    transform: scale(1.03);
    border-color: var(--global-theme-color, #007bff);
}

.profile-role {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    margin-bottom: 0.2rem;
    color: #fff;
}

.profile-dept {
    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    font-weight: 300;
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
}

/* --- BIO SECTION STYLES --- */
.bio-container {
    background: linear-gradient(to right, #ffffff, #f9f9fa);
    border-left: 5px solid var(--global-theme-color);
    padding: 2rem;
    border-radius: 0 8px 8px 0;
    box-shadow: 0 4px 15px rgba(0,0,0,0.03);
    height: 100%;
}

.bio-text {
    font-family: 'Roboto', sans-serif;
    font-size: 1.15rem;
    line-height: 1.7;
    font-weight: 400;
    color: #4a4a4a;
}

/* --- CONTACT BAR (Bottom) --- */
.contact-bar-icon {
    color: #555;
    transition: all 0.2s ease;
}
.contact-bar-icon:hover {
    color: var(--global-theme-color, #007bff);
    transform: translateY(-3px);
}

/* Dark mode adjustment */
@media (prefers-color-scheme: dark) {
    .bio-text { color: #d0d0d0; }
    .bio-container { background: #252525; border-left-color: #66b0ff; box-shadow: none; }
    .contact-bar-icon { color: #aaa; }
    .contact-bar-icon:hover { color: #fff; }
}
</style>

<div class="row mt-5 mb-4 align-items-stretch">
    
    <div class="col-lg-4 mb-4 mb-lg-0">
        <div class="profile-card mx-auto text-center">
            
            <div class="profile-img-container mb-4">
                <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Sushil Sharma" class="img-fluid rounded-circle" style="max-width: 190px;">
            </div>

            <div>
                <div class="profile-role">Assistant Professor</div>
                <div class="small text-uppercase tracking-wider mb-3" style="letter-spacing: 1px; font-size: 0.75rem; opacity: 0.7;">(Research and Academics)</div>

                <div class="profile-dept">
                    Institute of Physics<br>
                    Faculty of Physics, Astronomy and<br>Applied Computer Science
                </div>

                <div class="mt-2 font-weight-bold" style="color: #fff;">Jagiellonian University</div>
                <div class="small" style="color: rgba(255,255,255,0.6);">Kraków, Poland</div>
            </div>

        </div>
    </div>

    <div class="col-lg-8">
        <div class="d-flex flex-column h-100 justify-content-center">
            <h1 class="hello-title pl-3">Hello, I'm <span style="font-style: italic;">Sushil Sharma</span>.</h1>

            <div class="bio-container mt-3">
                <div class="bio-text text-justify">
                    <p>
                        I am an experimental nuclear physicist at Jagiellonian University in Krakow, working on detector instrumentation and data analysis for precision studies at the interface of fundamental physics and medical imaging.
                    </p>
                    <p class="mb-0">
                        My research focuses on <strong>positronium physics</strong> and <strong>plastic-scintillator PET technology (J-PET)</strong>, including photon-polarization measurements for discrete symmetry tests and quantum-correlation studies, as well as the application of modular detection concepts for new experiments in antimatter physics.
                    </p>
                </div>
            </div>
        </div>
    </div>

</div>

<div class="row mb-5">
    <div class="col-12 text-center">
        <div class="d-flex justify-content-center align-items-center flex-wrap">
            
            <div class="mx-4 my-2">
                <a href="mailto:sushil.sharma@uj.edu.pl" class="contact-bar-icon mx-3" title="Email"><i class="fas fa-envelope fa-2x"></i></a>
                <a href="https://scholar.google.com/citations?user=1lsvWAcAAAAJ&hl=en" target="_blank" class="contact-bar-icon mx-3" title="Google Scholar"><i class="ai ai-google-scholar ai-2x"></i></a>
                <a href="https://www.linkedin.com/in/sushil-sharma-b68472b1/" target="_blank" class="contact-bar-icon mx-3" title="LinkedIn"><i class="fab fa-linkedin fa-2x"></i></a>
            </div>

            <div class="d-none d-md-block border-left mx-3" style="height: 40px; border-color: #ddd;"></div>

            <div class="mx-4 my-2">
                <a href="https://koza.if.uj.edu.pl/staff/ssharma" target="_blank" class="btn btn-outline-primary rounded-pill px-4">
                    View University Profile
                </a>
            </div>

        </div>
    </div>

</div>

<hr class="my-5">

<div class="row">
    <div class="col-12">
        <h3 class="mb-4 text-center font-weight-bold">Research Focus</h3>
    </div>
</div>

<div class="row">
    <a href="https://koza.if.uj.edu.pl/aegis/" target="_blank" class="col-md-4 mb-4 text-decoration-none">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-atom fa-2x"></i></div>
            <h5 class="interest-title">Antimatter Physics</h5>
            <p class="interest-text">Positronium, antiproton, antihydrogen</p>
        </div>
    </a>

    <a href="https://koza.if.uj.edu.pl/publications/pet" target="_blank" class="col-md-4 mb-4 text-decoration-none">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-heartbeat fa-2x"></i></div>
            <h5 class="interest-title">Medical Physics</h5>
            <p class="interest-text">Positron Emission Tomography (PET) & Medical Imaging</p>
        </div>
    </a>

    <div class="col-md-4 mb-4">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-project-diagram fa-2x"></i></div>
            <h5 class="interest-title">Fundamental Physics</h5>
            <p class="interest-text">Test on discrete symmetries, Quantum entanglement, decay rates</p>
        </div>
    </div>

    <a href="https://koza.if.uj.edu.pl/publications/pet" target="_blank" class="col-md-4 mb-4 text-decoration-none">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-microchip fa-2x"></i></div>
            <h5 class="interest-title">Instrumentation</h5>
            <p class="interest-text">New hardware/software techniques in particle detection</p>
        </div>
    </a>

    <a href="https://koza.if.uj.edu.pl/spallation/" target="_blank" class="col-md-4 mb-4 text-decoration-none">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-bomb fa-2x"></i></div>
            <h5 class="interest-title">Spallation Physics</h5>
            <p class="interest-text">Reaction dynamics and model validation</p>
        </div>
    </a>

    <a href="{{ '/publications/' | relative_url }}" class="col-md-4 mb-4 text-decoration-none">
        <div class="interest-card h-100">
            <div class="icon-wrapper"><i class="fas fa-layer-group fa-2x"></i></div>
            <h5 class="interest-title">Nuclear Structure & Reactions</h5>
            <p class="interest-text">Fusion, fission, high-spin states and reaction mechanisms</p>
        </div>
    </a>

</div>

<style>
.interest-card {
    background: #ffffff;
    border: 1px solid #eaeaea;
    border-radius: 12px;
    padding: 2rem 1rem;
    text-align: center;
    transition: all 0.3s ease;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02);
    color: #333;
}
.interest-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.08);
    border-color: var(--global-theme-color, #007bff);
}
.icon-wrapper {
    margin-bottom: 1rem;
    color: #6c757d;
    transition: color 0.3s ease;
}
.interest-card:hover .icon-wrapper { color: var(--global-theme-color, #007bff); }
.interest-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: inherit; }
.interest-text { font-size: 0.9rem; color: #666; }

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .interest-card { background: #2b2b2b; border-color: #444; color: #f0f0f0; }
    .interest-card:hover { background: #323232; }
    .interest-title { color: #f0f0f0; }
    .interest-text { color: #aaa; }
    .icon-wrapper { color: #888; }
    .interest-card:hover .icon-wrapper { color: var(--global-theme-color, #66b0ff); }
}
</style>

<hr class="my-5">

<div class="row mb-4">
    <div class="col-12 text-center">
        <h3 class="font-weight-bold">Selected Highlights</h3>
        <p class="text-muted">Key publications and contributions.</p>
    </div>
</div>

<div class="row">
    <div class="col-12">
        
        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Discrete%20symmetries%20tested%20at%2010%E2%88%924%20precision%20using%20linear%20polarization%20of%20photons%20from%20positronium%20annihilations" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Discrete symmetries tested at 10<sup>-4</sup> precision using linear polarization of photons from positronium annihilations</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">P. Moskal,.., S. Sharma et al.</div>
                        <span class="pub-journal-badge">Nature Communications 15, 78 (2024)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2024</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Efficiency%20determination%20of%20J-PET%3A%20first%20plastic%20scintillators-based%20PET%20scanner" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Efficiency determination of J-PET: first plastic scintillators-based PET scanner</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">S. Sharma et al.</div>
                        <span class="pub-journal-badge">EJNMMI Physics 10, 28 (2023)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2023</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Forward%20emission%20of%20positronium%20from%20nanochanneled%20silicon%20membranes" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Forward emission of positronium from nanochanneled silicon membranes</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">S. Mariazzi,..,S. Sharma et al.</div>
                        <span class="pub-journal-badge">Phys. Rev. B (2022)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2022</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Positronium%20imaging%20with%20the%20novel%20multiphoton%20PET%20scanner" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Positronium imaging with the novel multiphoton PET scanner</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">P. Moskal,..,S. Sharma et al.</div>
                        <span class="pub-journal-badge">Science Advances 7(42) (2021)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2021</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Testing%20CPT%20symmetry%20in%20ortho-positronium%20decays%20with%20positronium%20annihilation%20tomography" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Testing CPT symmetry in ortho-positronium decays with positronium annihilation tomography</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">P. Moskal,..,S. Sharma et al.</div>
                        <span class="pub-journal-badge">Nature Communications 12(1) (2021)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2021</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Estimating%20relationship%20between%20the%20Time%20Over%20Threshold%20and%20energy%20loss%20by%20photons%20in%20plastic%20scintillators%20used%20in%20the%20J-PET%20scanner" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Estimating relationship between the Time Over Threshold and energy loss by photons in plastic scintillators used in the J-PET scanner</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">S. Sharma et al.</div>
                        <span class="pub-journal-badge">EJNMMI Phys 7, 39 (2020)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2020</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Monte%20Carlo%20N-Particle%20simulations%20of%20an%20underwater%20chemical%20threats%20detection%20system%20using%20neutron%20activation%20analysis" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Monte Carlo N-Particle simulations of an underwater chemical threats detection system using neutron activation analysis</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">P. Sibczynski,.., S. Sharma et al.</div>
                        <span class="pub-journal-badge">Journal of Instrumentation 14 (2019)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2019</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Feasibility%20studies%20of%20the%20polarization%20of%20photons%20beyond%20the%20optical%20wavelength%20regime%20with%20the%20J-PET%20detector" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Feasibility studies of the polarization of photons beyond the optical wavelength regime with the J-PET detector</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">P. Moskal,..,S. Sharma et al.</div>
                        <span class="pub-journal-badge">Eur. Phys. J. C 78, 970 (2018)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2018</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Ranking%20and%20validation%20of%20spallation%20models%20for%20isotopic%20production%20cross%20sections%20of%20heavy%20residua" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Ranking and validation of spallation models for isotopic production cross sections of heavy residua</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">Sushil K. Sharma, B. Kamys, et al.</div>
                        <span class="pub-journal-badge">Eur. Phys. J. A 53, 150 (2017)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2017</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

        <div class="pub-card-full">
            <a href="https://scholar.google.com/scholar?q=Ranking%20and%20validation%20of%20the%20spallation%20models%20for%20description%20of%20intermediate%20mass%20fragment%20emission%20from%20p%2BAg%20collisions%20at%20480%20MeV%20incident%20proton%20beam%20energy" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
            <div class="pub-card-content">
                <div class="pub-info">
                    <div class="pub-card-title">Ranking and validation of the spallation models for description of intermediate mass fragment emission from p+Ag collisions</div>
                    <div class="pub-card-meta">
                        <div class="pub-author-list">Sushil K. Sharma, B. Kamys, et al.</div>
                        <span class="pub-journal-badge">Eur. Phys. J. A 52, 171 (2016)</span>
                    </div>
                </div>
                <div class="pub-actions">
                    <div class="pub-year">2016</div>
                    <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                </div>
            </div>
        </div>

    </div>

</div>

<hr class="my-5">

<div class="row mb-4">
    <div class="col-12 text-center">
        <h3 class="font-weight-bold">Recent Articles</h3>
        <p class="text-muted">Latest publications fetched from the database.</p>
    </div>
</div>

<div id="recent-pubs-container" class="recent-pubs-wrapper">
    <div class="text-center py-5">
        <i class="fas fa-spinner fa-spin fa-2x text-muted"></i>
    </div>
</div>

<div class="row mt-2 mb-5">
    <div class="col-12 text-center">
        <a href="{{ '/publications/' | relative_url }}" class="btn btn-outline-light rounded-pill px-4">
            View All Publications <i class="fas fa-arrow-right ml-1"></i>
        </a>
    </div>
</div>

<style>
/* --- FULL WIDTH CARD STYLING --- */
.pub-card-full {
    display: block;
    width: 100%;
    background: #ffffff;
    border: 1px solid #e9ecef;
    border-left: 5px solid var(--global-theme-color, #007bff);
    border-radius: 8px;
    padding: 1.5rem;
    margin-bottom: 1.5rem;
    transition: all 0.25s cubic-bezier(0.25, 0.8, 0.25, 1);
    position: relative;
    box-shadow: 0 2px 4px rgba(0,0,0,0.02);
}

.pub-card-full:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.1);
    border-color: #d0d0d0;
}

.pub-card-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.pub-info { flex: 1; padding-right: 20px; }

.pub-card-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: #2c3e50;
    font-family: 'Roboto', sans-serif;
}
.pub-card-title a { color: inherit; text-decoration: none; }
.pub-card-title a:hover { color: var(--global-theme-color, #007bff); }

.pub-card-meta { font-size: 0.95rem; color: #6c757d; line-height: 1.5; }
.pub-author-list { font-style: italic; margin-bottom: 0.2rem; }

.pub-journal-badge {
    display: inline-block;
    background: #f8f9fa;
    border: 1px solid #dee2e6;
    color: #495057;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 3px 10px;
    border-radius: 20px;
    margin-top: 5px;
}

/* Right Side Actions */
.pub-actions {
    text-align: right;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
}

.pub-year {
    font-size: 1.5rem;
    font-weight: 900;
    color: #e0e0e0;
    line-height: 1;
    margin-bottom: 10px;
}

.btn-read {
    font-size: 0.8rem;
    padding: 0.4rem 1rem;
    border-radius: 50px;
    background: transparent;
    border: 1px solid var(--global-theme-color, #007bff);
    color: var(--global-theme-color, #007bff);
    transition: all 0.2s;
    white-space: nowrap;
}
.pub-card-full:hover .btn-read {
    background: var(--global-theme-color, #007bff);
    color: white;
}

/* Mobile Responsive */
@media (max-width: 768px) {
    .pub-card-content { flex-direction: column; align-items: flex-start; }
    .pub-info { padding-right: 0; margin-bottom: 1rem; }
    .pub-actions {
        width: 100%;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-top: 1px solid #eee;
        padding-top: 10px;
    }
    .pub-year { margin-bottom: 0; font-size: 1.2rem; }
}

/* Dark Mode */
@media (prefers-color-scheme: dark) {
    .pub-card-full {
        background: #2b2b2b;
        border-color: #444;
        border-left-color: var(--global-theme-color, #66b0ff);
    }
    .pub-card-title { color: #f1f1f1; }
    .pub-card-meta { color: #b0b0b0; }
    .pub-journal-badge { background: #333; border-color: #555; color: #ccc; }
    .pub-year { color: #444; }
    .pub-card-full:hover { border-color: #666; }
    .btn-read { color: #fff; border-color: #fff; }
    .pub-card-full:hover .btn-read { background: #fff; color: #000; }
}
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
    // 1. Fetch Publications
    fetch("{{ '/publications/' | relative_url }}")
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, "text/html");
            const articles = doc.querySelectorAll('.publication-card.article');
            const limit = 10; // Show top 5 articles
            const container = document.getElementById('recent-pubs-container');
            
            container.innerHTML = ""; // Clear loader

            if(articles.length === 0) {
                container.innerHTML = '<div class="text-muted text-center p-4">No recent publications found.</div>';
                return;
            }

            for (let i = 0; i < Math.min(articles.length, limit); i++) {
                const sourceCard = articles[i];
                
                // Get inner HTML for title (preserves formatting if any)
                const titleHTML = sourceCard.querySelector('.pub-title').innerHTML;
                // Get raw text for search
                const rawTitle = sourceCard.querySelector('.pub-title').innerText.trim();
                
                const authors = sourceCard.querySelector('.pub-authors').innerText;
                const displayAuthors = authors.length > 80 ? authors.substring(0, 80) + "..." : authors;
                
                const journal = sourceCard.querySelector('.journal-name').innerText;
                const year = sourceCard.getAttribute('data-year');

                // --- GOOGLE SCHOLAR TRICK ---
                // Instead of looking for a direct link, we generate a search URL
                const link = "https://scholar.google.com/scholar?q=" + encodeURIComponent(rawTitle);

                // Build Full Width Card
                const cardHTML = `
                    <div class="pub-card-full">
                        <a href="${link}" target="_blank" style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;"></a>
                        <div class="pub-card-content">
                            <div class="pub-info">
                                <div class="pub-card-title">${titleHTML}</div>
                                <div class="pub-card-meta">
                                    <div class="pub-author-list">${displayAuthors}</div>
                                    <span class="pub-journal-badge">${journal}</span>
                                </div>
                            </div>
                            <div class="pub-actions">
                                <div class="pub-year">${year}</div>
                                <span class="btn-read">Read Paper <i class="fas fa-search ml-1"></i></span>
                            </div>
                        </div>
                    </div>
                `;
                container.innerHTML += cardHTML;
            }
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('recent-pubs-container').innerHTML = '<div class="text-danger text-center">Unable to load publications.</div>';
        });
});
</script>

<hr class="my-5">

<div class="canvas-container mt-3">
    <canvas id="physicsCanvas"></canvas>
    <div class="canvas-overlay">
        <h2>The Positronium Field</h2>
        <p>Simulating particle dynamics in real-time.</p>
    </div>
</div>

<style>
.canvas-container {
    position: relative;
    width: 100%;
    height: 450px;
    background: radial-gradient(circle at center, #1a1a2e 0%, #000000 100%);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
    border: 1px solid #333;
}
canvas { display: block; width: 100%; height: 100%; }
.canvas-overlay {
    position: absolute; bottom: 20px; left: 20px;
    color: rgba(255, 255, 255, 0.5); pointer-events: none;
    font-family: 'Roboto', sans-serif;
}
.canvas-overlay h2 { font-size: 1.5rem; margin: 0; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; }
.canvas-overlay p { font-size: 0.9rem; margin: 0; }
</style>

<script>
const canvas = document.getElementById('physicsCanvas');
const ctx = canvas.getContext('2d');

let particles = [];
const particleCount = 120;
const mouse = { x: undefined, y: undefined, radius: 150 };

function resizeCanvas() {
    canvas.width = canvas.parentElement.clientWidth;
    canvas.height = canvas.parentElement.clientHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

canvas.addEventListener('mousemove', function(e) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
});
canvas.addEventListener('mouseleave', function() { mouse.x = undefined; mouse.y = undefined; });
canvas.addEventListener('click', function() {
    particles.forEach(p => {
        let dx = p.x - mouse.x; let dy = p.y - mouse.y;
        if (Math.sqrt(dx*dx + dy*dy) < 200) {
            let force = 40;
            p.speedX += (dx/Math.sqrt(dx*dx + dy*dy)) * force;
            p.speedY += (dy/Math.sqrt(dx*dx + dy*dy)) * force;
            p.color = '#ffffff';
        }
    });
});

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + Math.random() * 360 + ', 100%, 50%)';
    }
    update() {
        this.x += this.speedX; this.y += this.speedY;
        if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
        if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        
        if (mouse.x != undefined) {
            let dx = mouse.x - this.x; let dy = mouse.y - this.y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < mouse.radius) {
                let force = (mouse.radius - dist) / mouse.radius;
                this.speedX += (dx/dist) * force * 0.6;
                this.speedY += (dy/dist) * force * 0.6;
                this.color = '#00e5ff';
            } else {
                this.speedX *= 0.98; this.speedY *= 0.98;
                if(Math.abs(this.speedX) < 0.5) this.speedX = Math.random() * 2 - 1;
                if(Math.abs(this.speedY) < 0.5) this.speedY = Math.random() * 2 - 1;
                this.color = 'rgba(100, 200, 255, 0.7)';
            }
        }
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() { particles = []; for (let i=0; i<particleCount; i++) particles.push(new Particle()); }
function animate() {
    ctx.fillStyle = 'rgba(20, 20, 30, 0.2)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i=0; i<particles.length; i++) {
        particles[i].update(); particles[i].draw();
        for (let j=i; j<particles.length; j++) {
            let dx = particles[i].x - particles[j].x;
            let dy = particles[i].y - particles[j].y;
            let dist = Math.sqrt(dx*dx + dy*dy);
            if (dist < 100) {
                ctx.beginPath();
                if (mouse.x != undefined && Math.sqrt((particles[i].x-mouse.x)**2 + (particles[i].y-mouse.y)**2) < 150) {
                     ctx.strokeStyle = 'rgba(0, 229, 255, ' + (1 - dist/100) + ')';
                     ctx.lineWidth = 1;
                } else {
                    ctx.strokeStyle = 'rgba(100, 100, 100, 0.1)';
                    ctx.lineWidth = 0.2;
                }
                ctx.moveTo(particles[i].x, particles[i].y);
                ctx.lineTo(particles[j].x, particles[j].y);
                ctx.stroke();
            }
        }
    }
    requestAnimationFrame(animate);
}
init(); animate();
</script>
