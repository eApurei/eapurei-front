'use client'

import ChangingTheMeter from '@/components/organisms/ChangingTheMeter'
import Hero from '@/components/organisms/Hero'
import Mei from '@/components/organisms/Mei'
import Plans from '@/components/organisms/Plans'
import ThinkInCompany from '@/components/organisms/ThinkInCompany'

export default function Home() {
  return (
    <>
      <Hero />
      <Mei />
      <ThinkInCompany />
      <ChangingTheMeter />
      <Plans />
    </>
  )
}
