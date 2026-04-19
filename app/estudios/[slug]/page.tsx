import type { Metadata } from 'next'
import { STUDIES, getStudyBySlug } from '@/lib/studies'
import Navbar from '@/components/Navbar'
import StudyPageContent from '@/components/StudyPageContent'

export async function generateStaticParams() {
  return STUDIES.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = getStudyBySlug(params.slug)
  if (!study) return {}

  const descriptionSnippet = study.description.split('\n')[0].slice(0, 160)

  return {
    title: `${study.name} | RESPIVER`,
    description: descriptionSnippet,
    openGraph: {
      title: `${study.name} — RESPIVER`,
      description: descriptionSnippet,
      type: 'article',
      locale: 'es_MX',
    },
  }
}

export default function StudyPage({ params }: { params: { slug: string } }) {
  const study = getStudyBySlug(params.slug)

  // With SSG + generateStaticParams this branch only runs for unknown slugs
  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-white/60 font-space">Estudio no encontrado.</p>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <StudyPageContent study={study} />
    </main>
  )
}
