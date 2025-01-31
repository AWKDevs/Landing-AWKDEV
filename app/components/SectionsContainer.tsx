"use client";

import { motion } from "framer-motion";
import Service from "./All Page Components/Services";
import AboutUs from "./All Page Components/AboutUs";
import ContactForm from "./All Page Components/ContactForm";
import { useEffect, useState } from "react";

export default function SectionsContainer() {
  const [isInService, setIsInService] = useState(false);
  const [isInAboutUs, setIsInAboutUs] = useState(false);
  const [isInContact, setIsInContact] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const serviceSection = document.getElementById("service");
      const aboutUsSection = document.getElementById("aboutus");
      const contactFormSection = document.getElementById("contactform");

      if (serviceSection && serviceSection.getBoundingClientRect().top < window.innerHeight) {
        setIsInService(true);
      }
      if (aboutUsSection && aboutUsSection.getBoundingClientRect().top < window.innerHeight) {
        setIsInAboutUs(true);
      }
      if (contactFormSection && contactFormSection.getBoundingClientRect().top < window.innerHeight) {
        setIsInContact(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
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
    </>
  );
}
