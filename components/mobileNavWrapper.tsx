"use client";

import dynamic from "next/dynamic";
import { HiOutlineMenu } from "react-icons/hi";

// Dynamically import MobileNav to avoid hydration issues
const MobileNav = dynamic(() => import("./mobileNav"), {
  ssr: false,
  loading: () => (
    // A11y Fix: Added aria-label so screen readers announce this as a menu button
    <button 
      className="flex flex-col justify-center items-center"
      aria-label="Open mobile menu"
    >
      <HiOutlineMenu size={32} color="#00ff99" />
    </button>
  ),
});

export default MobileNav;