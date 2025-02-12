"use client";
import { useEffect, useState } from "react";

const messages = ["despega tu mente", "explora el universo", "crea nuevas oportunidades"];

export default function MessageBanner() {
  const baseMessage = "AWK";
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullMessage = `${baseMessage} ${messages[currentMessageIndex]}`;
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && textIndex < fullMessage.length) {
        setTextIndex((prev) => prev + 1);
      } else if (isDeleting && textIndex > baseMessage.length) {
        setTextIndex((prev) => prev - 1);
      } else if (textIndex === fullMessage.length) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (textIndex === baseMessage.length) {
        setIsDeleting(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [textIndex, isDeleting, currentMessageIndex, baseMessage]);

  const fullMessage = `${baseMessage} ${messages[currentMessageIndex]}`;

  return (
    <div className="text-center absolute left-1/2 transform -translate-x-1/2 z-[8888] bottom-20 md:bottom-32 lg:bottom-40">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ffffff] to-[#f3f9f5] whitespace-nowrap">
          {fullMessage.substring(0, textIndex)}
        </span>
        <span className="border-r-4 sm:border-r-6 md:border-r-8 pr-2 font-extrabold border-white/90 rounded-lg motion-preset-blink motion-duration-1000"></span>
      </h1>
    </div>
  );
}