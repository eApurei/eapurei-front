import { AccordionItemsProps } from '@/@types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { roboto } from '@/lib/fonts'

const accordionItems: AccordionItemsProps[] = [
  {
    label: 'Como saber se vale a pena ser PJ?',
    value:
      'Quem trabalha como CLT tem alguns descontos, no salário bruto, que estão previstos em lei, inclusive em razão de benefícios inclusos nessa modalidade de contrato de trabalho, tais como: férias, descanso semanal, décimo terceiro etc. Já quem trabalha como PJ não possui esses descontos em sua remuneração. Para saber se vale a pena ser PJ ao invés de CLT, você precisa levar em consideração esses e outros fatores. ',
  },
  {
    label: 'Quantas horas um PJ pode trabalhar?',
    value:
      'Quem trabalha como PJ tem autonomia para escolher quantas horas por dia, ou por mês, deseja trabalhar. A carga horária de trabalho PJ não pode ser definida pela empresa contratante e as empresas não podem obrigar o trabalhador PJ a trabalhar oito ou mais horas por dia, se não tiver uma cláusula específica sobre essa questão.',
  },
  {
    label: 'Trabalhar como PJ está dentro da lei?',
    value:
      'É comum vermos profissionais sendo contratados como pessoas jurídicas dentro das empresas. A contratação é, sim, permitida pela lei, mas vale lembrar que se trata da lei civil que é diferente da CLT.',
  },
  {
    label: 'Quais são os custos da contratação CLT para o contratante?',
    value:
      'Uma empresa que contrata um profissional sob o regime da CLT não ficará apenas com a responsabilidade de pagar o salário. Será necessário também arcar com outros valores que vão além da remuneração. O custo de um funcionário para a empresa pode chegar a até três vezes o salário do profissional, conforme indicou uma pesquisa feita pela FGV (Fundação Getúlio Vargas) e CNI (Confederação Nacional da Indústria). É preciso considerar obrigações como: FGTS, contribuições sociais, férias, 13º salário, outros benefícios, tais como vale-transporte, plano de saúde e vale-refeição, por exemplo. Soma-se a isso, ainda, as indenizações em função de possível demissão, com valores a pagar conforme estipula a lei.',
  },
  {
    label: 'Quais os custos da contratação PJ para o profissional?',
    value:
      'O profissional que trabalha como PJ precisa saber se planejar bem com a sua remuneração a fim de pagar os custos mensais da sua empresa. Mensalmente, além do serviço da contabilidade, é necessário se planejar para pagar, de maneira geral, os seguintes impostos, considerando uma empresa do Simples Nacional: imposto sobre faturamento, INSS, Imposto de renda, Saiba, porém, que é possível pagar menos impostos como PJ com boas práticas e a eApurei te ajudará com isso.',
  },
  {
    label: 'Quais os custos da contratação PJ para o contratante?',
    value:
      'Os custos da contratação PJ podem ser positivos também para quem realiza a contratação, uma vez que a empresa não precisará pagar pelas obrigações legais previstas na CLT. Por exemplo: se a empresa paga uma remuneração de R$10 mil para um profissional no regime CLT, ela deve ainda considerar os encargos além do salário, como INSS, IRRF, férias, 13º salário e outros benefícios em geral. Já quem contrata um PJ tem o dever apenas de pagar a remuneração prevista em contrato, sem a necessidade de arcar com os mesmos custos da CLT, o que pode tornar a contratação, de forma geral, mais acessível. Hoje em dia, muitas empresas estão contratando profissionais PJ para reduzir seus custos e encargos trabalhistas, expandindo, ainda, a procura por mão de obra com boa qualificação.',
  },
  {
    label: 'Quanto de imposto eu pagarei sendo PJ?',
    value:
      'A quantidade de impostos de quem escolhe ser PJ depende do regime tributário. Confira a tabela abaixo para entender melhor o quanto você pagará de impostos sendo PJ:',
  },
]

export default function FAQ() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 px-8 py-20 dark:bg-grey-100">
      <h1 className="text-4xl font-bold text-grey-100 dark:text-white">
        Perguntas Frequentes
      </h1>

      <div className={`w-[70%] ${roboto.className} dark:text-white`}>
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.label}</AccordionTrigger>
                <AccordionContent>{item.value}</AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </main>
  )
}
