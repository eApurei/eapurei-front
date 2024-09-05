import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/header'

const raleway = Raleway({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  preload: true,
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'eApurei',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`px-8 antialiased ${raleway.className}`}>
        <Header />
        {children}
      </body>
    </html>
  )
}
