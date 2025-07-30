import Image from "next/image";

export default async function ProjectDetail(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
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

  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return null;

  return (
    <main className="max-w-2xl mx-auto px-4 pt-24 sm:pt-32">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 mb-4 sm:mb-6">
        <Image
          src={project.image}
          alt={project.name}
          width={80}
          height={80}
          className="w-24 h-24 sm:w-20 sm:h-20 object-cover rounded shadow-sm border mx-auto sm:mx-0"
        />
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{project.name}</h2>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <p className="mb-2 sm:mb-4 text-gray-600 text-sm sm:text-base">{project.description}</p>
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