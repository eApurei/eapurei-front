import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function VirtualOfficeOrFiscalAddress() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-4xl font-bold text-primary-100">
        Escritório Virtual ou Endereço Fiscal?
      </h1>

      <p className="text-grey-100">
        Saiba mais sobre cada termo e como cada um atende o seu negócio.
      </p>

      <section className="flex w-full items-center justify-center gap-8 p-6">
        <div className="flex w-1/2 items-start justify-center gap-4 rounded-lg border border-tertiary-100 shadow-lg">
          <div className="flex w-[60%] flex-col items-start justify-center gap-4 p-6">
            <h1 className="text-2xl font-bold text-primary-100">
              Endereço ou Domicílio Fiscal
            </h1>

            <p className="w-[90%]">
              O endereço fiscal, também conhecido como domicílio fiscal, é o
              endereço comercial indicado no momento da abertura do CNPJ e que
              deve ser utilizado nos documentos oficiais, como contratos, notas
              fiscais e boletos. Através desse endereço, você garante aos órgãos
              públicos que o seu local comercial atende a todas as condições que
              a atividade pretendida exige.
            </p>
          </div>

          <span className="flex h-96 w-[40%] items-center justify-center rounded-e-lg bg-primary-100 text-white">
            IMAGE
          </span>
        </div>

        <div className="flex w-1/2 items-start justify-center gap-4 rounded-lg border border-tertiary-100 shadow-lg">
          <div className="flex w-[60%] flex-col items-start justify-center gap-4 p-6">
            <h1 className="text-2xl font-bold text-primary-100">
              Escritório Virtual
            </h1>

            <p className="w-[90%]">
              Já o escritório virtual vai além do endereço fiscal, e pode
              oferecer também outros serviços de um escritório físico, como o
              recebimento, digitalização e envio de correspondências por e-mail.
              Dessa forma, além de você ter a segurança de não vincular seu
              endereço pessoal ao comercial, ainda oferece um endereço de
              credibilidade aos seus clientes.
            </p>
          </div>

          <span className="flex h-96 w-[40%] items-center justify-center rounded-e-lg bg-primary-100 text-white">
            IMAGE
          </span>
        </div>
      </section>

      <ButtonComponent label="contrate o escritório virtual" linkTo="/#" />
    </main>
  )
}
