"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";


const servicesData =[
    {
        num: 1,
        title: "Smart Contract Development",
        description: "Design and implement secure and efficient smart contracts for various blockchain platforms.",
        href: "/services/smart-contract-development"
    },
    {
        num: 2,
        title: "UI Development",
        description: "Design and implement user interfaces that are intuitive and user-friendly.",
        href: "/services/ui-development"
    },
    {
        num: 3,
        title: "Blockchain Integration",
        description: "Integrate blockchain technology into existing applications for enhanced security and transparency.",
        href: "/services/blockchain-integration"
    },
    {
        num: 4,
        title: "Web Development",
        description: "Design and implement secure and efficient web applications using modern frameworks and technologies.",
        href: "/services/web-development"
    },

]

const ServicesPage = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 -mt-20 xl:mt-0">
            <div className="container mx-auto">
                <motion.div 
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1, transition: { delay:1.1, duration: 0.4, ease: "easeIn" } }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px] px-5 xl:px-0">
                    {servicesData.map((service, index) => {
                        return (
                            <div key={index} 
                                className="flex-1 flex flex-col justify-center gap-6 group">

                                {/* top */}
                                <div className="w-full flex justify-between items-center">
                                    <div className="text-5xl font-extrabold text-white group-hover:text-[#00ff99] transition-all duration-500">{service.num}</div>
                                    <Link href={service.href} 
                                    className="w-[70px] h-[70px] rounded-full bg-white hover:bg-[#00ff99] transition-all duration-500 flex items-center justify-center hover:-rotate-45" >
                                        <BsArrowDownRight className="text-primary text-xl"></BsArrowDownRight>
                                    </Link>
                                </div>
                                {/* title */}
                                <h2 className="text-5xl font-extrabold text-white group-hover:text-[#00ff99] transition-all duration-500">{service.title}</h2>

                                {/* description */}
                                <p className="text-white/60">{service.description}</p> 

                                {/* border */}
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