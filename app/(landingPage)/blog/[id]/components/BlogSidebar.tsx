import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityBlogPost } from "@/lib/sanity/types";
import {
  Facebook,
  Twitter,
  Instagram,
  // Youtube,
  Clock,
  Linkedin,
} from "lucide-react";
import SubscribeForm from "@/components/SubscribeForm";

interface BlogSidebarProps {
  author?: string;
  readTime?: string;
  recentPosts?: SanityBlogPost[];
}

const BlogSidebar: React.FC<BlogSidebarProps> = ({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  author,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  readTime,
  recentPosts,
}) => {
  return (
    <div className="space-y-10">
      {/* Follow Us Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Follow Us</h3>
        <div className="flex gap-3 flex-wrap">
          <Link
            href="https://www.facebook.com/share/p/19pgSjFr8Y/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-md"
            title="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </Link>
          <Link
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-all hover:scale-110 shadow-md"
            title="Follow us on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/lighthousehomecareltd?igsh=MWc4NmlmZG41ODc2OQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110 shadow-md"
            title="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/lighthousehomecare/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110 shadow-md"
            title="Subscribe on YouTube"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-sm border border-blue-100">
        <SubscribeForm 
          title="Subscription"
          description="Subscribe to our newsletter and receive a selection of cool articles every week"
          buttonText="SUBSCRIBE"
          variant="sidebar"
        />
      </div>

      {/* Recent Posts Section */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Recent Posts</h3>
        <div className="space-y-5">
          {recentPosts?.map((post) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="flex gap-4 group hover:bg-gray-50 p-3 rounded-lg transition-all hover:shadow-sm"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 relative overflow-hidden">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                )}
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-bold mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <span className="font-medium">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime || "5 minute read"}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogSidebar;
