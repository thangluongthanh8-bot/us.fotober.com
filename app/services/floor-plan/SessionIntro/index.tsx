'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imageOther1 from '@/app/assets/service/floor-plan/so_do_ma_ bang/Siteplan 3D 2.jpg'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        2D - 3D Floor plan
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              The floor plan allows buyers to see how each room is laid out, including the real size
              of each room, how the living rooms link, the actual position of the kitchen, bedroom,
              garage, etc. It lets the client perceive the accurate look and precise dimension of a
              property using a 2D or 3D floor plan.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Simply send us a rough sketch with measurements and our team of experts will turn it
              into an incredible 2D or 3D floor plan to showcase your property to prospective
              buyers.
            </p>
          </div>
          <Link href="/bulk-order" className="mt-4 ">
            <div className="max-md:uppercase max-md:text-white max-md:bg-[#043263] max-md:m-auto hover:bg-[#043263] hover:text-white text-[#043263] border-solid border-[1px] border-[#043263] py-1 cursor-pointer px-6 hover:[box-shadow:inset_-1px_0px_9px_4px_#0000001a] rounded-[12px] w-fit">
              <span className="text-[18px]">PLACE AN ORDER</span>
            </div>
          </Link>
        </div>
        <div className="content-right max-md:h-[350px] w-full md:w-[50%]">
          <div className="w-full h-full 2xl:h-[385px] rounded-[12px] object-contain overflow-hidden">
            <Image
              alt="fotober"
              width={600}
              height={600}
              src={imageOther1}
              className="w-full  2xl:h-[385px] rounded-[12px] object-contain"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
