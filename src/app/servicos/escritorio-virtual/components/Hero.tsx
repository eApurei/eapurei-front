'use client'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function Hero() {
  return (
    <>
      <main
        className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 dark:bg-grey-100 lg_2:px-2`}
      >
        <section className="relative w-full bg-primary-100">
          <div className="flex w-1/2 flex-col items-start justify-center gap-6 px-8 py-12 text-tertiary-50">
            <h1 className="flex-1 text-4xl font-bold">
              Conheça o Escritório Virtual da eApurei.
            </h1>

            <Separator className="w-5/6 bg-primary-50" />

            <p>
              Tenha o endereço da sua empresa em um dos principais centros
              empresariais de São Paulo, sem os custos altos de um escritório
              físico. Nossa solução de escritório virtual é ideal para quem
              deseja mais segurança e quer separar o endereço pessoal do
              comercial.
            </p>

            <div className="mt-8 flex w-full items-center justify-start gap-4">
              <ButtonComponent
                label="Contrate agora com um especialista"
                linkTo="/#"
                style="bg-tertiary-50 border-tertiary-50 !text-primary-100"
              />
            </div>
          </div>

          <div className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-center rounded-bl-full rounded-tl-full bg-tertiary-50 text-5xl text-primary-100">
            IMAGEM
          </div>
        </section>
      </main>
    </>
  )
}
