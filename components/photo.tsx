"use client";

import { motion }   from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";


const Photo = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="relative flex justify-center items-center">
          {/* Círculo estático para el estado no montado */}
          <svg
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] xl:w-[520px] xl:h-[520px]"
            viewBox="0 0 520 520"
          >
            <circle
              cx="260"
              cy="260"
              r="250"
              stroke="#00ff99"
              strokeWidth="2"
              fill="none"
              strokeDasharray="15 25 8 40 20 15 30 10"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Imagen */}
          <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative z-10 flex justify-center items-center">
            <Image
              src="/assets/alejandro.png"
              alt="Home Developer Photo"
              width={498}
              height={498}
              className="object-contain w-full h-full"
              priority 
              quality={100}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full flex justify-center items-center">
        <motion.div className="relative flex justify-center items-center">
            {/* Círculo animado con borde discontinuo */}
            <motion.svg
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] xl:w-[520px] xl:h-[520px]"
              viewBox="0 0 520 520"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              <motion.circle
                cx="260"
                cy="260"
                r="250"
                stroke="#00ff99"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                initial={{ 
                  strokeDashoffset: 0,
                  strokeDasharray: "15 25 8 40 20 15 30 10"
                }}
                animate={{ 
                  strokeDashoffset: -200,
                  strokeDasharray: [
                    "15 25 8 40 20 15 30 10",
                    "5 35 25 15 40 8 12 45",
                    "30 10 15 50 5 25 35 20",
                    "20 40 10 25 30 5 50 15",
                    "15 25 8 40 20 15 30 10"
                  ]
                }}
                transition={{
                  strokeDashoffset: {
                    duration: 25,
                    ease: "linear",
                    repeat: Infinity,
                  },
                  strokeDasharray: {
                    duration: 18,
                    ease: "easeInOut",
                    repeat: Infinity,
                  }
                }}
              />
            </motion.svg>
            
            {/* Imagen */}
            <div className="w-[298px] h-[298px] xl:w-[498px] xl:h-[498px] relative z-10 flex justify-center items-center">
                <Image
                    src="/assets/alejandro.png"
                    alt="Home Developer Photo"
                    width={498}
                    height={498}
                    className="object-contain w-full h-full"
                    priority 
                    quality={100}
                />
            </div>
        </motion.div>
    </div>
  );
};

export default Photo;
