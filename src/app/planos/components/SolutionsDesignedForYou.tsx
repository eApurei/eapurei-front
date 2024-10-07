'use client'

import {
  ArrowsClockwise,
  Chats,
  Handshake,
  Headset,
  ListChecks,
} from '@phosphor-icons/react'

export default function SolutionsDesignedForYou() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-8 px-8 py-16 dark:bg-grey-100">
      <h1 className="text-4xl font-bold text-grey-100 dark:text-white lg_1:text-3xl">
        Soluções pensadas em você e na sua empresa
      </h1>

      <section className="grid w-[80%] grid-cols-3 grid-rows-2 flex-wrap items-start justify-start gap-8 py-8">
        <div className="flex w-[295px] flex-col items-center justify-center gap-1 text-grey-100 dark:text-white">
          <div className="flex w-full items-center justify-between gap-2">
            <ArrowsClockwise size={40} weight="fill" />
            <h3 className="text-lg font-bold">Agilidade em todo processo</h3>
          </div>
          <span>
            Você conta com a nossa equipe de especialistas para abrir o seu CNPJ
            em até 10 dias.
          </span>
        </div>

        <div className="flex w-[305px] flex-col items-center justify-center gap-1 text-grey-100 dark:text-white">
          <div className="flex w-full items-center justify-between gap-2">
            <Handshake size={40} weight="fill" />
            <h3 className="text-lg font-bold">Suporte na abertura do CNPJ</h3>
          </div>
          <span>
            Conte com especialistas em todos os registros profissionais para te
            ajudar com toda documentação.
          </span>
        </div>

        <div className="flex w-[355px] flex-col items-center justify-center gap-1 text-grey-100 dark:text-white">
          <div className="flex w-full items-center justify-between gap-2">
            <Chats size={40} weight="fill" />
            <h3 className="text-lg font-bold">
              Atendimento em horário estendido
            </h3>
          </div>
          <span>
            Nosso atendimento é das 9h às 22h, pelos canais WhatsApp, chat e
            e-mail.
          </span>
        </div>

        <div className="flex w-[265px] flex-col items-center justify-center gap-1 text-grey-100 dark:text-white">
          <div className="flex w-full items-center justify-between gap-2">
            <ListChecks size={40} weight="fill" />
            <h3 className="text-lg font-bold">Várias opções de planos</h3>
          </div>
          <span>
            Na eApurei você sabe que pode contar com o plano e o preço ideal
            para te atender.
          </span>
        </div>

        <div className="flex w-[300px] flex-col items-center justify-center gap-1 text-grey-100 dark:text-white">
          <div className="flex w-full items-center justify-between gap-2">
            <Headset size={40} weight="fill" />
            <h3 className="text-lg font-bold">Assessoria no seu segmento</h3>
          </div>
          <span>
            Nosso atendimento especializado e suporte, da abertura até o dia a
            dia da gestão da sua empresa, no plano Experts
          </span>
        </div>
      </section>
    </main>
  )
}
