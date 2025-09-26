const translations = {
  es: {
    "nav-home": "Inicio",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contacto",
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Aquí están mis juegos y proyectos destacados:",
    "portfolio-games": "🎮 Juegos",
    "portfolio-games-text": "Actualmente no tengo ningún juego publicado, próximamente añadiré mis creaciones aquí.",
    "portfolio-projects": "💡 Proyectos",
    "casino-nightmare": "CASINO NIGHTMARE",
    "home-title": "Bienvenido a Casino Nightmare",
    "home-desc": "Explora mi portfolio de desarrollo web y videojuegos.<br>Descubre mis proyectos y contacta para colaboraciones.",
    "contact-title": "Contacto",
    "contact-desc": "¿Quieres colaborar o tienes alguna consulta?<br>Rellena el formulario y te responderé lo antes posible.",
    "contact-send": "Enviar"
  },
  en: {
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Here are my featured games and projects:",
    "portfolio-games": "🎮 Games",
    "portfolio-games-text": "I don't have any published games yet, soon I'll add my creations here.",
    "portfolio-projects": "💡 Projects",
    "casino-nightmare": "CASINO NIGHTMARE",
    "home-title": "Welcome to Casino Nightmare",
    "home-desc": "Explore my web and videogame development portfolio.<br>Discover my projects and contact for collaborations.",
    "contact-title": "Contact",
    "contact-desc": "Want to collaborate or have a question?<br>Fill out the form and I'll reply as soon as possible.",
    "contact-send": "Send"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.tagName === "BUTTON") {
        el.placeholder = translations[lang][key];
        el.textContent = translations[lang][key];
      } else {
        el.innerHTML = translations[lang][key];
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const langSwitcher = document.getElementById('lang-switcher');
  if (langSwitcher) {
    setLanguage(langSwitcher.value);
    langSwitcher.addEventListener('change', (e) => {
      setLanguage(e.target.value);
    });
  }
});