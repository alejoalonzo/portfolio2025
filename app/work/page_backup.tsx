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


const projects = [
    {
        num: "01",
        category: "Blockchain DApp",
        title: "Professional Crowdfunding Platform",
        description: "A fully decentralized crowdfunding application built on the blockchain. It features a sleek, modern dashboard to create, edit, and manage fundraising campaigns. Users can also create and remove custom funding tiers, offering a flexible and professional solution for project creators and backers alike.",
        video: "/assets/CrowdFunding.mp4",
        poster: "/assets/RealEstateDapp.jpg",
        stack: [
            {name: "Solidity"},
            {name: "Hardhat"},
            {name: "Ethers.js"},
            {name: "web3.js"},
            {name: "Next.js"},
            {name: "TailwindCSS"}
        ],
        live: "https://crowdfunding-dapp-fawn-sigma.vercel.app/",
        github: "https://github.com/alejoalonzo/CrowdfundingDapp"
    },
    {
        num: "02",
        category: "DeFi - Blockchain Development",
        title: "Real Estate Dapp - Multi-Party Approvals",
        description: "Decentralized purchase flow on Ethereum with on-chain escrow. Integrates MetaMask for ETH payments/signing. The Solidity contract models buyer, seller, inspector, and lender; funds only release after inspector and lender approval. Frontend in Next.js with Ethers.js/Web3, developed and tested using Hardhat.",
        video: "/assets/RealEstateDapp.mp4",
        poster: "/assets/RealEstateDapp.jpg",
        stack:[{name: "Solidity"}, {name: "Hardhat"}, {name: "Ethers.js"}, {name: "web3.js"}, {name: "Next.js"}, {name: "TailwindCSS"}],
        live: "https://real-state-dapp.vercel.app/",
        github: "https://github.com/alejoalonzo/RealStateDapp"
    },
        {
        num: "03",
        category: "Blockchain Development",
        title: "Chat Dapp",
        description: "A decentralized chat app where users can easily connect their wallet and perform actions like creating an account, adding friends, and sending messages. All interactions are securely stored on the blockchain and optimized to minimize transaction costs. The interface is fast, clean, and designed for a smooth user experience.",
        video: "/assets/ChatDapp.mp4",
        poster: "/assets/chatDapp.jpg",
        stack: [{name: "Solidity"}, {name: "Hardhat"}, {name: "Ethers.js"}, {name: "web3.js"}, {name: "Next.js"}, {name: "TailwindCSS"}],
        live: "",
        github: "https://github.com/alejoalonzo/ChatDApp"
    },
    {
        num: "04",
        category: "Frontend Development",
        title: "Weather App",
        description: "Modern UI weather application featuring sleek design and real-time weather data integration through external API.",
        image: "/assets/weatherApp.jpg",
        stack:[{name: "Angular 15"}, {name: "TypeScript"}, {name: "SASS"}],
        live: "https://alejoalonzo.github.io/WeatherApp/",
        github: "https://github.com/alejoalonzo/WeatherApp"
    },


]

const WorkPage = () => {
    const [project, setProject] = useState(projects[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [videoError, setVideoError] = useState(false);
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
        setCurrentVideoIndex(currentIndex);
        setCurrentSlide(currentIndex);
        setIsPlaying(false);
        // Pausa todos los videos
        videoRefs.current.forEach((video) => {
            if (video && !video.paused) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    const handlePlay = () => {
        const currentVideo = videoRefs.current[currentVideoIndex];
        if (currentVideo) {
            setVideoError(false);
            currentVideo.play().catch(() => setVideoError(true));
            setIsPlaying(true);
        }
    };

    const handleVideoError = () => {
        setVideoError(true);
    };

    const handleVideoEnded = () => {
        setIsPlaying(false);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.5, ease: "easeIn" } }}
            className="min-h-screen flex flex-col justify-center py-12 xl:py-24 xl:px-0 relative overflow-hidden"
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ff99]/5 via-transparent to-[#00ff99]/5"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#00ff99]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00ff99]/5 rounded-full blur-3xl"></div>
            
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col xl:flex-row xl:gap-[60px] items-start xl:items-stretch">
                    <div className="w-full xl:w-1/2 flex flex-col order-2 xl:order-none gap-8 xl:gap-6 px-5 xl:px-0">
                        {/* Modern card container for project info */}
                        <div className="bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10 rounded-2xl p-6 xl:p-8 shadow-2xl h-full xl:h-[580px] flex flex-col justify-between">
                            {/* Top section with number, category and title */}
                            <div className="flex-shrink-0">
                                {/* outline number with modern styling */}
                                <div className="relative mb-3">
                                    <div className="text-5xl xl:text-6xl leading-none font-extrabold text-transparent bg-gradient-to-br from-[#00ff99] to-[#00cc7a] bg-clip-text" 
                                         style={{WebkitTextStroke: '1px rgba(0, 255, 153, 0.3)'}}>
                                        {project.num}
                                    </div>
                                    <div className="absolute top-0 left-0 text-5xl xl:text-6xl leading-none font-extrabold text-[#00ff99]/10 blur-sm -z-10">
                                        {project.num}
                                    </div>
                                </div>
                                
                                {/* category with modern badge */}
                                <div className="mb-3">
                                    <span className="inline-block bg-gradient-to-r from-[#00ff99]/20 to-[#00cc7a]/20 text-[#00ff99] px-3 py-1.5 rounded-full text-sm font-medium border border-[#00ff99]/30 backdrop-blur-sm">
                                        {project.category}
                                    </span>
                                </div>
                                
                                {/* title with enhanced styling */}
                                <h2 className="text-xl xl:text-2xl font-bold leading-tight text-white mb-3 bg-gradient-to-r from-white to-[#00ff99] bg-clip-text">
                                    {project.title}
                                </h2>
                            </div>

                            {/* Middle section with description and stack - flexible */}
                            <div className="flex-grow flex flex-col justify-center py-2">
                                {/* description with better typography */}
                                <p className="text-white/80 leading-relaxed text-sm xl:text-base mb-4 font-light line-clamp-4">
                                    {project.description}
                                </p>
                                
                                {/* stack with modern pills */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.stack.map((item, index) => (
                                        <span 
                                            key={index} 
                                            className="bg-gradient-to-r from-white/10 to-white/5 text-white px-3 py-1 rounded-full text-xs border border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 cursor-default"
                                        >
                                            {item.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Bottom section with separator and buttons */}
                            <div className="flex-shrink-0">
                                {/* Modern separator */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent mb-4"></div>
                                
                                {/* Enhanced buttons */}
                                <div className="flex items-center gap-4">
                                {/* Project live button */}
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger asChild>
                                            <Link
                                                href={project.live || "#"}
                                                target="_blank"
                                                tabIndex={project.live ? 0 : -1}
                                                aria-disabled={!project.live}
                                                className={`relative group w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                                    !project.live
                                                        ? "opacity-50 cursor-not-allowed bg-white/5 border border-white/10"
                                                        : "bg-gradient-to-br from-[#00ff99] to-[#00cc7a] hover:from-[#00cc7a] hover:to-[#00ff99] cursor-pointer hover:scale-110 shadow-lg hover:shadow-2xl"
                                                }`}
                                                onClick={e => {
                                                    if (!project.live) e.preventDefault();
                                                }}
                                            >
                                                <BsArrowUpRight className={`text-lg transition-all duration-300 ${
                                                    project.live ? "text-black group-hover:rotate-45" : "text-white"
                                                }`} />
                                            </Link>
                                        </TooltipTrigger>
                                        <TooltipContent className="bg-black/90 backdrop-blur-sm text-white border border-white/20 rounded-lg px-4 py-2 shadow-xl" sideOffset={5}>
                                            <p>
                                                {project.live
                                                    ? "Ver proyecto en vivo"
                                                    : "No hay versión en vivo disponible"}
                                            </p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                                
                                {/* GitHub button */}
                                <Link href={project.github} target="_blank" className="inline-flex items-center gap-2 text-white hover:text-[#00ff99] transition-all duration-500">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="relative group w-12 h-12 rounded-xl bg-white/5 border border-white/10 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/5 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm cursor-pointer hover:border-[#00ff99]/30">
                                                <BsGithub className="text-lg text-white group-hover:text-[#00ff99] transition-all duration-300"></BsGithub>
                                            </TooltipTrigger>
                                            <TooltipContent className="bg-black/90 backdrop-blur-sm text-white border border-white/20 rounded-lg px-4 py-2 shadow-xl" sideOffset={5}>
                                                <p>Ver repositorio en GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-1/2">
                            <Swiper 
                            spaceBetween={30} 
                            slidesPerView={1} 
                            className="h-[520px] xl:h-[580px] mb-8 relative group"
                            onSlideChange={handleSlideChange}>
                                {projects.map((project, index) => (
                                    <SwiperSlide key={index} className="w-full">
                                        <div className="h-full relative group flex justify-center items-center overflow-hidden">
                                            {/* Modern card container with glassmorphism effect */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl"></div>
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-3xl"></div>
                                            
                                            {/* Content container */}
                                            <div className="relative w-full h-full flex items-center justify-center z-10 rounded-3xl overflow-hidden p-4">
                                                {project.video ? (
                                                    <div className="w-full h-full relative flex items-center justify-center">
                                                        {!videoError ? (
                                                            <video
                                                                ref={(el) => {
                                                                    videoRefs.current[index] = el;
                                                                }}
                                                                className="object-contain md:object-cover w-full h-full rounded-2xl bg-black/80 shadow-inner"
                                                                style={{ maxHeight: "100%", maxWidth: "100%" }}
                                                                controls={isPlaying && currentVideoIndex === index}
                                                                onEnded={handleVideoEnded}
                                                                onPause={() => setIsPlaying(false)}
                                                                onPlay={() => setIsPlaying(true)}
                                                                onError={handleVideoError}
                                                                poster={project.poster}
                                                            >
                                                                <source src={project.video} type="video/mp4" />
                                                                Tu navegador no soporta la reproducción de video.
                                                            </video>
                                                        ) : (
                                                            <div className="flex flex-col items-center justify-center w-full h-full bg-gradient-to-br from-black/90 to-black/70 text-white z-20 rounded-2xl border border-white/10">
                                                                <span className="text-lg font-semibold mb-2">No se pudo cargar el video.</span>
                                                                <span className="text-sm opacity-70 text-center px-4">Verifica que el archivo exista en <code className="bg-white/10 px-2 py-1 rounded">/public/assets/chatDapp.mp4</code> y que el formato sea compatible.</span>
                                                            </div>
                                                        )}
                                                        {/* Modern play button overlay */}
                                                        {!isPlaying && !videoError && currentVideoIndex === index && (
                                                            <>
                                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 rounded-2xl pointer-events-none"></div>
                                                                <button
                                                                    onClick={handlePlay}
                                                                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center focus:outline-none z-20 group/btn"
                                                                    aria-label="Play video"
                                                                    type="button"
                                                                >
                                                                    <div className="relative">
                                                                        <div className="absolute inset-0 bg-[#00ff99]/20 rounded-full blur-xl scale-150 group-hover/btn:scale-175 transition-transform duration-300"></div>
                                                                        <span className="relative flex items-center justify-center w-20 h-20 bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-sm rounded-full shadow-2xl hover:scale-110 transition-all duration-300 border border-white/20">
                                                                            <svg width="36" height="36" viewBox="0 0 32 32" className="ml-1">
                                                                                <polygon points="10,7 26,16 10,25" fill="black" />
                                                                            </svg>
                                                                        </span>
                                                                    </div>
                                                                </button>
                                                            </>
                                                        )}
                                                    </div>
                                                ) : project.image ? (
                                                    <div className="w-full h-full relative">
                                                        <Image
                                                            src={project.image}
                                                            alt={project.title}
                                                            fill
                                                            className="object-cover rounded-2xl shadow-inner"
                                                        />
                                                    </div>
                                                ) : null}
                                            </div>
                                            <WorkSliderButtons 
                                                containerStyles="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between w-auto z-30 pointer-events-none"
                                                buttonStyles="bg-gradient-to-br from-[#00ff99] to-[#00cc7a] hover:from-[#00cc7a] hover:to-[#00ff99] text-black text-[20px] w-12 h-12 flex justify-center items-center transition-all duration-300 pointer-events-auto rounded-xl shadow-lg backdrop-blur-sm border border-white/20 hover:scale-110 hover:shadow-xl"
                                                iconStyles="drop-shadow-sm"
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            
                            {/* Modern progress indicators */}
                            <div className="flex justify-center items-center gap-4 mt-4">
                                <div className="flex items-center gap-2">
                                    {projects.map((_, index) => (
                                        <div
                                            key={index}
                                            className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                                index === currentSlide
                                                    ? "w-12 bg-gradient-to-r from-[#00ff99] to-[#00cc7a] shadow-lg"
                                                    : "w-2 bg-white/30 hover:bg-white/50"
                                            }`}
                                            onClick={() => {
                                                // Esta funcionalidad se puede extender si necesitas navegación directa
                                            }}
                                        />
                                    ))}
                                </div>
                                <div className="text-white/60 text-sm font-medium ml-2">
                                    {currentSlide + 1} / {projects.length}
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}

export default WorkPage;


