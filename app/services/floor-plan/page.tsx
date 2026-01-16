import iconPen from '@/app/assets/icons/pen.png'
import BannerPage from '@/app/components/BannerPage'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import WrapListService from '@/app/components/WrapListService'
import SessionSlideFactCheckFloorPlan from '@/app/services/floor-plan/SessionSlideFactCheckFloorPlan'
import type { Metadata } from 'next'
import Image from 'next/image'
import React from 'react'
import iconHeart from '@/app/assets/icons/heart.png'
import iconLight2 from '@/app/assets/icons/light-2.png'
import iconEye from '@/app/assets/icons/eye.png'
import iconLight from '@/app/assets/icons/light.png'
import bannerBg from './assets/banner.webp'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconHeart,
    title: 'Space Visualization',
    description:
      "Think of floor plans like your property's blueprint—helping buyers visualize furniture arrangement and decoration.",
  },
  {
    icon: iconLight2,
    title: 'Room-to-Room \n Adventure',
    description: "Floor plans offer a virtual tour, room by room, sparking buyers' imagination.",
  },
  {
    icon: iconPen,
    title: 'Measure Up the \nMagic',
    description: 'Floor plans act as a measuring tape, ensuring your furniture fits perfectly.',
  },
  {
    icon: iconEye,
    title: 'Future Renovation \nDreams',
    description:
      'Floor plans help sketch out renovation plans, turning your current home into your dream home.',
  },
  {
    icon: iconLight,
    title: 'Easy Peasy \nHouse Hunting',
    description:
      'Floor plans make house hunting easier by allowing quick comparison of layouts, sizes, and features.',
  },
]
const listSTep = [
  {
    image: '/service/floor-plan-redraw/list-step/01/11-1-scaled.jpg',
    title: '2D Basic Floor Plan (Black & White)\n',
    description:
      "Dive into the simplicity of our 2D black & white floor plan, where every dimension and structural element is crystal clear. Take a step closer to your dream design with precision and specifications that set the stage for your property's potential.\n",
  },
  {
    image: '/service/floor-plan-redraw/list-step/02/1Template-2-furnished-scaled.jpg',
    title: '2D Basic Floor Plan With Furniture (Black & White)',
    description:
      'Unlock the possibilities with our 2D floor plan featuring furniture layouts and alternative designs. From concept to realization, we guide you towards your vision, ensuring every detail meets your expectations for the perfect space.\n',
  },
  {
    image: '/service/floor-plan-redraw/list-step/03/49-Settlers-Run-1-scaled.jpg',
    title: '2D Color Floor Plan',
    description:
      'Adding colors into the initial design helps potential buyers easily visualize the property and assess if it fits best for them. We can determine the optimal color scheme for the structure to boost its value. Sell more quickly and attract more buyers, we’ll assist you in achieving it!\n' +
      '\n',
  },
  {
    image: '/service/floor-plan-redraw/list-step/04/2dfullcolorfloorplan.jpeg',
    title: '2D Color Floor Plan With Furniture',
    description:
      "Elevate your vision with furniture added to your 2D color floor plan, giving buyers a glimpse of the possibilities. Our experts meticulously link every element, creating a personalized experience that resonates with your buyers' desires.\n",
  },
  {
    image: '/service/floor-plan-redraw/list-step/05/Top-View-sample-2-1-scaled.jpg',
    title: '3D Basic Floor Plan',
    description:
      'Step into the future with our 3D floor plans, offering scale sketches that bring every room to life. Showcase the flow of your space and help clients envision themselves in their new home with our immersive 3D designs.\n',
  },
  {
    image: '/service/floor-plan-redraw/list-step/06/12-scaled.jpg',
    title: '3D Color Floor Plan',
    description:
      'Immerse yourself in the details with our 3D color floor plans, where every texture and hue comes to life. Let your clients feel the essence of the property, igniting their desire to make it their own with our captivating visualizations.\n',
  },
  {
    image: '/service/floor-plan-redraw/list-step/07/5-Queens-Ct-Berwick-edited-scaled.jpg',
    title: 'Floor And Site Plan Combination',
    description:
      "Strike the perfect balance between existing features and future plans with our comprehensive floor and site plan combinations. Craft an engaging, well-designed space tailored to your clients' needs and desires, ensuring every element fits seamlessly into the landscape.\n",
  },
  {
    image: bannerBg,
    title: 'Custom Order',
    description:
      "Need something unique? We offer custom services tailored to your specific needs. Whether it's personalized design elements or special requests, we're here to bring your dream home to reality.",
  },
]
const dataFaq = [
  {
    title: 'What is the floor plan redraw?\n',
    description:
      'Floor plan redraw involves recreating or updating existing floor plans to reflect accurate dimensions, layouts, and features of a property. It ensures that the floor plan is up-to-date and visually appealing.',
  },
  {
    title: 'Why is floor plan redraw important?\n',
    description:
      'Floor plan redraw is essential for real estate marketing, architectural design, and property management. It provides accurate and detailed representations of properties, aiding in decision-making, visualization, and communication.',
  },
  {
    title: 'What types of properties benefit from floor plan redraw?\n',
    description:
      'All types of properties can benefit from floor plan redraw, including residential homes, commercial buildings, offices, retail spaces, and industrial facilities. Any property that requires accurate floor plans for marketing, renovation, or construction purposes can benefit from redraw services.',
  },
  {
    title: 'What information is included in a redrawn floor plan?\n',
    description:
      'A redrawn floor plan typically includes detailed information such as room dimensions, wall placements, door and window locations, structural features, and room labels. Additional details may be added based on client requirements, such as furniture layouts or electrical and plumbing fixtures.',
  },
  {
    title: 'How does the floor plan redraw process work?',
    description:
      'The floor plan redraw process typically involves collecting existing floor plan drawings, measurements, or sketches. These are then used as a reference to create a new digital floor plan using specialized software. The redrawn floor plan is carefully crafted to ensure accuracy and compliance with industry standards.',
  },
  {
    title: 'Can I request specific modifications or additions to the redrawn floor plan?\n',
    description:
      'Yes, clients can request specific modifications or additions to the redrawn floor plan to meet their needs. Common requests include adding furniture layouts, indicating room uses, or incorporating design changes.',
  },
]

const title = '2D & 3D Floor Plans - Detailed Real Estate Layouts | Fotober US'
const description =
  'Create stunning 2D/3D floor plans for real estate with Fotober US. Visualize layouts, compare properties, and plan renovations with accurate, detailed designs.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/floor-plan-redraw`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}
function FloorPlanRedraw() {
  return (
    <>
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            title="2D - 3D Floor plan"
            textDescription="Bring your property to life with a clear and immersive understanding of your space’s layout and potential."
            imageBg={bannerBg}
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                2D - 3D Floor plan
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Explore a new level of property visualization with Fotober US 2D and 3D Floor Plan
                services. We transform standard layouts into sophisticated, detailed representations
                that help buyers envision their future spaces.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Using advanced techniques and a keen eye for detail, our floor plans provide a clear
                overview of room dimensions, furniture arrangements, and the property’s overall
                flow. This allows potential buyers to understand how each area functions while
                imagining how they can personalize the space to make it their own.
              </p>
            </div>
            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Showcase Your Home Layout in Detail
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
              8 Dream Houses’ Styles
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-start mt-8 gap-10">
              {listSTep?.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-row w-full md:w-[46%] items-center justify-between relative"
                >
                  <div className="w-full flex flex-col gap-3">
                    <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap my-0">
                      {index + 1}. {item.title}
                    </h4>
                    <p className="w-full xl:min-h-[100px] font-montserrat text-[#043263] text-base ">
                      {item.description}
                    </p>
                    <div className="xl:min-h-[350px]">
                      <Image
                        alt="Fotober US"
                        width={1000}
                        height={500}
                        src={item.image}
                        className="w-full h-auto"
                      />
                    </div>
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
                <SessionSlideFactCheckFloorPlan />
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession title="FAQs about Floor Plan Redraw" data={dataFaq} />
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

export default FloorPlanRedraw
