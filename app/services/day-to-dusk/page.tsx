import iconEye from '@/app/assets/icons/eye.png'
import iconBright from '@/app/assets/icons/light-2.png'
import iconStar from '@/app/assets/icons/star.png'
import iconHeart from '@/app/assets/icons/heart.png'
import iconLight from '@/app/assets/icons/light.png'
import BannerPage from '@/app/components/BannerPage'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import type { Metadata } from 'next'
import React from 'react'
import ListContentStep from '@/app/services/day-to-dusk/ListContentStep'
import WrapListService from '@/app/components/WrapListService'
import SessionSlideD2D from '@/app/services/day-to-dusk/SessionSlideD2D'
import bannerBg from './assets/image-bg.jpg'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconEye,
    title: 'Increased Visual \nAppeal',
    description:
      'Turning daytime photos into stunning dusk shots creates a warm, inviting vibe that grabs attention and makes your listing pop.\n',
  },
  {
    icon: iconBright,
    title: 'Highlight Property \nFeatures',
    description:
      "Dusk lighting makes the property's exterior lights, pool glow, and other cool features stand out more than they would in daylight.\n",
  },
  {
    icon: iconStar,
    title: 'Create a Sense \nof Ambiance',
    description:
      'Dusk photos give off a cozy, charming feel, helping buyers imagine themselves relaxing and enjoying the property in the evening.\n',
  },
  {
    icon: iconHeart,
    title: 'Attract More \n Interest',
    description:
      'Eye-catching dusk images are like magnets online they grab more views and spark more interest in your property.\n',
  },
  {
    icon: iconLight,
    title: 'Showcase \n Versatility',
    description:
      'Showing your property in different lighting conditions highlights its appeal at any time of day, giving buyers a complete picture of its           potential.\n',
  },
]

const dataFaq = [
  {
    title: 'What is Day to Dusk photography?\n',
    description:
      'Day to Dusk photography is a technique where daylight photos of a property are digitally transformed to appear as though they were taken at dusk. This creates a warm, inviting atmosphere that enhances the visual appeal of the listing.',
  },
  {
    title: 'Why should I use Day to Dusk editing for my real estate photos?\n',
    description:
      'Day to Dusk editing makes your property stand out by showcasing it in the soft, glowing light of sunset. This can attract more potential buyers, increase the perceived value of the property, and potentially lead to a quicker sale.',
  },
  {
    title: 'How does Day to Dusk editing work?\n',
    description:
      'Our team of professionals uses advanced photo editing techniques to replace the daytime sky with a beautiful dusk sky, turn on lighting effects, and adjust other elements like colors, sharpness, and details to create a stunning, realistic dusk scene.',
  },
  {
    title: 'What is a Twilight photo?\n',
    description:
      'Twilight photos are usually taken in the evening during sunset. This is the best way to showcase your exterior, lawn, swimming pools and exterior & interior lighting. Twilight photos are always attractive and give a better look of your property.',
  },
  {
    title: 'Can any photo be converted from Day to Dusk?\n',
    description:
      'Almost any daylight photo can be transformed to appear as though it was taken at dusk. However, higher quality original photos yield the best results.',
  },
  {
    title: 'Can I request specific changes or features in my Day to Dusk edits?\n',
    description:
      'Yes, we can accommodate specific requests such as highlighting certain features, adding particular types of lighting, or making other adjustments to meet your needs.\n',
  },
]

const title = 'Day to Dusk Photo Editing Service for Real Estate | Fotober US'
const description =
  'Enhance your real estate listings with day to dusk photo editing. Create stunning, inviting dusk images to attract more views and potential buyers. Try now!\n'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/day-to-dusk`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

function DayToDusk() {
  return (
    <>
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            title="Day To Dusk"
            textDescription="Turn ordinary daylight photos into breathtaking twilight masterpieces with advanced techniques."
            imageBg={bannerBg}
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                Day To Dusk
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Fotober US Day to Dusk service takes property listings to the next level by
                transforming ordinary daytime photos into stunning dusk visuals. Through expert
                editing and attention to detail, this service creates a warm and inviting ambiance,
                highlighting the beauty and unique features of a property, such as outdoor lighting
                or pool areas.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Each image is designed to evoke a relaxing afternoon, helping potential buyers
                envision what life at the property would be like on a peaceful sunset.
              </p>
            </div>
            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Turn Daylight into Eye Catching Dusk
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
            <TitleH3 title=" What do we do?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              10 Steps to Create a Stunning House in Sunset
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-center mt-8 gap-10">
              <ListContentStep />
            </div>
            <div className="w-full text-center text-[#333333] text-2xl font-semibold my-6" />
          </div>
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 py-4 md:py-6 text-center">
                WHAT OUR CUSTOMERS ARE RECEIVING…
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
                <SessionSlideD2D />
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession data={dataFaq} title="FAQs about Day To Dusk" />
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

export default DayToDusk
