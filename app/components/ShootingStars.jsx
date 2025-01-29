import React, { useEffect, useState } from "react";

export default function ShootingStars() {
  const [shootingStars, setShootingStars] = useState([]);

  useEffect(() => {
    const generateShootingStars = () => {
      return Array.from({ length: 5 }).map((_, index) => ({
        key: index,
        delay: Math.random() * 5,
        top: Math.random() * 50 + 50,
        left: Math.random() * 25,
        duration: Math.random() * 2 + 1.5,
      }));
    };

    setShootingStars(generateShootingStars());
  }, []);

  return (
    <div className="fixed inset-0 z-10 pointer-events-none">
      <div className="w-full h-full">
        {shootingStars.map((star) => (
          <div
            key={star.key}
            className="estrella-fugaz"
            style={{
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              top: `${star.top}%`,
              left: `${star.left}%`,
            }}
          ></div>
        ))}
      </div>
      <style jsx>{`
        .estrella-fugaz {
          position: absolute;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: linear-gradient(to right, #065f46, #15803d, #a3e635);
          box-shadow: 0 0 10px #facc15, 0 0 20px #fef08a;
          animation: shooting-star linear infinite;
        }

        @keyframes shooting-star {
          0% {
            transform: translateX(0) translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100vw) translateY(-100vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
