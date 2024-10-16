'use client'

import 'swiper/css'
import 'swiper/css/navigation'

import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import { SocialProofCardType } from '@/@types'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const socialProofCard: SocialProofCardType[] = [
  {
    name: 'Michel Saad',
    image: '',
    description:
      'Recebi propostas de escritórios que estavam acima do que eu poderia pagar. Descobri a eApurei e fiquei bastante impactado pela eficiência: fiz tudo sem sair de casa! A plataforma é muito fácil de usar. Já indiquei e vou continuar indicando a eApurei.',
    area: 'Engenheiro de Produção',
    plan: 'Cliente do Pacote Básico',
  },
  {
    name: 'Jordan Ruan Rodrigues',
    image: '',
    description:
      'Tive uma experiência super positiva e completa durante a abertura da minha empresa. Acionei o suporte durante o processo para tirar dúvidas e sempre fui atendido de forma ágil e humana. Eu indico a eApurei pela minha boa experiência.',
    area: 'Head of Customer Success',
    plan: 'Cliente do Pacote Padrão',
  },
  {
    name: 'Nathan Cesa Bocchese',
    image: '',
    description:
      'Eu abri o meu CNPJ com total apoio da eApurei. Eu posso dizer que eu estou bastante satisfeito com toda a orientação que eu tenho recebido até agora, inclusive sobre a classificação fiscal dos serviços que são prestados.',
    area: 'Engenheiro Químico',
    plan: 'Cliente do Pacote Expert',
  },
  {
    name: 'XXXXesa Bocchese',
    image: '',
    description:
      'Eu abri o meu CNPJ com total apoio da eApurei. Eu posso dizer que eu estou bastante satisfeito com toda a orientação que eu tenho recebido até agora, inclusive sobre a classificação fiscal dos serviços que são prestados.',
    area: 'Engenheiro Químico',
    plan: 'Cliente do Pacote Expert',
  },
  {
    name: 'AAAAAesa Bocchese',
    image: '',
    description:
      'Eu abri o meu CNPJ com total apoio da eApurei. Eu posso dizer que eu estou bastante satisfeito com toda a orientação que eu tenho recebido até agora, inclusive sobre a classificação fiscal dos serviços que são prestados.',
    area: 'Engenheiro Químico',
    plan: 'Cliente do Pacote Expert',
  },
  {
    name: 'SSSSSSAesa Bocchese',
    image: '',
    description:
      'Eu abri o meu CNPJ com total apoio da eApurei. Eu posso dizer que eu estou bastante satisfeito com toda a orientação que eu tenho recebido até agora, inclusive sobre a classificação fiscal dos serviços que são prestados.',
    area: 'Engenheiro Químico',
    plan: 'Cliente do Pacote Expert',
  },
  {
    name: 'QQQQQQQQAesa Bocchese',
    image: '',
    description:
      'Eu abri o meu CNPJ com total apoio da eApurei. Eu posso dizer que eu estou bastante satisfeito com toda a orientação que eu tenho recebido até agora, inclusive sobre a classificação fiscal dos serviços que são prestados.',
    area: 'Engenheiro Químico',
    plan: 'Cliente do Pacote Expert',
  },
  {
    name: 'EEEEEEEEEsa Bocchese',
    image: '',
    description:
      'Eu abri o meu CNPJ com total apoio da eApurei. Eu posso dizer que eu estou bastante satisfeito com toda a orientação que eu tenho recebido até agora, inclusive sobre a classificação fiscal dos serviços que são prestados.',
    area: 'Engenheiro Químico',
    plan: 'Cliente do Pacote Expert',
  },
]

export default function SocialProof() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-10 px-8 py-8 dark:bg-grey-100">
      <h1 className="text-4xl font-bold text-grey-100 dark:text-white">
        O que os nossos clientes falam sobre a{' '}
        <span className="text-secondary-100">e</span>
        <span className="text-primary-100">Apurei</span>
      </h1>

      <Swiper
        navigation={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        className="mySwiper flex w-full items-center justify-center"
      >
        {socialProofCard.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card className={`h-[340px] w-[340px] p-4`}>
                <CardHeader className="flex flex-col items-center justify-center">
                  <div className="h-16 w-16 rounded-full bg-primary-100"></div>
                  <CardTitle className="text-primary-100">
                    {item.name}
                  </CardTitle>
                  <CardDescription>{item.area}</CardDescription>
                  <CardDescription>{item.plan}</CardDescription>
                </CardHeader>
                <CardContent className="mt-4 pb-0">
                  <div className="grid w-full items-center gap-4 text-sm">
                    <div className="flex flex-col">
                      <p className="text-center">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </main>
  )
}
