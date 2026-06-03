import type { Metadata } from 'next'
import { getStudies, getStudyBySlug } from '@/lib/site-config'
import Navbar from '@/components/Navbar'
import StudyPageContent from '@/components/StudyPageContent'

export async function generateStaticParams() {
  const studies = await getStudies()
  return studies.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const study = await getStudyBySlug(params.slug)
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

export default async function StudyPage({ params }: { params: { slug: string } }) {
  const study = await getStudyBySlug(params.slug)

  if (!study) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-white/60 font-space">Estudio no encontrado.</p>
      </main>
    )
  }

  const descriptionSnippet = study.description.split('\n')[0].slice(0, 160)

  const medicalTestSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: study.name,
    description: descriptionSnippet,
    usesDevice: { '@type': 'MedicalDevice', name: study.name },
    performer: {
      '@type': 'MedicalClinic',
      name: 'RESPIVER – Unidad de Medicina Respiratoria',
      url: 'https://respi-ver.vercel.app',
    },
  }

  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalTestSchema) }}
      />
      <Navbar />
      <StudyPageContent study={study} />
    </main>
  )
}
