"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";
import { Language } from "../translations";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { language, setLanguage, isLoading } = useLanguage();
  const { t } = useTranslations();

  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value as Language;
    setLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <div className="sm:hidden">
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="p-2 focus:outline-none"
          >
            <svg className="w-7 h-7 transition-transform duration-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <select
            value={language}
            onChange={handleLanguageChange}
            disabled={isLoading}
            className="border rounded px-2 py-1 text-sm bg-white shadow focus:outline-none disabled:opacity-50"
            aria-label={t('common.selectLanguage')}
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>

        <ul className="hidden sm:flex gap-8 sm:gap-12 text-lg font-semibold">
          <li><Link href={`/${language}`} className="text-black hover:text-gray-700 transition-colors duration-200">{t('nav.home')}</Link></li>
          <li><Link href={`/${language}/about`} className="text-black hover:text-gray-700 transition-colors duration-200">{t('nav.about')}</Link></li>
          <li><Link href={`/${language}/projects`} className="text-black hover:text-gray-700 transition-colors duration-200">{t('nav.projects')}</Link></li>
          <li><Link href={`/${language}/skills`} className="text-black hover:text-gray-700 transition-colors duration-200">{t('nav.skills')}</Link></li>
          <li><Link href={`/${language}/contact`} className="text-black hover:text-gray-700 transition-colors duration-200">{t('nav.contact')}</Link></li>
        </ul>

        {/* Menú móvil */}
        <ul
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 py-4 px-8 text-base font-semibold sm:hidden transition-all duration-300 ease-in-out z-50
            ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-8 opacity-0 pointer-events-none'}`}
          role="menu"
        >
          <li><Link href={`/${language}`} className="block py-1" role="menuitem" onClick={() => setOpen(false)}>{t('nav.home')}</Link></li>
          <li><Link href={`/${language}/about`} className="block py-1" role="menuitem" onClick={() => setOpen(false)}>{t('nav.about')}</Link></li>
          <li><Link href={`/${language}/projects`} className="block py-1" role="menuitem" onClick={() => setOpen(false)}>{t('nav.projects')}</Link></li>
          <li><Link href={`/${language}/skills`} className="block py-1" role="menuitem" onClick={() => setOpen(false)}>{t('nav.skills')}</Link></li>
          <li><Link href={`/${language}/contact`} className="block py-1" role="menuitem" onClick={() => setOpen(false)}>{t('nav.contact')}</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
