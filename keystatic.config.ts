import { config, fields, collection, singleton } from '@keystatic/core'

const isProd = process.env.KEYSTATIC_STORAGE_KIND === 'github'

const CATEGORIES = [
  { label: 'Mecánica Pulmonar',                    value: 'Mecánica Pulmonar' },
  { label: 'Volúmenes Pulmonares',                  value: 'Volúmenes Pulmonares' },
  { label: 'Fuerza Muscular Respiratoria',          value: 'Fuerza Muscular Respiratoria' },
  { label: 'Intercambio de O₂ y Biomarcadores',    value: 'Intercambio de O₂ y Biomarcadores' },
  { label: 'Función Pulmonar en Ejercicio',         value: 'Función Pulmonar en Ejercicio' },
  { label: 'Estudios del Sueño',                   value: 'Estudios del Sueño' },
]

const CATEGORY_SLUGS = [
  { label: 'mecanica-pulmonar',    value: 'mecanica-pulmonar' },
  { label: 'volumenes-pulmonares', value: 'volumenes-pulmonares' },
  { label: 'fuerza-muscular',      value: 'fuerza-muscular' },
  { label: 'intercambio-gases',    value: 'intercambio-gases' },
  { label: 'ejercicio',            value: 'ejercicio' },
  { label: 'sueno',                value: 'sueno' },
]

export default config({
  storage: isProd
    ? { kind: 'github', repo: { owner: 'LuisGabriel112', name: 'respiVer' } }
    : { kind: 'local' },

  ui: {
    brand: { name: 'RESPIVER Admin' },
    navigation: {
      'Contenido principal': ['hero', 'estudios'],
      'Estructura de la página': ['pagina', 'ticker', 'stats', 'galeria'],
      'Configuración': ['contacto'],
    },
  },

  // ── COLECCIONES ────────────────────────────────────────────────────────────

  collections: {
    estudios: collection({
      label: 'Estudios médicos',
      path: 'content/estudios/*',
      slugField: 'name',
      format: { data: 'yaml' },
      entryLayout: 'content',
      schema: {
        name: fields.slug({
          name: { label: 'Nombre completo del estudio' },
          slug: { label: 'URL del estudio (se genera automáticamente)' },
        }),
        shortName: fields.text({ label: 'Nombre corto (opcional)', defaultValue: '' }),
        order: fields.integer({ label: 'Orden de aparición en la lista', defaultValue: 99 }),
        category: fields.select({
          label: 'Categoría',
          options: CATEGORIES,
          defaultValue: 'Mecánica Pulmonar',
        }),
        categorySlug: fields.select({
          label: 'Identificador de categoría',
          options: CATEGORY_SLUGS,
          defaultValue: 'mecanica-pulmonar',
        }),
        tagline: fields.text({ label: 'Frase corta descriptiva' }),
        description: fields.text({
          label: 'Descripción completa',
          multiline: true,
        }),
        howItWorks: fields.array(
          fields.text({ label: 'Paso' }),
          { label: 'Cómo se realiza (pasos)' }
        ),
        parameters: fields.array(
          fields.object({
            name: fields.text({ label: 'Nombre del parámetro' }),
            description: fields.text({ label: 'Descripción', multiline: true }),
            reference: fields.text({ label: 'Valor de referencia (opcional)', defaultValue: '' }),
          }),
          {
            label: 'Parámetros que mide',
            itemLabel: (props) => props.fields.name.value || 'Parámetro',
          }
        ),
        indications: fields.array(
          fields.text({ label: 'Indicación' }),
          { label: 'Indicaciones clínicas' }
        ),
        duration: fields.text({ label: 'Duración aproximada (ej: 20–30 minutos)' }),
        preparation: fields.array(
          fields.text({ label: 'Instrucción' }),
          { label: 'Preparación del paciente' }
        ),
        clinicalSignificance: fields.text({
          label: 'Importancia clínica',
          multiline: true,
        }),
        image: fields.image({
          label: 'Foto del equipo (opcional)',
          directory: 'public/estudios',
          publicPath: '/estudios/',
        }),
      },
    }),
  },

  // ── SINGLETONS ─────────────────────────────────────────────────────────────

  singletons: {
    hero: singleton({
      label: 'Sección principal (Hero)',
      path: 'content/hero/',
      schema: {
        descripcion: fields.text({
          label: 'Texto descriptivo debajo del título',
          multiline: true,
          defaultValue: 'Contamos con la tecnología más avanzada de Veracruz para el diagnóstico y seguimiento de asma, EPOC, fibrosis pulmonar, medicina del sueño, enfermedades neuromusculares con afección respiratoria y muchas más.',
        }),
        cta_texto: fields.text({
          label: 'Texto del enlace de servicios',
          defaultValue: 'Ven y conoce nuestras instalaciones y servicios →',
        }),
      },
    }),

    ticker: singleton({
      label: 'Barra de estudios (franja animada)',
      path: 'content/ticker/',
      schema: {
        items: fields.array(
          fields.text({ label: 'Nombre del estudio' }),
          { label: 'Estudios en la barra' }
        ),
      },
    }),

    stats: singleton({
      label: 'Estadísticas (números destacados)',
      path: 'content/stats/',
      schema: {
        items: fields.array(
          fields.object({
            valor: fields.text({ label: 'Valor (ej: 15+, 2,000+)' }),
            etiqueta: fields.text({ label: 'Etiqueta (ej: Años de experiencia)' }),
            descripcion: fields.text({ label: 'Descripción breve (opcional)', defaultValue: '' }),
          }),
          {
            label: 'Estadísticas',
            itemLabel: (props) => props.fields.etiqueta.value || 'Estadística',
          }
        ),
      },
    }),

    galeria: singleton({
      label: 'Galería de instalaciones y equipo',
      path: 'content/galeria/',
      schema: {
        equipos: fields.array(
          fields.object({
            imagen: fields.image({
              label: 'Foto del equipo',
              directory: 'public/galeria/equipos',
              publicPath: '/galeria/equipos/',
            }),
            titulo: fields.text({ label: 'Nombre del equipo' }),
            destacada: fields.checkbox({
              label: 'Foto principal (ocupa más espacio)',
              defaultValue: false,
            }),
          }),
          {
            label: 'Fotos de equipos médicos',
            itemLabel: (props) => props.fields.titulo.value || 'Equipo',
          }
        ),
        instalaciones: fields.array(
          fields.object({
            imagen: fields.image({
              label: 'Foto de instalación',
              directory: 'public/galeria/instalaciones',
              publicPath: '/galeria/instalaciones/',
            }),
            titulo: fields.text({ label: 'Descripción de la foto' }),
          }),
          {
            label: 'Fotos de instalaciones y pacientes',
            itemLabel: (props) => props.fields.titulo.value || 'Foto',
          }
        ),
      },
    }),

    contacto: singleton({
      label: 'Información de contacto',
      path: 'content/contacto/',
      schema: {
        telefono_display: fields.text({ label: 'Teléfono (texto visible)', defaultValue: '229 447 5147' }),

        telefono_href: fields.text({ label: 'Teléfono (número para llamar, sin espacios)', defaultValue: '2294475147' }),
        whatsapp_display: fields.text({ label: 'WhatsApp (texto visible)', defaultValue: '229 447 5147' }),
        whatsapp_numero: fields.text({ label: 'WhatsApp (número con código de país, sin +)', defaultValue: '522294475147' }),
        email: fields.text({ label: 'Correo electrónico', defaultValue: '' }),
        direccion_linea1: fields.text({ label: 'Dirección (línea 1)', defaultValue: 'Av Paseo La Niña 103, Fracc. Las Américas' }),
        direccion_linea2: fields.text({ label: 'Dirección (línea 2)', defaultValue: '94299 Boca del Río, Veracruz' }),
        instagram_handle: fields.text({ label: 'Instagram (@usuario)', defaultValue: '@neumoclinical' }),
        facebook_handle: fields.text({ label: 'Facebook (@usuario)', defaultValue: '@neumoclinical' }),
      },
    }),

    pagina: singleton({
      label: 'Estructura de la página',
      path: 'content/pagina/',
      schema: {
        // ── Secciones integradas (activar / desactivar) ─────────────────────
        mostrar_ticker: fields.checkbox({
          label: 'Mostrar barra animada de estudios',
          defaultValue: true,
        }),
        mostrar_stats: fields.checkbox({
          label: 'Mostrar estadísticas (números)',
          defaultValue: true,
        }),
        mostrar_cuando: fields.checkbox({
          label: 'Mostrar sección "¿Cuándo necesitas una prueba?"',
          defaultValue: true,
        }),
        mostrar_galeria: fields.checkbox({
          label: 'Mostrar galería de instalaciones',
          defaultValue: true,
        }),

        // ── Secciones personalizadas adicionales ────────────────────────────
        secciones: fields.array(
          fields.object({
            tipo: fields.select({
              label: 'Tipo de sección',
              options: [
                { label: 'Bloque de texto', value: 'texto' },
                { label: 'Llamada a la acción (CTA)', value: 'cta' },
                { label: 'Banner informativo', value: 'banner' },
                { label: 'Texto + imagen', value: 'texto_imagen' },
              ],
              defaultValue: 'texto',
            }),
            posicion: fields.select({
              label: 'Posición en la página',
              options: [
                { label: 'Después del hero', value: 'post-hero' },
                { label: 'Después de estadísticas', value: 'post-stats' },
                { label: 'Después de estudios', value: 'post-estudios' },
                { label: 'Antes del contacto', value: 'pre-contacto' },
              ],
              defaultValue: 'pre-contacto',
            }),
            visible: fields.checkbox({ label: 'Visible en la página', defaultValue: true }),
            titulo: fields.text({ label: 'Título', defaultValue: '' }),
            subtitulo: fields.text({ label: 'Subtítulo (opcional)', defaultValue: '' }),
            contenido: fields.text({
              label: 'Contenido / descripción',
              multiline: true,
              defaultValue: '',
            }),
            boton_texto: fields.text({ label: 'Texto del botón (opcional)', defaultValue: '' }),
            boton_enlace: fields.text({ label: 'Enlace del botón (ej: #contacto)', defaultValue: '' }),
            imagen: fields.image({
              label: 'Imagen (para tipo Texto + imagen)',
              directory: 'public/secciones',
              publicPath: '/secciones/',
            }),
          }),
          {
            label: 'Secciones adicionales',
            itemLabel: (props) =>
              `${props.fields.tipo.value === 'texto' ? 'Texto' : props.fields.tipo.value === 'cta' ? 'CTA' : props.fields.tipo.value === 'banner' ? 'Banner' : 'Texto+Img'} — ${props.fields.titulo.value || 'Sin título'}`,
          }
        ),
      },
    }),
  },
})
