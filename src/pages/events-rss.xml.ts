import rss from "@astrojs/rss";
import { Marked } from "marked";
import type { APIContext } from "astro";
import { getCollection } from "astro:content";

const events = (await getCollection("event")).sort(
  (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
);

type Event = (typeof events)[number];

export function GET(context: APIContext) {
  const items = events.map((event) => {
    return {
      author: event.data.speaker,
      categories: [event.data.type],
      title: formatTitle(event),
      link: event.data.link ?? "https://angulardevs.fr/",
      pubDate: formatPubDate(event),
      content: new Marked().parse(event.body, { async: false }),
    };
  });
  return rss({
    title: "Angular Devs France",
    description: "Les prochains évènements",
    site: context.site ?? "",
    items,
    customData: `<language>fr-fr</language>`,
  });
}

function formatTitle(event: Event) {
  const speaker = event.data.speaker ? ` - ${event.data.speaker}` : "";
  return `${event.data.title}${speaker}`;
}

function formatPubDate(event: Event) {
  const pubDate = new Date(event.data.date ?? "1900-01-01");
  const [startHour, startMinute] = (event.data.startTime ?? "00:00").split(":");
  pubDate.setHours(parseInt(startHour, 10));
  pubDate.setMinutes(parseInt(startMinute, 10));
  return pubDate;
}
