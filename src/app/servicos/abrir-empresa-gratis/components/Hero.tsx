'use client'

import { Buildings, Certificate, Package } from '@phosphor-icons/react'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function Hero() {
  return (
    <>
      <main
        className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 dark:bg-grey-100 lg_2:px-2`}
      >
        <section className="relative w-full">
          <div className="flex w-1/2 flex-col items-start justify-center gap-4 px-8 py-12">
            <h1 className="flex-1 text-4xl font-bold text-primary-100">
              Abra sua empresa online e tenha benefícios que vão além da
              contabilidade.
            </h1>

            <Separator className="w-5/6 bg-gray-200" />

            <p className="dark:text-tertiary-100">
              Somos líderes e especialistas em abertura de empresas e gestão de
              contabilidade eficiente. Mais de 70 mil profissionais em todo o
              Brasil já confiam na eApurei.
            </p>

            <div className="mt-8 flex w-full items-center justify-start gap-4">
              <ButtonComponent label="Abra sua empresa grátis" linkTo="/#" />

              <ButtonComponent
                label="Troque de contador"
                linkTo="/#"
                style="bg-transparent !text-primary-100"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-center rounded-bl-full rounded-tl-full bg-primary-100 text-5xl text-white">
            IMAGEM
          </div>
        </section>

        <section className="-mt-2 flex w-[95%] items-center justify-center gap-8 rounded-md border border-gray-200 bg-gray-200 p-6 shadow-md">
          <div className="flex w-1/3 items-center justify-center gap-4">
            <Buildings size={56} className="text-primary-100" />

            <div className="flex flex-1 flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-100">
                CNPJ rápido e sem custo
              </h3>
              <span>
                Cuidamos de todo o processo e não cobramos honorários de
                abertura.
              </span>
            </div>
          </div>

          <div className="flex w-1/3 items-center justify-center gap-4">
            <Certificate size={56} className="text-primary-100" />

            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-100">
                Emissão de notas com 1 clique
              </h3>
              <span>Emita suas notas fiscais de forma rápida e prática.</span>
            </div>
          </div>

          <div className="flex w-1/3 items-center justify-center gap-4">
            <Package size={56} className="text-primary-100" />

            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-100">
                Pacote de benefícios
              </h3>
              <span>Acesso a academias, psicólogos e nutricionistas.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
