'use client'

import { HandCoins, Sun, Users } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

import { IMenuItemsProps } from '@/@types'

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

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between px-8 py-3">
        <Link href={'/'} className="duration-300 hover:opacity-80">
          <Image
            alt="eApurei Logo"
            src={'/logo.png'}
            width={644}
            height={180}
            aria-label="eApurei Logo"
            className="w-48"
          />
        </Link>

        <nav className="flex items-center justify-center gap-6">
          <ul className="flex items-center justify-center gap-4 text-base font-bold text-primary-100">
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

        <div className="flex items-center justify-center gap-3">
          <Link
            href={'#'}
            className="flex items-center gap-2 rounded-[3px] bg-gray-500 px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80"
          >
            <Users size={20} weight="fill" className="text-white" />
            Área do Cliente
          </Link>

          <Link
            href={'#'}
            className="flex items-center gap-2 rounded-[3px] bg-primary-100 px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80"
          >
            <HandCoins size={20} weight="fill" className="text-white" />
            Abrir empresa
          </Link>

          <button type="submit">
            <Sun
              size={20}
              className="text-primary-100 duration-300 hover:scale-110"
            />
          </button>
        </div>
      </header>
    </>
  )
}
