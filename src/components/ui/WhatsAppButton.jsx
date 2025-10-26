"use client"
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const phoneNumber = "5531991453062"; // Formato internacional sem + e sem espaços
  const message = "Olá! Gostaria de saber mais informações sobre os serviços."; // Mensagem pré-definida (opcional)
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
      style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%'
      }}
      aria-label="Fale conosco no WhatsApp"
    >
      <FaWhatsapp className="text-3xl" />
      
      {/* Tooltip opcional - aparece ao passar o mouse */}
      <span className="absolute right-full mr-3 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Fale conosco!
      </span>
    </a>
  );
};

export default WhatsAppButton;

