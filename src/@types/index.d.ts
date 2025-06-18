export interface IMenuItemsProps {
  label: string
  href: string
}

export interface IContentListProps {
  content: string
}

export interface IButtonProps {
  label: string
  linkTo: string
  style?: string
}

export interface BenefitsProps {
  description: string
  icon: React.ElementType
  iconSize: number
}

export interface SelectItemsProps {
  label: string
  value: string
}

export interface SocialProofCardType {
  name: string
  image: string
  description: string
  area: string
  plan: string
}

export interface SocialProofCardProps {
  item: SocialProofCardType
}

export interface AccordionItemsProps {
  label: string
  value: string
}

export interface AccordionItemsFAQProps {
  label: string
  value: string[]
}

export interface HowMuchWouldYouPayProps {
  label: string
  price: string
}

export interface ActivitiesContentProps {
  label: string
  activity: string
}

export interface SolutionsContentProps {
  title: string
  content: string
}

export interface BreadcrumbProps {
  page: string
}

interface TheTimeToInvestProps {
  title: string
  titleDifference?: string
  firstButtonLabel: string
  secondButtonLabel?: string
}

interface SupportsProps {
  label: string
  openCompany: {
    title: string
    description: string
  }[]
  button: {
    1: {
      label: string
      linkTo: string
    }
    2: {
      label: string
      linkTo: string
    }
  }
}

interface WeSimplifyContentProps {
  title: string
  description: string
  link: string
  imgPath: string
}

interface CompanyActivitiesProps {
  activity: string
}

interface ContentFormFatorRProps {
  id: string
  question: string
}

type AnswerKeys = 'company' | 'salary' | 'employees'

interface RFactorCalculatorProps {
  grossSales: string
  activity: string
  company: string
  employees: string
  salary: string
}

export interface StepsSwitchingAccountantsIsEasyProps {
  number: number
  text: string
}

export interface HighlightsProps {
  icon: JSX.Element
  title: string
  description: string
}

export interface TestimonialsProps {
  id: number
  name: string
  role: string
  testimonial: string
  avatar: string
}

export interface TestimonialCardProps {
  testimonial: TestimonialsProps
}

export interface ComparisonDataProps {
  service: string
  eapurei: string
  market: string
  isZero?: boolean
  isSpecial?: boolean
}

export interface BenefitsCompanyPageProps {
  title: string
  description: string
  avatarPartner: string
  img: string
}
