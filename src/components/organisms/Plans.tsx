'use client'

import { Info } from '@phosphor-icons/react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Tooltip } from 'react-tooltip'

import { roboto } from '@/lib/fonts'

// import { roboto } from '@/app/layout'

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
      <h1 className="text-4xl font-bold text-grey-100 lg_1:text-3xl">
        Confira nossos planos
      </h1>

      <nav>
        <ul className="flex items-center justify-center border-b border-gray-300">
          <li
            className={`cursor-pointer border-b-2 p-4 text-lg text-primary-100 duration-300 hover:border-emerald-300 hover:bg-tertiary-100 lg_1:text-base ${
              activeTab === 'Empresas de serviço'
                ? 'border-b-primary-100 bg-tertiary-100 font-bold'
                : 'border-transparent'
            }`}
            onClick={() => handleTabClick('Empresas de serviço')}
          >
            Empresas de serviço
          </li>

          <li
            className={`cursor-pointer border-b-2 p-4 text-lg text-primary-100 duration-300 hover:border-emerald-300 hover:bg-tertiary-100 lg_1:text-base ${
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
            className={`${roboto.className} flex w-full flex-wrap items-center justify-center gap-4 py-16 lg_1:gap-14`}
          >
            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-grey-200 duration-300 hover:scale-105 hover:border-primary-50">
              <h1 className="px-14 py-4 text-center text-lg font-bold text-white">
                Pacote Básico
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(159)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="z-50 flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="companyInfo" style={{ width: '90%' }} />
                  • Abertura da Empresa de forma Gratuita
                  <Info
                    size={24}
                    weight="fill"
                    data-tooltip-id="companyInfo"
                    data-tooltip-html="Você paga apenas as taxas do governo e realiza os protocolos físicos.<br /><br />Indicamos o melhor regime tributário e atividades e você recebe a documentação de abertura via E-mail ou Correios dependendo da cidade.<br /><br />A abertura sem sair de casa está disponível para as cidades de Belo Horizonte, Curitiba, Florianópolis e São Paulo."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="accounting" style={{ width: '90%' }} />
                  • Contabilidade Completa
                  <Info
                    size={22}
                    weight="fill"
                    data-tooltip-id="accounting"
                    data-tooltip-html="Todas as obrigações contábeis e legais com Receita Federal, Estadual e Prefeitura: Cálculo e emissão de guia de impostos;<br /><br />Envio de IRPJ, DIPJ, DEFIS;<br /><br />Relatórios contábeis (DRE, Balanço Patrimonial, Balancete etc;<br /><br />Obrigações acessórias (DCTF, SPED, etc..);<br /><br />Documentos assinados por contador especializado."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="account" style={{ width: '90%' }} />
                  • Abertura Conta Bancária PJ Gratuita
                  <Info
                    size={24}
                    weight="fill"
                    data-tooltip-id="account"
                    data-tooltip-html="Sua conta PJ é aberta gratuitamente e sem taxas, após isso é integrada com todos seus processos contábeis e financeiros, sem custos adicionais e sem tarifas.<br /><br />Isso não impede o empresário de utilizar outras contas bancárias."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="certificated" style={{ width: '90%' }} />
                  • Certificado Digital Gratuito
                  <Info
                    size={22}
                    weight="fill"
                    data-tooltip-id="certificated"
                    data-tooltip-html="O Certificado Digital é necessário para a emissão de nota fiscal eletrônica e para acessar os serviços da Receita Federal."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li>• Atendimento E-mail Ilimitado</li>
                <li>• Atendimento WhatsApp Ilimitado</li>
                <li>• Pró-Labore do Sócio (1 Sócio)</li>
                <li>• Emissão de CND mensalmente</li>
                <li>• Emissão de Nota Fiscal (1 por mês)</li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="bank" style={{ width: '90%' }} />
                  • Importação e Conciliação de Extrato Bancário
                  <Info
                    size={28}
                    weight="fill"
                    data-tooltip-id="bank"
                    data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-6"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  • Emissão do Alvará de Funcionamento
                  <Info
                    size={24}
                    weight="fill"
                    data-tooltip-id="bank"
                    data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20básico,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas MEI em início de atividade
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-secondary-50 duration-300 hover:scale-105 hover:border-primary-50">
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold uppercase text-white">
                Mais vendido!
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Padrão
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(239)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="z-40 flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="text-base font-bold lg_2:text-sm">
                  • Tudo o que inclui no pacote BÁSICO MAIS...
                </li>
                <li>• Pró-Labore do Sócio (2 Sócios)</li>
                <li>• Folha de Pagamento (1 funcionário)</li>
                <li>• Emissão de Nota Fiscal (2 por mês)</li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="system" style={{ width: '90%' }} />
                  • Sistema de Gestão (Emissor de Nota Fiscal + Gestão
                  Financeira)
                  <Info
                    size={38}
                    weight="fill"
                    data-tooltip-id="system"
                    data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-8"
                  />
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20padrão,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas MEI já em funcionamento
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-primary-50 duration-300 hover:scale-105 hover:border-primary-50">
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Plus
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(329)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="text-base font-bold lg_2:text-sm">
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20plus,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas do Simples Nacional em início de
                  atividade
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-secondary-900 duration-300 hover:scale-105 hover:border-primary-50">
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Expert
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(425)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="text-base font-bold lg_2:text-sm">
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20expert,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas do Simples Nacional e Lucro
                  Presumido já em funcionamento
                </p>
              </div>
            </div>
          </section>
        ) : (
          <section
            className={`${roboto.className} flex w-full flex-wrap items-center justify-center gap-4 py-16 lg_1:gap-14`}
          >
            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-grey-200 duration-300 hover:scale-105 hover:border-primary-50">
              <h1 className="px-14 py-4 text-center text-lg font-bold text-white">
                Pacote Básico
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(159)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="z-50 flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="companyInfo" style={{ width: '90%' }} />
                  • Abertura da Empresa de forma Gratuita
                  <Info
                    size={24}
                    weight="fill"
                    data-tooltip-id="companyInfo"
                    data-tooltip-html="Você paga apenas as taxas do governo e realiza os protocolos físicos.<br /><br />Indicamos o melhor regime tributário e atividades e você recebe a documentação de abertura via E-mail ou Correios dependendo da cidade.<br /><br />A abertura sem sair de casa está disponível para as cidades de Belo Horizonte, Curitiba, Florianópolis e São Paulo."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="accounting" style={{ width: '90%' }} />
                  • Contabilidade Completa
                  <Info
                    size={22}
                    weight="fill"
                    data-tooltip-id="accounting"
                    data-tooltip-html="Todas as obrigações contábeis e legais com Receita Federal, Estadual e Prefeitura: Cálculo e emissão de guia de impostos;<br /><br />Envio de IRPJ, DIPJ, DEFIS;<br /><br />Relatórios contábeis (DRE, Balanço Patrimonial, Balancete etc;<br /><br />Obrigações acessórias (DCTF, SPED, etc..);<br /><br />Documentos assinados por contador especializado."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="account" style={{ width: '90%' }} />
                  • Abertura Conta Bancária PJ Gratuita
                  <Info
                    size={24}
                    weight="fill"
                    data-tooltip-id="account"
                    data-tooltip-html="Sua conta PJ é aberta gratuitamente e sem taxas, após isso é integrada com todos seus processos contábeis e financeiros, sem custos adicionais e sem tarifas.<br /><br />Isso não impede o empresário de utilizar outras contas bancárias."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="certificated" style={{ width: '90%' }} />
                  • Certificado Digital Gratuito
                  <Info
                    size={22}
                    weight="fill"
                    data-tooltip-id="certificated"
                    data-tooltip-html="O Certificado Digital é necessário para a emissão de nota fiscal eletrônica e para acessar os serviços da Receita Federal."
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
                <li>• Atendimento E-mail Ilimitado</li>
                <li>• Atendimento WhatsApp Ilimitado</li>
                <li>• Pró-Labore do Sócio (1 Sócio)</li>
                <li>• Emissão de CND mensalmente</li>
                <li>• Emissão de Nota Fiscal (1 por mês)</li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="bank" style={{ width: '90%' }} />
                  • Importação e Conciliação de Extrato Bancário
                  <Info
                    size={28}
                    weight="fill"
                    data-tooltip-id="bank"
                    data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-6"
                  />
                </li>
                <li className="flex w-full items-center justify-between">
                  • Emissão do Alvará de Funcionamento
                  <Info
                    size={24}
                    weight="fill"
                    data-tooltip-id="bank"
                    data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-5"
                  />
                </li>
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20básico,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas MEI em início de atividade
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-secondary-50 duration-300 hover:scale-105 hover:border-primary-50">
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold uppercase text-white">
                Mais vendido!
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Padrão
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(239)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="z-40 flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="text-base font-bold lg_2:text-sm">
                  • Tudo o que inclui no pacote BÁSICO MAIS...
                </li>
                <li>• Pró-Labore do Sócio (2 Sócios)</li>
                <li>• Folha de Pagamento (1 funcionário)</li>
                <li>• Emissão de Nota Fiscal (2 por mês)</li>
                <li className="flex w-full items-center justify-between">
                  <Tooltip id="system" style={{ width: '90%' }} />
                  • Sistema de Gestão (Emissor de Nota Fiscal + Gestão
                  Financeira)
                  <Info
                    size={38}
                    weight="fill"
                    data-tooltip-id="system"
                    data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                    data-tooltip-place="top-end"
                    className="cursor-pointer duration-300 hover:scale-110 lg_2:w-8"
                  />
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20padrão,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas MEI já em funcionamento
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-primary-50 duration-300 hover:scale-105 hover:border-primary-50">
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Plus
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(329)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="text-base font-bold lg_2:text-sm">
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20plus,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas do Simples Nacional em início de
                  atividade
                </p>
              </div>
            </div>

            <div className="relative flex min-h-[1000px] max-w-[280px] flex-col items-center justify-start rounded-sm border-2 border-transparent bg-secondary-900 duration-300 hover:scale-105 hover:border-primary-50">
              <div className="-mt-[30px] rounded-t-lg bg-orange-600 px-8 py-1 text-sm font-bold text-white">
                Atendimento personalizado
              </div>

              <h1 className="px-14 py-4 text-lg font-bold text-white">
                Pacote Expert
              </h1>

              <div className="flex w-full items-center justify-center gap-2 bg-grey-900 p-8">
                <span className="text-3xl font-bold text-white">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(425)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ul className="flex flex-col items-start justify-center gap-6 px-4 py-8 text-sm font-semibold text-white lg_2:text-xs">
                <li className="text-base font-bold lg_2:text-sm">
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

              <div className="absolute bottom-0 z-50 flex flex-col items-center justify-center gap-4 py-4">
                <Link
                  href={
                    'https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20contratar%20o%20pacote%20expert,%20por%20gentileza.'
                  }
                  target="_blank"
                  className="rounded-full bg-primary-100 px-8 py-1 font-bold uppercase text-white duration-300 hover:scale-95"
                >
                  contratar
                </Link>
                <p className="bg-grey-900 px-4 text-center text-xs font-medium text-white">
                  *Plano indicado para empresas do Simples Nacional e Lucro
                  Presumido já em funcionamento
                </p>
              </div>
            </div>
          </section>
        )}
      </div>
    </main>
  )
}
