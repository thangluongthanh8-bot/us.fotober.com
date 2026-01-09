
import Image from 'next/image';
import photoEditingImg from './assets/Asset 52.png';
import videoEditingImg from './assets/Asset 53.png';
import virtualStagingImg from './assets/Asset 54.png';

const services = [
    {
        title: "PHOTO EDITING SERVICES",
        image: photoEditingImg,
        link: "#"
    },
    {
        title: "VIDEO EDITING SERVICES",
        image: videoEditingImg,
        link: "#"
    },
    {
        title: "VIRTUAL STAGING & ARCHITECTURE DESIGN",
        image: virtualStagingImg,
        link: "#"
    }
];

const SectionServices = () => {
    return (
        <section className="w-full py-20 container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0B2545] mb-4">
                    Editing Services Built for US Listings
                </h2>
                <p className="text-[#5B6B7C] text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    Premium photo and video editing designed to meet MLS standards, agent expectations, and modern marketing needs.
                </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center w-full mx-auto mb-16">
                {services.map((service, index) => (
                    <div key={index} className="relative group rounded-lg overflow-hidden  aspect-[3/4] cursor-pointer">
                        {/* Background Image */}
                        <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-500 "
                        />

                        {/* Content */}
                        <div className="absolute bottom-20 left-13 text-white">
                            <h3 className="text-xl md:text-2xl font-bold mb-4 uppercase leading-tight max-w-[80%] drop-shadow-[3px_4px_10px_rgba(0,0,0,0.8)]">
                                {service.title}
                            </h3>
                            <button className="bg-[#003366] hover:bg-[#003366] text-white text-xs font-bold py-2 px-6 rounded uppercase tracking-wider transition-colors shadow-lg">
                                View More
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Button */}
            <div className="text-center">
                <button className="bg-[#003366] hover:bg-[#003366] text-white font-bold text-lg py-3 px-5 rounded-md transition-colors shadow-md">
                    View Full Service Menu
                </button>
            </div>
        </section>
    );
}

export default SectionServices;