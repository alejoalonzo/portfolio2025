// app/page.tsx

import Photo from "@/components/photo";
import Social from "@/components/social";
import Stats from "@/components/stats";
import DownloadButton from "@/components/DownloadButton"; 

// Force Next.js to statically generate this page at build time to drop TTFB to milliseconds
export const dynamic = "force-static";

const Home = () => {
  // JSON-LD schema remains the same
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Alejandro Alonzo",
    "jobTitle": "Full-Stack & Blockchain Developer",
    "description": "Crafting innovative solutions through decentralized applications, modern web development, and SEO optimization.",
    "areaServed": "Los Angeles",
    "knowsAbout": ["Technical SEO", "Next.js", "Firebase", "Smart Contracts", "Web3", "React", "Angular"]
  };

  return (
    <section className="h-full -mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="container mx-auto pt-0">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Blockchain Developer & SEO Specialist</span>
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
              
              <DownloadButton />

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