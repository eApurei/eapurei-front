import Plans from '@/components/Plans'

import BreadcrumbComponent from './components/BreadcrumbComponent'
import Hero from './components/Hero'
import OpenYourCompany from './components/OpenYourCompany'
import WhyGetACNPJ from './components/WhyGetACNPJ'

export default function Page() {
  return (
    <>
      <BreadcrumbComponent />
      <Hero />
      <WhyGetACNPJ />
      <OpenYourCompany />
      <Plans />
    </>
  )
}
