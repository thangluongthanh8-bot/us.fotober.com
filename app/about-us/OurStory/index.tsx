import bgTeam from '@/app/about-us/assets/bg-team.png'
import Image from 'next/image'
import React from 'react'

function OurStory() {
  return (
    <div className="mt-8 w-full relative overflow-hidden">
      <div className="absolute w-full h-full bg-[#00000091] z-10" />
      <Image alt="Fotober US" src={bgTeam} className="w-full h-full absolute z-0  object-cover" />
      <div className="container-custom relative z-20 m-auto">
        <h2 className="w-full pt-8 relative z-20 text-wrap text-center uppercase font-montserrat text-white font-extrabold text-xl md:text-[28px] leading-[54px]">
          OUR STORY
        </h2>
        <div className="text-white font-normal  text-justify text-lg flex flex-col gap-4 pt-4 mb-4 md:pb-8">
          <p>
            WELCOME TO FOTOBER - Fotober is your premier destination for top-tier photo editing,
            video editing and rendering services for real estate. Our dedicated team of Vietnamese
            professionals combines extensive expertise with cutting-edge tools developed through
            years of customer interaction. We are not just about enhancing productivity and
            efficiency; our goal is to surpass customer expectations, delivering products that truly
            impress.
          </p>
          <p>
            At Fotober, we continuously listen and improve to offer the ultimate customer
            experience. We understand the challenges faced by photographers, whether it&apos;s
            juggling tight schedules or navigating the complexities of photo editing. That&apos;s
            why we established Fotober – to provide a comprehensive solution to these challenges.
          </p>
          <p>
            With a team of seasoned editors and consultants, Fotober prides itself on delivering
            exceptional editing results. We ensure superior quality, swift turnaround times, and
            affordability, making us your ideal partner for all your photo editing needs.
          </p>
          <p>
            Driven by the growing demand for image editing services, Fotober is expanding rapidly.
            With a capacity to process over 20,000 photos per day, we cater to individual
            photographers and large corporations alike, delivering outstanding outcomes every time.
            Trust Fotober to simplify your workflow – you capture the photos, we perfect them.
          </p>
        </div>
      </div>
    </div>
  )
}
export default OurStory
