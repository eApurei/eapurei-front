import Plans from '@/components/Plans'

import AdditionalSolutions from '../conteudos/calculadora-de-custo-para-cnpj/components/AdditionalSolutions'
import TheTimeToInvest from '../planos/components/TheTimeToInvest'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import HowWeSupportYouInPractice from './components/HowWeSupportYouInPractice'
import KeepTrackOfYourAccountingManagement from './components/KeepTrackOfYourAccountingManagement'
import WeSimplifyOurCustomersDailyLives from './components/WeSimplifyOurCustomersDailyLives'

export default function Page() {
  return (
    <>
      <Hero />
      <HowWeSupportYouInPractice />
      <KeepTrackOfYourAccountingManagement />
      <WeSimplifyOurCustomersDailyLives />
      <Plans />
      <AdditionalSolutions />
      <FAQ />
      <TheTimeToInvest
        firstButtonLabel="Fale com um especialista"
        title="Ficou com alguma dúvida?"
      />
    </>
  )
}
