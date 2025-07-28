"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import StairTransition from "./stairTransition";

interface PageTransitionProps {
    children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname} className="min-h-[100svh] w-full">
                
                {/* Efecto de escaleras */}
                <StairTransition />
                
                {/* Contenido de la página con animación */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: {
                            delay: 1,
                            duration: 0.4,
                            ease: "easeInOut"
                        }
                    }}
                    className="min-h-[100svh] w-full pt-20"
                >
                    {children}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;
