import { roboto } from '@/lib/fonts'

export default function AllRegions() {
  return (
    <section
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 p-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Já estamos em todas as regiões
      </h1>

      <p className="w-[70%] text-center text-base">
        A eApurei já está em todas as regiões do país. Continuamos ampliando
        nossa área de atendimento para garantir abertura de empresa gratuita e
        contabilidade acessível para todo Brasil.
      </p>

      <div className="flex items-center justify-center gap-4 py-12">
        {Array.from({ length: 3 }).map((_, index) => (
          <div
            key={index}
            className="flex h-60 w-60 items-center justify-center bg-primary-100 text-white"
          >
            IMAGEM
          </div>
        ))}
      </div>
    </section>
  )
}
