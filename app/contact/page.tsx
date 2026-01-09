import LayoutMain from '@/app/components/layout/main'
import ContactFrom from '@/app/contact/ContactFrom'
import SessionBgContact from '@/app/contact/SessionBgContact'
import { Metadata } from 'next'

const title = 'Contact Fotober - Real Estate Photo And Video Editing'
const description =
  'Contact Fotober 24/7 for consultation on real estate photo and video editing services or to get precise and completely free answers to your questions.'

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
function ContactPage() {
  return (
    <LayoutMain>
      <div className="w-full h-full bg-white text-[#1A1A1A] overflow-hidden mt-[-112px]">
        <SessionBgContact />
        <h1 className="opacity-0">Connect with Fotober!</h1>
        <ContactFrom />
      </div>
    </LayoutMain>
  )
}

export default ContactPage
