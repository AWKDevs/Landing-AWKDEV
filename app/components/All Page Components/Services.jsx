"use client";

export default function Services() {
  return (
    <section className="text-[#ebf6e7] font-sans font-semibold  px-6">
      <h2 className="text-4xl  font-bold ">
        Transformamos ideas en soluciones tecnológicas innovadoras que
        <span className="bg-clip-text text-transparent  bg-gradient-to-r from-[#62e394] to-[#0e6b32] pl-2 relative underline">
          impulsan tu negocio
          <span className="absolute left-0 bottom-[-5px] w-full h-1 bg-green-500 blur-md"></span>
        </span>
      </h2>
      <p className="text-lg  mt-4">
        Somos una consultora tecnológica que desarrolla soluciones
        personalizadas en software y tecnología para empresas que buscan
        alcanzar sus metas sin límites.
      </p>
      <p className="text-lg  mt-4">
        Creamos soluciones que optimizan procesos, reducen costes y potencian el
        crecimiento.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#070707] hover:bg-[#0e6b32]/15 p-6 rounded-3xl hover:translate-y-1 translate-x-1 flex items-center space-x-4"
          >
            <div className=" text-4xl">{service.icon}</div>
            <div>
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className=" mt-1">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const services = [
  {
    icon: "🚀",
    title: "+50 Proyectos Completados",
    description: "Hemos desarrollado más de 50 proyectos con éxito.",
  },
  {
    icon: "📈",
    title: "Incremento del 30% en Productividad",
    description:
      "Nuestros clientes han visto un aumento del 30% en su productividad.",
  },
  {
    icon: "👨‍💻",
    title: "Equipo Experto en Tecnología",
    description:
      "Contamos con profesionales altamente capacitados en diversas tecnologías.",
  },
  {
    icon: "⚡",
    title: "Procesos Ágiles",
    description:
      "Utilizamos metodologías como SCRUM y DevOps para garantizar eficiencia.",
  },
  {
    icon: "💡",
    title: "Innovación Centrada en el Cliente",
    description:
      "Desarrollamos soluciones enfocadas en las necesidades reales de los clientes.",
  },
  {
    icon: "🌐",
    title: "Desarrollo Web",
    description:
      "Creamos aplicaciones robustas y escalables para diversos sectores.",
  },
  {
    icon: "🤖",
    title: "Inteligencia Artificial",
    description:
      "Implementamos modelos predictivos para optimizar decisiones empresariales.",
  },
  {
    icon: "☁️",
    title: "Cloud Computing",
    description:
      "Ofrecemos migración y gestión de infraestructuras en la nube.",
  },
];
