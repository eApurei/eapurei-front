'use client'

import Link from 'next/link'

import { roboto } from '@/lib/fonts'

export default function WhatIsFactorR() {
  return (
    <main
      className={`relative flex w-full flex-col items-center justify-center gap-8 bg-gray-100 p-12 dark:bg-white lg_2:px-2`}
    >
      <article className="flex w-1/2 flex-col items-start justify-center gap-4">
        <h1 className="text-3xl font-bold text-primary-100">
          O que é o Fator R?
        </h1>

        <div
          className={`${roboto.className} flex flex-col items-start justify-center gap-4 font-normal`}
        >
          <p>
            Trata-se da porcentagem do faturamento bruto da empresa gasto com
            folha de pagamento. O cálculo é feito com os dados dos últimos 12
            meses.<strong> O fator R</strong> é calculado de forma mensal,
            podendo ter um resultado diferente a cada período.
          </p>

          <p>
            As empresas que possuem um fator R com valor equivalente ou superior
            a 28%, podem ser tributadas no <strong>Anexo III</strong> do simples
            nacional com alíquotas mais baixas, a partir de 6%, enquanto que as
            que possuem um valor abaixo são tributadas no{' '}
            <strong>Anexo V</strong> com alíquotas a partir de 15,5%.
          </p>

          <p>
            <strong>Alíquota simples nacional:</strong> acesse nossas tabelas do{' '}
            <Link
              className="text-primary-100 underline duration-300 hover:opacity-70"
              href={'/#'}
            >
              Anexo III
            </Link>{' '}
            e{' '}
            <Link
              className="text-primary-100 underline duration-300 hover:opacity-70"
              href={'/#'}
            >
              Anexo V
            </Link>{' '}
            para consultar a alíquota que irá compor o cálculo para o{' '}
            <strong>DAS (Documento de Arrecadação do Simples Nacional).</strong>
          </p>
        </div>
      </article>

      <article
        className={`${roboto.className} flex w-1/2 flex-col items-start justify-center gap-4`}
      >
        <h1 className="text-3xl font-bold text-primary-100">
          O que é Elisão Fiscal?
        </h1>

        <p>
          É uma prática legal que se vale de permissões e omissões nas leis que
          geram os impostos para reduzir a carga tributária nas empresas.
        </p>
      </article>

      <article
        className={`${roboto.className} flex w-1/2 flex-col items-start justify-center gap-4`}
      >
        <h1 className="text-3xl font-bold text-primary-100">
          Como calcular o Fator R do Simples Nacional?
        </h1>

        <ul>
          O cálculo consiste na divisão de dois valores, que seguem o período de
          apuração de 12 meses:
          <div className="mt-4">
            {Array.from([
              'Total gasto em folha de pagamento, considerando salários, pró-labore e impostos que podem ser adicionados, como INSS patronal, campo CPP na guia DAS e FGTS.',
              'Receita bruta da empresa, sem levar em conta os custos e outras deduções',
            ]).map((item, index) => (
              <li key={index} className="list-inside list-disc pl-4">
                {item}
              </li>
            ))}
          </div>
        </ul>

        {Array.from([
          'O resultado então é convertido para o valor percentual referente ao fator R.',
          'Fator R = Total gasto em Folha de pagamento acumulada nos últimos 12 meses / Receita bruta acumulada dos últimos 12 meses.',
        ]).map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <ul>
          Exemplo: Se no mês de outubro deste ano, a sua empresa obteve um
          faturamento bruto de R$10.000,00 acumulando-se R$120.000,00 dos
          últimos 12 meses. Sua folha de pagamento no mesmo mês foi de R$
          5.000,00, acumulando-se R$60.000,00 nos últimos 12 meses. Portanto,
          para calcular o fator R do mês, você deve fazer o seguinte:
          <div className="mt-4">
            {Array.from([
              'Fator R = R$ 60.000,00 / R$ 120.000,00',
              'Fator R = 0,50 * 100',
              'Fator R = 50%',
            ]).map((item, index) => (
              <li key={index} className="list-inside list-disc pl-4">
                {item}
              </li>
            ))}
          </div>
        </ul>

        <p>
          Se o resultado for igual ou superior a 28% ou 0,28, o prestador de
          serviço será tributado pelo Anexo III. Se for abaixo, será pelo Anexo
          V.
        </p>
      </article>

      <article
        className={`${roboto.className} flex w-1/2 flex-col items-start justify-center gap-4`}
      >
        <h1 className="text-3xl font-bold text-primary-100">
          Quais atividades são sujeitas ao Fator R?
        </h1>

        {Array.from([
          'Em geral, atividades do setor de serviços decorrentes do exercício de atividade intelectual, de natureza técnica, científica, desportiva, artística ou cultural são sujeitas ao fator R.',
          'Alguns exemplos: arquitetura e urbanismo, odontologia, representação comercial, academia de dança, escola de esportes e serviços de tradução.',
        ]).map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>

      <article
        className={`${roboto.className} flex w-1/2 flex-col items-start justify-center gap-4`}
      >
        <h1 className="text-3xl font-bold text-primary-100">
          Para quais regimes tributários o Fator R pode ser aplicado?
        </h1>

        <p>
          Se aplica apenas para as empresas que se enquadram no Simples
          Nacional.
        </p>

        <p>
          <Link
            className="text-primary-100 underline duration-300 hover:opacity-70"
            href={'/#'}
          >
            Saiba mais
          </Link>{' '}
          sobre a <strong>consulta optante simples nacional.</strong>
        </p>
      </article>
    </main>
  )
}
