import { Fragment } from 'react'

import ChangingTheMeter from '@/components/ChangingTheMeter'
import Hero from '@/components/Hero'
import Mei from '@/components/Mei'
import Plans from '@/components/Plans'
import Solutions from '@/components/Solutions'
import StepByStep from '@/components/StepByStep'
import ThinkInCompany from '@/components/ThinkInCompany'

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
