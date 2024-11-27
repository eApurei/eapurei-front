import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function MainCosts() {
  return (
    <section
      className={`${roboto.className} flex w-full items-center justify-center gap-4 px-12 pt-20 dark:bg-grey-100 lg_2:px-2`}
    >
      <div className="flex w-1/2 flex-col items-start justify-center gap-4">
        <h1 className="text-3xl font-bold text-primary-100">
          Quer saber mais sobre quais são os principais custos para abrir uma
          empresa?
        </h1>

        <p className="text-base">
          São vários os custos para a abertura de uma empresa, desde os tributos
          legais (federais, estaduais e municipais), capital social
          integralizado, alvará entre outros. Para saber mais sobre esse
          assunto, confira o artigo que preparamos para você.
        </p>

        <ButtonComponent
          label="Fale com um de nossos especialistas"
          linkTo="#"
          style="mt-4"
        />
      </div>

      <div className="flex h-72 w-1/2 items-center justify-center bg-primary-100 text-white">
        IMAGEM
      </div>
    </section>
  )
}
