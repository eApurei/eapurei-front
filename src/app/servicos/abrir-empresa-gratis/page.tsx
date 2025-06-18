import AdditionalSolutions from '@/app/conteudos/calculadora-de-custo-para-cnpj/components/AdditionalSolutions'
import Plans from '@/components/Plans'

import AllRegions from './components/AllRegions'
import ClientsSayAboutUs from './components/ClientsSayAboutUs'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import KnowTheExpertsPlan from './components/KnowTheExpertsPlan'
import LearnAboutSomeOfTheBenefits from './components/LearnAboutSomeOfTheBenefits'
import TheThreeSteps from './components/TheThreeSteps'
import WhyEApureiIsTheBestOption from './components/WhyEApureiIsTheBestOption'

export default function Page() {
  return (
    <>
      <Hero />
      <WhyEApureiIsTheBestOption />
      <LearnAboutSomeOfTheBenefits />
      <TheThreeSteps />
      <KnowTheExpertsPlan />
      <Plans />
      <AdditionalSolutions />
      <AllRegions />
      <ClientsSayAboutUs />
      <FAQ />
    </>
  )
}
