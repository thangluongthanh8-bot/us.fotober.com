import React from 'react';
import Image from 'next/image';
import officeImage from '../assets/outsourcing.png'; // Placeholder: verify if this is the correct office image
import iconlogo from "./assets/Asset 1.png"
const points = [
    "You upload at the end of your US business day",
    "Our Vietnam production team edits overnight (12 AM – 7 AM EST)",
    "Our US support team finalizes delivery before your morning",
    "The result is a seamless, 24-hour production cycle — without hiring night staff."
];

const BulletIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="white"/>
        <path d="M12.5 7H11V13L16.25 16.15L17 14.92L12.5 12.25V7Z" fill="white"/>
    </svg>
);

const SectionTimeZone = () => {
    return (
        <section className="bg-[#003366] text-white py-16">
                    <h2 className="container text-center text-3xl md:text-4xl font-bold mb-6 leading-tight tracking-wider">
                        How We Turn Time Zones Into Your Competitive Advantage
                    </h2>
            <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
                
                {/* Left Column: Text Content */}
                <div className="w-full lg:w-1/2">
                    
                    <p className="text-base md:text-lg text-gray-300 italic mb-8 leading-relaxed">
                        By leveraging the 12–13 hour time difference between the US and Vietnam, we’ve built a continuous editing operation:
                    </p>

                    <div className="space-y-6">
                        {points.map((point, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <Image 
                                src={iconlogo}
                                alt="Bullet Icon"
                                />
                                <p className="text-base md:text-lg font-medium leading-relaxed">
                                    {/* Bold highlight logic if needed, currently plain text based on array */}
                                    {/* If dynamic bolding is needed, we can parse the string or use objects */}
                                    {point}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="w-full lg:w-1/2">
                    <div className="relative w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-2xl">
                        <Image
                            src={officeImage}
                            alt="Vietnam Production Team Office"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}

export default SectionTimeZone;