import { roboto } from '@/lib/fonts'

export default function Hero() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-8 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="flex w-full items-center justify-center">
        <div className="flex w-1/2 flex-col items-start justify-center gap-4">
          <h1 className="text-3xl font-bold text-primary-100">
            Calculadora salário PJ x CLT
            <span className="text-secondary-150">.</span>
          </h1>

          <p className="dark:text-white">
            A Calculadora PJ x CLT compara os impostos e benefícios dos regimes
            PJ e CLT, assim você descobre o salário bruto que você deve ganhar
            como PJ para manter seus ganhos equilibrados.
          </p>
        </div>
        <div className="w-1/2"></div>
      </section>
    </main>
  )
}
