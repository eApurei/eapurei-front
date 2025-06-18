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
          Os 3 passos para abertura de empresa com a eApurei.
        </h1>

        <p className="text-lg leading-relaxed text-grey-100 dark:text-tertiary-100">
          Trabalhamos de forma prática, simples, econômica e muito próxima de
          você.
        </p>
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
                Orientamos você em todas as escolhas
              </h1>

              <span className="text-grey-100">
                Após escolher seu plano, nossos especialistas irão analisar seu
                perfil e orientar na escolha do CNAE, tipo de empresa, taxas e
                certificado digital.
              </span>
            </div>

            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl text-primary-100">
                Realizamos todo o processo de abertura da empresa
              </h1>

              <span className="text-grey-100">
                Te atualizamos a cada etapa da abertura e assim que concluído,
                sua conta bancária e informações fiscais são integradas à nossa
                plataforma.
              </span>
            </div>
            <div className="flex flex-col items-start justify-center">
              <h1 className="text-xl text-primary-100">
                Cuidamos da sua contabilidade
              </h1>

              <span className="text-grey-100">
                O maior time de contadores do Brasil cuidará da sua
                contabilidade mensalmente, com cálculos de impostos, lembretes e
                documentos organizados digitalmente.
              </span>
            </div>
          </section>
        </section>
      </section>

      <div className="mt-8 flex w-full items-center justify-center">
        <ButtonComponent label="quero abrir minha empresa" linkTo="#" />
      </div>
    </main>
  )
}
