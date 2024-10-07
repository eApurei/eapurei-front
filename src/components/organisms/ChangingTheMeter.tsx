'use client'

import { Folders, SealCheck, VideoConference } from '@phosphor-icons/react'
import Image from 'next/image'

import Button from '../atoms/ButtonComponent'

export default function ChangingTheMeter() {
  return (
    <>
      <div className="relative flex min-h-[50vh] w-full flex-col items-center justify-start gap-12 bg-tertiary-100 px-8 py-24 dark:bg-grey-100">
        <Image
          alt="Wave Icon Image"
          src={'/wave.png'}
          aria-label="Wave Icon Image"
          width={2560}
          height={1440}
          className="absolute left-0 top-0 w-96 lg_1:w-72"
        />

        <h1 className="w-1/2 text-center text-4xl font-bold dark:text-white lg_1:w-[60%] lg_1:text-3xl lg_2:text-2xl">
          <span className="text-primary-100 dark:text-primary-50">
            Trocar de contador{' '}
          </span>
          na eApurei é fácil, prático e econômico
        </h1>

        <section className="flex items-center justify-center">
          <div className="flex w-[70%] flex-col items-center justify-center gap-2 text-center text-secondary-100 dark:text-white">
            <VideoConference size={44} className="w-8" />
            <h3 className="text-2xl font-bold lg_1:text-xl lg_2:text-lg">
              Contato
            </h3>
            <p className="text-base font-normal text-black dark:text-white lg_1:w-[80%] lg_1:text-sm lg_2:text-xs">
              Chame nossa equipe para agendarmos a vídeo-conferência e
              alinharmos a comunicação com seu atual escritório.
            </p>
          </div>

          <div className="flex w-[70%] flex-col items-center justify-center gap-2 text-center text-secondary-100 dark:text-white">
            <Folders size={44} className="w-8" />
            <h3 className="text-2xl font-bold lg_1:text-xl lg_2:text-lg">
              Documentação
            </h3>
            <p className="text-base font-normal text-black dark:text-white lg_1:w-[80%] lg_1:text-sm lg_2:text-xs">
              Cuidamos do processo de migração, entrando em contato com seu
              contador para que ele nos forneça a documentação da sua empresa.
            </p>
          </div>

          <div className="flex w-[70%] flex-col items-center justify-center gap-2 text-center text-primary-100 dark:text-primary-50">
            <SealCheck size={44} className="w-8" weight="fill" />
            <h3 className="text-2xl font-bold lg_1:text-xl lg_2:text-lg">
              Tudo pronto!
            </h3>
            <p className="text-base font-normal text-black dark:text-white lg_1:w-[80%] lg_1:text-sm lg_2:text-xs">
              Após recebermos a documentação a sua empresa já faz parte da
              eApurei e você economizará tempo e dinheiro com serviço de
              qualidade.
            </p>
          </div>
        </section>

        <button className="rounded-sm"></button>

        <Button
          label="trocar de contador"
          style="rounded-sm"
          linkTo="https://wa.me/5515991901126?text=Ol%C3%A1,%20desejo%20trocar%20de%20contador%20,%20por%20gentileza."
        />
      </div>
    </>
  )
}
