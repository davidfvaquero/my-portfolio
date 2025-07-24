import { notFound } from "next/navigation";

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
];

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="max-w-2xl mx-auto px-4 pt-32">
      <div className="flex items-center gap-6 mb-6">
        <img
          src={project.image}
          alt={project.name}
          className="w-20 h-20 object-cover rounded shadow-sm border"
        />
        <div>
          <h2 className="text-3xl font-bold mb-2">{project.name}</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mb-4 text-gray-600">{project.description}</p>
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:underline font-medium"
      >
        Ver repositorio en GitHub
      </a>
    </main>
  );
} 