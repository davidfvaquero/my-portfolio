"use client";

import Link from "next/link";

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur z-50 shadow-sm">
    <div className="max-w-3xl mx-auto px-4 py-6 flex justify-center items-center">
      <ul className="flex gap-12 text-lg font-semibold">
        <li><Link href="/" className="text-black hover:text-gray-700 transition-colors">Inicio</Link></li>
        <li><Link href="/about" className="text-black hover:text-gray-700 transition-colors">Sobre mí</Link></li>
        <li><Link href="/projects" className="text-black hover:text-gray-700 transition-colors">Proyectos</Link></li>
        <li><Link href="/skills" className="text-black hover:text-gray-700 transition-colors">Habilidades</Link></li>
        <li><Link href="/contact" className="text-black hover:text-gray-700 transition-colors">Contacto</Link></li>
      </ul>
    </div>
  </nav>
);

export default Navbar; 