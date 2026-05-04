// app/sitemap.ts
import { MetadataRoute } from 'next';
import { servicesData } from '@/src/constants/services';

// Generates the sitemap.xml file for search engine indexing
export default function sitemap(): MetadataRoute.Sitemap {
  // Define the base URL of your portfolio
  const baseUrl = 'https://alejandroalonzo.com';

  // Generate dynamic URLs for each individual service
  const serviceUrls: MetadataRoute.Sitemap = servicesData.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7, // Slightly lower than the main services page
  }));

  return [
    {
      // Main landing page
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      // Main services list page
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      // Experience / Resume page
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {     
      // Contact page
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
       {     
      // Work page
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    // Spread the dynamically generated service URLs here
    ...serviceUrls,
  ];
}