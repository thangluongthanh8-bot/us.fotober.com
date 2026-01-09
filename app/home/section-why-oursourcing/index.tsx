import Image from 'next/image'
import outsourcingImage from '../assets/outsourcing.png'

const SectionWhyOutsourcing = () => {
    return (
        <div className="w-full py-16 px-4 container mx-auto">
            {/* Header Section */}
            <div className="">
                <h2 className="text-3xl md:text-5xl lg:text-5xl font-extrabold text-[#003366]  leading-tight">
                    Why Outsourcing Feels Like It Should Work <br className="hidden md:block" />
                    — BUT RARELY DOES
                </h2>
            </div>

            {/* Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Side - Image */}
                <div className="relative w-full  rounded-lg ">
                <p className="text-lg md:text-1xl text-black max-w-3xl my-5">
                    Outsourcing editing isn't the problem. <br className="hidden md:block" />
                    Lack of control, accountability, and operational structure is.
                </p>
                    <Image
                        src={outsourcingImage}
                        alt="City Skyline"
                        className="object-cover h-auto "
                    />
                </div>

                {/* Right Side - Problem Cards */}
                <div className="flex flex-col justify-between  gap-4">
                    <ProblemCard
                        number="1"
                        title="The Time Zone Gap"
                        description="When It's Urgent for You, It's Tomorrow for Them"
                    />
                    <ProblemCard
                        number="2"
                        title="Payment Friction"
                        description="Paying Your Editor Shouldn't Feel Risky or Complicated"
                    />
                    <ProblemCard
                        number="3"
                        title="Trust & Compliance Risk"
                        description="Freelancers Don't Come With Accountability"
                    />
                </div>
            </div>
        </div>
    )
}

const ProblemCard = ({ number, title, description }: { number: string, title: string, description: string }) => {
    return (
        <div className="bg-[#003366] text-white p-6 md:p-8 relative flex flex-col justify-center min-h-[140px] shadow-lg group transition-transform hover:-translate-y-1 duration-300">
            {/* Arrow Icon - Bottom Right */}
            <div className="absolute bottom-4 right-4">
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="stroke-current stroke-[3] w-6 h-6 md:w-8 md:h-8"
                >
                     <path d="M17 7V17M17 17H7M17 17L7 7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-2">
                PROBLEM {number}: {title}
            </h3>
            <p className="text-base md:text-lg text-gray-200 pr-8">
                {description}
            </p>
        </div>
    )
}

export default SectionWhyOutsourcing
