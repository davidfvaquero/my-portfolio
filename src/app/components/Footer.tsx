const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="w-full py-2 text-center text-gray-500 text-xs flex flex-col items-center gap-0.5 sm:gap-1 mt-8 sm:mt-12">
      <div>
        © {year} David Fernández
      </div>
      <div className="flex gap-1 sm:gap-2 justify-center text-[10px] sm:text-xs">
        <a
          href="https://github.com/davidfvaquero"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          GitHub
        </a>
        <span>|</span>
        <a
          href="https://www.linkedin.com/in/davidfvaquero/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
} 