"use client";

import { SiJavascript, SiOpenjdk, SiDart, SiPython, SiDotnet, SiFlutter, SiAndroidstudio, SiMongodb, SiMysql, SiArduino, SiOllama, SiGithub, SiGit, SiOpenai, SiNextdotjs, SiReact, SiTailwindcss, SiTypescript, SiVercel, SiHive, SiLinux } from "react-icons/si";
import { useTranslations } from "../../hooks/useTranslations";
import { useTheme } from "../../contexts/ThemeContext";
import { Star, TrendingUp, Zap, Code, Database, Cpu, Settings } from "lucide-react";

const skills = [
  {
    category: {
      es: "Lenguajes de Programación",
      en: "Programming Languages"
    },
    icon: <Code className="w-5 h-5" />,
    items: [
      { name: "Java", icon: <SiOpenjdk className="w-6 h-6 text-orange-700" />, level: 4, experience: "2+ años" },
      { name: "Python", icon: <SiPython className="w-6 h-6 text-blue-500" />, level: 4, experience: "1 año" },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6 text-yellow-400" />, level: 3, experience: "1 año" },
      { name: "TypeScript", icon: <SiTypescript className="w-6 h-6 text-blue-700" />, level: 3, experience: "1 año" },
      { name: "Dart", icon: <SiDart className="w-6 h-6 text-[#0175c2]" />, level: 3, experience: "1 año" },
      { name: "C#", icon: <SiDotnet className="w-6 h-6 text-purple-700" />, level: 3, experience: "1 año" },
    ],
  },
  {
    category: {
      es: "Frameworks y Librerías",
      en: "Frameworks & Libraries"
    },
    icon: <Zap className="w-5 h-5" />,
    items: [
      { name: "Flutter", icon: <SiFlutter className="w-6 h-6 text-[#02569B]" />, level: 3, experience: "1 año" },
      { name: "Android Studio", icon: <SiAndroidstudio className="w-6 h-6 text-[#3ddc84]" />, level: 3, experience: "1 año" },
      { name: "React", icon: <SiReact className="w-6 h-6 text-sky-500" />, level: 2, experience: "1 año" },
      { name: "Next.js", icon: <SiNextdotjs className="w-6 h-6 text-black" />, level: 2, experience: "1 año" },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-6 h-6 text-cyan-500" />, level: 2, experience: "1 año" },
      { name: "JavaFX", icon: <SiOpenjdk className="w-6 h-6 text-orange-700" />, level: 2, experience: "1 año" },
    ],
  },
  {
    category: {
      es: "Bases de Datos",
      en: "Databases"
    },
    icon: <Database className="w-5 h-5" />,
    items: [
      { name: "SQL", icon: <SiMysql className="w-6 h-6 text-[#336791]" />, level: 3, experience: "1 año" },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6 text-green-600" />, level: 3, experience: "1 año" },
      { name: "Hive", icon: <SiHive className="w-6 h-6 text-yellow-700" />, level: 2, experience: "1 año" },
    ],
  },
  {
    category: {
      es: "IoT y Hardware",
      en: "IoT & Hardware"
    },
    icon: <Cpu className="w-5 h-5" />,
    items: [
      { name: "Arduino", icon: <SiArduino className="w-6 h-6 text-[#00979d]" />, level: 2, experience: "1 año" },
    ],
  },
  {
    category: {
      es: "Inteligencia Artificial",
      en: "Artificial Intelligence"
    },
    icon: <TrendingUp className="w-5 h-5" />,
    items: [
      { name: "Ollama", icon: <SiOllama className="w-6 h-6 text-sky-500" />, level: 2, experience: "6 meses" },
      { name: "Agentes IA", icon: <SiOpenai className="w-6 h-6 text-indigo-500" />, level: 2, experience: "6 meses" },
    ],
  },
  {
    category: {
      es: "Herramientas y DevOps",
      en: "Tools & DevOps"
    },
    icon: <Settings className="w-5 h-5" />,
    items: [
      { name: "Git", icon: <SiGit className="w-6 h-6 text-orange-600" />, level: 4, experience: "2+ años" },
      { name: "GitHub", icon: <SiGithub className="w-6 h-6 text-black" />, level: 4, experience: "2+ años" },
      { name: "Linux", icon: <SiLinux className="w-6 h-6 text-black" />, level: 3, experience: "2+ años" },
      { name: "Vercel", icon: <SiVercel className="w-6 h-6 text-black" />, level: 2, experience: "1 año" },
    ],
  },
];

export default function Skills() {
  const { language } = useTranslations();
  const { isDark } = useTheme();

  const getLevelText = (level: number) => {
    switch (level) {
      case 4: return language === 'es' ? 'Avanzado' : 'Advanced';
      case 3: return language === 'es' ? 'Intermedio' : 'Intermediate';
      case 2: return language === 'es' ? 'Básico' : 'Basic';
      default: return language === 'es' ? 'Principiante' : 'Beginner';
    }
  };

  const getLevelColor = (level: number) => {
    switch (level) {
      case 4: return 'text-green-500';
      case 3: return 'text-blue-500';
      case 2: return 'text-yellow-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {language === 'es' ? 'Mis Habilidades' : 'My Skills'}
        </h1>
        <p className={`text-lg max-w-2xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {language === 'es' 
            ? 'Un conjunto diverso de tecnologías y herramientas que he aprendido y utilizado en mis proyectos.'
            : 'A diverse set of technologies and tools that I have learned and used in my projects.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {skills.map((category) => (
          <div
            key={category.category[language]}
            className={`
              p-6 rounded-xl border transition-all duration-300 hover:shadow-lg hover:scale-[1.02]
              ${isDark 
                ? 'border-gray-700 bg-gray-800 hover:shadow-gray-900/50' 
                : 'border-gray-200 bg-white shadow-sm'
              }
            `}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                {category.icon}
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {category.category[language]}
              </h3>
            </div>

            <div className="space-y-4">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className={`
                    p-4 rounded-lg border transition-all duration-200 hover:scale-[1.02]
                    ${isDark 
                      ? 'border-gray-600 bg-gray-700 hover:border-gray-500' 
                      : 'border-gray-200 bg-gray-50 hover:border-gray-300'
                    }
                  `}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className={`font-semibold ${
                        isDark ? 'text-gray-100' : 'text-gray-900'
                      }`}>
                        {skill.name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs font-medium ${getLevelColor(skill.level)}`}>
                        {getLevelText(skill.level)}
                      </span>
                      <div className="flex gap-1">
                        {[...Array(4)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < skill.level 
                                ? getLevelColor(skill.level).replace('text-', 'fill-') 
                                : isDark ? 'text-gray-600' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className={`text-sm ${
                    isDark ? 'text-gray-400' : 'text-gray-600'
                  }`}>
                    {skill.experience} {language === 'es' ? 'de experiencia' : 'experience'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

             
    </main>
  );
} 