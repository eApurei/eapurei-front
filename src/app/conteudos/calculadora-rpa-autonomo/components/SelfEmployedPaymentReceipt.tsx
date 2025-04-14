import Link from 'next/link'

import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function SelfEmployedPaymentReceipt() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 px-8 py-16 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-3xl font-bold text-primary-100">
        Recibo de Pagamento Autônomo (RPA)
      </h1>
      <p>Saiba quando utilizar e como fazer o cálculo e a emissão.</p>
      <div
        className={`${roboto.className} relative mt-8 flex w-full select-none items-start justify-around`}
      >
        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            1
          </h1>
          <h2 className="mt-4 text-xl font-bold text-primary-100">
            Quando usar?
          </h2>
          <p className="text-center">
            Deve ser emitido pelo contratante para comprovar o pagamento a
            pessoas físicas sem caracterizar o vínculo CLT.
          </p>
        </div>

        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            2
          </h1>
          <h2 className="mt-4 text-xl font-bold text-primary-100">
            Como calcular os impostos?
          </h2>
          <p className="text-center">
            Preencha o formulário acima com os seus dados para descobrir quanto
            você irá pagar em tributos.
          </p>
        </div>

        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            3
          </h1>
          <h2 className="mt-4 text-xl font-bold text-primary-100">
            Como emitir o RPA?
          </h2>
          <p className="text-center">
            Use gratuitamente a nossa ferramenta de emissão{' '}
            <Link className="text-primary-100 underline" href={'/#'}>
              clicando aqui
            </Link>
            . Você tem a certeza de que tudo está calculado corretamente.
          </p>
        </div>

        <Separator className="absolute left-[264px] top-4 w-[380px] bg-primary-100" />
        <Separator className="absolute right-[264px] top-4 w-[380px] bg-primary-100" />
      </div>
    </section>
  )
}
