import Image from "next/image";

export default function Spacecraft() {
  return (
    <div className="flex-shrink-0 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[32rem] lg:h-[32rem]">
      <Image
        src="/NaveUwU.png"
        alt="Nave Espacial"
        fill
        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 448px"
        className="object-contain z-30 contrast-200"
      />
    </div>
  );
}
