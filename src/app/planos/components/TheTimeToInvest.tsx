import Image from 'next/image'

import ButtonComponent from '@/components/atoms/ButtonComponent'

export default function TheTimeToInvest() {
  return (
    <section className="flex w-full items-center justify-between px-8 pb-12 dark:bg-grey-100">
      <div className="flex w-[55%] flex-col items-start justify-center gap-4">
        <h1 className="text-4xl font-bold uppercase text-grey-100 dark:text-white">
          A hora de investir no sucesso da sua empresa é{' '}
          <span className="text-primary-100">agora!</span>
        </h1>
        <div className="flex items-center justify-center gap-4">
          <ButtonComponent linkTo="" label="Abra sua empresa grátis agora" />
          <ButtonComponent
            linkTo=""
            label="Troque de contador"
            style="bg-secondary-100 border-secondary-100"
          />
        </div>
      </div>
      <div className="flex w-[45%] items-center justify-center">
        <Image
          alt="Image Woman eApurei"
          src={'/finallySessionPlans.png'}
          width={1080}
          height={1080}
          className="w-[30rem]"
        />
      </div>
    </section>
  )
}
