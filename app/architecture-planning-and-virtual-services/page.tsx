import LayoutMain from '@/app/components/layout/main'
import SessionContact from '@/app/home/SessionContact'
import SessionOutBlogs from '@/app/home/SessionOutBlogs'
import BannerService from '@/app/services/component/BannerService'
import ListServiceCard from '@/app/services/component/ListServiceCard'
import WhatDoWeDo from '@/app/services/component/WhatDoWeDo'
import SessionSlideVirtualStaging from '@/app/services/virtual-staging/SessionSlideVirtualStaging'
import { Metadata } from 'next'
import React from 'react'
import SessionUnderConsiderationWithMockContent from '../components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '../utils/ultils'

const services = [
  {
    id: 1,
    title: 'Virtual Staging',
    link: '/virtual-staging',
    imageSrc: '/service/architecture-planning-and-virtual-services/architecture-1.jpg',
    animationDelay: 0.1,
  },
  {
    id: 2,
    title: 'VIRTUAL RENOVATION',
    link: '/virtual-renovation',
    imageSrc: '/service/architecture-planning-and-virtual-services/architecture-2.jpg',
    animationDelay: 0.3,
  },
  {
    id: 3,
    title: '2D - 3D Floor plan',
    link: '/floor-plan-redraw',
    imageSrc: '/service/architecture-planning-and-virtual-services/architecture-3.jpg',
    animationDelay: 0.5,
  },
  {
    id: 4,
    title: 'Rendering',
    link: '/rendering',
    imageSrc: '/service/architecture-planning-and-virtual-services/architecture-4.jpg',
    animationDelay: 0.5,
  },
]
const title = 'Architecture Planning & Virtual Services | Fotober US'
const description =
  'Transform your architectural projects with Fotober. Expert virtual planning, 3D modeling, and design visualization to bring your ideas to life.'

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

function ArchitecturePlanningAndVirtualServices() {
  return (
    <LayoutMain>
      <div className="w-full h-full bg-white text-[#1A1A1A] overflow-hidden mt-[-112px]">
        <BannerService
          title="ARCHITECTURE PLANNING & VIRTUAL SERVICE"
          description="Turn architectural visions into immersive realities."
        />
        <div className="py-7">
          <WhatDoWeDo
            title="ARCHITECTURE PLANNING AND VIRTUAL SERVICES"
            description1="Fotober’s Architecture Planning & Virtual Service brings your designs to life with precision, creativity, and cutting-edge technology. Whether you need detailed 2D and 3D floor plans, immersive virtual staging, realistic rendering, or architectural visualization, our experts craft lifelike visuals that enhance property marketing and design presentations, making projects more engaging and market-ready."
            description2="At Fotober - we create compelling, interactive experiences that inspire clients, streamline decision-making, and turn ideas into reality."
          />
        </div>
        <div className="py-7">
          <ListServiceCard services={services} />
        </div>
        <div className="py-7">
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 py-4 md:py-6 text-center">
                WHAT OUR CUSTOMERS ARE RECEIVING…
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
                <SessionSlideVirtualStaging />
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
export default ArchitecturePlanningAndVirtualServices
