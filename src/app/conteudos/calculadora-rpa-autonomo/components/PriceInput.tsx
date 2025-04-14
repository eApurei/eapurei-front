'use client'

import { ChangeEvent, useState } from 'react'

interface InputProps {
  label: string
  idInput: string
  htmlForInput: string
}

export default function PriceInput({
  label,
  idInput,
  htmlForInput,
}: InputProps) {
  const [value, setValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value.replace(/[^\d]/g, '')
    setValue(
      rawValue &&
        `R$ ${parseFloat(
          (parseInt(rawValue, 10) / 100).toFixed(2),
        ).toLocaleString('pt-BR', {
          minimumFractionDigits: 2,
        })}`,
    )
  }

  return (
    <>
      <label
        htmlFor={htmlForInput}
        className="flex w-full flex-col items-start justify-center gap-2 dark:text-white"
      >
        {label}

        <input
          id={idInput}
          type="text"
          required
          value={value}
          onChange={handleInputChange}
          placeholder="R$ 0,00"
          className="w-full rounded-md border border-primary-100 px-2 py-[5px] dark:text-black dark:placeholder:text-slate-500"
        />
      </label>
    </>
  )
}
