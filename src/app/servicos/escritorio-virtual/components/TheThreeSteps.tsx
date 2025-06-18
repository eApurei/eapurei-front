import Image from 'next/image'

import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function TheThreeSteps() {
  return (
    <main
      className={`${roboto.className} -mt-4 flex w-full flex-col items-center justify-center gap-4 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="my-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary-100">
          Contrate o Escritório Virtual em apenas 3 passos.
        </h1>
      </section>

      <section className="flex w-full items-center justify-center gap-8">
        <Image
          alt={`Solution  Image`}
          src={`/solutions/a.png`}
          width={1080}
          height={1080}
          className="w-[28rem] bg-primary-100"
          aria-label={`Solution Image`}
        />

        <section
          className={`flex w-[60%] items-start justify-start gap-4 rounded-md px-4 py-8 dark:bg-dark-200`}
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center rounded-full bg-primary-100 px-4 py-2 text-2xl text-white">
              <span>1</span>
            </div>

            <Separator orientation="vertical" className="h-16 bg-primary-100" />

            <div className="flex items-center justify-center rounded-full bg-primary-100 px-4 py-2 text-2xl text-white">
              <span>2</span>
            </div>

            <Separator orientation="vertical" className="h-16 bg-primary-100" />

            <div className="flex items-center justify-center rounded-full bg-primary-100 px-4 py-2 text-2xl text-white">
              <span>3</span>
            </div>
          </div>

          <section className="flex flex-1 flex-col items-start justify-center gap-[52px]">
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl text-primary-100">
                Preencha o formulário
              </h1>

              <span className="text-grey-100">
                Você preenche suas informações em nosso site e um de nossos
                especialistas entrará em contato.
              </span>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl text-primary-100">
                Envie seus documentos
              </h1>

              <span className="text-grey-100">
                Após recebermos seus documentos, enviaremos o contrato para sua
                conferência e assinatura.
              </span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl text-primary-100">
                Assine o contrato digitalmente
              </h1>

              <span className="text-grey-100">
                Pronto! Agora sua empresa já tem um endereço fiscal e você só
                paga a primeira parcela do plano após a abertura do seu CNPJ.
              </span>
            </div>
          </section>
        </section>
      </section>

      <div className="mt-8 flex w-full items-center justify-center">
        <ButtonComponent label="fale com um especialista" linkTo="#" />
      </div>
    </main>
  )
}
