import BannerPage from "@/app/components/BannerPage";
import FaqSession from "@/app/components/FaqSession";
import LayoutMain from "@/app/components/layout/main";
import ServiceStepDescription from "@/app/components/ServiceStepDescription";
import TitleH3 from "@/app/components/TitleH3";
import WrapListService from "@/app/components/WrapListService";
import SessionSlideRender from "@/app/services/rendering/SessionSlideRender";
import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import iconFind from "@/app/assets/icons/icon-find.png";
import iconLight from "@/app/assets/icons/light.png";
import iconLike from "@/app/assets/icons/like.png";
import iconTime from "@/app/assets/icons/icon-time.png";
import iconLight2 from "@/app/assets/icons/light-2.png";
import { twMerge } from "tailwind-merge";
import bannerBg from "./assets/banner.jpg";
import SessionUnderConsiderationWithMockContent from "@/app/components/SessionUnderConsiderationWithMockContent";
import { dataMockSessionUnderConsideration } from "@/app/utils/ultils";

const listContentTop = [
  {
    icon: iconFind,
    title: "Explore Without \nLeaving the Couch",
    description:
      "Potential buyers can tour your property from the comfort of their home, making it super convenient and stress-free.\n",
  },
  {
    icon: iconLight,
    title: "Show Off Every \nNook and Cranny",
    description:
      "Give viewers a complete view of your property, from the cozy living room to the spacious backyard, leaving no detail unnoticed.\n",
  },
  {
    icon: iconLike,
    title: "Boost Engagement",
    description:
      "Interactive tours are way more engaging than plain photos, keeping buyers interested and excited about your listing.\n",
  },
  {
    icon: iconTime,
    title: "Save Time",
    description:
      "With virtual tours, only seriously interested buyers will schedule in-person visits, saving you time and effort.\n",
  },
  {
    icon: iconLight2,
    title: "Stand Out from \nthe Crowd",
    description:
      "Not every listing has a 360° virtual tour—add one to yours and make your property the star of the show!\n",
  },
];

const listSTep = [
  {
    title: "External Rendering",
    image: "/service/render/list-step/01/Ex_1.jpg",
    description:
      "Transform your dream home's exterior into a visual masterpiece with our expert rendering services. From facade enhancements to landscaping, we bring your vision to life.\n",
  },
  {
    title: "Internal Rendering",
    image: "/service/render/list-step/02/Interior_3.jpg",
    description:
      "Step inside your dream home and visualize every detail with our internal rendering services. From cozy living spaces to sleek kitchens, we create immersive interiors that inspire.\n",
  },
  {
    title: "360° Renders & Virtual Tours",
    videoUrl: "/service/render/list-step/03/Interior-video.mp4",
    description:
      "Explore your dream home from every angle with our immersive 360° virtual tours. Step into each room, soak in the ambiance, and envision yourself living your best life.\n",
  },
  {
    title: "Custom Order",
    image: "/service/render/list-step/04/custom_job.jpg",
    description:
      "Need something unique? We offer custom services tailored to your specific needs. Whether it's personalized design elements or special requests, we're here to bring your dream home to reality.\n",
  },
];
const dataFaq = [
  {
    title: "What is virtual rendering in real estate?\n",
    description:
      "Virtual rendering in real estate involves creating realistic digital representations of properties, both exteriors and interiors, using advanced computer software. These renderings offer a lifelike preview of the property's design, layout, and features.",
  },
  {
    title:
      "How accurate are virtual renderings compared to real-life properties?\n",
    description:
      "Virtual renderings strive for realism and accuracy, but they are digital representations and may not perfectly reflect real-life conditions. However, they provide a close approximation and are valuable tools for visualizing design concepts.",
  },
  {
    title:
      "How can virtual renderings help with property development and construction?\n",
    description:
      "Virtual renderings offer valuable insights into the design and layout of properties, helping developers and construction teams visualize the end result before construction begins. This can lead to more efficient planning and decision-making process",
  },
  {
    title:
      "Are virtual renderings suitable for both residential and commercial properties?\n",
    description:
      "Yes, virtual renderings are suitable for both residential and commercial properties. Whether it's a luxury home, office building, retail space, or hospitality venue, virtual renderings can showcase the property's potential to potential buyers or tenants.",
  },
  {
    title:
      "Can virtual renderings be used for renovations and remodeling projects?\n",
    description:
      "Yes, virtual renderings are valuable tools for renovations and remodeling projects. They allow clients to see how proposed changes will look and feel before any work begins, helping to ensure the desired outcome is achieved.",
  },
  {
    title:
      "How do I get started with virtual rendering services for my real estate project?\n",
    description:
      "To get started, simply contact us to discuss your project requirements and goals. We'll work closely with you to understand your vision and provide customized virtual rendering solutions to bring it to life.\n",
  },
];

const title = "Virtual Rendering for Real Estate: Elevate Every Property\n";
const description =
  "Showcase your unbuilt property with Fotober’s Virtual Rendering service. Use 3D renderings to visualize concepts and impress potential buyers.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${process.env.BASE_URL}/floor-plan-redraw`,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
};
function Rendering() {
  return (
    <>
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            title="Rendering"
            textDescription="Deliver high-quality, photorealistic images and videos that bring your architectural designs and interiors to life."
            imageBg={bannerBg}
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                Virtual Rendering
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                At Fotober's Virtual Rendering in Real Estate Services, we
                transform blueprints into lifelike visualizations using
                techniques like 3D modeling, texture mapping, lighting effects,
                and virtual staging.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Whether you're showcasing new builds or renovations, our
                detailed renderings allow buyers to envision the full potential
                of the space. This service helps real estate professionals
                present their projects with confidence, creating engaging,
                immersive experiences for clients.
              </p>
            </div>
            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Take a Virtual Journey to Your Future Home
            </h2>
            <div
              data-test-id="list-description-service"
              className="flex flex-row max-lg:flex-wrap gap-6 mt-8 justify-center mb-8"
            >
              {listContentTop.map((item) => (
                <ServiceStepDescription
                  key={item.title}
                  description={item.description}
                  title={item.title}
                  wrapClassName="xl:w-[20%]"
                  imageIcon={item.icon}
                />
              ))}
            </div>
            <TitleH3 title=" What do we do?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              4 Services to Make Your Dream Home Come to Life
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-start mt-8 gap-10">
              {listSTep?.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-row w-full md:w-[46%] items-start h-full justify-start"
                >
                  <div className="w-full flex flex-col h-full gap-3">
                    <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
                      {index + 1}. {item.title}
                    </h4>
                    <p className="w-full xl:min-h-[100px] font-montserrat text-[#043263] text-base ">
                      {item.description}
                    </p>
                    {item.videoUrl ? (
                      <video
                        className="w-full h-auto rounded-[8px]"
                        controls
                        autoPlay={false}
                        loop
                        muted
                      >
                        <source src={item.videoUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <>
                        {item.image && (
                          <Image
                            alt="fotober"
                            width={1000}
                            height={500}
                            src={item.image}
                            className={twMerge(
                              "w-full h-auto object-cover rounded-[8px]",
                              index === 3 ? "xl:h-[315px]" : "xl:h-[350px]"
                            )}
                          />
                        )}
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full text-center text-[#333333] text-2xl font-semibold my-6" />
          </div>
          <div className="w-full bg-[#E8E8E8]">
            <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
              <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-[45px] my-0 py-4 md:py-6 text-center">
                WHAT OUR CUSTOMERS ARE RECEIVING…
              </h2>
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto relative">
                <SessionSlideRender />
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession data={dataFaq} title="FAQs about Virtual Rendering" />
            </div>
          </div>
          <div className=" pt-10 pb-10 bg-white">
            <div className="container-custom m-auto">
              <SessionUnderConsiderationWithMockContent
                data={dataMockSessionUnderConsideration}
              />
            </div>
          </div>
        </div>
      </LayoutMain>
    </>
  );
}

export default Rendering;
