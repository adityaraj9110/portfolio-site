import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";
import { LinkedInPost } from "@/lib/linkedin-posts";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { secret, posts } = body;

    const expectedSecret = process.env.REVALIDATE_SECRET || "aditya_portfolio_revalidate_2026";
    if (!secret || secret !== expectedSecret) {
      return NextResponse.json({ error: "Unauthorized: Invalid secret" }, { status: 401 });
    }

    if (!Array.isArray(posts) || posts.length === 0) {
      return NextResponse.json({ error: "Invalid payload: 'posts' array required" }, { status: 400 });
    }

    // Sanitize and format incoming posts
    const formattedPosts: LinkedInPost[] = posts.map((p, index) => ({
      id: p.id || `post-${index + 1}`,
      title: p.title || "Untitled Engineering Note",
      takeaway: p.takeaway || "",
      topic: p.topic || "AI & Architecture",
      url: p.url || "https://www.linkedin.com/in/aditya-raj-9b2165227/",
      impressions: Number(p.impressions) || 0,
      reactions: Number(p.reactions) || 0,
      comments: Number(p.comments) || 0,
      publishedDate: p.publishedDate || new Date().toISOString().slice(0, 10),
    }));

    // In local development or node runtime, update posts.json
    try {
      const postsFilePath = path.join(process.cwd(), "src", "data", "posts.json");
      fs.writeFileSync(postsFilePath, JSON.stringify(formattedPosts, null, 2) + "\n");
    } catch (fsErr) {
      console.warn("Could not write to local disk (expected in serverless edge):", fsErr);
    }

    // Purge Next.js cache
    try {
      revalidateTag("linkedin-posts", { expire: 0 });
    } catch {}
    try {
      revalidatePath("/", "page");
      revalidatePath("/writing", "page");
    } catch {}

    const totalImpressions = formattedPosts.reduce((sum, p) => sum + p.impressions, 0);

    return NextResponse.json({
      success: true,
      syncedCount: formattedPosts.length,
      totalImpressions,
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("Sync error:", error);
    return NextResponse.json({ error: error.message || "Internal Server Error" }, { status: 500 });
  }
}

// Allow CORS preflight if called from a browser extension or bookmarklet on linkedin.com
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization, x-sync-secret",
    },
  });
}
