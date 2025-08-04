"use client";

import Image from "next/image";
import { useTranslations } from "../../hooks/useTranslations";
import { useTheme } from "../../contexts/ThemeContext";
import { 
  Calendar, 
  MapPin, 
  GraduationCap, 
  Code, 
  Heart, 
  Target, 
  Award,
  Mail,
  Github,
  Linkedin,
  Download,
  Sparkles,
  Lightbulb,
  Zap
} from "lucide-react";

const personalInfo = {
  es: {
    name: "David Fernández Vaquero",
    title: "Desarrollador de Software",
    location: "Logroño, España",
    email: "davidfvaquero@gmail.com",
    description: "Apasionado desarrollador con experiencia en tecnologías web, móviles e IA. Siempre buscando nuevos retos y oportunidades de aprendizaje.",
    longDescription: "Soy un desarrollador de software apasionado por la tecnología y la innovación. Mi experiencia abarca desde desarrollo web hasta aplicaciones móviles, pasando por proyectos de inteligencia artificial y soluciones IoT. Me encanta aprender nuevas tecnologías y trabajar en equipo para resolver problemas complejos.",
    education: {
      degree: "Grado Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)",
      institution: "IES Comercio",
      year: "2023 - 2025"
    },
    interests: [
      "Inteligencia Artificial",
      "Desarrollo Web",
      "Aplicaciones Móviles",
      "IoT y Hardware",
      "Videojuegos",
      "Música"
    ],
    goals: [
      "Especializarme en IA y Machine Learning",
      "Desarrollar aplicaciones innovadoras",
      "Contribuir a proyectos open source",
      "Mentorar a otros desarrolladores"
    ]
  },
  en: {
    name: "David Fernández Vaquero",
    title: "Software Developer",
    location: "Logroño, Spain",
    email: "davidfvaquero@gmail.com",
    description: "Passionate developer with experience in web, mobile and AI technologies. Always seeking new challenges and learning opportunities.",
    longDescription: "I'm a software developer passionate about technology and innovation. My experience spans from web development to mobile applications, including AI projects and IoT solutions. I love learning new technologies and working in teams to solve complex problems.",
    education: {
      degree: "Bachelor's Degree in Multiplatform Application Development (DAM)",
      institution: "IES Comercio",
      year: "2023 - 2025"
    },
    interests: [
      "Artificial Intelligence",
      "Web Development",
      "Mobile Applications",
      "IoT & Hardware",
      "Video Games",
      "Music"
    ],
    goals: [
      "Specialize in AI and Machine Learning",
      "Develop innovative applications",
      "Contribute to open source projects",
      "Mentor other developers"
    ]
  }
};

const timeline = [
  {
    year: "2025",
    title: {
      es: "Finalización de DAM",
      en: "DAM Completion"
    },
    description: {
      es: "Finalización del Grado Superior en Desarrollo de Aplicaciones Multiplataforma",
      en: "Completion of Bachelor's Degree in Multiplatform Application Development"
    },
    icon: <GraduationCap className="w-4 h-4" />
  },
  {
    year: "2024",
    title: {
      es: "Desarrollo de Portafolio Web",
      en: "Web Portfolio Development"
    },
    description: {
      es: "Creación de portafolio personal con Next.js y diseño moderno",
      en: "Personal portfolio creation with Next.js and modern design"
    },
    icon: <Code className="w-4 h-4" />
  },
  {
    year: "2023",
    title: {
      es: "Inicio de DAM y Proyectos",
      en: "DAM Start and Projects"
    },
    description: {
      es: "Comienzo del Grado Superior DAM y desarrollo de proyectos de IA y Flutter",
      en: "Start of DAM Bachelor's Degree and AI/Flutter project development"
    },
    icon: <Sparkles className="w-4 h-4" />
  },
  {
    year: "2022",
    title: {
      es: "Desarrollo Web y Java",
      en: "Web Development and Java"
    },
    description: {
      es: "Proyectos web con React y aplicaciones Java",
      en: "Web projects with React and Java applications"
    },
    icon: <Zap className="w-4 h-4" />
  }
];

export default function About() {
  const { language } = useTranslations();
  const { isDark } = useTheme();
  const info = personalInfo[language];

  return (
    <main className="max-w-6xl mx-auto px-4 pt-32 pb-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
                 <div className="relative mb-8">
           <Image
             src="/perfil.jpg"
             alt={language === 'es' ? "Foto de David" : "David's photo"}
             width={150}
             height={150}
             className="w-32 h-32 rounded-full object-cover border-4 shadow-lg mx-auto"
             priority
           />
         </div>
        
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          {info.name}
        </h1>
        
        <h2 className={`text-xl mb-4 ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
          {info.title}
        </h2>
        
        <div className="flex items-center justify-center gap-6 mb-6">
          <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <MapPin className="w-4 h-4" />
            <span>{info.location}</span>
          </div>
          <div className={`flex items-center gap-2 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            <Mail className="w-4 h-4" />
            <span>{info.email}</span>
          </div>
        </div>
        
        <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${
          isDark ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {info.longDescription}
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        {/* Education & Interests */}
        <div className="space-y-8">
          {/* Education */}
          <div className={`p-6 rounded-xl border ${
            isDark 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {language === 'es' ? 'Educación' : 'Education'}
              </h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className={`font-semibold ${
                  isDark ? 'text-gray-100' : 'text-gray-900'
                }`}>
                  {info.education.degree}
                </h4>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {info.education.institution}
                </p>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  {info.education.year}
                </p>
              </div>
            </div>
          </div>

          {/* Interests */}
          <div className={`p-6 rounded-xl border ${
            isDark 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <Heart className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {language === 'es' ? 'Intereses' : 'Interests'}
              </h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {info.interests.map((interest, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    isDark 
                      ? 'bg-gray-700 text-gray-300 border border-gray-600' 
                      : 'bg-gray-100 text-gray-700 border border-gray-200'
                  }`}
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Goals & Timeline */}
        <div className="space-y-8">
          {/* Goals */}
          <div className={`p-6 rounded-xl border ${
            isDark 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <Target className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {language === 'es' ? 'Objetivos' : 'Goals'}
              </h3>
            </div>
            
            <ul className="space-y-3">
              {info.goals.map((goal, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    isDark ? 'bg-blue-400' : 'bg-blue-500'
                  }`} />
                  <span className={`text-sm ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {goal}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Timeline */}
          <div className={`p-6 rounded-xl border ${
            isDark 
              ? 'border-gray-700 bg-gray-800' 
              : 'border-gray-200 bg-white shadow-sm'
          }`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-lg ${
                isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
              }`}>
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className={`text-xl font-bold ${
                isDark ? 'text-gray-100' : 'text-gray-900'
              }`}>
                {language === 'es' ? 'Timeline' : 'Timeline'}
              </h3>
            </div>
            
            <div className="space-y-4">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    isDark ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'
                  }`}>
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`text-sm font-bold ${
                        isDark ? 'text-blue-400' : 'text-blue-600'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                    <h4 className={`font-semibold mb-1 ${
                      isDark ? 'text-gray-100' : 'text-gray-900'
                    }`}>
                      {item.title[language]}
                    </h4>
                    <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                      {item.description[language]}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className={`p-8 rounded-xl border text-center ${
        isDark 
          ? 'border-gray-700 bg-gray-800' 
          : 'border-gray-200 bg-white shadow-sm'
      }`}>
        <h3 className={`text-2xl font-bold mb-6 ${
          isDark ? 'text-gray-100' : 'text-gray-900'
        }`}>
          {language === 'es' ? 'Conectemos' : "Let's Connect"}
        </h3>
        
                 <div className="flex flex-wrap justify-center gap-6">
           <a
             href="https://github.com/davidfvaquero"
             target="_blank"
             rel="noopener noreferrer"
             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
               isDark 
                 ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
             }`}
           >
             <Github className="w-5 h-5" />
             <span>GitHub</span>
           </a>
           
                       <a
              href="https://www.linkedin.com/in/david-fernández-vaquero-15b8b8346"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
                isDark 
                  ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
           
           <a
             href="/cvDavidFernandezVaquero.pdf"
             target="_blank"
             rel="noopener noreferrer"
             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${
               isDark 
                 ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' 
                 : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
             }`}
           >
             <Download className="w-5 h-5" />
             <span>{language === 'es' ? 'CV' : 'CV'}</span>
           </a>
         </div>
      </div>
    </main>
  );
} 