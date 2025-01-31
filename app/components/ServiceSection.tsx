"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Services from "./All Page Components/Services";

export default function ServiceSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      id="service"
      className="px-16"
      ref={ref}
      initial={{ x: "-100vw" }}
      animate={inView ? { x: 0 } : {}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Services />
    </motion.div>
  );
}