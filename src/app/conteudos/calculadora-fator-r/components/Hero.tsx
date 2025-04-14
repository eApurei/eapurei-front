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

      <section className="relative flex h-[25rem] w-full items-start justify-center py-12 pl-4 pr-12">
        <div className="flex w-1/2 flex-col items-start justify-center py-8 pl-64">
          <h4 className="font-bold uppercase text-secondary-100">fator r</h4>

          <span className="text-4xl font-bold text-primary-100">
            Considerações importantes sobre a calculadora de Fator R
          </span>
        </div>

        <div className="absolute bottom-0 left-24 -z-10 h-72 w-72 rounded-full bg-primary-25 opacity-30"></div>

        <div className="flex w-1/2 flex-col items-start justify-center gap-4 rounded-md bg-gray-100 p-8">
          <p>
            O uso do fator R como forma de pagar menos impostos é considerado
            elisão fiscal, sendo considerado um instrumento legal.
          </p>

          <p>
            O cálculo fator R é uma ferramenta que se aplica apenas às empresas
            optantes pelo simples nacional e em determinadas atividades
            empresariais (verificar parágrafo abaixo). Todavia, a ferramenta
            oferece campos de preenchimento para distinção entre atividades
            permitidas e não permitidas, assim como a verificação de que a
            empresa faz parte do Simples Nacional.
          </p>
        </div>
      </section>
    </>
  )
}
