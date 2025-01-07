import TheTimeToInvest from '@/app/planos/components/TheTimeToInvest'
import Plans from '@/components/Plans'

import BreadcrumbComponent from '../calculadora-de-custo-para-cnpj/components/BreadcrumbComponent'
import AdditionalInfo from './components/AdditionalInfo'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import HowToCalculatePJSalary from './components/HowToCalculatePJSalary'
import LookingForAMoreEconomicalPlan from './components/LookingForAMoreEconomicalPlan'
import MainDifferences from './components/MainDifferences'
import OtherImportantInfo from './components/OtherImportantInfo'

export default function Page() {
  return (
    <>
      <BreadcrumbComponent page="Calculadora salário CLT x PJ" />
      <Hero />
      <HowToCalculatePJSalary />
      <MainDifferences />
      <OtherImportantInfo />
      <Plans />
      <AdditionalInfo />
      <LookingForAMoreEconomicalPlan />
      <FAQ />
      <TheTimeToInvest
        title="Invista agora no seu sucesso, avance mais um passo em direção ao seu sonho."
        firstButtonLabel="Abra sua empresa"
        secondButtonLabel="fale com um especialista"
      />
    </>
  )
}
