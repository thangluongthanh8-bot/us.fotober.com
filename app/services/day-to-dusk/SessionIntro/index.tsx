import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import { getImageUrl } from '@/app/utils/ultils'

import Link from 'next/link'
import React from 'react'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        Day To Dusk
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              When it comes to marketing a home for sale, good photographs are the most important,
              and can have a significant impact on sale price. The soft glowing light from the sky
              when the sun is below the horizon gives a perfect setting to capture images of your
              property
            </p>
            <p className="text-base lg:text-xl pt-2">
              While Day-to-Dusk photography can be challenging, our team of professionals will
              transform your daytime photos into breathtaking dusk images using advanced techniques,
              ensuring your property stands out and attracts potential buyers.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Just send us your photos, and we'll handle the rest!
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
              afterImageUrl={getImageUrl('2869c341-ee50-409a-b8ae-1533e0187ec7')}
              beforeImageUrl={getImageUrl('0a923359-5282-4825-9ce2-e977071346b5')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
