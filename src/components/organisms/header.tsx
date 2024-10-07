'use client'

import { HandCoins, Moon, Sun, Users } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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

export function Header() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false)
  const [isDropDown, setIsDropDown] = useState<boolean>(false)

  const handleDropDown = () => {
    setIsDropDown((prevState) => !prevState)
  }

  const handleClickInsideDropDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDarkMode(true)
    }
    document.documentElement.classList.add('duration-300')
  }, [])

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode)
    if (!isDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <>
      <header className="flex items-center justify-between px-8 py-3 dark:bg-dark-100 lg_2:px-2">
        <Link href={'/'} className="duration-300 hover:opacity-80">
          <Image
            alt="eApurei Logo"
            src={'/logo.png'}
            width={644}
            height={180}
            aria-label="eApurei Logo"
            className="w-48 lg_1:w-40 lg_2:w-28"
          />
        </Link>

        <nav className="flex items-center justify-center md_1:hidden">
          <ul className="flex items-center justify-center gap-4 text-base font-bold text-primary-100 lg_1:text-sm lg_2:gap-2 lg_2:text-xs">
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

        <div className="flex items-center justify-center gap-3 lg_1:gap-2 md_1:gap-4">
          <Link
            href={'#'}
            className="flex items-center gap-2 rounded-[3px] bg-gray-500 px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80 lg_1:text-xs lg_2:px-2 lg_2:py-1 md_1:hidden"
          >
            <Users size={20} weight="fill" className="text-white lg_1:w-4" />
            Área do Cliente
          </Link>

          <Link
            href={'#'}
            className="flex items-center gap-2 rounded-[3px] bg-primary-100 px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80 lg_1:text-xs lg_2:px-2 lg_2:py-1 md_1:hidden"
          >
            <HandCoins
              size={20}
              weight="fill"
              className="text-white lg_1:w-4"
            />
            Abrir empresa
          </Link>

          <button type="button" onClick={toggleDarkMode}>
            {isDarkMode ? (
              <Moon
                size={20}
                weight="fill"
                className="text-primary-100 duration-300 hover:scale-110"
              />
            ) : (
              <Sun
                size={20}
                className="text-primary-100 duration-300 hover:scale-110"
              />
            )}
          </button>

          <div className="relative" onClick={() => handleDropDown()}>
            <label className="hidden w-6 flex-col gap-[5.5px] md_1:flex">
              <input
                className="peer hidden"
                type="checkbox"
                onChange={handleDropDown}
              />
              <div className="h-[2px] w-1/2 origin-right rounded bg-primary-100 duration-500 peer-checked:-translate-x-[8px] peer-checked:-translate-y-[1px] peer-checked:rotate-[225deg]"></div>
              <div className="h-[2px] w-full rounded bg-primary-100 duration-500 peer-checked:-rotate-45"></div>
              <div className="h-[2px] w-1/2 origin-left place-self-end rounded bg-primary-100 duration-500 peer-checked:translate-x-[9px] peer-checked:translate-y-[1px] peer-checked:rotate-[225deg]"></div>
            </label>

            {isDropDown ? (
              <nav
                onClick={handleClickInsideDropDown}
                className="absolute -bottom-[19rem] right-0 drop-shadow-lg"
              >
                <ul className="flex min-w-40 flex-col items-center justify-center gap-2 rounded-md bg-gray-200 p-2 text-xs">
                  {menuItems.map((item, index) => {
                    return (
                      <Link
                        href={item.href}
                        key={index}
                        className="flex w-full flex-col items-center justify-center gap-2"
                      >
                        <li className="cursor-pointer border-b border-t border-transparent p-1 text-center font-bold text-gray-950 duration-300 hover:rounded-md hover:border-b-gray-500 hover:opacity-80">
                          {item.label}
                        </li>

                        <Separator
                          orientation="horizontal"
                          className="w-1/2 bg-gray-400 opacity-50"
                        />
                      </Link>
                    )
                  })}

                  <Link
                    href={'#'}
                    className="flex w-full items-center gap-2 rounded-[3px] bg-gray-500 px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80 lg_1:text-xs lg_2:px-2 lg_2:py-1"
                  >
                    <Users
                      size={20}
                      weight="fill"
                      className="text-white lg_1:w-4"
                    />
                    Área do Cliente
                  </Link>

                  <Link
                    href={'#'}
                    className="flex w-full items-center gap-2 rounded-[3px] bg-primary-100 px-3 py-2 text-sm font-bold text-white duration-300 hover:opacity-80 lg_1:text-xs lg_2:px-2 lg_2:py-1"
                  >
                    <HandCoins
                      size={20}
                      weight="fill"
                      className="text-white lg_1:w-4"
                    />
                    Abrir empresa
                  </Link>
                </ul>
              </nav>
            ) : null}
          </div>
        </div>
      </header>
    </>
  )
}
