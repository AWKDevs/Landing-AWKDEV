"use client";

import React, { useState, useEffect } from "react";

interface Star {
  top: number;
  left: number;
  size: number;
  delay: number;
  animation: "pulse" | "parpadeo";
}

interface LightsProps {
  active: boolean;
}

export default function Lights({ active }: LightsProps) {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    if (!active) return;

    const generateStars = (): Star[] => {
      return Array.from({ length: 50 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 4,
        delay: Math.random() * 3,
        animation: Math.random() > 0.5 ? "pulse" : "parpadeo",
      }));
    };

    setStars(generateStars());
  }, [active]);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div className="w-full h-full">
        <div className="estrellas">
          {stars.map((star, index) => (
            <div
              key={index}
              className={`estrella ${star.animation}`}
              style={{
                top: `${star.top}%`,
                left: `${star.left}%`,
                width: `${star.size}px`,
                height: `${star.size}px`,
                animationDelay: `${star.delay}s`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .estrella {
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to right, #065f46, #15803d, #a3e635);
          box-shadow: 0 0 10px rgba(245, 239, 207, 0.9),
            0 0 20px rgba(245, 239, 207, 0.8);
        }

        .parpadeo {
          animation: parpadeo 3s infinite ease-in-out alternate;
        }

        .pulse {
          animation: pulse 2s infinite ease-in-out alternate;
        }

        @keyframes parpadeo {
          0% {
            opacity: 0.2;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes pulse {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
