import React from 'react';
import Image from 'next/image';

// Import Step Images
import step1Img from './assets/Asset 43.png';
import step2Img from './assets/Asset 46.png';
import step3Img from './assets/Asset 45.png';
import step4Img from './assets/Asset 44.png';
import step5Img from './assets/Asset 42.png';
import step6Img from './assets/Asset 40.png';
import imageBg from './assets/Asset 48.png';
const steps = [
    {
        id: 1,
        title: "STEP 1",
        desc: "Upload securely",
        image: step1Img,
    },
    {
        id: 2,
        title: "STEP 2",
        desc: "Instant deadline confirmation",
        image: step2Img,
    },
    {
        id: 3,
        title: "STEP 3",
        desc: "Routed to your dedicated editor",
        image: step3Img,
    },
    {
        id: 4,
        title: "STEP 4",
        desc: "Senior Editor + Final QA review",
        image: step4Img,
    },
    {
        id: 5,
        title: "STEP 5",
        desc: "Morning delivery",
        image: step5Img,
    },
    {
        id: 6,
        title: "STEP 6",
        desc: "Automated US billing",
        image: step6Img,
    },
];

const Hexagon = ({ isActiveUp, image, title, desc, index }: { isActiveUp: boolean, image: any, title: string, desc: string, index: number }) => {
    // Determine odd/even for alternating pattern
    const isOdd = (index + 1) % 2 !== 0;

    return (
        <div 
            className={`relative flex flex-col items-center justify-center h-[90px] md:h-[280px] first:ml-0 ${!isOdd ? 'mt-[35px] md:mt-[120px] ' : ''}`}
            style={{ zIndex: index  }}
        >
            {/* Label Top (for Odd steps with Bottom Border) */}
            {isOdd && (
                <div className="text-center absolute -top-8 md:-top-10 w-20 md:w-48 flex flex-col items-center group cursor-default z-20">
                    <p className="font-bold text-[#003366] text-[8px] md:text-base leading-tight">{title}</p>
                    <p className="text-gray-600 text-[8px] md:text-sm max-w-[60px] md:max-w-[150px] font-bold leading-tight">{desc}</p>
                    {/* <div className="w-[1px] h-8 bg-[#003366] mt-2 transition-all duration-300 group-hover:h-12"></div> */}
                </div>
            )}

            {/* Hexagon Container - Image Replacement */}
            <div className="relative z-10 w-[55px]  md:w-auto"> 
                
                <div className="transform transition-transform duration-300 ">
                    <Image 
                        src={image} 
                        alt={title} 
                        className="drop-shadow-[10px_35px_10px_rgba(0,0,0,0.25)] "
                    />
                </div>
            </div>

            {/* Label Bottom (for Even steps with Top Border) */}
            {!isOdd && (
                <div className="text-center absolute -bottom-10 md:-bottom-10 w-20 md:w-48 flex flex-col items-center group cursor-default z-20">
                    <p className="font-bold text-[#003366] text-[8px] md:text-base leading-tight">{title}</p>
                    <p className="text-gray-600 text-[8px] md:text-sm max-w-[60px] md:max-w-[150px] font-bold leading-tight">{desc}</p>
                </div>
            )}
        </div>
    );
}

const StepProcessSection = () => {
    return (
        <section 
            className="py-24 bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: `url('${imageBg.src}')` , backgroundSize: '50%'}}
        >
            <div className="container mx-auto px-4">
                {/* Headers */}
                <div className="text-center mb-20">
                    <h2 className="!text-5xl !md:text-5xl font-[700]text-[#003366] mb-4">
                        6-Step Process
                    </h2>
                    <h3 className="text-xl md:text-3xl font-bold text-black">
                        From Upload to Delivery — Without You Chasing Anyone
                    </h3>
                </div>

                {/* Steps Visual Chain */}
                <div className="w-full md:overflow-visible">
                    <ol className="flex flex-row justify-between md:justify-center items-center w-full  mx-auto list-none p-0 px-2 md:px-0">
                        {steps.map((step, index) => (
                            <li key={step.id} className="relative ml-[-6px] md:ml-[-20px] first:ml-0 flex-shrink-0 md:flex-shrink">
                                <Hexagon 
                                    isActiveUp={(index + 1) % 2 === 0} 
                                    image={step.image}
                                    title={step.title}
                                    desc={step.desc}
                                    index={index}
                                    
                                />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    );
};

export default StepProcessSection;
