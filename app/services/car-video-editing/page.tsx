import iconLike from '@/app/assets/icons/like.png'
import SessionFactCheckVideo from '@/app/services/car-video-editing/SessionFactCheck'
import BannerPage from '@/app/components/BannerPage'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import WrapListService from '@/app/components/WrapListService'
import type { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import iconLight2 from '@/app/assets/icons/light-2.png'
import iconStar from '@/app/assets/icons/star.png'
import iconEye from '@/app/assets/icons/eye.png'
import iconLight from '@/app/assets/icons/light.png'
import iconCheck from '@/app/assets/icons/icon-check.png'
import { twMerge } from 'tailwind-merge'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconLike,
    title: 'Boost Engagement',
    description:
      'Slick, well-edited car videos grab attention, keeping buyers hooked and wanting more.',
  },
  {
    icon: iconLight2,
    title: 'Highlight Key \nFeatures',
    description:
      "Showcase your car's best assets, like a powerful engine or luxurious interior, ensuring they shine.",
  },
  {
    icon: iconStar,
    title: 'Create Emotional \n Connections',
    description:
      'Add cool background music and seamless transitions to help buyers feel the thrill of driving the car.',
  },
  {
    icon: iconEye,
    title: 'Professional \nAppeal',
    description:
      "High-quality, polished videos build trust and show you're serious about presenting the car well.",
  },
  {
    icon: iconLight,
    title: 'Rock Your \nSocial Media',
    description: 'Shareable car videos boost visibility and attract more potential buyers.',
  },
]

const listStep1 = [
  { title: 'Professional Color Grading' },
  { title: 'Contrast and Brightness Adjustment' },
  { title: 'Advanced Title Animation' },
  { title: 'Denoise Footage' },
  { title: 'High-Quality Music' },
  { title: 'Professional Graphics' },
]
const listStep2 = [
  { title: 'Stabilize Footage' },
  { title: 'Branding' },
  { title: 'Watermark Branding' },
  { title: 'Advanced Video Editing' },
  { title: 'Delivery of Branded and \n Unbranded MLS Compliant Video' },
]

const dataFaq = [
  {
    title: 'What is video editing in car listings?',
    description:
      'Video editing in car listings involves enhancing raw footage to create polished, professional videos that showcase vehicles in the best light. This includes adding music, transitions, graphics, and other effects to make the video more engaging and appealing to potential buyers.',
  },
  {
    title: 'Can I choose the music and style for my car videos?',
    description:
      'Absolutely! You can provide us with your preferred music tracks and style preferences. Our editors will incorporate your choices into the final video to ensure it aligns with your vision and brand.',
  },
  {
    title: 'Why is drone video editing beneficial for car listings?',
    description:
      'Drone video editing involves enhancing aerial footage to showcase vehicles from unique perspectives. It is beneficial because it provides a comprehensive view of the car and its surroundings, highlighting features and settings that might not be visible from ground level.',
  },
  {
    title: 'How do I get started with your video editing services?',
    description:
      'To get started, simply fill out the form with your video editing needs, provide the raw footage, and any specific instructions. Our team will guide you through the process and deliver high-quality, engaging car videos tailored to your requirements.\n',
  },
  {
    title: 'Do you offer custom graphics and animations for my videos?',
    description:
      'Absolutely! We can create custom graphics and animations tailored to your specific needs. This includes logos, icons, text overlays, and any other visual elements that can enhance your video and brand identity.\n',
  },
  {
    title: "What if I'm not satisfied with the final video?",
    description:
      "Customer satisfaction is our top priority. If you're not satisfied with the final video, we offer revisions to make sure it meets your expectations. Just let us know what changes you need, and we'll make the necessary adjustments.\n",
  },
]

const title = 'Car Video Editing Services to Impress and Inspire | Fotober'
const description =
  'Enhance your car videos with Fotober’s Car Video Editing service. Use dynamic shots, special effects, and professional sound design to make them stand out.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/car-video-editing`,
    images: '/thumb/image_thumb.png',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: '/thumb/image_thumb.png',
  },
}
function CarVideoEditingPage() {
  return (
    <LayoutMain>
      <div className="mt-[-112px]">
        <BannerPage
          videoUrl="/service/car-video-editing/video/sport-car.mp4"
          title="Car Video Editing"
          textDescription="Create sleek, high-quality videos that highlight your vehicle's best features and captivate potential buyers."
        />
      </div>
      <div className="site-content relative pt-[1rem] md:pt-[2rem]">
        <div className="container-custom m-auto px-4">
          <div className="mb-5">
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Car video editing
            </h2>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              At Fotober's Car Video Editing Services, we use advanced techniques like glow effects,
              logo transitions, speed ramp, saber lines, and logo spins to enhance the power, speed,
              and luxury of your vehicle.
            </p>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              Whether it's a sleek sports car, yacht, or cruise ship, we capture the essence of
              performance and elegance, creating captivating videos that showcase your vehicle in
              its most impressive light.
            </p>
          </div>
          <TitleH3 title="What are the benefits?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            Showcase Your Car in The Best Light
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
            11 Steps to Make a Spectacular Car Video
          </h2>
          <div className="flex mt-8 md:w-[750px] m-auto flex-row w-full justify-between gap-4 md:gap-5 items-center flex-wrap">
            {Array.from({ length: 6 }).map((item, index) => (
              <div
                key={item?.toString()}
                className="flex flex-col max-md:gap-4 md:flex-row w-full justify-between"
              >
                <div
                  className={twMerge(
                    'flex flex-row items-start gap-4',
                    index === 5 ? 'xl:-mt-6' : '',
                  )}
                >
                  <Image alt="fotober" src={iconCheck} className="w-[24px]" />
                  <p className="whitespace-pre-line font-[500] text-base text-[#000]">
                    {listStep1[index]?.title}
                  </p>
                </div>
                <div className={twMerge('flex flex-row items-start gap-4 md:w-[44%] lg:w-[42%]')}>
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
            <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 py-4 md:py-6 text-center">
              WHAT OUR CUSTOMERS ARE RECEIVING…
            </h2>
            <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
              <SessionFactCheckVideo videoId="v3YMKZ5-4_g" />
            </div>
          </div>
        </div>
        <div className="w-full bg-white mt-6">
          <WrapListService />
        </div>
        <div className="mt-6 mb-6 bg-[#E8E8E8]">
          <div className="container-custom m-auto px-4">
            <FaqSession title="FAQs about Car Video Editing" data={dataFaq} />
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

export default CarVideoEditingPage
