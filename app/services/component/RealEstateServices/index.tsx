'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { twMerge } from 'tailwind-merge'

interface ServiceCardProps {
  title: string
  imageSrc: string
  animationDelay: number
  link: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, imageSrc, animationDelay, link }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  })

  return (
    <div
      ref={ref}
      className={`bg-white rounded-lg overflow-hidden shadow-lg relative ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="relative overflow-hidden h-[550px]">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-all duration-700"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-2xl font-bold mb-2 leading-tight">{title}</h3>
          <div
            className="h-1 bg-primary mb-4 transition-all duration-300"
            style={{ width: isHovered ? '60px' : '40px' }}
          />
          <Link
            href={link}
            type="button"
            className="bg-blue-900 hover:bg-primary text-white text-sm px-4 py-2 rounded tracking-wider font-medium transition-colors duration-300"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </div>
  )
}

const RealEstateServices = () => {
  const { ref: descRef, inView: descInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      id: 1,
      title: 'PHOTO EDITING SERVICES',
      description: 'Professional photo editing for real estate properties',
      imageSrc: '/service/photo-editing.png',
      link: '/photo-editing',
      animationDelay: 0.1,
    },
    {
      id: 2,
      title: 'VIDEO EDITING SERVICES',
      description: 'High-quality video production for property showcases',
      imageSrc: '/service/video-editing.png',
      link: '/video-editing',
      animationDelay: 0.3,
    },
    {
      id: 3,
      title: 'VIRTUAL STAGING & ARCHITECTURE DESIGN',
      description: 'Transform empty spaces with virtual staging and architectural visualization',
      imageSrc: '/service/viltual-staging-editing.png',
      link: 'architecture-planning-and-virtual-services',
      animationDelay: 0.5,
    },
  ]

  return (
    <div className="container-custom mx-auto px-4">
      <h2 className="text-primary text-center font-extrabold uppercase whitespace-nowrap text-[28px]">
        OUR SERVICE
      </h2>

      <p
        ref={descRef}
        className={twMerge(
          'text-center text-gray-700 text-lg max-w-4xl mx-auto mb-12',
          descInView ? 'animate__animated animate__fadeIn' : 'opacity-0',
        )}
      >
        Fotober US delivers real estate media services that empower photographers, videographers,
        <br /> architects, and realtors to showcase properties at their best.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}

export default RealEstateServices
