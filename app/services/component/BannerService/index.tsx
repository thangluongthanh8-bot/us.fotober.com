'use client'

import ImageBgHome from '@/app/assets/bg-home.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LazyLoad from 'react-lazyload'
import Typewriter from 'typewriter-effect'

const ButtonBanner = ({
  title,
  ...props
}: { title: string } & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className="cursor-pointer hover:bg-[#043263] hover:text-white flex flex-row items-center justify-center text-[#043263] w-[180px] md:w-[260px] h-[37px] md:h-[53px] text-[16px] md:text-[24px] bg-white rounded-[12px] font-bold"
    >
      {title}
    </div>
  )
}

function BannerService({ title, description }: { title: string; description: string }) {
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-[#00000085]" />
      <h1 className="absolute opacity-0">{title}</h1>
      <div className="absolute top-14 left-0  flex w-full h-full  flex-col justify-center items-center z-10">
        <div className="xl:h-[117px] xl:w-[1258px] flex flex-col gap-4 justify-center items-center">
          <div className="text-white text-[19px] md:text-[32px] lg:text-[36px] xl:text-[40px] text-center font-bold uppercase">
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
            <div className="text-white animate__animated animate__fadeInUp animate__delay-2s text-center text-[14px] md:text-[20px] font-bold ">
              {description}
            </div>
          </LazyLoad>
        </div>
        <LazyLoad offset={100} once placeholder={<div />}>
          <div className="animate__animated animate__fadeInUp animate__delay-3s flex flex-col md:flex-row gap-4 md:gap-12 justify-center items-center mt-10 md:mt-24">
            <Link href="https://orders.fotober.com/">
              <ButtonBanner title="START NOW" />
            </Link>
            <ButtonBanner title="BOOK A TRIAL" />
          </div>
        </LazyLoad>
      </div>
      <Image
        alt="fotober"
        src={ImageBgHome}
        loading="eager"
        width={650}
        quality={60}
        priority
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        className="w-full !h-[650px] object-cover"
      />
    </div>
  )
}
export default BannerService
