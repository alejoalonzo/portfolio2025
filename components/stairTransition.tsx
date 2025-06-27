"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Función para crear la animación de escaleras
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

// Función para reverse stair animation
const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const StairTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40">
                    {/* 6 escalones que crean el efecto */}
                    {[...Array(6)].map((_, index) => (
                        <motion.div
                            key={index}
                            variants={stairAnimation}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            transition={{
                                duration: 0.4,
                                ease: "easeInOut",
                                delay: reverseIndex(index) * 0.1,
                            }}
                            className="h-full w-screen bg-white absolute"
                            style={{
                                left: `${(100 / 6) * index}%`,
                                width: `${100 / 6}%`,
                            }}
                        />
                    ))}
                </div>
            </div>
        </AnimatePresence>
    );
};

export default StairTransition;
