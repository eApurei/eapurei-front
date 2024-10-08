'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export default function AdditionalInformation() {
  return (
    <main className="-mt-12 flex flex-col items-center justify-center gap-6 px-8 dark:bg-grey-100">
      <Dialog>
        <DialogTrigger asChild>
          <div className="cursor-pointer rounded-md bg-primary-100 px-8 py-2 text-lg font-bold text-white duration-300 hover:scale-105">
            *Informações Adicionais
          </div>
        </DialogTrigger>
        <DialogContent className="flex w-[80%] flex-col items-center justify-center gap-6 rounded-sm bg-primary-25 p-4">
          <div className="flex w-full flex-col items-start justify-center gap-2">
            <h1 className="text-xl font-bold">
              Condições especiais para empresas de serviço
            </h1>
            <p className="text-sm font-normal">
              • Preços válidos para empresas enquadradas no regime Simples
              Nacional e prestadoras de serviços. O faturamento mensal da sua
              empresa pode influenciar no valor da mensalidade, para saber mais
              detalhes confira nossa tabela de valores.
            </p>
            <p className="text-sm font-normal">
              • O valor da mensalidade para empresas de Lucro Presumido e
              prestadoras de serviço são diferentes da tabela exibida no site. O
              faturamento mensal da sua empresa pode influenciar no valor da
              mensalidade, para saber mais detalhes confira nossa tabela de
              valores. Para saber detalhes dos planos consulte nossos
              especialistas.
            </p>
            <p className="text-sm font-normal">
              • A abertura sem sair de casa está disponível apenas para as
              cidades de Belo Horizonte, Curitiba, Florianópolis e São Paulo.
              Nessa modalidade, o processo de abertura é realizado pela eApurei.
            </p>
            <p className="text-sm font-normal">
              • O plano Experts Essencial comporta a emissão de até 35 notas
              fiscais por mês e o plano Experts Pro comporta até 70 notas
              fiscais por mês. Em caso de notas fiscais adicionais será cobrado
              R$8 por nota.
            </p>
            <p className="text-sm font-normal">
              • O plano Experts Pro comporta até 30 pagamentos por mês. Em caso
              de pagamentos adicionais, será cobrado o valor de R$6 por
              pagamento.
            </p>
            <p className="text-sm font-normal">
              • O plano Experts Essencial comporta até 2 contas bancárias e
              plano Experts Pro comporta o acompanhamento de até 3 contas
              bancárias. Para contas adicionais será cobrado R$29/mês por conta.
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
    </main>
  )
}
