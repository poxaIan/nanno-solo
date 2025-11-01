"use client"
import { FaLightbulb, FaRocket, FaTrophy, FaUsers } from "react-icons/fa";
import { companyHistory } from "@/data/company-history";

const CompanyHistory = () => {
  const timelineStyles = [
    {
      bgGradient: "from-orange-500/15 to-yellow-500/15",
      iconBg: "bg-gradient-to-br from-orange-500 to-yellow-500",
      border: "border-orange-300",
      yearColor: "text-orange-600"
    },
    {
      bgGradient: "from-green-500/15 to-emerald-500/15",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
      border: "border-green-300",
      yearColor: "text-green-600"
    },
    {
      bgGradient: "from-blue-500/15 to-cyan-500/15",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      border: "border-blue-300",
      yearColor: "text-blue-600"
    },
    {
      bgGradient: "from-yellow-400/20 to-orange-400/20",
      iconBg: "bg-gradient-to-br from-yellow-400 to-orange-400",
      border: "border-yellow-400",
      yearColor: "text-yellow-700"
    }
  ];

  const icons = [
    <FaLightbulb className="text-3xl" key="lightbulb" />,
    <FaRocket className="text-3xl" key="rocket" />,
    <FaTrophy className="text-3xl" key="trophy" />,
    <FaUsers className="text-3xl" key="users" />
  ];

  const milestones = companyHistory.milestones.map((milestone, index) => ({
    ...milestone,
    icon: icons[index % icons.length],
    style: timelineStyles[index % timelineStyles.length]
  }));

  return (
    <section className="pt-16 sm:pt-20 pb-10 bg-white">
      <div className="container px-4">
        {/* Título */}
        <div className="content text-center max-w-[800px] mx-auto">
          <h2 className="font-bold font_poppins text-3xl sm:text-4xl text-black">
            Nossa História
          </h2>
          <p className="font_avenir text-base sm:text-lg text-gray-600 mt-4 sm:mt-6">
            {companyHistory.introduction}
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-12 sm:mt-16 max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className={`milestone-card bg-gradient-to-br ${milestone.style.bgGradient} p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${milestone.style.border}`}
              >
                {/* Ano e Ícone */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`icon-container ${milestone.style.iconBg} text-white rounded-full p-4 flex items-center justify-center shadow-lg`}>
                    {milestone.icon}
                  </div>
                  <span className={`text-4xl sm:text-5xl font-bold ${milestone.style.yearColor} font-poppins`}>
                    {milestone.year}
                  </span>
                </div>

                {/* Título */}
                <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-black mb-3">
                  {milestone.title}
                </h3>

                {/* Descrição */}
                <p className="font_avenir text-base text-gray-700 leading-relaxed">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Missão, Visão, Valores */}
        <div className="mt-16 sm:mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center p-6 sm:p-8 bg-brandYellow/5 rounded-xl hover:bg-brandYellow/10 transition-all duration-300 hover:scale-105 cursor-pointer">
            <h4 className="font-poppins font-bold text-xl sm:text-2xl text-brandGreen mb-3">
              {companyHistory.values.mission.title}
            </h4>
            <p className="font_avenir text-base text-gray-700">
              {companyHistory.values.mission.description}
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 bg-brandGreen/5 rounded-xl hover:bg-brandGreen/10 transition-all duration-300 hover:scale-105 cursor-pointer">
            <h4 className="font-poppins font-bold text-xl sm:text-2xl text-brandGreen mb-3">
              {companyHistory.values.vision.title}
            </h4>
            <p className="font_avenir text-base text-gray-700">
              {companyHistory.values.vision.description}
            </p>
          </div>

          <div className="text-center p-6 sm:p-8 bg-brandYellow/5 rounded-xl hover:bg-brandYellow/10 transition-all duration-300 hover:scale-105 cursor-pointer">
            <h4 className="font-poppins font-bold text-xl sm:text-2xl text-brandGreen mb-3">
              {companyHistory.values.values.title}
            </h4>
            <p className="font_avenir text-base text-gray-700">
              {companyHistory.values.values.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyHistory;

