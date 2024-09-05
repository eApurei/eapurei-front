'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const { push } = useRouter()
  return (
    <>
      <h1>Hello World</h1>
      <button
        className="rounded-md bg-stone-500 p-2 text-white"
        type="button"
        onClick={() => push('/planos')}
      >
        Clicar para ir para planos
      </button>
    </>
  )
}
