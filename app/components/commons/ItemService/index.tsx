'use client'

import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import YoutubeEmbed from '@/app/components/YoutubeEmbed'
// import { getImageUrl } from '@/app/utils/ultils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer'
import { getImageUrl } from '@/app/utils/ultils'
function ItemService({
  title,
  description,
  link,
  imageBefore,
  imageAfter,
  imageThumbId,
  videoThumbId,
  PhotoSphereUrl,
}: {
  title: string
  description: string
  link: string
  imageBefore?: string | null
  imageAfter?: string | null
  imageThumbId?: string | null
  videoThumbId?: string | null
  PhotoSphereUrl?: string | null
}) {
  return (
    <div className="card w-full p-1 group md:w-[47%] cursor-pointer lg:w-[31%] overflow-hidden mb-2 md:mb-6  itemBox  rounded-[18px]   border-solid border-[1px] [boxShadow:_0px_0px_24px_0px_#00000059] min-h-[354px] flex flex-col justify-around duration-500">
      {imageAfter && imageBefore && (
        <div className="w-[100%] h-3/5 rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
          <BeforeAfterImageSlide
            afterImageUrl={getImageUrl(imageAfter)}
            beforeImageUrl={getImageUrl(imageBefore)}
          />
        </div>
      )}
      {imageThumbId && (
        <Image
          alt="fotober"
          width={350}
          height={350}
          src={getImageUrl(imageThumbId)}
          className="w-full h-3/5 object-cover rounded-tl-[12px] rounded-tr-[12px] overflow-hidden"
        />
      )}
      {PhotoSphereUrl && (
        <div className="w-full h-[250px] md:h-3/5 rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
          <ReactPhotoSphereViewer src={PhotoSphereUrl} height="100%" width="100%" />
        </div>
      )}
      {videoThumbId && (
        <div className="w-full h-[250px] md:h-3/5 overflow-hidden">
          <YoutubeEmbed
            videoId={videoThumbId}
            className="w-full h-full rounded-tl-[12px] rounded-tr-[12px] object-cover  overflow-hidden"
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
      )}

      <p className="text-[#043263] text-theme-default lg:text-base xl:text-lg font-bold mt-3 text-center">
        {title}
      </p>
      <p
        className="text-[#043263] text-base [-webkit-box-orient:vertical] [display:-webkit-inline-box]  mt-2 text-center  px-5 w-full overflow-hidden [-webkit-line-clamp:2]"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
       <div className='w-full flex justify-end  pb-3 pr-2'>
        
      <Link
        href={link?'#':'/contact-us'}
        className={twMerge(
          'text-lg group-hover:underline text-[#043263] 2xl:mt-3 px-5 cursor-pointer btn-bg-primary rounded-2xl ',
        )}
      >
         {/* 'text-base block w-full text-center md:text-right group-hover:underline text-[#043263] my-3 px-5 cursor-pointer btn-bg-primary rounded-2xl', */}
        View service
      </Link>
       </div>
    </div>
  )
}

export default ItemService
