/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SanityComment {
  _id: string;
  _createdAt: string;
  name: string;
  email: string;
  comment: string;
  approved: boolean;
  likes?: number;
  post?: {
    _type: "reference";
    _ref: string;
  };
}

export interface SanityBlogPost {
  _id: string;
  _type: "blogPost";
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  author?: {
    _type: "reference";
    _ref: string;
  };
  mainImage?: {
    _type: "image";
    asset?: {
      _ref: string;
      _type: "reference";
    };
    alt?: string;
  };
  categories?: Array<{
    _type: "reference";
    _ref: string;
  }>;
  publishedAt: string;
  excerpt?: string;
  body?: Array<{
    _type: string;
    style?: string;
    children?: Array<{
      text: string;
      _type: string;
      marks?: string[];
    }>;
  }>;
  readTime?: string;
  views?: number;
  likes?: number;
  shares?: number;
}

export interface SanityAuthor {
  _id: string;
  _type: "author";
  name: string;
  image?: {
    _type: "image";
    asset?: {
      _ref: string;
      _type: "reference";
    };
  };
  bio?: string;
}

export interface SanityCategory {
  _id: string;
  _type: "category";
  title: string;
  slug: {
    current: string;
    _type: "slug";
  };
  description?: string;
}
