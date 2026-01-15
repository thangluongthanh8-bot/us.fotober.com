import CoreValue from '@/app/about-us/CoreValue'
import ListStepYear from '@/app/about-us/ListStepYear'
import OurStory from '@/app/about-us/OurStory'
import SlideTeam from '@/app/about-us/SlideTeam'
import LayoutMain from '@/app/components/layout/main'
import { Metadata } from 'next'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

const title = 'About Us - Fotober US | Real Estate Photo And Video Editing.'
const description =
  'Discover Fotober, a leader in real estate photo and video services. Learn about our mission, expertise, and how we help properties stand out visually.'

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
function AboutUsPage() {
  return (
    <LayoutMain classHeader="bg-[#043263]">
      <div className="site-content relative pt-24 ">
        <CoreValue />
        <OurStory />
        <div className="mt-8 w-full relative">
          <ListStepYear />
        </div>
        <div className="mt-10 mb-10 w-full relative">
          <div className="container-custom m-auto px-4">
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
              OUR TEAM
            </h2>
            <SlideTeam />
          </div>
        </div>
      </div>
    </LayoutMain>
  )
}

export default AboutUsPage
