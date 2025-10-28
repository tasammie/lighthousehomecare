"use client";
import React, { useEffect } from "react";
import BlogHeader from "./components/BlogHeader";
import BlogContent from "./components/BlogContent";
import BlogSidebar from "./components/BlogSidebar";
import BlogComments from "./components/BlogComments";
import BlogFooter from "./components/BlogFooter";
import RelatedPosts from "./components/RelatedPosts";
// import { SanityBlogPost, SanityComment } from "@/lib/sanity/types";
import { useBlogInteractions } from "@/hooks/useBlogInteractions";
import { useComments } from "@/hooks/useComments";
import { useBlogData } from "@/hooks/useBlogData";
import { SanityBlogPost, SanityComment } from "@/lib/sanity/types";

interface BlogDetailsProps {
  post: SanityBlogPost;
  comments: SanityComment[];
  relatedPosts: SanityBlogPost[];
  recentPosts?: SanityBlogPost[];
}

const BlogDetails: React.FC<BlogDetailsProps> = ({
  post,
  comments: initialComments,
  relatedPosts: initialRelatedPosts,
  recentPosts,
}) => {
  // Blog interactions hook
  const {
    likes,
    views,
    shares,
    loading,
    incrementViews,
    handleLike,
    handleShare,
  } = useBlogInteractions({
    postId: post._id,
    initialLikes: post.likes || 0,
    initialViews: post.views || 0,
    initialShares: post.shares || 0,
  });

  // Comments hook
  const {
    comments: transformedComments,
    loading: commentLoading,
    handleCommentSubmit,
    handleCommentLike,
  } = useComments({
    postId: post._id,
    initialComments,
  });

  // Blog data transformation hook
  const { blogData } = useBlogData({
    post,
    comments: initialComments,
    relatedPosts: initialRelatedPosts,
    likes,
    views,
    shares,
  });

  // Increment view count on mount
  useEffect(() => {
    incrementViews();
  }, [incrementViews]);

  // Enhanced share handler with blog data
  const handleShareWithContent = async () => {
    try {
      await handleShare(blogData.title, blogData.content.introduction);
    } catch (error) {
      console.error("Error sharing post:", error);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <BlogHeader
              title={blogData.title}
              author={blogData.author}
              date={blogData.date}
              readTime={blogData.readTime}
              views={blogData.views}
              likes={blogData.likes}
              comments={blogData.comments}
              shares={blogData.shares}
              image={blogData.image}
              onLike={handleLike}
              onShare={handleShareWithContent}
              loading={loading}
            />

            <BlogContent body={post.body || []} excerpt={post.excerpt} />

            <BlogFooter
              author={blogData.author}
              readTime={blogData.readTime}
              likes={blogData.likes}
              comments={blogData.comments}
              shares={blogData.shares}
              views={blogData.views}
            />

            <BlogComments
              comments={transformedComments}
              totalComments={initialComments.length}
              onCommentSubmit={handleCommentSubmit}
              onCommentLike={handleCommentLike}
              loading={commentLoading}
            />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <BlogSidebar
                author={blogData.author}
                readTime={blogData.readTime}
                recentPosts={recentPosts}
              />
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <RelatedPosts posts={blogData.relatedPosts} />
      </div>
    </div>
  );
};

export default BlogDetails;
