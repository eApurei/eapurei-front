import { roboto } from '@/lib/fonts'

export default function WhatIsRPA() {
  return (
    <main
      className={`${roboto.className} flex h-[30rem] w-full flex-col items-center justify-center gap-4 bg-gray-100 px-40 py-8 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">O que é RPA?</h1>

      <section className="flex w-full items-center justify-center gap-4">
        <div className="flex w-1/2 flex-col items-start justify-center gap-4">
          <p className="dark:text-white">
            O que é RPA? RPA é a sigla de{' '}
            <strong>Recibo de Pagamento Autônomo</strong>, um documento usado
            para formalizar o pagamento feito aos profissionais autônomos, sem
            caracterizar vínculo empregatício.
          </p>

          <p className="dark:text-white">
            A emissão do RPA é feita pela empresa ou pessoa física contratante
            do serviço prestado. Já o recebimento do RPA é feito por qualquer
            profissional autônomo ou liberal que atua sem CNPJ – geralmente em
            profissões como médicos, advogados, psicólogos, arquitetos e
            engenheiros.
          </p>

          <p className="dark:text-white">
            Além de formalizar o pagamento, o RPA também serve para que o
            contratante possa recolher e repassar os impostos que incidem sobre
            o pagamento, que são: o IRRF (Imposto de Renda Retido na Fonte), o
            INSS (Previdência Social) e o ISS (Imposto Sobre Serviços).
          </p>
        </div>

        <div className="flex h-72 w-1/2 flex-col items-center justify-center bg-primary-100 text-white">
          IMAGE
        </div>
      </section>
    </main>
  )
}
