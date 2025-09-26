// Diccionario de traducciones
const translations = {
  es: {
    "nav-home": "Inicio",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contacto",

    // Index
    "index-title": "Bienvenido a mi página",
    "index-text": "Soy desarrollador y aquí muestro mis proyectos y juegos.",

    // Portfolio
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Aquí están mis juegos y proyectos destacados:",
    "portfolio-games": "🎮 Juegos",
    "portfolio-games-text": "Actualmente no tengo ningún juego publicado, próximamente añadiré mis creaciones aquí.",
    "portfolio-projects": "💡 Proyectos",
    "casino-nightmare": "The Casino Nightmare",
    "casino-nightmare-desc": "Un proyecto de videojuego con temática oscura, ambientado en un casino lleno de misterio y pesadillas.",

    // Contacto
    "contact-title": "Contáctame",
    "contact-text": "Puedes contactar conmigo para cualquier cosa en el correo:"
  },
  en: {
    "nav-home": "Home",
    "nav-portfolio": "Portfolio",
    "nav-contact": "Contact",

    // Index
    "index-title": "Welcome to my page",
    "index-text": "I am a developer and here I showcase my projects and games.",

    // Portfolio
    "portfolio-title": "Portfolio",
    "portfolio-subtitle": "Here are my featured games and projects:",
    "portfolio-games": "🎮 Games",
    "portfolio-games-text": "I don’t have any games published yet, but I’ll be adding them soon.",
    "portfolio-projects": "💡 Projects",
    "casino-nightmare": "The Casino Nightmare",
    "casino-nightmare-desc": "A dark-themed video game project set in a mysterious casino full of nightmares.",

    // Contact
    "contact-title": "Contact Me",
    "contact-text": "You can contact me for anything at the email:"
  }
};

// Cambiar idioma dinámicamente
function changeLanguage(lang) {
  const elements = document.querySelectorAll("[data-key]");
  elements.forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem("lang", lang);
}

// Aplicar idioma guardado al cargar
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || "es";
  document.getElementById("lang-switcher").value = savedLang;
  changeLanguage(savedLang);
  document.getElementById("lang-switcher").addEventListener("change", (e) => {
    changeLanguage(e.target.value);
  });
});
