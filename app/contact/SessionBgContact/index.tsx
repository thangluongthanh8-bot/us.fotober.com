'use client'

import ImageBgHome from '@/app/assets/bg-home.png'
import Image from 'next/image'
import React from 'react'
import Typewriter from 'typewriter-effect'

function SessionBgContact() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-[#0000005e]" />
      <div className="absolute bottom-[20%] left-[50%] [transform:translate(-50%,-50%)] w-full">
        <div className="flex flex-col gap-4 justify-center items-center">
          <div className="text-white whitespace-pre-line text-[30px] md:text-[32px] lg:text-[40px] xl:text-[49.8px] text-center font-bold uppercase">
            <Typewriter
              options={{
                strings: 'Let’s start a conversation!',
                autoStart: true,
                loop: false,
                delay: 70,
                cursor: '',
              }}
            />
          </div>
        </div>
      </div>
      <Image alt="fotober" src={ImageBgHome} className="w-full h-[350px] md:h-[450px] lg:h-[650px] object-cover" />
    </div>
  )
}

export default SessionBgContact
