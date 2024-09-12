'use client'

import './globals.css'

import { Raleway, Roboto } from 'next/font/google'

import ButtonWhats from '@/components/atoms/ButtonWhats'
import Footer from '@/components/organisms/Footer'
import { Header } from '@/components/organisms/Header'

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
  subsets: ['latin'],
})

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  preload: true,
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <title>eApurei Contabilidade</title>
      </head>
      <body className={`relative antialiased ${raleway.className}`}>
        <Header />
        {children}
        <ButtonWhats />
        <Footer />
      </body>
    </html>
  )
}
