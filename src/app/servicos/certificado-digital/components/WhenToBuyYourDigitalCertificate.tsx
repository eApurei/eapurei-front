import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function WhenToBuyYourDigitalCertificate() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-4xl font-bold text-primary-100">
        Quando adquirir o seu certificado digital?
      </h1>

      <section className="flex w-full items-center justify-center gap-8 p-6">
        <div className="flex max-w-[35rem] items-start justify-center gap-4 rounded-lg border border-tertiary-100 shadow-lg">
          <div className="flex w-full flex-col items-center justify-center gap-4 p-6 text-center">
            <h1 className="w-full text-2xl font-bold text-primary-100">
              Na abertura de empresa
            </h1>

            <p>
              Após contratar a Contabilizei, vamos realizar os processos de
              abertura de empresa. Assim que o CNPJ for emitido, você deve
              adquirir o certificado digital A1.
            </p>

            <ButtonComponent
              label="abra sua empresa grátis"
              linkTo="/#"
              style="mt-4"
            />
          </div>
        </div>

        <div className="flex max-w-[35rem] items-start justify-center gap-4 rounded-lg border border-tertiary-100 shadow-lg">
          <div className="flex w-full flex-col items-center justify-center gap-4 p-6 text-center">
            <h1 className="w-full text-2xl font-bold text-primary-100">
              Na mudança de contador
            </h1>

            <p>
              Após contratar a Contabilizei, você deve adquirir o certificado
              digital A1 para configurarmos sua conta. Se você já possuir um
              certificado deste modelo, basta cadastrá-lo.
            </p>

            <ButtonComponent
              label="troque de contador"
              linkTo="/#"
              style="mt-4"
            />
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 pt-4">
        <h1 className="text-2xl font-bold text-primary-100">
          Não tem o certificado?
        </h1>

        <p className="text-lg">
          Nós geramos um cupom para você adquirir o seu com desconto.
        </p>

        <ButtonComponent label="fale com um especialista" linkTo="/#" />
      </div>
    </main>
  )
}
