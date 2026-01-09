'use client'

import Link from 'next/link'
import React from 'react'
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'


function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        360° Image Enhancement
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              Using the best images from your listing to give the audience a tour of your home.
              Research has shown users spend 52% more time on listings that feature a virtual tour.
              This speeds up property sale by 50%.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Image enhancement services eliminate all errors.
            </p>
          </div>
          <Link href="/bulk-order" className="mt-4 ">
            <div className="max-md:uppercase max-md:text-white max-md:bg-[#043263] max-md:m-auto hover:bg-[#043263] hover:text-white text-[#043263] border-solid border-[1px] border-[#043263] py-1 cursor-pointer px-6 hover:[box-shadow:inset_-1px_0px_9px_4px_#0000001a] rounded-[12px] w-fit">
              <span className="text-[18px]">PLACE AN ORDER</span>
            </div>
          </Link>
        </div>
        <div className="content-right max-md:h-[350px] w-full md:w-[50%]">
          <div className="w-full h-full 2xl:h-[385px] rounded-[12px] object-contain overflow-hidden">
            <ReactPhotoSphereViewer
              src="/service/image-360/fact-check/R0020071_HDR_Panorama_pano_pano.jpg"
              height="100%"
              width="100%"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default SessionIntroPage
