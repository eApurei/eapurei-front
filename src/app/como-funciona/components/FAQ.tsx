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
    label: 'Quanto em média custa um contador?',
    value:
      'Em média, empresas prestadoras de serviços podem ter mensalidades entre R$300 e R$600. Comércios podem chegar a R$1.000. Diversos aspectos influenciam no preço de um contador, entre eles, a complexidade do serviço a ser prestado. Na eApurei temos planos mensais a partir de R$129.',
  },
  {
    label: 'Preciso de contador para abrir empresa?',
    value:
      'Sim, é preciso de contador para abrir empresa. A única exceção que não é obrigada por lei a ter um contador é o MEI e justamente por isso, a eApurei não atende microempreendedores individuais. Se você vai abrir uma microempresa ou qualquer outro porte de empresa que não é MEI, vai precisar da orientação de um contador, que será vinculado como responsável contábil pela sua empresa perante a Receita Federal e liberar o seu CNPJ. Após a abertura você continuará precisando do serviço para cuidar e assinar sua contabilidade mensalmente.',
  },
  {
    label: 'Qual é o custo para abrir CNPJ?',
    value:
      'O custo para abrir um CNPJ pode variar bastante. Um escritório de contabilidade pode cobrar, em média, de R$500,00 a R$1.500,00 em honorários para abrir uma pequena ou média empresa. As despesas com taxas de alvará de funcionamento e Junta Comercial para registro da empresa, variam de acordo com a cidade onde o CNPJ será aberto (já que os órgãos de cada uma tem sua própria tabela de valores) e com a complexidade do negócio (porte, atividade exercida, regime de tributação etc.). Em São Paulo, Santo André, São Bernardo do Campo, São Caetano do Sul, Osasco, Guarulhos e Barueri, todos no estado de São Paulo, também nas cidades de Curitiba/PR, Florianópolis/SC, Belo Horizonte/MG e Porto Alegre/RS, abrindo sua empresa com a eApurei a taxa da Junta Comercial e os honorários contábeis de abertura são por nossa conta. Você só pagará as taxas após a abertura do CNPJ, como a taxa anual do alvará da prefeitura, que é cobrada anualmente para todas as empresas, inclusive no ano de abertura, independentemente do serviço de contabilidade.',
  },
  {
    label:
      'Quais são as taxas do Governo a serem pagas na abertura de uma empresa?',
    value:
      'Para abrir um CNPJ é preciso pagar a DARE (Documento de Arrecadação de Receitas Estaduais) na Junta Comercial do seu estado. As taxas do governo e da prefeitura aplicadas na abertura de uma empresa podem variar conforme a localização e atividade exercida.',
  },
  {
    label:
      'Qual é o valor cobrado por um escritório de contabilidade e pela eApurei?',
    value:
      'O valor cobrado pode variar conforme a localização, tamanho e complexidade do negócio. Na eApurei o plano é escolhido de acordo com aquele que melhor atenderá às suas necessidades e as do seu negócio. Nós unimos tecnologia e conhecimento contábil para democratizar o acesso a um serviço de contabilidade com qualidade e preço justo.',
  },
  {
    label: 'O que está incluso na mensalidade da eApurei?',
    value:
      'Todas as atividades e rotinas contábeis, fiscais e de folha de pagamento exigidas por lei estão inclusas na mensalidade, além de todo o suporte online através dos nossos canais de atendimento e acesso ilimitado a nossa plataforma digital, com todos os dados de sua empresa.',
  },
  {
    label: 'A eApurei é confiável?',
    value:
      'Sim. Há mais de 10 anos nós unimos tecnologia de ponta à nossa experiência contábil para simplificar a vida de quem empreende no Brasil. Somos a maior equipe de contadores certificados do Brasil e contamos com um time de mais de mil especialistas prontos para cuidar da sua contabilidade.',
  },
  {
    label: 'A eApurei tem contadores de verdade?',
    value:
      'Sim, somos o maior escritório de contabilidade do Brasil e temos mais de 80 contadores registrados no Conselho Regional de Contabilidade (CRC) trabalhando com a gente. Eles são responsáveis por acompanhar e garantir toda a rotina contábil da sua empresa para que ela esteja sempre em dia com as obrigações do governo. Além disso, toda essa rotina é auditada anualmente pelo Conselho Regional de Contabilidade (CRC).',
  },
  {
    label: 'Preciso sair de casa para abrir minha empresa com a eApurei?',
    value:
      'Não. Exceto para atividades que precisam de registro no respectivo órgão de classe, nós buscaremos toda a documentação necessária para abertura da sua empresa na sua casa através de um despachante.',
  },
  {
    label: 'Quais os passos da abertura de empresa online com a eApurei?',
    value:
      'O primeiro passo é fazer seu cadastro em nosso site e contratar um de nossos planos de contabilidade. Depois, vamos analisar seus dados e sugerir o melhor CNAE e regime tributário para sua empresa, iniciar a abertura gratuita e confeccionar toda a documentação necessária. Assim que a documentação estiver pronta, serão protocoladas nos órgãos públicos por nosso time para registro da empresa e liberação do CNPJ. Após o pagamento das taxas governamentais obrigatórias e a aprovação dos órgãos, seu CNPJ estará pronto.',
  },
  {
    label: 'Os planos da eApurei Experts já incluem contabilidade?',
    value:
      'Sim, em todos os planos da eApurei, além da abertura do CNPJ, você tem a contabilidade de sua empresa inclusa. A diferença para o plano Experts é um canal de atendimento exclusivo, com um assessor dedicado que fará todas as rotinas mensais por você.',
  },
  {
    label:
      'Quais cidades a eApurei atende para o processo de desenquadramento e baixa do MEI?',
    value:
      'Atualmente, a eApurei realiza o processo de baixa em todas as cidades do Brasil e de desenquadramento em São Paulo, Curitiba, Belo Horizonte e Brasília.',
  },
  {
    label: 'Quais tipos de CNAEs a eApurei trabalha?',
    value:
      'A eApurei abre empresas com CNAEs de atividades de serviços e comércios varejistas. A definição do CNAE (Classificação Nacional de Atividades Econômicas-Fiscal) é uma etapa muito importante, e obrigatória, para a abertura de um CNPJ. O tipo de CNAE interfere até mesmo na alíquota de imposto que incidirá. Nós disponibilizamos uma ferramenta online onde é possível consultar todos os CNAES, quais são as atividades que podem ser exercidas e quais não podem, se são atendidas ela eApurei, além de informar se são atividades permitidas no Simples Nacional, no MEI e qual a alíquota de imposto incidente em cada uma.',
  },
  {
    label: 'O que é e qual a obrigatoriedade do certificado digital?',
    value:
      'O certificado digital é uma ferramenta que permite que empresas assinem documentos e façam transações em ambientes online. Seu uso tem total validade jurídica e é obrigatório para clientes da Contabilizei e para emitir notas fiscais eletrônicas.',
  },
]

export default function FAQ() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 bg-gray-100 px-8 py-20 dark:bg-grey-100">
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
