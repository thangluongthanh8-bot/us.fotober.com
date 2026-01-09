'use client'

import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
import { getImageUrl } from '@/app/utils/ultils'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation, Pagination } from 'swiper/modules'
import { twMerge } from 'tailwind-merge'

const listTab = [
  {
    title: 'Living room',
  },
  {
    title: 'Bedroom',
  },
  {
    title: 'Kitchen',
  },
  {
    title: 'Outdoor',
  },
  {
    title: 'Office',
  },
]

const contentOffice = [
  {
    title: '001   Originala',
    imageBeforeId: 'e6281329-4eaa-471e-99c7-99ad052f8d1c',
    imageAfterId: '6b1176b2-c00c-4daa-80ea-9f0511ba5f9e',
  },
  {
    title: 'Office 1',
    imageBeforeId: 'b117b3ea-ae99-4374-8a68-62fa90f925d1',
    imageAfterId: '2b39e734-bfd4-4201-950f-160ca15b7c45',
  },
]

const contentOutDoor = [
  {
    title: 'Back Deck 3',
    imageBeforeId: '152a3108-4ac2-4e56-b9e7-b8191bba5fe0',
    imageAfterId: '39a005d2-0315-4d47-acd0-b5072d5566cb',
  },
  {
    title: 'Oscar Dhingra   Ds C03532 1',
    imageBeforeId: '79d88529-4a7c-400b-8968-2778fa7c9678',
    imageAfterId: '0aa53ba9-0572-4fdd-bcae-6bb44af993ed',
  },
  {
    title: 'Yard 2',
    imageBeforeId: '0a9b6366-b04b-4bdb-95f2-972eba1a080a',
    imageAfterId: 'c598feb2-bf67-42c8-8192-f8d922f3e8ea',
  },
]
const contentKitchen = [
  {
    title: '15a',
    imageBeforeId: '787e196e-1afe-4e81-aa84-154be87bf68f',
    imageAfterId: '1691fd14-6f97-4162-9f81-8cfb5d25e34b',
  },
  {
    title: '639 Wisteria Way Gardendale 16',
    imageBeforeId: '8d04cd0a-0aac-4674-b3d7-4dd9b9def37f',
    imageAfterId: 'c5186923-77c1-45e7-aeb3-edb8c4e193c6',
  },
  {
    title: 'Dining to Living 2',
    imageBeforeId: 'e20bae35-637c-40ef-accc-1826c1c2d075',
    imageAfterId: '9536cb10-b562-453d-9463-4c61fd5682b0',
  },
  {
    title: 'Kitchen to Living room 2',
    imageBeforeId: '6c0b76a6-a6d1-4a2d-b350-3b04c7fccfe1',
    imageAfterId: '993e62b7-ae72-4e26-8783-9e252458a4f4',
  },
]
const contentBedRoom = [
  {
    title: 'Ds C5807a',
    imageBeforeId: 'd47541d4-d809-4b62-978f-83d8700365b8',
    imageAfterId: 'a8958398-b2c1-4863-ba85-c210fc37d0e6',
  },
  {
    title: '20a',
    imageBeforeId: 'f3c9b18a-610a-4507-9b5e-58b096de0177',
    imageAfterId: '155f28e5-0bf8-4abb-b37a-0c1d258c5cc1',
  },
  {
    title: '65 Se 202404271714408158 10983 1',
    imageBeforeId: 'dcc722bc-c59f-4823-a303-a3dd9a10fd59',
    imageAfterId: 'ae2a8721-8bd5-416c-b88a-0914d9fff30d',
  },
  {
    title: 'Bedroom 1',
    imageBeforeId: '70c505e4-30b0-46e4-8908-3ae79dc4ca7a',
    imageAfterId: '91bc8f6b-e5c1-487c-befd-ac0919ab9b82',
  },
]
const contentLivingRoom = [
  {
    title: 'Ds C5867a',
    imageBeforeId: '3de668c3-57d3-4e23-ae70-a86c7e15f2b9',
    imageAfterId: 'fcd3a93a-752e-4d08-b8be-b4b942d9e125',
  },
  {
    title: '3 X0 A6604 1',
    imageBeforeId: 'e5194107-cb11-4213-a56e-3ea21f1a9fae',
    imageAfterId: '4a10bfdb-1cc7-44ac-ace6-73290a48a7ad',
  },
  {
    title: '6a',
    imageBeforeId: '133026e3-b1a0-45a1-9568-7a24ebb86381',
    imageAfterId: 'ab740882-3b43-465b-8d79-3caf2677ac6a',
  },
  {
    title: '639 Wisteria Way Gardendale 12 1',
    imageBeforeId: 'b0b9a4f8-61b2-4fd2-8853-4d01b33d2fd5',
    imageAfterId: 'b1700923-1a27-46af-b253-6bda1204abf0',
  },
  {
    title: 'Img 0790',
    imageBeforeId: '60e9e79f-c7fa-4292-9068-c7f257be44f8',
    imageAfterId: '0cfaf11b-553e-4d8c-b8b8-2e25ed680d6a',
  },
  {
    title: 'Img 0815 1',
    imageBeforeId: '8fe01c3a-5e49-4e21-8d21-674de28d5c35',
    imageAfterId: '63531b92-6a29-4afb-89f4-a155f13db1b2',
  },
]

function SessionSlideVirtualRenovation() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const renderContent = useMemo(() => {
    if (currentTabIndex === 0) {
      return contentLivingRoom
    }
    if (currentTabIndex === 1) {
      return contentBedRoom
    }
    if (currentTabIndex === 2) {
      return contentKitchen
    }
    if (currentTabIndex === 3) {
      return contentOutDoor
    }
    return contentOffice
  }, [currentTabIndex])

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-4 md:gap-6 mb-4">
        {listTab?.map(({ title }, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setCurrentTabIndex(index)}
            className={twMerge(
              'rounded-[9px] px-3 py-1 text-white font-semibold whitespace-pre-line text-theme-default lg:text-xl outline-none',
              currentTabIndex === index ? 'text-white bg-[#043263]' : 'text-[#043263]',
            )}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-6 items-center overflow-hidden max-lg:relative">
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
          modules={[Keyboard, Pagination, Navigation]}
          className="w-full overflow-hidden"
        >
          {renderContent.map((item) => (
            <SwiperSlide key={`${item.title}-items-post-2`}>
              <div className="h-full w-auto overflow-hidden object-contain">
                <BeforeAfterImageSlide
                  afterImageUrl={getImageUrl(item.imageAfterId)}
                  beforeImageUrl={getImageUrl(item.imageBeforeId)}
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
    </div>
  )
}

export default SessionSlideVirtualRenovation
