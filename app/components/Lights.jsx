import React, { useState, useEffect } from "react";

export default function Lights({ active }) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generateStars = () => {
      return Array.from({ length: 50 }).map(() => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 4,
        delay: Math.random() * 3,
        animation: Math.random() > 0.5 ? "pulse" : "parpadeo",
      }));
    };

    setStars(generateStars());
  }, []);

  return (
    <div className="fixed inset-0 z-0">
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
