'use client'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function Hero() {
  return (
    <>
      <main
        className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-primary-100 dark:bg-grey-100 lg_2:px-2`}
      >
        <section className="relative w-full">
          <div className="flex w-1/2 flex-col items-start justify-center gap-4 px-8 py-12 text-tertiary-50">
            <h1 className="w-[400px] text-4xl font-bold">
              Certificado digital para maior segurança na sua contabilidade
            </h1>

            <Separator className="w-5/6 bg-primary-50" />

            <p>
              Todos os clientes da eApurei precisam ter um certificado digital
              A1. Isso traz mais confiança para a sua gestão contábil e muitas
              facilidades para o seu dia a dia.
            </p>

            <div className="mt-8 flex w-full items-center justify-start gap-4">
              <ButtonComponent
                label="como funciona"
                linkTo="/#"
                style="bg-tertiary-50 border-tertiary-50 !text-primary-100"
              />

              <ButtonComponent
                label="planos com certificado gratuito"
                linkTo="/#"
                style="bg-primary-50 border-primary-50 !text-tertiary-50"
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
