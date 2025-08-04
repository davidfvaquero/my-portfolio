"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";
import { Language } from "../translations";
import { usePathname } from "next/navigation";
import { useTheme } from "../contexts/ThemeContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, isLoading } = useLanguage();
  const { t } = useTranslations();
  const pathname = usePathname();
  const { toggleTheme, isDark } = useTheme();

  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
  ];

  // Detectar scroll para cambiar el estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setLanguage(newLang);
  };

  // Función para determinar si un enlace está activo
  const isActiveLink = (href: string) => {
    const currentPath = pathname.split('/').slice(2).join('/'); // Remover el idioma
    const linkPath = href.split('/').slice(2).join('/'); // Remover el idioma
    
    // Si estamos en la página de inicio (sin path adicional)
    if (currentPath === '') {
      return href === `/${language}` || href === `/${language}/`;
    }
    
    // Para otras páginas, comparar el path exacto
    return currentPath === linkPath;
  };

  const navItems = [
    { href: `/${language}`, label: t('nav.home') },
    { href: `/${language}/about`, label: t('nav.about') },
    { href: `/${language}/projects`, label: t('nav.projects') },
    { href: `/${language}/skills`, label: t('nav.skills') },
    { href: `/${language}/contact`, label: t('nav.contact') },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? isDark 
          ? 'bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700/50'
          : 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : isDark
          ? 'bg-gray-900/90 backdrop-blur-sm shadow-sm'
          : 'bg-white/90 backdrop-blur-sm shadow-sm'
    }`}>
      <div className="max-w-6xl mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Nombre */}
          <div className="flex items-center">
            <Link href={`/${language}`} className={`text-xl font-bold transition-colors ${
              isDark ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'
            }`}>
              David Fernández
            </Link>
          </div>

          {/* Menú desktop centrado */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`relative px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      isActive 
                        ? isDark
                          ? 'text-blue-400 bg-blue-900/20 border border-blue-700'
                          : 'text-blue-600 bg-blue-50 border border-blue-200' 
                        : isDark
                          ? 'text-gray-300 hover:text-white hover:bg-gray-800'
                          : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                                         {isActive && (
                       <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${
                         isDark ? 'bg-blue-400' : 'bg-blue-600'
                       }`}></div>
                     )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Selector de idioma y menú móvil */}
          <div className="flex items-center gap-3">
            {/* Botón de toggle del tema */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isDark 
                  ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            {/* Selector de idioma mejorado */}
            <div className="relative">
              <select
                value={language}
                onChange={handleLanguageChange}
                disabled={isLoading}
                className={`appearance-none border rounded-lg px-3 py-2 pr-8 text-sm font-medium focus:outline-none focus:ring-2 disabled:opacity-50 cursor-pointer transition-colors ${
                  isDark
                    ? 'bg-gray-800 border-gray-600 text-gray-300 focus:ring-blue-400 focus:border-blue-400 hover:border-gray-500'
                    : 'bg-white border-gray-300 text-gray-700 focus:ring-blue-500 focus:border-blue-500 hover:border-gray-400'
                }`}
                aria-label={t('common.selectLanguage')}
              >
                {languages.map(lang => (
                  <option key={lang.code} value={lang.code}>{lang.label}</option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Botón móvil */}
            <button
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-200 ${open ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Menú móvil mejorado */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <ul className="py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = isActiveLink(item.href);
              return (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50 border border-blue-200' 
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
