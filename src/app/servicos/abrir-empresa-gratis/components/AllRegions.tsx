import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

export default function AllRegions() {
  return (
    <section
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 p-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Somos líderes em abertura de CNPJ no Brasil.
      </h1>

      <div className="flex items-center justify-center gap-4 py-12">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="flex h-60 w-60 items-center justify-center bg-primary-100 text-white"
          >
            IMAGEM
          </div>
        ))}
      </div>

      <ButtonComponent label="fale com um especialista" linkTo="/#" />
    </section>
  )
}
