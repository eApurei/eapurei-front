'use client'

import { Minus, Plus } from '@phosphor-icons/react'
import { useState } from 'react'

import { SelectItemsProps } from '@/@types'
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
    label: 'Sozinho através da plataforma',
    value: 'Sozinho através da plataforma',
  },
  {
    label: 'Com ajuda de um assessor, pagando um valor adicional',
    value: 'Com ajuda de um assessor, pagando um valor adicional',
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
    label: 'Via chat, e-mail, whatsapp e telefone',
    value: 'Via chat, e-mail, whatsapp e telefone',
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
    <div className="flex w-full items-center justify-center pb-8 dark:bg-grey-100">
      <Card
        className={`w-[468px] ${roboto.className} rounded-none border-secondary-50 bg-secondary-50`}
      >
        <CardHeader>
          <ul className="mb-6 flex w-full select-none items-center justify-between border-b border-b-primary-100">
            <li
              onClick={() => handleTabClick('Vou abrir empresa')}
              className={`${activeTab === 'Vou abrir empresa' && 'bg-primary-100 text-white'} flex h-20 w-1/2 cursor-pointer items-center justify-center px-6 text-center text-lg duration-300 hover:opacity-70`}
            >
              Vou abrir empresa
            </li>
            <li
              onClick={() => handleTabClick('Vou trocar de contador')}
              className={`${activeTab === 'Vou trocar de contador' && 'bg-primary-100 text-white'} flex h-20 w-1/2 cursor-pointer items-center justify-center px-6 text-center text-lg duration-300 hover:opacity-70`}
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
                  className="w-full bg-white focus-visible:ring-primary-100"
                  id="activity"
                >
                  <SelectValue placeholder="Selecione a sua área de atuação" />
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
                className="flex w-full items-center justify-center gap-8 rounded-md bg-white py-1"
              >
                <Button
                  variant={'outline'}
                  onClick={handleCountDecrease}
                  className="h-7 w-7 border-hidden bg-transparent p-0 text-black hover:bg-primary-100 hover:text-white focus-visible:ring-primary-50"
                >
                  <Minus weight="bold" size={14} />
                </Button>

                {count}

                <Button
                  variant={'outline'}
                  onClick={handleCountIncrease}
                  className="h-7 w-7 border-hidden bg-transparent p-0 text-black hover:bg-primary-100 hover:text-white focus-visible:ring-primary-50"
                >
                  <Plus weight="bold" size={14} />
                </Button>
              </Label>
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="invoice" className="font-bold">
                3. Como você prefere cuidar da rotina da sua empresa, como
                emissão de notas etc?
              </Label>
              <Select>
                <SelectTrigger
                  className="w-full bg-white focus-visible:ring-primary-100"
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
                  className="w-full bg-white focus-visible:ring-primary-100"
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
    </div>
  )
}
