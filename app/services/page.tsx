"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
// Import the centralized services data
import { servicesData } from "@/src/constants/services";

const ServicesPage = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 -mt-20 xl:mt-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0}}
                    // Performance Fix: Reduced delay from 1.1 to 0.2 to keep FCP fast
                    animate={{ opacity: 1, transition: { delay: 0.2, duration: 0.4, ease: "easeIn" } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px] px-5 xl:px-0">
                    {servicesData.map((service, index) => {
                        return (
                            <div key={index} 
                                className="flex-1 flex flex-col justify-center gap-6 group">

                                {/* Top section with number and link */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-white group-hover:text-[#00ff99] transition-all duration-500">
                                        {service.num}
                                    </div>
                                    {/* A11y Fix: Added dynamic aria-label so screen readers know where the link goes */}
                                    <Link href={`/services/${service.slug}`} 
                                        aria-label={`View ${service.title} service details`}
                                        className="w-[70px] h-[70px] rounded-full bg-white hover:bg-[#00ff99] transition-all duration-500 flex items-center justify-center hover:-rotate-45" >
                                        <BsArrowDownRight className="text-primary text-xl"></BsArrowDownRight>
                                    </Link>
                                </div>
                                
                                {/* Title */}
                                <h2 className="text-5xl font-extrabold text-white group-hover:text-[#00ff99] transition-all duration-500">
                                    {service.title}
                                </h2>

                                {/* Short description */}
                                <p className="text-white/60">{service.description}</p> 

                                {/* Border divider */}
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default ServicesPage;