import { SiJavascript, SiOpenjdk, SiDart, SiPython, SiDotnet, SiFlutter, SiAndroidstudio, SiMongodb, SiMysql, SiArduino, SiOllama, SiGithub, SiGit, SiOpenai } from "react-icons/si";

const skills = [
  {
    category: "Lenguajes",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="w-6 h-6 text-yellow-400" />,
      },
      {
        name: "Java",
        icon: <SiOpenjdk className="w-6 h-6 text-orange-700" />,
      },
      {
        name: "Dart",
        icon: <SiDart className="w-6 h-6 text-[#0175c2]" />,
      },
      {
        name: "Python",
        icon: <SiPython className="w-6 h-6 text-blue-500" />,
      },
      {
        name: "C#",
        icon: <SiDotnet className="w-6 h-6 text-purple-700" />,
      },
    ],
  },
  {
    category: "Frameworks / Librerías",
    items: [
      {
        name: "Flutter",
        icon: <SiFlutter className="w-6 h-6 text-[#02569B]" />,
      },
      {
        name: "JavaFX",
        icon: <SiOpenjdk className="w-6 h-6 text-orange-700" />,
      },
      {
        name: "Android Studio",
        icon: <SiAndroidstudio className="w-6 h-6 text-[#3ddc84]" />,
      },
    ],
  },
  {
    category: "Bases de datos",
    items: [
      {
        name: "SQL",
        icon: <SiMysql className="w-6 h-6 text-[#336791]" />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb className="w-6 h-6 text-green-600" />,
      },
    ],
  },
  {
    category: "IoT y Hardware",
    items: [
      {
        name: "Arduino",
        icon: <SiArduino className="w-6 h-6 text-[#00979d]" />,
      },
    ],
  },
  {
    category: "IA y agentes",
    items: [
      {
        name: "Ollama",
        icon: <SiOllama className="w-6 h-6 text-sky-500" />,
      },
      {
        name: "Agentes IA",
        icon: <SiOpenai className="w-6 h-6 text-indigo-500" />,
      },
    ],
  },
  {
    category: "Herramientas",
    items: [
      {
        name: "Git",
        icon: <SiGit className="w-6 h-6 text-orange-600" />,
      },
      {
        name: "GitHub",
        icon: <SiGithub className="w-6 h-6 text-black" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-32">
      <h2 className="text-2xl font-bold mb-8">Habilidades</h2>
      <div className="flex flex-col gap-8">
        {skills.map((cat) => (
          <section key={cat.category}>
            <h3 className="text-lg font-semibold mb-4">{cat.category}</h3>
            <div className="flex flex-wrap gap-4">
              {cat.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-2 bg-gray-100 border rounded-full px-4 py-2 shadow-sm">
                  {skill.icon}
                  <span className="font-medium text-gray-800">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
} 