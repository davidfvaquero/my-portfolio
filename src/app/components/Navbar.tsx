"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
      <div className="max-w-3xl mx-auto px-4 py-4 sm:py-6 flex justify-between items-center">
        <div className="sm:hidden">
          <button
            aria-label="Abrir menú"
            onClick={() => setOpen(!open)}
            className="p-2 focus:outline-none"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        <ul className="hidden sm:flex gap-8 sm:gap-12 text-lg font-semibold">
          <li><Link href="/" className="text-black hover:text-gray-700 transition-colors">Inicio</Link></li>
          <li><Link href="/about" className="text-black hover:text-gray-700 transition-colors">Sobre mí</Link></li>
          <li><Link href="/projects" className="text-black hover:text-gray-700 transition-colors">Proyectos</Link></li>
          <li><Link href="/skills" className="text-black hover:text-gray-700 transition-colors">Habilidades</Link></li>
          <li><Link href="/contact" className="text-black hover:text-gray-700 transition-colors">Contacto</Link></li>
        </ul>
        {/* Menú móvil */}
        {open && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 py-4 px-8 text-base font-semibold sm:hidden animate-fade-in">
            <li><Link href="/" className="block py-1" onClick={() => setOpen(false)}>Inicio</Link></li>
            <li><Link href="/about" className="block py-1" onClick={() => setOpen(false)}>Sobre mí</Link></li>
            <li><Link href="/projects" className="block py-1" onClick={() => setOpen(false)}>Proyectos</Link></li>
            <li><Link href="/skills" className="block py-1" onClick={() => setOpen(false)}>Habilidades</Link></li>
            <li><Link href="/contact" className="block py-1" onClick={() => setOpen(false)}>Contacto</Link></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 