'use client'

import { Check } from '@phosphor-icons/react'

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
            <h1 className="w-[400px] text-4xl font-bold text-primary-100">
              O maior escritório de contabilidade do Brasil
            </h1>

            <Separator className="w-5/6 bg-gray-200" />

            <p className="dark:text-tertiary-100">
              Há mais de 10 anos nosso escritório contábil entrega uma
              contabilidade segura e simplificada para{' '}
              <strong>mais de 70 mil clientes.</strong>
            </p>

            {Array.from([
              'Nosso time de contadores é certificado e o nosso atendimento rápido é realizado através do WhatsApp, chat, e-mail e telefone em horário estendido.',
              'Oferecemos soluções aliadas à nossa contabilidade para facilitar o seu dia e você focar no que importa: seu negócio.',
            ]).map((item, index) => (
              <div
                key={index}
                className="flex w-full items-start justify-center gap-2"
              >
                <Check size={24} className="text-primary-100" />
                <span className="flex-1 dark:text-tertiary-100">{item}</span>
              </div>
            ))}

            <div className="flex w-full items-center justify-start gap-4">
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
      </main>
    </>
  )
}
