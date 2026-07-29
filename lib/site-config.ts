import { cache } from 'react'
import { createReader } from '@keystatic/core/reader'
import keystaticConfig from '@/keystatic.config'
import type { Study, StudyParameter } from '@/lib/studies'
import type { SeccionData } from '@/components/SeccionPersonalizada'

const reader = createReader(process.cwd(), keystaticConfig)

// ── Types ──────────────────────────────────────────────────────────────────

export type Contacto = {
  telefono_display: string
  telefono_href: string
  whatsapp_display: string
  whatsapp_numero: string
  email: string
  direccion_linea1: string
  direccion_linea2: string
  instagram_handle: string
  facebook_handle: string
}

export type HeroConfig = {
  descripcion: string
  cta_texto: string
}

export type StatItem = {
  valor: string
  etiqueta: string
  descripcion: string
}

export type PaginaConfig = {
  mostrar_ticker: boolean
  mostrar_stats: boolean
  mostrar_cuando: boolean
  mostrar_galeria: boolean
  secciones: SeccionData[]
}

export type GaleriaData = {
  equipos: { imagen: string; titulo: string; destacada: boolean }[]
  instalaciones: { imagen: string; titulo: string }[]
}

// ── Defaults ───────────────────────────────────────────────────────────────

const CONTACTO_DEFAULT: Contacto = {
  telefono_display: '229 447 5147',
  telefono_href: '2294475147',
  whatsapp_display: '229 447 5147',
  whatsapp_numero: '522294475147',
  email: '',
  direccion_linea1: 'Av Paseo La Niña 103, Fracc. Las Américas',
  direccion_linea2: '94299 Boca del Río, Veracruz',
  instagram_handle: '@respiver.mx',
  facebook_handle: '@neumoclinical',
}

const HERO_DEFAULT: HeroConfig = {
  descripcion:
    'Contamos con la tecnología más avanzada de Veracruz para el diagnóstico y seguimiento de asma, EPOC, fibrosis pulmonar, medicina del sueño, enfermedades neuromusculares con afección respiratoria y muchas más.',
  cta_texto: 'Ven y conoce nuestras instalaciones y servicios →',
}

const TICKER_DEFAULT = [
  'Espirometría Simple', 'Pletismografía Corporal', 'DLCO', 'FeNO',
  'PImax · PEmax', 'Polisomnografía', 'Poligrafía Respiratoria',
  'Caminata 6 Minutos', 'Saturometría', 'Espirometría BD',
  'Oscilometría IOS', 'Medicina Respiratoria',
]

const STATS_DEFAULT: StatItem[] = [
  { valor: '13+', etiqueta: 'Estudios disponibles', descripcion: 'Diagnósticos especializados' },
  { valor: '6', etiqueta: 'Áreas diagnósticas', descripcion: 'Cobertura respiratoria total' },
  { valor: '100%', etiqueta: 'No invasivos', descripcion: 'Seguridad y confort del paciente' },
  { valor: '1ª', etiqueta: 'Unidad en Veracruz', descripcion: 'Tecnología de vanguardia' },
]

const GALERIA_DEFAULT: GaleriaData = {
  equipos: [
    { imagen: '/estudios/espirometro.png', titulo: 'Espirómetro', destacada: true },
    { imagen: '/estudios/pletismografo.png', titulo: 'Pletismógrafo', destacada: false },
    { imagen: '/estudios/dlco.png', titulo: 'Difusión DLCO', destacada: false },
    { imagen: '/estudios/feno.png', titulo: 'FeNO NObreath', destacada: false },
  ],
  instalaciones: [
    { imagen: '/estudios/pletismografo-paciente.jpg', titulo: 'Pletismografía en nuestras instalaciones' },
    { imagen: '/estudios/feno-paciente.jpg', titulo: 'FeNO en nuestras instalaciones' },
  ],
}

// ── Readers ────────────────────────────────────────────────────────────────

export const getContacto = cache(async (): Promise<Contacto> => {
  try {
    const d = await reader.singletons.contacto.read()
    if (!d) return CONTACTO_DEFAULT
    return {
      telefono_display: d.telefono_display || CONTACTO_DEFAULT.telefono_display,
      telefono_href: d.telefono_href || CONTACTO_DEFAULT.telefono_href,
      whatsapp_display: d.whatsapp_display || CONTACTO_DEFAULT.whatsapp_display,
      whatsapp_numero: d.whatsapp_numero || CONTACTO_DEFAULT.whatsapp_numero,
      email: d.email || '',
      direccion_linea1: d.direccion_linea1 || CONTACTO_DEFAULT.direccion_linea1,
      direccion_linea2: d.direccion_linea2 || CONTACTO_DEFAULT.direccion_linea2,
      instagram_handle: d.instagram_handle || CONTACTO_DEFAULT.instagram_handle,
      facebook_handle: d.facebook_handle || CONTACTO_DEFAULT.facebook_handle,
    }
  } catch { return CONTACTO_DEFAULT }
})

export const getHeroConfig = cache(async (): Promise<HeroConfig> => {
  try {
    const d = await reader.singletons.hero.read()
    if (!d) return HERO_DEFAULT
    return {
      descripcion: d.descripcion || HERO_DEFAULT.descripcion,
      cta_texto: d.cta_texto || HERO_DEFAULT.cta_texto,
    }
  } catch { return HERO_DEFAULT }
})

export const getTickerItems = cache(async (): Promise<string[]> => {
  try {
    const d = await reader.singletons.ticker.read()
    if (!d?.items?.length) return TICKER_DEFAULT
    return d.items as string[]
  } catch { return TICKER_DEFAULT }
})

export const getStats = cache(async (): Promise<StatItem[]> => {
  try {
    const d = await reader.singletons.stats.read()
    if (!d?.items?.length) return STATS_DEFAULT
    return d.items as StatItem[]
  } catch { return STATS_DEFAULT }
})

export const getGaleria = cache(async (): Promise<GaleriaData> => {
  try {
    const d = await reader.singletons.galeria.read()
    if (!d) return GALERIA_DEFAULT
    const equipos = (d.equipos || []).map((e: any) => ({
      imagen: e.imagen ? `/galeria/equipos/${e.imagen}` : '',
      titulo: e.titulo || '',
      destacada: e.destacada ?? false,
    })).filter((e: any) => e.imagen)
    const instalaciones = (d.instalaciones || []).map((i: any) => ({
      imagen: i.imagen ? `/galeria/instalaciones/${i.imagen}` : '',
      titulo: i.titulo || '',
    })).filter((i: any) => i.imagen)
    if (!equipos.length && !instalaciones.length) return GALERIA_DEFAULT
    return { equipos, instalaciones }
  } catch { return GALERIA_DEFAULT }
})

const PAGINA_DEFAULT: PaginaConfig = {
  mostrar_ticker: true,
  mostrar_stats: true,
  mostrar_cuando: true,
  mostrar_galeria: true,
  secciones: [],
}

export const getPaginaConfig = cache(async (): Promise<PaginaConfig> => {
  try {
    const d = await reader.singletons.pagina.read()
    if (!d) return PAGINA_DEFAULT
    const secciones: SeccionData[] = ((d.secciones as any[]) ?? []).map((s) => ({
      tipo: (s.tipo as SeccionData['tipo']) ?? 'texto',
      posicion: (s.posicion as string) ?? 'pre-contacto',
      visible: s.visible ?? true,
      titulo: s.titulo ?? '',
      subtitulo: s.subtitulo ?? '',
      contenido: s.contenido ?? '',
      boton_texto: s.boton_texto ?? '',
      boton_enlace: s.boton_enlace ?? '',
      imagen: s.imagen ? `/secciones/${s.imagen}` : null,
    }))
    return {
      mostrar_ticker: d.mostrar_ticker ?? true,
      mostrar_stats: d.mostrar_stats ?? true,
      mostrar_cuando: d.mostrar_cuando ?? true,
      mostrar_galeria: d.mostrar_galeria ?? true,
      secciones,
    }
  } catch { return PAGINA_DEFAULT }
})

export const getStudies = cache(async (): Promise<Study[]> => {
  try {
    const entries = await reader.collections.estudios.all()
    if (!entries.length) return []
    return entries
      .map(({ slug, entry: d }) => {
        const rawName = d.name as any
        const name = typeof rawName === 'object' ? rawName.name ?? slug : rawName ?? slug
        return {
          slug,
          name,
          shortName: (d.shortName as string) || undefined,
          order: (d.order as number) ?? 99,
          category: d.category as string,
          categorySlug: d.categorySlug as string,
          tagline: d.tagline as string,
          description: d.description as string,
          howItWorks: (d.howItWorks as string[]) ?? [],
          parameters: ((d.parameters as any[]) ?? []).map((p) => ({
            name: p.name as string,
            description: p.description as string,
            reference: p.reference || undefined,
          } satisfies StudyParameter)),
          indications: (d.indications as string[]) ?? [],
          duration: d.duration as string,
          preparation: (d.preparation as string[]) ?? [],
          clinicalSignificance: d.clinicalSignificance as string,
          image: d.image ? `/estudios/${d.image}` : undefined,
        } as Study & { order: number }
      })
      .sort((a: any, b: any) => (a.order ?? 99) - (b.order ?? 99))
  } catch { return [] }
})

export const getStudyBySlug = cache(async (slug: string): Promise<(Study & { order?: number }) | null> => {
  try {
    const d = await reader.collections.estudios.read(slug)
    if (!d) return null
    const rawName = d.name as any
    const name = typeof rawName === 'object' ? rawName.name ?? slug : rawName ?? slug
    return {
      slug,
      name,
      shortName: (d.shortName as string) || undefined,
      category: d.category as string,
      categorySlug: d.categorySlug as string,
      tagline: d.tagline as string,
      description: d.description as string,
      howItWorks: (d.howItWorks as string[]) ?? [],
      parameters: ((d.parameters as any[]) ?? []).map((p) => ({
        name: p.name as string,
        description: p.description as string,
        reference: p.reference || undefined,
      })),
      indications: (d.indications as string[]) ?? [],
      duration: d.duration as string,
      preparation: (d.preparation as string[]) ?? [],
      clinicalSignificance: d.clinicalSignificance as string,
      image: d.image ? `/estudios/${d.image}` : undefined,
    } as Study
  } catch { return null }
})
