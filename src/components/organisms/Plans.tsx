'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import { roboto } from '@/app/layout'

export default function Plans() {
  const [activeTab, setActiveTab] = useState('Empresas de serviço')
  const [fadeIn, setFadeIn] = useState(true)

  const handleTabClick = (tab: string) => {
    if (activeTab !== tab) {
      setFadeIn(false)
      setTimeout(() => {
        setActiveTab(tab)
        setFadeIn(true)
      }, 500)
    }
  }

  return (
    <main className="flex w-full flex-col items-center justify-center gap-8 bg-white p-8">
      <h1 className="text-grey-100 text-4xl font-bold">
        Confira nossos planos
      </h1>

      <nav>
        <ul className="flex items-center justify-center border-b border-gray-300">
          <li
            className={`cursor-pointer border-b-2 p-4 text-lg text-primary-100 duration-300 hover:border-emerald-300 hover:bg-tertiary-100 ${
              activeTab === 'Empresas de serviço'
                ? 'border-b-primary-100 bg-tertiary-100 font-bold'
                : 'border-transparent'
            }`}
            onClick={() => handleTabClick('Empresas de serviço')}
          >
            Empresas de serviço
          </li>

          <li
            className={`cursor-pointer border-b-2 p-4 text-lg text-primary-100 duration-300 hover:border-emerald-300 hover:bg-tertiary-100 ${
              activeTab === 'Empresas de comércio'
                ? 'border-b-primary-100 bg-tertiary-100 font-bold'
                : 'border-transparent'
            }`}
            onClick={() => handleTabClick('Empresas de comércio')}
          >
            Empresas de comércio
          </li>
        </ul>
      </nav>

      <div
        className={`transition-opacity duration-300 ${
          fadeIn ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {activeTab === 'Empresas de serviço' ? (
          <section
            className={`${roboto.className} flex w-full items-center justify-center gap-4 py-16`}
          >
            <Link
              href={'#'}
              className="bg-grey-200 hover:border-primary-50 relative flex min-h-[900px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent duration-300 hover:scale-105"
            >
              <h1 className="px-14 py-4 text-center text-lg font-bold text-white">
                Pacote Básico
              </h1>

              <div className="bg-grey-900 flex w-full items-center justify-center gap-2 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(159)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white">
                <li>• Abertura da Empresa de forma Gratuita</li>
                <li>• Contabilidade Completa</li>
                <li>• Abertura Conta Bancária PJ Gratuita</li>
                <li>• Certificado Digital Gratuito</li>
                <li>• Atendimento E-mail Ilimitado</li>
                <li>• Atendimento WhatsApp Ilimitado</li>
                <li>• Pró-Labore do Sócio (1 Sócio)</li>
                <li>• Emissão de CND mensalmente</li>
                <li>• Emissão de Nota Fiscal (1 por mês)</li>
                <li>• Importação e Conciliação de Extrato Bancário</li>
                <li>• Emissão do Alvará de Funcionamento</li>
                <li>• Faturamento Mensal Até 50 mil</li>
              </ul>

              <Image
                alt="City Image"
                aria-label="City Image"
                src={'/city.png'}
                width={660}
                height={338}
                className="absolute bottom-0 h-[15rem] object-cover"
              />

              <Image
                alt="Balloons Image"
                aria-label="Balloons Image"
                src={'/balloons.gif'}
                width={330}
                height={549}
                className="absolute bottom-0 object-cover"
              />
            </Link>

            <Link
              href={'#'}
              className="bg-secondary-50 hover:border-primary-50 relative flex min-h-[900px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent duration-300 hover:scale-105"
            >
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold uppercase text-white">
                Mais vendido!
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Padrão
              </h1>

              <div className="bg-grey-900 flex w-full items-center justify-center gap-2 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(239)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white">
                <li className="text-base font-bold">
                  • Tudo o que inclui no pacote BÁSICO MAIS...
                </li>
                <li>• Pró-Labore do Sócio (2 Sócios)</li>
                <li>• Folha de Pagamento (1 funcionário)</li>
                <li>• Emissão de Nota Fiscal (2 por mês)</li>
                <li>
                  • Sistema de Gestão (Emissor de Nota Fiscal + Gestão
                  Financeira)
                </li>
                <li>• Faturamento Mensal Até 80 mil</li>
              </ul>

              <Image
                alt="City Image"
                aria-label="City Image"
                src={'/city.png'}
                width={660}
                height={338}
                className="absolute bottom-0 h-[15rem] object-cover"
              />

              <Image
                alt="Balloons Image"
                aria-label="Balloons Image"
                src={'/balloons.gif'}
                width={330}
                height={549}
                className="absolute bottom-0 object-cover"
              />
            </Link>

            <Link
              href={'#'}
              className="bg-primary-50 hover:border-primary-50 relative flex min-h-[900px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent duration-300 hover:scale-105"
            >
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Plus
              </h1>

              <div className="bg-grey-900 flex w-full items-center justify-center gap-2 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(329)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white">
                <li className="text-base font-bold">
                  • Tudo o que inclui no pacote PADRÃO MAIS...
                </li>
                <li>• Pró-Labore do Sócio (3 Sócios)</li>
                <li>• Folha de Pagamento (2 funcionários)</li>
                <li>• Emissão de Nota Fiscal (4 por mês)</li>
                <li>• Consultoria por Vídeo com Especialista (1 por mês)</li>
                <li>• Documentação para Licitação</li>
                <li>• Faturamento Mensal Até 200 mil</li>
              </ul>

              <Image
                alt="City Image"
                aria-label="City Image"
                src={'/city.png'}
                width={660}
                height={338}
                className="absolute bottom-0 h-[15rem] object-cover"
              />

              <Image
                alt="Balloons Image"
                aria-label="Balloons Image"
                src={'/balloons.gif'}
                width={330}
                height={549}
                className="absolute bottom-0 object-cover"
              />
            </Link>

            <Link
              href={'#'}
              className="bg-secondary-900 hover:border-primary-50 relative flex min-h-[900px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent duration-300 hover:scale-105"
            >
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Expert
              </h1>

              <div className="bg-grey-900 flex w-full items-center justify-center gap-2 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(425)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white">
                <li className="text-base font-bold">
                  • Tudo o que inclui no pacote PLUS MAIS...
                </li>
                <li>• Pró-Labore do Sócio (4 Sócios)</li>
                <li>• Folha de Pagamento (3 funcionários)</li>
                <li>• Emissão de Nota Fiscal (7 por mês)</li>
                <li>• Consultoria por Vídeo com Especialista Ilimitada</li>
                <li>• Declaração Imposto de Renda Pessoa Física</li>
                <li>• Faturamento Mensal Até 400 mil</li>
              </ul>

              <Image
                alt="City Image"
                aria-label="City Image"
                src={'/city.png'}
                width={660}
                height={338}
                className="absolute bottom-0 h-[15rem] object-cover"
              />

              <Image
                alt="Balloons Image"
                aria-label="Balloons Image"
                src={'/balloons.gif'}
                width={330}
                height={549}
                className="absolute bottom-0 object-cover"
              />
            </Link>
          </section>
        ) : (
          <section
            className={`${roboto.className} flex w-full items-center justify-center gap-4 py-16`}
          >
            <Link
              href={'#'}
              className="bg-grey-200 hover:border-primary-50 relative flex min-h-[900px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent duration-300 hover:scale-105"
            >
              <h1 className="px-14 py-4 text-center text-lg font-bold text-white">
                Pacote Básico
              </h1>

              <div className="bg-grey-900 flex w-full items-center justify-center gap-2 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(159)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white">
                <li>• Abertura da Empresa de forma Gratuita</li>
                <li>• Contabilidade Completa</li>
                <li>• Abertura Conta Bancária PJ Gratuita</li>
                <li>• Certificado Digital Gratuito</li>
                <li>• Atendimento E-mail Ilimitado</li>
                <li>• Atendimento WhatsApp Ilimitado</li>
                <li>• Pró-Labore do Sócio (1 Sócio)</li>
                <li>• Emissão de CND mensalmente</li>
                <li>• Emissão de Nota Fiscal (1 por mês)</li>
                <li>• Importação e Conciliação de Extrato Bancário</li>
                <li>• Emissão do Alvará de Funcionamento</li>
                <li>• Faturamento Mensal Até 50 mil</li>
              </ul>

              <Image
                alt="City Image"
                aria-label="City Image"
                src={'/city.png'}
                width={660}
                height={338}
                className="absolute bottom-0 h-[15rem] object-cover"
              />

              <Image
                alt="Balloons Image"
                aria-label="Balloons Image"
                src={'/balloons.gif'}
                width={330}
                height={549}
                className="absolute bottom-0 object-cover"
              />
            </Link>

            <Link
              href={'#'}
              className="bg-secondary-900 hover:border-primary-50 relative flex min-h-[900px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent duration-300 hover:scale-105"
            >
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Expert
              </h1>

              <div className="bg-grey-900 flex w-full items-center justify-center gap-2 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(425)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white">
                <li className="text-base font-bold">
                  • Tudo o que inclui no pacote PLUS MAIS...
                </li>
                <li>• Pró-Labore do Sócio (4 Sócios)</li>
                <li>• Folha de Pagamento (3 funcionários)</li>
                <li>• Emissão de Nota Fiscal (7 por mês)</li>
                <li>• Consultoria por Vídeo com Especialista Ilimitada</li>
                <li>• Declaração Imposto de Renda Pessoa Física</li>
                <li>• Faturamento Mensal Até 400 mil</li>
              </ul>

              <Image
                alt="City Image"
                aria-label="City Image"
                src={'/city.png'}
                width={660}
                height={338}
                className="absolute bottom-0 h-[15rem] object-cover"
              />

              <Image
                alt="Balloons Image"
                aria-label="Balloons Image"
                src={'/balloons.gif'}
                width={330}
                height={549}
                className="absolute bottom-0 object-cover"
              />
            </Link>
          </section>
        )}
      </div>
    </main>
  )
}
