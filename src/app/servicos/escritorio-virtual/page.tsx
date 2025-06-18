import AdvantagesOfTheVirtualOffice from './components/AdvantagesOfTheVirtualOffice'
import FAQ from './components/FAQ'
import Hero from './components/Hero'
import HowMuchDoesVirtualOfficeCost from './components/HowMuchDoesVirtualOfficeCost'
import TheThreeSteps from './components/TheThreeSteps'
import VirtualOfficeOrFiscalAddress from './components/VirtualOfficeOrFiscalAddress'

export default function Page() {
  return (
    <>
      <Hero />
      <AdvantagesOfTheVirtualOffice />
      <TheThreeSteps />
      <HowMuchDoesVirtualOfficeCost />
      <VirtualOfficeOrFiscalAddress />
      <FAQ />
    </>
  )
}
