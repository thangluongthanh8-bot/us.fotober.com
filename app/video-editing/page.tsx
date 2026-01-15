import SessionFactCheckVideo from '@/app/services/car-video-editing/SessionFactCheck'
import LayoutMain from '@/app/components/layout/main'
import SessionContact from '@/app/home/SessionContact'
import SessionOutBlogs from '@/app/home/SessionOutBlogs'
import BannerService from '@/app/services/component/BannerService'
import ListServiceCard from '@/app/services/component/ListServiceCard'
import WhatDoWeDo from '@/app/services/component/WhatDoWeDo'
import { Metadata } from 'next'
import React from 'react'
import SessionUnderConsiderationWithMockContent from '../components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '../utils/ultils'

const title = 'Video Editing Services for Real Estate | Fotober US'
const description =
  "Transform your footage with Fotober US' professional video editing services. Perfect for real estate, cars, events, and personal branding videos."

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://www.fotober.com',
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

const services = [
  {
    id: 1,
    title: 'REAL ESTATE \nVIDEO EDITING',
    link: '/video-editing',
    imageSrc: '/service/video-editing/list-service-child/video-1.jpg',
    animationDelay: 0.1,
  },
  {
    id: 2,
    title: 'CAR VIDEO EDITING',
    link: '/car-video-editing',
    imageSrc: '/service/video-editing/list-service-child/video-2.jpg',
    animationDelay: 0.3,
  },
  {
    id: 3,
    title: 'PERSONAL BRANDING \nVIDEO EDITING',
    link: '/personal-branding',
    imageSrc: '/service/video-editing/list-service-child/video-3.jpg',
    animationDelay: 0.5,
  },
  {
    id: 4,
    title: 'EVENT RECAP',
    link: '/event-recap',
    imageSrc: '/service/video-editing/list-service-child/video-4.jpg',
    animationDelay: 0.5,
  },
]

function VideoEditingPage() {
  return (
    <LayoutMain>
      <div className="w-full h-full bg-white text-[#1A1A1A] overflow-hidden mt-[-112px]">
        <BannerService
          title="VIDEO EDITING"
          description="Transform raw footage into captivating stories."
        />
        <div className="py-7">
          <WhatDoWeDo
            title="VIDEO EDITING?"
            description1="Looking to transform your raw footage into stunning, high-impact videos? Fotober’s Video Editing Service brings your vision to life with expert editing. Whether you need real estate showcases, car commercials or personal branding video, our team enhances every frame with precise color grading, cinematic transitions, motion tracking, and seamless audio synchronization."
            description2="At Fotober - We don’t just edit - we transform raw footage into captivating stories that connect with your audience, making your brand stand out in a crowded digital world."
          />
        </div>
        <div className="py-7">
          <ListServiceCard services={services} />
        </div>
        <div className="py-7">
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 max-lg:pb-6 pt-6 text-center mb-4">
                WHAT OUR CUSTOMERS ARE RECEIVING…
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
                <SessionFactCheckVideo videoId="5rVNUNAqGM4" />
              </div>
            </div>
          </div>
        </div>
        <div className="py-7">
          <SessionUnderConsiderationWithMockContent data={dataMockSessionUnderConsideration} />
        </div>
        <div className="py-7">
          <SessionOutBlogs />
        </div>
        <div id="bulk-order-form" className="pb-7">
          <SessionContact />
        </div>
      </div>
    </LayoutMain>
  )
}
export default VideoEditingPage
