import React from "react";
import Image from "next/image";
import Link from "next/link";

interface RelatedPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  category: string;
}

interface RelatedPostsProps {
  posts: RelatedPost[];
}

const RelatedPosts: React.FC<RelatedPostsProps> = ({ posts }) => {
  return (
    <div className="mt-16 border-t border-gray-200 pt-12">
      <h2 className="text-3xl font-bold mb-8">YOU MAY ALSO LIKE</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="group cursor-pointer"
          >
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-semibold">
                  {post.category}
                </span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {post.excerpt}
            </p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <span>{post.date}</span>
              <span>•</span>
              <span>⏱️ {post.readTime}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedPosts;
