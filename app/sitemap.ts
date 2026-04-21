import { MetadataRoute } from 'next'
import { STUDIES } from '@/lib/studies'

const BASE_URL = 'https://respi-ver.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const studyRoutes = STUDIES.map((study) => ({
    url: `${BASE_URL}/estudios/${study.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...studyRoutes,
  ]
}
