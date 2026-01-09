'use client'

import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import { getImageUrl } from '@/app/utils/ultils'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'

const listImage = [
  {
    title: 'remove-1',
    imageAfter: '5b240fbe-8d5c-4225-92fa-75d9a283a5c8',
    imageBefore: '9b200dd7-38a3-40f3-98df-6fdeb0a77718',
  },
  {
    title: 'remove-2',
    imageAfter: 'a91ec00f-45e8-4ec9-91b1-7fb26c3107eb',
    imageBefore: '5a27112c-be5e-4cae-89cf-f711615aeac7',
  },
  {
    title: 'remove-3',
    imageAfter: 'bb0b890e-36f2-411b-aa21-1973130763b8',
    imageBefore: '9bec35e4-7729-4221-8279-a71a0170efe7',
  },
  {
    title: 'remove-4',
    imageAfter: 'f7499594-efa0-4938-8ed1-8ad7428ff8c0',
    imageBefore: 'd072d40f-a9a2-4157-babe-ed7b5769b89c',
  },
]

function SessionSlide() {
  return (
    <div className="flex flex-row gap-2 lg:gap-6 items-center relative">
      <div className="swiper-button-prev xl:!left-[-4rem]">
        <Image
          alt="swiper"
          src={iconPrev}
          className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
        />
      </div>
      <Swiper
        grabCursor
        // watchSlidesProgress
        loop
        allowTouchMove={false}
        pagination
        centeredSlides
        breakpoints={{
          1: {
            slidesPerView: 1,
          },
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Keyboard, Pagination, Navigation]}
        className="w-full"
      >
        {listImage.map((item, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <SwiperSlide key={`${i}-items-post-2`}>
            <div className="w-full">
              <BeforeAfterImageSlide
                afterImageUrl={getImageUrl(item.imageAfter)}
                beforeImageUrl={getImageUrl(item.imageBefore)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next xl:!right-[-4rem]">
        <Image
          alt="swiper"
          src={iconNext}
          className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
        />
      </div>
    </div>
  )
}

export default SessionSlide
