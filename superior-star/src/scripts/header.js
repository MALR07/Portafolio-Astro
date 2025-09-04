document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');

  // Función para actualizar el header basado en el scroll
  const updateHeader = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 3) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Verificar el scroll inicial (por si se recarga la página scrolleada)
  updateHeader();

  // Event listener para el scroll
  window.addEventListener('scroll', () => {
    updateHeader();
  });

  // Para manejar cambios dinámicos en la altura de la página
  const observer = new ResizeObserver(() => {
    updateHeader();
  });
  
  observer.observe(document.body);
});
