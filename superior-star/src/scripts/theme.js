document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const themeToggle = document.querySelector('.theme-toggle');

  // Función para actualizar el header basado en el scroll
  const updateHeader = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    if (scrollPercent > 3) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Verificar el scroll inicial
  updateHeader();

  // Event listener para el scroll
  window.addEventListener('scroll', updateHeader, { passive: true });

  // Observer para cambios en la altura de la página
  const observer = new ResizeObserver(() => {
    updateHeader();
  });
  
  observer.observe(document.body);

  // Manejo del tema oscuro
  function setTheme(isDark) {
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
      document.body.classList.add('dark-mode');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  // Obtener preferencia guardada o del sistema
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedTheme = localStorage.getItem('theme');

  // Aplicar tema inicial
  setTheme(savedTheme === 'dark' || (!savedTheme && prefersDark));

  // Event listener para el botón de tema
  themeToggle?.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'dark';
    setTheme(isDark);
  });

  // Escuchar cambios en la preferencia del sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('theme')) {
      setTheme(e.matches);
    }
  });
});
