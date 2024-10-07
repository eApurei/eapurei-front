import { Fragment } from 'react'

import Plans from '@/components/organisms/Plans'

import AdditionalInformation from './components/AdditionalInformation'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import PlansSelect from './components/PlansSelect'
import SocialProof from './components/SocialProof'
import SolutionsDesignedForYou from './components/SolutionsDesignedForYou'
import TheTimeToInvest from './components/TheTimeToInvest'

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <PlansSelect />
      <Plans />
      <AdditionalInformation />
      <SolutionsDesignedForYou />
      <SocialProof />
      <FAQ />
      <TheTimeToInvest />
    </Fragment>
  )
}
