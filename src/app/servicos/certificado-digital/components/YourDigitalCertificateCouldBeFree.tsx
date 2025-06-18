import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function YourDigitalCertificateCouldBeFree() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-4xl font-bold text-primary-100">
        Seu Certificado Digital pode sair de graça.
      </h1>

      <p className="text-grey-100">
        Escolha o Plano Padrão ou Experts e tenha seu certificado sem pagar
        nada.
      </p>

      <section className="flex w-full items-center justify-center gap-12 p-6">
        <div className="flex w-[45%] items-start justify-center gap-4 rounded-lg border border-tertiary-100 shadow-lg">
          <div className="flex w-[60%] flex-col items-start justify-center gap-4 p-6">
            <h1 className="text-2xl font-bold text-primary-100">
              Plano Padrão
            </h1>

            <div className="flex items-center justify-center">
              <span className="text-xl font-semibold text-primary-100">R$</span>
              <span className="text-8xl font-bold text-primary-100">175</span>
              <span className="text-xl text-primary-100">,00</span>
            </div>
          </div>

          <span className="flex h-52 w-[40%] items-center justify-center rounded-e-lg bg-primary-100 text-white">
            IMAGE
          </span>
        </div>

        <div className="flex w-[45%] items-start justify-center gap-4 rounded-lg border border-tertiary-100 shadow-lg">
          <div className="flex w-[60%] flex-col items-start justify-center gap-4 p-6">
            <h1 className="text-2xl font-bold text-primary-100">
              Plano Experts
            </h1>

            <div className="flex items-center justify-center">
              <span className="text-xl font-semibold text-primary-100">R$</span>
              <span className="text-8xl font-bold text-primary-100">369</span>
              <span className="text-xl text-primary-100">,00</span>
            </div>
          </div>

          <span className="flex h-52 w-[40%] items-center justify-center rounded-e-lg bg-primary-100 text-white">
            IMAGE
          </span>
        </div>
      </section>

      <ButtonComponent label="conheça nossos planos" linkTo="/#" />
    </main>
  )
}
