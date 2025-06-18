import Image from 'next/image'

import { BenefitsCompanyPageProps } from '@/@types'
import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const benefits: BenefitsCompanyPageProps[] = [
  {
    title: 'Pacote saúde',
    description:
      'Cuide da saúde realizando consultas com psicólogos e nutricionistas e tenha desconto em exames e medicamentos.',
    avatarPartner: '/#',
    img: '/#',
  },
  {
    title: 'Academias e estúdios',
    description:
      'Treine em mais de 20 mil academias e estúdios do Brasil todo e tenha acesso a mais de 250 modalidades de esportes.',
    avatarPartner: '/#',
    img: '/#',
  },
]

export default function LearnAboutSomeOfTheBenefits() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-12 bg-gray-100 pb-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <section className="text-center">
        <h1 className="mb-4 text-3xl font-bold text-primary-100">
          Conheça alguns dos benefícios.
        </h1>

        <p className="leading-relaxed text-grey-100 dark:text-tertiary-100">
          Inclusos no plano{' '}
          <span className="font-semibold text-primary-100">
            Multibenefícios
          </span>{' '}
          e disponíveis no plano{' '}
          <span className="font-semibold text-primary-100">Experts</span>.
        </p>
      </section>

      <section className="flex w-full items-center justify-center gap-4">
        {benefits.map((content, index) => (
          <div
            key={index}
            className="bg-tertiary-50 w-[360px] rounded-lg border border-grey-950 p-8 text-center shadow-sm"
          >
            <div className="mb-8">
              <h2 className="mb-4 text-2xl font-bold text-primary-100">
                {content.title}
              </h2>

              <p className="mb-4 leading-relaxed text-grey-100">
                {content.description}
              </p>

              <div className="mb-8 flex items-center justify-center gap-2">
                <span className="text-sm text-grey-100">Nosso parceiro</span>

                <Image
                  src={content.img}
                  alt="Profissionais de saúde - médico e enfermeira"
                  aria-label="Profissionais de saúde - médico e enfermeira"
                  width={56}
                  height={56}
                  className="h-6 w-20 rounded-md bg-primary-100 object-cover"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="h-64 w-64 overflow-hidden rounded-full bg-gray-100">
                <Image
                  src={content.img}
                  alt="Profissionais de saúde - médico e enfermeira"
                  aria-label="Profissionais de saúde - médico e enfermeira"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        ))}
      </section>

      <ButtonComponent label="fale com um especialista" linkTo="#" />

      <p className="cursor-pointer text-primary-100 underline duration-300 hover:opacity-70">
        *Informações adicionais sobre os benefícios do plano
      </p>
    </main>
  )
}
