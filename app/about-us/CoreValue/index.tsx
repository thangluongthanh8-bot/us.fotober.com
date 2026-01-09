import icon1 from '@/app/about-us/assets/core-value-1.png'
import icon2 from '@/app/about-us/assets/core-value-2.png'
import icon3 from '@/app/about-us/assets/core-value-3.png'
import icon4 from '@/app/about-us/assets/core-value-4.png'
import icon5 from '@/app/about-us/assets/core-value-5.png'
import icon6 from '@/app/about-us/assets/core-value-6.png'
import ServiceStepDescription from '@/app/components/ServiceStepDescription'
import React from 'react'

const listCoreValue = [
  {
    icon: icon1,
    title: 'Commitment to Excellence',
    description:
      'Fotober is dedicated to delivering top-tier photo editing services, striving for perfection in every project.',
  },
  {
    icon: icon2,
    title: 'Customer-Centric Approach',
    description:
      'The company prioritizes customer satisfaction and continuously listens to customer feedback to improve its services.',
  },
  {
    icon: icon3,
    title: 'Innovation and Adaptability',
    description:
      'Fotober embraces innovation and employs cutting-edge tools to stay at the forefront of the industry. The company is also adaptable, evolving to meet the changing needs and demands of its clients and the market.',
  },
  {
    icon: icon4,
    title: 'Quality and Reliability',
    description:
      'Fotober prides itself on delivering high-quality results consistently. Clients can rely on Fotober to meet their editing needs with precision and accuracy.',
  },
  {
    icon: icon5,
    title: 'Efficiency and Speed',
    description:
      'Fotober values efficiency and speed, recognizing the importance of timely delivery in the fast-paced world of photography and real estate.\n',
  },
  {
    icon: icon6,
    title: 'Affordability',
    description:
      'While maintaining high quality, Fotober also prioritizes affordability, ensuring that its services are accessible to a wide range of clients, from individual photographers to large corporations.',
  },
]

function CoreValue() {
  return (
    <div className="container-custom m-auto px-4">
      <h1 className="opacity-0 h-[20px]">
        About Us - Fotober | Real Estate Photo And Video Editing
      </h1>
      <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-xl md:text-[28px] leading-[54px]">
        CORE VALUE
      </h2>
      <div
        data-test-id="list-description-service"
        className="flex flex-col md:flex-row flex-wrap justify-between gap-6 mt-8"
      >
        {listCoreValue.map((item) => (
          <div className="w-full md:w-[30%]" key={item.title}>
            <ServiceStepDescription
              description={item.description}
              title={item.title}
              imageIcon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default CoreValue
