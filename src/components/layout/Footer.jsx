'use client'

import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn } from 'react-icons/fa'
import { PiInstagramLogoFill } from "react-icons/pi"
import { MdEmail } from "react-icons/md"
import { SOCIAL_LINKS, COMPANY_INFO } from "@/config/constants"

const EmailScrollIcon = () => {
  const handleScrollToEmail = () => {
    const emailField = document.getElementById("contato")
    if (emailField) {
      emailField.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <button
      onClick={handleScrollToEmail}
      className="cursor-pointer w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300"
      title="Ir para o campo de e-mail"
      aria-label="Ir para o campo de e-mail"
    >
      <MdEmail className="text-xl" />
    </button>
  )
}

const Footer = () => {
  return (
    <section className='bg-brandYellow pt-10 pb-8'>
      <div className="container px-4">
        <div className="footer_items_container grid grid-cols-1 md:grid-cols-2 gap-y-8 lg:gap-y-0 lg:flex lg:items-start lg:justify-between">
          <div className="logo_items max-w-full lg:max-w-[460px]">
            <img src="/images/Hero/logo_amarelo.png" alt="logo" className="h-28 sm:h-36 mx-auto md:mx-0" />
            <p className='font_avenir font-normal text-base sm:text-lg md:text-xl text-black text-center md:text-justify mt-3'>
              {COMPANY_INFO.description}
            </p>

            <div className="social_links flex items-center justify-center md:justify-start gap-4 mt-5">
              <Link
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className='w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300'
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-xl" />
              </Link>

              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className='w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-gray-100 hover:scale-110 transition-all duration-300'
                aria-label="Instagram"
              >
                <PiInstagramLogoFill className="text-xl" />
              </Link>

              <EmailScrollIcon />
            </div>
          </div>

          <div className="quick_links text-center md:text-left">
            <div className="links_tittle">
              <p className='font-poppins font-semibold text-lg sm:text-xl text-black pt-4 md:pt-10'>Links rápidos</p>
            </div>
            <div className="links mt-4 flex flex-col items-center md:items-start justify-start gap-4 sm:gap-6">
              <Link href="/team" className='font_avenir font-normal text-base sm:text-lg text-black hover:text-white hover:translate-x-2 duration-300 min-h-[44px] flex items-center'>Sobre Nós</Link>
              <Link href="/services" className='font_avenir font-normal text-base sm:text-lg text-black hover:text-white hover:translate-x-2 duration-300 min-h-[44px] flex items-center'>Serviços</Link>
              <Link href="/projects" className='font_avenir font-normal text-base sm:text-lg text-black hover:text-white hover:translate-x-2 duration-300 min-h-[44px] flex items-center'>Portfolio</Link>
            </div>
          </div>

          <div className="address text-center md:text-left">
            <div className="links_tittle">
              <p className='font-poppins font-semibold text-lg sm:text-xl text-black pt-4 md:pt-10'>Endereço</p>
            </div>
            <p className='font_avenir font-normal text-base sm:text-lg md:text-xl text-black mt-4 sm:mt-6 max-w-[250px] mx-auto md:mx-0'>
              {COMPANY_INFO.address.line1}<br />
              {COMPANY_INFO.address.line2}<br />
              {COMPANY_INFO.address.line3}
            </p>
          </div>
        </div>

        <div className="copy_rights mt-8 sm:mt-12 text-center md:text-left">
          <p className='font_avenir font-normal text-sm sm:text-base md:text-lg lg:text-xl text-black'>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Footer
