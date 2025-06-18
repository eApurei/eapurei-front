import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function StepByStepToObtainTheDigitalCertificate() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 px-8 py-16 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-4xl font-bold text-primary-100">
        Confira o passo a passo para obter o certificado digital com desconto.
      </h1>

      <div
        className={`${roboto.className} relative mt-8 flex w-full select-none items-start justify-around`}
      >
        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            1
          </h1>

          <h2 className="mt-4 text-xl font-bold text-primary-100">
            Cadastro e Contratação
          </h2>

          <p className="text-center">
            Você realiza o cadastro no site e contrata um de nossos planos.
          </p>
        </div>

        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            2
          </h1>

          <h2 className="mt-4 text-xl font-bold text-primary-100">
            Envio da documentação
          </h2>

          <p className="text-center">
            Nossos especialistas receberão os seus documentos e cuidarão de tudo
            para você.
          </p>
        </div>

        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            3
          </h1>

          <h2 className="mt-4 text-xl font-bold text-primary-100">
            CNPJ na mão
          </h2>

          <p className="text-center">
            Pague apenas os impostos obrigatórios de abertura e já tenha o seu
            CNPJ.
          </p>
        </div>

        <div className="flex max-w-[312px] flex-col items-center justify-center gap-1">
          <h1 className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-2xl leading-7 text-white">
            4
          </h1>

          <h2 className="mt-4 text-xl font-bold text-primary-100">
            Upload na plataforma
          </h2>

          <p className="text-center">
            Pronto! Acesse a plataforma da eApurei e faça o upload do seu
            certificado digital A1.
          </p>
        </div>

        <Separator className="absolute left-[220px] top-4 w-[240px] bg-primary-100" />
        <Separator className="absolute right-[220px] top-4 w-[240px] bg-primary-100" />
        <Separator className="absolute right-[568px] top-4 w-[240px] bg-primary-100" />
      </div>

      <div className="mt-12 flex items-center justify-center gap-8">
        <ButtonComponent label="Abra sua empresa" linkTo="#" />

        <ButtonComponent
          label="troque de contador"
          linkTo="#"
          style="bg-transparent !text-primary-100"
        />
      </div>
    </section>
  )
}
