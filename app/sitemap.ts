import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://fixology.co.uk'
  return [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/qualify`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
