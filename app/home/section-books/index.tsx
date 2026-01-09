import React from 'react';
import Image from 'next/image';
import bookImage from '../assets/DSC00758-(1).png'; 
import iconLogo from './assets/Asset 5.png';
const SectionBooks = () => {
    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
                    
                    {/* Left Column: Image with Decoration */}
                    <div className="w-full md:w-1/2 relative">
                        {/* Decorative Blue Box (L-shape simulation or background rect) */}
                        <div className="absolute -top-6 -left-6 w-32 h-32 md:w-48 md:h-48 bg-[#003366] -z-10"></div>
                        <div className="absolute top-[-24px] left-[-24px] w-[calc(100%-20px)] h-[calc(100%-20px)] border-l-[20px] border-t-[20px] border-[#003366] hidden"></div> 
                        {/* More accurate CSS L-shape based on image */}
                        <div className="hidden md:block absolute -top-10 -left-10 w-40 h-40 border-l-[30px] border-t-[30px] border-[#003366] z-0"></div>
                        
                        <div className="relative z-10 w-full aspect-[4/3] shadow-lg">
                            <Image
                                src={bookImage}
                                alt="Fotober US LLC Office Interior"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[#003366] font-bold text-2xl md:text-3xl mb-2 uppercase tracking-wide">
                            FOTOBER US LLC
                        </h2>
                        <h3 className="text-[#003366] font-bold text-3xl md:text-4xl leading-tight mb-8">
                            A Vendor You Can Put on Your Books <br className="hidden lg:block"/>
                            — And Sleep Well At Night
                        </h3>

                        <div className="space-y-4">
                            <ListItem label="Legal Entity" value="Fotober US LLC" />
                            <ListItem label="Structure" value="Limited Liability Company" />
                            <ListItem label="State" value="Wyoming, USA" />
                            <ListItem label="EIN" value="Verified" />
                            <ListItem label="Business Purpose" value="Digital Photo & Video Editing" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Reusable List Item with Icon
const ListItem = ({ label, value }: { label: string, value: string }) => (
    <div className="flex  items-center gap-3">
        {/* Custom Icon mimicking the blue aperture/gear in the image */}
        <div className="flex-shrink-0 mt-1">
           <Image 
           src={iconLogo}
           alt='iconlogo'
           />
        </div>
        <p className="text-black font-bold text-lg md:text-xl">
            {label}: <span className="font-semibold text-black">{value}</span>
        </p>
    </div>
);

export default SectionBooks;
