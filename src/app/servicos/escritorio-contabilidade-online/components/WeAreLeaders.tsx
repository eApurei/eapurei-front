'use client'

import {
  ArrowCounterClockwise,
  Clock,
  Coins,
  EnvelopeSimple,
  Trophy,
  Users,
} from '@phosphor-icons/react'
import { Separator } from '@radix-ui/react-dropdown-menu'

import { HighlightsProps } from '@/@types'
import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const highlights: HighlightsProps[] = [
  {
    icon: <Trophy className="h-8 w-8 text-primary-100" />,
    title: '10 anos de expertise contábil',
    description: 'Entregamos uma contabilidade segura e digital para você.',
  },
  {
    icon: <Clock className="h-8 w-8 text-primary-100" />,
    title: 'Agilidade na abertura do CNPJ',
    description: 'Abrimos seu CNPJ em até 5 dias em São Paulo.',
  },
  {
    icon: <ArrowCounterClockwise className="h-8 w-8 text-primary-100" />,
    title: 'Contabilidade completa',
    description: 'Além das nossas soluções para facilitar o seu dia a dia.',
  },
  {
    icon: <Users className="h-8 w-8 text-primary-100" />,
    title: 'Contadores certificados',
    description: 'Todo o nosso time de contadores possui registro no CRC.',
  },
  {
    icon: <Coins className="h-8 w-8 text-primary-100" />,
    title: 'Otimização tributária',
    description:
      'Mantemos seu CNPJ regularizado e pagando o mínimo de impostos.',
  },
  {
    icon: <EnvelopeSimple className="h-8 w-8 text-primary-100" />,
    title: 'Vários canais de atendimento',
    description: 'Nosso atendimento é via WhatsApp, telefone, chat e e-mail.',
  },
]

export default function WeAreLeaders() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 p-16 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="flex w-[90%] items-center justify-start gap-4 rounded-lg bg-primary-100 px-16 py-6">
        <div className="flex w-3/4 flex-col items-start justify-center gap-4">
          <h1 className="text-4xl font-bold text-white">
            Somos líderes em abertura de CNPJ no Brasil.
          </h1>

          <Separator className="h-[1px] w-full bg-tertiary-100" />

          <div className="flex items-center justify-center gap-12 text-tertiary-100">
            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold">+1200</h2>
              <p className="text-xl">Especialistas</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold">+70.000</h2>
              <p className="text-xl">Profissionais Atendidos</p>
            </div>

            <div className="flex flex-col items-center justify-center">
              <h2 className="text-2xl font-bold">+50</h2>
              <p className="text-xl">Cidades Atendidas</p>
            </div>
          </div>
        </div>
      </section>

      <div className="my-12 grid grid-cols-3 gap-8 px-20">
        {highlights.map((item, index) => (
          <div key={index} className="flex gap-4">
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h3 className="text-lg font-bold text-primary-100">
                {item.title}
              </h3>
              <p className="text-gray-700 dark:text-tertiary-100">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <ButtonComponent label="fale com um especialista" linkTo="#" />
    </main>
  )
}
