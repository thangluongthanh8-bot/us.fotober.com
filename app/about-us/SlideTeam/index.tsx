'use client'

import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Keyboard } from 'swiper/modules'

import bgTeam from '../assets/bg-team.png'
import imageTeam9 from '../assets/bg-team-9.jpg'
import imageTeam10 from '../assets/bg-team-10.jpg'
import imageTeam11 from '../assets/bg-team-11.jpg'
import imageTeam12 from '../assets/bg-team-12.jpg'
import imageTeam13 from '../assets/bg-team-13.jpg'
import imageTeam14 from '../assets/bg-team-14.jpg'
import imageTeam15 from '../assets/bg-team-15.jpg'

const listImageUrl = [
  bgTeam,
  imageTeam9,
  imageTeam10,
  imageTeam11,
  imageTeam12,
  imageTeam13,
  imageTeam14,
  imageTeam15,
]

function SlideTeam() {
  return (
    <div className="flex flex-col gap-4 mt-8 relative">
      <div className="flex flex-row gap-2 lg:gap-6 items-center">
        <div className="swiper-button-prev min-w-[24px] md:min-w-[34px]">
          <Image
            alt="swiper"
            src={iconPrev}
            className="w-[24px] min-w-[24px] h-[24px] min-h-[24px] lg:min-w-[34px] lg:w-[34px] lg:h-[34px] lg:min-h-[34px] cursor-pointer"
          />
        </div>
        <Swiper
          grabCursor
          loop
          allowTouchMove
          pagination
          centeredSlides
          lazyPreloadPrevNext={3}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            1: {
              slidesPerView: 1,
            },
          }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          modules={[Navigation, Keyboard]}
          className="w-full flex justify-center items-center"
        >
          {listImageUrl.map((item, i) => {
            const keyMap = `${i}-list-image-year`
            return (
              <SwiperSlide key={keyMap}>
                <Image
                  alt="Fotober US"
                  src={item}
                  priority
                  width={1000}
                  height={1000}
                  className="w-auto overflow-hidden h-full max-md:max-h-[250px] max-h-[650px] object-cover m-auto"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="swiper-button-next min-w-[24px] md:min-w-[34px]">
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
export default SlideTeam
