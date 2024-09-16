import Image from 'next/image'

export default function Footer() {
  return (
    <>
      <footer className="flex w-full flex-col items-center justify-center bg-slate-500">
        <section className="flex w-full items-center justify-center gap-4 bg-gray-200 px-8">
          <Image
            alt="eApurei Logo Image"
            src={'/logo.png'}
            aria-label="eApurei Logo Image"
            width={644}
            height={180}
            className="w-52"
          />
        </section>
        <p className="w-full bg-primary-100 py-1 text-center text-xs font-normal text-white">
          Escritório de Contabilidade | Contabilidade Online | Mais de 5.000
          clientes satisfeitos | Todos os direitos reservados &copy; eApurei
          2022
        </p>
      </footer>
    </>
  )
}
