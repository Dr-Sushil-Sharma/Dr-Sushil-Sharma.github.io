    // === 1. DEFINE YOUR LOCATIONS HERE ===
    const homeBase = { lat: 50.0647, lng: 19.9450, city: "Krakow, Poland" }; // Jagiellonian University

    const visitedPlaces = [
        // --- Short Research Visits ---
        { lat: 37.4275, lng: -122.1697, city: "Stanford, USA" }, // 2024 Visit
        { lat: 29.8543, lng: 77.8880, city: "Roorkee, India" },  // 2018 Visit

        // --- Keynotes, Invited Talks & Conferences ---
        // Asia
        { lat: 20.0174, lng: 110.3492, city: "Haikou, China" },
        { lat: 36.5613, lng: 136.6562, city: "Kanazawa, Japan" },
        { lat: 19.0760, lng: 72.8777, city: "Mumbai, India" },
        { lat: 28.6139, lng: 77.2090, city: "Delhi, India" },
        { lat: 25.3176, lng: 82.9739, city: "Varanasi, India" },
        { lat: 30.9664, lng: 76.5331, city: "Ropar, India" },
        { lat: 28.3639, lng: 75.6010, city: "Pilani, India" },
        
        // Europe
        { lat: 46.0748, lng: 11.1217, city: "Trento, Italy" },
        { lat: 41.8085, lng: 12.6787, city: "Frascati, Italy" },
        { lat: 45.8892, lng: 10.8431, city: "Riva del Garda, Italy" },
        { lat: 42.4572, lng: 18.5315, city: "Herceg Novi, Montenegro" },
        { lat: 50.0755, lng: 14.4378, city: "Prague, Czech Republic" },
        { lat: 48.2082, lng: 16.3738, city: "Vienna, Austria" },
        { lat: 51.0504, lng: 3.7304,  city: "Ghent, Belgium" },
        { lat: 52.2297, lng: 21.0122, city: "Warsaw, Poland" },
        { lat: 50.8661, lng: 20.6286, city: "Kielce, Poland" },
        { lat: 51.2465, lng: 22.5684, city: "Lublin, Poland" },
        { lat: 56.7320, lng: 37.1669, city: "Dubna, Russia" },

        // North America
        { lat: 49.2827, lng: -123.1207, city: "Vancouver, Canada" },
        { lat: 28.5383, lng: -81.3792, city: "Orlando, USA" },
        { lat: 41.7002, lng: -86.2379, city: "Notre Dame, USA" },
        { lat: 42.2808, lng: -83.7430, city: "Ann Arbor, USA" },
        { lat: 40.7128, lng: -74.0060, city: "New York, USA" },

        // Australia
        { lat: -33.8688, lng: 151.2093, city: "Sydney, Australia" }
    ];

    // Create arcs (flight paths) from Home to all visited places
    const arcsData = visitedPlaces.map(place => ({
        startLat: homeBase.lat,
        startLng: homeBase.lng,
        endLat: place.lat,
        endLng: place.lng,
        color: ['#ffc107', '#007bff'] // Gold to Blue gradient
    }));

    // Combine home + visited for point rendering
    const allPoints = [homeBase, ...visitedPlaces];

    // === 2. INITIALIZE GLOBE ===
    const elem = document.getElementById('globe-container');
    
    // Auto-calculate height based on width to keep it responsive
    const w = elem.clientWidth; 
    
    const world = Globe()
      (elem)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-night.jpg') 
      .backgroundColor('rgba(0,0,0,0)') 
      .width(w)
      .height(500)
      
      // Add Arcs (Flight Paths)
      .arcsData(arcsData)
      .arcColor('color')
      .arcDashLength(0.4)
      .arcDashGap(4)
      .arcDashInitialGap(() => Math.random() * 5)
      .arcDashAnimateTime(2000)
      .arcStroke(1.5)

      // Add City Points
      .pointsData(allPoints)
      .pointAltitude(0.02)
      .pointColor(() => '#ffffff')
      .pointRadius(0.5)
      .pointLabel('city')
      
      // Auto-rotate slowly
      .controls().autoRotate = true;
      world.controls().autoRotateSpeed = 0.8;
      
      // Set initial view to focus roughly on Europe/Asia
      world.pointOfView({ lat: 30, lng: 50, altitude: 2.5 });

    // Handle Window Resize
    window.addEventListener('resize', () => {
        world.width(elem.clientWidth);
    });
