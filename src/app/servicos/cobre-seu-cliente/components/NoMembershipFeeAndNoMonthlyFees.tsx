import { NoMembershipFeeAndNoMonthlyFeesContentProps } from '@/@types'
import { roboto } from '@/lib/fonts'

const content: NoMembershipFeeAndNoMonthlyFeesContentProps[] = [
  {
    title: 'Pix',
    firstSubtitle: 'Taxa de emissão',
    firstDescription: 'Grátis.',
    secondSubtitle: 'Taxa de compensação',
    secondDescription: 'R$ 1,99 por Pix.',
    img: '',
  },
  {
    title: 'Cartão de crédito',
    firstSubtitle: 'Taxa à vista ou parcelado',
    firstDescription: '2,99% + R$ 0,99 por operação.',
    secondSubtitle: 'Tarifa de antecipação',
    secondDescription: '1,89% por parcela.',
    img: '',
  },
]

export default function NoMembershipFeeAndNoMonthlyFees() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-16 bg-tertiary-50 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="flex-1 text-4xl font-bold text-primary-100">
        Sem taxa de adesão e mensalidades.
      </h1>

      <section className="flex w-full items-center justify-center gap-4">
        {content.map((item, index) => (
          <div
            key={index}
            className="flex h-60 w-[45%] items-center justify-between rounded-lg border border-gray-100 bg-gray-100 pl-12 shadow-lg"
          >
            <div className="flex flex-col items-start justify-center gap-4 py-6">
              <h1 className="flex-1 text-3xl font-bold text-primary-100">
                {item.title}
              </h1>

              <div className="flex flex-col items-start justify-center text-grey-100">
                <h5 className="flex-1 text-lg font-bold text-primary-100">
                  {item.firstSubtitle}
                </h5>
                <p>{item.firstDescription}</p>
              </div>

              <div className="flex flex-col items-start justify-center text-grey-100">
                <h5 className="flex-1 text-lg font-bold text-primary-100">
                  {item.secondSubtitle}
                </h5>
                <p>{item.secondDescription}</p>
              </div>
            </div>

            <div className="flex h-full w-60 items-center justify-center rounded-e-lg bg-primary-100 text-tertiary-50">
              IMAGEM{' '}
              {/* Essa div vai virar um <Image />, já estou passando a prop img dentro do map neste componente */}
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
