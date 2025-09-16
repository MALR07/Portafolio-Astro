import { c as createComponent, d as createAstro, f as addAttribute, r as renderTemplate, m as maybeRenderHead, o as renderScript } from './astro/server_Cxeq-q96.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Astro = createAstro();
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="sitemap" href="/sitemap-index.xml"><link rel="alternate" type="application/rss+xml"${addAttribute(new URL("rss.xml", Astro2.site), "href")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Font preloads --><link rel="preload" href="/fonts/atkinson-regular.woff" as="font" type="font/woff" crossorigin><link rel="preload" href="/fonts/atkinson-bold.woff" as="font" type="font/woff" crossorigin><!-- Canonical URL --><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Primary Meta Tags --><!-- <title>{title}</title>
<!-- <meta name="title" content={title} /> --><!-- <meta name="description" content={description} /> --><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(Astro2.url, "content")}><!-- <meta property="og:title" content={title} /> --><!-- <meta property="og:description" content={description} /> --><!-- <meta property="og:image" content={new URL(image.src, Astro.url)} /> --><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(Astro2.url, "content")}><!--<meta property="twitter:title" content={title} />--><!--<meta property="twitter:description" content={description} />--><!--<meta property="twitter:image" content={new URL(image.src, Astro.url)} />-->`;
}, "/home/malr07/Escritorio/Portafolio-Astro/superior-star/src/components/BaseHead.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const today = /* @__PURE__ */ new Date();
  return renderTemplate`${maybeRenderHead()}<footer class="footer-container"> <div class="footer-content"> <div class="footer-copyright">
&copy; <span id="current-year">${today.getFullYear()}</span> <a href="https://www.linkedin.com/in/miguel-angel-ledesma-rodriguez-49b8b436b/" target="_blank" class="footer-link-name">
Miguel Ángel Ledesma Rodriguez
</a> todos los derechos reservados.
</div> <!-- Separación mayor entre los enlaces --> <div style="width: 2rem;"></div> <a href="/src/assets/CV.pdf" target="_blank" class="footer-link">
Descargar Currículum
</a> </div> </footer>`;
}, "/home/malr07/Escritorio/Portafolio-Astro/superior-star/src/components/Footer.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderScript($$result, "/home/malr07/Escritorio/Portafolio-Astro/superior-star/src/components/Header.astro?astro&type=script&index=0&lang.ts")} ${maybeRenderHead()}<header> <div class="header-bg"></div> <nav> <div class="internal-links"> <a href="/" data-i18n="portfolio" class="nav-link">Inicio</a> <a href="#proyectos" data-i18n="projects" class="nav-link">Proyectos</a> <a href="#experiencia" data-i18n="experience" class="nav-link">Experiencia</a> <a href="#sobre-mi" data-i18n="about" class="nav-link">Sobre Mí</a> </div> <button class="theme-toggle" aria-label="Cambiar tema"> <svg class="moon-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"> <path class="moon" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke-width="2"></path> </svg> <svg class="sun-icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor"> <circle cx="12" cy="12" r="5" stroke-width="2"></circle> <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke-width="2"></path> </svg> </button> <div class="social-links"> <!-- <div class="language-selector">
        <button class="language-btn" aria-label="Cambiar idioma">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 2a8 8 0 0 1 8 8 8 8 0 0 1-8 8 8 8 0 0 1-8-8 8 8 0 0 1 8-8z"/>
            <path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm5.3 4.3L13 11.6v4.4h-2v-4.4L6.7 8.3 8.3 6.7 12 10.4l3.7-3.7 1.6 1.6z"/>
          </svg>
          <span class="current-lang">ES</span>
        </button>
        <div class="language-dropdown">
          <a href="#" data-lang="es" class="active">Español</a>
          <a href="#" data-lang="en">English</a>
        </div>
      </div>--> <!-- LinkedIn --> <a href="https://www.linkedin.com/in/miguel-angel-ledesma-rodriguez-49b8b436b/" target="_blank" aria-label="LinkedIn"> <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor"> <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.7v2.2h.07c.65-1.23 2.23-2.53 4.59-2.53 4.9 0 5.8 3.22 5.8 7.41V24h-5v-6.5c0-1.55-.03-3.55-2.16-3.55-2.16 0-2.49 1.68-2.49 3.42V24h-5V8z"></path> </svg> </a> <a href="https://github.com/MALR07" target="_blank"> <span class="sr-only">Mi GitHub personal</span> <svg viewBox="0 0 16 16" aria-hidden="true" width="32" height="32"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> </a> </div> </nav> </header>`;
}, "/home/malr07/Escritorio/Portafolio-Astro/superior-star/src/components/Header.astro", void 0);

const SITE_DESCRIPTION = "Bienvenido a mi Portafolio!";

export { $$BaseHead as $, SITE_DESCRIPTION as S, $$Header as a, $$Footer as b };
