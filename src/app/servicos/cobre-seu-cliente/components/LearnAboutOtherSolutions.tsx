import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function LearnAboutOtherSolutions() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-12 bg-primary-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="w-1/2 flex-1 text-center text-4xl font-bold text-tertiary-50">
        Conheça outras soluções que vão facilitar a rotina financeira da sua
        empresa.
      </h1>

      <section className="flex w-full items-center justify-center gap-8">
        <section className="relative min-h-[25.7rem] max-w-[40rem] overflow-hidden rounded-lg border border-primary-50 bg-tertiary-50 p-8 shadow-lg">
          <div className="relative grid grid-cols-1 items-center gap-12">
            <section className="space-y-8">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-primary-100">
                  Notificações automáticas
                </h2>

                <p className="text-lg leading-relaxed text-grey-100">
                  Envie suas cobranças e deixe que a eApurei notifique seus
                  clientes por e-mail antes e depois do vencimento.
                </p>
              </div>

              <section className="relative w-1/2 space-y-6 text-grey-100">
                <div className="relative flex items-center gap-6">
                  <h3 className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-25 text-lg font-bold">
                    1
                  </h3>

                  <span className="text-xl font-medium">Envio da cobrança</span>

                  <div className="absolute left-5 top-10 h-6 w-0.5 bg-primary-25"></div>
                </div>

                <div className="relative flex items-center gap-6">
                  <h3 className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-25 text-lg font-bold">
                    2
                  </h3>

                  <span className="text-xl font-medium">
                    Aviso de vencimento
                  </span>

                  <div className="absolute left-5 top-10 h-8 w-0.5 bg-primary-25"></div>
                </div>

                <div className="flex items-center gap-6">
                  <h3 className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary-25 text-lg font-bold">
                    3
                  </h3>

                  <p className="w-1/2 text-xl font-medium">
                    Aviso de atraso no pagamento
                  </p>
                </div>
              </section>
            </section>

            {/* Phone Mockup Section */}
            <section className="absolute -bottom-10 right-4 flex h-52 w-64 transform items-center justify-center bg-primary-25">
              IMAGEM
            </section>
          </div>
        </section>

        <section className="relative min-h-[25.7rem] max-w-[40rem] overflow-hidden rounded-lg border border-primary-50 bg-tertiary-50 p-8 shadow-lg">
          <div className="relative grid grid-cols-1 items-center gap-12">
            <section className="space-y-8">
              <div>
                <h2 className="mb-6 text-4xl font-bold text-primary-100">
                  Conta PJ integrada à contabilidade
                </h2>

                <p className="text-lg leading-relaxed text-grey-100">
                  Com a conta PJ da eApurei, você recebe os pagamentos dos seus
                  clientes direto em uma conta integrada à sua contabilidade.
                  Além disso, você fica livre de tarifas ou mensalidades e ainda
                  conta com pix gratuitos e ilimitados.
                </p>
              </div>

              <section className="relative w-1/2 space-y-6 text-grey-100">
                <ButtonComponent label="saiba mais" linkTo="/#" />
              </section>
            </section>

            {/* Phone Mockup Section */}
            <section className="absolute -bottom-40 right-12 flex h-52 w-64 transform items-center justify-center bg-primary-25">
              IMAGEM
            </section>
          </div>
        </section>
      </section>
    </main>
  )
}
