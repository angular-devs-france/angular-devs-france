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

const zEvent = z.union([zOnsiteEvent, zOnlineEvent]);

export type IOnsiteEvent = z.infer<typeof zOnsiteEvent>;
export type IOnlineEvent = z.infer<typeof zOnlineEvent>;
const event = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    date: z.coerce.date(),
    startTime: z.string(),
    youtube: z.string().optional(),
    link: z.string().optional(),
    image: z.string().optional(),
    mode: z.enum(["onsite", "online"]),
    speaker: z.string().optional(),
    avatars: z.array(z.string()).optional(),
    type: z.string(),
  }),
export type IEvent = IOnsiteEvent | IOnlineEvent;

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
