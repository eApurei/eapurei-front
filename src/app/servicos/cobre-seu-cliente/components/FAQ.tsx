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
    label: 'O que é o Cobre seu Cliente da eApurei?',
    value:
      'O Cobre seu Cliente é o link de pagamentos da eApurei para pagamentos online. Com ele, você envia para seus clientes, de maneira rápida e segura, sua cobrança por cartão de crédito ou PIX.',
  },
  {
    label: 'Como faço para acessar o serviço de cobrança?',
    value:
      'O acesso é imediato para todos os clientes da eApurei a partir do menu "Cobrar seu cliente" desde que tenha um Certificado Digital válido na plataforma. Você não precisa se cadastrar e nem aguardar a verificação de usuário, pois já fizemos isso quando você confiou sua contabilidade para nós.',
  },
  {
    label: 'Como emito uma cobrança?',
    value: `De forma rápida e simplificada, você cadastra seu cliente, negocia o valor a ser cobrado e define qual a forma de pagamento (Cartão ou PIX, este último em breve). Nossa plataforma envia automaticamente um link por e-mail para o seu cliente, mas que também pode ser compartilhado por você pelo Whatsapp ou SMS.`,
  },
  {
    label: 'Em quanto tempo eu recebo pelas minhas vendas ou serviços?',
    value:
      'Se o seu cliente pagou com cartão de crédito à vista ou parcelado, a liquidação será feita em até dois dias úteis. Para os recebimentos feitos por PIX, quando disponível, a liquidação é feita em segundos.',
  },
  {
    label: 'Como faço para emitir a nota fiscal?',
    value:
      'Com a sua contabilidade integrada ao módulo de cobrança, a emissão da nota fiscal é feita com poucos clientes. Basta você confirmar em nosso dashboard o depósito de pagamento na sua conta de recebimento e comandar o envio da nota para seu o cliente utilizando os mesmos dados de cobrança.',
  },
  {
    label: 'Por onde recebo minhas vendas ou serviços?',
    value:
      'Você recebe pelas suas vendas ou serviços na conta de recebimento. Com apenas 1 clique você abre sua conta PJ GRÁTIS pela plataforma da eApurei e começa a usar o link de pagamentos.',
  },
  {
    label:
      'Preciso ter uma maquininha ou um site para usar o Cobre seu Cliente?',
    value:
      'Não. O Cobre seu Cliente é um serviço de simples utilização. Basta acessar a plataforma da eApurei, clicar no menu "Cobrança", escolher a forma de pagamento, informar os dados do cliente e enviar sua cobrança por e-mail ou por outro meio de sua preferência.',
  },
]

export default function FAQ() {
  return (
    <main className="flex flex-col items-center justify-center gap-6 bg-gray-100 px-8 py-12 dark:bg-grey-100">
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
