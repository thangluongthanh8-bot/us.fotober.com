'use client'

import Image from 'next/image'
import React from 'react'

const listContentVideo = [
  {
    title: 'Professional Color Grading\n',
    videoUrl: '/service/video-editing/list-step/01/1.-Professional-Color-Grading.mp4',
  },
  {
    title: 'Contrast and Brightness Adjustment',
    videoUrl: '/service/video-editing/list-step/02/2.Contrast-and-Brightness-adjustment.mp4',
  },
  {
    title: 'Advanced Title Animation\n',
    videoUrl: '/service/video-editing/list-step/03/3-Advanced-Text-Animation.mp4',
  },
  {
    title: 'Denoise Footage\n',
    videoUrl: '/service/video-editing/list-step/04/denoise.mp4',
  },
  {
    title: 'High Quality Music\n',
    imageUrl: '/service/video-editing/list-step/05/5-High-quality-music.jpg',
  },
  {
    title: 'Professional Graphic (GG Earth, Border Line,...)\n',
    videoUrl: '/service/video-editing/list-step/06/6-Professional-Graphic.mp4',
  },
  {
    title: 'Stabilize Footage\n',
    videoUrl: '/service/video-editing/list-step/07/7-Stabilize.mp4',
  },
  {
    title: 'Real Estate Agent Branding\n',
    videoUrl: '/service/video-editing/list-step/08/8-Real-Estate-Agent-Branding-2.mp4',
  },
  {
    title: 'Watermark Branding\n',
    videoUrl: '/service/video-editing/list-step/09/9-Watermark-branding.mp4',
  },
  {
    title: 'Delivery of Branded and Unbranded MLS Compliant Video',
    videoUrl:
      '/service/video-editing/list-step/10/11-Delivery-of-branded-and-unbranded-MLS-compliant-video.mp4',
  },
]

function SessionListVideo({ isHideStep }: { isHideStep?: boolean }) {
  let indexStep = 0
  return listContentVideo.map((item, index) => {
    if (isHideStep && (index + 1 === 5 || index + 1 === 10)) return null
    indexStep += 1
    return (
      <div
        key={item.title}
        className="flex flex-row w-full md:w-[46%] items-center justify-between relative"
      >
        <div className="w-full flex flex-col gap-3">
          <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
            {indexStep}. {item.title}
          </h4>
          {item.videoUrl ? (
            <video controls autoPlay playsInline preload="none" loop muted>
              <source src={item.videoUrl} type="video/mp4" />
            </video>
          ) : (
            <>
              {item.imageUrl && (
                <Image
                  alt="Fotober US"
                  width={400}
                  height={400}
                  className="w-full"
                  src={item.imageUrl}
                />
              )}
            </>
          )}
        </div>
        {index % 2 === 0 && (
          <div className="min-w-[2px] xl:min-w-[4px] absolute bg-black h-[60%] right-[-9%]" />
        )}
      </div>
    )
  })
}

export default SessionListVideo
