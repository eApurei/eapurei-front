import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function HowMuchDoesVirtualOfficeCost() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-16 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-4xl font-bold text-primary-100">
        Quanto custa ter o Escritório Virtual da eApurei?
      </h1>

      <section className="flex w-1/2 items-center justify-center rounded-md bg-tertiary-50 shadow-md">
        <div className="flex w-[60%] flex-col items-center justify-center gap-4 p-6">
          <p>
            Seu escritório em um dos{' '}
            <strong className="text-primary-100">
              principais centros empresariais de São Paulo
            </strong>
            , sem os custos altos de um espaço físico.
          </p>

          <p className="mb-8 flex items-center justify-center text-9xl font-bold text-primary-100">
            <span className="text-xl">R$</span>60
            <span className="text-xl">/mês</span>
          </p>

          <ButtonComponent label="fale com um especialista" linkTo="/#" />
        </div>

        <div className="flex h-[360px] w-[40%] items-center justify-center rounded-e-md bg-primary-100 text-tertiary-50">
          IMAGEM
        </div>
      </section>

      <p className="w-1/2 text-center text-grey-100">
        Valor cobrado junto ao seu plano de contabilidade. Serviço exclusivo
        para novos clientes de abertura de empresa da eApurei.
      </p>
    </main>
  )
}
