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
  title: 'Nanno Solos - Consultoria em Engenharia e Controle Tecnológico',
  description: 'Grandes problemas, Nanno soluções. Especialistas em geotecnia, pavimentação, controle tecnológico, sondagens, ensaios laboratoriais e consultoria técnica.',
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
