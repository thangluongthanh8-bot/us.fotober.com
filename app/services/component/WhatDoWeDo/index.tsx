import TitleH3 from '@/app/components/TitleH3'
import React from 'react'

function WhatDoWeDo({
  title,
  description1,
  description2,
}: {
  title: string
  description1?: string
  description2?: string
}) {
  return (
    <div className="container-custom m-auto px-4">
      <TitleH3 title="What do we do?" />
      <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
        {title}
      </h2>
      <p className="text-base text-justify text-[#000] max-w-[1000px] m-auto mt-1">
        {description1}
      </p>
      <p className="text-base text-justify text-[#000] max-w-[1000px] m-auto mt-1">
        {description2}
      </p>
    </div>
  )
}
export default WhatDoWeDo
