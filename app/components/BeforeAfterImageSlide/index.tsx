'use client'

import ReactBeforeSliderComponent from 'react-before-after-slider-component'
import 'react-before-after-slider-component/dist/build.css'
import { twMerge } from 'tailwind-merge'

function BeforeAfterImageSlide({
  beforeImageUrl,
  afterImageUrl,
  customClassName,
  altBefore,
  altAfter,
}: {
  beforeImageUrl: string
  afterImageUrl: string
  customClassName?: string
  altBefore?: string
  altAfter?: string
}) {
  return (
    <div className={twMerge('w-full h-full relative overflow-hidden', customClassName)}>
      <div className="absolute z-20 py-2 px-1 top-[10px] left-[10px] bg-[#003366] rounded-[3px] w-[50px] text-center">
        <span className="text-white text-[14px]">Before</span>
      </div>
      <div className="absolute z-20 py-2 px-1 top-[10px] right-[10px] bg-[#003366] rounded-[3px] w-[50px] text-center">
        <span className="text-white text-[14px]">After</span>
      </div>
      <ReactBeforeSliderComponent
        firstImage={{
          imageUrl: beforeImageUrl,
          alt: altBefore || 'Fotober US',
        }}
        secondImage={{
          imageUrl: afterImageUrl,
          alt: altAfter || 'Fotober US',
        }}
        className="before-after-slider w-full h-full object-contain"
        delimiterIconStyles={{
          width: '45px',
          height: '45px',
        }}
        withResizeFeel
      />
    </div>
  )
}

export default BeforeAfterImageSlide
