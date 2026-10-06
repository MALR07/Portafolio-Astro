// Translations object
const translations = {
  es: {
    nav: {
      portfolio: "Inicio",
      projects: "Proyectos",
      experience: "Experiencia",
      about: "Sobre Mí"
    },
    "hero": {
      "greeting": "¡Hola, soy Miguel Ángel!",
      "subtitle": "Desarrollador Web Full-Stack and RPA Developer. De Sevilla, España. Graduado en Diseño de Aplicaciones Web y Automatización de Procesos mas IA.",
      "viewProjects": "Ver Proyectos en GitHub",
      "experience": "LinkedIn",
      "contact": "Contactar"
      },
    "experience": {
      "title": "Experiencia Laboral",
      "job1": {
        "title": "Desarrollador Web Full-Stack Prácticas",
        "period": "Febrero 2025 - Junio 2025",
        "description": "Fueron mis primeras prácticas como Desarrollador Web Full-Stack, donde aprendí muchísimo. Creamos un proyecto llamado Vuela 21 y lo desarrollamos desde cero con Symfony y Angular."
      },
    },
    "projects": {
      "title": "Proyectos",
      "webTFG": {
        "title": "Bar Pepin Web (TFG)",
        "description": "Proyecto Final de Grado desarrollado como aplicación web full-stack para modernizar la gestión de un restaurante. La solución permite administrar de forma eficiente el <span class=\"text-purple-400 font-semibold\">catálogo de platos</span>, <span class=\"text-purple-400 font-semibold\">sistema de reservas</span> y experiencia del cliente. Integra un backend robusto con Node.js y Express, base de datos PostgreSQL, autenticación con JWT y frontend moderno con React y Tailwind CSS.",
        "viewCode": "Ver Código",
        "viewDemo": "Ver Demo",
        "viewPage": "Ver Pagina"
      },
      "webVuela21": {
        "title": "Web Vuela 21",
        "description": "Aplicación de paquetería desarrollada desde cero durante mis prácticas en Codearts Solutions. Proyecto desafiante que requería <span class=\"text-purple-400 font-semibold\">análisis de requisitos ágil</span> y <span class=\"text-purple-400 font-semibold\">entrega incremental</span> bajo restricción de tiempo. Implementamos un sistema completo con Symfony en backend, Angular en frontend, autenticación segura y gestión de datos de logística con PostgreSQL."
        ,
        "viewDemo": "Ver Demo",
        "viewPresentation": "Ver Presentación"
      }
      ,
      "rpaBot": {
        "title": "RPA Exam BOT DISCORD",
        "description": "Solución de automatización inteligente que transforma la gestión manual de exámenes y eventos en Discord. El bot implementa un flujo completamente automatizado para <span class=\"text-purple-400 font-semibold\">crear y gestionar formularios dinámicos</span>, <span class=\"text-purple-400 font-semibold\">registrar confirmaciones</span> y <span class=\"text-purple-400 font-semibold\">generar reportes de asistencia</span>. Desarrollado con n8n, integrando APIs de Airtable para base de datos en la nube y Discord para interfaz de usuario.",
        "viewCode": "Código",
        "viewVideo": "Video"
      },
      "pisitos": {
        "title": "Pisitos (Travel and Activities)",
        "description": "Proyecto académico de automatización avanzada que monitoriza y consolida <span class=\"text-purple-400 font-semibold\">ofertas inmobiliarias en tiempo real</span> desde Idealista. La solución utiliza Power Automate Cloud para extraer datos periódicamente, procesar criterios parametrizados (precio, ubicación, características) y generar <span class=\"text-purple-400 font-semibold\">reportes comparativos automatizados</span> distribuidos por correo. Elimina completamente la carga manual de búsqueda y análisis.",
        "viewCode": "Código",
        "viewVideo": "Video"
      },
      "aegis": {
        "title": "Aegis AI Documents",
        "description": "Proyecto de automatización inteligente que redefine la gestión documental empresarial. Transforma el proceso manual y propenso a errores de recepción, validación y comparación de <span class=\"text-purple-400 font-semibold\">presupuestos en un flujo 100% automatizado</span>. Integra Power Automate Cloud, SharePoint para gestión documental y capacidades de IA para análisis comparativo. Genera <span class=\"text-purple-400 font-semibold\">recomendaciones objetivas</span> basadas en criterios predefinidos, escalable para cualquier volumen de documentos.",
        "viewCode": "Código",
        "viewVideo": "Video",
        "viewPower": "Presentación"
      },
      "eva": {
        "title": "Evangelion of Gamers",
        "description": "Evangelion of Gamers es una aplicación web <span class=\"text-purple-400 font-semibold\">full-stack</span> pensada por y para amantes de los videojuegos. Permite llevar un control detallado de tu <span class=\"text-purple-400 font-semibold\">colección personal de juegos</span>, explorar el <span class=\"text-purple-400 font-semibold\">catálogo global</span> y consultar logros mediante la integración con <span class=\"text-purple-400 font-semibold\">RAWG API</span>.",
        "viewCode": "Código",
        "viewPage": "Ver página"
      },
      "viajero": {
        "title": "Archivos del Viajero",
        "description": "Archivos del Viajero es una aplicación web <span class=\"text-purple-400 font-semibold\">full-stack</span> para explorar Destiny 1 y Destiny 2: lore, equipo, personajes, lugares, lanzamientos, cinemáticas y línea temporal. Incluye búsqueda, fichas localizadas y colecciones de objetos organizadas por lanzamiento.",
        "viewCode": "Código",
        "viewPage": "Ver página"
      }
    },
    "about": {
      "title": "Sobre Mí",
      "opportunities": "Hola, soy <span class=\"text-green-400 font-semibold\">Miguel Ángel Ledesma</span>, un <span class=\"text-purple-400 font-semibold\">Programador Web y RPA Developer</span>. Actualmente, estoy <span class=\"text-purple-400 font-semibold\">desarrollando aplicaciones y automatizaciones</span> para seguir formándome y mejorar mis habilidades en el <span class=\"text-purple-400 font-semibold\">desarrollo web y automatización de procesos</span>.",
      "technologies": "Tengo muchas ganas de demostrar mis habilidades y dar mi creatividad un paso adelante. Resido en <span class=\"accent-cyan\">Sevilla</span>, concretamente en un pueblo llamado <span class=\"text-cyan-400 font-semibold\">Morón de la Frontera</span>, <span class=\"accent-red\">España</span>. Soy una persona <span class=\"accent-blue\">sociable</span>, <span class=\"accent-orange\">perfeccionista</span>, <span class=\"accent-gold\">disciplinada</span> y <span class=\"text-purple-400 font-semibold\">curiosa</span>."
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
      "subtitle": "Full-Stack Web Developer from Seville, Spain. Graduate in Web Application Development and RPA Development.",
      "viewProjects": "View Projects",
      "experience": "Experience",
      "contact": "Contact"
      },
    "experience": {
      "title": "Work Experience",
      "job1": {
        "title": "Full-Stack Web Developer Internship",
        "period": "February 2025 - June 2025",
        "description": "My first internship as a Full-Stack Web Developer, where I learned a lot. We created a project called Vuela 21 and developed it from scratch using Symfony and Angular."
      },
    },

    "projects": {
      "title": "Projects",
      "webTFG": {
        "title": "Bar Pepin Web (TFG)",
        "description": "Final Degree Project developed as a full-stack web application to modernize restaurant management. The solution efficiently manages <span class=\"text-indigo-400 font-semibold\">dish catalog</span>, <span class=\"text-indigo-400 font-semibold\">reservation system</span> and customer experience. It features a robust Node.js/Express backend, PostgreSQL database, JWT authentication and modern React frontend with Tailwind CSS.",
        "viewCode": "View Code",
        "viewDemo": "View Demo",
        "viewPage": "View Page"
      },
      "webVuela21": {
        "title": "Web Vuela 21",
        "description": "Logistics application developed from scratch during my internship at Codearts Solutions. A challenging project requiring <span class=\"text-indigo-400 font-semibold\">agile requirements analysis</span> and <span class=\"text-indigo-400 font-semibold\">incremental delivery</span> under time constraints. We implemented a complete system with Symfony backend, Angular frontend, secure authentication and PostgreSQL logistics data management."
        ,
        "viewDemo": "View Demo",
        "viewPresentation": "View Presentation"
      }
      ,
      "rpaBot": {
        "title": "RPA Exam BOT DISCORD",
        "description": "Intelligent automation solution that transforms manual exam and event management in Discord. The bot implements a fully automated workflow to <span class=\"text-indigo-400 font-semibold\">create and manage dynamic forms</span>, <span class=\"text-indigo-400 font-semibold\">record confirmations</span> and <span class=\"text-indigo-400 font-semibold\">generate attendance reports</span>. Built with n8n, integrating Airtable APIs for cloud database and Discord for user interface.",
        "viewCode": "Code",
        "viewVideo": "Video"
      },
      "pisitos": {
        "title": "Pisitos (Travel and Activities)",
        "description": "Advanced automation academic project that monitors and consolidates <span class=\"text-indigo-400 font-semibold\">real estate listings in real-time</span> from Idealista. The solution uses Power Automate Cloud to periodically extract data, process parameterized criteria (price, location, features) and generate <span class=\"text-indigo-400 font-semibold\">automated comparative reports</span> distributed via email. Completely eliminates manual property search and analysis burden.",
        "viewCode": "Code",
        "viewVideo": "Video"
      },
      "aegis": {
        "title": "Aegis AI Documents",
        "description": "Intelligent automation project that redefines enterprise document management. Transforms the manual and error-prone process of receiving, validating and comparing <span class=\"text-indigo-400 font-semibold\">budgets into a 100% automated workflow</span>. Integrates Power Automate Cloud, SharePoint for document management and AI capabilities for comparative analysis. Generates <span class=\"text-indigo-400 font-semibold\">objective recommendations</span> based on predefined criteria, scalable for any document volume.",
        "viewCode": "Code",
        "viewVideo": "Video",
        "viewPower": "Presentation"
      },
      "eva": {
        "title": "Evangelion of gamers",
        "description": "Evangelion of Gamers is a <span class=\"text-indigo-400 font-semibold\">full-stack</span> web application designed by and for video game enthusiasts. It lets you keep track of your <span class=\"text-indigo-400 font-semibold\">personal game collection</span>, explore the <span class=\"text-indigo-400 font-semibold\">global catalog</span>, and check achievements through its integration with the <span class=\"text-indigo-400 font-semibold\">RAWG API</span>.",
        "viewCode": "Code",
        "viewPage": "View Page"
      },
      "viajero": {
        "title": "Traveler's Archive",
        "description": "Traveler's Archive is a <span class=\"text-indigo-400 font-semibold\">full-stack</span> web application for exploring Destiny 1 and Destiny 2: lore, gear, characters, locations, releases, cinematics, and timeline. It includes search, localized pages, and item collections organized by release.",
        "viewCode": "Code",
        "viewPage": "View Page"
      }
    },
    
    "about": {
      "title": "About Me",
      "opportunities": "Hi, I'm <span class=\"text-green-400 font-semibold\">Miguel Ángel Ledesma</span>, a <span class=\"text-indigo-400 font-semibold\">junior Web Developer</span> graduated in <span class=\"text-indigo-400 font-semibold\">Web Application Development (DAW)</span>. Currently, I'm <span class=\"text-indigo-400 font-semibold\">developing applications and automations</span> to continue learning and improving my <span class=\"text-indigo-400 font-semibold\">web development and RPA skills</span>.",
      "technologies": "I'm eager to demonstrate my skills and take my creativity to the next level. I live in <span class=\"accent-cyan\">Seville</span>, specifically in a town called <span class=\"text-cyan-400 font-semibold\">Morón de la Frontera</span>, <span class=\"accent-red\">Spain</span>. I consider myself a <span class=\"accent-blue\">sociable</span>, <span class=\"accent-orange\">perfectionist</span>, <span class=\"accent-gold\">disciplined</span> and <span class=\"text-purple-400 font-semibold\">curious</span> person."
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

// Initialize language system
document.addEventListener('DOMContentLoaded', () => {
  const langBtn = document.querySelector('.language-btn');
  const dropdown = document.querySelector('.language-dropdown');
  const langLinks = document.querySelectorAll('.language-dropdown a');
  const currentLang = document.querySelector('.current-lang');

  if (!langBtn || !dropdown || !langLinks.length) return;

  // Get saved language or use Spanish
  const savedLang = localStorage.getItem('language') || 'es';
  
  // Set initial UI state
  updateLanguageUI(savedLang);

  // Toggle dropdown on button click
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdown.classList.toggle('show');
  });

  // Close dropdown when clicking outside
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && !langBtn.contains(e.target)) {
      dropdown.classList.remove('show');
    }
  });

  // Handle language selection
  langLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const newLang = link.dataset.lang;
      localStorage.setItem('language', newLang);
      updateLanguageUI(newLang);
      updatePageContent(newLang);
      dropdown.classList.remove('show');
    });
  });

  // Update UI elements
  function updateLanguageUI(lang) {
    currentLang.textContent = lang.toUpperCase();
    langLinks.forEach(link => {
      if (link.dataset.lang === lang) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
    // set data attribute so CSS can reflect selected state
    const selector = document.querySelector('.language-selector');
    if (selector) selector.setAttribute('data-lang', lang);
  }

  // Update page content
  function updatePageContent(lang) {
    const text = translations[lang];

    // First: update header nav links using translations[lang].nav when available
    if (text && text.nav) {
      document.querySelectorAll('.internal-links a[data-i18n]').forEach(t => {
        const key = t.getAttribute('data-i18n');
        if (key && Object.prototype.hasOwnProperty.call(text.nav, key)) {
          t.textContent = text.nav[key];
        }
      });
    }

    // Generic: update any element with a data-i18n attribute using nested keys
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (!key) return;
      // skip header nav links (handled above)
      if (el.closest && el.closest('.internal-links')) return;

      const parts = key.split('.');
      let value = translations[lang];
      for (let p of parts) {
        if (value && Object.prototype.hasOwnProperty.call(value, p)) {
          value = value[p];
        } else {
          value = null;
          break;
        }
      }

      // Only set textual content when the resolved value is a string
      if (typeof value === 'string') {
        if (el.tagName.toLowerCase() === 'input' || el.tagName.toLowerCase() === 'textarea') {
          el.placeholder = value;
        } else {
          // Check if element has class project-description or about-paragraph (supports HTML)
          const isProjectDescription = el.classList.contains('project-description');
          const isAboutParagraph = el.classList.contains('about-paragraph');
          
          // If element contains an SVG or an icon element, preserve it and only replace the label
          const icon = el.querySelector('svg, i');
          if (icon && !isProjectDescription && !isAboutParagraph) {
            // create safe text by escaping
            const escapeHtml = (str) => str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            const iconHtml = icon.outerHTML;
            el.innerHTML = iconHtml + ' ' + escapeHtml(value);
          } else if (isProjectDescription || isAboutParagraph) {
            // For project descriptions and about paragraphs, use innerHTML to support HTML tags with colors
            el.innerHTML = value;
          } else {
            el.textContent = value;
          }
        }
      }
    });

    // Update aria-labels and social link titles
    const social = translations[lang]?.social;
    if (social) {
      const linkedin = Array.from(document.querySelectorAll('a')).find(a => a.href && a.href.includes('linkedin.com'));
      const github = Array.from(document.querySelectorAll('a')).find(a => a.href && a.href.includes('github.com'));
      if (linkedin) linkedin.setAttribute('aria-label', social.linkedin);
      if (github) github.setAttribute('aria-label', social.github);
    }
  }

  // Apply initial language
  updatePageContent(savedLang);
});
