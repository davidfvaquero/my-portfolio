"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Detectar idioma actual por la ruta
  const currentLang = pathname.split("/")[1] === "en" ? "en" : "es";
  const languages = [
    { code: "es", label: "Español" },
    { code: "en", label: "English" },
  ];

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    // Cambiar solo el primer segmento de la ruta
    const segments = pathname.split("/").filter(Boolean);
    if (languages.some(l => l.code === segments[0])) {
      segments[0] = newLang;
    } else {
      segments.unshift(newLang);
    }
    router.push("/" + segments.join("/"));
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
            value={currentLang}
            onChange={handleLanguageChange}
            className="border rounded px-2 py-1 text-sm bg-white shadow focus:outline-none"
            aria-label="Seleccionar idioma"
          >
            {languages.map(lang => (
              <option key={lang.code} value={lang.code}>{lang.label}</option>
            ))}
          </select>
        </div>
        <ul className="hidden sm:flex gap-8 sm:gap-12 text-lg font-semibold">
          <li><Link href="/" className="text-black hover:text-gray-700 transition-colors duration-200">Inicio</Link></li>
          <li><Link href="/about" className="text-black hover:text-gray-700 transition-colors duration-200">Sobre mí</Link></li>
          <li><Link href="/projects" className="text-black hover:text-gray-700 transition-colors duration-200">Proyectos</Link></li>
          <li><Link href="/skills" className="text-black hover:text-gray-700 transition-colors duration-200">Habilidades</Link></li>
          <li><Link href="/contact" className="text-black hover:text-gray-700 transition-colors duration-200">Contacto</Link></li>
        </ul>
        {/* Menú móvil con animación de desplazamiento vertical */}
        <ul
          className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 py-4 px-8 text-base font-semibold sm:hidden transition-all duration-300 ease-in-out z-50
            ${open ? 'translate-y-0 opacity-100 pointer-events-auto' : '-translate-y-8 opacity-0 pointer-events-none'}`}
          role="menu"
        >
          <li><Link href="/" className="block py-1" role="menuitem" onClick={() => setOpen(false)}>Inicio</Link></li>
          <li><Link href="/about" className="block py-1" role="menuitem" onClick={() => setOpen(false)}>Sobre mí</Link></li>
          <li><Link href="/projects" className="block py-1" role="menuitem" onClick={() => setOpen(false)}>Proyectos</Link></li>
          <li><Link href="/skills" className="block py-1" role="menuitem" onClick={() => setOpen(false)}>Habilidades</Link></li>
          <li><Link href="/contact" className="block py-1" role="menuitem" onClick={() => setOpen(false)}>Contacto</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 