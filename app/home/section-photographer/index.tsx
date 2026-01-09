import React from 'react';
import Image from 'next/image';

// Import assets from home/assets
import img1 from '../assets/banner.png';
import img2 from '../assets/Asset 3.png';
import img3 from '../assets/Asset 4.png';
import img4 from '../assets/DSC00808.png';
import img5 from '../assets/23_done.png';
import img6 from '../assets/DSC00758-(1).png';

const features = [
    {
        id: 1,
        text: "Reduce Costs by 60–70% vs In-House",
        image: img1,
        isTextTop: false
    },
    {
        id: 2,
        text: "Eliminate Foreign Transaction Fees",
        image: img2,
        isTextTop: true
    },
    {
        id: 3,
        text: "Scale Effortlessly from 1 to 100+ Listings per Day",
        image: img3,
        isTextTop: false
    },
    {
        id: 4,
        text: "Operate Across Markets (US & Vietnam)",
        image: img4,
        isTextTop: true
    },
    {
        id: 5,
        text: "Maintain Consistency with Dedicated Editor",
        image: img5,
        isTextTop: false
    },
    {
        id: 6,
        text: "Stay Compliant with AI & Data",
        image: img6,
        isTextTop: true
    },
];

const SectionPhotographer = () => {
    return (
        <section className="w-full bg-[#003366] py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
                    Why Professional Photographers Choose Fotober US LLC?
                </h2>
                
                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0">
                    {features.map((feature) => (
                        <div key={feature.id} className={`flex h-full ${!feature.isTextTop ? 'flex-col-reverse md:flex-col' : 'flex-col'}`}>
                            {/* Top Block */}
                            <div className="flex-1 min-h-[200px] relative flex items-center justify-center">
                                {feature.isTextTop ? (
                                    <div className="p-6 flex items-center justify-center h-full w-full bg-[#003366]">
                                        <p className="text-white text-center font-medium text-lg leading-snug">
                                            {feature.text}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full min-h-[200px]">
                                        <Image
                                            src={feature.image}
                                            alt={feature.text}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16vw"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Bottom Block */}
                            <div className="flex-1 min-h-[200px] relative flex items-center justify-center">
                                {!feature.isTextTop ? (
                                    <div className="p-6 flex items-center justify-center h-full w-full bg-[#003366]">
                                        <p className="text-white text-center font-medium text-lg leading-snug">
                                            {feature.text}
                                        </p>
                                    </div>
                                ) : (
                                    <div className="relative w-full h-full min-h-[200px]">
                                        <Image
                                            src={feature.image}
                                            alt={feature.text}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 16vw"
                                        />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SectionPhotographer;
