import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const entries = (await getCollection("diary", ({ data }) => !data.draft)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );

  return rss({
    title: "Between Borders",
    description: "Kamil Akin's public notebook about storytelling, speaking, and becoming.",
    site: new URL("/hereandthere/", context.site),
    items: entries.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.pubDate,
      link: `/hereandthere/diary/${entry.id}/`,
      categories: entry.data.tags,
    })),
    customData: "<language>en</language>",
  });
}
