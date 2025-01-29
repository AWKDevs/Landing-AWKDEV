"use client";

import { useForm } from "react-hook-form";
import Image from "next/image";
import MatrixRain from "../components/MatrixRain";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Formulario enviado:", data);
    alert("¡Formulario enviado exitosamente!");
    reset();
  };

  return (
    <section className="flex flex-col md:flex-row  justify-around pt-10 ">
      <div className="bg-gradient-to-r md:w-1/3 from-[#62e394]/50 to-[#6f9774]/50 p-1 rounded-3xl h-full w-full ">
        <div className="bg-black p-8 rounded-3xl shadow-lg">
          <h2 className="text-[#ece8e5] text-2xl md:text-3xl font-bold text-center">
            ¡Es hora de despegar juntos! Déjanos ayudarte a llevar tus proyectos
            al
            <span className="bg-clip-text text-transparent  bg-gradient-to-r from-[#62e394] to-[#0e6b32] pl-2 relative underline">
              próximo nivel
              <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-green-500 blur-md"></span>
            </span>
          </h2>

          <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-10 ">
            {[
              {
                name: "name",
                type: "text",
                placeholder: "Nombre",
                rules: { required: true, minLength: 3, maxLength: 50 },
              },
              {
                name: "phone",
                type: "tel",
                placeholder: "Teléfono",
                rules: { required: true, pattern: /^[0-9]{10}$/ },
              },
              {
                name: "email",
                type: "email",
                placeholder: "Correo Electrónico",
                rules: {
                  required: true,
                  pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                },
              },
            ].map((field, index) => (
              <div key={index}>
                <input
                  type={field.type}
                  placeholder={field.placeholder}
                  {...register(field.name, field.rules)}
                  className="w-full p-3 bg-transparent border border-[#0e6b32] rounded-xl text-[#ece8e5]  shadow-md focus:outline-none focus:ring-2 focus:ring-[#62e394]"
                />
                {errors[field.name] && (
                  <p className="text-[#62e394] pt-1 text-sm">{`Ingrese un ${field.placeholder.toLowerCase()} válido`}</p>
                )}
              </div>
            ))}
            <div>
              <textarea
                placeholder="Cuéntanos más sobre tu proyecto"
                {...register("description", { required: true, maxLength: 300 })}
                className="w-full p-3 bg-transparent border border-[#0e6b32]/50 rounded-xl text-[#ece8e5] shadow-md focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
              {errors.description && (
                <p className="text-[#62e394] text-sm">Máximo 300 caracteres</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full p-3 bg-green-800/5 hover:bg-green-700/15 hover:translate-y-1 text-[#ece8e5] rounded-full shadow-md shadow-green-900 hover:shadow-[#62e394] transition duration-300"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
      <div className="flex-col px-8 w-full md:w-1/2 flex items-center  mt-6 md:mt-0">
        <MatrixRain />
        <br />
        {/* Sección de iconos */}
        <div className="flex flex-row justify-between pt-0 bg-gradient-to-r from-[#62e394]/20 to-[#6f9774]/20 p-1 rounded-3xl">
          <a href="#" className="w-10 h-10 p-1  hover:translate-x-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
              alt="Icono 1"
              width={40}
              height={40}
            />
          </a>

          <a href="#" className="w-10 h-10 p-1 hover:translate-x-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/1384/1384005.png"
              alt="Icono 3"
              width={40}
              height={40}
            />
          </a>
          <a href="#" className="w-10 h-10 p-1 hover:translate-x-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4494/4494468.png"
              alt="Icono 4"
              width={40}
              height={40}
            />
          </a>

          <a href="#" className="w-10 h-10 p-1 hover:translate-x-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/4494/4494470.png"
              alt="Icono 6"
              width={40}
              height={40}
            />
          </a>
          <a href="#" className="w-10 h-10 p-1 hover:translate-x-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/3116/3116491.png"
              alt="Icono 7"
              width={40}
              height={40}
            />
          </a>
          <a href="#" className="w-10 h-10 p-1 hover:translate-x-1">
            <Image
              src="https://cdn-icons-png.flaticon.com/512/6129/6129053.png"
              alt="Icono 8"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
