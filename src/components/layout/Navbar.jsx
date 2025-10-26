"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { NAV_ITEMS } from "@/config/constants";

const Navbar = () => {
  const currentPath = usePathname();
  const [mobileActive, setMobileActive] = useState(false);

  return (
    <div className="w-full bg-bgmenu shadow-sm z-50 relative">
      <div className="container mx-auto">
        <nav className="lg:flex items-center hidden justify-between py-4">
          <div className="logo_container">
            <img src="/images/Hero/logo.png" alt="logo" className="h-24" />
          </div>

          <div className="nav_items">
            <ul className="lg:flex items-center gap-[30px] hidden md:text-xs md:gap-4 lg:text-sm xl:gap-[30px] xl:text-base">
              {NAV_ITEMS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${currentPath === href ? "text-brandYellow border-b border-brandYellow" : "text-black"} text-2xl p-[10px] text-center font-poppins font-medium capitalize hover:scale-110 transition-transform duration-300 inline-block`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <nav className="flex items-center lg:hidden justify-between py-4">
          <div className="logo_container">
            <img src="/images/Hero/logo.png" alt="logo" className="h-16" />
          </div>
          <div className="menuBtn">
            <button 
              className="text-brandGreen text-3xl p-2" 
              onClick={() => setMobileActive(!mobileActive)}
              aria-label="Menu"
            >
              {mobileActive ? <IoClose className="text-red-700" /> : <IoMenu />}
            </button>
          </div>
        </nav>

        {mobileActive && (
          <ul className="bg-greenLite absolute text-lg top-[100%] w-full pt-7 pl-8 pb-16 grid grid-cols-1 gap-5 rounded-lg transition-all duration-300 shadow-md shadow-greenLite z-50">
            {NAV_ITEMS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  onClick={() => setMobileActive(false)}
                  href={href}
                  className={`${currentPath === href ? "text-brandGreen" : "text-black"} p-[10px] text-center font-poppins font-medium capitalize min-h-[44px] flex items-center hover:translate-x-2 transition-transform duration-300`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
