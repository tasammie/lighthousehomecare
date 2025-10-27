import React from "react";
import { ThumbsUp, MessageCircle, Share2 } from "lucide-react";

interface BlogFooterProps {
  author: string;
  readTime: string;
  likes: number;
  comments: number;
  shares: number;
  views?: number;
}

const BlogFooter: React.FC<BlogFooterProps> = ({
  author,
  readTime,
  likes,
  comments,
  shares,
  views,
}) => {
  return (
    <div className="mt-12 py-8 border-t border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{author}</span>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span>⏱️ {readTime}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4" />
            <span>{comments} Comments</span>
          </div>
          <div className="flex items-center gap-2">
            <span>👁️ {views?.toLocaleString() || '0'} views</span>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <ThumbsUp className="w-5 h-5" />
          <span>Like ({likes})</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <MessageCircle className="w-5 h-5" />
          <span>Comments ({comments})</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors">
          <Share2 className="w-5 h-5" />
          <span>Share ({shares})</span>
        </button>
      </div>
    </div>
  );
};

export default BlogFooter;
