'use client'

import { Calculator, Files, Handshake, UserCheck } from '@phosphor-icons/react'

import { BenefitsProps } from '@/@types'

const benefits: BenefitsProps[] = [
  {
    description:
      'Contrate um de nossos planos e comece a receber pagamentos diretamente da empresa.',
    icon: Handshake,
    iconSize: 40,
  },
  {
    description:
      'Garantimos sua empresa regularizada e pagando o mínimo de impostos.',
    icon: Files,
    iconSize: 40,
  },
  {
    description:
      'Temos especialistas no seu segmento e atendimento até às 22h.',
    icon: UserCheck,
    iconSize: 40,
  },
  {
    description:
      'Conte com serviços aliados à contabilidade para facilitar seu dia a dia.',
    icon: Calculator,
    iconSize: 40,
  },
]

export default function Hero() {
  return (
    <main className="flex w-full flex-col items-center justify-center bg-gray-100 px-8 pb-12 pt-20 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-3xl font-bold dark:text-white">
        Confira alguns dos nossos benefícios:
      </h1>

      <div className="flex w-full items-center justify-center py-4">
        <ul className="flex w-full items-center justify-center gap-4">
          {benefits.map((item, index) => {
            return (
              <li
                key={index}
                className="flex flex-col items-center justify-center gap-2 p-4 text-center dark:text-white"
              >
                <item.icon size={item.iconSize} />
                {item.description}
              </li>
            )
          })}
        </ul>
      </div>
    </main>
  )
}
