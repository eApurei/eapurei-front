'use client'

import {
  CoinVertical,
  CreditCard,
  PixLogo,
  Prohibit,
} from '@phosphor-icons/react'

import { roboto } from '@/lib/fonts'

const advantages = [
  {
    icon: <Prohibit size={40} className="text-primary-100" />,
    title: 'Isento de mensalidades',
    description: 'Sem cobrança de taxas ou tarifas extras.',
  },
  {
    icon: <CoinVertical size={40} className="text-primary-100" />,
    title: 'Recebimento em 2 dias úteis',
    description: 'Faça cobranças no cartão e receba em 2 dias úteis*',
  },
  {
    icon: <CreditCard size={40} className="text-primary-100" />,
    title: 'Cartão de Crédito',
    description: 'Múltiplas bandeiras com opção de venda parcelada em até 12x.',
  },
  {
    icon: <PixLogo size={40} className="text-primary-100" />,
    title: 'PIX',
    description: 'Você recebe o valor do pagamento na sua conta no mesmo dia.',
  },
]

export default function WhyIsCoverYourCustomerTheBestSolution() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 pb-12 pt-40 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="flex-1 text-4xl font-bold text-primary-100">
        Por que o Cobre seu Cliente é a melhor solução?
      </h1>

      <section className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 px-20">
        {advantages.map((content, index) => (
          <div
            key={index}
            className="flex min-h-52 max-w-72 flex-col items-start justify-start gap-2 rounded-md bg-tertiary-50 p-4 shadow-md"
          >
            {content.icon}

            <h3 className="text-xl font-bold text-primary-100">
              {content.title}
            </h3>

            <p>{content.description}</p>
          </div>
        ))}
      </section>

      <p className="mt-12 text-sm text-grey-100">
        *Para as transações que não caiam em análise.
      </p>
    </main>
  )
}
