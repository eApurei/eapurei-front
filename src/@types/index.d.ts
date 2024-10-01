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
