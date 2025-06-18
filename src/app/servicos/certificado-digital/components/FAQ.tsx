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
    label: 'Posso comprar o certificado em qualquer certificadora?',
    value:
      'Sim. Você tem desconto na Soluti caso contrate nosso plano de contabilidade, mas pode comprar o certificado em qualquer outra certificadora para ser cliente eApurei.',
  },
  {
    label: 'Já tenho um certificado, mas de outro modelo. Posso utilizá-lo?',
    value:
      'Não. Para ser cliente eApurei, você precisa ter o certificado e-CNPJ A1 para computador. Os outros modelos não se enquadram nas nossas normas.',
  },
  {
    label: 'A eApurei é confiável?',
    value:
      'Sim. Há mais de 10 anos nós unimos tecnologia de ponta à nossa experiência contábil para simplificar a vida de quem empreende no Brasil. Somos a maior equipe de contadores certificados do Brasil e contamos com um time de mais de mil especialistas prontos para cuidar da sua contabilidade.',
  },
  {
    label: 'A eApurei tem contadores de verdade?',
    value:
      'Sim! Somos o maior escritório de contabilidade do Brasil e temos muitos contadores trabalhando com a gente. Eles são os responsáveis por acompanhar e garantir toda rotina contábil da sua empresa para que ela esteja sempre em dia com as obrigações do governo.',
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
