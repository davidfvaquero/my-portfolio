import Image from "next/image";

export default function About() {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-32 flex flex-col items-center text-center gap-6">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <Image
        src="/perfil.jpg"
        alt="Foto de David"
        width={128}
        height={128}
        className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 shadow-md mx-auto"
        priority
      />
      <p className="text-lg text-gray-700">
        ¡Hola! Soy David, desarrollador de software con pasión por la tecnología, la inteligencia artificial y la creación de soluciones innovadoras. Tengo experiencia en desarrollo web, aplicaciones móviles, proyectos de IA y agentes inteligentes, así como en el uso de Arduino y el desarrollo de soluciones IoT. Me encanta aprender nuevas tecnologías y trabajar en equipo para afrontar retos complejos.
      </p>
      <p className="text-md text-gray-600">
        Puedes ver algunos de mis proyectos destacados en este portafolio y contactarme para colaborar o compartir ideas.
      </p>
      <div className="flex gap-6 justify-center mt-2">
        <a
          href="https://github.com/davidfvaquero"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-black font-medium transition-colors"
        >
          {/* Icono GitHub */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/davidfvaquero/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
        >
          {/* Icono LinkedIn */}
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
          LinkedIn
        </a>
      </div>
    </main>
  );
} 