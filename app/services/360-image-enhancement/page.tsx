import SessionSlide360 from '@/app/services/360-image-enhancement/SessionSlide360'
import iconEye from '@/app/assets/icons/eye.png'
import iconCheck from '@/app/assets/icons/icon-check.png'
import iconBright from '@/app/assets/icons/light-2.png'
import iconLight from '@/app/assets/icons/light.png'
import iconPen from '@/app/assets/icons/pen.png'
import iconStar from '@/app/assets/icons/star.png'
import BannerPage from '@/app/components/BannerPage'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import WrapListService from '@/app/components/WrapListService'

import type { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import bannerBg from './assets/360-bg.jpg'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconEye,
    title: 'Eye-Catching',
    description: 'Enhanced photos make your listings pop, grabbing attention instantly!',
  },
  {
    icon: iconBright,
    title: 'Bright and Cheery',
    description:
      'Turn gloomy rooms into bright, inviting spaces with a touch of digital sunshine.\n',
  },
  {
    icon: iconStar,
    title: 'Crystal Clear',
    description: 'Say goodbye to fuzzy photos and hello to razor-sharp, detailed images.',
  },
  {
    icon: iconPen,
    title: 'True Colors',
    description:
      'Show off your property’s true colors, making every room look vibrant and well-kept.\n',
  },
  {
    icon: iconLight,
    title: 'No More Glare',
    description:
      'Remove pesky reflections and glare, letting the beauty of the home shine through.\n',
  },
]

const dataFaq = [
  {
    title: 'What is 360° image enhancement?',
    description:
      '360° image enhancement involves improving the quality and visual appeal of 360-degree images through techniques like stitching, color correction, sharpening, noise reduction, retouching, HDR processing, and adding interactive effects.',
  },
  {
    title: 'Why should I enhance my 360° images?',
    description:
      'Enhancing your 360° images ensures they look professional and visually appealing, providing a more immersive and engaging experience for viewers. High-quality images can better showcase properties, events, or any environment in a compelling way.\n',
  },
  {
    title: 'What types of projects can benefit from 360° image enhancement?',
    description:
      '360° image enhancement is beneficial for various projects, including real estate virtual tours, event documentation, retail showcases, tourism promotions, and any other application where immersive, high-quality visuals are important.',
  },
  {
    title: 'How long does the enhancement process take?\n',
    description:
      'The time required for the enhancement process depends on the number and complexity of the images. We strive to deliver high-quality results promptly and will provide you with an estimated timeline based on your project’s specifics.',
  },
  {
    title: "What if I'm not satisfied with the enhanced images?",
    description:
      "Customer satisfaction is our top priority. If you're not satisfied with the enhanced images, we offer revisions to ensure they meet your expectations. Just let us know what changes you need, and we'll make the necessary adjustments.",
  },
]

const title = '360° Image Enhancement for Real Estate | Fotober'
const description =
  'Enhance real estate listings with Fotober’s 360° image enhancement. Brighten rooms, sharpen details, and showcase true colors to captivate buyers'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/360-image-enhancement`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

const listStep1 = [
  { title: 'White Balancing' },
  { title: 'Image Sharpening' },
  { title: 'Remove Minor Blemishes' },
  { title: 'Lens Distortion Removal' },
  { title: 'Brightness & Contrast Adjustment' },
  { title: 'Sky Replacement' },
  { title: 'Lawn Enhancement – Repair or Replace' },
  { title: 'Ocean/River Water Enhancement\n' },
]
const listStep2 = [
  { title: 'Remove Pool Cleaners from Water' },
  { title: 'Tone Adjustment' },
  { title: 'TV Screen Replacement' },
  { title: 'Dust Spot Removal' },
  { title: 'Flash Reflection Removal' },
  { title: 'Adding Fire to Fireplaces' },
  { title: 'Remove Tripod' },
  { title: 'HDR Bracketing with Indoor Window Replacement' },
]

function Image360EnhancementPage() {
  return (
    <LayoutMain>
      <div className="mt-[-112px]">
        <BannerPage
          title="360° Image Enhancement"
          textDescription="Create stunning, immersive panoramas that showcase your property from every angle."
          imageBg={bannerBg}
        />
      </div>
      <div className="site-content relative pt-[1rem] md:pt-[2rem]">
        <div className="container-custom m-auto px-4">
          <div className="mb-5">
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              360° Image Enhancement
            </h2>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              Welcome to Fotober’s 360° Enhancement service, where we turn standard 360° photos into
              stunning visual experiences. Our skilled team uses advanced editing techniques to
              seamlessly stitch together multiple images, creating a flawless 3D representation that
              showcases every detail with vibrant clarity. This service not only enhances the beauty
              of your space but also fosters an inviting atmosphere that draws in potential buyers.
              We brighten up dark or underexposed areas, enhance true colors, and ensure that fine
              details stand out, all while expertly removing any glare or distortion.
            </p>
          </div>
          <TitleH3 title="What are the benefits?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            Sell Faster with our Image Enhancement Magic
          </h2>
          <div
            data-test-id="list-description-service"
            className="justify-center flex flex-row max-xl:flex-wrap gap-6 mt-8 mb-8"
          >
            {listContentTop.map((item) => (
              <ServiceStepDescription
                key={item.title}
                description={item.description}
                title={item.title}
                wrapClassName="xl:w-[20%]"
                imageIcon={item.icon}
              />
            ))}
          </div>
          <TitleH3 title="What do we do?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            16 Steps to Enhance the Look of Your Property
          </h2>
          <div className="flex mt-8 md:w-[750px] m-auto flex-row w-full justify-between gap-4 md:gap-5 items-center flex-wrap">
            {Array.from({ length: 8 }).map((item, index) => (
              <div
                key={item?.toString()}
                className="flex flex-col max-md:gap-4 md:flex-row w-full justify-between"
              >
                <div className={twMerge('flex flex-row items-start gap-4')}>
                  <Image alt="fotober" src={iconCheck} className="w-[24px]" />
                  <p className="whitespace-pre-line font-[500] text-base text-[#000]">
                    {listStep1[index]?.title}
                  </p>
                </div>
                <div className={twMerge('flex flex-row items-start gap-4 md:w-[44%] lg:w-[43%]')}>
                  {listStep2[index]?.title ? (
                    <>
                      <Image alt="fotober" src={iconCheck} className="w-[24px]" />
                      <p className="whitespace-pre-line font-[500] text-base text-[#000]">
                        {listStep2[index]?.title}
                      </p>
                    </>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-center text-[#333333] text-2xl font-semibold my-6" />
        </div>
        <div className="w-full bg-[#E8E8E8]">
          <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
            <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 pb-6 pt-6 text-center">
              WHAT OUR CUSTOMERS ARE RECEIVING…
            </h2>
            <div className="w-full xl:w-[80%] mb-6 m-auto">
              <SessionSlide360 />
            </div>
          </div>
        </div>
        <div className="w-full bg-white mt-6">
          <WrapListService />
        </div>
        <div className="mt-6 mb-6 bg-[#E8E8E8]">
          <div className="container-custom m-auto px-4">
            <FaqSession title="FAQs about 360° Image Enhancement" data={dataFaq} />
          </div>
        </div>
        <div className=" pt-10 pb-10 bg-white">
          <div className="container-custom m-auto">
             <SessionUnderConsiderationWithMockContent  data={dataMockSessionUnderConsideration} />
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}

export default Image360EnhancementPage
