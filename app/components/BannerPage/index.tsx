'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import LazyLoad from 'react-lazyload'
import { twMerge } from 'tailwind-merge'
import Typewriter from 'typewriter-effect'

function BannerPage({
  title,
  textDescription,
  imageBg,
  videoUrl,
}: {
  title: string
  textDescription: string
  imageBg?: StaticImageData
  videoUrl?: string
}) {
  return (
    <div className="relative">
      <div
        className={twMerge(
          'absolute w-full h-full ',
          videoUrl ? 'bg-[#000000a8]' : 'bg-[#00000085]',
        )}
      />
      <h1 className="absolute opacity-0">{title}</h1>
      <div className="absolute top-14 left-0  flex w-full h-full  flex-col justify-center items-center z-10">
        <div className="xl:h-[117px] xl:w-[1258px] flex flex-col gap-4 justify-center items-center">
          <div className="text-white text-[21px] md:text-[32px] lg:text-[46px] text-center font-bold uppercase">
            <Typewriter
              options={{
                strings: title,
                autoStart: true,
                loop: false,
                delay: 70,
                cursor: '',
              }}
            />
          </div>
          <LazyLoad offset={100} once placeholder={<div />}>
            <div className="text-white animate__animated animate__fadeInUp animate__delay-2s text-center text-[16px] md:text-[21px] font-bold ">
              {textDescription}
            </div>
          </LazyLoad>
        </div>
       
      </div>
      {imageBg && (
        <Image
          alt="fotober"
          src={imageBg}
          loading="eager"
          quality={70}
          sizes="(max-width: 768px) 100vw"
          className="w-full h-[600px] xl:h-[700px] 2xl:h-[850px] object-cover"
        />
      )}
      {videoUrl && (
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="none"
          className="w-full h-[600px]  xl:h-[700px] 2xl:h-[850px] object-cover"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </div>
  )
}

export default BannerPage
