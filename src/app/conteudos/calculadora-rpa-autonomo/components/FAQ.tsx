import { AccordionItemsFAQProps } from '@/@types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { roboto } from '@/lib/fonts'

const accordionItems: AccordionItemsFAQProps[] = [
  {
    label: 'Regime PJ',
    value: [
      `Para a modalidade de pessoa jurídica, quando você trabalha com um CNPJ, o cálculo referente ao PJ está considerando o regime tributário do Simples Nacional, Anexo 3, com alíquotas de imposto sobre faturamento entre 6% e 33%. É preciso levar em conta que nem todas as atividades de atuação permitem enquadramento no Anexo 3.`,
      `Ainda na categoria pessoa jurídica, é simulado um pró-labore no valor de 28% do salário bruto, ou um valor de R$ 1.518,00 para os casos onde os 28% não atingem o salário mínimo.`,
      `Sobre o pró-labore é calculado o INSS de 11% com teto de R$ 6.433,57, alíquota válida para empresas no Simples Nacional. Nesse caso, não há recolhimento do INSS patronal. Também é calculado o Imposto de Renda, variável de acordo com a tabela do IR de rendimento mensal.`,
      `Para o serviço de contador, foi usado como base o valor do plano Básico da Contabilizei, de R$ 129 ao mês. Os planos mensais variam de R$ 129 a R$ 369. O valor do ganho mensal bruto, por lei, não pode ser inferior ao valor do salário mínimo vigente (R$ 1.518,00).`,
    ],
  },
  {
    label: 'Trabalho autônomo',
    value: [
      'Para o autônomo, foi calculado o valor de INSS em 11%, do plano simplificado de contribuição individual, com teto de R$ 6.433,57 no faturamento.',
      'Também há contribuição do ISS para autônomos. Para essa modalidade, as alíquotas variam entre 3% e 5%, a depender do município e da atividade. Na Calculadora do Autônomo, foi simulado o valor de 5%.',
      'O cálculo para autônomos também leva em conta o pagamento do imposto de renda variável de acordo com o ganho bruto.',
      '*As atividades que você vai exercer, a cidade em que você se localiza e o regime tributário da empresa contratante e o da sua própria empresa podem fazer com que os números apresentados variem, então é importante analisar todas essas questões para otimizar ainda mais o seu recebimento líquido no final de cada mês.',
    ],
  },
  {
    label: 'Custo do contratante',
    value: [
      'Para o cálculo, foi considerado o custo de empresas contratantes no regime tributário Lucro Presumido. Veja a seguir como o cálculo é composto em cada modelo de contratação:',
      'Contratado autônomo: salário bruto e CPP (Contribuição Previdenciária Patronal) de 20% do salário bruto.',
      'Contratado pessoa jurídica: salário bruto.',
    ],
  },
]

export default function FAQ() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 bg-gray-100 px-8 py-20 dark:bg-grey-100">
      <h1 className="w-1/2 text-center text-4xl font-bold text-grey-100 dark:text-white">
        Considerações importantes sobre a Calculadora do Autônomo
      </h1>

      <div
        className={`flex w-[70%] flex-col items-center justify-center gap-12 ${roboto.className} dark:text-white`}
      >
        <Accordion type="single" collapsible className="w-full">
          {accordionItems.map((item, index) => {
            return (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-base">
                  {item.label}
                </AccordionTrigger>
                {item.value.map((content, i) => (
                  <AccordionContent key={i} className="text-base">
                    {content}
                  </AccordionContent>
                ))}
              </AccordionItem>
            )
          })}
        </Accordion>

        <div className="flex w-full flex-col items-start justify-center gap-4">
          {Array.from([
            '* A calculadora de RPA é indicada somente para consulta, e a eApurei não é responsável pelo uso das informações.',
            'O cálculo do CPP foi simulado com base em uma empresa contratante que pertence ao Lucro Presumido. Os cálculos do PJ simulam uma empresa contratada que pertence ao Simples Nacional, Anexo 3. Para esclarecimentos, converse com um contador da sua confiança.',
          ]).map((content, i) => (
            <p className="w-full" key={i}>
              {content}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}
