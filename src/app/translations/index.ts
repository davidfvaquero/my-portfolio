const navTranslations = {
  es: {
    home: "Inicio",
    about: "Sobre mí",
    projects: "Proyectos",
    skills: "Habilidades",
    contact: "Contacto",
  },
  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    skills: "Skills",
    contact: "Contact",
  },
};

const homeTranslations = {
  es: {
    title: "¡Bienvenido a mi portafolio!",
    subtitle: "Desarrollador web y de software apasionado por la IA, el IoT y la innovación.",
    downloadCV: "Descargar CV",
    loading: "Cargando...",
    availableForWork: "✅ Disponible para trabajar",
    location: "📍 Logroño, España",
  },
  en: {
    title: "Welcome to my portfolio!",
    subtitle: "Web and software developer passionate about AI, IoT, and innovation.",
    downloadCV: "Download CV",
    loading: "Loading...",
    availableForWork: "✅ Available for work",
    location: "📍 Logroño, Spain",
  },
};

const commonTranslations = {
  es: {
    selectLanguage: "Seleccionar idioma",
  },
  en: {
    selectLanguage: "Select language",
  },
};

export const translations = {
  es: {
    nav: navTranslations.es,
    home: homeTranslations.es,
    common: commonTranslations.es,
  },
  en: {
    nav: navTranslations.en,
    home: homeTranslations.en,
    common: commonTranslations.en,
  },
};

export type Language = keyof typeof translations; 