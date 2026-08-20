// Contenido editable por ti: modifica los strings ES/EN aquí.
export const CONTENT = {
  es: {
    aboutOpportunities: `Hola, soy <span class=\"about-name text-indigo-400 font-bold\">Miguel Ángel Ledesma</span>, un <span class=\"about-role text-purple-400 font-semibold\">Programador Web y RPA Developer</span>, graduado en <span class=\"accent-red\">Diseño de Aplicaciones Web (DAW)</span>. Actualmente, estoy <span class=\"about-phrase text-purple-400 font-semibold\">desarrollando aplicaciones y automatizaciones</span> para seguir formándome y mejorar mis habilidades en el <span class=\"about-phrase text-purple-400 font-semibold\">desarrollo web y automatización de procesos</span>.`,
    aboutTechnologies: `Tengo muchas ganas de demostrar mis habilidades y dar mi creatividad un paso adelante. <span class=\"about-residence text-purple-400 font-semibold\">Resido en Sevilla</span>, concretamente en un pueblo llamado <span class=\"about-town text-cyan-400 font-semibold\">Morón de la Frontera</span>, <span class=\"accent-orange\">España</span>. Soy una persona sociable, perfeccionista y disciplinada.`
  },
  en: {
    aboutOpportunities: `Hi, I'm <span class=\"about-name text-indigo-400 font-bold\">Miguel Ángel Ledesma</span>, a <span class=\"about-role text-purple-400 font-semibold\">Web Developer and RPA Developer</span>, graduated in <span class=\"accent-red\">Web Application Design (DAW)</span>. Right now I'm <span class=\"about-phrase text-purple-400 font-semibold\">building applications and automations</span> to keep learning and improve my skills in <span class=\"about-phrase text-purple-400 font-semibold\">web development and process automation</span>.`,
    aboutTechnologies: `I really want to show my skills and take my creativity a step forward. <span class=\"about-residence text-purple-400 font-semibold\">I live in Seville</span>, specifically in a town called <span class=\"about-town text-cyan-400 font-semibold\">Morón de la Frontera</span>, <span class=\"accent-orange\">Spain</span>. I'm a sociable, perfectionist and disciplined person.`
  }
};

export function applyLanguage(lang = 'es'){
  const content = CONTENT[lang] || CONTENT.es;
  const el1 = document.getElementById('about-opportunities');
  const el2 = document.getElementById('about-technologies');
  if(el1) el1.innerHTML = content.aboutOpportunities;
  if(el2) el2.innerHTML = content.aboutTechnologies;
  // store preference
  try{ localStorage.setItem('site-lang', lang);}catch(e){}
}

// Helper to toggle/expose globally
export function initI18n(){
  if(typeof window === 'undefined') return;
  const saved = localStorage.getItem('site-lang') || 'es';
  applyLanguage(saved);
  window.setLang = (l) => applyLanguage(l);
}
