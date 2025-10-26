import { workLists } from "@/data/work-list";

const WorkList = () => {
  return (
    <section className="pt-12 sm:pt-16 bg-brandYellow">
      <div className="container px-4">
        <div className="section_content">
          <p className="text-3xl sm:text-4xl md:text-5xl mb-4 pb-8 sm:pb-12 font-bold font_poppins">O que Fazemos</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {workLists.map((item, index) => (
            <div key={index} className="card md:max-w-[380px] h-full flex flex-col items-start justify-start hover:scale-105 transition-transform duration-300 cursor-pointer">
              <div className="flex items-center gap-3 sm:gap-4">
                <img src={item.icon} alt="ícone" className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0" />
                <h3 className="font-poppins font-semibold text-xl sm:text-2xl text-black">
                  {item.title}
                </h3>
              </div>

              <p className="font_avenir font-normal text-base sm:text-lg text-black mt-4">
                {item.des}
              </p>
            </div>
          ))}
        </div>

        <h2 className="sub_heading text-center text-2xl sm:text-3xl md:text-4xl py-12 sm:py-16">
          Soluções perfeitas para o crescimento do seu projeto
        </h2>
      </div>
    </section>
  );
};

export default WorkList;
