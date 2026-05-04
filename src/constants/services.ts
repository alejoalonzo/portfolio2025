// src/constants/services.ts

export interface Service {
  num: string;
  title: string;
  slug: string;
  description: string;
  fullDescription: string;
  keywords: string[];
}

export const servicesData: Service[] = [
  {
    num: "01",
    title: "Smart Contract Development",
    slug: "smart-contract-development",
    description: "Design and implement secure and efficient smart contracts for various blockchain platforms.",
    fullDescription: "I specialize in developing secure, gas-optimized smart contracts using Solidity. From ERC-20 tokens to complex DeFi protocols and NFT marketplaces, I ensure every contract is audited and follows industry best practices for security and efficiency.",
    keywords: ["Solidity", "Smart Contracts", "Ethereum", "Web3", "Audit"],
  },
  {
    num: "02",
    title: "SEO Services",
    slug: "seo-services",
    description: "Optimize web platforms for search engines to increase visibility, organic traffic, and conversion rates.",
    fullDescription: "Technical SEO is at the core of every project I build. I focus on Core Web Vitals, metadata optimization, semantic HTML, and high-performance Next.js architectures to ensure your site ranks at the top of search engine results.",
    keywords: ["Technical SEO", "Next.js SEO", "Google Search Console", "Performance Optimization"],
  },
  {
    num: "03",
    title: "Blockchain Integration",
    slug: "blockchain-integration",
    description: "Integrate blockchain technology into existing applications for enhanced security and transparency.",
    fullDescription: "Bridging the gap between Web2 and Web3. I integrate decentralized features into traditional applications using ethers.js and wagmi, allowing users to connect wallets, interact with on-chain data, and sign transactions seamlessly.",
    keywords: ["Web3 Integration", "Ethers.js", "WalletConnect", "Decentralized Apps"],
  },
  {
    num: "04",
    title: "Web Development",
    slug: "web-development",
    description: "Design and implement secure and efficient web applications using modern frameworks and technologies.",
    fullDescription: "Building modern, scalable web applications using the latest stack: Next.js, React, and Firebase. I focus on creating responsive interfaces with exceptional performance and clean, maintainable code for long-term growth.",
    keywords: ["Next.js", "React", "Firebase", "TypeScript", "Full-stack"],
  },
];
