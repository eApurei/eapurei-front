'use client'

import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

import { HowMuchWouldYouPayProps, SelectItemsProps } from '@/@types'
import ButtonComponent from '@/components/atoms/ButtonComponent'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { roboto } from '@/lib/fonts'

const selectItemsActivity: SelectItemsProps[] = [
  {
    label: 'PJ em uma empresa',
    value: 'PJ em uma empresa',
  },
  {
    label: 'Serviços TI',
    value: 'Serviços TI',
  },
  {
    label: 'Serviços ADM',
    value: 'Serviços ADM',
  },
  {
    label: 'Medicina',
    value: 'Medicina',
  },
  {
    label: 'Psicologia e outras saúde',
    value: 'Psicologia e outras saúde',
  },
  {
    label: 'Marketing/Publicidade',
    value: 'Marketing/Publicidade',
  },
  {
    label: 'Engenharia/Arquitetura',
    value: 'Engenharia/Arquitetura',
  },
  {
    label: 'Educação/Cursos',
    value: 'Educação/Cursos',
  },
  {
    label: 'Advocacia',
    value: 'Advocacia',
  },
  {
    label: 'Consultoria',
    value: 'Consultoria',
  },
  {
    label: 'Representação Comercial',
    value: 'Representação Comercial',
  },
  {
    label: 'Comércio',
    value: 'Comércio',
  },
  {
    label: 'Minha atividade não está na lista',
    value: 'Minha atividade não está na lista',
  },
]

const selectItemsInvoice: SelectItemsProps[] = [
  {
    label: 'Sim, eu gostaria.',
    value: 'Sim, eu gostaria.',
  },
  {
    label: 'Não',
    value: 'Não',
  },
]

const selectItemsService: SelectItemsProps[] = [
  {
    label: 'Via chat e e-mail',
    value: 'Via chat e e-mail',
  },
  {
    label: 'Via chat, e-mail e whatsapp',
    value: 'Via chat, e-mail e whatsapp',
  },
  {
    label: 'Via chat, e-mail, whatsapp, telefone e vídeo chamada',
    value: 'Via chat, e-mail, whatsapp, telefone e vídeo chamada',
  },
]

const howMuchWouldYouPay: HowMuchWouldYouPayProps[] = [
  {
    label: 'Honorários contábeis de abertura',
    price: 'R$ 1.500',
  },
  {
    label: 'Taxas de abertura',
    price: 'R$ 1.500',
  },
  {
    label: 'Mensalidade do contador',
    price: 'R$ 331',
  },
  {
    label: 'Certificado digital',
    price: 'R$ 200',
  },
  {
    label: 'Importação e conciliação de extrato bancário',
    price: 'R$1.302',
  },
  {
    label: 'Total na concorrência:',
    price: 'R$ 7.586',
  },
]

export default function PlansSelect() {
  const [activeTab, setActiveTab] = useState<string>('Vou abrir empresa')
  const [count, setCount] = useState<number>(0)

  const handleCountIncrease = () => setCount((prev) => prev + 1)

  const handleCountDecrease = () =>
    setCount((prev) => (prev > 0 ? prev - 1 : 0))

  const handleTabClick = (tab: string) => setActiveTab(tab)

  return (
    <div className="flex w-full items-start justify-center gap-16 pb-8 dark:bg-grey-100">
      <Card
        className={`w-[468px] ${roboto.className} rounded-md border-secondary-50 bg-secondary-50`}
      >
        <CardHeader>
          <ul className="mb-6 flex w-full select-none items-center justify-between border-b border-b-primary-100">
            <li
              onClick={() => handleTabClick('Vou abrir empresa')}
              className={`${activeTab === 'Vou abrir empresa' && 'bg-primary-100 text-white'} flex h-20 w-1/2 cursor-pointer items-center justify-center rounded-t-md px-6 text-center text-lg duration-300 hover:opacity-70`}
            >
              Vou abrir empresa
            </li>
            <li
              onClick={() => handleTabClick('Vou trocar de contador')}
              className={`${activeTab === 'Vou trocar de contador' && 'bg-primary-100 text-white'} flex h-20 w-1/2 cursor-pointer items-center justify-center rounded-t-md px-6 text-center text-lg duration-300 hover:opacity-70`}
            >
              Vou trocar de contador
            </li>
          </ul>
        </CardHeader>

        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="activity" className="font-bold">
                1. Qual Atividade que você exercerá?
              </Label>
              <Select>
                <SelectTrigger
                  className="w-full bg-white focus-visible:ring-primary-100 dark:bg-black dark:focus-visible:ring-primary-100"
                  id="activity"
                >
                  <SelectValue
                    placeholder="Selecione a sua área de atuação"
                    className=""
                  />
                </SelectTrigger>
                <SelectContent position="popper" className="max-w-full">
                  {selectItemsActivity.map((item, index) => {
                    return (
                      <SelectItem
                        key={index}
                        value={item.value}
                        className="font-medium focus:text-black focus-visible:bg-gray-100"
                      >
                        {item.label}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5 text-sm font-bold">
              2. Quantos sócios ou funcionários sua empresa terá?
              <Label
                htmlFor="company"
                className="flex w-full items-center justify-center gap-8 whitespace-nowrap rounded-md border border-zinc-200 border-opacity-15 bg-white py-1 dark:bg-black dark:text-white"
              >
                <Button
                  variant={'outline'}
                  onClick={handleCountDecrease}
                  className="h-7 w-7 border-hidden bg-transparent p-0 text-black hover:bg-primary-100 hover:text-white focus-visible:ring-primary-50 dark:text-white"
                >
                  <Minus weight="bold" size={14} />
                </Button>

                {count}

                <Button
                  variant={'outline'}
                  onClick={handleCountIncrease}
                  className="h-7 w-7 border-hidden bg-transparent p-0 text-black hover:bg-primary-100 hover:text-white focus-visible:ring-primary-50 dark:text-white"
                >
                  <Plus weight="bold" size={14} />
                </Button>
              </Label>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="invoice" className="font-bold">
                3. Você gostaria de uma consultoria contábil ilimitada por vídeo
                personalizada para o segmento da sua empresa?
              </Label>
              <Select>
                <SelectTrigger
                  className="w-full bg-white focus-visible:ring-primary-100 dark:bg-black dark:focus-visible:ring-primary-100"
                  id="invoice"
                >
                  <SelectValue placeholder="Selecione uma das opções" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {selectItemsInvoice.map((item, index) => {
                    return (
                      <SelectItem
                        key={index}
                        value={item.value}
                        className="font-medium focus:text-black focus-visible:bg-gray-100"
                      >
                        {item.label}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="service" className="font-bold">
                4. Como prefere ser atendido?
              </Label>
              <Select>
                <SelectTrigger
                  className="w-full bg-white focus-visible:ring-primary-100 dark:bg-black dark:focus-visible:ring-primary-100"
                  id="service"
                >
                  <SelectValue placeholder="Selecione uma das opções" />
                </SelectTrigger>
                <SelectContent position="popper">
                  {selectItemsService.map((item, index) => {
                    return (
                      <SelectItem
                        key={index}
                        value={item.value}
                        className="font-medium focus:text-black focus-visible:bg-gray-100"
                      >
                        {item.label}
                      </SelectItem>
                    )
                  })}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="hidden w-[420px] flex-col items-center justify-center gap-8">
        <section
          className={`w-[420px] ${roboto.className} flex flex-col items-center justify-center rounded-none border-primary-25 bg-primary-25 px-4 py-6`}
        >
          <h1 className="text-xl">Indicamos o Pacote</h1>

          <p className="text-2xl font-bold uppercase text-secondary-100">
            expert
          </p>

          <p>Sua mensalidade será a partir de:</p>

          <span>
            R$<span className="text-4xl font-bold">425</span>/mês
          </span>

          <ButtonComponent
            label="contratar"
            linkTo=""
            style="bg-white !text-grey-100 border-white w-1/2 text-center mt-4"
          />

          <span className="flex w-full items-center justify-between py-4 font-semibold">
            Com a eApurei você economiza até{' '}
            <span className="text-lg text-secondary-100">
              R$3.200<span className="text-sm text-black">/ao ano</span>
            </span>
          </span>

          <p className="w-full py-2">
            Confira o quanto você pagaria sem a eApurei:
          </p>

          {howMuchWouldYouPay.map((item, index) => {
            return (
              <span
                key={index}
                className="flex w-full items-center justify-between text-sm font-normal"
              >
                {item.label} <span className="text-sm">{item.price}</span>
              </span>
            )
          })}
        </section>

        <p className="text-center text-sm text-grey-100 dark:text-white">
          *Os valores acima correspondem ao preço médio praticado no Brasil. O
          preço da mensalidade da eApurei, mencionado acima, é válido para
          empresas do Simples Nacional.
        </p>
      </div>

      <div className="hidden w-[420px] flex-col items-center justify-center gap-8">
        <section
          className={`w-[420px] ${roboto.className} flex flex-col items-center justify-center rounded-none border-primary-25 bg-primary-25 px-4 py-6`}
        >
          <h1 className="text-xl">Indicamos o Pacote</h1>

          <p className="text-2xl font-bold uppercase text-secondary-100">
            padrão
          </p>

          <p>Sua mensalidade será a partir de:</p>

          <span>
            R$<span className="text-4xl font-bold">239</span>/mês
          </span>

          <ButtonComponent
            label="contratar"
            linkTo=""
            style="bg-white !text-grey-100 border-white w-1/2 text-center mt-4"
          />

          <span className="flex w-full items-center justify-between py-4 font-semibold">
            Com a eApurei você economiza até{' '}
            <span className="text-lg text-secondary-100">
              R$4.000<span className="text-sm text-black">/ao ano</span>
            </span>
          </span>

          <p className="w-full py-2">
            Confira o quanto você pagaria sem a eApurei:
          </p>

          {howMuchWouldYouPay
            .filter(
              (item) =>
                item.label !== 'Importação e conciliação de extrato bancário',
            )

            .map((item, index) => {
              return (
                <span
                  key={index}
                  className="flex w-full items-center justify-between text-sm font-normal"
                >
                  {item.label}{' '}
                  <span className="text-sm">
                    {item.label === 'Total na concorrência:'
                      ? 'R$ 6.284'
                      : item.price}
                  </span>
                </span>
              )
            })}
        </section>

        <p className="text-center text-sm text-grey-100 dark:text-white">
          *Os valores acima correspondem ao preço médio praticado no Brasil. O
          preço da mensalidade da eApurei, mencionado acima, é válido para
          empresas do Simples Nacional.
        </p>
      </div>
    </div>
  )
}
