import './globals.css'
import 'swiper/css'
import 'swiper/css/pagination'

import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'

import ButtonWhats from '@/components/atoms/buttonWhats'
import Footer from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/header'

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
