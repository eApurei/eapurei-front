'use client'

import { HandCoins, Users } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'

export function Header() {
  return (
    <>
      <header className="flex items-center justify-between py-3">
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

        <nav>
          <ul className="text-primary-100 flex items-center justify-center gap-4 text-base font-bold">
            <li className="hover:border-b-primary-100 cursor-pointer border-b border-t border-transparent p-1 duration-300 hover:rounded-md hover:opacity-80">
              Home
            </li>
            <li className="hover:border-b-primary-100 cursor-pointer border-b border-t border-transparent p-1 duration-300 hover:rounded-md hover:opacity-80">
              Serviços
            </li>
            <li className="hover:border-b-primary-100 cursor-pointer border-b border-t border-transparent p-1 duration-300 hover:rounded-md hover:opacity-80">
              Planos
            </li>
            <li className="hover:border-b-primary-100 cursor-pointer border-b border-t border-transparent p-1 duration-300 hover:rounded-md hover:opacity-80">
              Conteúdos
            </li>
            <li className="hover:border-b-primary-100 cursor-pointer border-b border-t border-transparent p-1 duration-300 hover:rounded-md hover:opacity-80">
              Como funciona
            </li>
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
            className="bg-primary-100 flex items-center gap-2 rounded-[3px] px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80"
          >
            <HandCoins size={20} weight="fill" className="text-white" />
            Abrir empresa
          </Link>
        </div>
      </header>
    </>
  )
}
