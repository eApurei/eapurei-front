import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function KeepTrackOfYourAccountingManagement() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-4 bg-gray-100 px-4 py-12 dark:bg-grey-100 lg_2:px-2">
        <h1 className="text-3xl font-bold text-primary-100">
          Acompanhe a gestão da sua contabilidade em nossa plataforma
        </h1>

        <section
          className={`${roboto.className} flex w-full items-center justify-center gap-4 py-8`}
        >
          <div className="flex w-72 flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-lg">
            <h1 className="text-2xl font-medium text-primary-100">
              Plataforma 24h disponível
            </h1>
            <span>
              Você pode acompanhar e gerenciar em tempo real, de maneira simples
              e prática, a gestão contábil da sua empresa em nossa plataforma.
            </span>
          </div>
          <div className="flex w-72 flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md">
            <h1 className="text-2xl font-medium text-primary-100">
              Simulador de impostos
            </h1>
            <span>
              No simulador, disponível em nossa plataforma online, você calcula
              o quanto você pagará de imposto de acordo com o seu faturamento.
            </span>
          </div>
          <div className="flex w-72 flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md">
            <h1 className="text-2xl font-medium text-primary-100">
              Emissor de notas fiscais
            </h1>
            <span>
              Com o nosso emissor de notas fiscais você emite todas as suas
              notas de maneira simples e rápida, e em um clique replica as
              recorrentes.
            </span>
          </div>
          <div className="flex w-72 flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md">
            <h1 className="text-2xl font-medium text-primary-100">
              Cobrança online de clientes
            </h1>
            <span>
              Parcele seus produtos e serviços em até 12x para seus clientes e
              receba online, em até 2 dias úteis, sem precisar utilizar
              maquininha ou ter um site.
            </span>
          </div>
        </section>

        <div className="flex items-center justify-center gap-8">
          <ButtonComponent label="Fale com um especialista" linkTo="" />
          <ButtonComponent
            label="Saiba mais sobre a eApurei"
            style="bg-transparent !text-primary-100"
            linkTo=""
          />
        </div>
      </main>
    </>
  )
}
