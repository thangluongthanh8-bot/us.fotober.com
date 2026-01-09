'use client'

import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'

const ListImage = [
  {
    title: 'image-1',
    imageBefore: '/service/real-estate-photo-editing/fact-check/01/LFCO8942.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/01/LFCO8942_1.jpg',
  },
  {
    title: 'image-2',
    imageBefore: '/service/real-estate-photo-editing/fact-check/02/LFCO8922.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/02/LFCO8923.jpg',
  },
  {
    title: 'image-3',
    imageBefore: '/service/real-estate-photo-editing/fact-check/03/LFCO8887.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/03/LFCO8888.jpg',
  },
  {
    title: 'image-4',
    imageBefore: '/service/real-estate-photo-editing/fact-check/04/IMG_1711.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/04/IMG_1713.jpg',
  },
  {
    title: 'image-5',
    imageBefore: '/service/real-estate-photo-editing/fact-check/05/IMG_1695.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/05/IMG_1695_1.jpg',
  },
  {
    title: 'image-6',
    imageBefore: '/service/real-estate-photo-editing/fact-check/06/DSC05966.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/06/DSC05964.jpg',
  },
  {
    title: 'image-7',
    imageBefore: '/service/real-estate-photo-editing/fact-check/07/DSC05928.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/07/DSC05930.jpg',
  },
  {
    title: 'image-8',
    imageBefore: '/service/real-estate-photo-editing/fact-check/08/DSC05881.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/08/DSC05879.jpg',
  },
  {
    title: 'image-9',
    imageBefore: '/service/real-estate-photo-editing/fact-check/09/DJI_20240715102346_0070_D.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/09/DJI_20240715102346_0070_D_1.jpg',
  },
  {
    title: 'image-10',
    imageBefore: '/service/real-estate-photo-editing/fact-check/10/DJI_0041.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/10/DJI_0041_1.jpg',
  },
]

function SessionSlideImageEnhancement() {
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
        modules={[Keyboard, Navigation]}
        className="w-full"
      >
        {ListImage.map((item) => (
          <SwiperSlide key={`${item.title}-items-post-2`}>
            <div className="w-full lg:scale-[0.85]">
              <BeforeAfterImageSlide
                altBefore="Before real estate photo editing – original unedited image provided by the client."
                altAfter="After real estate photo editing – professionally enhanced image delivered to the client."
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

export default SessionSlideImageEnhancement
