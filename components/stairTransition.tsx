"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

// Use 'y' (transform: translateY) instead of 'top'. 
// Transforms are GPU-accelerated and do not trigger layout recalculations (reflows).
const stairAnimation = {
    initial: {
        y: "0%",
    },
    animate: {
        y: "100%",
    },
    exit: {
        y: ["100%", "0%"],
    },
};

const reverseIndex = (index: number) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
};

const StairTransition = () => {
    const pathname = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathname}>
                <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-40 flex">
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
                            // Added top-0 to establish origin, allowing 'y' to transform properly
                            className="h-full bg-white relative top-0"
                            style={{
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