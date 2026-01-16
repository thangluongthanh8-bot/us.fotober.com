import SessionBgBulkOrder from '@/app/services/bulk-order/SessionBgBulkOrder'
import LayoutMain from '@/app/components/layout/main'
import SessionContact from '@/app/home/SessionContact'
import { Metadata } from 'next'

const title = 'Bulk Order Photo & Video Services | Fotober US'
const description =
  "Fotober US' bulk order page offers a seamless solution for real estate professionals who need high-quality photo and video editing services at scale. \n"

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://us.fotober.com',
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
}

function BulkOrderPage() {
  return (
    <LayoutMain>
      <div className="w-full h-full bg-white text-[#1A1A1A] overflow-hidden mt-[-112px]">
        <SessionBgBulkOrder />
        <div className="py-7">
          <SessionContact />
        </div>
      </div>
    </LayoutMain>
  )
}

export default BulkOrderPage
