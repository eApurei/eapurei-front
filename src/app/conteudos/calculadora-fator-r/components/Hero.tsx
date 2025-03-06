import Form from './Form'

export default function Hero() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-12 px-4 py-12 dark:bg-grey-100 lg_2:px-2">
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-3xl font-bold text-primary-100">
            Calculadora Fator R - Simples Nacional 2025
          </h1>

          <span className="text-lg font-semibold text-secondary-150">
            Saiba agora se sua empresa pode pagar menos impostos no mês atual!
          </span>

          <p className="w-1/2 text-center text-primary-100">
            A calculadora Fator R é uma ferramenta para empreendedores que
            desejam calcular se é possível economizar com impostos através da
            geração de empregos!
          </p>

          <p className="text-primary-100">
            Saiba agora se sua empresa pode aproveitar esta oportunidade!
          </p>

          <p className="text-primary-100">
            Para iniciar o cálculo, preencha abaixo:
          </p>
        </div>

        <Form />
      </main>
    </>
  )
}
