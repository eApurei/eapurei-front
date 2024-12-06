import BreadcrumbComponent from '../calculadora-de-custo-para-cnpj/components/BreadcrumbComponent'
import FAQ from './components/FAQ'
import Hero from './components/Hero'

export default function Page() {
  return (
    <>
      <BreadcrumbComponent page="Calculadora salário CLT x PJ" />
      <Hero />
      <FAQ />
    </>
  )
}
