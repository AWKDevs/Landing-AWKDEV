"use client";

import Image from "next/image";

export default function Meteor({ top, left, width, height, scrollPosition }) {
  const translateX = Math.min(scrollPosition / 5, 500);
  const translateY = Math.min(scrollPosition / 5, 500);

  return (
    <div className="flex justify-between">
      <Image
        src="/meteoro3.png"
        alt="meteoro"
        width={width}
        height={height}
        className="absolute pr-20 opacity-50"
        style={{
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(${translateX}px, ${translateY}px)`,
        }}
      />
    </div>
  );
}
