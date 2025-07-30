export const translations = {
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto",
    },
    home: {
      title: "¡Bienvenido a mi portafolio!",
      subtitle: "Desarrollador web y de software apasionado por la IA, el IoT y la innovación.",
      downloadCV: "Descargar CV",
      loading: "Cargando...",
    },
    common: {
      selectLanguage: "Seleccionar idioma",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact",
    },
    home: {
      title: "Welcome to my portfolio!",
      subtitle: "Web and software developer passionate about AI, IoT, and innovation.",
      downloadCV: "Download CV",
      loading: "Loading...",
    },
    common: {
      selectLanguage: "Select language",
    },
  },
};

export type Language = keyof typeof translations;
export type TranslationKey = keyof typeof translations.es; 