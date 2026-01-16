import iconEye from '@/app/assets/icons/eye.png'
import iconBright from '@/app/assets/icons/light-2.png'
import iconStar from '@/app/assets/icons/star.png'
import iconPen from '@/app/assets/icons/pen.png'
import iconLight from '@/app/assets/icons/light.png'
import BannerPage from '@/app/components/BannerPage'
import FaqSession from '@/app/components/FaqSession'
import LayoutMain from '@/app/components/layout/main'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import TitleH3 from '@/app/components/TitleH3'
import type { Metadata } from 'next'
import Script from 'next/script'
import React from 'react'
import WrapListService from '@/app/components/WrapListService'
import ListImageStep from './ListImageStep'
import bannerBg from './assets/banner.jpg'
import SessionSlideImageEnhancement from './SessionSlideImageEnhancement'
import SessionUnderConsiderationWithMockContent from '@/app/components/SessionUnderConsiderationWithMockContent'
import { dataMockSessionUnderConsideration } from '@/app/utils/ultils'

const listContentTop = [
  {
    icon: iconEye,
    title: 'Eye-Catching',
    description:
      "Enhanced real estate photos make your listings pop and grab buyers' attention instantly, ensuring a standout presentation.",
  },
  {
    icon: iconBright,
    title: 'Bright and Cheery',
    description:
      'Brighten up your property photos and transform gloomy spaces into vibrant, welcoming rooms with our professional editing.',
  },
  {
    icon: iconStar,
    title: 'Crystal Clear',
    description:
      'Achieve crystal-clear real estate photos, with sharp, detailed images that highlight your property’s best features.',
  },
  {
    icon: iconPen,
    title: 'True Colors',
    description:
      'Enhance the true colors of your property with vibrant photo editing, ensuring every room looks pristine and inviting.',
  },
  {
    icon: iconLight,
    title: 'No More Glare',
    description:
      'Eliminate glare and unwanted reflections from your property photos, showcasing the home’s natural beauty without distractions.',
  },
]

const dataFaq = [
  {
    title: 'What is Real Estate Photo Editing?',
    description:
      'A high-quality property photograph is crucial in real estate sales. 95% of online home buyers begin their real estate journey by viewing property photos. Real Estate Photo Editing helps improve your images by enhancing color, adjusting brightness, removing clutter, and refining image quality. Stunning photos attract more potential buyers and can help close deals faster.',
  },
  {
    title: 'What is Image Enhancement in Real Estate?',
    description:
      'In simple terms, Real Estate Photo Editing involves polishing your property images. The editing process includes correcting color, fixing shadows, masking windows, and removing unattractive backgrounds to create a visually appealing, professional image that stands out in listings.',
  },
  {
    title: 'What is the Purpose of Image Enhancement?',
    description:
      'The main purpose of image enhancement is to improve the overall visual effect of the photo, bringing out the finer details of your property. It helps ensure that every element, from lighting to color balance, looks its best, making your property appear more appealing to potential buyers.',
  },
  {
    title: 'What is HDR Bracketing with Indoor Window Replacement?\n',
    description:
      'HDR bracketing is a technique that involves taking multiple exposures of the same scene and combining them to create a balanced, well-lit image. It’s particularly useful for indoor shots with windows, where we replace the windows with clearer, more attractive outdoor views for a professional finish.\n',
  },
  {
    title: 'How Can Real Estate Photo Editing Help with Night or Dusk Photos?',
    description:
      'Real Estate Photo Editing can significantly improve night or dusk photos by brightening dark areas, correcting lighting imbalances, and enhancing overall color tones. This helps transform low-light photos into clear, vibrant images that showcase the property in its best light, even after the sun sets.',
  },
  {
    title: 'Are Enhanced Real Estate Photos Still Realistic?\n',
    description:
      'Yes, Real Estate Photo Editing enhances your images while maintaining their realism. We ensure the edits enhance the visual appeal of the property without misrepresenting the actual space, making sure potential buyers see an accurate reflection of the home.\n',
  },
  {
    title: 'Can You Enhance Photos Taken with a Smartphone?\n',
    description:
      'Yes! Even photos taken with a smartphone can benefit from Real Estate Photo Editing. Our team can enhance smartphone images by improving color, brightness, and sharpness, making them look more professional and ready for your property listings.',
  },
  {
    title: 'How Much Does Real Estate Photo Editing Cost?\n',
    description:
      'The cost of Real Estate Photo Editing depends on factors such as the number of images, the complexity of edits, and the specific needs of the project. For a custom quote based on your property photos, contact us today to discuss your requirements.\n',
  },
  {
    title: 'What Does Real Estate Photo Editing Include?\n',
    description:
      'Our Real Estate Photo Editing service includes a variety of enhancements such as:\n' +
      'Brightness and contrast adjustments\n' +
      '\n' +
      '\n' +
      'Sharpening details for clearer images\n' +
      '\n' +
      '\n' +
      'Color correction and balancing\n' +
      '\n' +
      '\n' +
      'Removal of unwanted elements like reflections or distractions\n' +
      '\n' +
      '\n' +
      'Enhancing outdoor views and making interiors pop\n',
  },
  {
    title: 'Can I Choose Specific Edits for My Photos?\n',
    description:
      "Absolutely! With Real Estate Photo Editing, you can specify the edits you'd like for your property photos. Whether it’s enhancing the lighting, correcting colors, or removing certain elements, we tailor the edits to suit your preferences and goals.\n",
  },
]

const title = 'Fotober US - Real Estate Photo Editing'
const description =
  "Enhance your real estate images with Fotober US' professional photo editing services. Get stunning, high-quality edits that help your properties stand out."

const jsonSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Real Estate Photo Editing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A high-quality property photograph is crucial in real estate sales. 95% of online home buyers begin their real estate journey by viewing property photos. Real Estate Photo Editing helps improve your images by enhancing color, adjusting brightness, removing clutter, and refining image quality. Stunning photos attract more potential buyers and can help close deals faster.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Image Enhancement in Real Estate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'In simple terms, Real Estate Photo Editing involves polishing your property images. The editing process includes correcting color, fixing shadows, masking windows, and removing unattractive backgrounds to create a visually appealing, professional image that stands out in listings.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the Purpose of Image Enhancement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The main purpose of image enhancement is to improve the overall visual effect of the photo, bringing out the finer details of your property. It helps ensure that every element, from lighting to color balance, looks its best, making your property appear more appealing to potential buyers.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is HDR Bracketing with Indoor Window Replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'HDR bracketing is a technique that involves taking multiple exposures of the same scene and combining them to create a balanced, well-lit image. It’s particularly useful for indoor shots with windows, where we replace the windows with clearer, more attractive outdoor views for a professional finish.',
      },
    },
    {
      '@type': 'Question',
      name: 'How Can Real Estate Photo Editing Help with Night or Dusk Photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Real Estate Photo Editing can significantly improve night or dusk photos by brightening dark areas, correcting lighting imbalances, and enhancing overall color tones. This helps transform low-light photos into clear, vibrant images that showcase the property in its best light, even after the sun sets.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can You Enhance Photos Taken with a Smartphone?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes! Even photos taken with a smartphone can benefit from Real Estate Photo Editing. Our team can enhance smartphone images by improving color, brightness, and sharpness, making them look more professional and ready for your property listings.',
      },
    },
    {
      '@type': 'Question',
      name: 'Are Enhanced Real Estate Photos Still Realistic?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Real Estate Photo Editing enhances your images while maintaining their realism. We ensure the edits enhance the visual appeal of the property without misrepresenting the actual space, making sure potential buyers see an accurate reflection of the home.',
      },
    },
    {
      '@type': 'Question',
      name: 'How Much Does Real Estate Photo Editing Cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The cost of Real Estate Photo Editing depends on factors such as the number of images, the complexity of edits, and the specific needs of the project. For a custom quote based on your property photos, contact us today to discuss your requirements.',
      },
    },
    {
      '@type': 'Question',
      name: 'What Does Real Estate Photo Editing Include?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Our Real Estate Photo Editing service includes a variety of enhancements such as: Brightness and contrast adjustments, sharpening details for clearer images, color correction and balancing, removal of unwanted elements like reflections or distractions, and enhancing outdoor views and making interiors pop.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I Choose Specific Edits for My Photos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Absolutely! With Real Estate Photo Editing, you can specify the edits you'd like for your property photos. Whether it’s enhancing the lighting, correcting colors, or removing certain elements, we tailor the edits to suit your preferences and goals.",
      },
    },
  ],
}

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: `${process.env.BASE_URL}/image-enhancement`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

function ImageEnhancementPage() {
  const popup = () => {
    console.log(1111);

  }
  return (
    <>
      {jsonSchema && (
        <Script
          id="real-estate-photo-editing-json-ld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: jsonSchema,
          }}
        />
      )}
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            title="REAL ESTATE PHOTO EDITING"
            textDescription="Elevate your property listings with stunning Real Estate Photo Editing to sell faster and at higher prices"
            imageBg={bannerBg}
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                Real Estate Photo Editing
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                <span className="font-bold">
                  Transform your listings with Fotober US Real Estate Photo Editing
                </span>{' '}
                service, where we turn ordinary property photos into high-quality, eye-catching
                images that capture your property’s true essence. Our expert editing techniques
                enhance brightness, sharpen details, and improve color balance, creating vibrant
                visuals that stand out to potential buyers.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                We also remove distractions like glare and unwanted reflections, ensuring that every
                image highlights your property’s best features. From adjusting lighting and clarity
                to correcting colors and eliminating glare, our comprehensive{' '}
                <span className="font-bold">Real Estate Photo Editing</span> tools ensure each photo
                showcases your property at its best, helping you sell faster and at higher prices.
              </p>
            </div>

            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Sell Faster with Fotober US Real Estate Photo Editing Magic!
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
                  customCssTitle="md:h-[40px]"
                />
              ))}
            </div>
            <TitleH3 title="What We Do: Real Estate Photo Editing and Property Enhancement" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Our 20-step process enhances your property’s appearance through professional photo
              editing.
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-center mt-8 gap-10">
              <ListImageStep />
            </div>
            <div className="w-full text-center text-[#333333] text-2xl font-semibold my-6" />
          </div>
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 max-lg:pb-6 pt-6 text-center">
                Real Estate Photo Editing Results: Stunning Before and After Photos
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto lg:h-[600px] 2xl:h-[700px] overflow-hidden lg:-mt-6">
                <SessionSlideImageEnhancement />
              </div>
              <p className="text-[#003366] font-extrabold text-base w-full text-center py-2">
                Ready to elevate your listings? Get professional Real Estate Photo Editing today!
              </p>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession title="FAQs about  Real Estate Photo Editing Services" data={dataFaq} />
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

export default ImageEnhancementPage
