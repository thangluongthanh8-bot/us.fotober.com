import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import { getImageUrl } from '@/app/utils/ultils'

import Link from 'next/link'
import React from 'react'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        Virtual Renovation
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              Reimagine your property with virtual renovations and remodeling, offering a
              cost-effective solution that saves time and money compared to traditional renovations.
              Impress clients by transforming lackluster spaces into personalized digital showrooms
              tailored to their preferences{' '}
            </p>
            <p className="text-base lg:text-xl pt-2">
              Enhance your property's appeal and increase its selling potential by showcasing its
              best version to potential buyers before they make a purchase.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Let's unlock the potential of your photos together.
            </p>
          </div>
          <Link href="/bulk-order" className="mt-4 ">
            <div className="max-md:uppercase max-md:text-white max-md:bg-[#043263] max-md:m-auto hover:bg-[#043263] hover:text-white text-[#043263] border-solid border-[1px] border-[#043263] py-1 cursor-pointer px-6 hover:[box-shadow:inset_-1px_0px_9px_4px_#0000001a] rounded-[12px] w-fit">
              <span className="text-[18px]">PLACE AN ORDER</span>
            </div>
          </Link>
        </div>
        <div className="content-right w-full md:w-[50%]">
          <div className="w-full 2xl:h-[385px] rounded-[12px] object-contain overflow-hidden">
            <BeforeAfterImageSlide
              afterImageUrl={getImageUrl('6b1176b2-c00c-4daa-80ea-9f0511ba5f9e')}
              beforeImageUrl={getImageUrl('e6281329-4eaa-471e-99c7-99ad052f8d1c')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
