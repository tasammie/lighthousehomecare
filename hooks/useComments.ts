import { useState, useCallback } from 'react';
import { client } from '@/sanity/lib/client';
import { toast } from 'sonner';
import { SanityComment } from '@/lib/sanity/types';
import { hasLikedComment, markCommentAsLiked } from '@/lib/cookies';

interface UseCommentsProps {
  postId: string;
  initialComments?: SanityComment[];
}

export const useComments = ({ 
  postId, 
  initialComments = [] 
}: UseCommentsProps) => {
  const [comments, setComments] = useState<SanityComment[]>(initialComments);
  const [loading, setLoading] = useState(false);

  const handleCommentSubmit = useCallback(async (
    name: string,
    email: string,
    comment: string
  ) => {
    setLoading(true);
    
    try {
      // Create new comment document in Sanity
      const newComment = await client.create({
        _type: 'comment',
        name,
        email,
        comment,
        post: {
          _ref: postId,
        },
        approved: false, // Comments need admin approval
        likes: 0,
        _createdAt: new Date().toISOString(),
      });

      // Update local state optimistically (will show until approved)
      const transformedComment: SanityComment = {
        _id: newComment._id,
        name: newComment.name,
        email: newComment.email,
        comment: newComment.comment,
        post: {
          _type: 'reference',
          _ref: newComment.post._ref
        },
        approved: newComment.approved,
        likes: newComment.likes,
        _createdAt: newComment._createdAt
      };
      setComments(prev => [transformedComment, ...prev]);
      toast.success("Comment submitted successfully! It will appear after approval.");
    } catch (error) {
      console.error("Error submitting comment:", error);
      toast.error("Failed to submit comment. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [postId]);

  const handleCommentLike = useCallback(async (commentId: string) => {
    // Check if user has already liked this comment
    if (hasLikedComment(commentId)) {
      toast.info("You've already liked this comment!");
      return;
    }

    try {
      // Update comment likes in Sanity
      const result = await client
        .patch(commentId)
        .inc({ likes: 1 })
        .commit();

      // Mark as liked in cookies
      markCommentAsLiked(commentId);

      // Update local state
      setComments(prev => 
        prev.map(comment => 
          comment._id === commentId 
            ? { ...comment, likes: result.likes || (comment.likes || 0) + 1 }
            : comment
        )
      );
      toast.success("Comment liked successfully!");
    } catch (error) {
      console.error("Error liking comment:", error);
      toast.error("Failed to like comment. Please try again.");
    }
  }, []);

  const transformedComments = comments.map((comment) => ({
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

  return {
    comments: transformedComments,
    loading,
    handleCommentSubmit,
    handleCommentLike,
    rawComments: comments,
  };
};
