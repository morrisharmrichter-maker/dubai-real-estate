import { defineCollection, z } from 'astro:content';

const developersCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    founded: z.number(),
    founder: z.string().optional(),
    headquarters: z.string(),
    employees: z.string(),
    portfolioValue: z.object({
      aed: z.number(),
      eur: z.number()
    }),
    completedUnits: z.number(),
    landmarkProjects: z.array(z.string()),
    description: z.string(),
    website: z.string().url()
  })
});

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    developer: z.string(),
    totalInvestment: z.object({
      aed: z.number(),
      eur: z.number()
    }),
    totalArea: z.object({
      sqft: z.number(),
      sqm: z.number(),
      acres: z.number()
    }),
    totalUnits: z.number(),
    launchDate: z.string(),
    completionTimeline: z.string(),
    location: z.string(),
    priceRange: z.object({
      min: z.object({ aed: z.number(), eur: z.number() }),
      max: z.object({ aed: z.number(), eur: z.number() })
    }),
    rentalYield: z.object({
      min: z.number(),
      max: z.number()
    }),
    capitalAppreciation: z.object({
      fiveYear: z.object({ min: z.number(), max: z.number() })
    }),
    goldenVisaEligible: z.boolean(),
    freeholdStatus: z.boolean(),
    metaDescription: z.string(),
    keywords: z.array(z.string())
  })
});

export const collections = {
  'developers': developersCollection,
  'projects': projectsCollection
};