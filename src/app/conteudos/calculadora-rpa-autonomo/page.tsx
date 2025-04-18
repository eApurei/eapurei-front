import Plans from '@/components/Plans'

import AdditionalSolutions from './components/AdditionalSolutions'
import BreadcrumbComponent from './components/BreadcrumbComponent'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import SelfEmployedPaymentReceipt from './components/SelfEmployedPaymentReceipt'
import WhatIsRPA from './components/WhatIsRPA'
import WhatYouNeedToKnow from './components/WhatYouNeedToKnow'

export default function Page() {
  return (
    <>
      <BreadcrumbComponent page="Calculadora RPA para Autônomos" />
      <Hero />
      <SelfEmployedPaymentReceipt />
      <WhatIsRPA />
      <WhatYouNeedToKnow />
      <Plans />
      <AdditionalSolutions />
      <FAQ />
    </>
  )
}
