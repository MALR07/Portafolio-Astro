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
      "subtitle": "Desarrollador Web Full-Stack. De Sevilla, España. Graduado en Diseño de Aplicaciones Web.",
      "viewProjects": "Ver Proyectos",
      "experience": "Experiencia",
      "contact": "Contactar"
    },
    "experience": {
      "title": "Experiencia Laboral",
      "job1": {
        "title": "Desarrollador Web Full-Stack Practicas",
        "period": "Febrero 2025 - Junio 2025",
        "description": "Fueron mis primeras practicas como Desarrollador Web Full-Stack, donde aprendi muchisimo. Creamos un proyecto llamado Vuela 21 y la desarrollamos de cero con Symfony y Angular."
      },
    
    },
    "projects": {
      "title": "Proyectos",
      "webTFG": {
        "title": "Bar Pepin Web(TFG)",
        "description": "Aplicación web full-stack para gestión de platos y reservas de los mismos desarrollada con React, Node.js, y PostgreSQL",
        "viewCode": "Ver Código",
        "viewDemo": "Ver Demo"
      },
      "Web Vuela 21": {
        "title": "Web Vuela 21",
        "description": "Durante mi tiempo en practicas en Codearts Solutions, desarrollamos desde cero una aplicación de paquetería. Inicialmente no contábamos con mucha información sobre cómo querían el producto, pero logramos llevarlo a cabo en el tiempo limitado que teníamos, dejando la aplicación completamente funcional."
      },
    },
    "about": {
      "title": "Sobre Mí",
      "opportunities": "Hola, soy Miguel Ángel Ledesma, un Programador Web junior graduado en Diseño de Aplicaciones Web (DAW). Actualmente, estoy desarrollando un par de aplicaciones para seguir formándome y mejorar mis habilidades en el desarrollo web.",
      "technologies": "Tengo muchas ganas de demostrar mis habilidades y dar mi creatividad un paso adelante. Resido en Sevilla, cocretamente en un pueblo llamado Moron de la Frontera, España. Soy una persona sociable, perfeccionista y disciplinada."
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
    "title": "Work Experience",
    "job1": {
      "title": "Full-Stack Web Developer Internship",
      "period": "February 2025 - June 2025",
      "description": "Development of web applications using React, Node.js, and PostgreSQL"
    },
    
    },
    "projects": {
      "title": "Featured Projects",
      "webTFG": {
        "title": "Bar Pepin Web(TFG)",
        "description": "Full-stack web application for restaurant management developed with React, Node.js, and PostgreSQL.",
        "viewCode": "View Code",
        "viewDemo": "View Demo"
      },
      "Web Vuela 21": {
        "title": "Web Vuela 21",
        "description": "During my internship at Codearts Solutions, we developed a logistics application from scratch. At first, we had little information about the client’s needs, but we managed to complete a fully functional product within the limited time available."
      },
  
    },
     "about": {
    "title": "About Me",
    "opportunities": "Hi, I'm Miguel Ángel Ledesma, a junior Web Developer graduated in Web Application Development (DAW). Currently, I’m working on several applications to continue learning and improving my skills.",
    "technologies": "I’m eager to demonstrate my skills and push my creativity forward. I live in Morón de la Frontera, Seville, Spain. I consider myself a sociable, perfectionist, and disciplined person."
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
