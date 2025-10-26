import React from "react";
import { partners } from "@/data/partners";

const Brand = () => {
  return (
    <div className="py-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
          <div className="flex items-center gap-3 md:gap-4">
            <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black">PARCERIAS</span>
            <div className="h-20 sm:h-28 md:h-36 w-[3px] md:w-[4px] bg-black" />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10">
            {partners.map((brand) => (
              <img
                key={brand.id}
                src={brand.image}
                alt={brand.name}
                className="w-48 sm:w-64 md:w-80 lg:w-96 h-32 sm:h-40 md:h-48 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brand;
