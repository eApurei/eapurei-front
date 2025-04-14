'use client'

import { ChangeEvent, useState } from 'react'

interface InputProps {
  label: string
  idInput: string
  htmlForInput: string
}

export default function TelInput({ label, idInput, htmlForInput }: InputProps) {
  const [value, setValue] = useState<string>('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const rawValue = e.target.value.replace(/\D/g, '')

    let maskedValue = rawValue

    if (rawValue.length <= 2) {
      maskedValue = `(${rawValue}`
    } else if (rawValue.length <= 7) {
      maskedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2)}`
    } else if (rawValue.length <= 11) {
      maskedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7)}`
    } else {
      maskedValue = `(${rawValue.slice(0, 2)}) ${rawValue.slice(2, 7)}-${rawValue.slice(7, 11)}`
    }

    setValue(maskedValue)
  }

  return (
    <label
      htmlFor={htmlForInput}
      className="flex w-full flex-col items-start justify-center gap-2 dark:text-white"
    >
      {label}

      <input
        id={idInput}
        type="text"
        required
        inputMode="numeric"
        value={value}
        onChange={handleInputChange}
        placeholder="(00) 00000-0000"
        className="w-full rounded-md border border-primary-100 px-2 py-[5px] dark:text-black dark:placeholder:text-slate-500"
        maxLength={15}
      />
    </label>
  )
}
