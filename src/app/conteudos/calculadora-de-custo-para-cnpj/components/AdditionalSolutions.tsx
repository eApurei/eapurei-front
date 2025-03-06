'use client'

import {
  CaretRight,
  CheckCircle,
  Info,
  PlusCircle,
} from '@phosphor-icons/react'
import Link from 'next/link'
import { Tooltip } from 'react-tooltip'

import ButtonComponent from '@/components/ButtonComponent'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { roboto } from '@/lib/fonts'

export default function AdditionalSolutions() {
  return (
    <section
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-8 dark:bg-grey-100 lg_2:px-2`}
    >
      <div className="flex w-[85%] flex-col items-center justify-center rounded-md bg-slate-400 shadow-md">
        <h3 className="w-full rounded-tl-md rounded-tr-md bg-gray-200 px-12 py-4 text-left">
          Soluções Adicionais
        </h3>

        <div className="flex w-full items-center justify-center bg-white">
          <Tooltip id="office" style={{ width: '25%' }} />

          <div className="flex w-96 items-center justify-start gap-4 px-11 py-4">
            <PlusCircle size={20} weight="fill" className="text-primary-100" />
            <p>Escritório Virtual</p>
            <Info
              size={20}
              weight="fill"
              data-tooltip-id="office"
              data-tooltip-html="Proteja seu endereço residencial tendo um Endereço Fiscal na Av. Paulista."
              data-tooltip-place="bottom-end"
              className="cursor-pointer text-grey-200 duration-300 hover:scale-110 lg_2:w-5"
            />
          </div>

          <Separator orientation="vertical" className="h-14 bg-gray-200" />

          <div className="flex flex-1 items-center justify-start gap-4 px-11 py-4">
            <p>
              Proteção do endereço pessoal e agilidade na abertura do CNPJ por
              R$50/mês
            </p>
          </div>
        </div>

        <Separator orientation="horizontal" className="w-full bg-gray-200" />

        <div className="flex w-full items-center justify-center rounded-bl-md rounded-br-md bg-white">
          <Tooltip id="health" style={{ width: '25%' }} />

          <div className="flex w-96 items-center justify-start gap-4 px-11 py-4">
            <PlusCircle size={20} weight="fill" className="text-primary-100" />
            <p>Plano de saúde</p>
            <Info
              size={20}
              weight="fill"
              data-tooltip-id="health"
              data-tooltip-html="Nossos corretores apoiam você na escolha do melhor plano para o seu perfil e você paga apenas pelo plano que contratar."
              data-tooltip-place="bottom-end"
              className="cursor-pointer text-grey-200 duration-300 hover:scale-110 lg_2:w-5"
            />
          </div>

          <Separator orientation="vertical" className="h-14 bg-gray-200" />

          <div className="flex flex-1 items-center justify-start gap-4 px-11 py-4">
            <p>
              Preços acessíveis e condições exclusivas para planos a partir de 1
              vida
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-4 py-8 text-primary-100 underline">
        <Dialog>
          <DialogTrigger asChild>
            <Link href={'#'} className="flex items-center justify-center gap-2">
              Procurando um plano com atendimento básico?
              <CaretRight size={20} weight="fill" />
            </Link>
          </DialogTrigger>
          <DialogContent
            className={`${roboto.className} flex w-[50%] flex-col items-center justify-center gap-6 rounded-sm border-primary-25 bg-gray-100 p-4`}
          >
            <div className="flex w-full flex-col items-center justify-center gap-2">
              <h1 className="text-xl font-bold">
                Procurando um plano com atendimento básico?
              </h1>

              <div className="flex w-full items-center justify-center gap-2 p-4">
                <span className="text-4xl font-bold text-primary-100">
                  {Intl.NumberFormat('pt-BR', {
                    currency: 'BRL',
                    style: 'currency',
                  }).format(159)}
                  <span className="text-xs">/mês</span>
                </span>
              </div>

              <ButtonComponent label="Contratar Plano Básico" linkTo="#" />

              <section className="flex w-full items-center justify-center pt-4 text-sm">
                <ul className="flex min-h-60 w-1/2 flex-col items-center justify-start gap-4 px-2 pt-2">
                  <li className="flex w-full items-center justify-between gap-2">
                    <Tooltip id="companyInfoModal" style={{ width: '90%' }} />

                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">
                      Abertura da Empresa de forma Gratuita
                    </p>

                    <Info
                      size={20}
                      weight="fill"
                      data-tooltip-id="companyInfoModal"
                      data-tooltip-html="Você paga apenas as taxas do governo e realiza os protocolos físicos.<br /><br />Indicamos o melhor regime tributário e atividades e você recebe a documentação de abertura via E-mail ou Correios dependendo da cidade.<br /><br />A abertura sem sair de casa está disponível para as cidades de Belo Horizonte, Curitiba, Florianópolis e São Paulo."
                      data-tooltip-place="top-end"
                      className="cursor-pointer text-grey-100 duration-300 hover:scale-110 lg_2:w-5"
                    />
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <Tooltip id="accountingModal" style={{ width: '90%' }} />

                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Contabilidade Completa</p>

                    <Info
                      size={20}
                      weight="fill"
                      data-tooltip-id="accountingModal"
                      data-tooltip-html="Todas as obrigações contábeis e legais com Receita Federal, Estadual e Prefeitura: Cálculo e emissão de guia de impostos;<br /><br />Envio de IRPJ, DIPJ, DEFIS;<br /><br />Relatórios contábeis (DRE, Balanço Patrimonial, Balancete etc;<br /><br />Obrigações acessórias (DCTF, SPED, etc..);<br /><br />Documentos assinados por contador especializado."
                      data-tooltip-place="top-end"
                      className="cursor-pointer text-grey-100 duration-300 hover:scale-110 lg_2:w-5"
                    />
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <Tooltip id="accountModal" style={{ width: '90%' }} />

                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">
                      Abertura Conta Bancária PJ Gratuita
                    </p>

                    <Info
                      size={20}
                      weight="fill"
                      data-tooltip-id="accountModal"
                      data-tooltip-html="Sua conta PJ é aberta gratuitamente e sem taxas, após isso é integrada com todos seus processos contábeis e financeiros, sem custos adicionais e sem tarifas.<br /><br />Isso não impede o empresário de utilizar outras contas bancárias."
                      data-tooltip-place="top-end"
                      className="cursor-pointer text-grey-100 duration-300 hover:scale-110 lg_2:w-5"
                    />
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <Tooltip id="certificatedModal" style={{ width: '90%' }} />

                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Certificado Digital Gratuito</p>

                    <Info
                      size={20}
                      weight="fill"
                      data-tooltip-id="certificatedModal"
                      data-tooltip-html="O Certificado Digital é necessário para a emissão de nota fiscal eletrônica e para acessar os serviços da Receita Federal."
                      data-tooltip-place="top-end"
                      className="cursor-pointer text-grey-100 duration-300 hover:scale-110 lg_2:w-5"
                    />
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Atendimento E-mail Ilimitado</p>
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Atendimento WhatsApp Ilimitado</p>
                  </li>
                </ul>

                <ul className="flex min-h-60 w-1/2 flex-col items-center justify-start gap-4 px-2 pt-2">
                  <li className="flex w-full items-center justify-between gap-2">
                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Pró-Labore do Sócio (1 Sócio)</p>
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Emissão de Nota Fiscal (1 por mês)</p>
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <Tooltip id="bankModal" style={{ width: '90%' }} />

                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">
                      Importação e Conciliação de Extrato Bancário
                    </p>

                    <Info
                      size={20}
                      weight="fill"
                      data-tooltip-id="bankModal"
                      data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                      data-tooltip-place="top-end"
                      className="cursor-pointer text-grey-100 duration-300 hover:scale-110 lg_2:w-6"
                    />
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <Tooltip id="funcModal" style={{ width: '90%' }} />

                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Emissão do Alvará de Funcionamento</p>

                    <Info
                      size={20}
                      weight="fill"
                      data-tooltip-id="funcModal"
                      data-tooltip-html="Sistema de Gestão Integrada (Gestão Financeira de Contas a Pagar e Receber + Emissor de Nota Fiscal + Emissão de Faturas/Recibos + Dashboard Fluxo de Caixa) Versão Mobile e Versão Web"
                      data-tooltip-place="top-end"
                      className="cursor-pointer text-grey-100 duration-300 hover:scale-110 lg_2:w-5"
                    />
                  </li>

                  <li className="flex w-full items-center justify-between gap-2">
                    <CheckCircle
                      weight="fill"
                      size={20}
                      className="text-primary-100"
                    />

                    <p className="flex-1">Faturamento Mensal Até 50 mil</p>
                  </li>
                </ul>
              </section>
            </div>
          </DialogContent>
        </Dialog>

        <Separator orientation="vertical" className="h-6 bg-primary-100" />

        <Dialog>
          <DialogTrigger asChild>
            <Link href={'#'} className="flex items-center justify-center gap-2">
              Informações adicionais
              <CaretRight size={20} weight="fill" />
            </Link>
          </DialogTrigger>
          <DialogContent
            className={`${roboto.className} flex w-[70%] flex-col items-center justify-center gap-6 rounded-sm border-primary-25 bg-gray-100 p-4`}
          >
            <div className="flex w-full flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold">
                Condições especiais para empresas de serviço
              </h1>
              <p className="text-sm font-normal">
                • Preços válidos para empresas enquadradas no regime Simples
                Nacional e prestadoras de serviços. O faturamento mensal da sua
                empresa pode influenciar no valor da mensalidade, para saber
                mais detalhes confira nossa tabela de valores.
              </p>
              <p className="text-sm font-normal">
                • O valor da mensalidade para empresas de Lucro Presumido e
                prestadoras de serviço são diferentes da tabela exibida no site.
                O faturamento mensal da sua empresa pode influenciar no valor da
                mensalidade, para saber mais detalhes confira nossa tabela de
                valores. Para saber detalhes dos planos consulte nossos
                especialistas.
              </p>
              <p className="text-sm font-normal">
                • A abertura sem sair de casa está disponível apenas para as
                cidades de Belo Horizonte, Curitiba, Florianópolis e São Paulo.
                Nessa modalidade, o processo de abertura é realizado pela
                eApurei.
              </p>
              <p className="text-sm font-normal">
                • O plano Experts Essencial comporta a emissão de até 35 notas
                fiscais por mês e o plano Experts Pro comporta até 70 notas
                fiscais por mês. Em caso de notas fiscais adicionais será
                cobrado R$8 por nota.
              </p>
              <p className="text-sm font-normal">
                • O plano Experts Pro comporta até 30 pagamentos por mês. Em
                caso de pagamentos adicionais, será cobrado o valor de R$6 por
                pagamento.
              </p>
              <p className="text-sm font-normal">
                • O plano Experts Essencial comporta até 2 contas bancárias e
                plano Experts Pro comporta o acompanhamento de até 3 contas
                bancárias. Para contas adicionais será cobrado R$29/mês por
                conta.
              </p>
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold">
                Serviços da eApurei que podem ser contratados separadamente
              </h1>
              <p className="text-sm font-normal">• Alteração contratual</p>
              <p className="text-sm font-normal">
                • Certidões negativas do INSS, FGTS, Federais, ICMS e ISS
              </p>
              <p className="text-sm font-normal">
                • Declaração Siscoserv (para empresas exportadoras de serviço)
              </p>
              <p className="text-sm font-normal">
                • Certidão negativa de falências ou protestos
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
