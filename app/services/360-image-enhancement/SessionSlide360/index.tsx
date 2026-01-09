'use client'

import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'
const listImageUrl = [
  '/service/image-360/fact-check/R0020071_HDR_Panorama_pano_pano.jpg',
  '/service/image-360/fact-check/R0020072_HDR_Panorama_pano_pano.jpg',
  '/service/image-360/fact-check/R0020073_HDR_Panorama_pano_pano.jpg',
  '/service/image-360/fact-check/R0020074_HDR_Panorama_pano_pano.jpg',
  '/service/image-360/fact-check/R0020075_HDR_Panorama_pano_pano.jpg',
  // '/service/image-360/fact-check/R0020076_HDR_Panorama_pano.jpg',
  // '/service/image-360/fact-check/R0020077_HDR_Panorama_pano.jpg',
  // '/service/image-360/fact-check/R0020081_HDR_Panorama_pano.jpg',
  // '/service/image-360/fact-check/R0020079_HDR_Panorama_pano_pano.jpg',
  // '/service/image-360/fact-check/R0020288-Edit_pano.jpg',
  // '/service/image-360/fact-check/R0020297-Edit_pano.jpg',
  // '/service/image-360/fact-check/R0020307-Edit_pano.jpg',
  // '/service/image-360/fact-check/R0020321-Edit.jpg',
]

function SessionSlide360() {
  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-row gap-2 lg:gap-6 items-center relative">
        <div className="swiper-button-prev min-w-[24px] md:min-w-[34px] xl:!left-[-4rem]">
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
          lazyPreloadPrevNext={3}
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
          {listImageUrl.map((item) => (
            <SwiperSlide key={`${item}}-items-post-2`}>
              <div className="w-full h-[250px] md:h-[350px] lg:h-[500px] 2xl:h-[650px] ">
                <ReactPhotoSphereViewer src={item} height="100%" width="100%" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next min-w-[24px] md:min-w-[34px] xl:!right-[-4rem]">
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
export default SessionSlide360
