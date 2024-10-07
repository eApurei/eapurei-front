import { SocialProofCardType } from '@/@types'

import SocialProofCard from './SocialProofCard'

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
]

export default function SocialProof() {
  return (
    <main className="flex w-full flex-col items-center justify-center gap-10 px-8 py-8 dark:bg-grey-100">
      <h1 className="text-4xl font-bold text-grey-100 dark:text-white">
        O que os nossos clientes falam sobre a{' '}
        <span className="text-secondary-100">e</span>
        <span className="text-primary-100">Apurei</span>
      </h1>

      <div className="flex items-center justify-center gap-8 py-8">
        {socialProofCard.map((item, index) => {
          return <SocialProofCard key={index} item={item} />
        })}
      </div>
    </main>
  )
}
