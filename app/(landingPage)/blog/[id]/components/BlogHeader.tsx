import React from "react";
import Image from "next/image";
import {
  Share2,
  ThumbsUp,
  Loader2,
  Eye,
  MessageCircle,
  Forward,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

interface BlogHeaderProps {
  title: string;
  author: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  shares: number;
  image: string;
  onLike?: () => void;
  onShare?: () => void;
  loading?: {
    like?: boolean;
    share?: boolean;
  };
}

const BlogHeader: React.FC<BlogHeaderProps> = ({
  title,
  author,
  date,
  readTime,
  views,
  likes,
  comments,
  shares,
  image,
  onLike,
  onShare,
  loading,
}) => {
  return (
    <div className="mb-12">
      {/* Share and Like buttons - Left side fixed */}
      <div className="fixed left-4 top-1/3 hidden xl:flex flex-col gap-6 z-20 bg-white p-3 rounded-lg shadow-lg">
        <button
          onClick={onShare}
          disabled={loading?.share}
          className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-blue-600 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Share this post"
        >
          {loading?.share ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <Share2 className="w-6 h-6" />
          )}
          <span className="text-[10px] font-semibold uppercase tracking-wide">
            Share
          </span>
        </button>
        <div className="h-px bg-gray-200 w-full" />
        <button
          onClick={onLike}
          disabled={loading?.like}
          className="flex flex-col items-center gap-1.5 text-gray-500 hover:text-red-500 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
          title="Like this post"
        >
          {loading?.like ? (
            <Loader2 className="w-6 h-6 animate-spin" />
          ) : (
            <ThumbsUp className="w-6 h-6" />
          )}
          <span className="text-[10px] font-semibold uppercase tracking-wide">
            Like
          </span>
        </button>
      </div>

      {/* Social icons - Left side fixed */}
      <div className="fixed left-4 top-[55%] hidden xl:flex flex-col gap-3 z-20">
        <Link
          href="https://www.facebook.com/share/p/19pgSjFr8Y/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:scale-110 shadow-md"
          title="Share on Facebook"
        >
          <Facebook className="w-4 h-4" />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-all hover:scale-110 shadow-md"
          title="Share on Twitter"
        >
          <Twitter className="w-4 h-4" />
        </Link>
        <Link
          href="https://www.linkedin.com/company/lighthousehomecare/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center text-white hover:bg-blue-800 transition-all hover:scale-110 shadow-md"
          title="Share on LinkedIn"
        >
          <Linkedin className="w-4 h-4" />
        </Link>
        <Link
          href="https://www.instagram.com/lighthousehomecareltd?igsh=MWc4NmlmZG41ODc2OQ=="
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center text-white hover:opacity-90 transition-all hover:scale-110 shadow-md"
          title="Share on Instagram"
        >
          <Instagram className="w-4 h-4" />
        </Link>
      </div>

      {/* Featured Image */}
      <div className="relative w-full h-[500px] mb-8 rounded-xl overflow-hidden shadow-2xl">
        <Image src={image} alt={title} fill className="object-cover" priority />
      </div>

      {/* Stats bar - Clean & modern */}
      <div className="flex flex-wrap items-center gap-6 text-sm mb-6 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-2 text-gray-600">
          <ThumbsUp className="w-4 h-4 text-blue-600" />
          <span className="font-medium">{likes} Likes</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Eye className="w-4 h-4 text-green-600" />
          <span className="font-medium">{views} Views</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <MessageCircle className="w-4 h-4 text-purple-600" />
          <span className="font-medium">{comments} Comments</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Forward className="w-4 h-4 text-orange-600" />
          <span className="font-medium">{shares} Shares</span>
        </div>
      </div>

      {/* Title - Large and prominent */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
        {title}
      </h1>

      {/* Author and Meta Info - Better styling */}
      <div className="flex items-center gap-5 text-sm mb-8">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md">
            {author.substring(0, 2).toUpperCase()}
          </div>
          <div>
            <p className="font-semibold text-gray-900">{author}</p>
            <div className="flex items-center gap-2 text-gray-500 text-xs">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
