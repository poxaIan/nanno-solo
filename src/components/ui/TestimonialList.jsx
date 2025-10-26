import React from "react";

const getData = async () => {
  return [
    {
      id: 1,
      name: "João Silva",
      designation: "Engenheiro Civil",
      msg: "O serviço foi excelente! Recomendo totalmente.",
      image: "/images/testimonials/logoOficial.png",
    },
    {
      id: 2,
      name: "Maria Oliveira",
      designation: "Topógrafa",
      msg: "Profissionais muito competentes e atenciosos.",
      image: "/images/testimonials/logoOficial.png",
    },
    {
      id: 3,
      name: "Carlos Santos",
      designation: "Consultor Ambiental",
      msg: "Resultado muito acima das expectativas!",
      image: "/images/testimonials/logoOficial.png",
    },
  ];
};

const TestimonialList = async () => {
  const testimonials = await getData();

  return (
    <section className="pt-16 pb-20">
      <div className="container">
        <div className="content">
          <p className="tagline_text">Testimonial List</p>
          <h2 className="sub_heading mt-4 max-w-[500px]">
            Better Agency/SEO Solution At Your Fingertips
          </h2>
        </div>

        <div className="testimonial_card_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 mt-[50px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial_card bg-white shadow-brandShadow px-6 py-12 max-w-[392px] mx-auto rounded-[20px]"
            >
              <div className="image_container flex items-center justify-center">
                <img
                  className="rounded-[20px] w-[100px] h-[100px] object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
              </div>
              <p className="font-poppins font-normal text-[#9D9D9D] capitalize text-center mt-10">
                {testimonial.msg}
              </p>
              <h4 className="font-poppins font-semibold text-black text-[26px] uppercase text-center mt-7">
                {testimonial.name}
              </h4>
              <p className="font-poppins font-normal text-black mt-[10px] text-center">
                {testimonial.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialList;

