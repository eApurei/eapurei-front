'use client'

import 'swiper/css'
import 'swiper/css/navigation'

import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SolutionsContentProps } from '@/@types'
import { roboto } from '@/lib/fonts'

const solutions: SolutionsContentProps[] = [
  {
    title: 'Abertura de CNPJ',
    content:
      'Garantimos que sua empresa fique 100% regularizada, sempre pagando o mínimo de imposto.',
  },
  {
    title: 'Agilidade em todo o processo de abertura',
    content:
      'Você conta com a nossa equipe de especialistas para te ajudar com toda a documentação e abrir seu CNPJ de forma rápida.',
  },
  {
    title: 'Várias opções de planos de contabilidade',
    content:
      'Na eApurei você encontra planos de acordo com o seu perfil, com preços que cabem no seu orçamento.',
  },
  {
    title: 'Atendimento em horário estendido',
    content:
      'Nosso atendimento é das 9h às 22h pelo WhatsApp. Você também pode falar conosco por telefone, e-mail ou chat.',
  },
  {
    title: 'Time de contadores certificados',
    content:
      'Mais de 80 contadores certificados, que cuidam desde a abertura da sua empresa até a gestão completa da sua contabilidade.',
  },
  {
    title: 'Diversas soluções aliadas à sua contabilidade.',
    content:
      'Da conta bancária PJ e emissor de notas ficais às condições exclusivas para a contratação de plano de saúde e muito mais.',
  },
]

export default function SolutionsDesignedForYou() {
  return (
    <section
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-12 pt-20 dark:bg-grey-100 lg_2:px-2`}
    >
      <h1 className="text-3xl font-bold text-primary-100">
        Soluções pensadas em você e na sua empresa
      </h1>

      <p className="text-base">
        Oferecemos diversas soluções aliadas à gestão da sua contabilidade.
      </p>

      <div className="flex w-full items-center justify-center p-12">
        <Swiper
          slidesPerView={4}
          spaceBetween={24}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper w-full select-none"
        >
          {solutions.map((item, index) => (
            <SwiperSlide
              key={index}
              className="!flex min-h-60 !w-72 flex-col items-start justify-start gap-4 rounded-md bg-gray-200 p-4"
            >
              <h1 className="text-xl font-bold text-primary-100">
                {item.title}
              </h1>
              <p>{item.content}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
