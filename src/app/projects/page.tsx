import Image from "next/image";

const projects = [
  {
    slug: "mood-tracker",
    name: "Mood Tracker",
    description: "Aplicación usando Flutter para registrar y analizar tu estado de ánimo a lo largo del tiempo.",
    github: "https://github.com/davidfvaquero/mood_tracker",
    image: "/mood-tracker.png",
    technologies: ["Flutter", "Dart"],
  },
  {
    slug: "escape-from-comercio",
    name: "Escape From Comercio",
    description: "Aventura gráfica desarrollada en JavaFX.",
    github: "https://github.com/davidfvaquero/escapeFromComercio",
    image: "/escape-from-comercio.png",
    technologies: ["Java", "JavaFX"],
  },
  {
    slug: "calculadora",
    name: "Calculadora",
    description: "Calculadora simple creada en Android Studio (Java).",
    github: "https://github.com/davidfvaquero/calculadora",
    image: "/calculadora.png",
    technologies: ["Java", "Android Studio"],
  },
  {
    slug: "my-portfolio",
    name: "My Portfolio",
    description: "Portfolio web personal desarrollado con Next.js y Tailwind CSS.",
    github: "https://github.com/davidfvaquero/my-portfolio",
    image: "/my-portfolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    slug: "topdown2d",
    name: "TopDown2D",
    description: "Videojuego 2D tipo top-down desarrollado con Unity y C#.",
    github: "https://github.com/davidfvaquero/TopDown2D",
    image: "/topdown2d.png",
    technologies: ["Unity", "C#"],
  },
];

const Projects = () => (
  <main className="max-w-2xl mx-auto px-4 pt-32">
    <h2 className="text-2xl font-bold mb-8">Proyectos</h2>
    <ul className="flex flex-col gap-6">
      {projects.map((project) => (
        <li key={project.slug} className="border rounded p-4 hover:shadow transition flex gap-4 items-center">
          <Image
            src={project.image}
            alt={project.name}
            width={64}
            height={64}
            className="w-16 h-16 object-cover rounded shadow-sm border"
          />
          <div className="flex-1">
            <h3 className="text-xl font-semibold mb-1">{project.name}</h3>
            <p className="mb-2 text-gray-600">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-2">
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
              Ver en GitHub
            </a>
          </div>
        </li>
      ))}
    </ul>
  </main>
);

export default Projects; 