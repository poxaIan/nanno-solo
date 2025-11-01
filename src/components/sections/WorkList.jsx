import { FaChartLine, FaFlask, FaRoad } from "react-icons/fa";

const WorkList = () => {
  const workAreas = [
    {
      icon: <FaChartLine className="text-4xl" />,
      title: "Consultoria Técnica",
      services: [
        "Estudos geotécnicos e geológicos",
        "Análise de projetos de engenharia",
        "Auditorias e vistorias técnicas",
        "Gestão de projetos e obras"
      ]
    },
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Ensaios Tecnológicos e Qualidade",
      services: [
        "Asfalto – projetos e ensaios",
        "Concreto – projetos estruturais, traços e ensaios",
        "Solos – caracterização de solos e ensaios especiais"
      ]
    },
    {
      icon: <FaRoad className="text-4xl" />,
      title: "Infraestrutura e Transportes",
      services: [
        "Estudos hidrológicos e drenagem",
        "Estabilização de taludes e contenções",
        "Sinalização e segurança viária",
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-20 pb-16 sm:pb-24 bg-brandYellow">
      <div className="container px-4 mx-auto">
        <div className="section_content text-center mb-12">
          <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font_poppins text-black mb-4">
            Áreas de Atuação
          </p>
          <p className="text-base sm:text-lg md:text-xl font_avenir text-gray-800 max-w-3xl mx-auto px-4">
            Desde 2015, oferecemos soluções inovadoras e seguras em todo o Brasil, transformando grandes desafios em resultados concretos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {workAreas.map((area, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 border-white hover:border-brandGreen flex flex-col h-full"
            >
              <div className="flex items-start gap-3 sm:gap-4 mb-6 min-h-[100px]">
                <div className="bg-gradient-to-br from-yellow-400 via-brandYellow to-yellow-600 text-black rounded-xl p-3 sm:p-4 shadow-md flex items-center justify-center flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 border-2 border-yellow-700 border-opacity-30">
                  {area.icon}
                </div>
                <h3 className="font-poppins font-bold text-xl sm:text-2xl md:text-3xl text-black leading-tight">
                  {area.title}
                </h3>
              </div>

              <ul className="space-y-2 sm:space-y-3 flex-1">
                {area.services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2 sm:gap-3">
                    <span className="text-brandGreen text-lg sm:text-xl font-bold mt-0.5 flex-shrink-0">✔</span>
                    <span className="font_avenir text-sm sm:text-base text-gray-700 leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkList;
