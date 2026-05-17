"use client";

// Fixed import: Always use "next/link" instead of the internal dist path to avoid hydration and layout issues
import Link from "next/link";
import { Button } from "@/components/ui/button"; 

// loadComponents
import Nav from "./nav"; 
import MobileNav from "./mobileNavWrapper";

const Header = () => {
  return (
    // Added min-height classes to reserve exact space and prevent CLS when rendering
    <header className="py-8 xl:py-12 text-white min-h-[96px] xl:min-h-[128px]">
        <div className="container mx-auto flex justify-between items-center px-4 xl:px-0">
            {/* logo */}
          <Link href="/" >
            <h1 className="text-2xl font-bold">Ale<span className="text-[#00ff99]">.</span></h1>          
          </Link>

          {/* nav for Desktop */}
          <div className="hidden xl:flex items-center gap-8">
            <Nav />
            <Link href="/contact"><Button className="cursor-pointer">Hire me</Button></Link>
          </div>

          {/* nav for mobile */}
          <div className="xl:hidden">
            <MobileNav />
          </div>
        </div>
    </header>
  );
};
export default Header;