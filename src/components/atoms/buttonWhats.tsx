'use client'

import { WhatsappLogo } from '@phosphor-icons/react'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'

export default function ButtonWhats() {
  return (
    <div className="group fixed bottom-8 right-5 z-50 flex flex-col items-end justify-center gap-4 rounded-full bg-white p-1 lg_2:px-2">
      <Tooltip id="tooltip" className="tooltip-custom" />
      <Link
        href={
          'https://wa.me/5515991901126?text=Ol%C3%A1,%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20contabilidade,%20por%20gentileza.'
        }
        target="_blank"
        data-tooltip-id="tooltip"
        data-tooltip-content="Entre em contato!"
        data-tooltip-place="top-end"
        data-tooltip-offset={15}
      >
        <WhatsappLogo
          size={44}
          weight="fill"
          className="animate-pulse text-primary-100 duration-500 hover:scale-105 lg_2:w-8"
        />
      </Link>
    </div>
  )
}
