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
    label: 'Quanto custa um CNPJ por mês?',
    value:
      'O custo mensal de um CNPJ depende do regime tributário (Simples Nacional, Lucro Presumido ou Lucro Real) e será calculado com base no resultado ou nas alíquotas estipuladas pela Receita Federal de acordo com o faturamento. No caso do Simples Nacional você deverá ver as alíquotas para cada CNAE.',
  },
  {
    label: 'Quanto em média custa o serviço de um contador?',
    value:
      'Em média, empresas prestadoras de serviços podem ter mensalidades entre R$ 300 e R$ 600. Comércios podem chegar a R$ 1.000. Diversos aspectos influenciam no preço de um contador, como por exemplo a complexidade do serviço a ser prestado. Na eApurei temos planos mensais a partir de R$ 159 por mês.',
  },
  {
    label: 'Quando é preciso ter CNPJ?',
    value:
      'Quando você prestar serviço o ideal é que você tenha um CNPJ e emita suas notas fiscais. Formalizando o seu trabalho você garante alguns benefícios, tais como: possibilidade da diminuição da tributação, realização de operações bancárias como pessoa jurídica, contratação dos seus serviços por órgãos governamentais ou empresas privadas, entre outros.',
  },
  {
    label: 'Quem não pode ter CNPJ?',
    value:
      'Com exceção do funcionário público que pode ser sócio de empresa mediante orientações específicas, são impedidos de terem CNPJ no seu nome: menores de 18 anos, relativamente incapazes devido a vício em tóxicos, empresários falidos não reabilitados, condenados à pena que impossibilite acesso a cargos públicos, mesmo que temporariamente, condenados a crimes contra o sistema financeiro nacional, condenados a crimes contra relações de consumo e fé pública, propriedade e normas de defesa da concorrência, durante o efeito da condenação e pessoas que desejam constituir sociedade e são casadas entre si em regime da comunhão universal de bens ou de separação obrigatória de bens.',
  },
  {
    label: 'A eApurei abre empresa grátis?',
    value:
      'Sim. Contratando qualquer um dos planos de contabilidade da eApurei o processo de abertura é grátis e você só paga as taxas do governo e realiza os protocolos físicos.',
  },
  {
    label: 'Qual o capital social mínimo para constituir uma empresa?',
    value:
      'O correto é que o capital social de uma empresa seja determinado tendo como base a estimativa dos valores necessários para sua abertura e funcionamento. No entanto, é bastante comum não conseguir chegar a um número exato ou que o empreendedor tenha pressa de obter seu CNPJ. Em casos assim, a indicação é que se registre no mínimo R$ 1.000,00 (quantia válida para as modalidades Empresário Individual e Sociedade Limitada) e o valor seja alterado posteriormente.',
  },
  {
    label: 'Quais são os documentos necessários para abrir uma empresa?',
    value:
      'Para abrir uma empresa você precisará providenciar alguns documentos, tais como: RG, CPF, comprovante de endereço, certidão de casamento, se você for casado, cópia do IPTU ou documento que indique a inscrição municipal do imóvel em que será a sede da sua empresa. Caso você decida ter sócios deverá providenciar os mesmos documentos de todos eles. Algumas atividades ou situações podem exigir documentos adicionais, mas não se preocupe que te orientamos sobre como tudo isso funciona em situações especiais.',
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
                <AccordionTrigger className="text-base">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent className="text-base">
                  {item.value}
                </AccordionContent>
              </AccordionItem>
            )
          })}
        </Accordion>
      </div>
    </main>
  )
}
