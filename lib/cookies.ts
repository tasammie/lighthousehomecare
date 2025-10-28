// Cookie utility functions for tracking user interactions

export const COOKIE_NAMES = {
  BLOG_VIEWS: 'blog_views',
  BLOG_LIKES: 'blog_likes',
  COMMENT_LIKES: 'comment_likes',
} as const;

export const COOKIE_EXPIRY = {
  VIEWS: 30 * 24 * 60 * 60, // 30 days in seconds
  LIKES: 365 * 24 * 60 * 60, // 1 year in seconds
} as const;

// Helper function to set a cookie
export const setCookie = (name: string, value: string, maxAge: number) => {
  if (typeof document === 'undefined') return;
  
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/; SameSite=Lax`;
};

// Helper function to get a cookie value
export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;
  
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Helper function to get parsed JSON from cookie
export const getCookieJSON = <T>(name: string): T | null => {
  const value = getCookie(name);
  if (!value) return null;
  
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
};

// Helper function to set JSON value in cookie
export const setCookieJSON = <T>(name: string, value: T, maxAge: number) => {
  setCookie(name, JSON.stringify(value), maxAge);
};

// Blog view tracking
export const hasViewedBlog = (postId: string): boolean => {
  const views = getCookieJSON<Record<string, boolean>>(COOKIE_NAMES.BLOG_VIEWS);
  return views?.[postId] || false;
};

export const markBlogAsViewed = (postId: string): void => {
  const views = getCookieJSON<Record<string, boolean>>(COOKIE_NAMES.BLOG_VIEWS) || {};
  views[postId] = true;
  setCookieJSON(COOKIE_NAMES.BLOG_VIEWS, views, COOKIE_EXPIRY.VIEWS);
};

// Blog like tracking
export const hasLikedBlog = (postId: string): boolean => {
  const likes = getCookieJSON<Record<string, boolean>>(COOKIE_NAMES.BLOG_LIKES);
  return likes?.[postId] || false;
};

export const markBlogAsLiked = (postId: string): void => {
  const likes = getCookieJSON<Record<string, boolean>>(COOKIE_NAMES.BLOG_LIKES) || {};
  likes[postId] = true;
  setCookieJSON(COOKIE_NAMES.BLOG_LIKES, likes, COOKIE_EXPIRY.LIKES);
};

// Comment like tracking
export const hasLikedComment = (commentId: string): boolean => {
  const likes = getCookieJSON<Record<string, boolean>>(COOKIE_NAMES.COMMENT_LIKES);
  return likes?.[commentId] || false;
};

export const markCommentAsLiked = (commentId: string): void => {
  const likes = getCookieJSON<Record<string, boolean>>(COOKIE_NAMES.COMMENT_LIKES) || {};
  likes[commentId] = true;
  setCookieJSON(COOKIE_NAMES.COMMENT_LIKES, likes, COOKIE_EXPIRY.LIKES);
};
