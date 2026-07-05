import NavigationRail from "@/components/NavigationRail";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";
import { ExternalLink, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";

const SUBSTACK_URL = "https://aliciajkeyes.substack.com";
const CORS_PROXIES = [
  "https://api.allorigins.win/raw?url=",
  "https://corsproxy.io/?url=",
  "https://api.codetabs.com/v1/proxy/?quest=",
];
const RSS2JSON_ENDPOINT = "https://api.rss2json.com/v1/api.json?rss_url=";
const REQUEST_TIMEOUT_MS = 4500;

interface SubstackPost {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  content: string;
  thumbnail: string | null;
}

interface Rss2JsonItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  content: string;
  thumbnail?: string;
}

interface Rss2JsonResponse {
  status: string;
  items?: Rss2JsonItem[];
}

function parseRSS(xml: string): SubstackPost[] {
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "text/xml");
  const items = doc.querySelectorAll("item");
  const posts: SubstackPost[] = [];

  items.forEach((item) => {
    const title = item.querySelector("title")?.textContent ?? "";
    const link = item.querySelector("link")?.textContent ?? "";
    const description = item.querySelector("description")?.textContent ?? "";
    const pubDate = item.querySelector("pubDate")?.textContent ?? "";
    const contentEncoded = item.getElementsByTagName("content:encoded")[0]?.textContent ?? "";

    let thumbnail: string | null = null;
    const enclosure = item.querySelector("enclosure");
    if (enclosure?.getAttribute("type")?.startsWith("image")) {
      thumbnail = enclosure.getAttribute("url");
    }
    if (!thumbnail) {
      const imgMatch = contentEncoded.match(/<img[^>]+src="([^"]+)"/);
      if (imgMatch) thumbnail = imgMatch[1];
    }

    posts.push({ title, link, description, pubDate, content: contentEncoded, thumbnail });
  });

  return posts;
}

function parseRss2JsonFeed(payload: Rss2JsonResponse): SubstackPost[] {
  if (payload.status !== "ok" || !payload.items?.length) return [];

  return payload.items.map((item) => ({
    title: item.title ?? "",
    link: item.link ?? "",
    description: item.description ?? "",
    pubDate: item.pubDate ?? "",
    content: item.content ?? "",
    thumbnail: item.thumbnail || null,
  }));
}

async function fetchWithTimeout(url: string, init: RequestInit): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    return await fetch(url, { ...init, signal: controller.signal });
  } finally {
    window.clearTimeout(timeoutId);
  }
}

async function fetchFeedViaProxy(proxy: string, feedUrl: string): Promise<SubstackPost[]> {
  const encodedFeedUrl = encodeURIComponent(feedUrl);
  const res = await fetchWithTimeout(`${proxy}${encodedFeedUrl}`, {
    cache: "no-store",
    headers: {
      "Cache-Control": "no-cache",
      Pragma: "no-cache",
    },
  });

  if (!res.ok) {
    throw new Error(`${proxy} returned ${res.status}`);
  }

  const xml = await res.text();
  const posts = parseRSS(xml);
  if (!posts.length) {
    throw new Error(`${proxy} returned empty feed`);
  }

  return posts;
}

async function fetchFeedViaRss2Json(feedUrl: string): Promise<SubstackPost[]> {
  const res = await fetchWithTimeout(`${RSS2JSON_ENDPOINT}${encodeURIComponent(feedUrl)}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`rss2json returned ${res.status}`);
  }

  const payload = (await res.json()) as Rss2JsonResponse;
  const posts = parseRss2JsonFeed(payload);
  if (!posts.length) {
    throw new Error("rss2json returned empty feed");
  }

  return posts;
}

async function fetchFeedWithFallback(feedUrl: string): Promise<SubstackPost[]> {
  const attempts: Promise<SubstackPost[]>[] = [
    fetchFeedViaRss2Json(feedUrl),
    ...CORS_PROXIES.map((proxy) => fetchFeedViaProxy(proxy, feedUrl)),
  ];

  const firstFulfilled = <T,>(promises: Promise<T>[]) =>
    new Promise<T>((resolve, reject) => {
      let rejected = 0;

      promises.forEach((promise) => {
        promise.then(resolve).catch(() => {
          rejected += 1;
          if (rejected === promises.length) {
            reject(new Error("All feed sources failed"));
          }
        });
      });
    });

  try {
    return await firstFulfilled(attempts);
  } catch {
    const settled = await Promise.allSettled(attempts);
    const best = settled
      .filter((result): result is PromiseFulfilledResult<SubstackPost[]> => result.status === "fulfilled")
      .map((result) => result.value)
      .sort((a, b) => b.length - a.length)[0];

    if (best?.length) return best;
    throw new Error("No feed source returned posts");
  }
}

function decodeEntities(text: string): string {
  const el = document.createElement("textarea");
  el.innerHTML = text;
  return el.value;
}

function getExcerpt(html: string, maxLen = 160): string {
  const div = document.createElement("div");
  div.innerHTML = html;
  div.querySelectorAll(".subscription-widget-wrap-editor").forEach((el) => el.remove());
  const text = div.textContent ?? "";
  return text.length > maxLen ? text.slice(0, maxLen).trim() + "…" : text;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

const Blog = () => {
  const [posts, setPosts] = useState<SubstackPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function fetchWithFallback() {
      setLoading(true);
      setError(false);

      try {
        const feedUrl = `${SUBSTACK_URL}/feed?cb=${Date.now()}`;
        const best = await fetchFeedWithFallback(feedUrl);
        if (cancelled) return;

        const sortedPosts = [...best].sort(
          (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime()
        );
        setPosts(sortedPosts);
      } catch {
        if (cancelled) return;
        setError(true);
        setPosts([]);
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchWithFallback();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <NavigationRail />
      <ScrollToTop />
      <main className="lg:content-offset pt-24 lg:pt-0">
        <section className="min-h-[30vh] lg:min-h-[40vh] flex flex-col justify-center px-6 sm:px-8 lg:px-16">
          <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground max-w-3xl">
            Substack
          </h1>
          <a
            href={SUBSTACK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-6 font-display text-[11px] text-primary tracking-wider hover:underline underline-offset-4 transition-colors duration-200"
          >
            READ ON SUBSTACK
            <ExternalLink className="w-4 h-4" />
          </a>
        </section>

        <section className="border-t border-border">
          {loading && (
            <div className="flex items-center justify-center py-24">
              <Loader2 className="w-6 h-6 text-primary animate-spin" />
            </div>
          )}

          {error && (
            <div className="py-24 px-6 sm:px-8 lg:px-16 text-center">
              <p className="font-body text-muted-foreground">
                Unable to load posts.{" "}
                <a
                  href={SUBSTACK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Visit Substack directly →
                </a>
              </p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div className="py-24 px-6 sm:px-8 lg:px-16 text-center">
              <p className="font-body text-muted-foreground">No posts yet. Check back soon!</p>
            </div>
          )}

          {posts.map((post, i) => (
            <motion.a
              key={post.link}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="block border-b border-border py-8 sm:py-10 px-6 sm:px-8 lg:px-16 group cursor-pointer hover:bg-secondary/40 transition-colors duration-200"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {post.thumbnail && (
                  <div className="md:w-48 md:h-32 flex-shrink-0 overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt=""
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex-1 flex flex-col justify-center">
                  <span className="font-display text-[10px] text-primary tracking-widest mb-2">
                    {formatDate(post.pubDate)}
                  </span>
                  <h2 className="font-display text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="font-body text-sm text-muted-foreground mt-2 leading-relaxed max-w-2xl">
                      {decodeEntities(post.description.length > 2 ? post.description : getExcerpt(post.content))}
                    </p>
                  )}
                  <span className="font-display text-xs text-primary mt-4 inline-flex items-center gap-1 tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    READ ON SUBSTACK <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Blog;
