"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';

type Language = 'es' | 'en';

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
    if (savedLanguage && ['es', 'en'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    } else {
      // Detectar idioma por la ruta si no hay preferencia guardada
      const pathLang = pathname.split("/")[1];
      if (['en', 'es'].includes(pathLang)) {
        setLanguageState(pathLang as Language);
        localStorage.setItem('preferred-language', pathLang);
        // Guardar también en cookies
        document.cookie = `preferred-language=${pathLang}; path=/; max-age=31536000`;
      }
    }
    setIsLoading(false);
  }, [pathname]);

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
    
    // Guardar también en cookies para el middleware
    document.cookie = `preferred-language=${newLanguage}; path=/; max-age=31536000`; // 1 año
    
    // Redirigir a la ruta correcta del idioma
    const segments = pathname.split("/").filter(Boolean);
    if (['en', 'es'].includes(segments[0])) {
      segments[0] = newLanguage;
    } else {
      segments.unshift(newLanguage);
    }
    router.push("/" + segments.join("/"));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}; 