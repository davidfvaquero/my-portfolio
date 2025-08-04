"use client";

import { useTranslations } from "../hooks/useTranslations";
import { useTheme } from "../contexts/ThemeContext";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Heart, 
  Coffee,
  ExternalLink,
  ArrowUp
} from "lucide-react";
import { useState } from "react";

const footerData = {
  es: {
    description: "Desarrollador apasionado por crear soluciones innovadoras y experiencias digitales excepcionales.",
    quickLinks: {
      title: "Enlaces Rápidos",
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      contact: "Contacto"
    },
    social: {
      title: "Redes Sociales",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      cv: "Descargar CV"
    },
    newsletter: {
      title: "Mantente Conectado",
      placeholder: "Tu email",
      button: "Suscribirse",
      description: "Recibe actualizaciones sobre nuevos proyectos y tecnologías."
    },
    stats: {
      projects: "Proyectos",
      technologies: "Tecnologías",
      experience: "Años Exp."
    },
  },
  en: {
    description: "Passionate developer creating innovative solutions and exceptional digital experiences.",
    quickLinks: {
      title: "Quick Links",
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      contact: "Contact"
    },
    social: {
      title: "Social Media",
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
      cv: "Download CV"
    },
    newsletter: {
      title: "Stay Connected",
      placeholder: "Your email",
      button: "Subscribe",
      description: "Get updates about new projects and technologies."
    },
    stats: {
      projects: "Projects",
      technologies: "Technologies",
      experience: "Years Exp."
    }
  }
};

export default function Footer() {
  const { language } = useTranslations();
  const { isDark } = useTheme();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const year = new Date().getFullYear();
  const data = footerData[language];

  // Detectar scroll para mostrar botón de volver arriba
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollTop(window.scrollY > 400);
    });
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/davidfvaquero",
      label: data.social.github,
      color: "hover:text-gray-900"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/david-fernández-vaquero-15b8b8346",
      label: data.social.linkedin,
      color: "hover:text-blue-600"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:davidfvaquero@gmail.com",
      label: data.social.email,
      color: "hover:text-red-600"
    },
    {
      icon: <Download className="w-5 h-5" />,
      href: "/cvDavidFernandezVaquero.pdf",
      label: data.social.cv,
      color: "hover:text-green-600"
    }
  ];

  const quickLinks = [
    { href: `/${language}`, label: data.quickLinks.home },
    { href: `/${language}/about`, label: data.quickLinks.about },
    { href: `/${language}/projects`, label: data.quickLinks.projects },
    { href: `/${language}/skills`, label: data.quickLinks.skills },
    { href: `/${language}/contact`, label: data.quickLinks.contact }
  ];

  return (
    <>
      {/* Botón de volver arriba */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            isDark 
              ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' 
              : 'bg-white text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      <footer className={`w-full ${isDark ? 'bg-gray-900 text-gray-300' : 'bg-gray-50 text-gray-700'}`}>
        {/* Contenido principal del footer */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Información personal */}
            <div className="lg:col-span-2">
              <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                David Fernández Vaquero
              </h3>
              <p className="text-sm leading-relaxed mb-6 max-w-md">
                {data.description}
              </p>
              
              {/* Estadísticas */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
                    8+
                  </div>
                  <div className="text-xs text-gray-500">
                    {data.stats.projects}
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>
                    15+
                  </div>
                  <div className="text-xs text-gray-500">
                    {data.stats.technologies}
                  </div>
                </div>
                <div className="text-center">
                  <div className={`text-2xl font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>
                    2+
                  </div>
                  <div className="text-xs text-gray-500">
                    {data.stats.experience}
                  </div>
                </div>
              </div>

              {/* Enlaces sociales */}
              <div>
                <h4 className={`font-semibold mb-3 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                  {data.social.title}
                </h4>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${
                        isDark 
                          ? 'bg-gray-800 hover:bg-gray-700' 
                          : 'bg-white hover:bg-gray-100'
                      } ${social.color}`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Enlaces rápidos */}
            <div>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                {data.quickLinks.title}
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={`text-sm transition-colors hover:text-blue-500 ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className={`font-semibold mb-4 ${isDark ? 'text-gray-200' : 'text-gray-800'}`}>
                {data.newsletter.title}
              </h4>
              <p className="text-sm mb-4 text-gray-500">
                {data.newsletter.description}
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={data.newsletter.placeholder}
                    className={`w-full px-3 py-2 text-sm rounded-lg border transition-colors ${
                      isDark 
                        ? 'bg-gray-800 border-gray-600 text-gray-300 placeholder-gray-400 focus:border-blue-500' 
                        : 'bg-white border-gray-300 text-gray-700 placeholder-gray-500 focus:border-blue-500'
                    }`}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={`w-full px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 hover:scale-105 ${
                    isDark 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {data.newsletter.button}
                </button>
              </form>

              {subscribed && (
                <div className="mt-3 p-2 bg-green-100 border border-green-300 rounded-lg">
                  <p className="text-green-800 text-xs">
                    ¡Gracias por suscribirte!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className={`border-t ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-sm">
                <span>© {year} David Fernández Vaquero</span>
                <span className="text-gray-400">•</span>
                                 <span className="text-gray-500">
                   {language === 'es' ? 'Desarrollado con Next.js y React' : 'Built with Next.js and React'}
                 </span>
              </div>

              {/* Enlaces adicionales */}
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="https://github.com/davidfvaquero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 transition-colors hover:text-blue-500 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="https://www.linkedin.com/in/david-fernández-vaquero-15b8b8346"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-1 transition-colors hover:text-blue-500 ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}
                >
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
} 