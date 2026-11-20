import postsData from '../data/posts.json';

export interface LinkedInPost {
  id: string;
  title: string;
  takeaway: string;
  topic: string;
  url: string;
  impressions: number;
  reactions: number;
  comments: number;
  publishedDate: string;
}

/**
 * Static fallback dataset with latest verified metrics from src/data/posts.json.
 * 1. Used automatically if NOTION_TOKEN or remote JSON is missing.
 * 2. Guarantees the portfolio never crashes or renders blank if an external API times out.
 */
export const FALLBACK_LINKEDIN_POSTS: LinkedInPost[] = postsData as LinkedInPost[];

// Helper to safely extract Notion property values
interface NotionPage {
  id: string;
  properties: Record<string, any>;
}

function mapNotionPageToPost(page: NotionPage): LinkedInPost {
  const p = page.properties;
  return {
    id: page.id,
    title: p.Title?.title?.[0]?.plain_text ?? "Untitled Engineering Note",
    takeaway: p.Takeaway?.rich_text?.[0]?.plain_text ?? "",
    topic: p.Topic?.select?.name ?? "Engineering",
    url: p.PostURL?.url ?? "https://www.linkedin.com/in/aditya-raj-9b2165227/",
    impressions: p.Impressions?.number ?? 0,
    reactions: p.Reactions?.number ?? 0,
    comments: p.Comments?.number ?? 0,
    publishedDate: p.PublishedDate?.date?.start ?? "",
  };
}

/**
 * Fetches featured LinkedIn highlights with ISR caching:
 * 1. Checks Notion REST API (if NOTION_TOKEN & NOTION_DATABASE_ID are set)
 * 2. Checks Remote JSON / Gist URL (if LINKEDIN_POSTS_JSON_URL is set)
 * 3. Falls back gracefully to FALLBACK_LINKEDIN_POSTS
 */
export async function getFeaturedLinkedInPosts(limit = 4): Promise<LinkedInPost[]> {
  const notionToken = process.env.NOTION_TOKEN;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;
  const remoteJsonUrl = process.env.LINKEDIN_POSTS_JSON_URL;

  // 1. Try Notion API if credentials exist
  if (notionToken && notionDatabaseId) {
    try {
      const response = await fetch(
        `https://api.notion.com/v1/databases/${notionDatabaseId}/query`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${notionToken}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            filter: {
              property: "Featured",
              checkbox: { equals: true },
            },
            sorts: [{ property: "Impressions", direction: "descending" }],
            page_size: limit,
          }),
          signal: AbortSignal.timeout(5000),
          next: {
            revalidate: 3600, // Background refresh every 1 hour
            tags: ["linkedin-posts"],
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        const posts: LinkedInPost[] = (data.results ?? []).map(mapNotionPageToPost);
        if (posts.length > 0) {
          return posts;
        }
      } else {
        console.warn(`Notion API returned status ${response.status}; using fallback.`);
      }
    } catch (error) {
      console.warn("Failed to fetch from Notion API, falling back:", error);
    }
  }

  // 2. Try Remote GitHub Gist / JSON URL if configured
  if (remoteJsonUrl) {
    try {
      const response = await fetch(remoteJsonUrl, {
        signal: AbortSignal.timeout(5000),
        next: {
          revalidate: 3600,
          tags: ["linkedin-posts"],
        },
      });

      if (response.ok) {
        const posts: LinkedInPost[] = await response.json();
        if (Array.isArray(posts) && posts.length > 0) {
          return posts.slice(0, limit);
        }
      }
    } catch (error) {
      console.warn("Failed to fetch remote posts JSON, falling back:", error);
    }
  }

  // 3. Resilient fallback
  return FALLBACK_LINKEDIN_POSTS.slice(0, limit);
}

export function formatCompactNumber(num: number): string {
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return num.toString();
}

export function getTotalImpressions(posts: LinkedInPost[]): number {
  return posts.reduce((sum, post) => sum + (post.impressions || 0), 0);
}
