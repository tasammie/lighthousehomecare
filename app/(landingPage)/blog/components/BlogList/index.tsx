"use client";
import { ImgComp } from "@/components/ImgComp";
import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";
import { BlogFilters } from "../BlogFilter";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
  slug: string;
  category: string;
}

interface BlogListProps {
  filters: BlogFilters;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How Person-Centered Care Transforms Lives",
    excerpt:
      "Person-centered care prioritizes individual needs and empowers people with disabilities to live more independently. Learn how tailored support services make...",
    date: "February 25, 2025",
    author: "Lighthouse Care Ltd",
    image: "/images/care-at-home.webp",
    slug: "person-centered-care-transforms-lives",
    category: "Personal Care",
  },
  {
    id: 2,
    title: "Supporting Independence at Home",
    excerpt:
      "Discover the benefits of receiving care in the comfort of your own home and how our dedicated carers help maintain independence and dignity...",
    date: "February 22, 2025",
    author: "Lighthouse Care Ltd",
    image: "/images/hero.webp",
    slug: "supporting-independence-at-home",
    category: "Home Care",
  },
  {
    id: 3,
    title: "The Importance of Personal Hygiene Care",
    excerpt:
      "Personal hygiene is essential for health and wellbeing. Learn about our compassionate approach to personal care services and how we maintain dignity...",
    date: "February 20, 2025",
    author: "Lighthouse Care Ltd",
    image: "/images/care-at-home.webp",
    slug: "importance-personal-hygiene-care",
    category: "Personal Care",
  },
  {
    id: 4,
    title: "24-Hour Live-In Care: What You Need to Know",
    excerpt:
      "Comprehensive guide to 24-hour live-in care services, including benefits, what to expect, and how to choose the right care provider for your needs...",
    date: "February 18, 2025",
    author: "Lighthouse Care Ltd",
    image: "/images/hero.webp",
    slug: "24-hour-live-in-care-guide",
    category: "Live-in Care",
  },
  {
    id: 5,
    title: "Dementia Care: Creating a Safe and Supportive Environment",
    excerpt:
      "Specialized dementia care requires understanding, patience, and expertise. Explore our approach to creating safe, supportive environments for those with dementia...",
    date: "February 15, 2025",
    author: "Lighthouse Care Ltd",
    image: "/images/care-at-home.webp",
    slug: "dementia-care-safe-environment",
    category: "Dementia Support",
  },
  {
    id: 6,
    title: "Companionship Services: More Than Just Care",
    excerpt:
      "Friendship and companionship are vital for mental health and wellbeing. Learn how our companionship services go beyond basic care to enrich lives...",
    date: "February 12, 2025",
    author: "Lighthouse Care Ltd",
    image: "/images/hero.webp",
    slug: "companionship-services-more-than-care",
    category: "Companionship",
  },
];

export default function BlogList({ filters }: BlogListProps) {
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Search filter
      if (
        filters.search &&
        !post.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !post.excerpt.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (
        filters.category !== "All Categories" &&
        post.category !== filters.category
      ) {
        return false;
      }

      // Date filter
      if (filters.date) {
        const postDate = new Date(post.date);
        const filterDate = new Date(filters.date + "-01");
        if (
          postDate.getFullYear() !== filterDate.getFullYear() ||
          postDate.getMonth() !== filterDate.getMonth()
        ) {
          return false;
        }
      }

      return true;
    });
  }, [filters]);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
        {/* Results Header */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900">
            {filteredPosts.length === 0
              ? "No articles found"
              : `${filteredPosts.length} article${
                  filteredPosts.length !== 1 ? "s" : ""
                } found`}
          </h3>
        </div>

        {filteredPosts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="max-w-md mx-auto">
              <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No articles found
              </h3>
              <p className="text-gray-600">
                Try adjusting your filters or search terms to find what
                you&apos;re looking for.
              </p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Link href={`#`}>
                  <div className="relative h-48 overflow-hidden">
                    <ImgComp
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-[#00269B] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="font-medium">{post.author}</span>
                      <span className="mx-2">•</span>
                      <span>{post.date}</span>
                    </div>

                    <h3 className="text-xl font-bold text-[#142349] mb-3 line-clamp-2 hover:text-[#00269B] transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-[#00269B] font-semibold text-sm hover:text-blue-700 transition-colors duration-200">
                      Read More
                      <svg
                        className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
