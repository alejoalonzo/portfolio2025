"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface RotateDeviceIconProps {
  show: boolean;
  onHide?: () => void;
}

const RotateDeviceIcon = ({ show, onHide }: RotateDeviceIconProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      // Auto-hide after 3 seconds
      const timer = setTimeout(() => {
        setIsVisible(false);
        onHide?.();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [show, onHide]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ 
            type: "spring", 
            stiffness: 260, 
            damping: 20
          }}
          className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none"
          style={{ 
            background: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(4px)' 
          }}
        >
          <motion.div
            animate={{ 
              rotate: [0, 90, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl"
          >
            <div className="flex flex-col items-center gap-4">
              {/* Phone icon with rotation animation */}
              <motion.div
                animate={{ rotateZ: [0, 90, 0] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut",
                  delay: 0.2
                }}
                className="relative"
              >
                <svg 
                  width="48" 
                  height="48" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-[#00ff99]"
                >
                  {/* Phone outline */}
                  <rect 
                    x="5" 
                    y="2" 
                    width="14" 
                    height="20" 
                    rx="2" 
                    ry="2" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                  />
                  {/* Screen */}
                  <rect 
                    x="7" 
                    y="4" 
                    width="10" 
                    height="14" 
                    rx="1" 
                    fill="currentColor" 
                    opacity="0.3"
                  />
                  {/* Home button */}
                  <circle 
                    cx="12" 
                    cy="20" 
                    r="1" 
                    fill="currentColor"
                  />
                </svg>
              </motion.div>

              {/* Rotation arrows */}
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                className="flex items-center justify-center"
              >
                <svg 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-[#00ff99]"
                >
                  {/* Rotation arrow */}
                  <path 
                    d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C11.4 6 10.8 5.8 10.4 5.4L8.6 7.2C8.9 7.7 9 8.3 9 9C9 10.1 8.1 11 7 11S5 10.1 5 9C5 7.9 5.9 7 7 7C7.6 7 8.2 7.2 8.6 7.6L10.4 5.8C10 5.1 10 4.1 10.4 3.4C10.8 2.6 11.4 2 12 2M12 18C10.9 18 10 18.9 10 20C10 21.1 10.9 22 12 22C12.6 22 13.2 21.8 13.6 21.4L15.4 19.6C15.1 19.1 15 18.5 15 18C15 16.9 15.9 16 17 16S19 16.9 19 18C19 19.1 18.1 20 17 20C16.4 20 15.8 19.8 15.4 19.4L13.6 21.2C14 21.9 14 22.9 13.6 23.6C13.2 24.4 12.6 25 12 25" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                  />
                  <path 
                    d="M7 9L5 7L7 5" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path 
                    d="M17 15L19 17L17 19" 
                    stroke="currentColor" 
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </motion.div>

              {/* Text */}
              <motion.div
                animate={{ opacity: [0.8, 1, 0.8] }}
                transition={{ 
                  duration: 1.5, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="text-center"
              >
                <p className="text-white font-semibold text-sm mb-1">
                  Rotate Device
                </p>
                <p className="text-white/70 text-xs">
                  For better video experience
                </p>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RotateDeviceIcon;