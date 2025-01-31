import React, { useEffect, useRef } from "react";
import Image from "next/image";

const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(0);

    const song = "010101 Estrellita donde estas quiero verte titilar 010101";
    const binarySong = song
      .split("")
      .map((char) => {
        if (char === " ") return " ";
        return Math.random() > 0.5 ? "1" : "0";
      })
      .join("");

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#00ff00";
      ctx.font = `${fontSize}px monospace`;

      // Dibujar caracteres
      for (let i = 0; i < drops.length; i++) {
        const text = binarySong[drops[i] % binarySong.length];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);
        if (y > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas ref={canvasRef} className="absolute x z-0 " />
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <Image
          src="/Transparente.png"
          alt="Imagen de referencia"
          width={500}
          height={500}
          className=" shadow-lg"
        />
      </div>
    </div>
  );
};

export default MatrixRain;
