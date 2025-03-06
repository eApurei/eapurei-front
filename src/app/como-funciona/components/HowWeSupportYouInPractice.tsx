'use client'

import Image from 'next/image'
import { useState } from 'react'

import { SupportsProps } from '@/@types'
import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

const supports: SupportsProps[] = [
  {
    label: 'Abrir empresa',
    openCompany: [
      {
        title: 'Orientamos você em todas as escolhas',
        description:
          'Depois de escolher um dos planos da eApurei e preencher seu cadastro, analisamos a documentação enviada e orientamos você na escolha do CNAE, tipo de empresa, pagamento de taxas do governo e necessidade do certificado digital.',
      },
      {
        title: 'Realizamos todo o processo de abertura da empresa',
        description:
          'Cuidamos do processo de abertura, mantendo você ciente das etapas e de eventuais necessidades de complemento de informações. Com esse processo concluído, integramos sua conta bancária e as informações fiscais da sua empresa à nossa plataforma.',
      },
      {
        title: 'Cuidamos da sua contabilidade',
        description:
          'Mês a mês, o maior time de contadores certificados do Brasil cuidará da sua contabilidade, calculando guias de impostos, enviando lembretes de pagamentos, assinando seus relatórios fiscais e organizando todos os documentos da sua empresa de maneira digital e transparente. Você poderá acompanhar a gestão da sua contabilidade, em tempo real, através da nossa plataforma.',
      },
    ],
    button: {
      '1': {
        label: 'Abra sua empresa grátis',
        linkTo: '',
      },
      '2': {
        label: 'Calcule o quanto você economiza',
        linkTo: '',
      },
    },
  },
  {
    label: 'Deixar de ser MEI',
    openCompany: [
      {
        title: 'Apoiamos você na tomada de decisão',
        description:
          'Nossa equipe de especialistas entra em contato com você para analisar o perfil do seu MEI, entendendo quais são suas necessidades e o motivo de você desejar transformá-la em ME. Você terá total suporte neste processo.',
      },
      {
        title: 'Realizamos o processo de transformação',
        description:
          'Com tudo certo, verificamos se é necessário realizar alguma regularização antes de dar o próximo passo e iniciamos o processo de transformação em ME. Após a conclusão, integramos sua conta bancária e informações fiscais à nossa plataforma.',
      },
      {
        title: 'Cuidamos da sua contabilidade',
        description:
          'Mês a mês, o maior time de contadores certificados do Brasil cuidará da sua contabilidade, calculando guias de impostos, enviando lembretes de pagamentos, assinando seus relatórios fiscais e organizando todos os documentos da sua empresa de maneira digital e transparente. Você poderá acompanhar a gestão da sua contabilidade, em tempo real, através da nossa plataforma.',
      },
    ],
    button: {
      '1': {
        label: 'Transforme seu MEI em ME',
        linkTo: '',
      },
      '2': {
        label: 'Conheça nossos planos',
        linkTo: '',
      },
    },
  },
  {
    label: 'Mudar de contador',
    openCompany: [
      {
        title: 'Orientamos você em todas as escolhas',
        description:
          'Realizamos uma análise detalhada da sua empresa, verificamos se todas as obrigações estão em dia e, em caso de necessidade de regularização, alinhamos com você como será este processo, sempre explicando todas as etapas para que não fique nenhuma dúvida.',
      },
      {
        title: 'Realizamos o processo de mudança',
        description:
          'Cuidamos do processo de abertura, mantendo você ciente das etapas e de eventuais necessidades de complemento de informações. Com esse processo concluído, integramos sua conta bancária e as informações fiscais da sua empresa à nossa plataforma.',
      },
      {
        title: 'Cuidamos da sua contabilidade',
        description:
          'Mês a mês, o maior time de contadores certificados do Brasil cuidará da sua contabilidade, calculando guias de impostos, enviando lembretes de pagamentos, assinando seus relatórios fiscais e organizando todos os documentos da sua empresa de maneira digital e transparente. Você poderá acompanhar a gestão da sua contabilidade, em tempo real, através da nossa plataforma.',
      },
    ],
    button: {
      '1': {
        label: 'Troque de contador',
        linkTo: '',
      },
      '2': {
        label: 'Conheça nossos planos',
        linkTo: '',
      },
    },
  },
]
export default function HowWeSupportYouInPractice() {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-4 bg-white px-4 pb-8 pt-40 dark:bg-grey-100 lg_2:px-2">
        <h1 className="text-3xl font-bold text-primary-100">
          Como apoiamos você na prática
        </h1>

        <nav className="mt-12">
          <ul className="flex select-none flex-wrap items-center justify-center gap-4 lg_1:gap-2">
            {supports.map(({ label }, index) => (
              <li
                key={index}
                className={`${activeIndex === index ? 'bg-secondary-100 text-white dark:bg-white dark:text-secondary-150' : 'dark:text-white'} flex cursor-pointer items-center justify-center gap-2 rounded-md border border-secondary-100 px-4 py-2 font-bold text-secondary-100 duration-300 hover:bg-secondary-100 hover:text-white dark:border-white hover:dark:bg-white hover:dark:text-secondary-100 lg_1:px-2 lg_1:text-sm lg_2:py-1 lg_2:text-xs`}
                onClick={() => setActiveIndex(index)}
              >
                {label}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full items-center justify-center">
          <Image
            alt={`Solution ${activeIndex + 1} Image`}
            src={`/solutions/${activeIndex + 1}.png`}
            width={1080}
            height={1080}
            className="w-[28rem] lg_2:w-96"
            aria-label={`Solution ${activeIndex + 1} Image`}
          />

          <section
            className={`flex w-[60%] items-start justify-start gap-4 rounded-md px-4 py-8 dark:bg-dark-200 lg_2:text-xs ${roboto.className}`}
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <div className="flex items-center justify-center rounded-full bg-primary-100 px-4 py-2 text-2xl text-white">
                <span>1</span>
              </div>

              <Separator
                orientation="vertical"
                className="h-16 bg-primary-100"
              />

              <div className="flex items-center justify-center rounded-full bg-primary-100 px-4 py-2 text-2xl text-white">
                <span>2</span>
              </div>

              <Separator
                orientation="vertical"
                className="h-16 bg-primary-100"
              />

              <div className="flex items-center justify-center rounded-full bg-primary-100 px-4 py-2 text-2xl text-white">
                <span>3</span>
              </div>
            </div>

            <section className="flex flex-1 flex-col items-start justify-center gap-6">
              {supports[activeIndex].openCompany.map((item, index) => (
                <div
                  className="flex flex-col items-start justify-center"
                  key={index}
                >
                  <h1 className="text-xl text-primary-100">{item.title}</h1>
                  <span className="text-grey-100">{item.description}</span>
                </div>
              ))}
            </section>
          </section>
        </div>

        <section className="mt-12 flex items-center justify-center gap-4">
          <ButtonComponent
            label={`${supports[activeIndex].button[1].label}`}
            linkTo={`${supports[activeIndex].button[1].linkTo}`}
          />
          <ButtonComponent
            label={`${supports[activeIndex].button[2].label}`}
            style="bg-transparent !text-primary-100"
            linkTo={`${supports[activeIndex].button[2].linkTo}`}
          />
        </section>
      </main>
    </>
  )
}
