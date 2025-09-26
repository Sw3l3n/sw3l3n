const translations = {
  es: {
    "nav-home": "Inicio",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contacto",
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Aquí están mis juegos y proyectos destacados:",
    "portfolio-games": "🎮 Juegos",
    "portfolio-games-text-title": "Próximamente...",
    "portfolio-games-text": "Actualmente no tengo ningún juego publicado, próximamente añadiré mis creaciones aquí.",
    "portfolio-projects": "💡 Proyectos",
    "casino-nightmare": "The Casino Nightmare",
    "home-title": "Bienvenido a Casino Nightmare",
    "home-desc": "Explora mi portfolio de desarrollo web y videojuegos.<br>Descubre mis proyectos y contacta para colaboraciones.",
    "contact-title": "Contacta Conmigo",
    "contact-desc": "¿Quieres colaborar o tienes alguna consulta?<br>Escríbeme al correo: <strong>swelen47@gmail.com</strong>",
    "contact-send": "Enviar",
    "contact-name": "Tu nombre",
    "contact-email": "Tu email",
    "contact-message": "Tu mensaje"
  },
  en: {
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Here are my featured games and projects:",
    "portfolio-games": "🎮 Games",
    "portfolio-games-text-title": "Coming soon...",
    "portfolio-games-text": "I don't have any games published yet, but I'll be adding them soon.",
    "portfolio-projects": "💡 Projects",
    "casino-nightmare": "The Casino Nightmare",
    "home-title": "Welcome to Casino Nightmare",
    "home-desc": "Explore my web and videogame development portfolio.<br>Discover my projects and contact for collaborations.",
    "contact-title": "Contact Me",
    "contact-desc": "Want to collaborate or have a question?<br>Write me at: <strong>swelen47@gmail.com</strong>",
    "contact-send": "Send",
    "contact-name": "Your name",
    "contact-email": "Your email",
    "contact-message": "Your message"
  }
};

function setLanguage(lang) {
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang][key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = translations[lang][key];
      } else if (el.tagName === "BUTTON") {
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
