import iconLike from "@/app/assets/icons/like.png";
import SessionFactCheckVideo from "@/app/services/car-video-editing/SessionFactCheck";
import BannerPage from "@/app/components/BannerPage";
import FaqSession from "@/app/components/FaqSession";
import LayoutMain from "@/app/components/layout/main";
import ServiceStepDescription from "@/app/components/ServiceStepDescription";
import TitleH3 from "@/app/components/TitleH3";
import WrapListService from "@/app/components/WrapListService";

import type { Metadata } from "next";
import Image from "next/image";
import React from "react";
import iconLight2 from "@/app/assets/icons/light-2.png";
import iconStar from "@/app/assets/icons/star.png";
import iconEye from "@/app/assets/icons/eye.png";
import iconLight from "@/app/assets/icons/light.png";
import iconCheck from "@/app/assets/icons/icon-check.png";
import { twMerge } from "tailwind-merge";
import SessionUnderConsiderationWithMockContent from "@/app/components/SessionUnderConsiderationWithMockContent";
import { dataMockSessionUnderConsideration } from "@/app/utils/ultils";

const listContentTop = [
  {
    icon: iconLike,
    title: "Boost Engagement",
    description:
      "Well-crafted personal branding videos capture attention and encourage interaction.",
  },
  {
    icon: iconLight2,
    title: "Highlight Key \nFeatures",
    description:
      "Showcase your unique strengths, skills, and personality to stand out.\n",
  },
  {
    icon: iconStar,
    title: "Create Emotional \nConnections",
    description: " Add a personal touch to build trust and relatability.",
  },
  {
    icon: iconEye,
    title: "Professional \nAppeal",
    description:
      "High-quality videos reflect your professionalism and dedication.",
  },
  {
    icon: iconLight,
    title: "Rock Your \nSocial Media",
    description:
      "Enhance visibility and attract a broader audience to boost your personal brand.",
  },
];

const listStep1 = [
  { title: "Professional Color Grading\n" },
  { title: "Contrast and Brightness Adjustment\n" },
  { title: "Advanced Title Animation\n" },
  { title: "Denoise Footage" },
  { title: "High-Quality Music" },
  { title: "Professional Graphics" },
];
const listStep2 = [
  { title: "Stabilize Footage" },
  { title: "Branding" },
  { title: "Watermark Branding" },
  { title: "Advanced Video Editing\n" },
  { title: "Delivery of Branded and Unbranded MLS Compliant Video" },
];

const dataFaq = [
  {
    title: "What is personal branding video editing?\n",
    description:
      "Personal branding video editing involves creating and refining video content that showcases an individual's unique qualities, skills, and personality to build and enhance their personal brand. This can include editing interview clips, promotional videos, social media content, and more.\n",
  },
  {
    title: "Why is personal branding video editing important?\n",
    description:
      "It helps you present a polished and professional image, differentiate yourself from competitors, engage your audience, and create a strong personal connection with viewers, all of which can enhance your personal brand and career opportunities.\n",
  },
  {
    title: "What types of videos can be used for personal branding?",
    description:
      "Common types include introduction videos, testimonial videos, expert tip videos, behind-the-scenes clips, vlogs, speaking engagements, and social media content. Each type can highlight different aspects of your personal brand.",
  },
  {
    title: "How can video editing boost engagement?",
    description:
      "Effective video editing can make your content more visually appealing and dynamic, capturing and holding the viewer's attention. Engaging elements like animations, captions, and music can also encourage viewers to interact with your content.",
  },
  {
    title: "What are key features to highlight in a personal branding video?",
    description:
      "Highlight your unique skills, experiences, values, and personality traits. Showcase accomplishments, professional insights, personal stories, and any unique qualities that set you apart from others.",
  },
  {
    title: "How do personal branding videos create emotional connections?",
    description:
      "Through storytelling, authentic presentation, and relatable content, personal branding videos can evoke emotions and build a sense of connection and trust with the audience. Adding personal anecdotes and genuine expressions can strengthen this bond.",
  },
  {
    title: "What makes a personal branding video appear professional?",
    description:
      "Well-edited and engaging videos are highly shareable on social media platforms. They can attract more views, likes, and shares, increasing your visibility and expanding your reach to a larger audience.",
  },
];

const title = "Personal Branding Video & Photo Services | Fotober US";
const description =
  "Elevate your personal brand with Fotober US' expert video and photo services. Create professional, impactful visuals that boost your online presence.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${process.env.BASE_URL}/personal-branding`,
    images: "/thumb/image_thumb.png",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: "/thumb/image_thumb.png",
  },
};

function PersonalBrandingPage() {
  return (
    <LayoutMain>
      <div className="mt-[-112px]">
        <BannerPage
          videoUrl="/service/personal-branding/video/commercial-video.mp4"
          title="Personal Branding Video Editing"
          textDescription="Enhance your online presence and showcase your unique personality, skills, and story."
        />
      </div>
      <div className="site-content relative pt-4 md:pt-8">
        <div className="container-custom m-auto px-4">
          <div className="mb-5">
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-color-theme font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Personal Branding Editing
            </h2>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              At Fotober US' Personal Branding Editing Services, we enhance your
              public image using advanced video editing techniques like jump
              cuts, smooth transitions, slow-motion effects and color grading.
            </p>
            <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
              Whether you're an entrepreneur, influencer, or professional, we
              align your videos with your brand's vision, creating engaging
              content that reflects your unique identity and resonates with your
              target audience. Let us elevate your personal brand through expert
              video editing.
            </p>
          </div>
          <TitleH3 title="What are the benefits?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            Advertise Your Brand in The Best Light
          </h2>
          <div
            data-test-id="list-description-service"
            className="justify-center flex flex-row max-xl:flex-wrap gap-6 mt-8 mb-8"
          >
            {listContentTop.map((item) => (
              <ServiceStepDescription
                key={item.title}
                description={item.description}
                title={item.title}
                imageIcon={item.icon}
              />
            ))}
          </div>
          <TitleH3 title="What do we do?" />
          <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
            11 Steps to Make a Spectacular Personal Branding Video
          </h2>
          <div className="flex mt-8 md:w-[750px] m-auto flex-row w-full justify-between gap-4 md:gap-5 items-center flex-wrap">
            {Array.from({ length: 6 }).map((item, index) => (
              <div
                key={item?.toString()}
                className="flex flex-col max-md:gap-4 md:flex-row w-full justify-between"
              >
                <div
                  className={twMerge(
                    "flex flex-row items-start gap-4",
                    index === 5 ? "xl:-mt-6" : ""
                  )}
                >
                  <Image alt="Fotober US" src={iconCheck} className="w-[24px]" />
                  <p className="whitespace-pre-line font-[500] text-base text-[#000]">
                    {listStep1[index]?.title}
                  </p>
                </div>
                <div
                  className={twMerge(
                    "flex flex-row items-start gap-4 md:w-[44%] lg:w-[42%]"
                  )}
                >
                  {listStep2[index]?.title ? (
                    <>
                      <Image
                        alt="Fotober US"
                        src={iconCheck}
                        className="w-[24px]"
                      />
                      <p className="whitespace-pre-line font-[500] text-base text-[#000]">
                        {listStep2[index]?.title}
                      </p>
                    </>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="w-full text-center text-[#333333] text-2xl font-semibold my-6" />
        </div>
        <div className="w-full bg-[#E8E8E8]">
          <div className="container m-auto flex flex-col justify-center max-md:px-4 relative">
            <h2 className="text-[#003366] font-extrabold text-lg md:text-[26px] md:leading-11.25 my-0 py-4 md:py-6 text-center">
              WHAT OUR CUSTOMERS ARE RECEIVING…
            </h2>
            <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
              <SessionFactCheckVideo videoId="HWm6OxEUXRA" />
            </div>
          </div>
        </div>
        <div className="w-full bg-white mt-6">
          <WrapListService />
        </div>
        <div className="mt-6 mb-6 bg-[#E8E8E8]">
          <div className="container-custom m-auto px-4">
            <FaqSession
              title="FAQs about Personal Branding Video Editing"
              data={dataFaq}
            />
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
  );
}

export default PersonalBrandingPage;
