'use client'

import { useState } from 'react'

import { StepsSwitchingAccountantsIsEasyProps } from '@/@types'
import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const stepsAccountant: StepsSwitchingAccountantsIsEasyProps[] = [
  {
    number: 1,
    text: 'Inicie o cadastro e confira se podemos te atender.',
  },
  {
    number: 2,
    text: 'Conclua o cadastro, pague a 1ª mensalidade e deixe tudo com a gente.',
  },
  {
    number: 3,
    text: 'Nós solicitamos a sua documentação contábil junto ao seu contador anterior ou você providencia os documentos.',
  },
  {
    number: 4,
    text: 'Pronto! Sua empresa sempre em dia e com uma contabilidade completa.',
  },
]

const stepsCompany: StepsSwitchingAccountantsIsEasyProps[] = [
  {
    number: 1,
    text: 'Você contrata o plano de contabilidade.',
  },
  {
    number: 2,
    text: 'Ganha a abertura de empresa.',
  },
  {
    number: 3,
    text: 'E paga apenas os impostos obrigatórios de uma empresa.',
  },
]

export default function SwitchingAccountantsIsEasy() {
  const [activeTab, setActiveTab] = useState<string>('trocar')
  const [fadeIn, setFadeIn] = useState(true)

  const handleTabClick = (tab: string) => {
    if (activeTab === tab) return

    setFadeIn(false)
    setTimeout(() => {
      setActiveTab(tab)
      setFadeIn(true)
    }, 300)
  }

  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-16 py-8 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Trocar de contador é fácil
      </h1>

      <p className="dark:text-tertiary-100">
        Você pode migrar para nosso escritório de contabilidade online de graça
        em qualquer época do ano.
      </p>

      <div className={`my-8 flex justify-center`}>
        <div className="flex border-b border-gray-200 dark:border-primary-100">
          <button
            onClick={() => handleTabClick('abertura')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 dark:text-tertiary-100 ${
              activeTab === 'abertura'
                ? 'border-b-2 border-primary-100 text-primary-100 dark:text-primary-100'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Abertura de empresa
          </button>

          <button
            onClick={() => handleTabClick('trocar')}
            className={`px-6 py-3 text-lg font-medium transition-colors duration-300 dark:text-tertiary-100 ${
              activeTab === 'trocar'
                ? 'border-b-2 border-primary-100 text-primary-100 dark:text-primary-100'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Trocar de contador
          </button>
        </div>
      </div>

      {activeTab === 'trocar' && (
        <div
          className={`mb-12 flex items-center justify-center gap-12 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-4 border-blue-100 bg-primary-100 text-white">
                IMAGEM
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {stepsAccountant.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-white">
                  {step.number}
                </div>

                <p className="text-md pt-1 leading-relaxed text-gray-700 dark:text-tertiary-100">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'abertura' && (
        <div
          className={`mb-12 flex items-center justify-center gap-12 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="flex justify-center">
            <div className="relative">
              <div className="flex h-80 w-80 items-center justify-center overflow-hidden rounded-full border-4 border-blue-100 bg-primary-100 text-white">
                IMAGEM
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {stepsCompany.map((step) => (
              <div key={step.number} className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-white">
                  {step.number}
                </div>

                <p className="text-md pt-1 leading-relaxed text-gray-700 dark:text-tertiary-100">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <ButtonComponent label="Abra sua empresa agora" linkTo="#" />
    </main>
  )
}
