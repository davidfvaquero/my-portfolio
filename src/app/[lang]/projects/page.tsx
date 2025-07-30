"use client";

import Image from "next/image";
import { useTranslations } from "../../hooks/useTranslations";

const projects = [
  {
    slug: "mood-tracker",
    name: {
      es: "Mood Tracker",
      en: "Mood Tracker"
    },
    description: {
      es: "App usando Flutter para registrar y analizar tu estado de ánimo a lo largo del tiempo.",
      en: "App using Flutter to record and analyze your mood over time."
    },
    github: "https://github.com/davidfvaquero/mood_tracker",
    image: "/mood-tracker.png",
    technologies: ["Flutter", "Dart"],
  },
  {
    slug: "escape-from-comercio",
    name: {
      es: "Escape From Comercio",
      en: "Escape From Comercio"
    },
    description: {
      es: "Aventura gráfica desarrollada en JavaFX.",
      en: "Graphic adventure developed in JavaFX."
    },
    github: "https://github.com/davidfvaquero/escapeFromComercio",
    image: "/escape-from-comercio.png",
    technologies: ["Java", "JavaFX"],
  },
  {
    slug: "calculadora",
    name: {
      es: "Calculadora",
      en: "Calculator"
    },
    description: {
      es: "Calculadora simple creada en Android Studio (Java).",
      en: "Simple calculator created in Android Studio (Java)."
    },
    github: "https://github.com/davidfvaquero/calculadora",
    image: "/calculadora.png",
    technologies: ["Java", "Android Studio"],
  },
  {
    slug: "my-portfolio",
    name: {
      es: "Mi Portafolio",
      en: "My Portfolio"
    },
    description: {
      es: "Portafolio web personal desarrollado con Next.js y Tailwind CSS.",
      en: "Personal web portfolio developed with Next.js and Tailwind CSS."
    },
    github: "https://github.com/davidfvaquero/my-portfolio",
    image: "/my-portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "topdown2d",
    name: {
      es: "TopDown2D",
      en: "TopDown2D"
    },
    description: {
      es: "Videojuego 2D top-down desarrollado con Unity y C#.",
      en: "2D top-down video game developed with Unity and C#."
    },
    github: "https://github.com/davidfvaquero/TopDown2D",
    image: "/topdown2d.png",
    technologies: ["Unity", "C#"],
  },
];

export default function Projects() {
  const { language } = useTranslations();

  return (
    <main className="max-w-2xl mx-auto px-4 pt-32">
      <h2 className="text-2xl font-bold mb-8">
        {language === 'es' ? 'Proyectos' : 'Projects'}
      </h2>
      <ul className="flex flex-col gap-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="border rounded p-4 hover:shadow transition flex flex-col md:flex-row gap-4 items-center md:items-start"
          >
            <Image
              src={project.image}
              alt={project.name[language]}
              width={64}
              height={64}
              className="w-24 h-24 md:w-16 md:h-16 object-cover rounded shadow-sm border mx-auto md:mx-0"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg md:text-xl font-semibold mb-1">{project.name[language]}</h3>
              <p className="mb-2 text-gray-600 text-sm md:text-base">{project.description[language]}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {language === 'es' ? 'Ver en GitHub' : 'View on GitHub'}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
} 