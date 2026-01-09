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
    title: 'Img 0018',
    imageBefore: '2869c341-ee50-409a-b8ae-1533e0187ec7',
    imageAfter: '0a923359-5282-4825-9ce2-e977071346b5',
  },
  {
    title: 'Img-23',
    imageAfter: '08330b0f-b637-46c5-b469-f3105ee585c3',
    imageBefore: '8de8028d-5b87-47da-a65b-1f137a6669e6',
  },
  {
    title: 'Img-232',
    imageAfter: 'f391f6ae-b4a3-4968-b815-0bebd7ae594f',
    imageBefore: '19d543b0-6b33-4e73-a34a-658684e776ea',
  },
  {
    title: 'Img-211322',
    imageBefore: 'a6a7302b-15af-4ff3-9365-a0343929aced',
    imageAfter: 'a0f840b1-fa7d-415f-b7d3-cab28bff91fd',
  },
]
function SessionSlideD2D() {
  return (
    <div className="flex flex-row gap-2 lg:gap-6 items-center relative">
      <div className="swiper-button-prev xl:!left-[-4rem]">
        <Image
          alt="swiper"
          src={iconPrev}
          className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer "
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
        {listImage.map((item) => (
          <SwiperSlide key={`${item.title}-items-post-2`}>
            <div className="w-full">
              <BeforeAfterImageSlide
                afterImageUrl={getImageUrl(item.imageBefore)}
                beforeImageUrl={getImageUrl(item.imageAfter)}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-next  xl:!right-[-4rem]">
        <Image
          alt="swiper"
          src={iconNext}
          className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
        />
      </div>
    </div>
  )
}

export default SessionSlideD2D
