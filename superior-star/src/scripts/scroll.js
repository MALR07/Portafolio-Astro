document.addEventListener('DOMContentLoaded', () => {
  // Intersection Observer para las animaciones de sección
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1
  });

  // Observar todas las secciones
  document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
  });

  // Manejar los enlaces del header para scroll suave
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        // Calcular la posición del header
        const headerHeight = document.querySelector('header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
});
