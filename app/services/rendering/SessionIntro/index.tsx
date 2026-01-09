'use client'

import YoutubeEmbed from '@/app/components/YoutubeEmbed'
import Link from 'next/link'
import React from 'react'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        Render
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              Elevate your property listings with our 360° Rendering service. Transform your
              panoramic shots into stunning, immersive experiences that captivate potential buyers.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Our expert team enhances lighting, sharpness, and color balance, ensuring every detail
              is crystal clear.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Make your listings stand out and offer buyers a virtual tour they'll remember!
            </p>
          </div>
          <Link href="/bulk-order" className="mt-4 ">
            <div className="max-md:uppercase max-md:text-white max-md:bg-[#043263] max-md:m-auto hover:bg-[#043263] hover:text-white text-[#043263] border-solid border-[1px] border-[#043263] py-1 cursor-pointer px-6 hover:[box-shadow:inset_-1px_0px_9px_4px_#0000001a] rounded-[12px] w-fit">
              <span className="text-[18px]">PLACE AN ORDER</span>
            </div>
          </Link>
        </div>
        <div className="content-right  w-full md:w-[50%]">
          <div className="w-full h-full 2xl:h-[385px] rounded-[12px] object-contain overflow-hidden">
            <YoutubeEmbed
              videoId="uypB0sIniCs"
              className="w-full max-md:h-[250px] md:h-full 2xl:h-[300px] rounded-tl-[12px] rounded-tr-[12px] object-cover"
              title="fotober"
              opts={{
                playerVars: {
                  autoplay: 0,
                  controls: 1,
                  modestbranding: 1,
                  rel: 0,
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
