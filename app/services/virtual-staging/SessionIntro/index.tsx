import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import { getImageUrl } from '@/app/utils/ultils'

import Link from 'next/link'
import React from 'react'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        Virtual Staging
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              Don't let empty rooms be the highlight of your commercial property listings.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Our team of professionals can transform any room into a sophisticated office space,
              attracting more clients and making properties easier to sell at a higher price.
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
              afterImageUrl={getImageUrl('ac589e59-cce3-4670-a6ea-22b282fd3358')}
              beforeImageUrl={getImageUrl('8a577e27-242e-4e7f-99ac-b80ddea0a9b8')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
