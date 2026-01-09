'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

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
      className={`bg-white rounded-lg overflow-hidden relative ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div className="relative overflow-hidden h-[350px]">
        <Image
          src={imageSrc}
          alt={title}
          width={500}
          height={500}
          className="w-full h-full object-cover transition-all duration-700"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        {/* <div className="absolute inset-0 bg-black" /> */}
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h3 className="text-lg font-bold mb-2 leading-tight whitespace-pre-line">{title}</h3>
          <div
            className="h-1 bg-primary mb-4 transition-all duration-300"
            style={{ width: isHovered ? '60px' : '40px' }}
          />
          <Link
            href={link}
            className="bg-primary hover:bg-white hover:text-primary text-white text-sm px-4 py-2 rounded-lg tracking-wider font-medium transition-colors duration-300"
          >
            VIEW MORE
          </Link>
        </div>
      </div>
    </div>
  )
}

function ListServiceCard({
  services,
}: {
  services: {
    id: number
    link: string
    title: string
    imageSrc: string
    animationDelay: number
  }[]
}) {
  return (
    <div className="container-custom m-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  )
}
export default ListServiceCard
