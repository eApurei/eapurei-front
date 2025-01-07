import Link from 'next/link'

import { roboto } from '@/lib/fonts'

import Input from './Input'

export default function Hero() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-8 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="flex w-full items-center justify-center">
        <div className="flex w-1/2 flex-col items-start justify-center gap-4">
          <h1 className="text-3xl font-bold text-primary-100">
            Calculadora salário PJ x CLT
            <span className="text-secondary-150">.</span>
          </h1>

          <p className="dark:text-white">
            A Calculadora PJ x CLT compara os impostos e benefícios dos regimes
            PJ e CLT, assim você descobre o salário bruto que você deve ganhar
            como PJ para manter seus ganhos equilibrados.
          </p>
        </div>
        <div className="flex h-60 w-1/2 items-center justify-center bg-primary-100 text-white">
          IMAGEM
        </div>
      </section>

      <section className="flex w-full flex-col items-center justify-center rounded-md border-2 border-primary-50 py-8">
        <h1 className="text-xl font-bold text-primary-100">
          Preencha as informações abaixo com seus dados CLT:
        </h1>

        <div className="flex max-w-[70%] flex-wrap items-center justify-start gap-8 py-8">
          <Input
            htmlForInput="gross_salary"
            label="Salário mensal bruto:"
            idInput="gross_salary"
          />

          <Input
            htmlForInput="meal_vouchers"
            label="Vale-refeição/alimentação (opcional):"
            idInput="meal_vouchers"
          />

          <Input
            htmlForInput="transport_vouchers"
            label="Vale-transporte (opcional):"
            idInput="transport_vouchers"
          />

          <Input
            htmlForInput="health_insurance"
            label="Plano de saúde (opcional):"
            idInput="health_insurance"
          />

          <Input
            htmlForInput="other_benefits"
            label="Outros benefícios (opcional):"
            idInput="other_benefits"
          />
        </div>

        <p className="w-1/2 text-center text-zinc-500 dark:text-zinc-300">
          Ao clicar em Ver resultado, você está ciente e concorda com a nossa{' '}
          <Link
            href={'#'}
            className="underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Política de Privacidade
          </Link>
          ,{' '}
          <Link
            href={'/politicas-de-cookies'}
            className="underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Política de Cookies
          </Link>{' '}
          e nossos{' '}
          <Link
            href={'#'}
            className="underline duration-300 hover:opacity-70"
            target="_blank"
          >
            Termos de Uso
          </Link>
          .
        </p>

        <Link
          href={'#'}
          className="mt-8 w-60 rounded-full border-2 border-primary-100 bg-primary-100 px-4 py-2 text-center text-sm font-bold uppercase text-white shadow-md duration-500 hover:scale-105 lg_1:text-xs lg_2:px-2 lg_2:text-[10px]"
          target="_blank"
        >
          Ver resultado
        </Link>
      </section>
    </main>
  )
}
