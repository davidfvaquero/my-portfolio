"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Language } from '../translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('es');
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  // Cargar idioma desde localStorage al inicializar
  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    const pathLang = pathname.split("/")[1] as Language;
    const validLanguages: Language[] = ['es', 'en'];
    
    if (savedLanguage && validLanguages.includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else if (validLanguages.includes(pathLang)) {
      setLanguageState(pathLang);
      localStorage.setItem('preferred-language', pathLang);
      document.cookie = `preferred-language=${pathLang}; path=/; max-age=31536000`;
    }
    
    setIsLoading(false);
  }, [pathname]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    document.cookie = `preferred-language=${newLanguage}; path=/; max-age=31536000`;
    
    // Redirigir a la ruta correcta del idioma
    const segments = pathname.split("/").filter(Boolean);
    const validLanguages: Language[] = ['es', 'en'];
    const newSegments = validLanguages.includes(segments[0] as Language) 
      ? [newLanguage, ...segments.slice(1)]
      : [newLanguage, ...segments];
    
    router.push("/" + newSegments.join("/"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}; 