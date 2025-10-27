import { groq } from "next-sanity";

// Get single blog post by slug
export const BLOG_POST_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    mainImage,
    categories[]->{
      title,
      slug
    },
    publishedAt,
    excerpt,
    body,
    readTime,
    views,
    likes,
    shares
  }
`;

// Get all blog posts
export const ALL_POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    author->{
      name,
      image
    },
    mainImage,
    categories[]->{
      title,
      slug
    },
    publishedAt,
    excerpt,
    readTime,
    views,
    likes
  }
`;

// Get related posts
export const RELATED_POSTS_QUERY = groq`
  *[_type == "blogPost" && slug.current != $slug && count((categories[]->slug.current)[@ in $categories]) > 0] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    mainImage,
    categories[]->{
      title,
      slug
    },
    publishedAt,
    excerpt,
    readTime
  }
`;

// Get comments for a post
export const COMMENTS_QUERY = groq`
  *[_type == "comment" && post._ref == $postId && approved == true] | order(_createdAt desc) {
    _id,
    _createdAt,
    name,
    email,
    comment,
    likes
  }
`;

// Get recent posts for sidebar
export const RECENT_POSTS_QUERY = groq`
  *[_type == "blogPost"] | order(publishedAt desc) [0...4] {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    readTime
  }
`;
