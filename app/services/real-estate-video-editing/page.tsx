import BannerPage from '@/app/components/BannerPage'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import SessionFactCheck from '@/app/services/real-estate-video-editing/SessionFactCheck'
import SessionListVideo from '@/app/services/real-estate-video-editing/SessionListVideo'
import type { Metadata } from 'next'
import React from 'react'
import iconLike from '@/app/assets/icons/like.png'
import iconLight2 from '@/app/assets/icons/light-2.png'
import iconStar from '@/app/assets/icons/star.png'
import iconEye from '@/app/assets/icons/eye.png'
import iconLight from '@/app/assets/icons/light.png'
import SessionServiceChild from '@/app/services/real-estate-video-editing/SessionServiceChild'
import WrapListService from '@/app/components/WrapListService'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'


const listContentTop = [
  {
    icon: iconLike,
    title: 'Boost Engagement',
    description:
      "Slick, well-edited real estate videos catch viewers' attention, keeping potential buyers hooked and wanting more.\n",
  },
  {
    icon: iconLight2,
    title: 'Highlight Key \nFeatures',
    description:
      "Show off your property's best assets, like a gorgeous kitchen or stunning backyard, ensuring they steal the show.",
  },
  {
    icon: iconStar,
    title: 'Create Emotional \nConnections',
    description:
      'Add cool background music and seamless transitions to help buyers feel at home and picture themselves living there.',
  },
  {
    icon: iconEye,
    title: 'Professional \nAppeal',
    description:
      'High-quality, polished videos scream professionalism, building trust with buyers and showing your property in the best light.',
  },
  {
    icon: iconLight,
    title: 'Rock Your \nSocial Media',
    description:
      'Fast-paced reels are super shareable, boosting your property’s visibility and attracting more potential buyers.',
  },
]

const dataFaq = [
  {
    title: 'What is video editing in real estate?',
    description:
      'Video editing in real estate involves enhancing raw footage to create polished, professional videos that showcase properties in the best light. This can include adding music, transitions, graphics, and other effects to make the video more engaging and appealing to potential buyers.',
  },
  {
    title: 'Can I choose the music and style for my real estate videos?\n',
    description:
      'Absolutely! You can provide us with your preferred music tracks and style preferences. Our editors will incorporate your choices into the final video to ensure it aligns with your vision and brand.',
  },
  {
    title: 'What is drone video editing, and why is it beneficial?\n',
    description:
      'Drone video editing involves enhancing aerial footage to showcase properties from unique perspectives. It is beneficial because it provides a comprehensive view of the property and its surroundings, highlighting features that might not be visible from ground level.',
  },
  {
    title: 'How do I get started with your video editing services?\n',
    description:
      'To get started, simply fill out the form with your video editing needs, provide the raw footage, and any specific instructions. Our team will guide you through the process and deliver high-quality, engaging real estate videos tailored to your requirements.',
  },
  {
    title: 'Do you offer custom graphics and animations for my videos?\n',
    description:
      'Absolutely! We can create custom graphics and animations tailored to your specific needs. This includes logos, icons, maps, and any other visual elements that can enhance your video and brand identity.',
  },
  {
    title: "What if I'm not satisfied with the final video?\n",
    description:
      "Customer satisfaction is our top priority. If you're not satisfied with the final video, we offer revisions to make sure it meets your expectations. Just let us know what changes you need, and we'll make the necessary adjustments.",
  },
]

const title = 'Real Estate Video Editing to Showcase Stunning Properties'
const description =
  'Elevate your real estate listings with Fotober US\' professional video editing, creating high-quality videos that leave a lasting impression on buyers.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/video-editing`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

function VideoEditingPage() {
  return (
    <>
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            videoUrl="/service/video-editing/video/walk.mp4"
            title="Real Estate Video Editing"
            textDescription="Craft perfect videos with in-the-moment emotions that still images can't capture."
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                Real Estate Video Editing
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                At Fotober US' Real Estate Video Editing Services, we turn raw footage into capturing
                property videos using techniques like advanced color correction for cinematic,
                natural, or modern tones, smooth transitions, and professional lighting adjustments.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Our team enhances key features with effects like motion tracking and stabilization,
                delivering visually stunning videos that elevate your property's appeal and engage
                potential buyers effectively.
              </p>
            </div>
            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Showcase Your Property in The Best Light
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
            <TitleH3 title="What do we offer?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Simple & Clean Way to Advertise Your Real Estate
            </h2>
            <SessionServiceChild />
            <TitleH3 title="What do we do?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              10 Steps to Make a Spectacular Real Estate Video
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-center mt-8 gap-10">
              <SessionListVideo />
            </div>
            <div className="w-full text-center text-[#333333] text-2xl font-semibold my-6" />
          </div>
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 py-4 md:py-6 text-center">
                WHAT OUR CUSTOMERS ARE RECEIVING…
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
                <SessionFactCheck />
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession title="FAQs about Video Editing" data={dataFaq} />
            </div>
          </div>
          <div className=" pt-10 pb-10 bg-white">
            <div className="container-custom m-auto">
              <SessionUnderConsiderationWithMockContent data={dataMockSessionUnderConsideration} />
            </div>
          </div>
        </div>
      </LayoutMain>
    </>
  )
}

export default VideoEditingPage
