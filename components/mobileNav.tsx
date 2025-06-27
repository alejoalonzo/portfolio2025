"use client";

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import * as VisuallyHidden from "@radix-ui/react-visually-hidden"

import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineMenu, HiHome, HiUser, HiBriefcase, HiMail } from "react-icons/hi";
import { useState } from "react";

const navLinks = [
  { name: "home", path: "/", icon: HiHome },
    { name: "work", path: "/work", icon: HiBriefcase },
  { name: "services", path: "/servicesPage", icon: HiBriefcase },
  { name: "resume", path: "/resume", icon: HiUser },
  { name: "contact", path: "/contact", icon: HiMail },
];

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <button className="flex flex-col justify-center items-center">
          <HiOutlineMenu size={32} color="#00ff99" />
        </button>
      </SheetTrigger>
      
      <SheetContent side="right" className="flex flex-col bg-[#1c1c22] border-l border-[#00ff99]/20">
        <VisuallyHidden.Root>
          <SheetTitle>Navigation Menu</SheetTitle>
        </VisuallyHidden.Root>
        
        {/* Logo */}
        <div className="mt-8 mb-12 text-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <h1 className="text-4xl font-semibold text-white">
              Ale<span className="text-[#00ff99]">.</span>
            </h1>
          </Link>
        </div>

        {/* Navegación */}
        <nav className="flex flex-col gap-8 pl-6">
          {navLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-xl font-medium transition-all duration-300 hover:text-[#00ff99] ${
                  link.path === pathname 
                    ? "text-[#00ff99] border-b-2 border-[#00ff99] pb-2" 
                    : "text-white"
                }`}
              >
                <Icon size={24} color={link.path === pathname ? "#00ff99" : "white"} />
                <span className="capitalize">{link.name}</span>
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
