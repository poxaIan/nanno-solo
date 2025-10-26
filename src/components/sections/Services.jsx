import { servicesData } from "@/data/services";

const Services = () => {
  return (
    <section className='pt-10 pb-10 bg-bgGrayTeam'>
      <div className="container px-4">
        <div className="content">
          <h2 className="font-bold font_poppins text-3xl sm:text-4xl text-center mt-4 text-white">Oferecemos os Melhores Serviços</h2>
        </div>

        <div className="service_card_container grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10 sm:mt-[50px]">
          {servicesData.map(service => (
            <div key={service.id} className="service_card bg-white cursor-pointer shadow-brandShadow hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 max-w-[604px] rounded-[20px] mx-auto px-6 sm:px-9 pt-8 sm:pt-10 pb-9 sm:pb-11">
              <div className="card_content">
                <h4 className='font-poppins font-semibold text-xl sm:text-2xl md:text-[26px] text-black uppercase'>{service.title}</h4>
                <p className='font-poppins font-normal text-sm sm:text-base text-[#9D9D9D] capitalize mt-4 sm:mt-5'>{service.des}</p>
              </div>

              <div className="service_images_container mt-10 sm:mt-14">
                <div className="images flex items-center justify-between gap-3 sm:gap-4 lg:gap-8">
                  <img className="rounded-lg w-2/3 h-full object-cover max-w-[358px] max-h-[164px] hover:scale-105 transition-transform duration-300" src={service.image1} alt="services image" />
                  <img className="rounded-lg h-[164px] w-1/3 lg:w-[143px] object-cover hover:scale-105 transition-transform duration-300" src={service.image2} alt="services image" />
                </div>

                <div className="images flex items-center justify-between gap-2 sm:gap-3 lg:gap-8 mt-4 sm:mt-5">
                  <img className="rounded-lg w-1/3 lg:w-[257px] object-cover h-[220px] sm:h-[263px] hover:scale-105 transition-transform duration-300" src={service.image3} alt="services image" />
                  <img className="rounded-lg w-2/3 lg:w-[248px] object-cover h-[220px] sm:h-[263px] hover:scale-105 transition-transform duration-300" src={service.image4} alt="services image" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
