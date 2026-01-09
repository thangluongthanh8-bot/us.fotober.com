import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import React from 'react'

const listContentBeforeAfter = [
  {
    title: 'Dusk Sky Replacement',
    before: '/service/day-to-dusk/list-step/01/1Dusk-Sky-Replacement-HT5A0176-scaled.jpg',
    after: '/service/day-to-dusk/list-step/01/1Dusk-Sky-ReplacementHT5A0177-scaled.jpg',
  },
  {
    title: 'Turn on Lighting',
    before: '/service/day-to-dusk/list-step/02/2Turn-on-LightingHT5A9976-scaled.jpg',
    after: '/service/day-to-dusk/list-step/02/2Turn-on-LightingHT5A9977-scaled.jpg',
  },
  {
    title: 'White Balancing',
    before: '/service/day-to-dusk/list-step/03/before-9-1-scaled.jpg',
    after: '/service/day-to-dusk/list-step/03/after-7-1-scaled.jpg',
  },
  {
    title: 'Image Sharpening',
    before: '/service/day-to-dusk/list-step/04/3Image-SharpeningHT5A0161-scaled.jpg',
    after: '/service/day-to-dusk/list-step/04/3Image-SharpeningHT5A0162-scaled.jpg',
  },
  {
    title: 'Vertical & Horizontal Straightening\n',
    before:
      '/service/day-to-dusk/list-step/05/4Vertcal-Horizontal-StraiggteningHT5A9980-scaled.jpg',
    after: '/service/day-to-dusk/list-step/05/4Vertcal-Horizontal-StraiggteningHT5A9981-scaled.jpg',
  },
  {
    title: 'Remove Minor Blemishes\n',
    before: '/service/day-to-dusk/list-step/06/before-2-2-scaled.jpg',
    after: '/service/day-to-dusk/list-step/06/after-2-1-1-scaled.jpg',
  },
  {
    title: 'Remove Pool Cleaners from Water',
    before: '/service/day-to-dusk/list-step/07/8Remove-Pool-Cleaners-from-Waterbefoe-scaled.jpeg',
    after: '/service/day-to-dusk/list-step/07/8Remove-Pool-Cleaners-from-Waterafter-scaled.jpg',
  },
  {
    title: 'Ocean/River Water Enhancement',
    before: '/service/day-to-dusk/list-step/08/7OceanRiver-Water-Enhancementbefore-scaled.jpg',
    after: '/service/day-to-dusk/list-step/08/7OceanRiver-Water-Enhancementafter-scaled.jpg',
  },
  {
    title: 'Lens Distortion Removal',
    before: '/service/day-to-dusk/list-step/09/6Lens-Distortion-RemovalHT5A9978-scaled.jpg',
    after: '/service/day-to-dusk/list-step/09/6Lens-Distortion-RemovalHT5A9979-scaled.jpg',
  },

  {
    title: 'Add Fire To The Furnace\n',
    before: '/service/day-to-dusk/list-step/10/10Add-fire-to-the-furnacebefore-scaled.jpg',
    after: '/service/day-to-dusk/list-step/10/10Add-fire-to-the-furnaceafter-scaled.jpg',
  },
]

function ListContentStep() {
  return listContentBeforeAfter.map((item, index) => (
    <div
      key={item.title}
      className="flex flex-row w-full md:w-[46%] items-center justify-between relative"
    >
      <div className="w-full flex flex-col gap-3">
        <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
          {index + 1}. {item.title}
        </h4>
        <BeforeAfterImageSlide afterImageUrl={item.before} beforeImageUrl={item.after} />
      </div>
      {index % 2 === 0 && (
        <div className="min-w-[2px] xl:min-w-[4px] absolute bg-black h-[60%] right-[-9%]" />
      )}
    </div>
  ))
}
export default ListContentStep
