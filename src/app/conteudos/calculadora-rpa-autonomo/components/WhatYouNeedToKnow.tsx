'use client'

import { Bank, MoneyWavy, Stethoscope } from '@phosphor-icons/react'
import Atropos from 'atropos/react'

import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function WhatYouNeedToKnow() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 px-8 pb-12 pt-12 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-3xl font-bold text-primary-100">
        O que você precisa saber sobre a calculadora de RPA.
      </h1>

      <div className="flex flex-wrap items-start justify-center gap-8">
        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <MoneyWavy size={40} />

            <h1 className="text-xl font-bold text-primary-100">
              Quais tributos incidem sobre o RPA?
            </h1>

            <p className="mt-2 font-normal text-black">
              Os impostos que incidem sobre o RPA são: INSS, IRRF e ISS.
            </p>
          </div>
        </Atropos>

        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <Stethoscope size={40} />

            <h1 className="text-xl font-bold text-primary-100">
              Quem pode receber o RPA?
            </h1>

            <p className="mt-2 font-normal text-black">
              Qualquer pessoa física ou jurídica que precise receber o pagamento
              por um serviço e não tem CNPJ para emitir nota fiscal.
            </p>
          </div>
        </Atropos>

        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <Bank size={40} />
            <h1 className="text-xl font-bold text-primary-100">
              Quem deve emitir o RPA?
            </h1>
            <p className="mt-2 font-normal text-black">
              A emissão deve ser feita por quem contratou o serviço, pois é ele
              o responsável pelo serviço prestado e pagamento.
            </p>
          </div>
        </Atropos>
      </div>

      <div className="flex items-center justify-center gap-4 py-8">
        <ButtonComponent label="Abrir cnpj grátis" linkTo="/#" />

        <ButtonComponent label="Falar com um especialista" linkTo="/#" />
      </div>
    </section>
  )
}
