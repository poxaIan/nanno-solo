"use client"
import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('') // 'loading', 'success', 'error'
  const [message, setMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Por favor, insira um e-mail válido.')
      setTimeout(() => setStatus(''), 3000)
      return
    }

    setStatus('loading')

    try {
      // Configuração do EmailJS
      const serviceID = 'service_5mmfyqp'
      const templateID = 'template_rp7xtek'
      const publicKey = '1W6FVe6iqtLHobIE2'

      const templateParams = {
        to_email: 'ian.mgsouza@gmail.com',
        from_email: email,
        message: `Novo contato do site: ${email} deseja receber informações sobre os serviços.`
      }

      await emailjs.send(serviceID, templateID, templateParams, publicKey)
      
      setStatus('success')
      setMessage('E-mail enviado com sucesso! Entraremos em contato em breve.')
      setEmail('')
      setTimeout(() => setStatus(''), 5000)
    } catch (error) {
      console.error('Erro ao enviar email:', error)
      setStatus('error')
      setMessage('Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.')
      setTimeout(() => setStatus(''), 5000)
    }
  }

  const whatsappUrl = "https://wa.me/5531991453062?text=" + encodeURIComponent("Olá! Gostaria de saber mais informações sobre os serviços.")

  return (
    <section className='pb-16 sm:pb-24 pt-16 sm:pt-24 bg-white text-black'>
      <div className="container px-4">
        <p className='tagline_text text-center text-black text-sm sm:text-base'>ENTRE EM CONTATO</p>
        <h2 className='sub_heading max-w-[600px] mx-auto text-center capitalize mt-5 text-2xl sm:text-3xl md:text-4xl'>
          Receba Conteúdo Técnico Direto da Nanno Solo
        </h2>
        <p className='font_avenir text-[#8B8B8B] font-medium text-center mt-3 text-sm sm:text-base px-4'>
          Deixe seu e-mail e receba informações sobre nossas soluções em solos, pavimentação e controle tecnológico.
        </p>
        
        {/* Opções de contato */}
        <div className="max-w-[700px] mx-auto mt-8 sm:mt-10 px-4">
          {/* Formulário de Email */}
          <form onSubmit={handleSubmit} id="contato" className="mb-6">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:relative">
              <input
                className='w-full border border-black py-4 sm:py-5 px-4 placeholder:text-[#8B8B8B] focus:outline-brandOrange rounded sm:rounded-none text-sm sm:text-base'
                placeholder='Seu melhor e-mail aqui!'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === 'loading'}
                required
              />
              <button 
                type="submit"
                disabled={status === 'loading'}
                className='bg-brandYellow py-4 px-6 font-poppins font-medium text-white sm:absolute sm:right-2 sm:top-1/2 sm:-translate-y-1/2 rounded sm:rounded-none text-sm sm:text-base min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed hover:bg-opacity-90 transition-all flex items-center justify-center gap-2'
              >
                <MdEmail className="text-xl" />
                {status === 'loading' ? 'Enviando...' : 'Enviar'}
              </button>
            </div>
            
            {/* Mensagens de status - SEM DELAY */}
            {status === 'success' && (
              <div className="mt-4 p-4 rounded text-center bg-green-100 text-green-800 border border-green-300">
                {message}
              </div>
            )}
            {status === 'error' && (
              <div className="mt-4 p-4 rounded text-center bg-red-100 text-red-800 border border-red-300">
                {message}
              </div>
            )}
          </form>

          {/* Divisor "OU" */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-[1px] bg-gray-300"></div>
            <span className="text-gray-500 font-medium text-sm">OU</span>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>

          {/* Botão WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white py-4 px-6 rounded-lg transition-all duration-300 font-poppins font-medium text-base sm:text-lg shadow-md hover:shadow-lg hover:scale-[1.02] min-h-[56px]"
          >
            <FaWhatsapp className="text-2xl sm:text-3xl" />
            Fale conosco pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
