import ButtonComponent from '@/components/ButtonComponent'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function OpenYourCompany() {
  return (
    <section className="flex w-full flex-col items-center justify-center gap-4 px-8 py-16 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-3xl font-bold text-primary-100">
        Abra sua empresa com a <span className="text-secondary-150">e</span>
        Apurei
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

        <Separator className="absolute left-[232px] top-4 w-[336px] bg-primary-100" />
        <Separator className="absolute right-[232px] top-4 w-[336px] bg-primary-100" />
      </div>

      <div className="mt-12 flex items-center justify-center">
        <ButtonComponent label="Abra sua empresa grátis" linkTo="#" />
      </div>
    </section>
  )
}
