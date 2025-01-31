"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutUs from "./All Page Components/AboutUs";

export default function AboutUsSection() {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      id="aboutus"
      className="pt-10 px-16"
      ref={ref}
      initial={{ x: "100vw" }}
      animate={inView ? { x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <AboutUs />
    </motion.div>
  );
}