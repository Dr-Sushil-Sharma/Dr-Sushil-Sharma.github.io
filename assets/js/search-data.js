// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-",
    title: "",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-",
          title: "",
          description: "Assistant Professor at Jagiellonian University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "An overview of my research interests &amp; activities.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications are the footprints of discovery, each one marking a step forward in the journey of knowledge.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-talks",
          title: "Talks",
          description: "A record of my invited talks, conference presentations, and keynotes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/speaking/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/project/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "My courses, philosophy, and mentorship.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-accomplishments",
          title: "Accomplishments",
          description: "My accomplishments in the Academia.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/service/";
          },
        },{id: "nav-personal",
          title: "Personal",
          description: "A glimplse of my personal life.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/personal/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "How to get in touch and where to find me online.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=1lsvWAcAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/sushil-sharma-b68472b1", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: 'Socials',
        handler: () => {
          window.open("https://facebook.com/sushil.sharma.uj", "_blank");
        },
      },];
