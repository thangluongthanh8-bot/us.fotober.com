'use client'

import YoutubeEmbed from '@/app/components/YoutubeEmbed'
import Link from 'next/link'
import React from 'react'

function SessionIntroPage() {
  return (
    <>
      <h1 className="w-full  text-center md:text-left text-wrap uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        Personal Branding Video Editing
      </h1>
      <div className="w-full flex max-md:gap-8 flex-col md:flex-row mb-12">
        <div className="content-left text-left md:w-[50%]">
          <div className="text-xl mb-4 w-full md:w-[345px] lg:w-[450px] text-justify ">
            <p className="text-base lg:text-xl">
              Our Personal Branding Video Editing service is designed to help you craft compelling
              video content that showcases your unique qualities, skills, and personality, enhancing
              your personal brand and professional image.
            </p>
            <p className="text-base lg:text-xl pt-2">
              Whether you are an entrepreneur, influencer, or professional looking to stand out, our
              expert editors will transform your raw footage into polished, engaging videos that
              captivate your audience and leave a lasting impression.
            </p>
          </div>
          <Link href="/bulk-order" className="mt-4 ">
            <div className="max-md:uppercase max-md:text-white max-md:bg-[#043263] max-md:m-auto hover:bg-[#043263] hover:text-white text-[#043263] border-solid border-[1px] border-[#043263] py-1 cursor-pointer px-6 hover:[box-shadow:inset_-1px_0px_9px_4px_#0000001a] rounded-[12px] w-fit">
              <span className="text-[18px]">Take the ride with us!</span>
            </div>
          </Link>
        </div>
        <div className="content-right  w-full md:w-[50%]">
          <div className="w-full h-full 2xl:h-[385px] rounded-[12px] object-contain overflow-hidden">
            <YoutubeEmbed
              videoId="SbOCPY8NYyg"
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
