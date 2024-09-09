import { Triangle, WhatsappLogo } from '@phosphor-icons/react'
import Link from 'next/link'

export default function ButtonWhats() {
  return (
    <div className="group absolute bottom-4 right-5 flex flex-col items-end justify-center gap-4 rounded-full bg-white p-1">
      <span className="relative hidden rounded-md bg-gray-500 p-2 text-sm font-semibold text-white group-hover:inline-block group-hover:duration-500">
        Entre em contato!
        <Triangle
          size={12}
          weight="fill"
          className="absolute -bottom-2 right-[0.65rem] rotate-180 text-gray-500"
        />
      </span>
      <Link
        href={
          'https://wa.me/5515991901126?text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20contabilidade,%20por%20gentileza.'
        }
      >
        <WhatsappLogo
          size={44}
          weight="fill"
          className="animate-pulse text-primary-100 duration-500 hover:scale-105"
        />
      </Link>
    </div>
  )
}
