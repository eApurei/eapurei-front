import { roboto } from '@/lib/fonts'

export default function SocialProof() {
  return (
    <section
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-12 py-4 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Confira o que nossos clientes falam sobre nós.
      </h1>

      <p className="text-base">
        Somos reconhecidos pela nossa especialização em diversos segmentos.
      </p>
    </section>
  )
}
