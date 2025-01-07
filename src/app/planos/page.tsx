import { Fragment } from 'react'

import Plans from '@/components/Plans'

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
      <TheTimeToInvest
        title="A hora de investir no sucesso da sua empresa é"
        titleDifference="agora!"
        firstButtonLabel="abra sua empresa grátis agora"
        secondButtonLabel="troque de contador"
      />
    </Fragment>
  )
}
