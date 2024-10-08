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
    label: 'Como funciona eApurei?',
    value:
      'Em média, empresas prestadoras de serviços podem ter mensalidades entre R$300 e R$600. Comércios podem chegar a R$1.000. Diversos aspectos influenciam no preço de um contador, como por exemplo a complexidade do serviço a ser prestado. Na eApurei temos planos mensais a partir de R$129 por mês.',
  },
  {
    label: 'Eu realmente preciso de um contador?',
    value:
      'Sim. Exceto pelo Microempreendedor Individual (MEI), todas as empresas precisam de um contador para responder por sua contabilidade perante o governo. Declaração de impostos, balanços, folha de pagamento: tudo precisa ser assinado por um contador com registro ativo no Conselho Regional de Contabilidade (CRC). Além da obrigatoriedade prevista em lei, o contador garante que sejam pagos apenas os impostos realmente devidos e que a empresa esteja sempre em dia com suas obrigações.',
  },
  {
    label: 'Quanto custa o serviço de contabilidade da eApurei?',
    value:
      'A eApurei tem planos com mensalidades a partir de R$129 para empresas do Simples Nacional e R$229 para empresas do Lucro Presumido. Você pode escolher entre os planos Básico, Padrão, Experts Essencial ou Experts PRO, de acordo com as características e necessidades da sua empresa.',
  },
  {
    label: 'O que é abertura sem sair de casa?',
    value:
      'Na modalidade abertura sem sair de casa, o processo de abertura é realizado pela eApurei e você não precisa sair de casa em nenhuma etapa do processo. A abertura sem sair de casa está disponível apenas para as cidades de Belo Horizonte, Curitiba, Florianópolis e São Paulo.',
  },
  {
    label:
      'Quais são as taxas do governo a serem pagas na abertura de uma empresa?',
    value:
      'Para abrir um CNPJ é preciso pagar a DARE (Documento de arrecadação de receitas estaduais) na Junta Comercial do seu estado. As taxas do governo e da prefeitura aplicadas na abertura de uma empresa podem variar conforme a localização e atividade exercida.',
  },
  {
    label: 'Quanto em média custam as taxas do governo para abrir uma empresa?',
    value:
      'O valor das taxas do governo varia por estado e município. A taxa da Junta Comercial, a DARE, pode chegar a R$ 400. Já o alvará, que é de responsabilidade da prefeitura, pode ultrapassar R$ 3.000 dependendo da localização, porte e atividade da empresa.',
  },
  {
    label: 'Quanto custa o serviço de folha de pagamento?',
    value:
      'Na eApurei, o serviço de folha de pagamento está incluso nos planos Experts Essencials e Experts PRO. No plano Padrão esse serviço é cobrado à parte e no plano Básico ele não está incluso.',
  },
  {
    label: 'O que é certificado digital e qual sua obrigatoriedade?',
    value:
      'O certificado digital é uma ferramenta que permite que empresas assinem documentos e façam transações em ambientes online. Seu uso tem total validade jurídica e é obrigatório para emissão de notas fiscais eletrônicas.',
  },
  {
    label: 'Quais são os documentos necessários para abrir uma empresa?',
    value:
      'Para abrir uma empresa você precisará providenciar alguns documentos, tais como: RG, CPF, comprovante de endereço, certidão de casamento, se você for casado, cópia do IPTU ou documento que indique a inscrição municipal do imóvel em que será a sede da sua empresa. Caso você decida ter sócios deverá providenciar os mesmos documentos de todos eles. Algumas atividades ou situações podem exigir documentos adicionais, mas não se preocupe que te orientamos sobre como tudo isso funciona em situações especiais.',
  },
  {
    label: 'Qual a diferença entre pró-labore e salário?',
    value:
      'Pró-labore é a remuneração que o gestor, ou sócio de uma empresa, tem direito e é muitas vezes confundido com o salário. Através do pró-labore o empresário pode, por exemplo, contribuir para a previdência social.',
  },
]

export default function FAQ() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 px-8 pb-8 pt-20 dark:bg-grey-100">
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
