import { SiOpenjdk, SiPython, SiReact, SiMysql, SiLinux } from "react-icons/si";

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-4 pt-32 flex flex-col items-center text-center gap-8 pb-16">
      <h1 className="text-4xl font-bold">¡Bienvenido a mi portafolio!</h1>
      <p className="text-xl text-gray-700 font-medium">
        Desarrollador web y de software apasionado por la IA, el IoT y la innovación.
      </p>
      <a
        href="/cvDavidFernandezVaquero.pdf"
        download
        className="inline-block bg-black text-white px-6 py-2 rounded-full font-semibold shadow hover:bg-gray-800 transition-colors"
        style={{ color: "#fff" }}
      >
        Descargar CV
      </a>
      <div className="flex gap-6 justify-center items-center mt-4 mb-12">
        <SiOpenjdk className="w-10 h-10 text-orange-700" title="Java" />
        <SiPython className="w-10 h-10 text-blue-500" title="Python" />
        <SiReact className="w-10 h-10 text-sky-500" title="React" />
        <SiMysql className="w-10 h-10 text-[#336791]" title="SQL" />
        <SiLinux className="w-10 h-10 text-black" title="Linux" />
      </div>
    </main>
  );
}
