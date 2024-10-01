import { Fragment } from 'react'

import Plans from '@/components/organisms/Plans'

import AdditionalInformation from './components/AdditionalInformation'
import Hero from './components/Hero'
import PlansSelect from './components/PlansSelect'
import SolutionsDesignedForYou from './components/SolutionsDesignedForYou'

export default function Page() {
  return (
    <Fragment>
      <Hero />
      <PlansSelect />
      <Plans />
      <AdditionalInformation />
      <SolutionsDesignedForYou />
    </Fragment>
  )
}
