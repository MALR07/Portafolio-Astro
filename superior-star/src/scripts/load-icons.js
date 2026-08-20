// Reemplaza elementos con class 'tech-svg' y atributo data-src por el SVG inline desde Simple Icons CDN
export default function loadIcons() {
  if (typeof window === 'undefined') return;
  document.addEventListener('DOMContentLoaded', async () => {
    const nodes = Array.from(document.querySelectorAll('.tech-svg'));
    await Promise.all(nodes.map(async (el) => {
      const src = el.getAttribute('data-src');
      if (!src) return;
      try {
        const res = await fetch(src);
        if (!res.ok) return;
        let svgText = await res.text();
        // Asegurarnos de que el SVG use currentColor para fill/stroke
        svgText = svgText.replace(/fill="[^\"]*"/g, 'fill="currentColor"');
        svgText = svgText.replace(/stroke="[^\"]*"/g, 'stroke="currentColor"');
        // Insertar SVG inline
        el.innerHTML = svgText;
        // Añadir clase para control desde CSS/JS
        const svg = el.querySelector('svg');
        if (svg) {
          svg.setAttribute('width', '20');
          svg.setAttribute('height', '20');
          svg.setAttribute('aria-hidden', 'true');
          svg.classList.add('inline-tech-svg');
        }
      } catch (err) {
        // silenciar error; dejar contenedor vacío
        console.error('Error cargando icono', src, err);
      }
    }));
  });
}
