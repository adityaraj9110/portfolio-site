import { NextResponse } from "next/server";
import { getFeaturedLinkedInPosts, getTotalImpressions } from "@/lib/linkedin-posts";

export async function GET() {
  const posts = await getFeaturedLinkedInPosts();
  const totalImpressions = getTotalImpressions(posts);

  return NextResponse.json({
    posts,
    totalImpressions,
    count: posts.length,
    timestamp: new Date().toISOString(),
  });
}
