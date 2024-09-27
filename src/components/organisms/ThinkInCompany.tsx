import Image from 'next/image'

export default function ThinkInCompany() {
  return (
    <section className="flex w-full items-center justify-between bg-tertiary-100 px-8 py-4">
      <div className="flex flex-1 flex-col items-start justify-center text-primary-100">
        <h1 className="text-4xl font-bold lg_1:text-3xl lg_2:text-2xl">
          Pensando em abrir uma empresa?
        </h1>
        <h3 className="text-xl font-semibold lg_1:text-lg lg_2:text-sm">
          Tire sua ideia do papel e juntos colocamos em prática
        </h3>
      </div>

      <div className="flex w-[45%] items-center justify-center lg_1:justify-end">
        <Image
          alt="Company Image"
          src={'/empresa.png'}
          aria-label="Company Image"
          width={1080}
          height={1080}
          className="w-72 lg_1:w-60"
        />
      </div>
    </section>
  )
}
