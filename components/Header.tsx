"use client";

import Link from "next/dist/client/link";
import { Button } from "@/components/ui/button"; 

// loadComponents
import Nav from "./nav"; // Assuming you have a Nav component
import MobileNav from "./mobileNavWrapper";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
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
