// app/services/[slug]/page.tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
// Import the centralized data
import { servicesData } from "@/src/constants/services";

// Define the expected params type
interface Props {
  params: Promise<{
    slug: string;
  }>;
}

// Generate dynamic SEO metadata based on the current slug
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  // Fallback if the service does not exist
  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  // Define the canonical URL for this specific service page
  // IMPORTANT: Replace 'yourdomain.com' with your actual domain
  const canonicalUrl = `https://alejandroalonzo.com/services/${service.slug}`;

  // Return the specific metadata for this service page
  return {
    title: `${service.title} | Services`,
    description: service.description,
    keywords: service.keywords,
    // Add canonical URL to prevent duplicate content issues
    alternates: {
      canonical: canonicalUrl,
    },
  };
}

// Main Server Component for the dynamic route
export default async function ServiceDetailsPage({ params }: Props) {
  const { slug } = await params;
  // Find the requested service
  const service = servicesData.find((s) => s.slug === slug);

  // Trigger 404 page if the slug is invalid
  if (!service) {
    notFound();
  }

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 -mt-20 xl:mt-0">
      <div className="container mx-auto px-5 xl:px-0">
        <div className="flex flex-col gap-[30px] max-w-[800px] mx-auto group">
          
          {/* Top section: Number and Back button */}
          <div className="w-full flex justify-between items-center">
            <div className="text-6xl font-extrabold text-transparent text-outline transition-all duration-500 hover:text-white">
              {service.num}
            </div>
            <Link 
              href="/services" 
              className="w-[70px] h-[70px] rounded-full bg-white hover:bg-[#00ff99] transition-all duration-500 flex items-center justify-center"
            >
              <BsArrowLeft className="text-primary text-3xl" />
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-extrabold text-white">
            {service.title}
          </h1>

          {/* Full Detailed Description */}
          <p className="text-white/60 text-lg leading-relaxed">
            {service.fullDescription}
          </p>

          {/* Border divider */}
          <div className="border-b border-white/20 w-full my-4"></div>

        </div>
      </div>
    </section>
  );
}