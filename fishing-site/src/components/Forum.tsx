"use client";
import { useState, FormEvent } from "react";

type Comment = {
  id: number;
  content: string;
  createdAt: Date;
};

export default function Forum() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!newComment.trim()) return;
    const comment: Comment = {
      id: Date.now(),
      content: newComment.trim(),
      createdAt: new Date()
    };
    setComments([comment, ...comments]);
    setNewComment("");
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
            <small className="text-gray-500">
              {c.createdAt.toLocaleString()}
            </small>
          </li>
        ))}
      </ul>
    </section>
  );
}
