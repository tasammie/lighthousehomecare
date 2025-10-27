import React, { useState } from "react";
import { Loader2 } from "lucide-react";

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  likes: number;
  avatar?: string;
}

interface BlogCommentsProps {
  comments: Comment[];
  totalComments: number;
  onCommentSubmit?: (name: string, email: string, comment: string) => void;
  loading?: boolean;
}

const BlogComments: React.FC<BlogCommentsProps> = ({
  comments,
  totalComments,
  onCommentSubmit,
  loading,
}) => {
  const [showCommentForm, setShowCommentForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onCommentSubmit && formData.name && formData.email && formData.comment) {
      onCommentSubmit(formData.name, formData.email, formData.comment);
      setFormData({ name: "", email: "", comment: "" });
      setShowCommentForm(false);
    }
  };

  return (
    <div className="mt-12 border-t border-gray-200 pt-8">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-2xl font-bold">All Comments ({totalComments})</h3>
        <button
          onClick={() => setShowCommentForm(!showCommentForm)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          {showCommentForm ? "Cancel" : "Add Comment"}
        </button>
      </div>

      {/* Comment Form */}
      {showCommentForm && (
        <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <textarea
            placeholder="Your Comment"
            value={formData.comment}
            onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting...
              </>
            ) : (
              "Submit Comment"
            )}
          </button>
        </form>
      )}

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold flex-shrink-0">
              {comment.author.substring(0, 2).toUpperCase()}
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-gray-900">{comment.author}</h4>
              <p className="text-gray-700 mt-2 leading-relaxed">
                {comment.content}
              </p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-500">
                <span>{comment.date}</span>
                <button className="flex items-center gap-1 hover:text-blue-600 transition-colors">
                  👍 Like
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogComments;
