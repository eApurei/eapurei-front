import { Fragment } from 'react'

import ChangingTheMeter from '@/components/organisms/ChangingTheMeter'
import Hero from '@/components/organisms/Hero'
import Mei from '@/components/organisms/Mei'
import Plans from '@/components/organisms/Plans'
import Solutions from '@/components/organisms/Solutions'
import StepByStep from '@/components/organisms/StepByStep'
import ThinkInCompany from '@/components/organisms/ThinkInCompany'

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <Mei />
      <Solutions />
      <ThinkInCompany />
      <StepByStep />
      <ChangingTheMeter />
      <Plans />
    </Fragment>
  )
}
