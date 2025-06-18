'use client'

import { Check } from '@phosphor-icons/react'
import Image from 'next/image'

import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function KnowTheExpertsPlan() {
  const benefits = [
    'Assessor e analista dedicados desde a abertura até a gestão contábil da sua empresa.',
    'Consultoria tributária para que você pague o mínimo de impostos.',
    'Emissão de notas fiscais feita pelo nosso time.',
    'Além do WhatsApp até às 22h, você conta com um canal de atendimento exclusivo: via telefone das 9h às 18h.',
    'Por apenas mais R$ 20/mês você conta com pacote de benefícios: academia, pacote saúde.',
    'Planos de saúde a partir de 1 vida com até 30% de desconto.',
  ]

  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-12 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary-100">
          Conheça o Plano Experts:
        </h1>

        <p className="leading-relaxed text-grey-100 dark:text-tertiary-100">
          Com o nosso plano Experts você conta com o apoio de um assessor e um
          analista dedicados para simplificar a contabilidade da sua empresa.
        </p>
      </section>

      <section className="flex items-center gap-16">
        <div className="flex-1">
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center justify-start gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full">
                    <Check className="h-6 w-6 text-primary-100" />
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-dark-100">
                  {benefit}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className="flex-shrink-0">
          <div className="relative">
            <div className="m h-80 w-80 overflow-hidden rounded-full border-4 border-gray-200 shadow-lg">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Ricardo D'Amato - Assessor Experts"
                width={320}
                height={320}
                className="h-full w-full object-cover"
              />
            </div>

            <section className="absolute bottom-4 left-1/2 -translate-x-1/2 transform">
              <div className="rounded-full bg-primary-100 px-4 py-2 text-center text-white shadow-lg">
                <div className="text-sm font-bold">Ricardo D&apos;Amato</div>

                <div className="text-xs opacity-90">Assessor Experts</div>
              </div>
            </section>
          </div>
        </section>
      </section>

      <section className="mt-4 flex flex-col items-center justify-center gap-8">
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold text-primary-100">
            Quanto custa o plano Experts?
          </h2>

          <p className="flex items-center justify-center text-4xl font-bold leading-relaxed text-primary-100 dark:text-tertiary-100">
            <span className="text-sm font-normal">R$</span>369
            <span className="text-sm font-normal">/mês</span>
          </p>
        </div>

        <div className="flex items-center justify-center gap-8">
          <ButtonComponent label="fale com um contador" linkTo="/#" />

          <ButtonComponent
            label="contrate agora"
            linkTo="/#"
            style="bg-transparent !text-primary-100"
          />
        </div>
      </section>
    </main>
  )
}
