import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import { getImageUrl } from '@/app/utils/ultils'

import Link from 'next/link'
import React from 'react'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        Item Removal
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              A house or room for rent or sale will be less appealing to potential buyers with
              cluttered furniture, an unsightly interior, or any undesirable items.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Real estate picture shoots can be tough, hence making a mistake is unavoidable, and
              you only catch it in the middle of post-production with little time left for editing
              due to a hectic shooting schedule.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Our team can assist you in increasing your chances of standing out on a listing
              website and effectively promoting your property by showing a clean and
              ready-for-occupancy property.
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
              afterImageUrl={getImageUrl('5b240fbe-8d5c-4225-92fa-75d9a283a5c8')}
              beforeImageUrl={getImageUrl('9b200dd7-38a3-40f3-98df-6fdeb0a77718')}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
