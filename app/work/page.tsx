"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import  { BsArrowUpRight, BsGithub } from "react-icons/bs";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import WorkSliderButtons from "@/components/workSliderBotons";


const projects =[
        {
        num: "01",
        category: "Blockchain Development",
        title: "Chat Dapp",
        description: "A decentralized chat app where users can easily connect their wallet and perform actions like creating an account, adding friends, and sending messages. All interactions are securely stored on the blockchain and optimized to minimize transaction costs. The interface is fast, clean, and designed for a smooth user experience.",
        video: "/assets/chatDapp.mp4", // Ruta de tu video
        stack: [{name: "Solidity"}, {name: "Hardhat"}, {name: "Ethers.js"}, {name: "web3.js"}, {name: "Next.js"}, {name: "TailwindCSS"}],
        live: "",
        github: "https://github.com/alejoalonzo/ChatDApp"
    },
    {
        num: "02",
        category: "Frontend Development",
        title: "Weather App",
        description: "Modern UI weather application featuring sleek design and real-time weather data integration through external API.",
        image: "/assets/weatherApp.jpg",
        stack:[{name: "Angular 15"}, {name: "TypeScript"}, {name: "SASS"}],
        live: "https://alejoalonzo.github.io/WeatherApp/",
        github: "https://github.com/alejoalonzo/WeatherApp"
    },
    {
        num: "03",
        category: "Full Stack Development",
        title: "E-Commerce App",
        description: "Robust e-commerce platform using MEAN stack architecture with Nx monorepo structure and Angular PrimeNG components.",
        image: "/assets/lionApp.jpg",
        stack:[{name: "Angular 15"}, {name: "TypeScript"}, {name: "SASS"}, {name: "Nx"}, {name: "Node.js"}, {name: "Express"}, {name: "MongoDB"}],
        live: "",
        github: "https://github.com/alejoalonzo/EC-eshopMEAN-FrontEnd-AdminPanelAndNgShop"
    },

]

const WorkPage = () => {
    const [project, setProject] = useState(projects[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
        setIsPlaying(false); // Reset play state on slide change
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsPlaying(true);
        }
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
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
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger
                                            className={`w-[70px] h-[70px] rounded-full bg-white/5 flex items-center justify-center hover:-rotate-45 transition-all duration-500 group ${
                                                !project.live
                                                    ? "opacity-50 cursor-not-allowed"
                                                    : "hover:bg-[#00ff99]"
                                            }`}
                                            asChild
                                        >
                                            <span>
                                                <Link
                                                    href={project.live || "#"}
                                                    target="_blank"
                                                    tabIndex={project.live ? 0 : -1}
                                                    aria-disabled={!project.live}
                                                    className="inline-flex items-center gap-2 text-white hover:text-[#00ff99] transition-all duration-500"
                                                    onClick={e => {
                                                        if (!project.live) e.preventDefault();
                                                    }}
                                                >
                                                    <BsArrowUpRight className="text-2xl text-white group-hover:text-black transition-all duration-500" />
                                                </Link>
                                            </span>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-white text-black border-white rounded-md px-3 py-2" sideOffset={5}>
                                            <p>
                                                {project.live
                                                    ? "See project live"
                                                    : "No live version available"}
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
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
                            className="xl:h-[520px] mb-12 relative" // <-- Añade relative aquí
                            onSlideChange={handleSlideChange}>
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div
                                            className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 md:rounded-2xl xl:rounded-2xl slider-border-accent"
                                        >
                                            {/* overlay */}
                                            <div className="absolute top-0 bottom-0 w-full h-full bg-black/30 z-0 md:rounded-2xl xl:rounded-2xl"></div>
                                            {/* image or video  */}
                                            <div className="relative w-full h-full flex items-center justify-center z-10 md:rounded-2xl xl:rounded-2xl overflow-hidden">
                                                {project.video ? (
                                                    <div className="w-full h-full relative flex items-center justify-center">
                                                        <video
                                                            ref={videoRef}
                                                            className="object-contain md:object-cover w-full h-full md:rounded-2xl xl:rounded-2xl"
                                                            style={{ maxHeight: "100%", maxWidth: "100%" }}
                                                            controls={isPlaying}
                                                            onEnded={handleVideoEnded}
                                                            onPause={() => setIsPlaying(false)}
                                                            onPlay={() => setIsPlaying(true)}
                                                        >
                                                            <source src={project.video} type="video/mp4" />
                                                            Tu navegador no soporta la reproducción de video.
                                                        </video>
                                                        {!isPlaying && (
                                                            <>
                                                                <div className="absolute inset-0 bg-black/60 z-10 md:rounded-2xl xl:rounded-2xl"></div>
                                                                <button
                                                                    onClick={handlePlay}
                                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center focus:outline-none z-20" // <-- Centrado absoluto
                                                                    aria-label="Play video"
                                                                    type="button"
                                                                >
                                                                    <span className="flex items-center justify-center w-16 h-16 bg-white bg-opacity-90 rounded-full shadow-lg hover:scale-105 transition-transform">
                                                                        <svg width="32" height="32" viewBox="0 0 32 32" className="ml-1">
                                                                            <polygon points="10,7 26,16 10,25" fill="black" />
                                                                        </svg>
                                                                    </span>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                ) : project.image ? (
                                                    <Image
                                                        src={project.image}
                                                        alt={project.title}
                                                        fill
                                                        className="object-cover md:rounded-2xl xl:rounded-2xl"
                                                    />
                                                ) : null}
                                            </div>
                                            {/* Botones del slider alineados verticalmente */}
                                            <WorkSliderButtons 
                                                containerStyles="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-between w-full z-20 pointer-events-none"
                                                buttonStyles="bg-[#00ff99] hover:bg-[#00cc7a] text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all pointer-events-auto"
                                                iconStyles=""
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default WorkPage;


