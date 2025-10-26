import Brand from "../ui/Brand";
import Link from "next/link";
import { HERO_CONTENT } from "@/config/constants";

const Hero = () => {
  const title = (
    <>
      <span className="text-brandYellow">{HERO_CONTENT.title}</span>{" "}
      {HERO_CONTENT.subtitle}
    </>
  );

  return (
    <section className="pt-0 pb-9">
      <div className="bg-black text-[#acacad] py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center container mx-auto px-4 gap-8">
          <div className="content_container mt-5 md:mt-0">
            <h1 className="leading-tight sm:leading-[50px] md:leading-[65px] text-2xl sm:text-3xl md:text-[40px] font-bold font_poppins max-w-[550px] text-left">
              {title}
            </h1>
            <p className="font_avenir text-base sm:text-lg font-normal max-w-[600px] text-left mt-4 sm:mt-6 text-white">
              {HERO_CONTENT.description}
            </p>
            <Link href="/services">
              <button className="font-poppins font-normal text-base sm:text-lg text-white mt-6 sm:mt-8 md:mt-[50px] bg-brandGreen px-6 sm:px-[30px] py-4 sm:py-5 hover:bg-brandGreen/90 hover:scale-105 duration-300 rounded min-h-[44px] transition-all shadow-md hover:shadow-lg">
                Conheça Nossos Serviços
              </button>
            </Link>
          </div>

          <div className="w-full order-first md:order-last lg:px-4">
            <div className="flex flex-wrap gap-2">
              <img className="w-[calc(33.333%-5px)] h-40 sm:h-48 md:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" src={HERO_CONTENT.images[0]} alt="imagem 1" />
              <img className="w-[calc(66.666%-5px)] h-40 sm:h-48 md:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" src={HERO_CONTENT.images[1]} alt="imagem 2" />
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              <img className="w-[calc(66.666%-5px)] h-40 sm:h-48 md:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" src={HERO_CONTENT.images[2]} alt="imagem 3" />
              <img className="w-[calc(33.333%-5px)] h-40 sm:h-48 md:h-64 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer" src={HERO_CONTENT.images[3]} alt="imagem 4" />
            </div>
          </div>
        </div>
      </div>

      <div className="brand_container mt-12 sm:mt-16 md:mt-20">
        <Brand />
      </div>
    </section>
  );
};

export default Hero;
