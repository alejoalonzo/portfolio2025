"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Client component handling the download interactivity
const DownloadButton = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/ResumeAlejandro.pdf'; 
    link.download = 'Alejandro_Alonzo_Resume.pdf'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button 
      variant="outline" 
      size="lg" 
      className="uppercase flex items-center gap-2 bg-transparent border-[#00ff99] text-[#00ff99] hover:bg-[#00ff99] hover:text-black cursor-pointer"
      onClick={handleDownloadCV}
    >
      Download CV
      <FiDownload className="text-xl" />
    </Button>
  );
};

export default DownloadButton;