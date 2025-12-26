---
layout: page
permalink: /research/
title: Research
description: An overview of my research interests & activities.
nav: true
nav_order: 2
---

<style>
    /* smooth fade-in for content */
    .fade-in-up {
        animation: fadeInUp 0.8s ease-out;
    }
    @keyframes fadeInUp {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
    }

    /* Research Card Styling */
    .research-card {
        border: 1px solid rgba(0,0,0,0.1);
        border-radius: 15px;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        background: var(--global-card-bg-color);
        overflow: hidden;
        height: 100%;
        position: relative;
        z-index: 1;
    }

    /* Interactive Hover Effects */
    .research-card:hover {
        transform: translateY(-10px); /* Lift effect */
        box-shadow: 0 15px 30px rgba(0,0,0,0.1);
        border-color: var(--global-theme-color);
    }

    .research-card .icon-container {
        transition: transform 0.3s ease;
    }
    
    .research-card:hover .icon-container {
        transform: scale(1.1) rotate(5deg); /* playful icon animation */
    }

    .research-card:hover .card-title {
        color: var(--global-theme-color);
    }

    /* Badge styling */
    .topic-badge {
        font-size: 0.75rem;
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: 5px 10px;
        border-radius: 20px;
        background: rgba(0,0,0,0.05);
        display: inline-block;
        margin-bottom: 10px;
    }
</style>

<div class="row fade-in-up">
    <div class="col-sm-12">
        <p class="lead text-justify">
            My research program explores fundamental questions in physics through a combination of experimental work and the development of novel detection techniques.
        </p>
        <p class="text-justify">
            From 2009-2021, my activities have centered on instrumentation, data acquisition, the realization of nuclear physics experiments, computer-based raw data analysis, and the model description of observables.
        </p>
        <div class="text-center mt-4 mb-5">
            <a href="/assets/pdf/cv.pdf" class="btn btn-outline-primary rounded-pill z-depth-0" role="button" target="_blank">
                <i class="fas fa-file-pdf mr-2"></i> Download Curriculum Vitae
            </a>
        </div>
    </div>
</div>

<hr>

<h3 class="mb-4 mt-4">Core Research Areas</h3>

<div class="row">
    <div class="col-md-6 mb-4">
        <div class="research-card p-4">
            <div class="d-flex align-items-center mb-3">
                <div class="icon-container mr-3 text-danger">
                    <i class="fas fa-heartbeat fa-3x"></i>
                </div>
                <div>
                    <span class="topic-badge text-danger">Medical Physics</span>
                    <h5 class="font-weight-bold card-title mb-0">Positron Emission Tomography</h5>
                </div>
            </div>
            <p class="card-text">Developing new hardware, software, and instrumentation for medical imaging and fundamental physics research.</p>
            <div class="mt-3 text-center">
                
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="research-card p-4">
            <div class="d-flex align-items-center mb-3">
                <div class="icon-container mr-3 text-primary">
                    <i class="fas fa-atom fa-3x"></i>
                </div>
                <div>
                    <span class="topic-badge text-primary">Fundamental Physics</span>
                    <h5 class="font-weight-bold card-title mb-0">Particle Physics</h5>
                </div>
            </div>
            <p class="card-text">Investigating the properties and interactions of elementary particles, with a focus on positronium and discrete symmetries.</p>
            <div class="mt-3 text-center">
                
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="research-card p-4">
            <div class="d-flex align-items-center mb-3">
                <div class="icon-container mr-3 text-warning">
                    <i class="fas fa-bomb fa-3x"></i>
                </div>
                <div>
                    <span class="topic-badge text-warning">Nuclear Dynamics</span>
                    <h5 class="font-weight-bold card-title mb-0">Spallation Physics</h5>
                </div>
            </div>
            <p class="card-text">Studying the processes and products of spallation reactions, including the validation of theoretical models against experimental data.</p>
            <div class="mt-3 text-center">
                
            </div>
        </div>
    </div>

    <div class="col-md-6 mb-4">
        <div class="research-card p-4">
            <div class="d-flex align-items-center mb-3">
                <div class="icon-container mr-3 text-success">
                    <i class="fas fa-radiation fa-3x"></i>
                </div>
                <div>
                    <span class="topic-badge text-success">Reaction Mechanisms</span>
                    <h5 class="font-weight-bold card-title mb-0">Nuclear Fusion & Fission</h5>
                </div>
            </div>
            <p class="card-text">Exploring the dynamics of nuclear reactions, including complete and incomplete fusion processes at energies near the Coulomb barrier.</p>
             <div class="mt-3 text-center">
                

[Image of nuclear fusion vs fission]

            </div>
        </div>
    </div>

     <div class="col-md-6 mb-4">
        <div class="research-card p-4">
            <div class="d-flex align-items-center mb-3">
                <div class="icon-container mr-3 text-info">
                    <i class="fas fa-project-diagram fa-3x"></i>
                </div>
                <div>
                    <span class="topic-badge text-info">Atomic Nuclei</span>
                    <h5 class="font-weight-bold card-title mb-0">Nuclear Structure</h5>
                </div>
            </div>
            <p class="card-text">Investigating the structure of atomic nuclei and the properties of high-spin states.</p>
        </div>
    </div>
</div>

<hr>

<h3 class="mb-4 mt-4">Selected Past Projects</h3>

<div class="card mt-3 p-3 hoverable research-card" style="border-left: 5px solid #007bff;">
    <div class="row no-gutters">
        <div class="col-md-12">
            <div class="card-body">
                <h5 class="card-title font-weight-bold">Characteristics of Clover Detector</h5>
                <h6 class="card-subtitle mb-3 text-muted">
                    <span class="badge badge-light border"><i class="far fa-calendar-alt"></i> 2008</span>
                    <span class="badge badge-light border ml-2"><i class="fas fa-university"></i> Inter University Accelerator Centre, New Delhi</span>
                </h6>
                <p class="card-text">
                    During my final year of master's studies, I conducted a project focused on characterizing a Clover Detector. This work was performed at the Inter University Accelerator Centre in New Delhi, India.
                </p>
                <p class="card-text small text-muted border-top pt-2 mt-3">
                    <strong>Guide:</strong> Dr. Rakesh Kumar, Scientist-F, GDA/INGA group.
                </p>
            </div>
        </div>
    </div>
</div>