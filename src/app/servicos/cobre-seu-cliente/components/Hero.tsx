'use client'

import { Coins, DeviceMobile, HandCoins } from '@phosphor-icons/react'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function Hero() {
  return (
    <>
      <main
        className={`${roboto.className} relative flex w-full flex-col items-center justify-center gap-4 bg-primary-100 dark:bg-grey-100 lg_2:px-2`}
      >
        <section className="relative h-96 w-full">
          <div className="flex w-1/2 flex-col items-start justify-center gap-4 px-8 py-12">
            <h1 className="flex-1 text-4xl font-bold text-tertiary-50">
              Cobre seu Cliente.
            </h1>
            <h1 className="w-3/4 flex-1 text-4xl font-bold text-tertiary-50">
              O link de pagamentos da eApurei.
            </h1>

            <Separator className="my-4 w-5/6 bg-gray-200" />

            <ButtonComponent
              label="começar agora"
              linkTo="/#"
              style="bg-tertiary-50 !text-primary-100 border-tertiary-50"
            />
          </div>

          <div className="absolute right-0 top-0 flex h-full w-1/2 items-center justify-center rounded-bl-full rounded-tl-full bg-tertiary-50 text-5xl text-primary-100">
            IMAGEM
          </div>
        </section>

        <section className="absolute -bottom-20 flex w-[95%] items-center justify-center gap-8 rounded-md border border-gray-200 bg-gray-200 p-6 shadow-md">
          <div className="flex w-1/3 items-center justify-center gap-4">
            <HandCoins size={56} className="text-primary-100" />

            <div className="flex flex-1 flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-100">
                Cobrança online
              </h3>
              <span>
                Receba dos clientes de forma online sem precisar ter maquininha
                ou site.
              </span>
            </div>
          </div>

          <div className="flex w-1/3 items-center justify-center gap-4">
            <DeviceMobile size={56} className="text-primary-100" />

            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-100">
                Solução simples e intuitiva
              </h3>
              <span>
                Em poucos cliques você cria e envia sua cobrança de maneira
                rápida e segura.
              </span>
            </div>
          </div>

          <div className="flex w-1/3 items-center justify-center gap-4">
            <Coins size={56} className="text-primary-100" />

            <div className="flex flex-col items-start justify-center gap-2">
              <h3 className="text-xl font-bold text-primary-100">
                Diversos meios de cobrança
              </h3>
              <span>Gere cobranças no cartão de crédito ou Pix.</span>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
