/* eslint-disable react/no-unescaped-entities */

import type { Metadata } from 'next'
import React from 'react'
import iconHeart from '@/app/assets/icons/heart.png'
import iconDollar from '@/app/assets/icons/icon-dolar.png'
import iconTime from '@/app/assets/icons/icon-time.png'
import iconEyes from '@/app/assets/icons/eye.png'
import iconLight from '@/app/assets/icons/light.png'
import bannerBg from './assets/banner-staging.jpg'
import BannerPage from '@/app/components/BannerPage'
import TitleH3 from '@/app/components/TitleH3'
import SessionSlideVirtualStaging from './SessionSlideVirtualStaging'
import WrapListService from '@/app/components/WrapListService'
import FaqSession from '@/app/components/FaqSession'
import BeforeAfterImageSlide from '@/app/components/BeforeAfterImageSlide'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import LayoutMain from '@/app/components/layout/main'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const title = 'Virtual Staging - Transform Vacant Rooms | Fotober US'
const description =
  'Help buyers fall in love with your listings by turning vacant rooms into stylish spaces with our Virtual Staging service. Enhance your property listings.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/virtual-staging`,
    images: '/thumb/image_thumb.png',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

const listContentTop = [
  {
    icon: iconHeart,
    title: 'Wow Factor!',
    description:
      'Turn those empty rooms into jaw-dropping spaces with stylish furniture and decor, making buyers go "Wow!" as soon as they see your listings.\n',
  },
  {
    icon: iconDollar,
    title: 'Cost-Effective',
    description:
      'Save big bucks! Virtual staging costs a fraction of traditional staging, so you get amazing results without breaking the bank.\n',
  },
  {
    icon: iconTime,
    title: 'Quick Turnaround',
    description:
      'Need your listing ready fast? No problem! Virtual staging is super quick, so you can get those eye-catching photos up in no time.\n',
  },
  {
    icon: iconEyes,
    title: 'Binge-Worthy \nAppeal',
    description:
      'Gorgeous staged photos mean more clicks and shares online, attracting tons of potential buyers who can’t wait to see your property in person.\n',
  },
  {
    icon: iconLight,
    title: 'Style Play- \nGround',
    description:
      'Experiment with endless design options to suit any taste. From modern chic to cozy rustic, virtual staging lets you play with styles to match any buyer’s dream home.\n',
  },
]

const listSTep = [
  {
    title: 'Modern',
    description:
      'Think sleek, clean lines and minimal clutter. Modern style is all about simplicity and functionality, with lots of open space and a cool, polished vibe. Imagine a room that feels fresh and sophisticated, like a swanky city apartment.',
    imageBefore: '/service/virtual-staging/list-step/01/1U1A6715-1-scaled.jpg',
    imageAfter: '/service/virtual-staging/list-step/01/1U1A6715_Final-1-scaled.jpg',
  },
  {
    title: 'Scandinavian',
    description:
      'Cozy, light, and airy! Scandinavian design is all about natural materials, neutral colors, and functional furniture. Picture a bright, welcoming space with lots of white, touches of wood, and comfy textiles.\n',
    imageBefore: '/service/virtual-staging/list-step/02/FamilyRoom3-1.jpg',
    imageAfter: '/service/virtual-staging/list-step/02/FamilyRoom3_1-1.jpg',
  },
  {
    title: 'Contemporary',
    description:
      'Always on-trend and ever-evolving! Contemporary style embraces the latest design trends, blending sleek and chic elements with bold colors and unique pieces. Always stylish and never outdated.\n',
    imageBefore: '/service/virtual-staging/list-step/03/A737261-copy-1-1-scaled.jpg',
    imageAfter: '/service/virtual-staging/list-step/03/A737261-copy_1-1-1-scaled.jpg',
  },
  {
    title: 'Traditional',
    description:
      'Classic and elegant, with a touch of formality. Traditional design features rich wood furniture, ornate details, and a warm, inviting atmosphere. Think of a charming, timeless space that feels like a refined retreat.\n',
    imageBefore: '/service/virtual-staging/list-step/04/bedroom-2-1.jpg',
    imageAfter: '/service/virtual-staging/list-step/04/bedroom-2_1-1.jpg',
  },
  {
    title: 'Farmhouse',
    description:
      'Rustic charm meets cozy comfort! Farmhouse style is all about natural materials, vintage touches, and a lived-in feel—perfect for relaxed, country living.\n',
    imageBefore: '/service/virtual-staging/list-step/05/Deck-1-scaled.jpg',
    imageAfter: '/service/virtual-staging/list-step/05/Deck_Final-1-scaled.jpg',
  },
  {
    title: 'Glam',
    description:
      'Sparkle and shine! Glam style is all about luxury and opulence, with lots of metallics, plush fabrics, and bold, dramatic elements. A dazzling space with crystal chandeliers, velvet sofas, and plenty of bling!\n',
    imageBefore: '/service/virtual-staging/list-step/06/C.-184-Shanty-Bay-Road_1183-1-scaled.jpg',
    imageAfter:
      '/service/virtual-staging/list-step/06/C.-184-Shanty-Bay-Road_1183_final-1-scaled.jpg',
  },
  {
    title: 'Urban/Industrial',
    description:
      'Edgy and cool, with a touch of raw beauty. Urban/industrial design features exposed brick, metal accents, and utilitarian furniture. It’s like living in a stylish, converted loft with a bit of rugged charm and city vibe.\n',
    imageBefore: '/service/virtual-staging/list-step/07/DSC01237-1-1-scaled.jpg',
    imageAfter: '/service/virtual-staging/list-step/07/DSC01237_Final-1-scaled.jpg',
  },
  {
    title: 'Coastal',
    description:
      'Breezy and relaxed, just like a beach vacation! Coastal style is all about light colors, natural textures, and ocean-inspired decor. Perfect for dreaming of the seaside.\n',
    imageBefore: '/service/virtual-staging/list-step/08/D_P2059631_15-1.jpg',
    imageAfter: '/service/virtual-staging/list-step/08/D_P2059631_15_Final-1.jpg',
  },
]

const dataFaq = [
  {
    title: 'What is virtual staging?\n',
    description:
      'Virtual staging is the process of using digital technology to furnish and decorate empty or sparsely furnished rooms in property photos, creating attractive, realistic images that help buyers visualize the potential of a space.\n',
  },
  {
    title: 'How does virtual staging work?\n',
    description:
      'A professional editor uses software to add furniture, decor, and other elements to photos of empty rooms. The result is a digitally staged image that looks like a beautifully furnished space.',
  },
  {
    title: 'How long does virtual staging take?',
    description:
      'Virtual staging is typically fast, with many services offering a turnaround time of 24-48 hours, depending on the number of photos and complexity of the staging.\n',
  },
  {
    title: 'Can buyers tell if a photo has been virtually staged?\n',
    description:
      "When done professionally, virtual staging looks very realistic. However, it's always a good practice to disclose that images are virtually staged to maintain transparency with potential buyers.",
  },
  {
    title: 'What types of properties benefit from virtual staging?\n',
    description:
      'Virtual staging is beneficial for all types of properties, including vacant homes, rental units, and commercial spaces. It helps any property appear more inviting and visually appealing.',
  },
  {
    title: 'Can I choose the style of furniture and decor for virtual staging?\n',
    description:
      'Yes, most virtual staging services offer various design styles to choose from, such as modern, traditional, farmhouse, and more, allowing you to tailor the look to your target market.',
  },
]

function VirtualStagingPage() {
  return (
    <LayoutMain>
      <div className="mt-[-112px]">
        <BannerPage
          title="Virtual Staging"
          textDescription="Use realistic digital furnishings and decor to bring empty spaces to life and help buyers envision their future home."
          imageBg={bannerBg}
        />
      </div>
      <div className="site-content relative pt-[1rem] md:pt-[2rem]">
        <div className="container-custom m-auto px-4">
          <div className="mb-5">
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Virtual Staging in Real Estate
            </h2>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              At Fotober US Virtual Staging Services, we bring empty spaces to life with techniques
              like furniture placement, color scheme adjustments, and décor matching.
            </p>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              We also provide custom interior designs from catalogs, offering multiple style
              options for each room based on client preferences. This helps buyers easily
              visualize the property’s potential, making it more attractive and speeding up the
              sales process without the cost of physical staging.
            </p>
          </div>
          <TitleH3 title="What are the benefits?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            Transform Empty Rooms into Appealing Homes
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
                  <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
                    {index + 1}. {item.title}
                  </h4>
                  <p className="w-full xl:min-h-[100px] font-montserrat text-[#043263] text-base ">
                    {item.description}
                  </p>
                  <BeforeAfterImageSlide
                    afterImageUrl={item.imageBefore}
                    beforeImageUrl={item.imageAfter}
                  />
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
              <SessionSlideVirtualStaging />
            </div>
            {/* <ButtonPlaceAnOrder /> */}
          </div>
        </div>
        <div className="w-full bg-white mt-6">
          <WrapListService />
        </div>
        <div className="mt-6 mb-6 bg-[#E8E8E8]">
          <div className="container-custom m-auto px-4">
            <FaqSession title="FAQs about Virtual Staging" data={dataFaq} />
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

export default VirtualStagingPage
