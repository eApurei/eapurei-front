import './globals.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'atropos/css'

import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import ButtonWhats from '@/components/ButtonWhats'
import Footer from '@/components/Footer'
import { Header } from '@/components/Header'

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: {
    template: '%s | eApurei Contabilidade',
    default: 'eApurei Contabilidade',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`relative antialiased ${raleway.className}`}>
        <Header />
        <ButtonWhats />
        {children}
        <Footer />
      </body>
    </html>
  )
}
