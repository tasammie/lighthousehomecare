/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { ImgComp } from "@/components/ImgComp";
import { Search } from "lucide-react";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { BlogFilters } from "../BlogFilter";
import { client } from "@/sanity/lib/client";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { SanityBlogPost } from "@/lib/sanity/types";

interface BlogListProps {
  filters: BlogFilters;
}

export default function BlogList({ filters }: BlogListProps) {
  const [blogPosts, setBlogPosts] = useState<SanityBlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const posts = await client.fetch(ALL_POSTS_QUERY);
        setBlogPosts(posts);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      // Search filter
      if (
        filters.search &&
        !post.title.toLowerCase().includes(filters.search.toLowerCase()) &&
        !post.excerpt?.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      // Category filter
      if (
        filters.category !== "All Categories" &&
        !post.categories?.some(
          (cat: any) => cat.title === filters.category
        )
      ) {
        return false;
      }

      // Date filter
      if (filters.date) {
        const postDate = new Date(post.publishedAt);
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
  }, [blogPosts, filters]);

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-sm overflow-hidden animate-pulse"
              >
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-16 bg-gray-200 rounded mb-6"></div>
                  <div className="h-4 bg-gray-200 rounded w-20"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

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
                key={post._id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <Link
                  href={`/blog/${post.slug.current}`}
                  className="group block h-full"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ImgComp
                      src={
                        post.mainImage
                          ? urlFor(post.mainImage).url()
                          : "/images/care-at-home.webp"
                      }
                      alt={post.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <span className="absolute top-4 left-4 bg-[#00269B] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {(post.categories?.[0] as any)?.title || "Uncategorized"}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span className="font-medium">{(post.author as any)?.name}</span>
                      <span className="mx-2">•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-US",
                          {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          }
                        )}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[#142349] mb-3 line-clamp-2 hover:text-[#00269B] transition-colors duration-200">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt || "No excerpt available"}
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
