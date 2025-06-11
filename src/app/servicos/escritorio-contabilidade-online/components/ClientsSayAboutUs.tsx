import { TestimonialsProps } from '@/@types'
import { roboto } from '@/lib/fonts'

import TestimonialCard from './TestimonialCard'

const testimonials: TestimonialsProps[] = [
  {
    id: 1,
    name: 'Telma Sassaroli Sturlini',
    role: 'Psicóloga e cliente eApurei desde 2021',
    testimonial:
      'A facilidade e a forma amistosa de interação com quem está abrindo empresa são os principais motivos de eu ser cliente.',
    avatar: '',
  },
  {
    id: 2,
    name: 'Edmar Benedito',
    role: 'Executivo comercial e cliente eApurei desde 2022',
    testimonial:
      'Percebo que a tecnologia desenvolvida por trás da contabilidade dá bastante velocidade ao meu atendimento.',
    avatar: '',
  },
  {
    id: 3,
    name: 'Felipe Bernardo Ferreira',
    role: 'Arquiteto e cliente eApurei desde 2021',
    testimonial:
      'A eApurei me ajudou a deixar a gestão do meu CNPJ mais rápida. Sobra mais tempo para o meu negócio.',
    avatar: '',
  },
  {
    id: 4,
    name: 'Ana Luisa Garcia de Paula',
    role: 'Médica e cliente eApurei desde 2021',
    testimonial:
      'Abri minha empresa sem sair de casa e de forma simples e prática. Resolvo dúvidas via e-mail e videochamada.',
    avatar: '',
  },
  {
    id: 5,
    name: 'Carlos Silva Santos',
    role: 'Dentista e cliente eApurei desde 2020',
    testimonial:
      'O atendimento é excepcional e a plataforma digital facilita muito o dia a dia da minha clínica.',
    avatar: '',
  },
  {
    id: 6,
    name: 'Marina Costa Lima',
    role: 'Advogada e cliente eApurei desde 2022',
    testimonial:
      'Migrei para a eApurei e foi a melhor decisão. Tudo mais organizado e transparente.',
    avatar: '',
  },
]
export default function ClientsSayAboutUs() {
  const extendedTestimonials = [
    ...testimonials,
    ...testimonials,
    ...testimonials,
  ]

  return (
    <div
      className={`${roboto.className} flex w-full flex-col items-center justify-center gap-4 px-16 py-12 dark:bg-grey-100 lg_2:px-2`}
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-primary-100">
            Confira o que nossos clientes falam sobre nós.
          </h2>
          <p className="text-lg text-gray-600 dark:text-tertiary-100">
            Somos reconhecidos pela nossa especialização em diversos segmentos.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="animate-scroll hover:animate-pause flex w-fit">
            {extendedTestimonials.map((testimonial, index) => (
              <TestimonialCard
                key={`${testimonial.id}-${index}`}
                testimonial={testimonial}
              />
            ))}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-gray-50 to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>
        </div>
      </div>
    </div>
  )
}
