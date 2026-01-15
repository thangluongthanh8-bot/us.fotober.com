'use client'

import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'
import { twMerge } from 'tailwind-merge'

import imageOther from '@/app/assets/service/floor-plan/so_do_ma_ bang/Siteplan_2D.jpg'
import imageOther1 from '@/app/assets/service/floor-plan/so_do_ma_ bang/Siteplan_3D_2.jpg'
import imageOther2 from '@/app/assets/service/floor-plan/so_do_ma_ bang/Siteplan_3D_1.jpg'
import imageOther3 from '@/app/assets/service/floor-plan/so_do_ma_ bang/Siteplan_3D_3.jpg'

import image3D1 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_HighEnd.jpg'
import image3D2 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_0.jpg'
import image3D3 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_1.jpg'
import image3D4 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_2.jpg'
import image3D5 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_4.jpg'
import image3D6 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_5.jpg'
import image3D7 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_6.jpg'
import image3D8 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_7.jpg'
import image3D9 from '@/app/assets/service/floor-plan/3D/3D_color_Floor_Plan_8.jpg'

import image2DBasic1 from '@/app/assets/service/floor-plan/2D/2D_basic/2D_basic_floor_plan_(B&W).jpg'
import image2DBasic2 from '@/app/assets/service/floor-plan/2D/2D_basic/2D_basic_floor_plan_(B&W)_1.jpg'
import image2DBasic3 from '@/app/assets/service/floor-plan/2D/2D_basic/2_Dbasic_floor_plan_(B&W)_2.jpg'
import image2DBasic4 from '@/app/assets/service/floor-plan/2D/2D_basic/2D_basic_floor_plan(B&W)_4.jpg'
import image2DBasic5 from '@/app/assets/service/floor-plan/2D/2D_basic/2D_basic_floor_plan_B_&W)_5.jpg'
import image2DBasic6 from '@/app/assets/service/floor-plan/2D/2D_basic/2D_basic_floor_plan_(B&W)_6.jpg'
import image2DBasic7 from '@/app/assets/service/floor-plan/2D/2D_basic/2D_basic_floor_plan_(B&W)_7.jpg'

import image2DColor1 from '@/app/assets/service/floor-plan/2D/2D_color/2D _color_Floor_Plan.jpg'
import image2DColor2 from '@/app/assets/service/floor-plan/2D/2D_color/2D_color_Floor_Plan_with_furniture.jpg'
import image2DColor3 from '@/app/assets/service/floor-plan/2D/2D_color/2D_color_Floor_Plan_1.jpg'
import image2DColor4 from '@/app/assets/service/floor-plan/2D/2D_color/2D_color_Floor_Plan_2.jpg'
import image2DColor5 from '@/app/assets/service/floor-plan/2D/2D_color/2D_color_Floor_Plan_3.jpg'
import image2DColor6 from '@/app/assets/service/floor-plan/2D/2D_color/2D_color_Floor_Plan_4.jpg'

const listTab = [
  {
    title: '2D Basic',
  },
  {
    title: '2D Color',
  },
  {
    title: '3D',
  },
  {
    title: 'Others',
  },
]

const renderListImage2DColor = [
  image2DColor1,
  image2DColor2,
  image2DColor3,
  image2DColor4,
  image2DColor5,
  image2DColor6,
]

const renderListImage2DBasic = [
  image2DBasic1,
  image2DBasic2,
  image2DBasic3,
  image2DBasic4,
  image2DBasic5,
  image2DBasic6,
  image2DBasic7,
]

const renderListImageOther = [imageOther, imageOther1, imageOther2, imageOther3]

const renderListImage3D = [
  image3D1,
  image3D2,
  image3D3,
  image3D4,
  image3D5,
  image3D6,
  image3D7,
  image3D8,
  image3D9,
]

function SessionSlideFactCheckFloorPlan() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const renderListImage = useMemo(() => {
    if (currentTabIndex === 0) {
      return renderListImage2DBasic
    }
    if (currentTabIndex === 1) {
      return renderListImage2DColor
    }
    if (currentTabIndex === 2) {
      return renderListImage3D
    }
    return renderListImageOther
  }, [currentTabIndex])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 lg:gap-10">
        {listTab?.map(({ title }, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setCurrentTabIndex(index)}
            className={twMerge(
              'rounded-[9px] px-3 py-1 text-white font-semibold text-theme-default lg:text-xl outline-none',
              currentTabIndex === index ? 'text-white bg-[#043263]' : 'text-[#043263]',
            )}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-6 items-center relative">
        <div className="swiper-button-prev xl:!left-12">
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
          className="w-full"
        >
          {renderListImage.map((item, i) => {
            const keyMap = `${i}-items-post-2`
            return (
              <SwiperSlide key={keyMap}>
                <Image
                  alt="Fotober US"
                  priority
                  src={item}
                  className="w-full overflow-hidden max-md:h-[250px] h-auto max-h-[500px] object-contain"
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className="swiper-button-next xl:!right-12">
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

export default SessionSlideFactCheckFloorPlan
