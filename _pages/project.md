---
layout: page
title: Projects
permalink: /project/
nav: true
nav_order: 6
---

<style>
  .post-header { display: none !important; }
</style>

<style>
  /* Gradient Text for Title */
  .gradient-text {
    background: -webkit-linear-gradient(45deg, #007bff, #6610f2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  /* Card Hover Effects */
  .feature-card {
    border: none;
    border-radius: 12px;
    transition: all 0.3s ease-in-out;
    background: var(--global-card-bg-color); /* Adapts to theme */
  }
  
  .feature-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 1rem 3rem rgba(0,0,0,.175)!important;
  }

  /* Timeline styling for Description */
  .phase-block {
    border-left: 4px solid #e9ecef;
    padding-left: 2rem;
    position: relative;
    margin-bottom: 2rem;
  }
  
  .phase-block:hover {
    border-left-color: #007bff;
  }

  .phase-icon {
    position: absolute;
    left: -1.6rem;
    top: 0;
    background: white; /* Match page bg */
    padding: 5px 0;
  }
  
  /* Dark mode adjustment for phase icon background if needed by theme */
  @media (prefers-color-scheme: dark) {
    .phase-icon { background: #121212; }
  }
</style>

<div class="container">
  
  <div class="row mb-5 align-items-center">
    <div class="col-md-12 text-center">
      <h1 class="display-4 font-weight-bold gradient-text">Gravitational Behavior of Positronium</h1>
      <p class="lead mt-3">Probing the fundamental interaction between matter and antimatter.</p>
      
      <div class="mt-4">
        <span class="badge badge-pill badge-light border p-2 mr-2">
          <i class="fas fa-fingerprint text-muted mr-1"></i> 2023/50/E/ST2/00574
        </span>
        <span class="badge badge-pill badge-light border p-2">
          <i class="fas fa-user-circle text-muted mr-1"></i> PI: Dr. Sushil Sharma
        </span>
      </div>
    </div>
  </div>

  <div class="row">
    <div class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm feature-card">
        <div class="card-body text-center p-4">
          <div class="mb-3">
            <span class="fa-stack fa-2x">
              <i class="fas fa-circle fa-stack-2x text-primary opacity-25" style="opacity: 0.2;"></i>
              <i class="fas fa-bullseye fa-stack-1x text-primary"></i>
            </span>
          </div>
          <h4 class="card-title font-weight-bold">Project Aim</h4>
          <p class="card-text text-muted">To measure the effect of Earth's gravitational force on the positronium atom (Ps) by extending its lifetime via Rydberg excitation and observing its fall.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm feature-card">
        <div class="card-body text-center p-4">
          <div class="mb-3">
            <span class="fa-stack fa-2x">
              <i class="fas fa-circle fa-stack-2x text-success opacity-25" style="opacity: 0.2;"></i>
              <i class="fas fa-question fa-stack-1x text-success"></i>
            </span>
          </div>
          <h4 class="card-title font-weight-bold">Motivation</h4>
          <p class="card-text text-muted">Addressing the century-old mystery: Does antimatter fall like matter? This project pioneers Ps as an alternative to antihydrogen for testing the Weak Equivalence Principle.</p>
        </div>
      </div>
    </div>

    <div class="col-lg-4 mb-4">
      <div class="card h-100 shadow-sm feature-card">
        <div class="card-body text-center p-4">
          <div class="mb-3">
            <span class="fa-stack fa-2x">
              <i class="fas fa-circle fa-stack-2x text-info opacity-25" style="opacity: 0.2;"></i>
              <i class="fas fa-cogs fa-stack-1x text-info"></i>
            </span>
          </div>
          <h4 class="card-title font-weight-bold">Methodology</h4>
          <p class="card-text text-muted">A dual approach using laser manipulation for long-lived Ps atoms and a J-PET based detection system to reconstruct annihilation vertices with high precision.</p>
        </div>
      </div>
    </div>

  </div>

  <hr class="my-5">

  <div class="row">
    <div class="col-12 text-center mb-4">
      <h3>Experimental Approach</h3>
    </div>
  </div>

  <div class="row">
    <div class="col-md-6">
      <div class="phase-block">
        <div class="phase-icon"><i class="fas fa-wave-square fa-2x text-primary"></i></div>
        <h4 class="text-primary">Phase I: Interferometry</h4>
        <p class="text-justify">
          In the first phase, Ps atoms will be created in the <strong>PsICO positron beam</strong> at AML. We employ laser cooling and excitation to a metastable Rydberg state, extending the lifetime significantly. 
        </p>
        <p class="text-justify">
          A deflectometer/interferometer system consisting of <strong>three equally spaced gratings</strong> will measure the inertial forces. The first two gratings create a fringe pattern on the third. This pattern is scanned with sub-nanometer accuracy using a piezo nanopositioning system. By comparing annihilation probabilities on the stopper versus the grating, we determine the strength of the gravitational force.
        </p>
      </div>
    </div>

    <div class="col-md-6">
      <div class="phase-block">
        <div class="phase-icon"><i class="fas fa-microchip fa-2x text-info"></i></div>
        <h4 class="text-info">Phase II: Detection</h4>
        <p class="text-justify">
          The second phase involves a sophisticated detection system to reconstruct the vertices of Ps atoms annihilating at the grating or stopper.
        </p>
        <p class="text-justify">
          We will construct <strong>four modular detection units</strong> leveraging the expertise of the <a href="http://koza.if.uj.edu.pl/" target="_blank">J-PET collaboration</a>. Each unit consists of multiple plastic scintillators read out by Silicon Photomultipliers (SiPMs). Signal acquisition is entirely <strong>FPGA-based</strong>, capable of handling high count rates, allowing us to separately register annihilation photons from the grating and the stopper.
        </p>
      </div>
    </div>

  </div>

  <div class="row mt-5">
    <div class="col-12">
      <div class="bg-body shadow-sm rounded p-5">
        <div class="row align-items-center">
          <div class="col-md-2 text-center">
            <i class="fas fa-rocket fa-4x text-warning mb-3 mb-md-0"></i>
          </div>
          <div class="col-md-10">
            <h4 class="fw-bold">Expected Impact</h4>
            <p class="mb-0">
              This project aims to provide the <strong>first direct measurement</strong>
              of the gravitational effect on positronium. By combining laser physics,
              particle detection, and digital signal processing, this facility will pave
              the way for new tests of fundamental physics in the pure leptonic sector,
              offering insights into the nature of gravity and the matter–antimatter balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>
