import React from "react";
import BlogDetails from ".";
import { client } from "@/sanity/lib/client";
import {
  BLOG_POST_QUERY,
  COMMENTS_QUERY,
  RELATED_POSTS_QUERY,
  RECENT_POSTS_QUERY,
} from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  console.log(client.config());

  // Fetch blog post data
  const post = await client.fetch(BLOG_POST_QUERY, { slug: id });
  if (!post) {
    notFound();
  }

  // Fetch comments
  const comments = await client.fetch(COMMENTS_QUERY, { postId: post._id });
  console.log(comments, "comments");
  // Get category slugs for related posts
  const categorySlugss =
    post.categories?.map(
      (cat: { slug: { current: string } }) => cat.slug.current
    ) || [];

  // Fetch related posts
  const relatedPosts = await client.fetch(RELATED_POSTS_QUERY, {
    slug: id,
    categories: categorySlugss,
  });

  // Fetch recent posts for sidebar
  const recentPosts = await client.fetch(RECENT_POSTS_QUERY);

  return (
    <div className="my-32">
      <BlogDetails
        post={post}
        comments={comments}
        relatedPosts={relatedPosts}
        recentPosts={recentPosts}
      />
    </div>
  );
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = await client.fetch(`*[_type == "blogPost"]{slug}`);
  return posts.map((post: { slug: { current: string } }) => ({
    id: post.slug.current,
  }));
}
