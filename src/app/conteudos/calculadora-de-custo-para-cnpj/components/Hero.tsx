'use client'

import { Info } from '@phosphor-icons/react'
import { Tooltip } from 'react-tooltip'

import { ActivitiesContentProps } from '@/@types'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { roboto } from '@/lib/fonts'

const cities = [
  {
    city: 'Abadia de Goiás - GO',
  },
  {
    city: 'Abadia dos Dourados - MG',
  },
  {
    city: 'Abadiânia - GO',
  },
  {
    city: 'Abaetetuba - PA',
  },
  {
    city: 'Abaeté - MG',
  },
  {
    city: 'Abaiara - CE',
  },
  {
    city: 'Abaré - BA',
  },
  {
    city: 'Abatiá - PR',
  },
  {
    city: 'Abaíra - BA',
  },
  {
    city: 'Abdon Batista - SC',
  },
  {
    city: 'Abel Figueiredo - PA',
  },
  {
    city: 'Abelardo Luz - SC',
  },
  {
    city: 'Abre Campo - MG',
  },
  {
    city: 'Abreu e Lima - PE',
  },
  {
    city: 'Abreulândia - TO',
  },
  {
    city: 'Acaiaca - MG',
  },
  {
    city: 'Acajutiba - BA',
  },
  {
    city: 'Acarape - CE',
  },
  {
    city: 'Acaraú - CE',
  },
  {
    city: 'Acari - RN',
  },
  {
    city: 'Acará - PA',
  },
  {
    city: 'Acauã - PI',
  },
  {
    city: 'Aceguá - RS',
  },
  {
    city: 'Acopiara - CE',
  },
  {
    city: 'Acorizal - MT',
  },
  {
    city: 'Acrelândia - AC',
  },
  {
    city: 'Acreúna - GO',
  },
  {
    city: 'Adamantina - SP',
  },
  {
    city: 'Adelândia - GO',
  },
  {
    city: 'Adolfo - SP',
  },
  {
    city: 'Adrianópolis - PR',
  },
  {
    city: 'Adustina - BA',
  },
  {
    city: 'Afogados da Ingazeira - PE',
  },
  {
    city: 'Afonso Bezerra - RN',
  },
  {
    city: 'Afonso Cláudio - ES',
  },
  {
    city: 'Afonso Cunha - MA',
  },
  {
    city: 'Afrânio - PE',
  },
  {
    city: 'Afuá - PA',
  },
  {
    city: 'Agrestina - PE',
  },
  {
    city: 'Agricolândia - PI',
  },
  {
    city: 'Agrolândia - SC',
  },
  {
    city: 'Agronômica - SC',
  },
  {
    city: 'Aguanil - MG',
  },
  {
    city: 'Aguaí - SP',
  },
  {
    city: 'Agudo - RS',
  },
  {
    city: 'Agudos - SP',
  },
  {
    city: 'Agudos do Sul - PR',
  },
  {
    city: 'Aguiar - PB',
  },
  {
    city: 'Aguiarnópolis - TO',
  },
  {
    city: 'Aimorés - MG',
  },
]

const activities: ActivitiesContentProps[] = [
  {
    label: 'PJ em uma empresa',
    activity: 'PJ em uma empresa',
  },
  {
    label: 'Serviços de TI',
    activity: 'Serviços de TI',
  },
  {
    label: 'Serviços Administrativos',
    activity: 'Serviços Administrativos',
  },
  {
    label: 'Comércio',
    activity: 'Comércio',
  },
  {
    label: 'Medicina',
    activity: 'Medicina',
  },
  {
    label: 'Psicologia e outros saúde',
    activity: 'Psicologia e outros saúde',
  },
  {
    label: 'Marketing/Publicidade',
    activity: 'Marketing/Publicidade',
  },
  {
    label: 'Arquitetura',
    activity: 'Arquitetura',
  },
  {
    label: 'Engenharia',
    activity: 'Engenharia',
  },
  {
    label: 'Educação/Cursos',
    activity: 'Educação/Cursos',
  },
  {
    label: 'Advocacia',
    activity: 'Advocacia',
  },
  {
    label: 'Consultoria',
    activity: 'Consultoria',
  },
  {
    label: 'Representação Comercial',
    activity: 'Representação Comercial',
  },
]

export default function Hero() {
  return (
    <>
      <main
        className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 p-12 dark:bg-grey-100 lg_2:px-2`}
      >
        <h1 className="text-3xl font-bold text-primary-100">
          Calculadora Custo para tirar CNPJ
          <span className="text-secondary-150">.</span>
        </h1>
        <p className="dark:text-white">
          Confira quais são os principais custos para abrir sua empresa
          preenchendo as informações abaixo.
        </p>

        <section
          className={`flex w-full items-center justify-center py-8 ${roboto.className}`}
        >
          <div className="w-[35%]">oi</div>

          <div className="flex w-[35%] flex-col items-center justify-center gap-12">
            <div className="flex w-full flex-col items-start justify-center gap-4">
              <Label htmlFor="cities" className="font-bold dark:text-white">
                Em qual cidade você pretende abrir sua empresa?
              </Label>

              <Select>
                <SelectTrigger
                  className="w-full bg-white text-gray-500 focus-visible:ring-primary-100 dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100"
                  id="cities"
                >
                  <SelectValue
                    placeholder="Exemplo: São Paulo - SP"
                    className=""
                  />
                </SelectTrigger>

                <SelectContent position="popper" className="max-w-full">
                  {cities.map((item, index) => (
                    <SelectItem
                      key={index}
                      value={item.city}
                      className="font-medium focus:text-black focus-visible:bg-gray-100"
                    >
                      {item.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4">
              <Label htmlFor="activity" className="font-bold dark:text-white">
                Qual atividade você exerce ou exercerá?
              </Label>

              <Select>
                <SelectTrigger
                  className="w-full bg-white text-gray-500 focus-visible:ring-primary-100 dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100"
                  id="activity"
                >
                  <SelectValue placeholder="Selecione uma atividade" />
                </SelectTrigger>

                <SelectContent position="popper" className="max-w-full p-2">
                  {activities.map((activity, index) => (
                    <SelectItem
                      key={index}
                      value={activity.label}
                      className="font-medium focus:text-black focus-visible:bg-gray-100"
                    >
                      {activity.activity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-4">
              <Tooltip id="billing" style={{ width: '20%' }} />

              <Label
                htmlFor="billing"
                className="flex w-full items-center justify-between font-bold dark:text-white"
              >
                Quanto você prevê que sua empresa faturará mensalmente?
                <Info
                  size={20}
                  weight="fill"
                  data-tooltip-id="billing"
                  data-tooltip-html="O percentual de imposto poderá aumentar de acordo com o valor do seu faturamento."
                  data-tooltip-place="bottom-end"
                  className="cursor-pointer text-grey-200 duration-300 hover:scale-110 lg_2:w-5"
                />
              </Label>

              <Input
                type="text"
                id="billing"
                prefix="R$"
                className="dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100"
              />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
