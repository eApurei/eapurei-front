'use client'

import {
  Bank,
  MoneyWavy,
  ShieldCheck,
  Stethoscope,
} from '@phosphor-icons/react'
import Atropos from 'atropos/react'

import { roboto } from '@/lib/fonts'

export default function WhyGetACNPJ() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 px-8 pb-12 pt-4 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-3xl font-bold text-primary-100">
        Por que tirar um CNPJ<span className="text-secondary-150">?</span>
      </h1>

      <div className="flex flex-wrap items-start justify-center gap-8">
        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <MoneyWavy size={40} />
            <h1 className="text-xl font-bold text-primary-100">Imposto</h1>
            <p className="mt-2 font-normal text-black">
              O imposto para pessoa física pode chegar até 27,5%.{' '}
              <strong>
                Como PJ, com o enquadramento fiscal e tributário correto, você
                paga bem menos do que isso.
              </strong>
            </p>
          </div>
        </Atropos>

        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <Stethoscope size={40} />
            <h1 className="text-xl font-bold text-primary-100">
              Plano de saúde
            </h1>
            <p className="mt-2 font-normal text-black">
              Você tem a possibilidade de contratar{' '}
              <strong>planos de saúde até 30% mais baratos</strong> em
              comparação aos ofertados para pessoa física.
            </p>
          </div>
        </Atropos>

        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <Bank size={40} />
            <h1 className="text-xl font-bold text-primary-100">Crédito</h1>
            <p className="mt-2 font-normal text-black">
              Com o seu CNPJ em mãos, você passa a ter acesso a{' '}
              <strong>
                condições bem mais vantajosas em linhas de crédito
              </strong>{' '}
              com bancos e fornecedores.
            </p>
          </div>
        </Atropos>

        <Atropos className="my-atropos mt-8">
          <div
            className={`${roboto.className} flex min-h-64 max-w-64 flex-col items-start justify-start rounded-md bg-tertiary-100 px-5 py-4 font-bold text-primary-100`}
          >
            <ShieldCheck size={40} />
            <h1 className="text-xl font-bold text-primary-100">Confiança</h1>
            <p className="mt-2 font-normal text-black">
              Com a formalização da sua prestação de serviço você{' '}
              <strong>
                ganha a confiança dos seus clientes e aumenta suas chances de
                faturamento.
              </strong>
            </p>
          </div>
        </Atropos>
      </div>
    </section>
  )
}
