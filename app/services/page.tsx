import LayoutMain from '@/app/components/layout/main'
import SessionContact from '@/app/home/SessionContact'
import SessionOutBlogs from '@/app/home/SessionOutBlogs'
import SessionWhyChoose from '@/app/home/SessionWhyChoose'
import BannerService from '@/app/services/component/BannerService'
import ExperienceCounter from '@/app/services/component/ExperienceCounter'
import RealEstateServices from '@/app/services/component/RealEstateServices'
import SessionSlideServiceCustomer from '@/app/services/component/SessionSlideServiceCustomer'
import React from 'react'
import SessionUnderConsiderationWithMockContent from '../components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '../utils/ultils'

const ListImage = [
  {
    title: 'image-1',
    imageBefore: '/service/image-enhancement/fact-check/01/LFCO8942.jpg',
    imageAfter: '/service/image-enhancement/fact-check/01/LFCO8942_1.jpg',
  },
  {
    title: 'image-2',
    imageBefore: '/service/image-enhancement/fact-check/02/LFCO8922.jpg',
    imageAfter: '/service/image-enhancement/fact-check/02/LFCO8923.jpg',
  },
  {
    title: 'image-3',
    imageBefore: '/service/image-enhancement/fact-check/03/LFCO8887.jpg',
    imageAfter: '/service/image-enhancement/fact-check/03/LFCO8888.jpg',
  },
  {
    title: 'image-4',
    imageBefore: '/service/image-enhancement/fact-check/04/IMG_1711.jpg',
    imageAfter: '/service/image-enhancement/fact-check/04/IMG_1713.jpg',
  },
  {
    title: 'image-5',
    imageBefore: '/service/image-enhancement/fact-check/05/IMG_1695.jpg',
    imageAfter: '/service/image-enhancement/fact-check/05/IMG_1695_1.jpg',
  },
  {
    title: 'image-6',
    imageBefore: '/service/image-enhancement/fact-check/06/DSC05966.jpg',
    imageAfter: '/service/image-enhancement/fact-check/06/DSC05964.jpg',
  },
  {
    title: 'image-7',
    imageBefore: '/service/image-enhancement/fact-check/07/DSC05928.jpg',
    imageAfter: '/service/image-enhancement/fact-check/07/DSC05930.jpg',
  },
  {
    title: 'image-8',
    imageBefore: '/service/image-enhancement/fact-check/08/DSC05881.jpg',
    imageAfter: '/service/image-enhancement/fact-check/08/DSC05879.jpg',
  },
  {
    title: 'image-9',
    imageBefore: '/service/image-enhancement/fact-check/09/DJI_20240715102346_0070_D.jpg',
    imageAfter: '/service/image-enhancement/fact-check/09/DJI_20240715102346_0070_D_1.jpg',
  },
  {
    title: 'image-10',
    imageBefore: '/service/image-enhancement/fact-check/10/DJI_0041.jpg',
    imageAfter: '/service/image-enhancement/fact-check/10/DJI_0041_1.jpg',
  },
]

function ServicePage() {
  return (
    <LayoutMain>
      <div className="w-full h-full bg-white text-[#1A1A1A] overflow-hidden mt-[-112px]">
        <BannerService
          title="Explore Fotober's professional editing services"
          description="Fotober provides professional services for photographers and marketers, especially in
              the real estate sector. Our services include photo editing (image enhancement,
              day-to-dusk conversion, item removal, 360° image enhancement, etc.), video editing
              (real estate video editing, car videos, branding content, event recaps, etc.), and
              Architecture Planning & Virtual Services (virtual staging, virtual renovation, 2D-3D
              floor plans, rendering, etc.)."
        />
        <SessionWhyChoose />
        <div className="py-7">
          <RealEstateServices />
        </div>
        <div className="py-7">
          <ExperienceCounter />
        </div>
        <div className="py-7">
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 max-lg:pb-6 pt-6 text-center">
                WHAT OUR CUSTOMERS ARE RECEIVING…
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto lg:h-[600px] 2xl:h-[700px] overflow-hidden lg:-mt-6">
                <SessionSlideServiceCustomer ListImage={ListImage} />
              </div>
            </div>
          </div>
        </div>
        <div className="py-7">
          <SessionUnderConsiderationWithMockContent data= {dataMockSessionUnderConsideration} />
          
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
export default ServicePage
