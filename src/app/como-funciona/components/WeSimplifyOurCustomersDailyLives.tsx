'use client'

import { CaretRight } from '@phosphor-icons/react'
import Link from 'next/link'
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { WeSimplifyContentProps } from '@/@types'
import ButtonComponent from '@/components/ButtonComponent'

const content: WeSimplifyContentProps[] = [
  {
    title: 'Certificado digital grátis',
    description:
      'Planos com certificado digital grátis para você realizar transações online, como a emissão das suas notas fiscais, de maneira segura.',
    link: '/#',
    imgPath: '',
  },
  {
    title: 'Assessor e analista dedicados',
    description:
      'Nos planos Experts você conta com o apoio de um assessor e um analista dedicados para simplificar a contabilidade da sua empresa.',
    link: '/#',
    imgPath: '',
  },
  {
    title: 'Escritório Virtual da eApurei',
    description:
      'Ideal para quem, por segurança, prefere não associar o endereço residencial ao comercial e quer oferecer aos clientes um endereço de credibilidade.',
    link: '/#',
    imgPath: '',
  },
  {
    title: 'Conta bancária digital PJ grátis',
    description:
      'No Contabilizei.bank sua conta PJ é gratuita e integrada à contabilidade da sua empresa. Você conta ainda com Pix ilimitados e sem tarifas.',
    link: '/#',
    imgPath: '',
  },
  {
    title: 'Plano de saúde para PJ',
    description:
      'Condições exclusivas e as melhores opções de planos e operadoras de saúde do país, além de planos para 1 pessoa.',
    link: '/#',
    imgPath: '',
  },
]

export default function WeSimplifyOurCustomersDailyLives() {
  return (
    <>
      <main className="relative flex w-full flex-col items-center justify-center gap-12 px-4 py-12 dark:bg-grey-100 lg_2:px-2">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-primary-100">
            Simplificamos o dia a dia dos nossos clientes
          </h1>

          <p>
            Oferecemos diversas soluções aliadas à gestão da sua contabilidade
          </p>
        </div>

        <div className="flex w-[70%] items-center justify-center">
          <Swiper
            slidesPerView={3}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {content.map((item, index) => (
              <SwiperSlide
                key={index}
                className="flex flex-col items-center justify-center rounded-md bg-gray-100 p-4"
              >
                <Link href={item.link}>
                  <h1 className="mb-2 text-xl font-bold text-primary-100">
                    {item.title}
                  </h1>

                  <p className="mb-2">{item.description}</p>

                  <p className="mb-2 flex items-center justify-start font-semibold text-primary-100 duration-300 hover:opacity-60">
                    Saiba mais
                    <CaretRight size={20} className="text-primary-100" />
                  </p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex items-center justify-center gap-4">
          <ButtonComponent label="Abra sua empresa grátis" linkTo="#" />

          <ButtonComponent label="Troque de contador" linkTo="#" />
        </div>
      </main>
    </>
  )
}
