import TheTimeToInvest from '@/app/planos/components/TheTimeToInvest'

import ClientsSayAboutUs from './components/ClientsSayAboutUs'
import Hero from './components/Hero'
import OurAccountingInPractice from './components/OurAccountingInPractice'
import SwitchingAccountantsIsEasy from './components/SwitchingAccountantsIsEasy'
import WeAreLeaders from './components/WeAreLeaders'

export default function Page() {
  return (
    <>
      <Hero />
      <OurAccountingInPractice />
      <SwitchingAccountantsIsEasy />
      <WeAreLeaders />
      <ClientsSayAboutUs />
      <TheTimeToInvest
        firstButtonLabel="Fale com um especialista"
        title="Ficou com alguma dúvida?"
      />
    </>
  )
}
