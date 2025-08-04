"use client";

import Image from "next/image";
import { useTranslations } from "../../hooks/useTranslations";
import { useTheme } from "../../contexts/ThemeContext";
import { ExternalLink, Github, Calendar, Eye } from "lucide-react";

const projects = [
  {
    slug: "mood-tracker",
    name: {
      es: "Mood Tracker",
      en: "Mood Tracker"
    },
    description: {
      es: "App usando Flutter para registrar y analizar tu estado de ánimo a lo largo del tiempo. Incluye gráficos interactivos y estadísticas detalladas.",
      en: "App using Flutter to record and analyze your mood over time. Includes interactive charts and detailed statistics."
    },
    github: "https://github.com/davidfvaquero/mood_tracker",
    demo: null,
    image: "/mood-tracker.png",
    technologies: ["Flutter", "Dart", "Hive"],
    date: "2024",
    status: {
      es: "En desarrollo",
      en: "In development"
    },
    featured: true
  },
  {
    slug: "escape-from-comercio",
    name: {
      es: "Escape From Comercio",
      en: "Escape From Comercio"
    },
    description: {
      es: "Aventura gráfica desarrollada en JavaFX con puzzles desafiantes y una narrativa envolvente.",
      en: "Graphic adventure developed in JavaFX with challenging puzzles and immersive narrative."
    },
    github: "https://github.com/davidfvaquero/escapeFromComercio",
    demo: null,
    image: "/escape-from-comercio.png",
    technologies: ["Java", "JavaFX", "CSS"],
    date: "2023",
    status: {
      es: "Completado",
      en: "Completed"
    },
    featured: false
  },
  {
    slug: "my-portfolio",
    name: {
      es: "Mi Portafolio",
      en: "My Portfolio"
    },
    description: {
      es: "Portafolio web personal desarrollado con Next.js y Tailwind CSS. Diseño responsive y multilingüe.",
      en: "Personal web portfolio developed with Next.js and Tailwind CSS. Responsive design and multilingual."
    },
    github: "https://github.com/davidfvaquero/my-portfolio",
    demo: "https://davidfvaquero.vercel.app",
    image: "/my-portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    date: "2024",
    status: {
      es: "En desarrollo",
      en: "In development"
    },
    featured: true
  },
  {
    slug: "calculadora",
    name: {
      es: "Calculadora",
      en: "Calculator"
    },
    description: {
      es: "Calculadora simple creada en Android Studio con interfaz intuitiva y funcionalidades básicas.",
      en: "Simple calculator created in Android Studio with intuitive interface and basic functionalities."
    },
    github: "https://github.com/davidfvaquero/calculadora",
    demo: null,
    image: "/calculadora.png",
    technologies: ["Java", "Android Studio", "XML"],
    date: "2023",
    status: {
      es: "Completado",
      en: "Completed"
    },
    featured: false
  },
  {
    slug: "topdown2d",
    name: {
      es: "TopDown2D",
      en: "TopDown2D"
    },
    description: {
      es: "Videojuego 2D top-down desarrollado con Unity y C#. Incluye sistema de combate y exploración.",
      en: "2D top-down video game developed with Unity and C#. Includes combat system and exploration."
    },
    github: "https://github.com/davidfvaquero/TopDown2D",
    demo: null,
    image: "/topdown2d.png",
    technologies: ["Unity", "C#", "2D Graphics"],
    date: "2023",
    status: {
      es: "Completado",
      en: "Completed"
    },
    featured: false
  },
];

export default function Projects() {
  const { language } = useTranslations();
  const { isDark } = useTheme();

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {language === 'es' ? 'Mis Proyectos' : 'My Projects'}
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {language === 'es' 
            ? 'Una colección de proyectos que muestran mi pasión por el desarrollo y la innovación tecnológica.'
            : 'A collection of projects that showcase my passion for development and technological innovation.'
          }
        </p>
      </div>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center">
            {language === 'es' ? 'Proyectos Destacados' : 'Featured Projects'}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} language={language} featured />
            ))}
          </div>
        </section>
      )}

      {/* Other Projects */}
      {otherProjects.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold mb-8 text-center">
            {language === 'es' ? 'Otros Proyectos' : 'Other Projects'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} language={language} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

interface ProjectCardProps {
  project: any;
  language: string;
  featured?: boolean;
}

function ProjectCard({ project, language, featured = false }: ProjectCardProps) {
  const { isDark } = useTheme();
  
  return (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        group relative overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer
        ${isDark 
          ? 'border-gray-700 bg-gray-800 hover:shadow-gray-900/50' 
          : 'border-gray-200 bg-white shadow-sm'
        }
        ${featured ? 'lg:col-span-1' : ''}
      `}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.name[language]}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`
            px-3 py-1 rounded-full text-xs font-medium
            ${project.status[language] === 'Completado' || project.status[language] === 'Completed'
              ? 'bg-green-100 text-green-800'
              : 'bg-yellow-100 text-yellow-800'
            }
          `}>
            {project.status[language]}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
                 <div className="flex items-center justify-between mb-3">
           <h3 className={`text-xl font-bold group-hover:text-blue-600 transition-colors ${
             isDark ? 'text-gray-100' : 'text-gray-900'
           }`}>
             {project.name[language]}
           </h3>
           <div className={`flex items-center gap-2 text-sm ${
             isDark ? 'text-gray-400' : 'text-gray-500'
           }`}>
             <Calendar className="w-4 h-4" />
             {project.date}
           </div>
         </div>
         
         {/* Click indicator */}
         <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <div className={`px-2 py-1 rounded-full text-xs font-medium ${
             isDark 
               ? 'bg-blue-600/20 text-blue-300 border border-blue-500/30' 
               : 'bg-blue-100 text-blue-700 border border-blue-200'
           }`}>
             {language === 'es' ? 'Ver proyecto' : 'View project'}
           </div>
         </div>

        <p className={`mb-4 leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description[language]}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech: string) => (
            <span 
              key={tech} 
              className={`text-xs px-3 py-1 rounded-full font-medium transition-colors ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

                 {/* Links */}
         <div className="flex items-center gap-3">
           <div className={`flex items-center gap-2 font-medium ${
             isDark ? 'text-gray-300' : 'text-gray-700'
           }`}>
             <Github className="w-4 h-4" />
             <span className="text-sm">GitHub</span>
           </div>
           
           {project.demo && (
             <div className={`flex items-center gap-2 font-medium ${
               isDark ? 'text-gray-300' : 'text-gray-700'
             }`}>
               <Eye className="w-4 h-4" />
               <span className="text-sm">
                 {language === 'es' ? 'Demo' : 'Demo'}
               </span>
             </div>
           )}
         </div>
      </div>

             {/* Hover Effect Overlay */}
       <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 to-purple-600/0 opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
     </a>
   );
 }  