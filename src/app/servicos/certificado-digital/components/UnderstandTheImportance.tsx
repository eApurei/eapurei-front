'use client'

import { Certificate, MagnifyingGlass, ThumbsUp } from '@phosphor-icons/react'

import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const advantages = [
  {
    icon: <Certificate size={40} className="text-primary-100" />,
    title: 'O que é certificado digital',
    description:
      'É um arquivo digital que funciona como uma assinatura virtual da sua empresa e atesta a veracidade de transações e processo',
  },
  {
    icon: <MagnifyingGlass size={40} className="text-primary-100" />,
    title: 'Por que você precisa',
    description:
      'Traz maior segurança para suas informações, garante a entrega das obrigações do eSocial e permite acesso a funcionalidades exclusivas.',
  },
  {
    icon: <ThumbsUp size={40} className="text-primary-100" />,
    title: 'Modelo aceito e funcionalidades',
    description:
      'Você precisa ter o modelo e-CNPJ A1, que servirá para emissão de notas fiscais, contratos, declarações e acesso a serviços da Receita Federal e outros.',
  },
]

export default function UnderstandTheImportance() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="flex-1 text-4xl font-bold text-primary-100">
        Entenda a importância de se ter um certificado digital
      </h1>

      <section className="mt-12 flex w-full flex-wrap items-center justify-center gap-8 px-60">
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
        <ButtonComponent label="Planos com certificado gratuito" linkTo="/#" />
      </div>
    </main>
  )
}
