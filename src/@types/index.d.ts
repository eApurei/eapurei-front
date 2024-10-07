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

export interface HowMuchWouldYouPayProps {
  label: string
  price: string
}
