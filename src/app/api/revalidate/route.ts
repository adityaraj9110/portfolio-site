import { NextRequest, NextResponse } from "next/server";
import { revalidateTag, revalidatePath } from "next/cache";

export async function GET(request: NextRequest) {
  const secret = request.nextUrl.searchParams.get("secret");

  if (!process.env.REVALIDATE_SECRET || secret !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: "Unauthorized: Invalid or missing revalidate secret" },
      { status: 401 }
    );
  }

  // Purge the cached data tag and pages
  try {
    revalidateTag("linkedin-posts", { expire: 0 });
  } catch (err) {
    console.warn("revalidateTag error:", err);
  }
  revalidatePath("/", "page");
  revalidatePath("/writing", "page");

  return NextResponse.json({
    revalidated: true,
    tag: "linkedin-posts",
    paths: ["/", "/writing"],
    timestamp: new Date().toISOString(),
  });
}
