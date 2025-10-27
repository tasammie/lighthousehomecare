/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';
import { SanityBlogPost, SanityComment } from '@/lib/sanity/types';
import { urlFor } from '@/sanity/lib/image';

interface UseBlogDataProps {
  post: SanityBlogPost;
  comments: SanityComment[];
  relatedPosts: SanityBlogPost[];
  likes: number;
  views: number;
  shares: number;
}

interface PortableTextBlock {
  _type: string;
  style?: string;
  listItem?: string;
  children?: PortableTextChild[];
}

interface PortableTextChild {
  text: string;
}

export const useBlogData = ({
  post,
  comments,
  relatedPosts,
  likes,
  views,
  shares,
}: UseBlogDataProps) => {
  const blogData = useMemo(() => {
    // Convert Sanity image to URL
    const imageUrl = post.mainImage
      ? urlFor(post.mainImage).url()
      : "/images/caregiver-reading.webp";

    // Format date
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    // Transform Sanity portable text to blog content format
    const transformedContent = {
      introduction: post.excerpt,
      sections: (post.body as PortableTextBlock[] ?? []).map((block) => {
        if (block._type === "block") {
          const text = block.children?.map((child) => child.text).join("") || "";

          if (block.style === "h2" || block.style === "h3") {
            return { title: text, content: "" };
          }

          if (block.listItem === "bullet") {
            return { type: "list" as const, items: [text] };
          }

          return { content: text };
        }
        return { content: "" };
      }),
    };

    // Transform related posts
    const transformedRelatedPosts = relatedPosts.map((relatedPost) => ({
      id: relatedPost.slug.current,
      title: relatedPost.title,
      excerpt: relatedPost.excerpt || "",
      image: relatedPost.mainImage
        ? urlFor(relatedPost.mainImage).url()
        : "/images/placeholder.webp",
      date: new Date(relatedPost.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      readTime: relatedPost.readTime || "5 minute read",
      category: (relatedPost.categories?.[0] as any)?.title || "Uncategorized",
    }));

    return {
      title: post.title,
      author: (post.author as any)?.name || "Anonymous",
      date: formattedDate,
      readTime: post.readTime || "5 minute read",
      views,
      likes,
      comments: comments.length,
      shares,
      image: imageUrl,
      content: transformedContent,
      relatedPosts: transformedRelatedPosts,
    };
  }, [post, comments, relatedPosts, likes, views, shares]);

  const transformedComments = useMemo(() => {
    return comments.map((comment) => ({
      id: parseInt(comment._id) || Math.floor(Math.random() * 1000000),
      author: comment.name,
      date: new Date(comment._createdAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      content: comment.comment,
      likes: comment.likes || 0,
      approved: comment.approved,
    }));
  }, [comments]);

  return {
    blogData,
    transformedComments,
  };
};
