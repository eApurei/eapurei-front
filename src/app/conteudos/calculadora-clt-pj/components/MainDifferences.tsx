'use client'

import { CheckCircle } from '@phosphor-icons/react'
import Image from 'next/image'

import { roboto } from '@/lib/fonts'

export default function MainDifferences() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 p-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Principais diferenças entre PJ e CLT
      </h1>

      <p className="w-3/4 text-center dark:text-white">
        A principal diferença entre CLT e PJ é que no regime CLT você possui
        benefícios trabalhistas oferecidos pela empresa, porém você tem um
        salário líquido menor pois há descontos fixos de IRPF e INSS. Já no
        regime PJ, você recebe um salário líquido maior, não possui benefícios
        além do acordado em contrato e é responsável por pagar os próprios
        impostos.
      </p>

      <section className="flex w-full items-center justify-center gap-8 pt-12">
        <div className="flex w-[45%] items-start justify-between gap-4 rounded-md border-2 border-primary-100">
          <Image
            alt=""
            src={''}
            width={150}
            height={150}
            aria-label=""
            className="h-[336px] w-40 rounded-s-md bg-primary-100"
          />

          <div className="flex flex-1 flex-col items-start justify-start gap-4 py-4 pr-4 font-light">
            <span className="select-none rounded-full bg-primary-100 px-5 py-1 text-lg font-semibold text-white">
              PJ
            </span>

            <div className="flex items-start justify-center gap-4 dark:text-white">
              <CheckCircle
                size={40}
                className="-mt-[6px] w-[40px] text-primary-100"
              />
              <p>
                Na contratação PJ, o acordo é firmado em um contrato de
                prestação de serviço
              </p>
            </div>

            <div className="flex items-start justify-center gap-4 dark:text-white">
              <CheckCircle
                size={40}
                className="-mt-[6px] w-[68px] text-primary-100"
              />
              <p>
                A remuneração do PJ é sem descontos, mas este deve pagar
                impostos de acordo com porte da empresa, faturamento e atividade
                exercida
              </p>
            </div>

            <div className="flex items-start justify-center gap-4 dark:text-white">
              <CheckCircle
                size={40}
                className="-mt-[6px] w-[64px] text-primary-100"
              />
              <p>
                Quem é PJ possui uma rotina mais flexível, podendo estipular
                seus horários desde que cumpra o que foi combinado em contrato
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-[45%] items-center justify-between gap-4 rounded-md border-2 border-primary-100">
          <Image
            alt=""
            src={''}
            width={150}
            height={150}
            aria-label=""
            className="h-[336px] w-40 rounded-s-md bg-primary-100"
          />

          <div className="flex flex-1 flex-col items-start justify-start gap-4 py-4 pr-4 font-light">
            <span className="select-none rounded-full bg-primary-100 px-5 py-1 text-lg font-semibold text-white">
              CLT
            </span>

            <div className="flex items-start justify-center gap-4 dark:text-white">
              <CheckCircle
                size={40}
                className="-mt-[6px] w-[40px] text-primary-100"
              />
              <p>
                Na contratação CLT, o vínculo é efetivado com a assinatura na
                carteira de trabalho
              </p>
            </div>

            <div className="flex items-start justify-center gap-4 dark:text-white">
              <CheckCircle
                size={40}
                className="-mt-[6px] w-[72px] text-primary-100"
              />
              <p>
                O empregado que trabalha como CLT tem seus benefícios garantidos
                pela lei e como consequencia seu salário vem sempre com diversos
                descontos
              </p>
            </div>

            <div className="flex items-start justify-center gap-4 dark:text-white">
              <CheckCircle
                size={40}
                className="-mt-[6px] w-[60px] text-primary-100"
              />
              <p>
                O empregado CLT precisa cumprir a jornada de trabalho prevista
                em lei e só pode exercer sua função em um empregador
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
