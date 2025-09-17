"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import  { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';


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
];

const WorkPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [playingVideo, setPlayingVideo] = useState<number | null>(null);
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
    const swiperRef = useRef<SwiperType | null>(null);

    const currentProject = projects[currentSlide];

    const handleSlideChange = (swiper: { activeIndex: number }) => {
        const currentIndex = swiper.activeIndex;
        setCurrentSlide(currentIndex);
        setPlayingVideo(null);
        // Pausa todos los videos
        videoRefs.current.forEach((video) => {
            if (video && !video.paused) {
                video.pause();
                video.currentTime = 0;
            }
        });
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.5, ease: "easeIn" } }}
            className="min-h-screen flex flex-col relative overflow-hidden"
        >
            {/* Full screen slider container */}
            <div className="flex-1 relative">
                <Swiper 
                    spaceBetween={0} 
                    slidesPerView={1} 
                    className="h-screen w-full"
                    onSlideChange={handleSlideChange}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="relative">
                            {/* Background Media */}
                            <div className="absolute inset-0 z-0">
                                {project.video ? (
                                    <div className="w-full h-full relative">
                                        <video
                                            ref={(el) => {
                                                videoRefs.current[index] = el;
                                            }}
                                            className="w-full h-full object-cover"
                                            controls={false}
                                            onPause={() => setPlayingVideo(null)}
                                            onPlay={() => setPlayingVideo(index)}
                                            poster={project.poster}
                                            muted
                                            playsInline
                                        >
                                            <source src={project.video} type="video/mp4" />
                                        </video>
                                        
                                        {/* Overlay invisible para capturar clicks cuando el video está reproduciéndose */}
                                        {playingVideo === index && (
                                            <div 
                                                className="absolute inset-0 z-10 cursor-pointer"
                                                onClick={() => {
                                                    const videoEl = videoRefs.current[index];
                                                    if (videoEl) {
                                                        videoEl.pause();
                                                        videoEl.currentTime = 0;
                                                        setPlayingVideo(null);
                                                    }
                                                }}
                                            />
                                        )}
                                    </div>
                                ) : project.image ? (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black"></div>
                                )}
                                
                                {/* Animated gradient overlay */}
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    animate={{ opacity: playingVideo !== index ? 1 : 0 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                    className="absolute inset-0 z-5"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/20"></div>
                                </motion.div>
                            </div>

                            {/* Animated content overlay */}
                            <motion.div
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ 
                                    opacity: playingVideo !== index ? 1 : 0,
                                    y: playingVideo !== index ? 0 : 30
                                }}
                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                className="absolute inset-0 z-20 flex items-end"
                                style={{ pointerEvents: playingVideo !== index ? 'auto' : 'none' }}
                            >
                                <div className="w-full p-8 md:p-12 lg:p-16">
                                    <div className="max-w-6xl mx-auto">
                                        <div className="grid lg:grid-cols-2 gap-28 items-end">
                                            {/* Project info */}
                                            <motion.div 
                                                initial={{ opacity: 1, x: 0 }}
                                                animate={{ 
                                                    opacity: playingVideo !== index ? 1 : 0,
                                                    x: playingVideo !== index ? 0 : -50
                                                }}
                                                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                                                className="space-y-6"
                                            >
                                                {/* Project number */}
                                                <div className="flex items-center gap-4">
                                                    <span className="text-5xl font-extrabold text-transparent bg-gradient-to-r from-[#00ff99] to-[#00cc7a] bg-clip-text leading-none">
                                                        {currentProject.num}
                                                    </span>
                                                    <div className="h-20 w-px bg-gradient-to-b from-[#00ff99] to-transparent"></div>
                                                    <span className="text-[#00ff99] font-semibold text-sm uppercase tracking-widest bg-[#00ff99]/10 px-4 py-2 rounded-full border border-[#00ff99]/30">
                                                        {currentProject.category}
                                                    </span>
                                                </div>
                                                
                                                {/* Title and description */}
                                                <div className="space-y-4">
                                                    <h1 className="text-5xl font-extrabold text-white leading-tight">
                                                        {currentProject.title}
                                                    </h1>
                                                    <p className="text-white/60 leading-relaxed max-w-2xl">
                                                        {currentProject.description}
                                                    </p>
                                                </div>
                                                
                                                {/* Tech stack */}
                                                <div className="flex flex-wrap gap-3">
                                                    {currentProject.stack.map((tech, techIndex) => (
                                                        <span 
                                                            key={techIndex}
                                                            className="px-4 py-2 bg-white/10 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/20 hover:bg-white/20 transition-colors"
                                                        >
                                                            {tech.name}
                                                        </span>
                                                    ))}
                                                </div>
                                                
                                                {/* Action buttons */}
                                                <div className="flex gap-6 pt-4">
                                                    {currentProject.live && (
                                                        <Link
                                                            href={currentProject.live}
                                                            target="_blank"
                                                            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#00ff99] to-[#00cc7a] text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                                        >
                                                            <span>Ver Proyecto</span>
                                                            <BsArrowUpRight className="text-xl group-hover:rotate-45 transition-transform" />
                                                        </Link>
                                                    )}
                                                    <Link
                                                        href={currentProject.github}
                                                        target="_blank"
                                                        className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 transition-all duration-300 hover:bg-white/20 hover:scale-105"
                                                    >
                                                        <BsGithub className="text-xl" />
                                                        <span>Código</span>
                                                    </Link>
                                                </div>
                                            </motion.div>
                                            
                                            {/* Navigation and indicators */}
                                            <motion.div 
                                                initial={{ opacity: 1, x: 0 }}
                                                animate={{ 
                                                    opacity: playingVideo !== index ? 1 : 0,
                                                    x: playingVideo !== index ? 0 : 50
                                                }}
                                                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                                                className="text-center space-y-8"
                                            >
                                                {/* Slide counter */}
                                                <div className="inline-block bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
                                                    <span className="text-white font-mono text-lg">
                                                        {String(currentSlide + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                                                    </span>
                                                </div>
                                                
                                                {/* Progress indicators */}
                                                <div className="flex justify-center gap-3">
                                                    {projects.map((_, indicatorIndex) => (
                                                        <button
                                                            key={indicatorIndex}
                                                            className={`h-2 rounded-full transition-all duration-300 ${
                                                                indicatorIndex === currentSlide
                                                                    ? "w-12 bg-gradient-to-r from-[#00ff99] to-[#00cc7a]"
                                                                    : "w-2 bg-white/40 hover:bg-white/60"
                                                            }`}
                                                            onClick={() => {
                                                                // Future: Add direct slide navigation
                                                            }}
                                                        />
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                
                {/* WORKING PLAY BUTTON - ALIGNED WITH COUNTER */}
                {projects[currentSlide]?.video && playingVideo === null && (
                    <div className="absolute inset-0 flex items-center z-[200] pointer-events-none">
                        <div className="w-full p-8 md:p-12 lg:p-16">
                            <div className="max-w-6xl mx-auto">
                                <div className="grid lg:grid-cols-2 gap-28 items-center">
                                    <div></div>
                                    <div className="flex justify-center">
                                        <button
                                            onClick={() => {
                                                console.log('🎯 PLAY BUTTON CLICKED!');
                                                const videoEl = videoRefs.current[currentSlide];
                                                if (videoEl) {
                                                    console.log('📹 Playing video...');
                                                    videoEl.play();
                                                    setPlayingVideo(currentSlide);
                                                }
                                            }}
                                            className="group relative pointer-events-auto"
                                        >
                                            {/* Glow effect */}
                                            <div className="absolute inset-0 bg-[#00ff99]/20 rounded-full blur-xl scale-150 group-hover:scale-200 transition-transform duration-500"></div>
                                            
                                            {/* Button */}
                                            <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-all duration-300 border border-white/30">
                                                <svg width="32" height="32" viewBox="0 0 32 32" className="ml-1">
                                                    <polygon points="12,8 24,16 12,24" fill="black" />
                                                </svg>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Animated navigation arrows */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: playingVideo === null ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="absolute left-8 right-8 top-1/2 -translate-y-1/2 flex justify-between z-30"
                    style={{ pointerEvents: playingVideo === null ? 'auto' : 'none' }}
                >
                    <button 
                        className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-2xl w-14 h-14 flex justify-center items-center rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        onClick={() => swiperRef.current?.slidePrev()}
                    >
                        <PiCaretLeftBold />
                    </button>
                    <button 
                        className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white text-2xl w-14 h-14 flex justify-center items-center rounded-full border border-white/20 transition-all duration-300 hover:scale-110 hover:shadow-xl"
                        onClick={() => swiperRef.current?.slideNext()}
                    >
                        <PiCaretRightBold />
                    </button>
                </motion.div>
            </div>
        </motion.section>
    );
}

export default WorkPage;