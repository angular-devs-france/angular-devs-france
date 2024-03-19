import {defineCollection, z} from 'astro:content';

// TODO: validate images with a schema (https://docs.astro.build/en/guides/upgrade-to/v3/#what-should-i-do-6)

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
        image: z.string(),
        mode: z.enum(['onsite', 'online']),
        speaker: z.string().optional(),
        avatar: z.string().optional(),
    }),
});

const people = defineCollection({
    schema: z.object({
        name: z.string(),
        active: z.boolean(),
        job: z.string().optional(),
        company: z.string().optional(),
        picture: z.string(),
        twitter: z.string().optional(),
        linkedin: z.string().optional(),
    }),
});

export const collections = {event, people};
