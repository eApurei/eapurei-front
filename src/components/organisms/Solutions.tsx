'use client'

import {
  ChartLineUp,
  ChartPieSlice,
  CreditCard,
  Fingerprint,
  Headset,
  Icon,
  IconWeight,
} from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'

import { roboto } from '@/lib/fonts'

import ButtonComponent from '../atoms/ButtonComponent'

const solutions: {
  icon: Icon
  label: string
  weight?: IconWeight
  description: string
}[] = [
  {
    icon: Headset,
    label: 'Forma de Atendimento',
    weight: 'fill',
    description:
      'Na eApurei você tem a opção de escolher a forma de atendimento ideal para o seu perfil: Vídeo-Conferência, WhatsApp, Chat, Telefone e por E-mail.',
  },
  {
    icon: Fingerprint,
    label: 'Certificado Digital PJ',
    description:
      'Na eApurei, além do custo zero na abertura ou transferência da sua empresa, a 1ª Emissão do Certificado Digital também tem custo zero.',
  },
  {
    icon: CreditCard,
    label: 'Conta Bancária PJ',
    weight: 'fill',
    description:
      'Nos responsabilizamos pela abertura da Conta Bancária PJ com um de nossos bancos digitais parceiros.',
  },
  {
    icon: ChartPieSlice,
    label: 'Gestão Financeira',
    weight: 'fill',
    description:
      'Através do Aplicativo eApurei Contabilidade você recebe notificações sobre as novidades da sua empresa: impostos, documentos armazenados, folha de pagamento e muito mais..',
  },
  {
    icon: ChartLineUp,
    label: 'Contabilidade Geral',
    description:
      'Nos responsabilizamos por apurar e gerar os impostos da sua empresa, bem como pela entrega de declarações ao fisco',
  },
]

export default function Solutions() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className="lg_2:px-2 flex w-full flex-col items-center justify-center gap-4 bg-white p-8">
      <h1 className="lg_1:text-2xl lg_2:text-xl text-3xl font-bold uppercase">
        Soluções ideais para o seu negócio.
      </h1>

      <nav className="mt-8">
        <ul className="lg_1:gap-2 flex select-none flex-wrap items-center justify-center gap-4">
          {solutions.map(({ icon: Icon, label, weight }, index) => (
            <li
              key={index}
              className={`${activeIndex === index ? 'bg-secondary-100 text-white' : ''} lg_1:text-sm lg_2:text-xs lg_1:px-2 lg_2:py-1 flex cursor-pointer items-center justify-center gap-2 rounded-md border border-secondary-100 px-4 py-2 font-bold text-secondary-100 duration-300 hover:bg-secondary-100 hover:text-white`}
              onClick={() => setActiveIndex(index)}
            >
              <Icon weight={weight} size={24} className="lg_2:w-4" />
              {label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex w-full flex-col items-center justify-center">
        <Image
          alt={`Solution ${activeIndex + 1} Image`}
          src={`/solutions/${activeIndex + 1}.png`}
          width={1080}
          height={1080}
          className="lg_2:w-96 w-[32rem]"
          aria-label={`Solution ${activeIndex + 1} Image`}
        />

        <p
          className={`lg_2:text-xs w-[70%] rounded-md bg-grey-950 p-4 text-center text-base font-bold ${roboto.className}`}
        >
          {solutions[activeIndex].description}
        </p>
      </div>

      <div className="mt-12 flex items-center justify-center gap-4">
        <ButtonComponent
          label="Abra sua empresa grátis"
          linkTo="https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20abrir%20a%20minha%20empresa,%20por%20gentileza."
        />
        <ButtonComponent
          label="troque de contador"
          linkTo="https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20trocar%20de%20contador,%20por%20gentileza."
        />
      </div>
    </div>
  )
}
