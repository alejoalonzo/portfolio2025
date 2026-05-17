import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

// A11y Fix: Added 'name' property to provide an accessible label for screen readers
const socials = [
    { icon: <FaGithub  />, path: "https://github.com/alejoalonzo", name: "GitHub Profile" },
    { icon: <FaLinkedin  />, path: "https://www.linkedin.com/in/alejandro-alonzo-69639a38/", name: "LinkedIn Profile" }
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
                aria-label={item.name} // A11y Fix: Applies the accessible name to the link
              >
                {item.icon}
              </Link>
            )
        })}
    </div>
  );
};
export default Social;