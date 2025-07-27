"use client";

import Photo from "@/components/photo";
import Social from "@/components/social";
import Stats from "@/components/stats";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


const Home = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/ResumeAlejandro.pdf'; 
    link.download = 'Alejandro_Alonzo_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="h-full -mt-10">
      <div className="container mx-auto pt-0">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Blockchain Developer</span>
            <div className="leading-tight">
              <h1 className="h1 mt-4">
                Hello, I&apos;m
              </h1>
              <span className="h1 text-[#00ff99]">
                Alejandro A.
              </span>
            </div>
            <p className="max-w-[400px] mb-9 mt-6 text-white/80">
              Crafting innovative solutions through decentralized applications 
              and smart contracts for the Web3 ecosystem.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="uppercase flex items-center gap-2 bg-transparent border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99] hover:text-black cursor-pointer"
                onClick={handleDownloadCV}
              >
                Download CV
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social containerStyles="flex gap-6" iconStyles="w-10 h-10 border border-[#00ff99] bg-transparent rounded-full flex justify-center items-center text-[#00ff99] text-xl hover:bg-[#00ff99] hover:text-black"/>
              </div>
            </div>
            </div>  
          {/* photo */}     
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      {/* stats */}
      <Stats />
    </section>
  );
};

export default Home;
