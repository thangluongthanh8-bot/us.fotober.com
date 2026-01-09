'use client'

import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'
import imageNew1 from '@/app/assets/service/render/fact-check/sam_1.jpg'
import imageNew2 from '@/app/assets/service/render/fact-check/sam_2.jpg'
import imageNew3 from '@/app/assets/service/render/fact-check/sam_3.jpg'
import imageNew4 from '@/app/assets/service/render/fact-check/sam_4.jpg'
import imageNew5 from '@/app/assets/service/render/fact-check/samp_5.jpg'
import imageNew6 from '@/app/assets/service/render/fact-check/sam_6.jpg'
import image1 from '@/app/assets/service/render/fact-check/6_OFKPEg.jpg'
import imageEx1 from '@/app/assets/service/render/fact-check/Ex_1.jpg'
import imageEx2 from '@/app/assets/service/render/fact-check/Ex_2.jpg'
import imageEx3 from '@/app/assets/service/render/fact-check/Ex_3.jpg'
import imageEx4 from '@/app/assets/service/render/fact-check/Ex_4.jpg'
import imageEx5 from '@/app/assets/service/render/fact-check/Ex_5.jpg'
import imageEx6 from '@/app/assets/service/render/fact-check/Ex_6.jpg'
import imageEx7 from '@/app/assets/service/render/fact-check/Ex_7.jpg'
import imageInterior2 from '@/app/assets/service/render/fact-check/Interior_2.jpg'

const listImage = [
  {
    title: 'image-new-1',
    imageData: imageNew1,
  },
  {
    title: 'image-new-2',
    imageData: imageNew2,
  },
  {
    title: 'image-new-3',
    imageData: imageNew3,
  },
  {
    title: 'image-new-4',
    imageData: imageNew4,
  },
  {
    title: 'image-new-5',
    imageData: imageNew5,
  },
  {
    title: 'image-new-6',
    imageData: imageNew6,
  },
  {
    title: 'image-1',
    imageData: image1,
  },
  {
    title: 'image-ex-1',
    imageData: imageEx1,
  },
  {
    title: 'image-ex-2',
    imageData: imageEx2,
  },
  {
    title: 'image-ex-3',
    imageData: imageEx3,
  },
  { title: 'image-ex-4', imageData: imageEx4 },
  { title: 'image-ex-5', imageData: imageEx5 },
  { title: 'image-ex-6', imageData: imageEx6 },
  { title: 'image-ex-7', imageData: imageEx7 },
  {
    title: 'image-imageInterior-4',
    imageData: imageInterior2,
  },
]

function SessionSlideRender() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-2 lg:gap-6 items-center max-lg:relative">
        <div className="swiper-button-prev xl:!relative">
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
          allowTouchMove
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
          className="w-full overflow-hidden"
        >
          {listImage.map((item) => (
            <SwiperSlide key={`${item.title}-items-post-2`}>
              <Image
                alt="fotober"
                priority
                src={item.imageData}
                className="w-full h-auto max-h-[700px] object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next xl:!relative">
          <Image
            alt="swiper"
            src={iconNext}
            className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default SessionSlideRender
