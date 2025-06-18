import FAQ from './components/FAQ'
import Hero from './components/Hero'
import HowMuchIsTheCertificate from './components/HowMuchIsTheCertificate'
import StepByStepToObtainTheDigitalCertificate from './components/StepByStepToObtainTheDigitalCertificate'
import TheTimeToInvest from './components/TheTimeToInvest'
import UnderstandTheImportance from './components/UnderstandTheImportance'
import WhenToBuyYourDigitalCertificate from './components/WhenToBuyYourDigitalCertificate'
import YourDigitalCertificateCouldBeFree from './components/YourDigitalCertificateCouldBeFree'

export default function Page() {
  return (
    <>
      <Hero />
      <UnderstandTheImportance />
      <WhenToBuyYourDigitalCertificate />
      <HowMuchIsTheCertificate />
      <StepByStepToObtainTheDigitalCertificate />
      <YourDigitalCertificateCouldBeFree />
      <FAQ />
      <TheTimeToInvest
        firstButtonLabel="Conheça nossos planos"
        secondButtonLabel="Veja como funciona a Contabilizei
"
        title="Pronto para experimentar uma contabilidade mais prática e segura?"
      />
    </>
  )
}
