import { Poppins, Plus_Jakarta_Sans } from 'next/font/google'
import localFont from "next/font/local"
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ProgressbarProvider from '@/components/ui/ProgressbarProvider'
import WhatsAppButton from '@/components/ui/WhatsAppButton'




const poppins = Poppins({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins"
})
const jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta_sans"
})

const avenir = localFont({
  src: "../font/Avenir Regular.ttf",
  variable: "--font-avenir_regular"
})


export const metadata = {
  title: 'Nanno Solo - Gerenciamento de Projetos e Consultoria em Engenharia',
  description: 'Oferecemos projetos, consultorias e gerenciamento com foco em controle tecnológico e qualidade técnica para construções públicas e privadas.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable} ${jakarta_sans.variable} ${avenir.variable}`}>
        <ProgressbarProvider>
          <Navbar />
          {children}
          <Footer />
          <WhatsAppButton />
        </ProgressbarProvider>
      </body>
    </html>
  )
}
