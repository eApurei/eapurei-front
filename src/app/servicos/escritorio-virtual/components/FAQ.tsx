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
    label: 'O que é Escritório Virtual?',
    value:
      'O escritório virtual é um espaço fornecido por uma empresa especializada, onde é possível alugar um endereço fiscal para realizar a abertura da empresa; ficando registrado junto à Receita Federal como endereço sede do CNPJ.',
  },
  {
    label: 'O que é endereço fiscal?',
    value:
      'Endereço fiscal, também conhecido como domicílio fiscal, é o local registrado por uma empresa ou profissional que atua por meio de um CNPJ junto à Receita Federal, Junta Comercial e Prefeitura no momento de abertura do CNPJ.\nO endereço fiscal é utilizado em documentos oficiais, como o CNPJ, inscrição estadual, inscrição municipal, contratos e nota fiscal. O endereço fiscal é onde o profissional vai receber notificações, cobranças ou que a Receita pode realizar fiscalizações.\nAssim, o endereço fiscal é fundamental para a abertura da empresa, para o recebimento de correspondências e notificações e para o cumprimento das obrigações fiscais.',
  },
  {
    label: 'O Escritório Virtual é legalmente permitido?',
    value: `Sim, o escritório virtual é legalmente permitido no Brasil. Essa é a solução ideal para empresas que não dependem de um escritório físico para manter suas operações.\n\nO escritório virtual oferece, mediante contrato, a possibilidade de usar um endereço comercial para registro da empresa (endereço fiscal). O escritório virtual deve ser um endereço físico válido, não são aceitos endereços falsos ou inexistentes.\nO uso de escritório virtual costuma ser aceito para atividades administrativas e de prestação de serviços, mas, se for o caso, vale consultar a prefeitura da cidade em que a empresa está. O escritório virtual permite economizar com despesas de manutenção, infraestrutura, locação de sala comercial, contratação de funcionários, por exemplo.`,
  },
  {
    label: 'Preciso ser cliente eApurei para contratar o Escritório Virtual?',
    value:
      'O serviço de Escritório Virtual é exclusivo para novos clientes de abertura de empresa da eApurei.',
  },
  {
    label:
      'Tenho uma empresa no setor de comércio, posso contratar o Escritório Virtual?',
    value:
      'Em razão de algumas restrições em relação a alguns estados e municípios, somente é possível atender clientes com atividades de serviços, sob o regime tributário Simples Nacional.',
  },
  {
    label:
      'Eu receberei um contrato para formalizar a contratação do Escritório Virtual?',
    value:
      'Sim, não se preocupe! Você receberá um e-mail para assinar um contrato virtual.',
  },
  {
    label: 'Há alguma particularidade em relação à emissão de notas fiscais?',
    value:
      'Sim. A emissão de nota fiscal seguirá o padrão do Código de Serviço do Estado de São Paulo, capital. Por isso, é importante que você confirme com o tomador do Serviço, seu cliente, a necessidade da nota fiscal conter algum código de serviço específico.',
  },
  {
    label: 'Como farei para receber as minhas correspondências?',
    value:
      'Nós faremos a digitalização das suas correspondências e as enviaremos por e-mail, em até 5 dias úteis. Para mais detalhes sobre o recebimento de correspondências, você pode consultar um de nossos especialistas.',
  },
  {
    label: 'Qual a diferença entre o endereço fiscal e o comercial?',
    value:
      'Endereço fiscal é aquele utilizado para abrir empresa, emitir notas fiscais e ter registro legal do seu negócio. Já o endereço comercial é aquele utilizado, principalmente, para atendimento físico dos seus clientes.',
  },
  {
    label: 'Posso utilizar o espaço físico do endereço do Escritório Virtual?',
    value:
      'O serviço que a eApurei oferece, exclusivamente para os clientes eApurei Contabilidade, é de endereço fiscal: aquele utilizado para abrir empresa, emitir notas fiscais e ter registro legal do seu negócio. Portanto, não é possível utilizar o espaço físico.',
  },
  {
    label: 'Quais cidades a eApurei atende?',
    value:
      'A eApurei atende mais de cinquenta cidades em todo o Brasil. Já o serviço de Escritório Virtual é oferecido em São Paulo, capital.',
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
