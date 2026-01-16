import React from "react";
import Image from "next/image";
import bgImage from "./assets/Asset 51.png";

const reasons = [
  {
    title: (
      <>
        Your Night Shift <br /> Without Hiring a Night Team
      </>
    ),

    description: `While you sleep, our Vietnam production team works.
By morning, your photos and videos are edited, QC-checked, and delivery-ready.`,
  },
  {
    title: (
      <>
        US-Based Payments That <br /> Accounting Loves
      </>
    ),
    description: "Pay Fotober the same way you pay any US service provider.",
  },
  {
    title: (
      <>
        Compliance That Scales <br /> With You
      </>
    ),
    description: "Built to meet brokerage, MLS, and enterprise requirements.",
  },
  {
    title: (
      <>
        A Partner You Don’t Have <br /> to Chase
      </>
    ),
    description:
      "We operate as a real company — not a collection of freelancers.",
  },
];

const bottomReasons = [
  {
    title: (
      <>
        Optimised Operating <br /> Structure
      </>
    ),
    description: `US Team: Account management, billing, legal, customer success
Vietnam Team: Editing, video production, QA, R&D
`,
  },
  {
    title: (
      <>
        Tax & Financial <br /> Clarity
      </>
    ),
    description:
      "Paying a US LLC simplifies expense classification and audits.",
  },
  {
    title: (
      <>
        Speed That Protects <br /> Your Listings
      </>
    ),
    description: "Fast turnaround plus real-time communication.",
  },
];

const SectionWhyLLC = () => {
  return (
    <section className="relative w-full py-20 bg-[#0B2545] text-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      <div className="w-auto mx-auto px-4 relative z-20 text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-bold mb-4 uppercase tracking-wide">
          Why Fotober US LLC Exists
        </h2>
        <h3 className="text-xl md:text-3xl font-semibold mb-6">
          Serious Studios Don’t “Outsource”— They Operationalize
        </h3>
        <p className="max-w-4xl mx-auto text-base md:text-1xl text-gray-300 italic mb-16 px-4">
          Fotober US was built to merge Vietnam’s production efficiency with
          US-level accountability.
          <br className="hidden md:block" />
          This is not a marketplace - It’s a managed operation.
        </p>

        {/* Grid - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {reasons.map((item, index) => (
            <div
              key={index}
              className="border border-white rounded-2xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between min-h-[180px]"
            >
              <h4 className="font-bold text-lg mb-3 leading-tight">
                {item.title}
              </h4>
              <p className="text-sm h-full text-gray-200 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Grid - Bottom Row (Centered) */}
        <div className="flex flex-wrap justify-center gap-6">
          {bottomReasons.map((item, index) => (
            <div
              key={index}
              className="w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] border border-white max-w-sm lg:max-w-none rounded-2xl p-6 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 flex flex-col justify-center min-h-[180px]"
            >
              <h4 className=" h-14 font-bold text-lg mb-3 leading-tight">
                {item.title}
              </h4>
              <p className="text-sm text-gray-200 leading-relaxed font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionWhyLLC;
