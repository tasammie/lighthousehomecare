import { useState, useCallback } from "react";
import { client } from "@/sanity/lib/client";
import { toast } from "sonner";

interface BlogInteractionState {
  likes: number;
  views: number;
  shares: number;
  loading: {
    like: boolean;
    share: boolean;
    view: boolean;
  };
}

interface UseBlogInteractionsProps {
  postId: string;
  initialLikes?: number;
  initialViews?: number;
  initialShares?: number;
}

export const useBlogInteractions = ({
  postId,
  initialLikes = 0,
  initialViews = 0,
  initialShares = 0,
}: UseBlogInteractionsProps) => {
  const [state, setState] = useState<BlogInteractionState>({
    likes: initialLikes,
    views: initialViews,
    shares: initialShares,
    loading: {
      like: false,
      share: false,
      view: false,
    },
  });

  const incrementViews = useCallback(async () => {
    if (state.loading.view) return;

    setState((prev) => ({
      ...prev,
      loading: { ...prev.loading, view: true },
    }));

    try {
      const result = await client.patch(postId).inc({ views: 1 }).commit();

      setState((prev) => ({
        ...prev,
        views: result.views || prev.views + 1,
        loading: { ...prev.loading, view: false },
      }));
    } catch (error) {
      console.error("Error incrementing views:", error);
      setState((prev) => ({
        ...prev,
        loading: { ...prev.loading, view: false },
      }));
    }
  }, [postId]);

  const handleLike = useCallback(async () => {
    if (state.loading.like) return;

    setState((prev) => ({
      ...prev,
      loading: { ...prev.loading, like: true },
    }));

    try {
      const result = await client.patch(postId).inc({ likes: 1 }).commit();

      setState((prev) => ({
        ...prev,
        likes: result.likes || prev.likes + 1,
        loading: { ...prev.loading, like: false },
      }));

      toast.success("Post liked successfully!");
    } catch (error) {
      console.error("Error liking post:", error);
      setState((prev) => ({
        ...prev,
        loading: { ...prev.loading, like: false },
      }));
      toast.error("Failed to like post. Please try again.");
    }
  }, [postId, state.loading.like]);

  const handleShare = useCallback(
    async (title?: string, text?: string) => {
      if (state.loading.share) return;

      setState((prev) => ({
        ...prev,
        loading: { ...prev.loading, share: true },
      }));

      try {
        // Update share count in Sanity
        const result = await client.patch(postId).inc({ shares: 1 }).commit();

        setState((prev) => ({
          ...prev,
          shares: result.shares || prev.shares + 1,
          loading: { ...prev.loading, share: false },
        }));

        // Web Share API with actual content
        if (navigator.share && title && text) {
          await navigator.share({
            title,
            url: window.location.href,
          });
          toast.success("Post shared successfully!");
        } else {
          toast.success("Share link copied to clipboard!");
        }
      } catch (error) {
        console.error("Error sharing post:", error);
        setState((prev) => ({
          ...prev,
          loading: { ...prev.loading, share: false },
        }));
        toast.error("Failed to share post. Please try again.");
      }
    },
    [postId, state.loading.share]
  );

  return {
    likes: state.likes,
    views: state.views,
    shares: state.shares,
    loading: state.loading,
    incrementViews,
    handleLike,
    handleShare,
  };
};
