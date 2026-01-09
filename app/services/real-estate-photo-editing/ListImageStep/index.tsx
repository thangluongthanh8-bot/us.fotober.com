import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import React from 'react'

const listContentBeforeAfter = [
  {
    title: 'White Balancing',
    before: '/service/real-estate-photo-editing/list-step/01/before-scaled.jpg',
    after: '/service/real-estate-photo-editing/list-step/01/after-1-scaled.jpg',
    altBefore: 'Before white balancing in real estate photo editing',
    altAfter: 'After white balancing in real estate photo editing',
  },
  {
    title: 'Image Sharpening',
    before: '/service/real-estate-photo-editing/list-step/02/before-1-scaled.jpg',
    after: '/service/real-estate-photo-editing/list-step/02/after-2-scaled.jpg',
    altBefore: 'Before image sharpening in real estate photo editing',
    altAfter: 'After image sharpening in real estate photo editing',
  },
  {
    title: 'Vertical and Horizontal Straightening',
    before:
      '/service/real-estate-photo-editing/list-step/03/3Vertical-Horizontal-Straightening-before-scaled.jpeg',
    after:
      '/service/real-estate-photo-editing/list-step/03/3Vertical-Horizontal-Straightening-after-scaled.jpg',
    altBefore: 'Before vertical and horizontal straightening in real estate photo editing',
    altAfter: 'After vertical and horizontal straightening in real estate photo editing',
  },
  {
    title: 'Remove Minor Blemish',
    before: '/service/real-estate-photo-editing/list-step/04/4Remove-Minor-Blemishes-before.jpg',
    after: '/service/real-estate-photo-editing/list-step/04/4Remove-Minor-Blemishes-after.jpg',
    altBefore: 'Before removing minor blemishes in real estate photo editing',
    altAfter: 'After removing minor blemishes in real estate photo editing',
  },
  {
    title: 'Lens Distortion Removal',
    before:
      '/service/real-estate-photo-editing/list-step/05/5Lens-Distortion-Removal-before-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/05/5Lens-Distortion-Removal-after-scaled.jpg',
    altBefore: 'Before lens distortion removal in real estate photo editing',
    altAfter: 'After lens distortion removal in real estate photo editing',
  },
  {
    title: 'Brightness & Contrast Adjustment',
    before:
      '/service/real-estate-photo-editing/list-step/06/6Brightness-Contrast-Adjustmentbefore-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/06/6Brightness-Contrast-Adjustmentafter-scaled.jpg',
    altBefore: 'Before brightness and contrast adjustment in real estate photo editing',
    altAfter: 'After brightness and contrast adjustment in real estate photo editing',
  },
  {
    title: 'Outdoor Sky Replacement',
    before: '/service/real-estate-photo-editing/list-step/07/before-2-1-scaled.jpg',
    after: '/service/real-estate-photo-editing/list-step/07/7Sky-Replacement-after-scaled.jpg',
    altBefore: 'Before outdoor sky replacement in real estate photo editing',
    altAfter: 'After outdoor sky replacement in real estate photo editing',
  },
  {
    title: 'Lawn Enhancement – Repair or Replace',
    before:
      '/service/real-estate-photo-editing/list-step/08/8Lawn-Enhancement-Repair-or-Replacebefore-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/08/8Lawn-Enhancement-Repair-or-Replaceafter-scaled.jpg',
    altBefore: 'Before lawn enhancement in real estate photo editing',
    altAfter: 'After lawn enhancement in real estate photo editing',
  },
  {
    title: 'Oceanriver Water Enhancement',
    before:
      '/service/real-estate-photo-editing/list-step/09/9OceanRiver-Water-Enhancement-before-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/09/9OceanRiver-Water-Enhancement-after-scaled.jpg',
    altBefore: 'Before ocean or river water enhancement in real estate photo editing',
    altAfter: 'After ocean or river water enhancement in real estate photo editing',
  },
  {
    title: 'Remove Pool Cleaners from Water',
    before: '/service/real-estate-photo-editing/list-step/10/before-3-1-scaled.jpg',
    after: '/service/real-estate-photo-editing/list-step/10/after-3-1-scaled.jpg',
    altBefore: 'Before removing pool cleaners from water in real estate photo editing',
    altAfter: 'After removing pool cleaners from water in real estate photo editing',
  },
  {
    title: 'TV Screen Replacement',
    before:
      '/service/real-estate-photo-editing/list-step/11/11TV-Screen-Replacement-Before-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/11/11TV-Screen-Replacementafter-scaled.jpg',
    altBefore: 'Before TV screen replacement in real estate photo editing',
    altAfter: 'After TV screen replacement in real estate photo editing',
  },
  {
    title: 'Remove Cables',
    before: '/service/real-estate-photo-editing/list-step/12/11remove-cables-before-scaled.jpg',
    after: '/service/real-estate-photo-editing/list-step/12/11remove-cables-after-scaled.jpg',
    altBefore: 'Before cable removal in real estate photo editing',
    altAfter: 'After cable removal in real estate photo editing',
  },
  {
    title: 'Dust Spot Removal',
    before:
      '/service/real-estate-photo-editing/list-step/13/12Dust-Spot-Removal-DSC01708-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/13/12Dust-Spot-Removal-DSC017081-scaled.jpg',
    altBefore: 'Before dust spot removal in real estate photo editing',
    altAfter: 'After dust spot removal in real estate photo editing',
  },
  {
    title: 'Flash Reflection Removal',
    before: '/service/real-estate-photo-editing/list-step/14/before-4-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/14/13Flash-Reflection-Removal-DSC014031-scaled.jpg',
    altBefore: 'Before flash reflection removal in real estate photo editing',
    altAfter: 'After flash reflection removal in real estate photo editing',
  },
  {
    title: 'Add Fire to Fireplaces',
    before:
      '/service/real-estate-photo-editing/list-step/15/14Add-Fire-to-Fireplaces-DSC01458-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/15/14Add-Fire-to-Fireplaces-DSC014581-scaled.jpg',
    altBefore: 'Before adding fire to fireplaces in real estate photo editing',
    altAfter: 'After adding fire to fireplaces in real estate photo editing',
  },
  {
    title: 'HDR Bracketing with \n Indoor Window Replacement',
    before:
      '/service/real-estate-photo-editing/list-step/16/15HDR-Bracketing-with-Indoor-Window-Replacement-DSC_0085-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/16/15HDR-Bracketing-with-Indoor-Window-Replacement-DSC_00851-scaled.jpg',
    altBefore: 'Before HDR bracketing and indoor window replacement in real estate photo editing',
    altAfter: 'After HDR bracketing and indoor window replacement in real estate photo editing',
  },
  {
    title: 'Remove Photographer’s Reflection',
    before:
      '/service/real-estate-photo-editing/list-step/17/16Remove-Photographers-Reflection-DSCF2414-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/17/16Remove-Photographers-Reflection-DSCF24141-scaled.jpg',
    altBefore: 'Before removing photographer’s reflection in real estate photo editing',
    altAfter: 'After removing photographer’s reflection in real estate photo editing',
  },
  {
    title: 'Pool Water Color Increase',
    before:
      '/service/real-estate-photo-editing/list-step/18/17pool-water-color-increase-before-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/18/17pool-water-color-increase-after-scaled.jpg',
    altBefore: 'Before enhancing pool water color in real estate photo editing',
    altAfter: 'After enhancing pool water color in real estate photo editing',
  },
  {
    title: 'Remove Foreign Objects on Glass',
    before: '/service/real-estate-photo-editing/list-step/19/before-5-1-scaled.jpg',
    after:
      '/service/real-estate-photo-editing/list-step/19/19remove-foreign-objects-on-glass-after-scaled.jpg',
    altBefore: 'Before removing foreign objects from glass in real estate photo editing',
    altAfter: 'After removing foreign objects from glass in real estate photo editing',
  },
  {
    title: 'Turning Light',
    before: '/service/real-estate-photo-editing/list-step/20/20turn-light-before-scaled.jpg',
    after: '/service/real-estate-photo-editing/list-step/20/20turn-light-after-scaled.jpg',
    altBefore: 'Before turning on ceiling fan lights in real estate photo editing',
    altAfter: 'After turning on ceiling fan lights in real estate photo editing',
  },
]

function ListImageStep() {
  return listContentBeforeAfter.map((item, index) => (
    <div
      key={item.title}
      className="flex flex-row w-full md:w-[46%] items-center justify-between relative"
    >
      <div className="w-full flex flex-col gap-3">
        <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
          {index + 1}. {item.title}
        </h4>
        <BeforeAfterImageSlide
          altBefore={item.altBefore}
          altAfter={item.altAfter}
          afterImageUrl={item.before}
          beforeImageUrl={item.after}
        />
      </div>
      {index % 2 === 0 && (
        <div className="min-w-[2px] xl:min-w-[4px] absolute bg-black h-[60%] right-[-9%]" />
      )}
    </div>
  ))
}
export default ListImageStep
