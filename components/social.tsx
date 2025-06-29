import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

const socials = [
    { icon: <FaGithub  />, path: "https://github.com/alejoalonzo" },
    { icon: <FaLinkedin  />, path: "https://www.linkedin.com/in/alejandro-alonzo-69639a38/" }
]

interface SocialProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Social: React.FC<SocialProps> = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {socials.map((item, index)=>{
            return (
              <Link 
                key={index} 
                href={item.path} 
                className={`${iconStyles} transition-all duration-300`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </Link>
            )
        })}
    </div>
  );
};
export default Social;
