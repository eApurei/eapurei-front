import { ComparisonDataProps } from '@/@types'
import { roboto } from '@/lib/fonts'

const comparisonData: ComparisonDataProps[] = [
  {
    service: 'Abertura / consultoria e preparação',
    eapurei: 'Zero',
    market: 'R$ 600 - R$ 1.200/ano',
    isZero: true,
  },
  {
    service: 'Taxas de abertura do governo e certificado digital',
    eapurei: 'Zero',
    market: 'R$ 400 - R$ 600/ano',
    isZero: true,
  },
  {
    service: 'Consultas online com psicólogos e nutricionistas',
    eapurei: 'Zero',
    market: 'R$ 2.500 - R$ 6.000/ano',
    isZero: true,
  },
  {
    service: 'Conta PJ',
    eapurei: 'Zero',
    market: 'R$ 200 - R$ 240/ano',
    isZero: true,
  },
  {
    service: 'Mensalidade contabilidade',
    eapurei: 'R$ 1.500 - R$ 4.500/ano',
    market: 'R$ 5.000 - R$ 6.000/ano',
    isZero: false,
  },
  {
    service: 'TotalPass',
    eapurei: 'Planos até 25% mais baratos que o mercado',
    market: '',
    isSpecial: true,
  },
]

export default function WhyEApureiIsTheBestOption() {
  return (
    <main
      className={`${roboto.className} -mt-4 flex w-full flex-col items-center justify-center gap-4 bg-gray-100 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="my-8 text-center">
        <h1 className="mb-4 text-4xl font-bold text-primary-100">
          Por que a eApurei é a melhor opção?
        </h1>

        <p className="text-lg leading-relaxed text-grey-100 dark:text-tertiary-100">
          Benefícios que vão além da contabilidade e estão inclusos no plano{' '}
          <span className="font-semibold text-primary-100">
            Multibenefícios
          </span>{' '}
          e disponíveis para o plano{' '}
          <span className="font-semibold text-primary-100">Experts</span>.
        </p>
      </section>

      <section className="mb-8 w-2/3 overflow-hidden rounded-lg border border-grey-950 bg-white shadow-sm">
        <div className="grid grid-cols-3 border-b border-grey-950 bg-gray-50">
          <div className="p-4"></div>

          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-primary-100">eApurei</h3>
          </div>

          <div className="p-4 text-center">
            <h3 className="text-xl font-bold text-grey-100">
              Média do mercado
            </h3>
          </div>
        </div>

        {comparisonData.map((row, index) => (
          <section
            key={index}
            className={`grid grid-cols-3 border-b border-grey-950 last:border-b-0 ${
              index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
            }`}
          >
            <div className="p-4">
              <span className="font-medium text-dark-100">{row.service}</span>
            </div>

            <div className="p-4 text-center">
              {row.isZero ? (
                <span className="text-lg font-bold text-primary-100">Zero</span>
              ) : row.isSpecial ? (
                <span className="text-sm font-semibold text-primary-100">
                  {row.eapurei}
                </span>
              ) : (
                <span className="font-semibold text-dark-100">
                  {row.eapurei}
                </span>
              )}
            </div>

            <div className="p-4 text-center">
              {row.market && (
                <span className="font-medium text-grey-100">{row.market}</span>
              )}
            </div>
          </section>
        ))}
      </section>

      <div className="text-tertiary-50 -mt-12 w-2/3 rounded-lg bg-primary-100 p-8 text-center">
        <h2 className="mb-4 text-2xl font-bold">Uma economia de até</h2>
        <div className="text-tertiary-50 mb-6 text-5xl font-bold">
          R$ 10.000 por ano*
        </div>
        <p className="mb-4 text-lg leading-relaxed">
          Com o Multibenefícios você tem o plano de contabilidade que apoia a
          carreira que você escolheu e traz os benefícios que você merece.
        </p>
        <p className="text-sm text-gray-300">
          * Custos referentes aos serviços de contabilidade e consultas online
        </p>
      </div>
    </main>
  )
}
