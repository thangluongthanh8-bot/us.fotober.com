'use client'

import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import iconNext from '@/app/assets/icons/next.png'
import iconPrev from '@/app/assets/icons/prev.png'
// import { getImageUrl } from '@/app/utils/ultils'
import Image from 'next/image'
import React, { useMemo, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Keyboard, Navigation } from 'swiper/modules'
import { twMerge } from 'tailwind-merge'
import { getImageUrl } from '@/app/utils/ultils'

const listTab = [
  {
    title: 'Living Room',
  },
  {
    title: 'Bedroom',
  },
  {
    title: 'Kitchen',
  },
  {
    title: 'Outdoors',
  },
  {
    title: 'Office',
  },
]

const contentOffice = [
  {
    title: 'Interiors 21',
    imageBeforeId: '8a577e27-242e-4e7f-99ac-b80ddea0a9b8',
    imageAfterId: 'ac589e59-cce3-4670-a6ea-22b282fd3358',
  },
]

const contentOutdoors = [
  {
    title: '0 G6 A3352 1',
    imageBeforeId: 'fde3a9d4-7c2c-4546-b115-57e51f5dc74f',
    imageAfterId: '6c3cc733-9a62-4391-b13e-bb6752902b29',
  },
  {
    title: '0 G6 A3352 1',
    imageBeforeId: 'fde3a9d4-7c2c-4546-b115-57e51f5dc74f',
    imageAfterId: '6c3cc733-9a62-4391-b13e-bb6752902b29',
  },
  {
    title: 'Ds C06082a',
    imageBeforeId: 'aa443b6d-a555-41ee-9c71-2cf7c8a462a6',
    imageAfterId: 'ac97870e-e9a3-4af9-a28c-022305aa8575',
  },
  {
    title: 'Img 1758',
    imageBeforeId: '81b857cb-fbaf-4ce1-8c5d-cab1a5e00d07',
    imageAfterId: 'e5b09b30-0603-49a5-84e0-f81ba29a3a9d',
  },
]

const contentKitchen = [
  {
    title: '4 Z7 A2785a',
    imageBeforeId: 'bc50b9b2-5c74-4b6e-a2dc-3fc20c5280ac',
    imageAfterId: 'f6b4cb52-fc9b-442a-a34b-35fd7abbbcb2',
  },
  {
    title: '4 Z7 A2933a',
    imageBeforeId: '0d722478-3189-487a-a863-23949a12ae91',
    imageAfterId: '16ec6358-4855-46ea-ae31-e59d40cb6da9',
  },
  {
    title: '10a',
    imageBeforeId: 'b8606df3-c3e1-4fd3-9235-42600c2703a8',
    imageAfterId: '203a06d9-c201-477a-85ac-03bb4167efda',
  },
  {
    title: 'Dining Area   Living Room Two 02188a',
    imageBeforeId: 'fddc77ec-1899-4d30-bf44-10b94aec79ab',
    imageAfterId: '465be307-3fa2-4f57-acb7-d02a0794b0c1',
  },
  {
    title: 'Dining Room 05604a',
    imageBeforeId: '5935d436-21bf-4430-9c67-76beaaf9f106',
    imageAfterId: 'c5fe1da6-217a-4212-8cff-2fc5d455e728',
  },
  {
    title: 'Ds C03300a',
    imageBeforeId: '8c024b99-4237-4ff1-9767-84651bb870c3',
    imageAfterId: 'c8eb4929-6fc3-4904-a177-31f30b257236',
  },
  {
    title: 'Ds C05814a',
    imageBeforeId: 'ebd5132a-3894-4291-b6ad-93f7cc865921',
    imageAfterId: '568abd07-3954-41d8-bc21-53385de70661',
  },
  {
    title: 'Print  209 Blackwolf Place N, Lethbridge 015a\n',
    imageBeforeId: '7a118620-4cae-40b0-8e6d-62e239e60105',
    imageAfterId: '0115160d-e5ef-4de0-b60f-10c874180228',
  },
]
const contentBedroom = [
  {
    title: '04a',
    imageBeforeId: '3a3d4b8c-1633-4b70-be55-d232f171f181',
    imageAfterId: '61595e16-01c5-4109-a61d-026fd5e56dca',
  },
  {
    title: '4 Z7 A2717a',
    imageBeforeId: '51812864-6bce-4ea1-bbda-686de7e01037',
    imageAfterId: '08b8da25-ca17-4817-a796-3adbd175efc6',
  },
  {
    title: '4 Z7 A2949a',
    imageBeforeId: 'f8a767aa-ebe8-4aeb-a374-400a87880936',
    imageAfterId: '95a85be9-add8-441a-8689-5924de4a55ea',
  },
  {
    title: '05a',
    imageBeforeId: 'a8880425-69a3-4069-945d-0dbac0553fbf',
    imageAfterId: '68e67dee-8df5-40c3-8a31-07de18512597',
  },
  {
    title: 'Bedroom Three 02155a',
    imageBeforeId: '5ed37d20-6625-45c4-a797-d59962afc57e',
    imageAfterId: 'd46eacfb-92cc-4f07-b13b-5e8e95f616e1',
  },
  {
    title: 'Bedroom Three 05628a',
    imageBeforeId: 'c482421a-5100-47f6-bcf6-5203cd32f6e8',
    imageAfterId: 'b518f21f-0be2-4280-8e0f-35d94df4514c',
  },
  {
    title: 'Bedroom Two 02137a',
    imageBeforeId: '0144f035-7aea-44e9-b8d1-c016463e4755',
    imageAfterId: '561f7bc7-9211-427e-85ec-7f602e2f073e',
  },
  {
    title: 'Master Bedroom 02194a',
    imageBeforeId: 'f72331c4-a5f1-4142-a927-f98e696399b8',
    imageAfterId: '748a9243-685a-4f70-a90d-866c7c837e64',
  },
  {
    title: ' 1 N C0004 1',
    imageBeforeId: 'e0a75c82-5e6a-4005-9fb9-021ce4cd0f51',
    imageAfterId: '4fcfbffe-2a6a-44e5-b1d6-97b5bd88dd28',
  },
]

const contentLivingRoom = [
  {
    title: ' 1 N C0314 1',
    imageBeforeId: 'a12ebb55-c05d-45b5-9920-dc9f2c6b868d',
    imageAfterId: '5a15d1ee-4622-4888-8051-fbec68526b13',
  },
  {
    title: ' Dj V8357 1',
    imageBeforeId: '60b955d0-0259-46f1-9f90-cb250a02657c',
    imageAfterId: 'c85a9f8c-88d0-43fe-b56f-cd4772f37e0a',
  },
  {
    title: '0 G6 A3331 1',
    imageBeforeId: '1d1dc151-bcb3-457e-af33-2bd825c95674',
    imageAfterId: '2d3100b0-2143-40cf-9a3b-7cf35c5f282f',
  },
  {
    title: 'A R700110 1',
    imageBeforeId: 'a34c5cad-e914-4aea-9151-0c3893a6cca1',
    imageAfterId: '6ee1fdd3-051c-4cd1-bafe-06d7cb50d82b',
  },
  {
    title: 'Aggie Ln Houx 5 1',
    imageBeforeId: '0432292e-357c-4e18-8799-f19c524d4910',
    imageAfterId: '5a67c6e7-52e7-489f-a029-d04f2866d147',
  },
  {
    title: 'Luxurious Empty Room With Door 1\n',
    imageBeforeId: 'f66edbcb-f02e-4491-978e-71e961595d6d',
    imageAfterId: '4a889cf6-3662-4222-ac61-a1cc927d903b',
  },
]
function SessionSlideVirtualStaging() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const renderImage = useMemo(() => {
    if (currentTabIndex === 0) {
      return contentLivingRoom
    }
    if (currentTabIndex === 1) {
      return contentBedroom
    }
    if (currentTabIndex === 2) {
      return contentKitchen
    }
    if (currentTabIndex === 3) {
      return contentOutdoors
    }
    return contentOffice
  }, [currentTabIndex])

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-2 lg:gap-10">
        {listTab?.map(({ title }, index) => (
          <button
            key={title}
            type="button"
            onClick={() => setCurrentTabIndex(index)}
            className={twMerge(
              'rounded-[9px] px-3 py-1 text-white font-semibold  text-theme-default lg:text-xl outline-none',
              currentTabIndex === index ? 'text-white bg-[#043263]' : 'text-[#043263]',
            )}
          >
            {title}
          </button>
        ))}
      </div>
      <div className="flex flex-row gap-2 lg:gap-6 items-center max-lg:relative">
        <div className="swiper-button-prev lg:!relative [&>svg]:hidden after:hidden">
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
          {renderImage.map((item) => (
            <SwiperSlide key={`${item.title}-items-post-2`}>
              <BeforeAfterImageSlide
                afterImageUrl={getImageUrl(item.imageBeforeId)}
                beforeImageUrl={getImageUrl(item.imageAfterId)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-button-next lg:!relative [&>svg]:hidden after:hidden">
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

export default SessionSlideVirtualStaging
