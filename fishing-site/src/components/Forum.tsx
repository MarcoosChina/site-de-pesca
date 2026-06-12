"use client";
import { useState, useEffect, FormEvent } from "react";

// Define comment shape matching API response
interface Comment {
  id: number;
  content: string;
  createdAt: string; // ISO timestamp string
}

export default function Forum() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState<string>("");

  // Load existing comments on component mount
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        if (!res.ok) throw new Error("Failed to fetch comments");
        const json = await res.json();
        // API returns { data: Comment[], page, limit, total }
        setComments(json.data ?? []);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: newComment.trim() }),
      });
      if (!res.ok) throw new Error("Failed to post comment");
      const created: Comment = await res.json();
      // Prepend new comment to list
      setComments((prev) => [created, ...prev]);
      setNewComment("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Fórum</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded p-2 mb-2"
          rows={3}
          placeholder="Escreva seu comentário..."
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Enviar
        </button>
      </form>
      <ul>
        {comments.map((c) => (
          <li key={c.id} className="border-b py-2">
            <p>{c.content}</p>
            <small className="text-gray-500">{new Date(c.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
