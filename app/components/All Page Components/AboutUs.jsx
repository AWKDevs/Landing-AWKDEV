export default function AboutUs() {
  const cards = [
    {
      title: "Misión",
      text: "Desarrollar soluciones tecnológicas modernas, garantizando calidad, innovación y satisfacción para nuestros clientes.",
      icon: "🎯",
    },
    {
      title: "Visión",
      text: "Ser la empresa líder en desarrollo tecnológico, reconocida por nuestra excelencia, impacto en la industria y responsabilidad social.",
      icon: "🌟",
    },
    {
      title: "Valores",
      text: "Nuestros valores incluyen innovación, integridad, excelencia técnica, adaptabilidad y confianza.",
      icon: "💡",
    },
    {
      title: "Equipo",
      text: "Contamos con un equipo diverso y talentoso de expertos en desarrollo de software, IA y cloud computing.",
      icon: "🤝",
    },
  ];

  return (
    <section className="flex flex-col text-[#ebf6e7] font-sans font-semibold items-center justify-center  px-6 py-12 relative overflow-hidden">
      <div className="mb-12">
        <h2 className="text-4xl bg-clip-text font-extrabold">
          ¿Quiénes
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#62e394] to-[#0e6b32] pl-2 relative underline">
            somos?
            <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-green-500 blur-md"></span>
          </span>
        </h2>
        <p className="mt-4 font-bold text-lg text-[#ece8e5]">
          En
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#62e394] to-[#0e6b32] pl-2 relative underline">
            AwksDevs
          </span>
          , diseñamos y desarrollamos soluciones tecnológicas innovadoras que
          transforman ideas en productos de alto impacto. Desde nuestro inicio
          en <span className="text-green-300">[Fecha]</span>, hemos crecido como
          un equipo apasionado con el objetivo de llevar las ideas tecnológicas
          al siguiente nivel.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
        {cards.map((card, index) => (
          <div
            key={index}
            className="group justify-center align-middle items-center p-6 rounded-3xl flex flex-col backdrop-blur-md transform transition-transform hover:translate-y-[-10px] shadow-md shadow-green-900  hover:bg-green-700/15  text-white   hover:shadow-[#62e394] duration-300"
          >
            <div className="text-4xl mb-4 text-black">{card.icon}</div>
            <h3 className="text-2xl font-bold text-[#62e394]">{card.title}</h3>
            <p className="mt-2 text-lg text-[#ece8e5]">{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
