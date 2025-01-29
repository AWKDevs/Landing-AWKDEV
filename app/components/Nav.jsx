"use client";

import Image from "next/image";

export default function Navbar() {
  const buttonStyle =
    "px-4 py-1 bg-green-800/5 hover:bg-green-700/15 hover:translate-y-1 rounded-full shadow-md shadow-green-900 hover:shadow-[#62e394] transition duration-300";

  const handleScrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed text-sm font-semibold font-sans h-12 z-[9999] flex items-center justify-between w-full bg-black/95 px-6">
      {/* Logo alineado a la izquierda */}
      <div className="flex-shrink-0 rounded-full  pt-4 opacity-50">
        <Image
          src="/LogoEstrellas.png"
          alt="Logo"
          width={40}
          height={40}
          className="rounded-full"
        />
      </div>

      {/* Botones alineados a la derecha */}
      <div className="flex space-x-4">
        <button
          className={buttonStyle}
          onClick={() => handleScrollTo("service")}
        >
          Resultados
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleScrollTo("aboutus")}
        >
          Nosotros
        </button>
        <button
          className={buttonStyle}
          onClick={() => handleScrollTo("contactform")}
        >
          Contáctanos
        </button>
      </div>
    </nav>
  );
}
