import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function HowMuchIsTheCertificate() {
  return (
    <main
      className={`${roboto.className} flex w-full items-center justify-center gap-8 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="flex w-1/3 flex-col items-start justify-center gap-4">
        <h1 className="text-4xl font-bold text-primary-100">
          Quanto custa o certificado digital A1?
        </h1>

        <p>
          Ao escolher a eApurei para fazer sua gestão contábil, garantimos um
          desconto especial com a nossa parceira Soluti para você adquirir seu
          certificado digital.
        </p>

        <ButtonComponent label="conheça nossos planos" linkTo="/#" />
      </section>

      <section>
        <div className="lg:justify-end flex justify-center">
          <div className="w-full max-w-sm rounded-lg bg-tertiary-50 shadow-lg">
            <div className="p-6">
              <div className="mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-500">
                  <span className="text-lg font-bold text-tertiary-50">S</span>
                </div>
                <span className="text-2xl font-bold text-gray-800">soluti</span>
              </div>

              <ul className="mb-6 space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-100"></div>
                  <span className="text-gray-700">Validade: 1 ano;</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-100"></div>
                  <span className="text-gray-700">
                    Parcelamento em até 10 vezes;
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-100"></div>
                  <span className="text-gray-700">
                    Desconto de 25% para clientes eApurei.
                  </span>
                </li>
              </ul>

              <div className="flex items-center justify-center gap-4 text-right">
                <div className="text-sm text-gray-400 line-through">
                  De R$235,00
                </div>
                <div className="flex items-center justify-center">
                  <span className="text-xl font-semibold text-primary-100">
                    R$
                  </span>
                  <span className="text-6xl font-bold text-primary-100">
                    175
                  </span>
                  <span className="text-xl text-primary-100">,00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
