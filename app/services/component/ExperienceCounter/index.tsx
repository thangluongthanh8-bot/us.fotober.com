'use client'

import Image, { StaticImageData } from 'next/image'
import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Icon1 from './assets/icon-1.png'
import Icon2 from './assets/icon-2.png'
import Icon3 from './assets/icon-3.png'
import Icon4 from './assets/icon-4.png'

interface CounterItemProps {
  icon: StaticImageData
  endValue: number
  label: string
  suffix: string
  delay: number
}

const CounterItem: React.FC<CounterItemProps> = ({ icon, endValue, label, suffix, delay }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (inView) {
      let start = 0
      const duration = 2000
      const step = Math.ceil(endValue / (duration / 50))
      const timer = setTimeout(() => {
        const interval = setInterval(() => {
          start += step
          if (start > endValue) {
            start = endValue
            clearInterval(interval)
          }
          setCount(start)
        }, 50)

        return () => clearInterval(interval)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [inView, endValue, delay])

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center ${inView ? 'animate__animated animate__fadeInUp' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-16 h-16 mb-4 text-blue-500">
        <Image
          src={icon}
          alt="fotober"
          className="w-full h-full object-contain"
          objectFit="contain"
        />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-[#414042]">
        {count}
        {suffix}
      </div>
      <div className="text-sm md:text-base mt-2 font-bold text-[#414042] text-center px-2">
        {label}
      </div>
    </div>
  )
}

const ExperienceCounter: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-primary text-center font-extrabold uppercase whitespace-nowrap text-[28px]">
          OUR EXPERIENCE
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:max-w-5xl mx-auto md:gap-4 pt-12">
          <CounterItem
            icon={Icon1}
            endValue={9}
            suffix="+"
            label="years in the industry"
            delay={100}
          />

          <CounterItem icon={Icon2} endValue={100} suffix="+" label="experts" delay={300} />

          <CounterItem icon={Icon3} endValue={10} suffix="+" label="countries" delay={500} />

          <CounterItem
            icon={Icon4}
            endValue={2000}
            suffix="+"
            label="customers each month"
            delay={700}
          />
        </div>
      </div>
    </div>
  )
}

export default ExperienceCounter
