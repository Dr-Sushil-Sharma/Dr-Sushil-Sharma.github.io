---
layout: page
title: Publications
permalink: /publications/
description: "Publications are the footprints of discovery, each one marking a step forward in the journey of knowledge."
nav: true
nav_order: 4
---

<style>
/* --- CSS AUTOMATED NUMBERING --- */
/* Reset counters for each section */
.group-articles, .group-proceedings, .group-posters {
    counter-reset: pub-counter;
}

/* Increment counter for each card within the group */
.publication-card {
    counter-increment: pub-counter;
}

/* Inject the number into the badge */
.pub-badge::before {
    content: counter(pub-counter);
}

/* Clear the hardcoded numbers in HTML if any remain */
.pub-badge {
    font-size: 1.5rem; 
    font-weight: 900; 
    color: #e0e0e0;
    margin-right: 1.5rem; 
    min-width: 30px; 
    text-align: right; 
    line-height: 1;
}

/* --- SEARCH & CARD STYLING --- */
.search-wrapper {
    position: relative;
    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
    border-radius: 50px;
    overflow: hidden;
}
.search-input {
    border: none;
    padding: 1.2rem 1rem 1.2rem 3rem;
    font-size: 1rem;
    border-radius: 50px;
    width: 100%;
}
.search-input:focus { box-shadow: none; background: #fff; outline: none; }
.search-icon {
    position: absolute; left: 1.2rem; top: 50%; transform: translateY(-50%); color: #aaa; z-index: 10;
}

/* Base Publication Card */
.publication-card {
    display: flex; flex-direction: row; background: #fff;
    box-shadow: 0 2px 5px rgba(0,0,0,0.02); margin-bottom: 1.5rem;
    border-radius: 8px; padding: 1.5rem; transition: all 0.2s ease-in-out;
}
.publication-card:hover { transform: translateY(-3px); box-shadow: 0 8px 15px rgba(0,0,0,0.1); }

/* Card Colors by Type */
.publication-card.article { border-left: 5px solid var(--global-theme-color, #007bff); }
.publication-card.proceeding { border-left: 5px solid #ffc107; } 
.publication-card.poster { border-left: 5px solid #17a2b8; } 

.pub-content { flex: 1; }
.pub-title { font-size: 1.1rem; font-weight: 700; margin-bottom: 0.5rem; color: #333; }
.pub-title a { color: #333; text-decoration: none; transition: color 0.2s; }
.pub-title a:hover { color: #007bff; }
.pub-authors { font-size: 0.95rem; color: #666; margin-bottom: 0.5rem; font-style: italic; }
.pub-meta {
    display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; margin-top: 0.5rem;
}
.journal-name {
    font-size: 0.85rem; font-weight: 600; color: #555;
    background: rgba(0,0,0, 0.05); padding: 4px 10px; border-radius: 4px;
}

/* Section Titles */
.section-title { font-weight: 700; margin-top: 2rem; color: #333; }

/* Dark Mode Support */
@media (prefers-color-scheme: dark) {
    .search-input { background: #2b2b2b; color: #fff; }
    .publication-card { background: #2b2b2b; }
    .pub-title, .section-title { color: #f0f0f0; }
    .pub-title a { color: #f0f0f0; }
    .pub-title a:hover { color: #66b0ff; }
    .pub-authors { color: #b0b0b0; }
    .pub-badge { color: #444; }
    .journal-name { background: rgba(255, 255, 255, 0.05); color: #ccc; }
}

@media (max-width: 576px) {
    .publication-card { flex-direction: column; }
    .pub-badge { text-align: left; margin-bottom: 0.5rem; }
    .pub-meta { flex-direction: column; align-items: flex-start; }
}
</style>

<div class="row mb-4">
    <div class="col-md-12">
        <div class="search-wrapper">
            <i class="fas fa-search search-icon"></i>
            <input type="text" id="pub-search" class="form-control search-input" placeholder="Search by title, author, or year (e.g., 'Positronium', '2025')..." onkeyup="filterPublications()">
        </div>
        
        <div class="text-center mt-3">
            <a href="#articles" class="badge badge-pill badge-primary p-2 mr-2">Journal Articles</a>
            <a href="#proceedings" class="badge badge-pill badge-warning p-2 mr-2 text-white">Proceedings</a>
            <a href="#posters" class="badge badge-pill badge-info p-2 text-white">Posters</a>
        </div>
        
        <p class="text-muted text-right mt-2 small" id="count-label">Showing all publications</p>
    </div>
</div>

<div class="publications-container" id="pub-list">

    <h3 class="section-title" id="articles"><i class="fas fa-book-open text-primary mr-2"></i> Journal Articles</h3>
    <hr class="mb-4">
    
    <div class="group-articles">

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">
                    <a href="https://doi.org/10.5604/01.3001.0055.4655" target="_blank">
                        Feasibility Study of Using Detector-Scattered Photons for Attenuation Correction in CT-less PET Imaging
                    </a>
                </h5>
                <p class="pub-authors">Satyam Tiwari... Sushil Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Bio-Algorithms and Med-Systems 21 (2025)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">First Positronium Imaging Using 44Sc With the J-PET Scanner: a Case Study on the NEMA-Image Quality Phantom</h5>
                <p class="pub-authors">Manish Das, Sushil Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE TRPMS 2025</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Studies of CPT symmetry in positronium decays with 192 plastic strip J-PET detector</h5>
                <p class="pub-authors">N. Chug, S. D. Bass... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Accepted in Phys. Rev. D.</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Positronium Imaging: History, Current Status, and Future Perspectives</h5>
                <p class="pub-authors">Paweł Moskal... Sushil Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE Trans. Radiat. Plasma Med. Sci. 9(8) (2025)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Quality control of plastic scintillators for the total-body J-PET scanner</h5>
                <p class="pub-authors">Ł. Kapłon... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">JINST 20 (2025) P09019</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">muPPET: Investigating the Muon Puzzle with J-PET Detectors</h5>
                <p class="pub-authors">A. Porcelli... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Universe 11 (2025) 180</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Nonmaximal entanglement of photons from positron-electron annihilation demonstrated using a novel plastic PET scanner</h5>
                <p class="pub-authors">P. Moskal, D. Kumar, S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Science Advances 11 (2025)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Real-time antiproton annihilation vertexing with submicrometer resolution</h5>
                <p class="pub-authors">Michael Berghold... Sushil Sharma... AEgIS Collaboration</p>
                <div class="pub-meta"><span class="journal-name">Science Advances 11 (2025)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Realistic total-body J-PET geometry optimization: Monte Carlo study</h5>
                <p class="pub-authors">J. Baran... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Medical Physics 52 (2025)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Development of correction techniques for a J-PET scanner</h5>
                <p class="pub-authors">M. Das... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Bio-Algorithms and Med-Systems 20 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Positronium image of the human brain in vivo</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Science Advances 10 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility of the J-PET to monitor range of therapeutic proton beams</h5>
                <p class="pub-authors">J. Baran... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Physica Medica 118 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility studies for imaging e+e- annihilation with modular multi-strip detectors</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Nucl. Instrum. Meth. A 1062 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Discrete symmetries tested at 10^-4 precision using linear polarization of photons from positronium annihilations</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Nature Communications 15 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Estimating the efficiency and purity for detecting annihilation and prompt photons for positronium imaging</h5>
                <p class="pub-authors">M. Das... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Bio-Algorithms and Med-Systems 19 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Comparative studies of the sensitivities of sparse and full geometries of Total-Body PET scanners</h5>
                <p class="pub-authors">M. Dadgar... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">EJNMMI Physics 10 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Monte Carlo simulations of the underwater detection of illicit war remnants with neutron-based sensors</h5>
                <p class="pub-authors">M. Silarski... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Eur. Phys. J. Plus 138 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Transformation of PET raw data into images for event classification using convolutional neural networks</h5>
                <p class="pub-authors">P. Konieczka... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Math. Biosci. Eng. 20 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Detection of range shifts in proton beam therapy using the J-PET scanner: a patient simulation study</h5>
                <p class="pub-authors">K. Brzeziński... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Med. Biol. 68 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Comparative studies of plastic scintillator strips with high technical attenuation length</h5>
                <p class="pub-authors">Ł. Kapłon... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Nucl. Instrum. Meth. A 1051 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Efficiency determination of J-PET: first plastic scintillators-based PET scanner</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">EJNMMI Phys. 10 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Influence of Collectivity on Reduced Hindrance Factor of isomers in Tantalum and Hafnium Isotopes</h5>
                <p class="pub-authors">Y.P. Singh... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Pol. B 54 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">J-PET detection modules based on plastic scintillators for performing studies with positron and positronium beams</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">JINST 18 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">TOF MLEM Adaptation for the Total-Body J-PET with a Realistic Analytical System Response Matrix</h5>
                <p class="pub-authors">R.Y. Shopa... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE TRPMS 7 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Investigation of novel preclinical Total Body PET designed with J-PET technology</h5>
                <p class="pub-authors">M. Dadgar... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE TRPMS 7 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2022">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">ProTheRaMon - a GATE simulation framework for proton therapy range monitoring</h5>
                <p class="pub-authors">D. Borys... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Med. Biol. 67 (2022)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2022">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Decoherence Puzzle in Measurements of Photons Originating from Electron-Positron Annihilation</h5>
                <p class="pub-authors">S. Sharma, D. Kumar, P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 142 (2022)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2021">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Positronium imaging with the novel multiphoton PET scanner</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Science Advances 7 (2021)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2021">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Optimisation of the event-based TOF filtered back-projection for online imaging in total-body J-PET</h5>
                <p class="pub-authors">R.Y. Shopa... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Medical Image Analysis 73 (2021)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2021">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Testing CPT symmetry in ortho-positronium decays with positronium annihilation tomography</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Nature Communications 12 (2021)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2021">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Simulating NEMA characteristics of the modular total-body J-PET scanner</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Med. Biol. 66 (2021)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2021">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">The J-PET detector - a tool for precision studies of ortho-positronium decays</h5>
                <p class="pub-authors">K. Dulski... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Nucl. Instrum. Meth. A 1008 (2021)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2020">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">3D TOF-PET image reconstruction using total variation regularization</h5>
                <p class="pub-authors">L. Raczyński... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Physica Medica 80 (2020)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2020">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Synchronisation and calibration of the 24-modules J-PET prototype</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE Trans. Instrum. Meas. 70 (2020)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2020">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Performance assessment of the 2gamma positronium imaging with the total-body PET scanners</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">EJNMMI Phys. 7 (2020)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2020">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Estimating relationship between the Time Over Threshold and energy loss by photons</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">EJNMMI Phys. 7 (2020)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2020">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Hit-time and hit-position reconstruction in strips of plastic scintillators</h5>
                <p class="pub-authors">N. G. Sharma... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE TRPMS 4 (2020)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2020">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">TOT Method for the Disentanglement of Photons in Positron Annihilation Lifetime Spectroscopy</h5>
                <p class="pub-authors">S. Sharma on behalf of J-PET</p>
                <div class="pub-meta"><span class="journal-name">Acta. Phys. Polon. A 137 (2020)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Odd-even staggering in the yields of intermediate mass fragments from p+Ag collisions</h5>
                <p class="pub-authors">U. Singh... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 50 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility study of the positronium imaging with the J-PET tomograph</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Med. Biol. 64 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Monte Carlo N-Particle simulations of an underwater chemical threats detection system</h5>
                <p class="pub-authors">P. Sibczyński... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">JINST 14 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Simulation studies of annihilation-photon's polarisation via Compton scattering</h5>
                <p class="pub-authors">N. Krawczyk... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Hyperfine Interact. 240 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility studies of the polarization of photons beyond the optical wavelength regime</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Eur. Phys. J. C 78 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Evaluation of Single-Chip, Real-Time Tomographic Data Processing on FPGA</h5>
                <p class="pub-authors">G. Korcyl... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE TMI 37 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">A feasibility study of the time reversal violation test based on polarization</h5>
                <p class="pub-authors">J. Raj... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Hyperfine Interact 239 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Commissioning of the J-PET detector in view of the positron annihilation lifetime spectroscopy</h5>
                <p class="pub-authors">K. Dulski... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Hyperfine Interact 239 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility study of the time reversal symmetry tests in decay of metastable positronium atoms</h5>
                <p class="pub-authors">A. Gajos... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Adv. High Energy Phys. 2018</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Estimating the NEMA characteristics of the J-PET tomograph using the GATE package</h5>
                <p class="pub-authors">P. Kowalski... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Med. Biol. 63 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">The predictive power of spallation models for isotopic cross sections</h5>
                <p class="pub-authors">U. Singh... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Eur. Phys. J. A 54 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Investigation of complete and incomplete fusion in the Li 7 + Sn 124 reaction</h5>
                <p class="pub-authors">V.V.Parkar, S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Rev. C 97 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Non-equilibrium processes in p+Ag collisions at GeV energies</h5>
                <p class="pub-authors">M. Fidelus... S. Sharma et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Rev. C 96 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">A Method to Produce Linearly Polarized Positrons and Positronium Atoms</h5>
                <p class="pub-authors">M. Mohammed... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 132 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Human Tissue Investigations Using PALS Technique - Free Radicals Influence</h5>
                <p class="pub-authors">B. Jasińska... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 132 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Preliminary Studies of J-PET Detector Spatial Resolution</h5>
                <p class="pub-authors">M. Pawlik-Niedźwiecka... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 132 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Underwater detection of dangerous substances: status of the SABAT project</h5>
                <p class="pub-authors">M. Silarski... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 48 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Analysis procedure of the positronium lifetime spectra for the J-PET detector</h5>
                <p class="pub-authors">K. Dulski... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 132 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Introduction of total variation regularization into filtered backprojection algorithm</h5>
                <p class="pub-authors">L. Raczyński... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 48 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Time calibration of the J-PET detector</h5>
                <p class="pub-authors">M. Skurzok... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 132 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Commissioning of the J-PET Detector for Studies of Decays of Positronium Atoms</h5>
                <p class="pub-authors">E. Czerwiński... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 48 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">J-PET: A New Technology for the Whole-body PET Imaging</h5>
                <p class="pub-authors">S. Niedźwiecki... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 48 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Three-dimensional Image Reconstruction in J-PET Using Filtered Back-projection</h5>
                <p class="pub-authors">R.Y. Shopa... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 48 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Ranking and validation of spallation models for isotopic production cross sections</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Eur. Phys. J. A 53 (2017)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2016">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Ranking and validation of the spallation models for description of intermediate mass fragment emission</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Eur. Phys. J. A 52 (2016)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2015">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Angular Asymmetry in the Production of Light and Heavy Recoil Nuclides</h5>
                <p class="pub-authors">S. Sharma, B. Kamys</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. A 127 (2015)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2014">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Validation of Spallation Models for p+Al Reactions at 180 MeV</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. B 45 (2014)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2014">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Sequential and simultaneous emission of particles from p+Al collisions at GeV energies</h5>
                <p class="pub-authors">M. Fidelus... S. Sharma et al.</p>
                <div class="pub-meta"><span class="journal-name">Phys. Rev. C 89 (2014)</span></div>
            </div>
        </div>

        <div class="publication-card article" data-year="2014">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Dependence and Influence of Projectile Energy and Target Mass on Production of Light Charged Particles</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Nuclear Data Sheets 119 (2014)</span></div>
            </div>
        </div>

    </div><h3 class="section-title mt-5" id="proceedings"><i class="fas fa-users text-warning mr-2"></i> Conference Proceedings</h3>
    <hr class="mb-4">
    
    <div class="group-proceedings">
        
        <div class="publication-card proceeding" data-year="2025">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Investigating quantum entanglement of high-energy photons from positron annihilation in a porous medium</h5>
                <p class="pub-authors">Deepak Kumar, Sushil Sharma and Paweł Moskal</p>
                <div class="pub-meta"><span class="journal-name">Journal of Physics: Conference Series (2025)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">The AEGIS Experiment: Progress and Future Outlook</h5>
                <p class="pub-authors">R. Caravita... S. Sharma... et al.</p>
                <div class="pub-meta"><span class="journal-name">POS EXA-LEAP2024, 024 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Performance evaluation of the modular J-PET detector in conventional PET imaging</h5>
                <p class="pub-authors">M. Das... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC RTSD (2024)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Test for non-relativistic QED in decays of positronium atoms</h5>
                <p class="pub-authors">S. Sharma, K. Dulski, P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">EPJ Web of Conferences 291 (2024)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Measuring the correlation between polarization of two photons originating from e+e- annihilations</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">DAE Symposium on Nuclear Physics 67 (2023)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Experimental observation of polarization correlation of entangled photons from positronium atom</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">PoS (EPS-HEP2023)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility study of positronium imaging with Biograph Vision Quadra and Modular J-PET</h5>
                <p class="pub-authors">S. Parzych... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC (2023)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Performance of NEMA characteristics of Modular J-PET</h5>
                <p class="pub-authors">F. Tayefi Ardebili... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC (2023)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Normalization and scatter corrections for the J-PET scanner</h5>
                <p class="pub-authors">A. Coussat... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC (2023)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2022">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Potential of modular J-PET for applications in the field of particle and medical physics</h5>
                <p class="pub-authors">S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">J. Phys. Conf. Ser. 2374 (2022)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2022">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">From tests of discrete symmetries to medical imaging with J-PET detector</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">POS PANIC2021 (2022)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Studies of the polarization of gamma photons originating from the decay of positronium atoms</h5>
                <p class="pub-authors">S. Sharma, N. Krawczyk and J. Raj</p>
                <div class="pub-meta"><span class="journal-name">AIP Conf. Proc. 2182 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Investigation of the Mechanism of Proton Induced Spallation Reactions</h5>
                <p class="pub-authors">U. Singh... S.K. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">Springer Proc. Phys. 225 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Time Over Threshold as a measure of energy response of plastic scintillators used in the J-PET detector</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">EPJ Web Conf. 199 (2019)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Studies of discrete symmetries in decays of positronium atoms</h5>
                <p class="pub-authors">E. Czerwiński... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">EPJ Web Conf. 181 (2018)</span></div>
            </div>
        </div>

        <div class="publication-card proceeding" data-year="2013">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Validation of spallation models: An Approach</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">Acta Phys. Polon. Supp. 6 (2013)</span></div>
            </div>
        </div>
    
    </div><h3 class="section-title mt-5" id="posters"><i class="fas fa-image text-info mr-2"></i> Posters</h3>
    <hr class="mb-4">
    
    <div class="group-posters">

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Simulation studies of a brain PET insert for the total body J-PET tomograph</h5>
                <p class="pub-authors">M. Rädler... S. Sharma... et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC RTSD Yokohama (2024)</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Ex-Vivo Positronium Lifetime Imaging with 44Sc using J-PET Scanner</h5>
                <p class="pub-authors">K. Kubat, M. Das, S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">2nd Symposium on New Trends in Nuclear and Medical Physics</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Determination of annihilation vertex of antihydrogen using modular J-PET detector</h5>
                <p class="pub-authors">P. Pandey, S. Sharma, P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">2nd Symposium on New Trends in Nuclear and Medical Physics</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Towards the Development of an Iterative Algorithm for Positronium Lifetime Imaging</h5>
                <p class="pub-authors">A. Pandey, S. Sharma, M. Das, et al.</p>
                <div class="pub-meta"><span class="journal-name">2nd Symposium on New Trends in Nuclear and Medical Physics</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">A Feasibility Study of Attenuation Correction in the J-PET Scanner Using Detector-Scattered Photons</h5>
                <p class="pub-authors">S. Tiwari, S. Sharma, P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">2nd Symposium on New Trends in Nuclear and Medical Physics</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Evaluation of normalization and random coincidences corrections of clinical images</h5>
                <p class="pub-authors">S. Parzych... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">EANM24 Annual Congress</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2024">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Developing positronium imaging technique for the liver phantom using modular J-PET</h5>
                <p class="pub-authors">Manish Das, Sushil Sharma, Pawel Moskal</p>
                <div class="pub-meta"><span class="journal-name">19th EMIM 2024</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Measuring the correlation between polarization of two photons originating from e+e- annihilations</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">67th DAE-BRNS Symposium on Nuclear Physics</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Exploring the polarization of high-energy photons in fundamental studies with J-PET detector</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">MSMICFP-2023</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility study of positronium imaging with Biograph Vision Quadra and Modular J-PET</h5>
                <p class="pub-authors">S. Parzych... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC 2023</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Study of polarization correlation in positron annihilation with J-PET</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">Symposium on New Trends in Nuclear and Medical Physics</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Experimental observation of polarization correlation of entangled photons from positronium atom using J-PET detector</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">EPS-HEP 2023</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Improving the experimental precision of ortho-positronium decay rate in vacuum with the J-PET detector</h5>
                <p class="pub-authors">S. Sharma, K. Dulski, P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">POSMOL 2023, Notre Dame</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Test for non-relativistic QED in decays of Positronium atoms</h5>
                <p class="pub-authors">S. Sharma, K. Dulski, P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">MESON 2023, Krakow</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">State-of-the-art modular J-PET detector for the study of positronium decays</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">RAD Eleven Conference</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Feasibility studies for imaging e+e- annihilations with modular multi-strip detectors</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">SORMA XIX</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Experimental Measurement of the polarization correlation of annihilation photons with J-PET scanner</h5>
                <p class="pub-authors">D. Kumar, S. Sharma and P. Moskal</p>
                <div class="pub-meta"><span class="journal-name">Applications of Radiation Detection Techniques</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Challenges and scheme in performing inertial sensing measurements on the positronium beam</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">Frascati 2023</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2023">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Measurement of correlation between polarization of annihilation photons emitted in e+e- system</h5>
                <p class="pub-authors">D. Kumar, N. Krawczyk, S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">4th Jagiellonian Symposium</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Precision test of discrete symmetries in the decays of positronium atoms using the J-PET detector</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">PSI 2019, Switzerland</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2019">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Towards molecular in-vivo cancer imaging by means of positronium and the J-PET tomograph</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">FNP IIIrd Interdisciplinary Congress</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Pilot studies towards positronium imaging with the total-body PET scanners</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC 2018</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Towards total-body modular PET for positronium and quantum entanglement imaging</h5>
                <p class="pub-authors">P. Moskal... S. Sharma, et al.</p>
                <div class="pub-meta"><span class="journal-name">IEEE NSS MIC 2018</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Charge conjugation symmetry test in the decay of para-positronium atoms</h5>
                <p class="pub-authors">J. Chhokar, S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">Discrete Symmetries, Trento</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Time Over Threshold as a measure of energy loss in the J-PET scanner</h5>
                <p class="pub-authors">S. Sharma, S. Niedzwiecki</p>
                <div class="pub-meta"><span class="journal-name">Total Body PET - Ghent</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2018">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Time Over Threshold as a measure of energy response of plastic scintillators</h5>
                <p class="pub-authors">S. Sharma</p>
                <div class="pub-meta"><span class="journal-name">MESON 2018, Krakow</span></div>
            </div>
        </div>

        <div class="publication-card poster" data-year="2017">
            <div class="pub-badge"></div>
            <div class="pub-content">
                <h5 class="pub-title">Time over Threshold (TOT) as a measure of Energy deposition by gamma quanta</h5>
                <p class="pub-authors">S. Sharma, J. Raj, et al.</p>
                <div class="pub-meta"><span class="journal-name">12th Workshop on PPC, Lublin</span></div>
            </div>
        </div>

    </div></div>
<style>
    /* --- CSS FOR ADVANCED FEATURES --- */
    
    /* 1. First Author Badge */
    .badge-first-author {
        background-color: #28a745; /* Green */
        color: white;
        font-size: 0.75rem;
        padding: 2px 6px;
        border-radius: 4px;
        margin-left: 10px;
        vertical-align: middle;
        font-weight: normal;
        display: none; /* Hidden by default, shown by script */
    }

    /* 2. Collaboration Stats Section */
    .stats-container {
        margin-top: 3rem;
        padding: 2rem;
        background: #f8f9fa;
        border-radius: 12px;
        border: 1px solid #e9ecef;
    }
    .stats-title { font-weight: 700; color: #333; margin-bottom: 1.5rem; }
    
    .collaborator-tag {
        display: inline-block;
        background: white;
        border: 1px solid #dee2e6;
        padding: 5px 12px;
        border-radius: 20px;
        margin: 0 8px 8px 0;
        font-size: 0.9rem;
        color: #555;
        transition: all 0.2s;
    }
    .collaborator-tag:hover {
        background: #e2e6ea;
        transform: translateY(-2px);
    }
    .collab-count {
        background: #007bff;
        color: white;
        border-radius: 50%;
        padding: 2px 6px;
        font-size: 0.75rem;
        margin-left: 6px;
    }

    /* Dark mode adjustments for new elements */
    @media (prefers-color-scheme: dark) {
        .stats-container { background: #2b2b2b; border-color: #444; }
        .stats-title { color: #f0f0f0; }
        .collaborator-tag { background: #333; border-color: #555; color: #ccc; }
        .collaborator-tag:hover { background: #444; }
    }
</style>

<div id="stats-section" class="stats-container" style="display:none;">
    <h4 class="stats-title"><i class="fas fa-chart-network text-primary mr-2"></i> Top Collaborators Network</h4>
    <div id="collaborator-cloud"></div>
    <p class="text-muted small mt-3"> * Generated automatically from publication list.</p>
</div>

<script>
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
</script>