import BannerPage from "@/app/components/BannerPage";
import BeforeAfterImageSlide from "@/app/components/BeforeAfterImageSlide";
import FaqSession from "@/app/components/FaqSession";
import LayoutMain from "@/app/components/layout/main";
import ServiceStepDescription from "@/app/components/ServiceStepDescription";
import TitleH3 from "@/app/components/TitleH3";
import WrapListService from "@/app/components/WrapListService";
import SessionSlideVirtualRenovation from "@/app/services/virtual-renovation/SessionSlideVirtualRenovation";
import type { Metadata } from "next";
import React from "react";
import iconPen from "@/app/assets/icons/pen.png";
import iconDollar from "@/app/assets/icons/icon-dolar.png";
import iconStar from "@/app/assets/icons/star.png";
import iconEyes from "@/app/assets/icons/eye.png";
import iconLight from "@/app/assets/icons/light.png";
import bannerBg from "./assets/banner.jpg";
import SessionUnderConsiderationWithMockContent from "@/app/components/SessionUnderConsiderationWithMockContent";
import { dataMockSessionUnderConsideration } from "@/app/utils/ultils";

const listContentTop = [
  {
    icon: iconPen,
    title: "Instant Makeover Magic",
    description:
      "Transform dull spaces into dreamy ones without real-world construction hassles.",
  },
  {
    icon: iconDollar,
    title: "Cost-Saving \nUpgrade",
    description: "Enjoy stunning renovations without breaking the bank.",
  },
  {
    icon: iconStar,
    title: "Tailored to Your \nTastes",
    description:
      "Customize every detail to match your unique style and preferences.",
  },
  {
    icon: iconEyes,
    title: "Sell Faster, Sell \nBetter",
    description:
      "Make your listing stand out, attracting more buyers and increasing your chances of a top-dollar sale.",
  },
  {
    icon: iconLight,
    title: "Dream Big, \nDream Bold",
    description:
      "Turn your property into the ultimate fantasy pad, with endless exciting possibilities.",
  },
];

const listContentBeforeAfter = [
  {
    title: "Add/Remove Walls/Objects/Blemises",
    before:
      "/service/virtual-renovation/list-step/01/MVIMG_20200411_152822-2-1-scaled.jpg",
    after:
      "/service/virtual-renovation/list-step/01/MVIMG_20200411_152822_Final-2-1-scaled.jpg",
  },
  {
    title: "Replace Flooring\n",
    before:
      "/service/virtual-renovation/list-step/02/2019-02-28-Decimmo-Mol-Molderdijk113-Foto-15-1-scaled.jpg",
    after:
      "/service/virtual-renovation/list-step/02/2019-02-28-Decimmo-Mol-Molderdijk113-Foto-15_Final-1-scaled.jpg",
  },
  {
    title: "Change Ceiling\n",
    before:
      "/service/virtual-renovation/list-step/03/2019-10-01-Copandi-Lier-Berlaarsesteenweg-130-gevels-en-stallen-Foto06-1-scaled.jpg",
    after:
      "/service/virtual-renovation/list-step/03/2019-10-01-Copandi-Lier-Berlaarsesteenweg-130-gevels-en-stallen-Foto06_Final-1-scaled.jpg",
  },
  {
    title: "Add Fixtures (doors, windows, fireplace)",
    before: "/service/virtual-renovation/list-step/04/Complete-15-1-scaled.jpg",
    after:
      "/service/virtual-renovation/list-step/04/Complete-15_Final-02-1-scaled.jpg",
  },
  {
    title: "Virtual Kitchen Remodel\n",
    before:
      "/service/virtual-renovation/list-step/05/20210913-MAR-Daniel-Wu-Design-and-Rendering-3-1-scaled.jpg",
    after:
      "/service/virtual-renovation/list-step/05/20210913-MAR-Daniel-Wu-Design-and-Rendering-3_Final-1-scaled.jpg",
  },
  {
    title: "Add Deck/Pool\n",
    before: "/service/virtual-renovation/list-step/06/05-Bent-Tree-1.jpg",
    after:
      "/service/virtual-renovation/list-step/06/05-Bent-Tree_Final-02-1.jpg",
  },
  {
    title: "Virtual Landscaping\n",
    before:
      "/service/virtual-renovation/list-step/07/20210712a-MLS-4951-NC-Highway-43-Greenville-MLS-4_Final-02-1-scaled.jpg",
    after:
      "/service/virtual-renovation/list-step/07/20210712a-MLS-4951-NC-Highway-43-Greenville-MLS-4-1-scaled.jpg",
  },
];

const title = "Reimagine Your Property with Virtual Renovation Service";
const description =
  "Help buyers fall in love with your listings by turning vacant rooms into stylish spaces with our Virtual Staging service. Enhance your property listings.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: `${process.env.BASE_URL}/virtual-renovation`,
    images: "/thumb/image_thumb.png",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: `${process.env.BASE_URL}/thumb/image_thumb.png`,
  },
};

const dataFaq = [
  {
    title: "What is virtual renovation?",
    description:
      "Virtual renovation is the process of digitally enhancing property photos to simulate renovations or upgrades. It allows homeowners and real estate professionals to visualize potential improvements without the need for physical construction.",
  },
  {
    title: "How does virtual renovation work?\n",
    description:
      "Virtual renovation involves using specialized software to edit property photos, adding or altering elements such as furniture, fixtures, paint colors, and finishes to create a desired look.\n",
  },
  {
    title: "Can virtual renovation be used for all types of properties?\n",
    description:
      "Yes, virtual renovation can be applied to various types of properties, including residential homes, commercial spaces, and vacant land. It is particularly useful for properties in need of updates or renovations before sale or rental.",
  },
  {
    title: "Can virtual renovation be reversed or undone?\n",
    description:
      "Yes, virtual renovation edits are reversible and can be easily adjusted or removed as needed. This flexibility allows for experimentation with different design options and ensures that the final result meets the client's preferences.",
  },
  {
    title:
      "Can virtual renovation be used for properties that are already furnished?\n",
    description:
      "Yes, virtual renovation can be used to update or modify existing furnishings, decor, and finishes in properties that are already furnished. It can help refresh the look of a space and showcase potential improvements to buyers or renters",
  },
  {
    title:
      "What is the difference between virtual renovation and virtual remodeling?\n",
    description:
      "Virtual Renovation: It's like giving a makeover to your home in pictures. You can change things like colors, furniture, and small details to make the place look nicer, but you're not changing the actual structure of the house.\n" +
      "Virtual Remodeling: This is like major surgery for your home—but in pictures! You can rearrange rooms, knock down walls, and make big changes to how the house looks and functions. It's like completely redesigning the layout and style of your home, but all in the virtual world.\n",
  },
];

function VirtualRenovationPage() {
  return (
    <>
      <LayoutMain>
        <div className="mt-[-112px]">
          <BannerPage
            title="Virtual Renovation"
            textDescription="Showcase potential transformations and renovations through realistic visuals that help buyers envision the possibilities."
            imageBg={bannerBg}
          />
        </div>
        <div className="site-content relative pt-[1rem] md:pt-[2rem]">
          <div className="container-custom m-auto px-4">
            <div className="mb-5">
              <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
                Virtual Renovation
              </h2>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                At Fotober US Virtual Renovation Services, we bring your
                renovation plans to life with 3D modeling, texture mapping, and
                realistic lighting effects.
              </p>
              <p className="text-base text-justify text-[#000] max-w-[800px] m-auto mt-1">
                Whether it’s a major overhaul or a simple update, our service
                provides detailed visualizations of your project, allowing you
                to preview materials, layouts, and finishes. This helps save
                time, reduce costs, and eliminate uncertainty by offering a
                clear, realistic vision before any work begins.
              </p>
            </div>
            <TitleH3 title="What are the benefits?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              Upgrade your Houses in No Time
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
                  wrapClassName="xl:w-[20%]"
                  imageIcon={item.icon}
                />
              ))}
            </div>
            <TitleH3 title=" What do we do?" />
            <h2 className="w-full text-wrap text-center uppercase font-montserrat text-[#043263] font-extrabold text-lg md:text-[23px] md:leading-[45px] my-0">
              7 Steps to Visualize the Dream Home
            </h2>
            <div className="flex flex-row flex-wrap justify-between items-center mt-8 gap-10">
              {listContentBeforeAfter.map((item, index) => (
                <div
                  key={item.title}
                  className="flex flex-row w-full md:w-[46%] items-center justify-between relative"
                >
                  <div className="w-full xl:min-h-[450px] flex flex-col gap-3">
                    <h4 className="font-montserrat text-[#043263] text-base lg:text-lg 2xl:text-xl font-bold xl:whitespace-nowrap">
                      {index + 1}. {item.title}
                    </h4>
                    <BeforeAfterImageSlide
                      afterImageUrl={item.before}
                      beforeImageUrl={item.after}
                    />
                  </div>
                  {index % 2 === 0 && (
                    <div className="min-w-[2px] xl:min-w-[4px] absolute bg-black h-[60%] right-[-9%]" />
                  )}
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
              <div className="w-full xl:w-[80%] mb-4 lg:mb-6 m-auto">
                <SessionSlideVirtualRenovation />
              </div>
            </div>
          </div>
          <div className="w-full bg-white mt-6">
            <WrapListService />
          </div>
          <div className="mt-6 mb-6 bg-[#E8E8E8]">
            <div className="container-custom m-auto px-4">
              <FaqSession
                title="FAQs about Virtual Renovation"
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
    </>
  );
}

export default VirtualRenovationPage;
