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
    label: 'A Contabilizei é confiável?',
    value:
      'Sim. Há mais de 10 anos nós unimos tecnologia de ponta à nossa experiência contábil para simplificar a vida de quem empreende no Brasil. Temos o maior time de contadores certificados do Brasil e contamos com mais de mil especialistas prontos para cuidar da sua contabilidade.',
  },
  {
    label: 'A Contabilizei tem contadores de verdade?',
    value:
      'Sim, somos o maior escritório de contabilidade do Brasil e temos um time com mais de 80 contadores registrados no Conselho Regional de Contabilidade (CRC) trabalhando com a gente. Eles são responsáveis por acompanhar e garantir toda a rotina contábil da sua empresa para que ela esteja sempre em dia com as obrigações do governo. Além disso, toda essa rotina é auditada anualmente pelo Conselho Regional de Contabilidade (CRC).',
  },
  {
    label: 'Eu realmente preciso de um contador para abrir meu CNPJ?',
    value:
      'Sim. Exceto pelo Microempreendedor Individual (MEI), todas as empresas precisam de um contador para responder por sua contabilidade perante o governo. Declaração de impostos, balanços, folha de pagamento: tudo precisa ser assinado por um contador com registro ativo no Conselho Regional de Contabilidade (CRC). Além da obrigatoriedade prevista em lei, o contador garante que sejam pagos apenas os impostos realmente devidos e que a empresa esteja sempre em dia com suas obrigações.',
  },
  {
    label: 'Como abrir uma empresa?',
    value:
      'Verifique se sua profissão pode ser MEI ou se é necessário abrir microempresa; Escolha a natureza jurídica: EI, SLU, LTDA ou S/A, conforme a necessidade de sócios e proteção patrimonial; Escolha as atividades da empresa pelo código CNAE (Classificação Nacional de Atividades Econômicas): selecione os códigos que representam o que sua empresa vai fazer; Defina o regime tributário: Simples Nacional, Lucro Presumido ou Lucro Real; Separe os documentos necessários; Faça a consulta de viabilidade de nome, atividade e endereço; Registre a empresa nos órgãos competentes e pague as taxas: Receita Federal, Junta Comercial ou Cartório e demais entidades conforme o tipo de empresa; Registre-se também na Prefeitura e/ou no Estado para obter sua inscrição municipal e/ou estadual, necessária para a emissão de notas fiscais e obtenção de alvarás. Pronto! Mantenha tudo em dia',
  },
  {
    label: 'Quais os tipos de empresas?',
    value:
      'Para escolher o tipo de empresa, tudo começa no porte empresarial, determinado pelo faturamento anual e número de funcionários. O MEI é um modelo simplificado de empresa para profissões não regulamentadas, com faturamento de até R$ 81 mil/ano e apenas um funcionário. Já a Microempresa (ME) atende profissões regulamentas com faturamento de até R$ 360 mil/ano e a Empresa de Pequeno Porte (EPP) é aquela que fatura entre R$360 mil e R$4,8 milhões ao ano. Depois de definir o porte de empresa, é hora de definir a natureza jurídica do seu negócio. Ou seja: decidir se vai trabalhar com ou sem sócios. Dentro das opções, é possível optar por: Empresário Individual (EI), Sociedade Limitada Unipessoal (SLU), Sociedade Limitada (LTDA), Sociedade Simples (SS), Sociedade Anônima (S/A), entre outras.',
  },
  {
    label: 'Quais são os documentos exigidos para abrir um CNPJ?',
    value:
      'Os documentos para abrir empresa podem variar bastante de acordo com a atividade a ser exercida e os órgãos governamentais envolvidos, mas no geral são: - RG e CPF - Comprovante de endereço - Se casado(a), certidão de casamento - Cópia do IPTU ou documento que conste a inscrição imobiliária ou a indicação fiscal do imóvel onde a empresa será instalada Caso a atividade da sua empresa seja regulamentada, poderão ser solicitados outros documentos como registro profissional OAB, CRM etc. Após reunir esses documentos, o próximo passo é iniciar o registro da empresa de forma online ou presencial na Junta Comercial ou no cartório (o local será definido dependendo da atividade exercida), para protocolar seu pedido de registro com o contrato social.',
  },
  {
    label: 'O que está incluso na mensalidade?',
    value:
      'Todas as atividades e rotinas contábeis, fiscais e de folha de pagamento exigidas por lei estão inclusas na mensalidade, além de todo o suporte online através dos nossos canais de atendimento e acesso ilimitado a nossa plataforma digital, com todos os dados de sua empresa.',
  },
  {
    label: 'Quais tipos de CNAEs a Contabilizei trabalha?',
    value:
      'A Contabilizei abre empresas com CNAEs de atividades de serviços e comércios varejistas. A definição do CNAE (Classificação Nacional de Atividades Econômicas-Fiscal) é uma etapa muito importante, e obrigatória, para a abertura de um CNPJ. O tipo de CNAE interfere até mesmo na alíquota de imposto que incidirá. Nós disponibilizamos uma ferramenta online onde é possível consultar todos os CNAES, quais são as atividades que podem ser exercidas e quais não podem, se são atendidas ela Contabilizei, além de informar se são atividades permitidas no Simples Nacional, no MEI e qual a alíquota de imposto incidente em cada uma.',
  },
  {
    label: 'O que é certificado digital e qual sua obrigatoriedade?',
    value:
      'O certificado digital é uma ferramenta que permite que empresas assinem documentos e façam transações em ambientes online e de forma segura. Seu uso tem total validade jurídica e é obrigatório para emitir notas fiscais eletrônicas.',
  },
  {
    label: 'Posso contratar o plano de saúde para somente uma pessoa?',
    value:
      'Sim, é possível. Nossa corretora fará a cotação dos planos individuais que podem te atender, de acordo com a sua região.',
  },
  {
    label:
      'Preciso ser cliente da Contabilizei para contratar um plano de saúde?',
    value:
      'Sim. Para contratar qualquer plano de saúde por meio da Contabilizei é necessário ser cliente.',
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
