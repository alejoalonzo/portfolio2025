"use client";

import { SiSolidity, SiWeb3Dotjs, SiAngular, SiReact, SiTypescript, SiIpfs, SiBlockchaindotcom } from 'react-icons/si'
import { FaHardHat } from 'react-icons/fa'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from 'framer-motion';


// const skillsIcons = [
//   { Icon: SiSolidity, name: 'Solidity' },
//     { Icon: FaHardHat, name: 'Hardhat' },
//   { Icon: SiWeb3Dotjs, name: 'Web3' },
//   { Icon: SiAngular, name: 'Angular' },
//   { Icon: SiReact, name: 'Next.js / React' },
//   { Icon: SiTypescript, name: 'TypeScript' },
//   { Icon: SiIpfs, name: 'IPFS' },
//   { Icon: SiBlockchaindotcom, name: 'Blockchain.com' },
// ]

// About me Data
const about = {
    title: "About Me",
    description: "I am a passionate web developer with a focus on blockchain technologies. I have experience in building decentralized applications using Solidity, Web3.js, and various front-end frameworks like React and Angular. My goal is to create innovative solutions that leverage the power of blockchain.",
    info:[
    { fieldName: "Name", fieldValue: "Alejandro Alonzo" },
    { fieldName: "Phone", fieldValue: "+1 (626) 243-6274" },
    { fieldName: "Experience", fieldValue: "+4 Years" },
    { fieldName: "Location", fieldValue: "Los Angeles, CA" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Spanish" },
    ]
}

// Experience Data
const experience = {
    icon: SiBlockchaindotcom,
    title: "My Experience",
    description: "As a full-stack developer with over 4 years of experience, I have mastered technologies like Angular, Node.js, React, and TypeScript to build robust web applications. Currently, I'm focused on developing innovative blockchain tools and decentralized applications, combining my full-stack expertise with cutting-edge Web3 technologies to create scalable solutions for the future of digital interaction.",
    items: [
        {
            company: "Freelance",
            position: "Full Stack Developer",
            duration: "2024 - Present",
        },
        {
            company: "Debook",
            position: "Angular Developer",
            duration: "2023 - 2024",
        },
        {
            company: "Difarmed SL",
            position: "Frontend Developer",
            duration: "2022 - 2022",
        }
        ,
        {
            company: "IdeSoft BCN",
            position: "Software Engineer Intern",
            duration: "2021 - 2021",
        },

    ]
};

// Education Data
const education = {
    icon: SiBlockchaindotcom,
    title: "My Education",
    description: "I hold a Bachelor's degree in Graphic Design, followed by a 2-year higher degree in Web Development completed in Barcelona, Spain. I've also completed numerous specialized courses focused on Angular development, and I'm currently enrolled in an intensive 6-month Blockchain development program to enhance my expertise in decentralized technologies.",
    items: [
        {
            institution: "Online - Self-taught",
            degree: "Smart Contracts & Web3 Blockchain Developer",
            duration: "2025 - Present (Month 3 of 6)",
        },
        {
            institution: "Udemy",
            degree: "Angular Testing, Angular 17",
            duration: "2023",
        },
        {
            institution: "Udemy",
            degree: "MEAN Stack E-commerce, Angular 15, Nx, PrimeNG",
            duration: "2023",
        },
        {
            institution: "IFP Barcelona",
            degree: "Higher Degree in Web Development",
            duration: "2020 - 2022",
        },
        {
            institution: "University of El Salvador",
            degree: "Bachelor's Degree in Graphic Design",
            duration: "2006 - 2013",
        } 
    ]
};

// Skills Data
const skills = {
    title: "My Skills",
    description: "I possess a diverse skill set that encompasses both front-end and back-end development. My expertise includes Angular, Node.js, React, TypeScript, and blockchain technologies. I am committed to continuous learning and staying updated with the latest industry trends.",
    items: [
        {
            icon: <SiBlockchaindotcom />,
            name: "Blockchain", 
        },
        {
            icon: <FaHardHat />,
            name: "HardHat", 
        },
        {
            icon: <SiSolidity />,
            name: "Solidity", 
        },
        {
            icon: <SiWeb3Dotjs />,
            name: "Web 3", 
        },
        {
            icon: <SiIpfs />,
            name: "IPFS", 
        },
        {
            icon: <SiAngular />,
            name: "Angular", 
        },
        {
            icon: <SiReact />,
            name: "React", 
        },
        {
            icon: <SiTypescript />,
            name: "TypeScript", 
        },

    ]
};


const ResumePage = () => {
    return (
        <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1, transition: { delay: 1.1, duration: 0.4, ease: "easeIn" } }} 
        className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0 -mt-20 xl:mt-0'
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px] px-5 xl:px-0">
                    <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                        <TabsTrigger
                            value="experience"
                            className="w-full py-3 data-[state=active]:bg-[#00ff99] data-[state=active]:text-primary xl:hover:bg-[#3a3a40] transition-colors"
                        >
                            Experience
                        </TabsTrigger>
                        <TabsTrigger
                            value="education"
                            className="w-full py-3 data-[state=active]:bg-[#00ff99] data-[state=active]:text-primary xl:hover:bg-[#3a3a40] transition-colors"
                        >
                            Education
                        </TabsTrigger>
                        <TabsTrigger
                            value="skills"
                            className="w-full py-3 data-[state=active]:bg-[#00ff99] data-[state=active]:text-primary xl:hover:bg-[#3a3a40] transition-colors"
                        >
                            Skills
                        </TabsTrigger>
                        <TabsTrigger
                            value="about"
                            className="w-full py-3 data-[state=active]:bg-[#00ff99] data-[state=active]:text-primary xl:hover:bg-[#3a3a40] transition-colors"
                        >
                            About Me
                        </TabsTrigger>
                    </TabsList>


                    {/* Content */}
                    <div className="min-h-[70vh] w-full">
                        {/* Experience */}
                        <TabsContent value="experience" className="w-full">
                           <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                            <h3 className='text-4xl font-bold'>{experience.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience.description}</p>
                            <ScrollArea className='h-[400px]'>
                                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                    {experience.items.map((item, index) =>{
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-[#00ff99]'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.position} </h3>
                                                <div className="flex items-center gap-2">
                                                    <div className='w-[6px] h-[6px] rounded-full bg-[#00ff99]'></div>
                                                    <p className='text-white/60'>{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                           </div>
                        </TabsContent>
                          {/* Education */}
                        <TabsContent value="education" className="w-full">
                            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                <h3 className='text-4xl font-bold'>{education.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                                <ScrollArea className='h-[400px]'>
                                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                        {education.items.map((item, index) =>{
                                        return (
                                            <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                                <span className='text-[#00ff99]'>{item.duration}</span>
                                                <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>{item.degree} </h3>
                                                <div className="flex items-center gap-2">
                                                    <div className='w-[6px] h-[6px] rounded-full bg-[#00ff99]'></div>
                                                    <p className='text-white/60'>{item.institution}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                           </div>
                        </TabsContent> 
                        {/* Skills   */}
                        <TabsContent value="skills" className="w-full">
                            <div className='flex flex-col gap-[30px]'>
                                <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                                    <h3 className='text-4xl font-bold'>{skills.title}</h3>
                                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{skills.description}</p>
                                </div>
                                <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4'>
                                    {skills.items.map((skill, index)=>{
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex items-center justify-center group'>
                                                        <div className='text-6xl group-hover:text-[#00ff99] transition-all duration-300'>{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent className="bg-white text-black border-white [&>svg]:fill-white">
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>
                                    })}
                                </ul>
                            </div>        

                        </TabsContent>
                        {/* About Me     */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className='flex flex-col gap-[30px]'>
                                <h3 className='text-4xl font-bold'>{about.title}</h3>
                                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                                <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className='flex items-center justify-center xl:justify-start gap-4'>
                                                <span className='text-white/60'>{item.fieldName}</span>
                                                <span className='text-xl'>{item.fieldValue}</span>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    );
}


export default ResumePage;
