import Image from 'next/image'

import { TheTimeToInvestProps } from '@/@types'
import ButtonComponent from '@/components/ButtonComponent'

export default function TheTimeToInvest({
  title,
  titleDifference,
  firstButtonLabel,
  secondButtonLabel,
}: TheTimeToInvestProps) {
  return (
    <section className="flex w-full items-center justify-between px-8 py-12 dark:bg-grey-100">
      <div className="flex w-[55%] flex-col items-start justify-center gap-4">
        <h1 className="text-4xl font-bold uppercase text-grey-100 dark:text-white">
          {title}
          <span className="text-primary-100">{titleDifference}</span>
        </h1>

        <div className="flex items-center justify-center gap-4">
          <ButtonComponent linkTo="" label={firstButtonLabel} />

          {secondButtonLabel ? (
            <ButtonComponent
              linkTo=""
              label={secondButtonLabel}
              style="bg-secondary-100 border-secondary-100"
            />
          ) : (
            <></>
          )}
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
