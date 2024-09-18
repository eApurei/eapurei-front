'use client'

import {
  ArrowElbowRightDown,
  Certificate,
  ClipboardText,
  FileMagnifyingGlass,
  HandsClapping,
  NumberCircleOne,
  NumberCircleThree,
  NumberCircleTwo,
  SealCheck,
} from '@phosphor-icons/react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

import ButtonComponent from '../atoms/ButtonComponent'
import { Button } from '../ui/button'

export default function StepByStep() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-16 bg-white p-8">
      <div className="flex w-full items-start justify-between">
        <div className="flex flex-col items-center justify-center gap-2 text-secondary-100">
          <NumberCircleOne size={48} weight="fill" />

          <FileMagnifyingGlass size={72} weight="thin" />

          <Collapsible className="mt-4 flex max-w-[322px] flex-col items-start justify-center gap-6 rounded-sm border-2 border-secondary-50 p-4 shadow-lg">
            <div className="flex select-none items-center justify-center gap-2">
              <span className="font-bold">Entendendo suas necessidades</span>
              <CollapsibleTrigger
                className="flex items-center justify-center gap-2 text-base"
                asChild
              >
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ArrowElbowRightDown className="h-6 w-6 font-bold" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-sm font-normal text-black">
              Faremos uma vídeo-conferência para entender a sua necessidades e
              juntos avaliarmos qual o melhor perfil tributário para a sua
              empresa. Abordaremos sobre a natureza jurídica, o porte
              empresarial e o regime tributário da sua empresa. Fique à vontade
              para tirar todas as suas dúvidas.
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-secondary-100">
          <NumberCircleTwo size={48} weight="fill" />

          <ClipboardText size={72} weight="thin" />

          <Collapsible className="mt-4 flex max-w-[288.3px] flex-col items-start justify-center gap-6 rounded-sm border-2 border-secondary-50 p-4 shadow-lg">
            <div className="flex select-none items-center justify-center gap-2">
              <span className="font-bold">Registrando a sua empresa</span>
              <CollapsibleTrigger
                className="flex items-center justify-center gap-2 text-base"
                asChild
              >
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ArrowElbowRightDown className="h-6 w-6 font-bold" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-sm font-normal text-black">
              Iniciamos o processo de registro em todos os órgãos, sempre
              comunicando sobre o que está acontecendo, como prazos e andamentos
              de processos. Essa etapa é feita com muita atenção e
              comprometimento, sempre sendo muito transparente e honesto com
              você, cliente!
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-secondary-100">
          <NumberCircleThree size={48} weight="fill" />

          <Certificate size={72} weight="thin" />

          <Collapsible className="mt-4 flex max-w-[258.6px] flex-col items-start justify-center gap-6 rounded-sm border-2 border-secondary-50 p-4 shadow-lg">
            <div className="flex select-none items-center justify-center gap-2">
              <span className="font-bold">Conclusão do Processo</span>
              <CollapsibleTrigger
                className="flex items-center justify-center gap-2 text-base"
                asChild
              >
                <Button variant="ghost" size="sm" className="w-9 p-0">
                  <ArrowElbowRightDown className="h-6 w-6 font-bold" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-sm font-normal text-black">
              Concluindo todas as etapas, enviaremos todos os documentos
              pertinentes a sua empresa para você, cliente eApurei
              Contabilidade. Daqui pra frente, começaremos nosso assessoramento
              e consultoria contábil junto do seu plano de negócios e é claro,
              nos dispomos para quaisquer outras necessidades.
            </CollapsibleContent>
          </Collapsible>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 text-primary-100">
          <SealCheck size={48} weight="fill" />

          <HandsClapping size={72} weight="thin" />

          <Collapsible className="mt-4 flex max-w-[280px] flex-col items-start justify-center gap-6 rounded-sm border-2 border-primary-100 bg-primary-100 p-4 text-white shadow-lg">
            <div className="flex select-none items-center justify-center gap-2">
              <span className="font-bold">
                Parabéns! Agora você faz parte da família e Apurei
              </span>
              <CollapsibleTrigger
                className="flex items-center justify-between text-left text-base font-bold"
                asChild
              >
                <Button variant="ghost" size="sm" className="w-9 p-1">
                  <ArrowElbowRightDown className="h-6 w-6 font-bold" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="text-sm font-normal">
              Nesta etapa comemoramos o primeiro êxito em conjunto, a
              constituição da sua empresa. Na eApurei cada empresa é única, pois
              sabemos que estamos trabalhando com o sonho de cada cliente. Além
              do profissionalismo, somos humanos e quero o seu sucesso!
            </CollapsibleContent>
          </Collapsible>
        </div>
      </div>

      <ButtonComponent label="Quero abrir minha empresa" linkTo="/" />
    </main>
  )
}
