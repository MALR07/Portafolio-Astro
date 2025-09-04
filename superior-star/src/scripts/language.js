let translations = {
  "es": {
    "nav": {
      "portfolio": "Inicio",
      "projects": "Proyectos",
      "experience": "Experiencia",
      "about": "Sobre Mí"
    },
    "hero": {
      "greeting": "¡Hola, soy Miguel Ángel!",
      "subtitle": "Desarrollador Full-Stack apasionado por la tecnología",
      "viewProjects": "Ver Proyectos",
      "experience": "Experiencia",
      "contact": "Contactar"
    },
    "experience": {
      "title": "Experiencia",
      "job1": {
        "title": "Desarrollador Full-Stack",
        "period": "2023 - Presente",
        "description": "Desarrollo de aplicaciones web utilizando React, Node.js y PostgreSQL"
      },
      "job2": {
        "title": "Prácticas en Desarrollo Web",
        "period": "2022 - 2023",
        "description": "Experiencia en desarrollo front-end con HTML, CSS y JavaScript"
      }
    },
    "projects": {
      "title": "Proyectos Destacados",
      "webTFG": {
        "title": "Web TFG",
        "description": "Aplicación web full-stack para gestión de restaurante desarrollada con React, Node.js, y PostgreSQL.",
        "viewCode": "Ver Código",
        "viewDemo": "Ver Demo"
      },
      "portfolio": {
        "title": "Portfolio Personal",
        "description": "Sitio web personal desarrollado con Astro y diseñado con inspiración en Metal Gear Solid."
      },
      "apiRest": {
        "title": "API REST",
        "description": "Backend completo con autenticación, gestión de usuarios y operaciones CRUD.",
        "viewDocs": "Documentación"
      }
    },
    "about": {
      "title": "Sobre Mí",
      "opportunities": "🌟 Siempre abierto a nuevas oportunidades y con muchas ganas de emprender.",
      "technologies": "💻 Las tecnologías que domino son: Java, React, TypeScript, Node, PostgreSQL, HTML y CSS.",
      "learning": "🚀 En constante aprendizaje y crecimiento profesional.",
      "contact": "📬 Contáctame: mledesmarodriguez04@gmail.com"
    },
    "buttons": {
      "downloadCV": "Descargar Currículum",
      "changeTheme": "Cambiar tema",
      "changeLanguage": "Cambiar idioma"
    },
    "social": {
      "linkedin": "Mi LinkedIn",
      "github": "Mi GitHub personal"
    }
  },
  "en": {
    "nav": {
      "portfolio": "Home",
      "projects": "Projects",
      "experience": "Experience",
      "about": "About Me"
    },
    "hero": {
      "greeting": "Hi, I'm Miguel Ángel!",
      "subtitle": "Passionate Full-Stack Developer",
      "viewProjects": "View Projects",
      "experience": "Experience",
      "contact": "Contact"
    },
    "experience": {
      "title": "Experience",
      "job1": {
        "title": "Full-Stack Developer",
        "period": "2023 - Present",
        "description": "Web application development using React, Node.js and PostgreSQL"
      },
      "job2": {
        "title": "Web Development Internship",
        "period": "2022 - 2023",
        "description": "Front-end development experience with HTML, CSS and JavaScript"
      }
    },
    "projects": {
      "title": "Featured Projects",
      "webTFG": {
        "title": "Web TFG",
        "description": "Full-stack web application for restaurant management developed with React, Node.js, and PostgreSQL.",
        "viewCode": "View Code",
        "viewDemo": "View Demo"
      },
      "portfolio": {
        "title": "Personal Portfolio",
        "description": "Personal website developed with Astro and designed with Metal Gear Solid inspiration."
      },
      "apiRest": {
        "title": "REST API",
        "description": "Complete backend with authentication, user management and CRUD operations.",
        "viewDocs": "Documentation"
      }
    },
    "about": {
      "title": "About Me",
      "opportunities": "🌟 Always open to new opportunities and eager to start new ventures.",
      "technologies": "💻 Technologies I master: Java, React, TypeScript, Node, PostgreSQL, HTML and CSS.",
      "learning": "🚀 Continuously learning and growing professionally.",
      "contact": "📬 Contact me: mledesmarodriguez04@gmail.com"
    },
    "buttons": {
      "downloadCV": "Download CV",
      "changeTheme": "Change theme",
      "changeLanguage": "Change language"
    },
    "social": {
      "linkedin": "My LinkedIn",
      "github": "My Personal GitHub"
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.language-btn');
  const dropdown = document.querySelector('.language-dropdown');
  const langLinks = document.querySelectorAll('.language-dropdown a');
  const currentLang = document.querySelector('.current-lang');
  let closeTimeout;

  // Función para mostrar el dropdown
  function showDropdown() {
    dropdown.classList.add('show');
    if (closeTimeout) clearTimeout(closeTimeout);
    
    // Configurar el temporizador de 30 segundos
    closeTimeout = setTimeout(() => {
      hideDropdown();
    }, 30000);
  }

  // Función para ocultar el dropdown
  function hideDropdown() {
    dropdown.classList.remove('show');
    if (closeTimeout) clearTimeout(closeTimeout);
  }

  // Listener para el botón de idioma
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (dropdown.classList.contains('show')) {
      hideDropdown();
    } else {
      showDropdown();
    }
  });

  // Cerrar al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !langBtn.contains(e.target)) {
      hideDropdown();
    }
  });

  // Función para cambiar el idioma
  function changeLanguage(lang) {
    // Actualizar el botón de idioma
    currentLang.textContent = lang.toUpperCase();
    
    // Actualizar la clase activa en el menú
    langLinks.forEach(link => {
      if (link.dataset.lang === lang) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Actualizar los textos
    const texts = translations[lang];
    
    // Navegación
    document.querySelectorAll('.internal-links a').forEach(link => {
      const key = link.getAttribute('data-i18n');
      if (key && texts.nav[key]) {
        link.textContent = texts.nav[key];
      }
    });

    // Hero Section
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroTitle) heroTitle.textContent = texts.hero.greeting;
    if (heroSubtitle) heroSubtitle.textContent = texts.hero.subtitle;

    // Botones del Hero
    document.querySelectorAll('.buttons-container .button').forEach(button => {
      const href = button.getAttribute('href');
      if (href === '#proyectos') button.textContent = texts.hero.viewProjects;
      if (href === '#experiencia') button.textContent = texts.hero.experience;
      if (href === '#contacto') button.textContent = texts.hero.contact;
    });

    // Experiencia
    document.querySelectorAll('#experiencia .timeline-content').forEach((content, index) => {
      const title = content.querySelector('h3');
      const period = content.querySelectorAll('p')[0];
      const description = content.querySelectorAll('p')[1];
      
      if (index === 0) {
        if (title) title.textContent = texts.experience.job1.title;
        if (period) period.textContent = texts.experience.job1.period;
        if (description) description.textContent = texts.experience.job1.description;
      } else if (index === 1) {
        if (title) title.textContent = texts.experience.job2.title;
        if (period) period.textContent = texts.experience.job2.period;
        if (description) description.textContent = texts.experience.job2.description;
      }
    });

    // Proyectos
    const projectsTitle = document.querySelector('#proyectos .section-title');
    if (projectsTitle) projectsTitle.textContent = texts.projects.title;

    document.querySelectorAll('.project-card').forEach((card, index) => {
      const title = card.querySelector('h3');
      const description = card.querySelector('p');
      const [viewCodeBtn, viewDemoBtn] = card.querySelectorAll('.project-links .button');

      if (index === 0) { // Web TFG
        if (title) title.textContent = texts.projects.webTFG.title;
        if (description) description.textContent = texts.projects.webTFG.description;
        if (viewCodeBtn) viewCodeBtn.textContent = texts.projects.webTFG.viewCode;
        if (viewDemoBtn) viewDemoBtn.textContent = texts.projects.webTFG.viewDemo;
      } else if (index === 1) { // Portfolio
        if (title) title.textContent = texts.projects.portfolio.title;
        if (description) description.textContent = texts.projects.portfolio.description;
        if (viewCodeBtn) viewCodeBtn.textContent = texts.projects.webTFG.viewCode;
      } else if (index === 2) { // API REST
        if (title) title.textContent = texts.projects.apiRest.title;
        if (description) description.textContent = texts.projects.apiRest.description;
        if (viewCodeBtn) viewCodeBtn.textContent = texts.projects.webTFG.viewCode;
        if (viewDemoBtn) viewDemoBtn.textContent = texts.projects.apiRest.viewDocs;
      }
    });

    // Sobre Mí
    const aboutTitle = document.querySelector('#sobre-mi h2');
    const aboutParagraphs = document.querySelectorAll('#sobre-mi .about-content p');
    
    if (aboutTitle) aboutTitle.textContent = texts.about.title;
    if (aboutParagraphs) {
      aboutParagraphs.forEach((p, index) => {
        switch(index) {
          case 0: p.textContent = texts.about.opportunities; break;
          case 1: p.textContent = texts.about.technologies; break;
          case 2: p.textContent = texts.about.learning; break;
          case 3: p.textContent = texts.about.contact; break;
        }
      });
    }

    // Guardar preferencia
    localStorage.setItem('language', lang);
  }

  // Cargar el idioma guardado o usar español por defecto
  const savedLang = localStorage.getItem('language') || 'es';
  changeLanguage(savedLang);

  // Event listeners para los links de idioma
  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const lang = link.dataset.lang;
      changeLanguage(lang);
      hideDropdown();
    });
  });
});
