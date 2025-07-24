import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-32 flex flex-col items-center text-center gap-6">
      <h1 className="text-4xl font-bold">¡Bienvenido a mi portafolio!</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300">
        Soy David, desarrollador full-stack. Aquí podrás conocer más sobre mí, mis proyectos, habilidades y cómo contactarme.
      </p>
    </main>
  );
}
