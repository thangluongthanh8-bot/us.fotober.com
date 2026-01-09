'use client'

import Image, { StaticImageData } from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'

function ServiceStepDescription({
  imageIcon,
  title,
  description,
  customCssTitle,
  wrapClassName,
}: {
  imageIcon: StaticImageData
  title: string
  description: string
  customCssTitle?: string
  wrapClassName?: string
}) {
  const [indexHover, setIndexHover] = React.useState<boolean>(false)

  return (
    <div
      onMouseEnter={() => setIndexHover(true)}
      onMouseLeave={() => setIndexHover(false)}
      className={twMerge(
        'flex max-md:flex-row flex-col text-center justify-start max-md:gap-8 gap-4 items-center max-md:w-full max-xl:w-[40%] min-w-[210px]',
        wrapClassName,
      )}
    >
      <div
        className={twMerge(
          'animate__animated  animate__infinite w-[45px] min-w-[45px] h-[65px] flex flex-row items-center',
          indexHover ? 'animate__swing' : '',
        )}
      >
        <Image alt="fotober" src={imageIcon} className="h-[45px] object-contain" />
      </div>
      <div className="flex flex-col justify-center items-start md:items-center">
        <div className={twMerge('md:h-[60px] flex flex-row items-start', customCssTitle)}>
          <span className="text-[#043263] max-md:mb-1 md:whitespace-pre-line font-bold text-[18px]">
            {title}
          </span>
        </div>
        <div className="text-left md:text-justify md:text-align-last-center">
          <span className="whitespace-pre-line text-base md:text-[15px] text-[#000]">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ServiceStepDescription
