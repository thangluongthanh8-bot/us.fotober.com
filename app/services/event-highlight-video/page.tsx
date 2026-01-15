import iconCheck from '@/app/assets/icons/icon-check.png'
import iconLike from '@/app/assets/icons/like.png'
import iconLight from '@/app/assets/icons/light.png'
import iconLight2 from '@/app/assets/icons/light-2.png'
import iconEye from '@/app/assets/icons/eye.png'
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
import { twMerge } from 'tailwind-merge'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconLight2,
    title: 'Capture the \n Highlights',
    description:
      'Event recap videos preserve and share the most memorable moments, ensuring excitement and key takeaways are effectively conveyed.\n',
  },
  {
    icon: iconEye,
    title: 'Engage Your \n Audience',
    description:
      "Showcase the best parts of your event to engage both attendees and those who couldn't make it, keeping the momentum going.",
  },
  {
    icon: iconLight,
    title: 'Boost Social \nMedia Presence',
    description:
      'Shareable event recap videos increase visibility, attract followers, and generate buzz for future events.',
  },
  {
    icon: iconLike,
    title: 'Create Lasting \nMemories',
    description:
      "Professionally edited videos provide a lasting record of your event, capturing the atmosphere and interactions that photos alone can't.",
  },
]

const dataFaq = [
  {
    title: 'What is an event recap video?',
    description:
      'An event recap video is a concise and engaging summary of your event, highlighting its key moments, speakers, activities, and overall atmosphere. It provides a visual story that captures the essence and highlights of the event.',
  },
  {
    title: 'Why should I create an event recap video?',
    description:
      'Creating an event recap video helps preserve the excitement and key takeaways of your event in a compelling format. It engages attendees by allowing them to relive the experience and attracts potential attendees for future events.',
  },
  {
    title: 'How can I use an event recap video effectively?',
    description:
      'You can use an event recap video to promote your event on social media, your website, and in email newsletters. It serves as valuable content to showcase your event’s success, boost attendee satisfaction, and attract sponsors and partners for future collaborations.',
  },
  {
    title: 'What should be included in an event recap video? ',
    description:
      'An effective event recap video typically includes highlights of key moments, attendee testimonials, interviews with speakers or participants, shots of the venue, and any special activities or performances that took place.',
  },
  {
    title: 'Can I customize my event recap video?',
    description:
      'Yes, absolutely! You can work with our team to tailor the style, music, graphics, and overall tone of the event recap video to align with your event’s branding and objectives.',
  },
  {
    title: 'How long should an event recap video be? ',
    description:
      'Event recap videos are generally kept short and engaging, typically ranging from 1 to 3 minutes depending on the scale and content of the event. This ensures that viewers stay engaged and get a comprehensive overview without feeling overwhelmed.\n',
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

const title = 'Event Recap Services - Capture Key Moments | Fotober US'
const description =
  'Capture unforgettable moments with our event recap services. Professionally edited videos that highlight key moments and boost engagement. Try now!\n'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/event-recap`,
    images: '/thumb/image_thumb.png',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: '/thumb/image_thumb.png',
  },
}
function EventRecapPage() {
  return (
    <LayoutMain>
      <div className="mt-[-112px]">
        <BannerPage
          videoUrl="/service/event-recap/video/event-update.mp4"
          title="Event Recap"
          textDescription="Create dynamic and memorable videos that highlight key moments and leave a lasting impression."
        />
      </div>
      <div className="site-content relative pt-[1rem] md:pt-[2rem]">
        <div className="container-custom m-auto px-4">
          <div className="mb-5">
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Event Recap
            </h2>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              Fotober US' Event Recap service transforms raw event footage into polished, engaging
              videos that capture the essence of your event. This service uses advanced editing
              techniques for noise and judder removal, slow motion, emotional emphasis, color
              grading, and people highlighting. Every key moment, from highlights to atmosphere, is
              showcased effectively.
            </p>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              These recap videos offer a more immersive experience than photos alone. They help
              convey the energy and excitement of the event. The videos also preserve important
              takeaways for both attendees and those who couldn’t attend.
            </p>
          </div>

          <TitleH3 title="What are the benefits?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            Make Your Memories Last Forever
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
            11 Steps to Make a Memorable Event Recap
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
                  <Image alt="Fotober US" src={iconCheck} className="w-[24px]" />
                  <p className="whitespace-pre-line font-[500] text-base text-[#000]">
                    {listStep1[index]?.title}
                  </p>
                </div>
                <div className={twMerge('flex flex-row items-start gap-4 md:w-[44%] lg:w-[42%]')}>
                  {listStep2[index]?.title ? (
                    <>
                      <Image alt="Fotober US" src={iconCheck} className="w-[24px]" />
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
              <SessionFactCheckVideo videoId="Z4TRyKyWwc0" />
            </div>
          </div>
        </div>
        <div className="w-full bg-white mt-6">
          <WrapListService />
        </div>
        <div className="mt-6 mb-6 bg-[#E8E8E8]">
          <div className="container-custom m-auto px-4">
            <FaqSession title="FAQs about Event Recap Video" data={dataFaq} />
          </div>
        </div>
        <div className=" pt-10 pb-10 bg-white">
          <div className="container-custom m-auto">
            <SessionUnderConsiderationWithMockContent data={dataMockSessionUnderConsideration} />
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}

export default EventRecapPage
