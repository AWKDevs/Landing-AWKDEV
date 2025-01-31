import React from "react";
import ResponsiveNav from "../NavBar/ResponsiveNav";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'AWK Devs Landing',
    description: 'Transformamos ideas en soluciones tecnológicas innovadoras queimpulsan tu negocio'
}

const Header = () => {
  return (
    <header className="bg-[rgb(7,7,7)] text-white shadow-md fixed top-0 left-0 w-full z-50">
      <ResponsiveNav />
    </header>
  );
};


export default Header;
