

import Image from 'next/image'
import bannerImage from '../assets/banner.png'

const SectionBanner = () => {
   return (
      <div className="relative w-full flex items-center rounded-2xl overflow-hidden " style={{ backgroundImage: `url(${bannerImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

         {/* Dark Overlay */}
         <div className="absolute inset-0 bg-black/40"></div>

         {/* Content */}
         <div className="relative z-10 w-full py-35 px-6 md:px-12 lg:px-20 text-white container mx-auto">
            <div className="max-w-4xl">
               {/* Title */}
               <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold uppercase tracking-wide mb-4">
                  Fotober US LLC
               </h1>
               {/* Subtitle */}
               <div className="text-2xl md:text-4xl lg:text-5xl w-full md:w-max italic font-medium leading-tight mb-4 ">
                  <p>YOUR US-BASED REAL ESTATE</p>
                  <p>PHOTO & VIDEO EDITING PARTNER</p>
               </div>
               {/* Description */}
               <p className="text-lg md:text-2xl font-normal mb-25 text-gray-100">
                  Outsourcing That Feels In-House, Built for US Standards.
               </p>
               {/* Buttons */}
               <div className="mt-8 md:mt-12 flex flex-wrap gap-4 mb-10">
                  <a href="/contact">
                     <button className="bg-white text-[#0B2545] text-base md:text-xl font-bold py-2 px-6 md:px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                        Schedule a Call
                     </button>
                  </a>
                  <a href="/contact#bulk-order-form">
                     <button className="bg-white text-[#0B2545] text-base md:text-xl font-bold py-2 px-6 md:px-4 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300 cursor-pointer">
                        Try Our Free Edits
                     </button>
                  </a>
               </div>

               {/* Trust Indicators */}
               <div className="text-sm md:text-lg font-medium italic text-gray-200 space-y-1">
                  <p>Trusted by 10,000+ photographers & studios worldwide</p>
                  <p>US-registered LLC • W-9 ready • Overnight turnaround</p>
               </div>
            </div>
         </div>
      </div>
   )
}
export default SectionBanner