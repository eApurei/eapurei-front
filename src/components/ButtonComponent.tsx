import Link from 'next/link'

import { IButtonProps } from '@/@types'

export default function ButtonComponent({
  label,
  linkTo,
  style,
}: IButtonProps) {
  return (
    <Link
      href={linkTo}
      target="_blank"
      className={`${style} rounded-full border-2 border-primary-100 bg-primary-100 px-4 py-2 text-sm font-bold uppercase text-white shadow-md duration-500 hover:scale-105 lg_1:text-xs lg_2:px-2 lg_2:text-[10px]`}
    >
      {label}
    </Link>
  )
}
