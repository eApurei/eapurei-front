import ButtonComponent from '@/components/ButtonComponent'

export default function EasyToChangeAccountants() {
  return (
    <main className="relative flex w-full items-center justify-center gap-12 bg-white px-28 py-12 dark:bg-grey-100 lg_2:px-2">
      <div className="flex w-1/2 flex-col items-start justify-center gap-4">
        <h1 className="text-3xl font-bold text-primary-100">
          É muito fácil trocar de contador.
        </h1>

        {Array.from([
          'Você sabia que pode trocar de contador em qualquer época do ano? A eApurei oferece serviço de contabilidade, prático e completo por um valor que cabe no seu bolso. E o melhor, a mudança é muito simples e você pode começar agora.',
          'A contabilidade online traz mais facilidade para a rotina da sua empresa: você acessa quando e onde quiser, fica por dentro de todas as rotinas contábeis e tem mais de 400 profissionais à sua disposição. Tudo isso com poucos cliques e muita economia.',
          'Para começar é muito simples: escolha seu plano, faça seu cadastro e pagamento da primeira mensalidade, preencha os dados da empresa e pronto. Cuidamos de toda a transferência e sua empresa passa a contar com o maior escritório de contabilidade do país. Vem pra eApurei.',
        ]).map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <ButtonComponent label="Troque de contador" linkTo="/#" />
      </div>

      <section className="relative flex h-96 w-1/2 flex-col items-start justify-center gap-4 px-8">
        <div className="z-10 flex h-full w-full flex-col items-start justify-start gap-12 py-12">
          <p className="flex flex-col text-xl font-light uppercase text-primary-100">
            Especialistas <strong className="text-5xl">+1.000</strong>
          </p>

          <div className="flex w-full items-center justify-start gap-12">
            <p className="flex flex-col text-xl font-light uppercase text-primary-100">
              Cidades atendidas <strong className="text-5xl">+50</strong>
            </p>

            <p className="flex flex-col text-xl font-light uppercase text-primary-100">
              Clientes <strong className="text-5xl">+70.000</strong>
            </p>
          </div>
        </div>

        <div className="absolute left-12 h-80 w-80 rounded-full bg-primary-25 opacity-15"></div>
      </section>
    </main>
  )
}
