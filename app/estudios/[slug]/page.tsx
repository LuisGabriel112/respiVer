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

  const descriptionSnippet = study.description.split('\n')[0].slice(0, 160)

  const medicalTestSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalTest',
    name: study.name,
    description: descriptionSnippet,
    usedToDiagnose: study.indications.map((indication) => ({
      '@type': 'MedicalCondition',
      name: indication,
    })),
    usesDevice: {
      '@type': 'MedicalDevice',
      name: study.name,
    },
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
