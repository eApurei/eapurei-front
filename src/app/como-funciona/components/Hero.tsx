'use client'

import { RocketLaunch, Scroll, WechatLogo } from '@phosphor-icons/react'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function Hero() {
  return (
    <>
      <main className="relative flex h-[28rem] w-full items-center justify-between gap-4 bg-primary-100 pl-8 dark:bg-grey-100 lg_2:px-2">
        <div className="flex w-[40%] flex-col items-start justify-center gap-4 py-20 text-white">
          <h1 className="text-3xl font-bold">Como funciona a eApurei?</h1>

          <Separator orientation="horizontal" className="opacity-50" />

          <span>
            Há mais de 10 anos, entregamos contabilidade simples, completa e
            segura e outras soluções integradas para facilitar o seu dia a dia.
          </span>

          <div className="flex items-center justify-center gap-8">
            <ButtonComponent
              label="Saiba quanto custa"
              linkTo=""
              style="bg-secondary-100 border-secondary-100"
            />
            <ButtonComponent
              label="Fale com um especialista"
              linkTo=""
              style="bg-secondary-100 border-secondary-100"
            />
          </div>
        </div>

        <div className="flex h-full w-[40%] items-center justify-center bg-secondary-100">
          oi
        </div>

        <section
          className={`absolute -bottom-20 z-10 flex h-36 w-[96%] items-center justify-between rounded-xl bg-white px-20 shadow-md ${roboto.className}`}
        >
          <div className="flex w-80 items-center justify-center gap-4">
            <Scroll size={80} weight="light" className="text-primary-100" />

            <div className="flex flex-col items-start justify-center">
              <h4 className="text-lg font-bold text-primary-100">
                CNPJ rápido e grátis
              </h4>
              <span className="text-base text-grey-100">
                Cuidamos da abertura do CNPJ sem você sair de casa.
              </span>
            </div>
          </div>

          <div className="flex w-80 items-center justify-center gap-4">
            <RocketLaunch
              size={80}
              weight="light"
              className="text-primary-100"
            />

            <div className="flex flex-col items-start justify-center">
              <h4 className="text-lg font-bold text-primary-100">
                Otimização tributária
              </h4>
              <span className="text-base text-grey-100">
                Para que você pague somente os impostos necessários.
              </span>
            </div>
          </div>

          <div className="flex w-80 items-center justify-center gap-4">
            <WechatLogo size={80} weight="light" className="text-primary-100" />

            <div className="flex flex-col items-start justify-center">
              <h4 className="text-lg font-bold text-primary-100">
                Atendimento rápido
              </h4>
              <span className="text-base text-grey-100">
                Via telefone, chat e e-mail até às 18h e WhatsApp até às 22h.
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
