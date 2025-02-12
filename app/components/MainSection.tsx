import Image from "next/image";
import MessageBanner from "./MessageBanner";
import Spacecraft from "./Spacecraft";

export default function MainSection() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden pt-16 pb-20">
      {/* Contenedor para la nave y el texto descriptivo */}
      <div className="relative flex items-center justify-around gap-x-6 lg:gap-x-8 xl:gap-x-12 px-8 md:px-16 lg:px-20 pt-48 z-10">
        <div className="text-white text-left max-w-xl sm:pl-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-pretty">
            Potenciamos tu marca con desarrollo web y gestión digital
          </h2>
          <p className="text-lg md:text-xl">
            Desarrollo web y gestión digital para llevar tu negocio al siguiente nivel.
          </p>
          {/* Botón de acción */}
          <button className="mt-4 px-6 py-3 bg-green-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-green-500 transition duration-300">
            CONOCE MÁS DE AWK
          </button>
        </div>
        <div className="motion-preset-oscillate motion-duration-[6100ms]">
          <Spacecraft />
        </div>
      </div>

      {/* Contenedor para los meteoritos */}
      <div className="absolute z-0 top-4 md:top-9 left-0 w-full h-full flex justify-center items-start space-x-4 overflow-visible">
        <Image
          src="/meteoro1.png"
          alt="Meteoritos"
          width={800}
          height={800}
          className="object-cover motion-delay-75 motion-preset-oscillate motion-duration-[6100ms] opacity-30"
        />
        <Image
          src="/meteoro3.png"
          alt="Meteoritos"
          width={800}
          height={800}
          className="object-cover motion-preset-oscillate motion-duration-[6100ms] opacity-50"
        />
        <Image
          src="/meteoro2.png"
          alt="Meteoritos"
          width={800}
          height={800}
          className="object-cover motion-delay-75 motion-preset-oscillate motion-duration-[6100ms] opacity-25"
        />
      </div>

      {/* MessageBanner */}
      <div className="pt-24">
        <MessageBanner />
      </div>
    </div>
  );
}