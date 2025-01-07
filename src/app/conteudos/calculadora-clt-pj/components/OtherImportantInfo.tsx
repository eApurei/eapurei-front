'use client'

import {
  CalendarDots,
  CheckCircle,
  FileText,
  Icon,
  IconWeight,
  Scales,
  SealPercent,
} from '@phosphor-icons/react'
import { useState } from 'react'

import ButtonComponent from '@/components/ButtonComponent'
import { roboto } from '@/lib/fonts'

const othersInfo: {
  icon: Icon
  label: string
  title: string
  pj: string[]
  clt: string[]
  weight?: IconWeight
}[] = [
  {
    icon: FileText,
    label: 'Contratação',
    title: 'Como é feita a contratação PJ e CLT?',
    pj: [
      'A contratação de uma pessoa que trabalhará como PJ é bem diferente da contratação como CLT. No caso do PJ (Pessoa Jurídica), não existe vínculo trabalhista, assim como os direitos e deveres são diferentes. ',
      'O profissional que deseja trabalhar como PJ precisa abrir uma empresa. Uma grande diferença em relação ao CLT é que o acordo entre empresa contratante e profissional não é registrado em carteira, as partes assinam um contrato que estabelece como será a relação para prestação de serviço: dias de trabalho, quantidades de horas trabalhadas e outras regras que as partes quiserem estabelecer. ',
    ],
    clt: [
      ' Para que a contratação CLT seja realizada, é necessário que a empresa contratante realize um acordo com o profissional seguindo as normas celetistas, o que envolvem uma série de procedimentos e custos. ',
      ' Entre as obrigações e burocracias estão a separação de todos os documentos solicitados, assinatura da carteira de trabalho e exame admissional. Com o vínculo empregatício, o profissional contratado passará a trabalhar com direitos garantidos por lei e deveres, conforme as regras previstas na CLT (Consolidação das Leis do Trabalho), documento que regula as relações de trabalho no Brasil. ',
    ],
    weight: 'fill',
  },
  {
    icon: CalendarDots,
    label: 'Obrigações',
    title: 'Quais são as principais obrigações de quem é PJ e CLT?',
    pj: [
      'Abrir um CNPJ',
      'Contratar um escritório de contabilidade para apurar e registrar os impostos',
      'Emitir notas fiscais',
      'Pagar os impostos mensalmente',
      'Cumprir com o que foi acordado em contrato',
    ],
    clt: [
      'Cumprir a jornada de trabalho prevista em lei',
      'Trabalhar somente para a empresa que consta registrada na carteira',
      'Fazer exames médicos obrigatórios',
      'Não faltar ao trabalho sem aviso prévio',
      'Em caso de falta, essa precisa ser justificada',
    ],
  },
  {
    icon: Scales,
    label: 'Direitos',
    title: 'Quais são os principais direitos de quem é PJ e CLT?',
    pj: [
      'Benefícios previdenciários tais como auxílio maternidade e aposentadoria',
      'Permissão para contratação de um funcionário pelo salário mínimo da categoria',
      'Emissão de notas fiscais',
    ],
    clt: [
      'Férias remuneradas',
      'Adicional por hora extra trabalhada',
      'Licença-maternidade e paternidade',
      'Seguro-desemprego em caso de demissão sem justa causa',
      'Ganhar um 13º salário por ano',
    ],
    weight: 'fill',
  },
  {
    icon: SealPercent,
    label: 'Descontos',
    title: 'Quais são os descontos para quem é PJ e CLT?',
    pj: [
      'Uma das grandes vantagens de se trabalhar como PJ é que o valor recebido pelos serviços prestados não sofre desconto legal algum. O contratante deverá pagar que foi combinado previamente em contrato somente. Isso acontece porque a Pessoa Jurídica não tem qualquer vínculo empregatício com a empresa que o contratou. No entanto, é preciso ter atenção e se planejar, pois será necessário pagar os impostos do PJ.',
    ],
    clt: [
      'São diversos descontos na folha de pagamento, das mais variadas categorias, como os facultativos, benefícios e aqueles que são obrigatórios por lei. Entre esse último tipo de desconto estão o INSS e o IRRF, que são exigidos para todos os profissionais contratados por uma empresa pela CLT e são abatidos do salário bruto. Para descobrir o salário líquido, será sempre necessário considerar esses abatimentos.',
    ],
    weight: 'fill',
  },
]

export default function OtherImportantInfo() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 bg-white p-8 dark:bg-grey-100 lg_2:px-2">
      <h1 className="text-3xl font-bold uppercase text-primary-100 lg_1:text-2xl lg_2:text-xl">
        Outras informações importantes
      </h1>

      <nav className="mt-8">
        <ul className="flex select-none flex-wrap items-center justify-center gap-4 lg_1:gap-2">
          {othersInfo.map(({ icon: Icon, label, weight }, index) => (
            <li
              key={index}
              className={`${activeIndex === index ? 'bg-secondary-100 text-white dark:bg-white dark:text-secondary-150' : 'dark:text-white'} flex w-52 cursor-pointer items-center justify-center gap-2 rounded-md border border-secondary-100 px-4 py-2 font-bold text-secondary-100 duration-300 hover:bg-secondary-100 hover:text-white dark:border-white hover:dark:bg-white hover:dark:text-secondary-100 lg_1:px-2 lg_1:text-sm lg_2:py-1 lg_2:text-xs`}
              onClick={() => setActiveIndex(index)}
            >
              <Icon weight={weight} size={24} className="lg_2:w-4" />
              {label}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8 flex w-[80%] flex-col items-start justify-center gap-8 rounded-md bg-grey-950 p-4 dark:bg-dark-200">
        <h1 className="text-2xl font-bold text-primary-100">
          {othersInfo[activeIndex].title}
        </h1>

        <div className="flex w-full items-start justify-center gap-4">
          <div className="flex w-1/2 flex-col items-start justify-start gap-4">
            <p className="w-12 rounded-full bg-primary-100 text-center font-bold text-white">
              PJ
            </p>

            {othersInfo[activeIndex].pj.map((item, index) => (
              <article className="flex w-full gap-2" key={index}>
                <CheckCircle
                  weight="fill"
                  className="h-6 w-6 text-primary-100"
                />

                <span
                  className={`text-base lg_2:text-xs ${roboto.className} w-[90%]`}
                >
                  {item}
                </span>
              </article>
            ))}
          </div>

          <div className="flex w-1/2 flex-col items-start justify-start gap-4">
            <p className="w-12 rounded-full bg-primary-100 text-center font-bold text-white">
              CLT
            </p>

            {othersInfo[activeIndex].clt.map((item, index) => (
              <article className="flex w-full gap-2" key={index}>
                <CheckCircle
                  weight="fill"
                  className="h-6 w-6 text-primary-100"
                />

                <span
                  className={`text-base lg_2:text-xs ${roboto.className} w-[90%]`}
                >
                  {item}
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="my-8 flex items-center justify-center gap-4">
        <ButtonComponent label="Conheça nossos planos" linkTo="/planos" />
      </div>
    </div>
  )
}
