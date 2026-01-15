'use client'

import ImageBgHome from '@/app/assets/bg-home.png'
import Image from 'next/image'
import React from 'react'
import LazyLoad from 'react-lazyload'
import Typewriter from 'typewriter-effect'

function SessionBgBulkOrder() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-[#0000005e]" />
      <div className="absolute top-14 left-0  flex w-full h-full  flex-col justify-center items-center z-10">
        <h1 className="opacity-0"> Bulk Order</h1>
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-white text-[28px] md:text-[32px] lg:text-[46px] text-center font-bold uppercase">
            <Typewriter
              options={{
                strings: 'Request quote',
                autoStart: true,
                loop: false,
                delay: 70,
                cursor: '',
              }}
            />
          </div>
          <LazyLoad offset={100} once placeholder={<div />}>
            <div className="text-white animate__animated animate__fadeInUp animate__delay-2s text-white text-center text-[18px] md:text-[21px] font-bold ">
              Send your requirement to get a custom quote!
            </div>
          </LazyLoad>
        </div>
      </div>
      <Image alt="Fotober US" src={ImageBgHome} className="w-full h-[650px] object-cover" />
    </div>
  )
}

export default SessionBgBulkOrder
