import Image from "next/image";
import MessageBanner from "./MessageBanner";
import Spacecraft from "./Spacecraft";

export default function MainSection() {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden pt-16">
      {/* Contenedor para la nave y el texto descriptivo */}
      <div className="relative flex items-center justify-center gap-x-6 lg:gap-x-8 xl:gap-x-12 px-8 md:px-16 lg:px-20 max-w-6xl mx-auto pt-48 z-10">
        <div className="motion-preset-oscillate motion-duration-[10000ms]">
            <Spacecraft />
        </div>
        <div className="text-white text-left max-w-xl sm:pl-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Explora el universo con AWK Devs</h2>
          <p className="text-lg md:text-xl">
            Sumérgete en un viaje hacia el conocimiento tecnológico, donde nuestras soluciones innovadoras 
            llevan tus ideas al infinito y más allá (Cambiar).
          </p>
        </div>
      </div>

      {/* Contenedor para los meteoritos */}
      <div className="absolute z-0 top-36 lg:top-60 left-0 w-full h-[30vh] flex justify-around items-start space-x-4 overflow-visible">
        <Image
          src="/meteoro1.png"
          alt="Meteoritos"
          width={800}
          height={800}
          className="object-cover motion-delay-75 motion-preset-oscillate motion-duration-[6100ms]"
        />
        <Image
          src="/meteoro3.png"
          alt="Meteoritos"
          width={800}
          height={800}
          className="object-cover motion-preset-oscillate motion-duration-[6100ms]"
        />
        <Image
          src="/meteoro2.png"
          alt="Meteoritos"
          width={800}
          height={800}
          className="object-cover motion-delay-75 motion-preset-oscillate motion-duration-[6100ms]"
        />
      </div>
      <MessageBanner />
    </div>
  );
}
