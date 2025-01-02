"use client";

import { useState, useEffect, FC } from "react";
import { User, Send, Calendar } from 'lucide-react';

interface CommentsProps {
  blogId: string;
}

interface Comment {
  id: string;
  name: string;
  text: string;
  date: string;
}

const Comments: FC<CommentsProps> = ({ blogId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState<string>(""); 
  const [newComment, setNewComment] = useState<string>(""); 

  useEffect(() => {
    const savedComments = JSON.parse(
      localStorage.getItem(`comments_${blogId}`) || "[]"
    ) as Comment[];
    setComments(savedComments);
  }, [blogId]);

  const handleAddComment = () => {
    if (name.trim() && newComment.trim()) {
      const currentDate = new Date().toLocaleDateString();
      const dateId = Date.now().toString();
      const updatedComments = [
        ...comments,
        { name: name, text: newComment, date: currentDate, id: dateId },
      ];
      setComments(updatedComments);
      localStorage.setItem(
        `comments_${blogId}`,
        JSON.stringify(updatedComments)
      );
      setName("");
      setNewComment("");
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-100 rounded-lg shadow-lg">
      <h3 className="text-3xl font-bold text-gray-900 mb-8">Comments</h3>

      <div className="space-y-6 mb-8">
        <input
          type="text"
          className="w-full py-3 px-4 bg-white border text-black border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
        />

        <textarea
          className="w-full py-3 px-4 bg-white text-black border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-150 ease-in-out"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
          rows={4}
        />

        <button
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          onClick={handleAddComment}
        >
          <Send className="mr-2 h-5 w-5" />
          Add Comment
        </button>
      </div>

      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            className="bg-white shadow-md rounded-lg p-6"
            key={comment.id}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="bg-blue-500 rounded-full p-2 mr-3">
                  <User className="h-5 w-5 text-white" />
                </div>
                <p className="text-lg font-semibold text-gray-900">{comment.name}</p>
              </div>
              <div className="flex items-center text-sm text-gray-500">
                <Calendar className="h-4 w-4 mr-1" />
                <p>{comment.date}</p>
              </div>
            </div>
            <p className="text-gray-700 text-lg">{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comments;

