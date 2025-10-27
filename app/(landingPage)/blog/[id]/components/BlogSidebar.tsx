import React from "react";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityBlogPost } from "@/lib/sanity/types";
import { Facebook, Twitter, Instagram, Youtube, Clock } from "lucide-react";

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
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-md"
            title="Follow us on Facebook"
          >
            <Facebook className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-all hover:scale-110 shadow-md"
            title="Follow us on Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110 shadow-md"
            title="Follow us on Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110 shadow-md"
            title="Subscribe on YouTube"
          >
            <Youtube className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-sm border border-blue-100">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">Subscription</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">
          Subscribe to our newsletter and receive a selection of cool articles
          every week
        </p>
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
        />
        <button className="w-full bg-[#00269B] text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all hover:shadow-lg active:scale-98">
          SUBSCRIBE
        </button>
        <div className="flex items-start gap-2 mt-4">
          <input
            type="checkbox"
            id="terms"
            className="mt-1 w-4 h-4 text-blue-600 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label
            htmlFor="terms"
            className="text-xs text-gray-600 leading-relaxed"
          >
            By checking this box, you confirm that you have read and are
            agreeing to our terms of use regarding the storage of the data
            submitted through this form.
          </label>
        </div>
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
