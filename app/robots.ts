// app/robots.ts
import { MetadataRoute } from 'next';

// Generates the robots.txt file to guide search engine crawlers
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      // Allows all user agents to crawl the site
      userAgent: '*',
      // Allows access to all public routes
      allow: '/',
      // Prevents crawlers from accessing backend API routes
      disallow: '/api/',
    },
    // Defines the absolute URL for the website's sitemap
    sitemap: 'https://alejandroalonzo.com/sitemap.xml',
  };
}