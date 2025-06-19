import FAQ from './components/FAQ'
import Hero from './components/Hero'
import LearnAboutOtherSolutions from './components/LearnAboutOtherSolutions'
import NoMembershipFeeAndNoMonthlyFees from './components/NoMembershipFeeAndNoMonthlyFees'
import TheTimeToInvest from './components/TheTimeToInvest'
import WhyIsCoverYourCustomerTheBestSolution from './components/WhyIsCoverYourCustomerTheBestSolution'

export default function Page() {
  return (
    <>
      <Hero />
      <WhyIsCoverYourCustomerTheBestSolution />
      <NoMembershipFeeAndNoMonthlyFees />
      <LearnAboutOtherSolutions />
      <FAQ />
      <TheTimeToInvest
        firstButtonLabel="quero trocar de contador"
        secondButtonLabel="abrir empresa grátis"
        title="Pronto para ter uma contabilidade
mais eficaz e integrada com um
sistema de cobrança?"
      />
    </>
  )
}
