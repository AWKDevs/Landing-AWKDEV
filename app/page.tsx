"use client";
import Navbar from "../app/components/Nav";
import Meteoros from "../app/components/contenedorMeteoro";
import Image from "next/image";
import { useEffect, useState } from "react";
import Meteor from "../app/components/Meteor";
import Lights from "../app/components/Lights";
import ShootingStars from "../app/components/ShootingStars";
import Service from "../app/components/Services";
import ContactForm from "../app/components/ContactForm";
import dynamic from "next/dynamic";
import AboutUs from "../app/components/AboutUs";
import { motion } from "framer-motion";

const Spacecraft = dynamic(() => import("../app/components/Spacecraft"), {
  ssr: false,
});

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isInService, setIsInService] = useState(false);
  const [isInAboutUs, setIsInAboutUs] = useState(false);
  const [isInContact, setIsInContact] = useState(false);
  const message = "AWK despega tu mente";

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      const serviceSection = document.getElementById("service");
      const aboutUsSection = document.getElementById("aboutus");
      const contactFormSection = document.getElementById("contactform");

      if (
        serviceSection &&
        serviceSection.getBoundingClientRect().top < window.innerHeight
      ) {
        setIsInService(true);
      }
      if (
        aboutUsSection &&
        aboutUsSection.getBoundingClientRect().top < window.innerHeight
      ) {
        setIsInAboutUs(true);
      }
      if (
        contactFormSection &&
        contactFormSection.getBoundingClientRect().top < window.innerHeight
      ) {
        setIsInContact(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition]);

  useEffect(() => {
    if (!isClient) return;

    if (textIndex < message.length) {
      const timeout = setTimeout(() => {
        setTextIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [textIndex, isClient]);

  const meteorsData = [
    { top: 10, left: 6, width: 750, height: 450 },
    { top: 4, left: 55, width: 650, height: 250 },
  ];

  return (
    <main className="h-[200vh] tex-[text-[#ebf6e7] w-screen hide-scrollbar">
      <Navbar />
      <div className="min-w-full pt-20 min-h-[200vh] bg-black relative">
        <Lights active={true} />
        <Meteoros />
        <ShootingStars />
        <div className="absolute top-0 left-0 w-full h-screen">
          <div className="flex pt-20 opacity-10">
            <Image src="/meteoro1.png" alt="meteoro" width={900} height={500} />
            <Image
              src="/meteoro1.png"
              alt="meteoro"
              width={1050}
              height={600}
            />
            <Image src="/meteoro3.png" alt="meteoro" width={650} height={600} />
          </div>
          <div className="text-center bottom-60 absolute left-1/2 transform -translate-x-1/2 z-[8888]">
            <h1 className="text-6xl h-36 font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#f3f9f5] whitespace-nowrap overflow-hidden">
              <span>{message.substring(0, textIndex)}</span>
              <span className="border-r-8 pr-2 font-extrabold border-white/90 rounded-lg animate-blink"></span>
            </h1>
            <button
              className="px-6 py-5 animate-bounce bg-green-800/5 hover:bg-green-700/15 hover:translate-y-1 text-white rounded-full shadow-md shadow-green-900 hover:shadow-[#62e394] transition duration-300"
              onClick={() => {
                const section = document.getElementById("contactform");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              🚀 ¡Despegue!
            </button>

            <style jsx>{`
              .animate-blink {
                animation: blink 1s step-end infinite;
              }
              @keyframes blink {
                50% {
                  opacity: 0;
                }
              }
            `}</style>
          </div>

          {meteorsData.map((meteor, index) => (
            <Meteor
              key={index}
              top={meteor.top}
              left={meteor.left}
              width={meteor.width}
              height={meteor.height}
              scrollPosition={scrollPosition}
            />
          ))}
        </div>
        <div className="relative min-w-full align-bottom">
          <div className="flex justify-center">
            <div
              className="relative group justify-center align-bottom items-center"
              style={{ transform: `translateY(-${scrollPosition}px)` }}
            >
              {isClient && <Spacecraft />}
            </div>
          </div>
          <motion.div
            id="service"
            className="px-16"
            initial={{ x: "-100vw" }}
            animate={isInService ? { x: 0 } : { x: "-100vw" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <Service />
          </motion.div>
          <motion.div
            id="aboutus"
            className="pt-10 px-16"
            initial={{ x: "100vw" }}
            animate={isInAboutUs ? { x: 0 } : { x: "100vw" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <AboutUs />
          </motion.div>
          <motion.div
            id="contactform"
            className="pt-10 px-16"
            initial={{ x: "-100vw" }}
            animate={isInContact ? { x: 0 } : { x: "-100vw" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <ContactForm />
          </motion.div>
          <div className="flex py-8 justify-center items-center text-center text-sm font-extralight hover:text-[#62e394]">
            Aviso de privacidad
          </div>
        </div>
      </div>
    </main>
  );
}
