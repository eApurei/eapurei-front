'use client'

import { Info } from '@phosphor-icons/react'
import Link from 'next/link'
import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Tooltip } from 'react-tooltip'

import { CompanyActivitiesProps, ContentFormFatorRProps } from '@/@types'
import { Checkbox } from '@/components/ui/checkbox'
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

const content: ContentFormFatorRProps[] = [
  {
    id: 'company',
    question: 'Sua empresa é optante pelo Simples Nacional?',
  },
  {
    id: 'salary',
    question: 'Você recebe pró-labore?',
  },
  {
    id: 'employees',
    question: 'Você tem funcionários?',
  },
]

const companyActivities: CompanyActivitiesProps[] = [
  {
    activity: 'Administração e locação de imóveis de terceiros',
  },
  {
    activity: 'Academia de dança, capoeira, ioga, lutas e artes marciais',
  },
  {
    activity: 'TI e desenvolvedor de programas de computadores e sites',
  },
  {
    activity: 'Laboratório de análises clínicas ou de patologia clínica',
  },
  {
    activity: 'Serviços de prótese em geral',
  },
  {
    activity: 'Fisioterapia',
  },
  {
    activity: 'Medicina, inclusive laboratorial, e enfermagem',
  },
  {
    activity: 'Medicina veterinária',
  },
  {
    activity: 'Odontologia e prótese dentária',
  },
  {
    activity:
      'Psicologia, psicanálise, terapia ocupacional, acupuntura, podologia, fonoaudiologia, nutrição, vacinação e bancos de leite',
  },
  {
    activity:
      'Serviços de comissaria, de despachantes, de tradução e de interpretação',
  },
  {
    activity: 'Arquitetura e urbanismo',
  },
  {
    activity:
      'Engenharia, medição, cartografia, topografia, geologia, geodésia, testes, suporte e análises técnicas e tecnológicas, pesquisa, design, desenho e agronomia',
  },
  {
    activity:
      'Representação comercial e demais atividades de intermediação de negócios e serviços de terceiros',
  },
  {
    activity: 'Perícia, leilão e avaliação',
  },
  {
    activity:
      'Auditoria, economia, consultoria, gestão, organização, controle e administração',
  },
  {
    activity: 'Jornalismo e publicidade',
  },
  {
    activity: 'Agenciamento',
  },
  {
    activity:
      'Outros serviços de natureza intelectual, técnica, científica, desportiva, artística ou cultural',
  },
  {
    activity: 'Minha atividade não está na lista',
  },
]

export default function Form() {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null)
  const [answers, setAnswers] = useState({
    company: true,
    salary: true,
    employees: true,
  })
  const [price, setPrice] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value.replace(/[^\d]/g, '')
    const formattedValue =
      rawValue &&
      `R$ ${parseFloat(
        (parseInt(rawValue, 10) / 100).toFixed(2),
      ).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`

    setPrice(formattedValue || '')
  }

  const { register, handleSubmit, setValue } = useForm()

  const onSubmit = (data: any): void => console.log(data)

  const handleCheckboxChange = (
    field: keyof typeof answers,
    value: boolean,
  ) => {
    setAnswers((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  useEffect(() => {
    register('activity', { required: 'Selecione a atividade' })
  }, [register])

  const isDisabled = !selectedActivity || !price || price === 'R$ 0,00'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-1/2 flex-col items-start justify-center gap-8 rounded-md bg-gray-100 p-8"
    >
      <div className="flex w-full flex-col items-start justify-center gap-1">
        <label htmlFor="activity" className={`dark:text-white`}>
          Qual a atividade da sua empresa?*
        </label>

        <Select
          onValueChange={(value) => {
            setSelectedActivity(value)
            setValue('activity', value)
          }}
        >
          <SelectTrigger
            className={`w-full border-primary-100 bg-white focus-visible:ring-primary-100 dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100`}
            id="activity"
          >
            <SelectValue placeholder="Selecione a atividade da sua empresa" />
          </SelectTrigger>

          <SelectContent position="popper">
            {companyActivities.map((item, index) => (
              <SelectItem
                key={index}
                value={item.activity}
                className="font-medium focus:text-black focus-visible:bg-gray-100"
              >
                {item.activity}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {!selectedActivity && (
          <p className="text-sm text-red-600">
            Campo obrigatório, preencha este campo.
          </p>
        )}
      </div>

      <div className={`flex w-full flex-col items-start justify-center gap-1`}>
        <label
          htmlFor="grossSales"
          className={`flex w-full items-center justify-between dark:text-white`}
        >
          Qual seu faturamento bruto mensal médio?*
          <span className="flex items-center justify-between">
            <Tooltip id="grossSales" />
            <Info
              size={20}
              weight="fill"
              data-tooltip-id="grossSales"
              data-tooltip-html={`Receita total da empresa, sem levar em conta os custos e outras deduções.`}
              data-tooltip-place="bottom-end"
              className="cursor-pointer text-primary-100 duration-300 hover:scale-110 lg_2:w-5"
            />
          </span>
        </label>

        <Input
          placeholder="R$ 0,00"
          id="grossSales"
          {...register('grossSales', { required: 'Este campo é obrigatório' })}
          value={price}
          onChange={handleInputChange}
          className={`${roboto.className} border-primary-100 bg-white`}
        />
        {!price ||
          (price === 'R$ 0,00' && (
            <p className="text-sm text-red-600">
              Campo obrigatório, preencha este campo.
            </p>
          ))}
      </div>

      {content.map(({ id, question }) => (
        <section
          key={id}
          className="flex w-full flex-col items-start justify-center gap-1"
        >
          <p>{question}</p>

          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center gap-2">
              <Checkbox
                {...register(`${id}`, {
                  required: 'Responda a esta pergunta.',
                })}
                id={`${id}-yes`}
                checked={answers[id as keyof typeof answers]}
                onCheckedChange={() =>
                  handleCheckboxChange(id as keyof typeof answers, true)
                }
              />
              <Label htmlFor={`${id}-yes`}>Sim</Label>
            </div>

            <div className="flex items-center justify-center gap-2">
              <Checkbox
                {...register(`${id}`, { required: 'Responda a esta pergunta' })}
                id={`${id}-no`}
                checked={!answers[id as keyof typeof answers]}
                onCheckedChange={() =>
                  handleCheckboxChange(id as keyof typeof answers, false)
                }
              />
              <Label htmlFor={`${id}-no`}>Não</Label>
            </div>
          </div>
        </section>
      ))}

      <p className="text-zinc-500 dark:text-zinc-300">
        Ao clicar em Calcular Fator R, você está ciente e concorda com a nossa{' '}
        <Link className="text-primary-100 underline" href={'/#'}>
          Política de Privacidade
        </Link>
        ,{' '}
        <Link
          className="text-primary-100 underline"
          href={'/politicas-de-cookies'}
        >
          Política de Cookies
        </Link>{' '}
        e nossos{' '}
        <Link className="text-primary-100 underline" href={'/#'}>
          Temos de Uso
        </Link>
        .
      </p>

      <input
        disabled={isDisabled}
        type="submit"
        value={'Calcular fator R'}
        className={`cursor-pointer rounded-full border-2 border-primary-100 bg-primary-100 px-4 py-2 text-sm font-bold uppercase text-white shadow-md duration-500 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 lg_1:text-xs lg_2:px-2 lg_2:text-[10px]`}
      />

      <span className="text-sm text-primary-100">
        * A eApurei não se responsabiliza pelo uso desta que se trata de uma
        ferramenta desenvolvida para uma prestação de serviços genérica, sendo
        necessária a avaliação de sua aplicação por parte do usuário, junto a um
        contador qualificado.
      </span>
    </form>
  )
}
