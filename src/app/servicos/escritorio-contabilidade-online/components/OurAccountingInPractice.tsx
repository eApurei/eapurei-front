'use client'

import { Check } from '@phosphor-icons/react'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function OurAccountingInPractice() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 px-16 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Nossa contabilidade na prática
      </h1>

      <section className="mt-8 flex w-full items-start justify-start gap-4">
        <div className="flex w-[420px] flex-col items-start justify-center gap-4">
          <h2 className="w-full pl-7 text-2xl font-bold text-primary-100">
            O que você vai fazer:
          </h2>

          <div className="flex flex-col items-start justify-center gap-4">
            {Array.from([
              'Emitir as notas fiscais e importar seu extrato mensal na nossa plataforma.',
              'Resolver as suas dúvidas com nosso atendimento.',
              'Economizar mais de 80% ao mês.*',
            ]).map((content, index) => (
              <div
                key={index}
                className="flex items-start justify-center gap-2"
              >
                <Check size={20} className="text-primary-100" />
                <p className="flex-1 dark:text-tertiary-100">{content}</p>
              </div>
            ))}

            <span className="mt-8 text-sm text-gray-400">
              * Comparação com o preço médio cobrado pela contabilidade segundo
              calculadora de comparação de preço da eApurei.
            </span>
          </div>
        </div>

        <Separator orientation="vertical" className="h-72 bg-primary-100" />

        <div className="flex w-[340px] flex-col items-start justify-center gap-4">
          <h2 className="w-full pl-7 text-2xl font-bold text-primary-100">
            O que nós vamos fazer:
          </h2>

          <div className="flex flex-col items-start justify-center gap-4">
            {Array.from([
              'Entregamos uma contabilidade completa.',
              'Mantemos a sua empresa em dia com todas as obrigações do governo, com o IRPJ incluso',
              'Disponibilizamos nosso atendimento rápido por diversos canais: telefone, WhatsApp, chat e e-mail.',
              'Disponibilizamos nosso emissor gratuito de nota fiscal e boleto.',
              'Calculamos as guias de impostos, folha de pagamento e pró-labore.',
              'Fazemos e assinamos relatórios contábeis como o balanço, DRE e muitos outros.',
            ]).map((content, index) => (
              <div
                key={index}
                className="flex items-start justify-center gap-2"
              >
                <Check size={20} className="text-primary-100" />
                <p className="flex-1 dark:text-tertiary-100">{content}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex h-[30rem] flex-1 items-center justify-center bg-primary-100 text-white">
          IMAGEM
        </div>
      </section>

      <ButtonComponent label="Conheça nossos planos" linkTo="/planos" />
    </main>
  )
}
