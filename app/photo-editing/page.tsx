import LayoutMain from '@/app/components/layout/main'
import SessionContact from '@/app/home/SessionContact'
import SessionOutBlogs from '@/app/home/SessionOutBlogs'
import ListServiceCard from '@/app/services/component/ListServiceCard'
import SessionSlideServiceCustomer from '@/app/services/component/SessionSlideServiceCustomer'
import WhatDoWeDo from '@/app/services/component/WhatDoWeDo'
import { Metadata } from 'next'
import React from 'react'
import BannerService from '../services/component/BannerService'
import { dataMockSessionUnderConsideration } from '../utils/ultils'
import SessionUnderConsiderationWithMockContent from '../components/SessionUnderConsiderationWithMockContent'

const services = [
  {
    id: 1,
    title: 'IMAGE ENHANCEMENT',
    link: '/image-enhancement',
    imageSrc: '/service/photo-editing.png',
    animationDelay: 0.1,
  },
  {
    id: 2,
    title: 'DAY TO DUSK',
    link: '/day-to-dusk',
    imageSrc: '/service/video-editing.png',
    animationDelay: 0.3,
  },
  {
    id: 3,
    title: 'ITEM REMOVAL',
    link: '/item-removal',
    imageSrc: '/service/viltual-staging-editing.png',
    animationDelay: 0.5,
  },
  {
    id: 4,
    title: '360-image-enhancement',
    link: '/360-image-enhancement',
    imageSrc: '/service/image-360/image-360-thumb.jpeg',
    animationDelay: 0.5,
  },
]

const ListImage = [
  {
    title: 'image-6',
    imageBefore: '/service/real-estate-photo-editing/fact-check/06/DSC05966.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/06/DSC05964.jpg',
  },
  {
    title: 'image-7',
    imageBefore: '/service/real-estate-photo-editing/fact-check/07/DSC05928.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/07/DSC05930.jpg',
  },
  {
    title: 'image-8',
    imageBefore: '/service/real-estate-photo-editing/fact-check/08/DSC05881.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/08/DSC05879.jpg',
  },
  {
    title: 'image-9',
    imageBefore: '/service/real-estate-photo-editing/fact-check/09/DJI_20240715102346_0070_D.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/09/DJI_20240715102346_0070_D_1.jpg',
  },
  {
    title: 'image-10',
    imageBefore: '/service/real-estate-photo-editing/fact-check/10/DJI_0041.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/10/DJI_0041_1.jpg',
  },
  {
    title: 'image-1',
    imageBefore: '/service/real-estate-photo-editing/fact-check/01/LFCO8942.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/01/LFCO8942_1.jpg',
  },
  {
    title: 'image-2',
    imageBefore: '/service/real-estate-photo-editing/fact-check/02/LFCO8922.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/02/LFCO8923.jpg',
  },
  {
    title: 'image-3',
    imageBefore: '/service/real-estate-photo-editing/fact-check/03/LFCO8887.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/03/LFCO8888.jpg',
  },
  {
    title: 'image-4',
    imageBefore: '/service/real-estate-photo-editing/fact-check/04/IMG_1711.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/04/IMG_1713.jpg',
  },
  {
    title: 'image-5',
    imageBefore: '/service/real-estate-photo-editing/fact-check/05/IMG_1695.jpg',
    imageAfter: '/service/real-estate-photo-editing/fact-check/05/IMG_1695_1.jpg',
  },
]

const title = 'Photo Editing Services for Real Estate | Fotober US'
const description =
  'Enhance your photos with Fotober US\' professional photo editing services. Perfect for real estate, products, or personal images that captivate and impress.'

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

function PhotoEditingPage() {
  return (
    <LayoutMain>
      <div className="w-full h-full bg-white text-[#1A1A1A] overflow-hidden mt-[-112px]">
        <BannerService
          title="Photo Editing"
          description="Elevate every shot into a show-stopping masterpiece."
        />
        <div className="py-7">
          <WhatDoWeDo
            title="PHOTO EDITING?"
            description1="Fotober’s Real Estate Photo Editing service transforms property images into visually
        striking masterpieces with expert techniques and attention to detail. From advanced color
        correction, sky replacement, and virtual twilight to object removal, HDR blending, and
        perspective adjustments, we ensure every photo highlights the property’s best features."
            description2="Whether for online listings, brochures, or high-end marketing campaigns, our high-quality edits captivate buyers, enhance visual appeal, and help properties stand out in a competitive market."
          />
        </div>
        <div className="py-7">
          <ListServiceCard services={services} />
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
export default PhotoEditingPage
