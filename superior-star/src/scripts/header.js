document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;

    if (scrollPos > window.innerHeight * 0.05 && scrollPos > lastScrollY) {
      // Si bajó más de 5% y sigue bajando → ocultar
      header.classList.add("hidden");
    } else {
      // Si sube → mostrar
      header.classList.remove("hidden");
    }

    lastScrollY = scrollPos;
  });
});
