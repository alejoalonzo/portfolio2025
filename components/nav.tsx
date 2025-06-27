"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
    {name: "home", path: "/"},
    {name: "work", path: "/work"},
    {name: "services", path: "/servicesPage"},
    {name: "resume", path: "/resume"},
    {name: "contact", path: "/contact"},
]

const Nav = () => {
    const pathname = usePathname();
    return (
        <nav className="flex items-center gap-8">
            {navLinks.map((link, index) => {
                return(
                    <Link 
                        href={link.path} 
                        key={index}
                        className={`capitalize font-medium transition-all duration-300 hover:text-[#00ff99] hover:border-b-2 hover:border-[#00ff99] ${
                            link.path === pathname ? "text-[#00ff99] border-b-2 border-[#00ff99]" : "text-white"
                        }`}
                    >
                        {link.name}
                    </Link>
                )
            })}
        </nav>
    )
}

export default Nav;