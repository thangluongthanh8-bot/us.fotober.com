import { Metadata } from 'next/types'
import React from 'react'

import HomePage from './home/page'
import LayoutMain from './components/layout/main'

const title = 'Fotober - Real Estate Photo Editing And Video Editing'
const description =
  'Boost Your Real Estate Listings with Fotober’s Professional Photo Editing, Video Editing, and Virtual Staging Services Tailored for Real Estate Success'

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

export default function Home() {
  return (
    <>
    <LayoutMain>

        <HomePage />
    </LayoutMain>

    </>
  )
}
