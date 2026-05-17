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
            <div key={pathname} className="min-h-[100svh] w-full flex flex-col">
                
                {/* Stair effect */}
                <StairTransition />
                
                {/* Page content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ 
                        opacity: 1,
                        transition: {
                            delay: 0.2, // Starts quickly to satisfy PageSpeed
                            duration: 1.2, // Extended duration for a much smoother, elegant fade-in
                            ease: "easeInOut"
                        }
                    }}
                    className={`flex-grow w-full ${pathname === '/work' ? '' : 'pt-20'}`}
                >
                    {children}
                </motion.div>
            </div>
        </AnimatePresence>
    );
}

export default PageTransition;