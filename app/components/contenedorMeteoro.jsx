import { useEffect, useState } from "react";
import Meteor from "./meteoro";

export default function Meteoros() {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const newMeteors = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: 100 + Math.random() * 20,
      duration: 5 + Math.random() * 5,
    }));
    setMeteors(newMeteors);
  }, []);

  return (
    <div className="fixed inset-0 z-0 w-full h-full overflow-hidden">
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute"
          style={{
            top: `${meteor.y}vh`,
            left: `${meteor.x}vw`,
            animation: `meteor-move ${meteor.duration}s linear infinite`,
          }}
        >
          <Meteor />
        </div>
      ))}

      <style jsx global>{`
        @keyframes meteor-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50vw, -100vh) rotate(45deg);
          }
        }
      `}</style>
    </div>
  );
}
