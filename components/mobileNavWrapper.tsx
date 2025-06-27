"use client";

import dynamic from "next/dynamic";
import { HiOutlineMenu } from "react-icons/hi";

// Importar dinámicamente el MobileNav para evitar problemas de hidratación
const MobileNav = dynamic(() => import("./mobileNav"), {
  ssr: false,
  loading: () => (
    <button className="flex flex-col justify-center items-center">
      <HiOutlineMenu size={32} color="#00ff99" />
    </button>
  ),
});

export default MobileNav;
