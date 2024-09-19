'use client'

import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  YoutubeLogo,
} from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { IMenuItemsProps } from '@/@types'

import { Separator } from '../ui/separator'

const menuItems: IMenuItemsProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Serviços',
    href: '/servicos',
  },
  {
    label: 'Planos',
    href: '/planos',
  },
  {
    label: 'Conteúdos',
    href: '/conteudos',
  },
  {
    label: 'Como funciona',
    href: '/como-funciona',
  },
]

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-col items-center justify-center">
        <Separator
          orientation="horizontal"
          className="w-full bg-primary-100 opacity-50"
        />
        <section className="flex w-full items-center justify-center gap-8 p-8">
          <Link href={'/'}>
            <Image
              alt="eApurei Logo Image"
              src={'/logo.png'}
              aria-label="eApurei Logo Image"
              width={644}
              height={180}
              className="lg_2:w-40 w-52"
            />
          </Link>

          <Separator
            orientation="vertical"
            className="h-20 bg-primary-100 opacity-60"
          />

          <div className="flex flex-col items-center justify-center gap-4">
            <h3 className="lg_2:text-base text-lg font-bold text-primary-100">
              Redes Sociais
            </h3>

            <div className="flex items-center justify-center gap-4">
              <Link
                href="https://www.instagram.com/eapurei_contabilidade/"
                target="_blank"
                className="text-primary-500 hover:text-primary-400"
              >
                <InstagramLogo
                  size={28}
                  weight={'fill'}
                  className="lg_2:w-5 text-primary-100 duration-300 hover:scale-105 hover:opacity-70"
                />
              </Link>

              <Link
                href="https://www.instagram.com/eapurei_contabilidade/"
                target="_blank"
                className="text-primary-500 hover:text-primary-400"
              >
                <LinkedinLogo
                  size={28}
                  weight={'fill'}
                  className="lg_2:w-5 text-primary-100 duration-300 hover:scale-105 hover:opacity-70"
                />
              </Link>

              <Link
                href="https://www.instagram.com/eapurei_contabilidade/"
                target="_blank"
                className="text-primary-500 hover:text-primary-400"
              >
                <FacebookLogo
                  size={28}
                  weight={'fill'}
                  className="lg_2:w-5 text-primary-100 duration-300 hover:scale-105 hover:opacity-70"
                />
              </Link>

              <Link
                href="https://www.instagram.com/eapurei_contabilidade/"
                target="_blank"
                className="text-primary-500 hover:text-primary-400"
              >
                <YoutubeLogo
                  size={28}
                  weight={'fill'}
                  className="lg_2:w-5 text-primary-100 duration-300 hover:scale-105 hover:opacity-70"
                />
              </Link>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="h-20 bg-primary-100 opacity-60"
          />

          <nav className="flex items-center justify-center">
            <ul className="lg_1:text-sm lg_2:gap-2 lg_2:text-xs flex items-center justify-center gap-4 text-base font-bold text-primary-100">
              {menuItems.map((item, index) => {
                return (
                  <Link href={item.href} key={index}>
                    <li className="cursor-pointer border-b border-t border-transparent p-1 duration-300 hover:rounded-md hover:border-b-primary-100 hover:opacity-80">
                      {item.label}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
        </section>

        <p className="lg_2:text-[10px] w-full bg-primary-100 py-1 text-center text-xs font-normal text-white">
          Escritório de Contabilidade | Contabilidade Online | Mais de 5.000
          clientes satisfeitos | Todos os direitos reservados &copy; eApurei
          2022
        </p>
      </footer>
    </>
  )
}
