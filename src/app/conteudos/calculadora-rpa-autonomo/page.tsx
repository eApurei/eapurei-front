import Plans from '@/components/Plans'

import BreadcrumbComponent from './components/BreadcrumbComponent'
import Hero from './components/Hero'
import SelfEmployedPaymentReceipt from './components/SelfEmployedPaymentReceipt'
import WhatIsRPA from './components/WhatIsRPA'
import WhatYouNeedToKnow from './components/WhatYouNeedToKnow'

export default function page() {
  return (
    <>
      <BreadcrumbComponent page="Calculadora RPA para Autônomos" />
      <Hero />
      <SelfEmployedPaymentReceipt />
      <WhatIsRPA />
      <WhatYouNeedToKnow />
      <Plans />
    </>
  )
}
