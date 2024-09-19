'use client'

import Image from 'next/image'

import { IContentListProps } from '@/@types'

import ButtonComponent from '../atoms/ButtonComponent'

const contentList: IContentListProps[] = [
  {
    content: '→ Planos personalizados para cada empresa',
  },
  {
    content:
      '→ Contadores e Consultores especialistas na Área da Saúde e Consultores de Profissão Regulamentada.',
  },
  {
    content:
      '→ Você decide como será atendido: por vídeo, por telefone, por whatsapp, pelo chat, por nosso aplicativo ou por e-mail.',
  },
  {
    content:
      '→ Sua empresa regularizada, desde o Alvará de Funcionamento até o pagamento mínimo dos impostos de forma lícita.',
  },
]

export default function Hero() {
  return (
    <main className="lg_2:px-2 flex w-full items-center justify-between px-8 py-16">
      <section className="lg_1:w-[60%] lg_2:w-1/2 flex w-1/2 flex-col items-start justify-center gap-4">
        <h1 className="lg_1:text-3xl lg_2:text-2xl text-4xl font-bold text-primary-100">
          Contabilidade online para Área da Saúde e Consultores em Geral.
        </h1>
        <p className="lg_1:text-sm lg_2:text-xs font-semibold">
          Somos um dos maiores escritórios contábeis online para empresas da{' '}
          <span className="font-bold text-secondary-100">Área da Saúde</span> e{' '}
          <span className="font-bold text-secondary-100">Consultores</span> do
          Brasil, com mais de 2.000 clientes satisfeitos e atendidos por
          vídeo-conferência.
        </p>

        <ul className="lg_1:text-sm lg_2:text-xs flex flex-col items-start justify-center gap-1">
          {contentList.map((item, index) => {
            return <li key={index}>{item.content}</li>
          })}
        </ul>

        <h4 className="lg_1:text-xl lg_2:text-lg text-2xl font-extrabold text-black">
          Seja nosso Cliente!
        </h4>

        <div className="flex items-center justify-center gap-4">
          <ButtonComponent
            label="converse com um especialista"
            linkTo="https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20conversar%20com%20um%20especialista,%20por%20gentileza."
          />
          <ButtonComponent
            label="trocar de contador"
            linkTo="https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20trocar%20de%20contador,%20por%20gentileza."
          />
        </div>
      </section>

      <section className="lg_1:w-[40%] flex w-1/2 items-center justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="lg_2:px-12 flex items-center justify-center rounded-full border-8 border-black bg-primary-100 px-20 py-2">
            <Image
              src={'/gustavo.png'}
              alt="Gustavo Image"
              aria-label="Gustavo Image"
              className="lg_2:w-40 w-56"
              width={1426}
              height={2352}
            />
          </div>
          <div className="-mt-[4.5rem] flex items-center justify-center rounded-full border-8 border-secondary-100 bg-white px-6 py-4">
            <Image
              src={'/shortLogo.png'}
              alt="Short Logo Image"
              aria-label="Short Logo Image"
              className="lg_2:w-16 w-20"
              width={380}
              height={444}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
