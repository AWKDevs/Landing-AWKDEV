import React from "react";
import { Metadata } from "next";
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

export const metadata: Metadata = {
    title: 'AWK Devs Landing',
    description: 'Transformamos ideas en soluciones tecnológicas innovadoras queimpulsan tu negocio'
}

const Header = () => {
  return (
    <header className="sticky top-0 text-center z-50 bg-black text-white">
      <div className="flex justify-around items-center px-6 py-3 bg-white text-black text-sm">
        <span>AWK Impulsa tu marca, transforma tu presencia digital.</span>
        <div className="flex gap-3 text-2xl">
          <FaFacebook className="cursor-pointer hover:text-gray-400" />
          <FaInstagram className="cursor-pointer hover:text-gray-400" />
          <FaXTwitter className="cursor-pointer hover:text-gray-400" />
          <FaPinterest className="cursor-pointer hover:text-gray-400" />
          <FaLinkedin className="cursor-pointer hover:text-gray-400" />
        </div>
      </div>
      
      <nav className="flex justify-around items-center px-8 py-4 bg-black">
        {/* Logo */}
        <div className="text-xl font-bold">AWK</div>

        <ul className="hidden md:flex space-x-6 text-lg">
          <Link href={"/"} className="hover:text-green-300 cursor-pointer">Inicio</Link>
          <Link href={"/"} className="hover:text-green-300 cursor-pointer">Nosotros</Link>
          <Link href={"/Services"} className="hover:text-green-300 cursor-pointer">Servicios</Link>
          <Link href={"/"} className="hover:text-green-300 cursor-pointer">Proyectos</Link>
          <Link href={"/ContactUs"} className="hover:text-green-300 cursor-pointer">Contacto</Link>
        </ul>

        {/* Call to Action Button */}
        <button className="bg-white text-black px-4 py-2 rounded-md font-semibold hover:bg-green-300">
          Llámanos +52 33 1373 3255
        </button>
      </nav>
    </header>
  );
};


export default Header;
