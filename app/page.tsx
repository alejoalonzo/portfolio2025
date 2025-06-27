import Photo from "@/components/photo";
import Social from "@/components/social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";


const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 ">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Blockchain Developer</span>
            <div className="leading-tight">
              <h1 className="h1 mt-4">Hello, I&apos;m</h1>
              <span className="h1 text-accent">Alejandro A.</span>
            </div>
            <p className="max-w-[400px] mb-9 mt-6 text-white/80">
              I&apos;m a passionate blockchain developer with expertise in
              building decentralized applications and smart contracts.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 bg-transparent border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99] hover:text-black cursor-pointer">
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
    </section>
  );
};

export default Home;
