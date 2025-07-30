"use client";

import { SiJavascript, SiOpenjdk, SiDart, SiPython, SiDotnet, SiFlutter, SiAndroidstudio, SiMongodb, SiMysql, SiArduino, SiOllama, SiGithub, SiGit, SiOpenai, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiHive, SiLinux } from "react-icons/si";
import { useTranslations } from "../../hooks/useTranslations";

const skills = [
  {
    category: {
      es: "Lenguajes",
      en: "Languages"
    },
    items: [
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-700" /> },
      { name: "Java", icon: <SiOpenjdk className="w-6 h-6 text-orange-700" /> },
      { name: "Dart", icon: <SiDart className="w-6 h-6 text-[#0175c2]" /> },
      { name: "Python", icon: <SiPython className="w-6 h-6 text-blue-500" /> },
      { name: "C#", icon: <SiDotnet className="w-6 h-6 text-purple-700" /> },
    ],
  },
  {
    category: {
      es: "Frameworks / Librerías",
      en: "Frameworks / Libraries"
    },
    items: [
      { name: "React", icon: <SiReact className="w-6 h-6 text-sky-500" /> },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" /> },
      { name: "Flutter", icon: <SiFlutter className="w-6 h-6 text-[#02569B]" /> },
      { name: "JavaFX", icon: <SiOpenjdk className="w-6 h-6 text-orange-700" /> },
      { name: "Android Studio", icon: <SiAndroidstudio className="w-6 h-6 text-[#3ddc84]" /> },
    ],
  },
  {
    category: {
      es: "Bases de datos",
      en: "Databases"
    },
    items: [
      { name: "SQL", icon: <SiMysql className="w-6 h-6 text-[#336791]" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" /> },
      { name: "Hive", icon: <SiHive className="w-6 h-6 text-yellow-700" /> },
    ],
  },
  {
    category: {
      es: "IoT y Hardware",
      en: "IoT & Hardware"
    },
    items: [
      { name: "Arduino", icon: <SiArduino className="w-6 h-6 text-[#00979d]" /> },
    ],
  },
  {
    category: {
      es: "IA y agentes",
      en: "AI & Agents"
    },
    items: [
      { name: "Ollama", icon: <SiOllama className="w-6 h-6 text-sky-500" /> },
      { name: "Agentes IA", icon: <SiOpenai className="w-6 h-6 text-indigo-500" /> },
    ],
  },
  {
    category: {
      es: "Herramientas",
      en: "Tools"
    },
    items: [
      { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-600" /> },
      { name: "GitHub", icon: <SiGithub className="w-6 h-6 text-black" /> },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-black" /> },
      { name: "Linux", icon: <SiLinux className="w-6 h-6 text-black" /> },
    ],
  },
];

export default function Skills() {
  const { language } = useTranslations();

  return (
    <main className="max-w-2xl mx-auto px-4 pt-24 sm:pt-32">
      <h2 className="text-2xl sm:text-2xl font-bold mb-6 sm:mb-8">
        {language === 'es' ? 'Habilidades' : 'Skills'}
      </h2>
      <div className="flex flex-col gap-6 sm:gap-8">
        {skills.map((cat) => (
          <section key={cat.category[language]}>
            <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">{cat.category[language]}</h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              {cat.items.map((skill) => (
                <div key={skill.name} className="flex items-center gap-1 sm:gap-2 bg-gray-100 border rounded-full px-3 sm:px-4 py-1 sm:py-2 shadow-sm">
                  {skill.icon}
                  <span className="font-medium text-gray-800 text-xs sm:text-base">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
} 