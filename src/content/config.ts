import { defineCollection, z } from "astro:content";

// TODO: validate images with a schema (https://docs.astro.build/en/guides/upgrade-to/v3/#what-should-i-do-6)

const zBaseEvent = z.object({
  title: z.string(),
  // Transform string to Date object
  date: z.coerce.date(),
  startTime: z.string(),
  link: z.string().optional(),
  image: z.string().optional(),
  avatars: z.array(z.string()).optional(),
  hidden: z.boolean().optional(),
});

const zBasicEvent = zBaseEvent.extend({
  description: z.string(),
  speaker: z.string().optional(),
  type: z.enum([
    "interview",
    "présentation",
    "atelier",
    "table ronde",
    "rencontre",
  ]),
});

const zOnsiteEvent = zBasicEvent.extend({ mode: z.enum(["onsite"]) });
const zOnlineEvent = zBasicEvent.extend({
  mode: z.enum(["online"]),
  youtube: z.string(),
});
const zWatchPartiesEvent = zBaseEvent.extend({
  mode: z.enum(["hybrid"]),
  type: z.enum(["watch-parties"]),
  youtube: z.string().nullish(),
  cities: z.array(z.object({ city: z.string(), link: z.string().nullish() })),
});

const zEvent = z.union([zOnsiteEvent, zOnlineEvent, zWatchPartiesEvent]);

export type IOnsiteEvent = z.infer<typeof zOnsiteEvent>;
export type IOnlineEvent = z.infer<typeof zOnlineEvent>;
export type IWatchPartiesEvent = z.infer<typeof zWatchPartiesEvent>;
export type IEvent = IOnsiteEvent | IOnlineEvent | IWatchPartiesEvent;

const event = defineCollection({
  // Type-check frontmatter using a schema
  schema: zEvent,
});

const zPeople = z.object({
  name: z.string(),
  active: z.boolean(),
  job: z.string().optional(),
  company: z.string().optional(),
  picture: z.string(),
  twitter: z.string().optional(),
  linkedin: z.string().optional(),
  youtube: z.string().optional(),
});

export type IPeople = z.infer<typeof zPeople>;

const people = defineCollection({
  schema: zPeople,
});

const speaker = defineCollection({
  schema: z.object({
    linkedin: z.string(),
    picture: z.string(),
    name: z.string(),
  }),
});

export const collections = { event, people, speaker };
