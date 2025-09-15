import { defineContentConfig, defineCollection, z } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    index: defineCollection({
      type: "data",
      source: "index.json",
      schema: z.object({
        hero: z.object({
          title: z.string(),
          description: z.string(),
          socials: z.array(
            z.object({
              label: z.string(),
              icon: z.string(),
              link: z.string(),
            })
          ),
          images: z.array(
            z.object({
              label: z.string(),
              src: z.string(),
            })
          ),
        }),
        about: z.object({
          description: z.string(),
        }),
        companies: z.array(
          z.object({
            name: z.string(),
            link: z.string(),
            addClass: z.string(),
            date: z.string(),
            role: z.string(),
          })
        ),
        projects: z.array(
          z.object({
            id: z.number(),
            title: z.string(),
            description: z.string(),
            client: z.string(),
            image: z.string(),
            techStacks: z.array(
              z.object({
                label: z.string(),
                icon: z.string(),
                link: z.string(),
              })
            ),
          })
        ),
      }),
    }),
  },
});
