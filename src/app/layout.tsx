import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
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
      <body className={`antialiased ${roboto.className}`}>{children}</body>
    </html>
  )
}
