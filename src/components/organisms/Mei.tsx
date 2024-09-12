import Image from 'next/image'

import Button from '../atoms/Button'

export default function Mei() {
  return (
    <main className="flex w-full select-none items-center justify-between bg-secondary-100 px-8 py-16">
      <section className="flex flex-1 flex-col items-start justify-center gap-4">
        <h1 className="text-2xl font-bold text-white">
          Seu <span className="text-yellow-300">MEI</span> cresceu? Nós cuidamos
          do desenquadramento com excelência!
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 font-normal text-white">
          <p>
            Não aguarde ultrapassar o limite de faturamento do MEI para fazer o
            desenquadramento, pois em alguns casos você estará sujeito a multas
            e outras possíveis penalidades!
          </p>

          <p>
            Temos uma equipe especialista a disposição para analisar o seu MEI e
            te explicar sobre os próximos passos, fornecendo suporte sobre o
            melhor regime tributário para sua empresa e, realizando o
            desenquadramento do MEI de forma totalmente gratuita.
          </p>
        </div>

        <Button
          label="desenquadrar agora"
          linkTo="https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20realizar%20o%20desenquadramento%20do%20meu%20MEI,%20por%20gentileza."
        />
      </section>

      <section className="flex w-[45%] items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={'/larissa.png'}
            alt="Larissa Image"
            aria-label="Larissa Image"
            className="w-96"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  )
}
