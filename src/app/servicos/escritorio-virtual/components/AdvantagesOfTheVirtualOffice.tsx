'use client'

import {
  BuildingOffice,
  Clock,
  EnvelopeSimpleOpen,
  Mailbox,
  MapPinLine,
  PiggyBank,
} from '@phosphor-icons/react'

import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const advantages = [
  {
    icon: <BuildingOffice size={40} className="text-primary-100" />,
    title: 'Domicílio Fiscal não associado ao residencial',
    description:
      'Preservamos sua privacidade e segurança ao fornecer um endereço fiscal para seu CNPJ, sem necessidade de divulgar seu endereço pessoal.',
  },
  {
    icon: <MapPinLine size={40} className="text-primary-100" />,
    title: 'Garantia de liberdade geográfica sem custos',
    description:
      'Se você mudar de endereço residencial, não precisará se preocupar com os custos de alteração de endereço no seu contrato empresarial.',
  },
  {
    icon: <Mailbox size={40} className="text-primary-100" />,
    title: 'Endereço empresarial com credibilidade',
    description:
      'Ofereça aos seus clientes um endereço comercial confiável, inclusive com a possibilidade de recebimento de correspondências.',
  },
  {
    icon: <Clock size={40} className="text-primary-100" />,
    title: 'Agilidade no processo de abertura da empresa',
    description:
      'Mais agilidade em todo processo de abertura da sua empresa, já que você já terá um endereço fiscal para associar ao CNPJ.',
  },
  {
    icon: <EnvelopeSimpleOpen size={40} className="text-primary-100" />,
    title: 'Receba correspondências de forma digital',
    description:
      'Nós digitalizamos e enviamos todas as suas correspondências para o seu e-mail, de maneira simples, rápida e prática.',
  },
  {
    icon: <PiggyBank size={40} className="text-primary-100" />,
    title: 'Economize no IPTU sem escritório físico',
    description:
      'Evite os altos custos de um escritório físico. Economize cerca de 50% do IPTU com um endereço fiscal separado do residencial.',
  },
]

export default function AdvantagesOfTheVirtualOffice() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="flex-1 text-4xl font-bold text-primary-100">
        Vantagens do Escritório Virtual eApurei.
      </h1>

      <p className="dark:text-tertiary-50">
        Conheça os benefícios de ter um endereço fiscal, também conhecido como
        domicílio fiscal, para a sua empresa.
      </p>

      <section className="mt-12 flex w-full flex-wrap items-center justify-center gap-4 px-60">
        {advantages.map((content, index) => (
          <div
            key={index}
            className="flex min-h-72 max-w-72 flex-col items-start justify-start gap-3 rounded-md bg-tertiary-50 p-4 shadow-md"
          >
            {content.icon}

            <h3 className="text-xl font-bold text-primary-100">
              {content.title}
            </h3>

            <p>{content.description}</p>
          </div>
        ))}
      </section>

      <div className="mt-12">
        <ButtonComponent label="contrate o escritório virtual" linkTo="/#" />
      </div>
    </main>
  )
}
