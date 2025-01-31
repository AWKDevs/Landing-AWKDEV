"use client"

import { useState } from 'react';
import { BiMenu, BiX } from 'react-icons/bi';
import type { ReactNode } from 'react';

type ResponsiveNavClientProps = {
  menuDesktop: ReactNode;
  menuMobile: ReactNode;
  logo: ReactNode;
};

const ResponsiveNavClient = ({ menuDesktop, menuMobile, logo }: ResponsiveNavClientProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="border-b w-full">
      <div className="w-full px-8">
        <div className="flex md:flex-col md:col-span-1 md:justify-center justify-between items-center md:h-40 sm:h-24">
          {logo}

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center space-x-4 sm:hidden">
            {menuDesktop}
          </div>

          {/* Botón Hamburguesa */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-[rgb(14,107,50)] hover:bg-[rgb(98,227,148)] focus:outline-none transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <BiX className="h-10 w-10 hover:transition-transform duration-300 hover:rotate-180" />
            ) : (
              <BiMenu className="h-10 w-10 hover:transition-transform motion-duration-1500 hover:motion-preset-pulse" />
            )}
          </button>
        </div>

        {/* Menú Móvil */}
        <div
          className={`md:hidden absolute left-0 w-full bg-[rgb(7,7,7)] z-50 shadow-lg
            ${isOpen ? 'motion-preset-slide-left scale-y-100 opacity-100' : 'scale-y-0 opacity-0'}`}
          style={{
            maxHeight: isOpen ? '1000px' : '0px',
            transformOrigin: 'top',
            overflow: 'hidden'
          }}
        >
          <div className="flex flex-col px-32 py-4 space-y-4">
            {menuMobile}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavClient;