import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

type Comment = {
  id: number;
  content: string;
  createdAt: string;
};

// In‑memory store (reset on server restart)
let comments: Comment[] = [];

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page") ?? "1");
  const limit = Number(url.searchParams.get("limit") ?? "10");
  const start = (page - 1) * limit;
  const end = start + limit;
  const data = comments.slice(start, end);
  return NextResponse.json({ data, page, limit, total: comments.length });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const content = body?.content;
    if (typeof content !== "string" || !content.trim() || content.length > 500) {
      return NextResponse.json({ error: "Invalid content" }, { status: 400 });
    }
    const newComment: Comment = {
      id: Date.now(),
      content: content.trim(),
      createdAt: new Date().toISOString(),
    };
    comments.unshift(newComment);
    return NextResponse.json(newComment, { status: 201 });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
