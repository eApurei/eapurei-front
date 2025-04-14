import Link from 'next/link'

import ButtonComponent from '@/components/ButtonComponent'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { roboto } from '@/lib/fonts'

import PriceInput from './PriceInput'
import TelInput from './TelInput'

export default function Hero() {
  return (
    <main
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 bg-gray-100 px-32 py-8 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Calculadora RPA para Autônomos 2025
        <span className="text-secondary-150">.</span>
      </h1>

      <p className="dark:text-white">
        Faça o cálculo de impostos de forma online e descubra como você pode
        economizar ao emitir notas fiscais com um CNPJ.
      </p>

      <section className="flex w-full items-center justify-center px-24 py-8">
        <div className="flex w-[40%] items-center justify-center">oi</div>

        <div className="flex w-[60%] flex-col items-center justify-center gap-6">
          <div className="flex w-full gap-4">
            <div className="flex w-1/2 flex-col items-start justify-center gap-2">
              <Label
                htmlFor="contractorOrHired"
                className="text-[15px] dark:text-white"
              >
                Sou contratante ou contratado?*
              </Label>

              <Select>
                <SelectTrigger
                  className="w-full border-primary-100 bg-white text-base text-gray-500 focus-visible:ring-primary-100 dark:bg-black dark:text-gray-400 dark:focus-visible:ring-primary-100"
                  id="contractorOrHired"
                >
                  <SelectValue placeholder="Selecione a sua resposta" />
                </SelectTrigger>

                <SelectContent position="popper" className="max-w-full">
                  <SelectItem
                    value="Contratado"
                    className="font-medium focus:text-black focus-visible:bg-gray-100"
                  >
                    Contratado
                  </SelectItem>

                  <SelectItem
                    value="Contratante"
                    className="font-medium focus:text-black focus-visible:bg-gray-100"
                  >
                    Contratante
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex w-1/2 flex-col items-start justify-center gap-2">
              <Label
                htmlFor="monthlyEarnings"
                className="text-[15px] dark:text-white"
              >
                Meu ganho bruto mensal:*
              </Label>

              <PriceInput
                htmlForInput="monthlyEarnings"
                idInput="monthlyEarnings"
                label=""
              />
            </div>
          </div>

          <div className="flex w-full gap-4">
            <div className="flex w-1/2 items-center justify-center">
              <Label
                htmlFor="name"
                className="flex w-full flex-col items-start justify-center gap-2 text-[15px] dark:text-white"
              >
                Nome*
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Nome Completo"
                  className="w-full rounded-md border border-primary-100 px-2 py-[5px] text-base font-normal text-black placeholder:font-normal dark:text-black dark:placeholder:text-slate-500"
                />
              </Label>
            </div>

            <div className="flex w-1/2 flex-col items-start justify-between gap-2">
              <Label
                htmlFor="myTelephone"
                className="text-[15px] dark:text-white"
              >
                Meu telefone:*
              </Label>

              <TelInput
                htmlForInput="myTelephone"
                idInput="myTelephone"
                label=""
              />
            </div>
          </div>

          <Label
            htmlFor="email"
            className="flex w-full flex-col items-start justify-center gap-2 text-[15px] dark:text-white"
          >
            E-mail:*
            <input
              type="text"
              id="email"
              required
              placeholder="Insira seu e-mail aqui"
              className="w-full rounded-md border border-primary-100 px-2 py-[5px] text-base font-normal text-black placeholder:font-normal dark:text-black dark:placeholder:text-slate-500"
            />
          </Label>

          <p className="text-zinc-500 dark:text-zinc-300">
            Ao clicar em Calcular Fator R, você está ciente e concorda com a
            nossa{' '}
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

          <div className="w-full">
            <ButtonComponent label="Calcular RPA" linkTo="/#" />
          </div>
        </div>
      </section>
    </main>
  )
}
