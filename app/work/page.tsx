"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import  { BsArrowUpRight, BsGithub } from "react-icons/bs";
import React, { useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import WorkSliderButtons from "@/components/workSliderBotons";


const projects =[
    {
        num: "01",
        category: "Frontend Development",
        title: "Weather App",
        description: "Modern UI weather application featuring sleek design and real-time weather data integration through external API.",
        image: "/assets/weatherApp.jpg",
        stack:[{name: "Angular 15"}, {name: "TypeScript"}, {name: "SASS"}],
        live: "https://alejoalonzo.github.io/WeatherApp/",
        github: "https://github.com/alejoalonzo/WeatherApp"
    },
    {
        num: "02",
        category: "Full Stack Development",
        title: "E-Commerce App",
        description: "Robust e-commerce platform using MEAN stack architecture with Nx monorepo structure and Angular PrimeNG components.",
        image: "/assets/lionApp.jpg",
        stack:[{name: "Angular 15"}, {name: "TypeScript"}, {name: "SASS"}, {name: "Nx"}, {name: "Node.js"}, {name: "Express"}, {name: "MongoDB"}],
        live: "",
        github: "https://github.com/alejoalonzo/EC-eshopMEAN-FrontEnd-AdminPanelAndNgShop"
    },
    {
        num: "03",
        category: "Frontend Development",
        title: "ChatBot App",
        description: "Interactive chatbot application powered by OpenAI API integration, delivering intelligent conversational experiences.",
        image: "/assets/chatGPT1.jpg",
        stack: [{name: "Angular 15"}, {name: "TypeScript"}, {name: "SASS"}],
        live: "",
        github: "https://github.com/alejoalonzo/ChatGPT"
    },
]

const WorkPage = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.5, ease: "easeIn" } }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 -mt-20 xl:mt-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-1/2 xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none gap-6 xl:gap-0 px-5 xl:px-0">
                        {/* outline number */}
                        <div className="text-8xl leading-none font-extrabold text-transparent" style={{WebkitTextStroke: '1px white'}}>
                            {project.num}
                        </div>
                        {/* category */}
                        <div className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                            {project.category}
                        </div>
                        {/* description */}
                            <p className="text-white/60">{project.description}</p>
                        {/* stack */}
                        <div className="flex flex-wrap gap-2 mt-4">
                            {project.stack.map((item, index) => (
                                <span key={index} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                                    {item.name}
                                </span>
                            ))}
                        </div>
                        {/* border */}
                        <div className="border-b border-white/20 w-full mt-6"></div>
                        {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* Project live */}
                                <Link href={project.live} target="_blank" className="inline-flex items-center gap-2 text-white hover:text-[#00ff99] transition-all duration-500">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 hover:bg-[#00ff99] flex items-center justify-center hover:-rotate-45 transition-all duration-500 group">
                                                <BsArrowUpRight className="text-2xl text-white group-hover:text-black transition-all duration-500"></BsArrowUpRight>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white text-black border-white rounded-md px-3 py-2" sideOffset={5}>
                                                <p>See project live</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>

                                {/* GitHub */}
                                <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 text-white hover:text-[#00ff99] transition-all duration-500">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 hover:bg-[#00ff99] flex items-center justify-center group">
                                                <BsGithub className="text-2xl text-white group-hover:text-black transition-all duration-500"></BsGithub>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-white text-black border-white rounded-md px-3 py-2" sideOffset={5}>
                                                <p>See GitHub repository</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                            <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}>
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/30 z-10">
                                
                                            </div>
                                           {/* image  */}
                                           <div className="relative w-full h-full">
                                                <Image
                                                    src={project.image}
                                                    alt={project.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                           </div>

                                        </div>
                                    </SwiperSlide>
                                ))}
                                {/* botons */}
                                <WorkSliderButtons 
                                    containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                                    buttonStyles="bg-[#00ff99] hover:bg-[#00cc7a] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                                    iconStyles=""
                                />
                            </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default WorkPage;

