import Plans from '@/components/Plans'

import AdditionalSolutions from './components/AdditionalSolutions'
import AllRegions from './components/AllRegions'
import BreadcrumbComponent from './components/BreadcrumbComponent'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import MainCosts from './components/MainCosts'
import OpenYourCompany from './components/OpenYourCompany'
import SocialProof from './components/SocialProof'
import SolutionsDesignedForYou from './components/SolutionsDesignedForYou'
import WhyGetACNPJ from './components/WhyGetACNPJ'

export default function Page() {
  return (
    <>
      <BreadcrumbComponent page="Calculadora de Custo para Abrir CNPJ" />
      <Hero />
      <WhyGetACNPJ />
      <OpenYourCompany />
      <Plans />
      <AdditionalSolutions />
      <SolutionsDesignedForYou />
      <AllRegions />
      <SocialProof />
      <MainCosts />
      <FAQ />
    </>
  )
}
