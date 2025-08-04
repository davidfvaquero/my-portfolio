"use client";

import { SiOpenjdk, SiPython, SiReact, SiMysql, SiLinux, SiGithub, SiLinkedin } from "react-icons/si";
import { useTranslations } from "../hooks/useTranslations";
import { useTheme } from "../contexts/ThemeContext";

export default function HomePage() {
  const { t } = useTranslations();
  const { isDark } = useTheme();

  const technologies = [
    { icon: <SiOpenjdk className="w-8 h-8 sm:w-10 sm:h-10 text-orange-700" />, name: "Java" },
    { icon: <SiPython className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />, name: "Python" },
    { icon: <SiReact className="w-8 h-8 sm:w-10 sm:h-10 text-sky-500" />, name: "React" },
    { icon: <SiMysql className="w-8 h-8 sm:w-10 sm:h-10 text-[#336791]" />, name: "SQL" },
    { icon: <SiLinux className="w-8 h-8 sm:w-10 sm:h-10 text-black" />, name: "Linux" },
  ];

  const socialLinks = [
    { 
      icon: <SiGithub className="w-6 h-6" />, 
      href: "https://github.com/davidfvaquero", 
      label: "GitHub",
      color: "hover:text-gray-900"
    },
    { 
      icon: <SiLinkedin className="w-6 h-6" />, 
      href: "https://www.linkedin.com/in/davidfvaquero/", 
      label: "LinkedIn",
      color: "hover:text-blue-600"
    },
  ];

  return (
    <main className="max-w-2xl mx-auto px-4 pt-24 sm:pt-32 flex flex-col items-center text-center gap-6 sm:gap-8 pb-12 sm:pb-16">
      <h1 className={`text-2xl sm:text-4xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
        {t('home.title')}
      </h1>
      <p className={`text-base sm:text-xl font-medium ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
        {t('home.subtitle')}
      </p>
      
      {/* Badges de estado */}
      <div className="flex flex-wrap gap-2 justify-center mb-6">
        <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {t('home.availableForWork')}
        </div>
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium shadow-sm">
          {t('home.location')}
        </div>
      </div>
      
                            {/* Botón CTA con hover mejorado */}
                  <a
            href="/cvDavidFernandezVaquero.pdf"
            download
            className="group relative inline-flex items-center gap-3 bg-blue-600 text-white font-bold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 overflow-hidden hover:bg-blue-700"
          >
           <span className="relative z-10 text-white font-bold">{t('home.downloadCV')}</span>
                    <svg className="w-5 h-5 relative z-10 transform group-hover:translate-x-1 transition-transform duration-300 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>

      {/* Tecnologías con hover effects */}
      <div className="flex gap-4 sm:gap-6 justify-center items-center mt-2 sm:mt-4 mb-8 sm:mb-12">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={`group relative p-3 rounded-xl backdrop-blur-sm shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 ${
              isDark ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
          >
            <div className="relative z-10">{tech.icon}</div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap ${
              isDark ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {tech.name}
            </span>
          </div>
        ))}
      </div>

      {/* Enlaces sociales con hover effects */}
      <div className="flex gap-4 justify-center">
        {socialLinks.map((social) => (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-3 rounded-full backdrop-blur-sm shadow-sm hover:shadow-md transform hover:-translate-y-1 transition-all duration-300 ${social.color} ${
              isDark ? 'bg-gray-800/80' : 'bg-white/80'
            }`}
          >
            <div className="relative z-10">{social.icon}</div>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        ))}
      </div>
    </main>
  );
} 