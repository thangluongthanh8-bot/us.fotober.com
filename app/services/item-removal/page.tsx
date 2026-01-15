import iconEye from '@/app/assets/icons/eye.png'
import iconHome from '@/app/assets/icons/home.png'
import iconImagePlaceholder from '@/app/assets/icons/image-placehoder.png'
import iconLight from '@/app/assets/icons/light-2.png'
import iconStar from '@/app/assets/icons/star.png'
import BannerPage from '@/app/components/BannerPage'
import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import WrapListService from '@/app/components/WrapListService'
import SessionSlide from '@/app/services/item-removal/Sessionslide'
import type { Metadata } from 'next'
import React from 'react'
import bannerBg from './assets/image-bg.jpg'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconHome,
    title: 'Cleaner Look',
    description: "Removing clutter makes photos neat, highlighting the property's best features.",
  },
  {
    icon: iconLight,
    title: 'Bigger Space Vibes',
    description:
      'Less stuff makes rooms look more spacious and open, giving a better sense of size and layout.',
  },
  {
    icon: iconStar,
    title: 'Highlight Key \n Features',
    description:
      'Clearing distractions draws attention to highlights like a fireplace or hardwood floors.',
  },
  {
    icon: iconImagePlaceholder,
    title: 'Neutral Appeal',
    description:
      'Removing personal items helps buyers imagine themselves living there, increasing appeal.',
  },
  {
    icon: iconEye,
    title: 'Boosted \n Listing Appeal',
    description:
      'Clean, uncluttered photos look professional and attractive, helping your listing stand out and sell faster.',
  },
]
const listContentBeforeAfter = [
  {
    title: 'Clean The Kitchen Table',
    before: '/service/item-removal/list-step/01/1clean-the-kitchen-table-before-scaled.jpg',
    after: '/service/item-removal/list-step/01/1clean-the-kitchen-table-after-scaled.jpg',
  },
  {
    title: 'Remove Power Lines and Wires',
    before: '/service/item-removal/list-step/02/before-6-1-scaled.jpg',
    after: '/service/item-removal/list-step/02/after-5-1-scaled.jpg',
  },
  {
    title: 'Clean Road Surface',
    before: '/service/item-removal/list-step/03/before-11-1-scaled.jpg',
    after: '/service/item-removal/list-step/03/after-9-1-scaled.jpg',
  },
  {
    title: 'Remove Cars from Driveway',
    before: '/service/item-removal/list-step/04/before-12-1-scaled.jpg',
    after: '/service/item-removal/list-step/04/after-10-1-scaled.jpg',
  },
  {
    title: 'Remove Small Object',
    before: '/service/item-removal/list-step/05/3small-object-removal-before-scaled.jpg',
    after: '/service/item-removal/list-step/05/3small-object-removal-after-scaled.jpg',
  },
  {
    title: 'Remove All Objects',
    before: '/service/item-removal/list-step/06/Living-Room--scaled.jpg',
    after: '/service/item-removal/list-step/06/Living-Room-copy-scaled.jpg',
  },
]

const dataFaq = [
  {
    title: 'What is item removal in real estate photography?\n',
    description:
      'Item removal involves digitally editing photos to remove unwanted objects, clutter, or distractions from the image, creating a cleaner and more visually appealing presentation of the property.',
  },
  {
    title: 'Why is item removal important in real estate photography?\n',
    description:
      'Item removal helps to declutter and enhance the appearance of the property in photos, allowing potential buyers to focus on the key features and aesthetics without being distracted by irrelevant objects.',
  },
  {
    title: 'What types of items can be removed from real estate photos?\n',
    description:
      "Common items removed from real estate photos include furniture, personal belongings, clutter, vehicles, power lines, signage, and any other objects that may detract from the property's appeal.",
  },
  {
    title: 'Are there limitations to item removal in real estate photography?\n',
    description:
      'While many items can be successfully removed from photos, there may be limitations depending on the complexity of the scene, lighting conditions, and the quality of the original image. Some objects may be difficult or impossible to remove without compromising the integrity of the photo..',
  },
  {
    title: 'Can I request specific items to be removed from my real estate photos?\n',
    description:
      "Yes, most real estate photography services allow clients to request specific items to be removed from photos according to their preferences. It's essential to communicate your requirements clearly to ensure the desired results.",
  },
]

const title = 'Item Removal Service for Real Estate Photos | Fotober US'
const description =
  'Fotober’s Item Removal Service cleans real estate photos by removing unwanted objects, enhancing visual appeal for stunning, professional images.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/item-removal`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

function ItemRemovalPage() {
  return (
    <>
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            title="Item Removal"
            textDescription="Seamlessly eliminate unwanted objects to present a clean and inviting space that attracts potential buyers."
            imageBg={bannerBg}
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                Item Removal
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Maximize the potential of your real estate photos with Fotober’s Item Removal
                service, expertly crafted to eliminate clutter and distractions for a polished,
                professional look. Our advanced techniques allow us to seamlessly remove unwanted
                objects, resulting in a smooth and natural finish.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                By clearing away personal items and excess clutter, we create a cleaner, more open
                space that helps potential buyers envision themselves in the property. This
                transformation not only boosts the aesthetic appeal but also makes each room feel
                larger and more inviting.
              </p>
            </div>
            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Remove Unwanted Items From Your Real Estate Photos
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
                  imageIcon={item.icon}
                  wrapClassName="xl:w-[20%]"
                />
              ))}
            </div>
            <TitleH3 title=" What do we do?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              6 Services to Clean your Real Estate Listings
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-center mt-8 gap-10">
              {listContentBeforeAfter.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-row w-full md:w-[46%] items-center justify-between relative"
                >
                  <div className="w-full flex flex-col gap-3">
                    <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
                      {index + 1}. {item.title}
                    </h4>
                    <BeforeAfterImageSlide
                      afterImageUrl={item.before}
                      beforeImageUrl={item.after}
                    />
                  </div>
                  {index % 2 === 0 && (
                    <div className="min-w-[2px] xl:min-w-[4px] absolute bg-black h-[60%] right-[-9%]" />
                  )}
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
              <div className="w-full xl:w-[80%] mb-6 m-auto">
                <SessionSlide />
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession title="FAQs about Item Removal" data={dataFaq} />
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

export default ItemRemovalPage
