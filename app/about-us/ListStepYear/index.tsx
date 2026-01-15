'use client'

import ZoomImageWrapper from '@/app/components/commons/ZoomImage'
import Image, { StaticImageData } from 'next/image'
import React from 'react'
import imageYear2016 from '../assets/list-image-year/2016.jpg'
import imageYear2018 from '../assets/list-image-year/2018.jpg'
import imageYear2020 from '../assets/list-image-year/2020.jpg'
import imageYear2022 from '../assets/list-image-year/2022.jpg'
import imageYear2024 from '../assets/list-image-year/2024.jpg'
import iconAbout1 from '../assets/step-about-us/about-1.svg'
import iconAbout2 from '../assets/step-about-us/about-2.svg'
import iconAbout3 from '../assets/step-about-us/about-3.svg'
import iconAbout4 from '../assets/step-about-us/about-4.svg'

const InfoYear = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="flex flex-col item h-[275px] justify-center">
      <div className="w-full text-wrap text-center  mb-3 uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[24px] ">
        {title}
      </div>
      <p className="text-[#000] text-lg text-justify">{description}</p>
    </div>
  )
}
const InfoImage = ({ imageData }: { imageData: StaticImageData }) => {
  return (
    <div className="flex h-[275px] flex-col item">
      <div className="w-full card-image rounded-[24px]">
        <ZoomImageWrapper src={imageData}>
          <Image
            alt="Fotober US"
            src={imageData}
            className="w-full h-[275px] object-cover rounded-[24px]"
          />
        </ZoomImageWrapper>
      </div>
    </div>
  )
}

function ListStepYear() {
  return (
    <div className="max-w-[1000px] m-auto px-4">
      <div className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        OUR HISTORY
      </div>
      <div className="hidden lg:flex flex-row gap-10 px-[4%] pt-8">
        <div className="flex flex-col gap-12 w-[45%]">
          <InfoYear
            title="2016"
            description=" Founded in Hanoi, Vietnam by five image editing experts, Fotober begins offering basic
              editing services to 50 clients per month."
          />
          <InfoImage imageData={imageYear2018} />
          <InfoYear
            title="2020"
            description="Fotober shifts focus to comprehensive 360 image enhancement and video editing."
          />
          <InfoImage imageData={imageYear2022} />
          <InfoYear
            title="2024"
            description="Workforce grows to 150 employees as Fotober expands services into new markets and
              incorporates AI-powered tools for increased efficiency."
          />
        </div>
        <div className="hidden md:flex relative min-w-[64px] w-[64px] flex-col">
          <Image alt="Fotober US" src={iconAbout1} className="w-[64px]" />
          <div className="flex flex-col justify-center items-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => {
              const keyMap = `${i}line-1`
              return <div key={keyMap} className="h-[7px] bg-[#043263] w-[3px]" />
            })}
          </div>
          <Image alt="Fotober US" src={iconAbout2} className="w-[64px]" />
          <div className="flex flex-col justify-center items-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => {
              const keyMap = `${i}line-2`
              return <div key={keyMap} className="h-[7px] bg-[#043263] w-[3px]" />
            })}
          </div>
          <Image alt="Fotober US" src={iconAbout3} className="w-[64px]" />
          <div className="flex flex-col justify-center items-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => {
              const keyMap = `${i}line-3`
              return <div key={keyMap} className="h-[7px] bg-[#043263] w-[3px]" />
            })}
          </div>
          <Image alt="Fotober US" src={iconAbout4} className="w-[64px]" />
          <div className="flex flex-col justify-center items-center gap-1">
            {Array.from({ length: 24 }).map((_, i) => {
              const keyMap = `${i}line-4`
              return <div key={keyMap} className="h-[7px] bg-[#043263] w-[3px]" />
            })}
          </div>
          <Image alt="Fotober US" src={iconAbout2} className="w-[64px]" />
          <div className="flex flex-col justify-center items-center gap-1">
            {Array.from({ length: 20 }).map((_, i) => {
              const keyMap = `${i}line-5`
              return <div key={keyMap} className="h-[7px] bg-[#043263] w-[3px]" />
            })}
          </div>
        </div>
        <div className="flex flex-col gap-12 w-[45%]">
          <InfoImage imageData={imageYear2016} />
          <InfoYear
            title="2018"
            description="Team expands to 30 members to meet growing demand for services like virtual staging
              and day-to-dusk editing."
          />
          <InfoImage imageData={imageYear2020} />
          <InfoYear
            title="2022"
            description="With over 100 staff, Fotober serves 10,000 clients worldwide annually, solidifying its
              position in the market."
          />
          <InfoImage imageData={imageYear2024} />
        </div>
      </div>

      {/* mobile */}
      <div className="flex lg:hidden flex-col gap-3">
        <div className="flex flex-col">
          <div className="flex flex-col item pt-5 pb-8">
            <div className="w-full text-wrap text-center  mb-3 uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[24px] ">
              2016
            </div>
            <p className="text-[#000] text-lg text-justify">
              Founded in Hanoi, Vietnam by five image editing experts, Fotober begins offering basic
              editing services to 50 clients per month.
            </p>
            <div className="w-full mt-2 h-auto card-image rounded-[24px]">
              <ZoomImageWrapper src={imageYear2016}>
                <Image
                  alt="Fotober US"
                  src={imageYear2016}
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </ZoomImageWrapper>
            </div>
          </div>
          <div className="flex flex-col item pb-8">
            <div className="w-full text-wrap text-center mb-3 uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[24px] ">
              2018
            </div>
            <p className="text-[#000] text-lg text-justify">
              Team expands to 30 members to meet growing demand for services like virtual staging
              and day-to-dusk editing.
            </p>
            <div className="w-full mt-2 h-auto card-image rounded-[24px]">
              <ZoomImageWrapper src={imageYear2018}>
                <Image
                  alt="Fotober US"
                  src={imageYear2018}
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </ZoomImageWrapper>
            </div>
          </div>
          <div className="flex flex-col item pb-8">
            <div className="w-full text-wrap text-center mb-3 uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[24px] ">
              2020
            </div>
            <p className="text-[#000] text-lg text-justify">
              Fotober shifts focus to comprehensive 360 image enhancement and video editing.
            </p>
            <div className="w-full mt-2 h-auto card-image rounded-[24px]">
              <ZoomImageWrapper src={imageYear2020}>
                <Image
                  alt="Fotober US"
                  src={imageYear2020}
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </ZoomImageWrapper>
            </div>
          </div>
          <div className="flex flex-col item pb-8">
            <div className="w-full text-wrap text-center mb-3 uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[24px] ">
              2022
            </div>
            <p className="text-[#000] text-lg text-justify">
              With over 100 staff, Fotober serves 10,000 clients worldwide annually, solidifying its
              position in the market.
            </p>
            <div className="w-full mt-2 h-auto card-image rounded-[24px]">
              <ZoomImageWrapper src={imageYear2022}>
                <Image
                  alt="Fotober US"
                  src={imageYear2022}
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </ZoomImageWrapper>
            </div>
          </div>
          <div className="flex flex-col item pb-8">
            <div className="w-full text-wrap text-center  mb-3 uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[24px] ">
              2024
            </div>
            <p className="text-[#000] text-lg text-justify">
              Workforce grows to 150 employees as Fotober expands services into new markets and
              incorporates AI-powered tools for increased efficiency.
            </p>
            <div className="w-full mt-2 h-auto card-image rounded-[24px]">
              <ZoomImageWrapper src={imageYear2022}>
                <Image
                  alt="Fotober US"
                  src={imageYear2022}
                  className="w-full h-full object-contain rounded-[24px]"
                />
              </ZoomImageWrapper>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListStepYear
