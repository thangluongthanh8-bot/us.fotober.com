'use client'

import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'

function SessionSlideServiceCustomer({
  ListImage,
}: {
  ListImage: {
    title: string
    imageBefore: string
    imageAfter: string
  }[]
}) {
  return (
    <div className="flex flex-row gap-2 lg:gap-6 items-center relative">
      <div className="swiper-button-prev">
        <Image
          alt="swiper"
          src={iconPrev}
          className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
        />
      </div>
      <Swiper
        grabCursor
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
        modules={[Keyboard, Navigation]}
        className="w-full"
      >
        {ListImage.map((item) => (
          <SwiperSlide key={`${item.title}-items-post-2`}>
            <div className="w-full lg:scale-[0.85]">
              <BeforeAfterImageSlide
                afterImageUrl={item.imageBefore}
                beforeImageUrl={item.imageAfter}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next">
        <Image
          alt="swiper"
          src={iconNext}
          className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
        />
      </div>
    </div>
  )
}
export default SessionSlideServiceCustomer
