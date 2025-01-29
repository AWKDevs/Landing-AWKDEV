import Image from "next/image";
export default function SpaceShip() {
  return (
    <div className="flex flex-col justify-center">
      <div className="relative group justify-center pt-40 h-screen items-center">
        <div className="absolute inset-0 w-[10px] h-[420px] top-1/3 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-emerald-800 via-green-700 to-lime-200 blur-2xl opacity-95"></div>
        <div className="absolute inset-0 w-[10px] h-[400px] animate-pulse top-1/2 left-1/2 transform -translate-x-1/2 bg-gradient-to-t from-green-950 via-green-700 to-lime-300 blur-2xl"></div>

        <Image
          src="/NaveUwU.png"
          alt="Nave Espacial"
          width={300}
          height={300}
          className="relative z-30 contrast-200"
        />
      </div>
    </div>
  );
}
