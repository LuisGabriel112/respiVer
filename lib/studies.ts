export interface StudyParameter {
  name: string
  description: string
  reference?: string
}

export interface Study {
  slug: string
  name: string
  shortName?: string
  category: string
  categorySlug: string
  tagline: string
  description: string
  howItWorks: string[]
  parameters: StudyParameter[]
  indications: string[]
  duration: string
  preparation: string[]
  clinicalSignificance: string
}

export const STUDIES: Study[] = [
  // ─── MECÁNICA PULMONAR ────────────────────────────────────────────────────
  {
    slug: 'espirometria-simple',
    name: 'Espirometría simple',
    category: 'Mecánica Pulmonar',
    categorySlug: 'mecanica-pulmonar',
    tagline: 'La prueba de referencia para evaluar la función respiratoria básica',
    description:
      'La espirometría es la prueba de función pulmonar más utilizada en el mundo. Mide el volumen y el flujo de aire que una persona puede inhalar y exhalar, lo que permite evaluar de forma objetiva y reproducible el funcionamiento del aparato respiratorio. Es indispensable para el diagnóstico inicial y el seguimiento de enfermedades como asma, EPOC, fibrosis pulmonar y muchas otras patologías que afectan la mecánica ventilatoria.\n\nSu principal ventaja es que es rápida, no invasiva y muy bien tolerada por la mayoría de los pacientes. Los resultados se comparan con valores de referencia ajustados a edad, sexo, talla y etnicidad del paciente, lo que permite detectar desviaciones de la normalidad con alta precisión.',
    howItWorks: [
      'El paciente se sienta en posición erguida y se coloca una pinza nasal para obligar a respirar exclusivamente por la boca.',
      'Se adapta una boquilla desechable conectada al espirómetro con un sello hermético para evitar fugas.',
      'El técnico instruye al paciente para realizar una inhalación máxima, llenando los pulmones por completo.',
      'Seguidamente se realiza una espiración forzada y tan rápida como sea posible, vaciando el aire hasta no poder más.',
      'La maniobra se repite al menos 3 veces para garantizar reproducibilidad (variación < 150 mL entre las mejores mediciones).',
    ],
    parameters: [
      {
        name: 'FVC — Capacidad Vital Forzada',
        description: 'Volumen total de aire exhalado en una maniobra espiratoria forzada desde inspiración máxima. Disminuida en patrones restrictivos y en obstrucción severa.',
        reference: 'Normal: ≥ 80% del predicho',
      },
      {
        name: 'FEV₁ — Volumen Espiratorio Forzado en 1 segundo',
        description: 'Volumen de aire exhalado durante el primer segundo de la maniobra forzada. Es el parámetro más sensible para detectar obstrucción al flujo aéreo.',
        reference: 'Normal: ≥ 80% del predicho',
      },
      {
        name: 'FEV₁/FVC — Índice de Tiffeneau',
        description: 'Relación entre FEV₁ y FVC. El indicador clave para diferenciar el patrón obstructivo del restrictivo. Un valor reducido indica obstrucción.',
        reference: 'Normal: ≥ 0.70',
      },
      {
        name: 'FEF 25–75% — Flujo Espiratorio Mesomaximale',
        description: 'Flujo espiratorio forzado en la parte media de la curva. Más sensible que el FEV₁ para detectar obstrucción de vías aéreas pequeñas en estadios tempranos.',
      },
      {
        name: 'PEF — Flujo Espiratorio Pico',
        description: 'Velocidad máxima de flujo de aire durante la espiración forzada. Útil para el monitoreo domiciliario del asma.',
      },
    ],
    indications: [
      'Diagnóstico de asma, EPOC y otras enfermedades pulmonares crónicas',
      'Seguimiento y evaluación de la progresión de enfermedades ya diagnosticadas',
      'Valoración pulmonar preoperatoria en cirugías torácicas o abdominales',
      'Escrutinio en trabajadores con exposición a polvos, humos o gases tóxicos',
      'Evaluación de síntomas respiratorios: tos crónica, disnea o sibilancias',
      'Monitoreo de toxicidad pulmonar por quimioterapia o fármacos',
    ],
    duration: '15–30 minutos',
    preparation: [
      'No fumar al menos 4 horas antes de la prueba',
      'Evitar broncodilatadores de acción corta (SABA) al menos 4 horas antes; de acción larga (LABA) 12 horas antes',
      'No realizar ejercicio físico intenso en los 30 minutos previos',
      'Usar ropa cómoda que no restrinja el movimiento del tórax o el abdomen',
      'Informar sobre todos los medicamentos actuales, incluyendo inhaladores',
    ],
    clinicalSignificance:
      'Una espirometría normal permite descartar con alto grado de certeza la presencia de enfermedad pulmonar obstructiva significativa. Un patrón obstructivo persistente post-broncodilatador (FEV₁/FVC < 0.70) confirma el diagnóstico de EPOC. El grado de reducción del FEV₁ determina la severidad y orienta el tratamiento farmacológico.',
  },

  {
    slug: 'espirometria-pre-post-broncodilatador',
    name: 'Espirometría pre y post-broncodilatador',
    shortName: 'Espirometría BD',
    category: 'Mecánica Pulmonar',
    categorySlug: 'mecanica-pulmonar',
    tagline: 'Determina si la obstrucción bronquial es reversible con medicamento',
    description:
      'La espirometría con prueba broncodilatadora consiste en realizar dos espirometrías: una basal y otra 15–20 minutos después de administrar un broncodilatador inhalado (habitualmente salbutamol 400 mcg). La comparación entre ambas mediciones permite determinar si la obstrucción bronquial es reversible —característica del asma— o fija —como en el EPOC—.\n\nEsta distinción tiene implicaciones terapéuticas directas: los pacientes con reversibilidad significativa se benefician más de los broncodilatadores y los corticosteroides inhalados, mientras que los pacientes con EPOC sin reversibilidad requieren estrategias de tratamiento diferenciadas.',
    howItWorks: [
      'Se realiza una espirometría basal completa siguiendo el protocolo estándar.',
      'Se administran 4 puffs de salbutamol (400 mcg) a través de una cámara espaciadora para garantizar el depósito bronquial adecuado.',
      'El paciente espera 15–20 minutos para que el broncodilatador alcance su efecto máximo.',
      'Se repite la espirometría completa con los mismos criterios de calidad y reproducibilidad.',
      'Se comparan los valores de FVC, FEV₁ y flujos entre las dos mediciones para calcular la respuesta.',
    ],
    parameters: [
      {
        name: 'Cambio absoluto en FEV₁ (mL)',
        description: 'Diferencia en mililitros del FEV₁ entre el valor post y pre-broncodilatador.',
        reference: 'Significativo: ≥ 200 mL',
      },
      {
        name: 'Cambio relativo en FEV₁ (%)',
        description: 'Porcentaje de cambio del FEV₁ respecto al valor basal.',
        reference: 'Significativo: ≥ 12%',
      },
      {
        name: 'Cambio en FVC',
        description: 'Aumento de la capacidad vital forzada post-broncodilatador. Indica reducción del atrapamiento aéreo.',
        reference: 'Significativo: ≥ 12% y ≥ 200 mL',
      },
      {
        name: 'Índice de reversibilidad broncodilatadora',
        description: 'Clasificación de la magnitud de la respuesta: mínima, moderada o marcada, con implicaciones diagnósticas y terapéuticas.',
      },
    ],
    indications: [
      'Diagnóstico diferencial entre asma bronquial y EPOC',
      'Confirmación de reversibilidad en pacientes con obstrucción detectada en espirometría simple',
      'Evaluación del fenotipo de EPOC (identificar componente asmático)',
      'Orientación en la elección del tratamiento broncodilatador y esteroides',
      'Seguimiento de respuesta al tratamiento en asma',
    ],
    duration: '45–60 minutos',
    preparation: [
      'Suspender broncodilatadores de acción corta (SABA: salbutamol, terbutalina) al menos 4 horas antes',
      'Suspender broncodilatadores de acción larga (LABA: formoterol, salmeterol) al menos 12 horas antes',
      'Suspender antimuscarínicos de acción larga (LAMA: tiotropio, umeclidinio) al menos 24 horas antes',
      'No fumar al menos 4 horas antes',
      'Informar al médico sobre todos los medicamentos; no suspender nada sin autorización médica',
    ],
    clinicalSignificance:
      'Una respuesta broncodilatadora significativa (FEV₁ ≥ 12% y ≥ 200 mL) apoya fuertemente el diagnóstico de asma bronquial. En EPOC, la presencia de reversibilidad no excluye el diagnóstico pero identifica el fenotipo "overlap asma-EPOC" (ACO), que requiere tratamiento con corticosteroides inhalados desde etapas tempranas.',
  },

  {
    slug: 'espirometria-lenta',
    name: 'Espirometría lenta',
    category: 'Mecánica Pulmonar',
    categorySlug: 'mecanica-pulmonar',
    tagline: 'Medición precisa de volúmenes pulmonares sin maniobras forzadas',
    description:
      'A diferencia de la espirometría forzada, la espirometría lenta mide los volúmenes pulmonares mediante maniobras lentas y controladas, sin requerir esfuerzo explosivo. Esto elimina el colapso dinámico de las vías aéreas que ocurre durante la espiración forzada en pacientes con obstrucción severa, lo que resulta en una medición más precisa de la capacidad vital real.\n\nEs especialmente valiosa en pacientes mayores, con EPOC avanzado, enfermedades neuromusculares o dolor torácico, en quienes las maniobras forzadas son difíciles o poco reproducibles. Con frecuencia se usa como complemento a la pletismografía.',
    howItWorks: [
      'El paciente respira tranquilamente durante varios ciclos para establecer el patrón respiratorio basal (volumen corriente).',
      'Se instruye al paciente para inhalar profunda y lentamente desde el nivel de reposo hasta la capacidad pulmonar máxima.',
      'Seguidamente exhala de forma lenta y completa hasta el nivel de relajación respiratoria (FRC).',
      'La maniobra puede extenderse hasta el volumen residual: una espiración máxima lenta desde la posición de reposo.',
      'Se repite al menos 3 veces para verificar reproducibilidad (variación < 100 mL).',
    ],
    parameters: [
      {
        name: 'VC — Capacidad Vital lenta',
        description: 'Volumen máximo movilizado con maniobra lenta. Suele ser mayor que la FVC en pacientes con obstrucción severa.',
        reference: 'Normal: ≥ 80% del predicho',
      },
      {
        name: 'IC — Capacidad Inspiratoria',
        description: 'Volumen inhalado desde la posición de reposo hasta la inspiración máxima. Refleja el grado de hiperinsuflación.',
      },
      {
        name: 'ERV — Volumen de Reserva Espiratorio',
        description: 'Volumen exhalado desde la posición de reposo (FRC) hasta el vaciado máximo (RV).',
      },
      {
        name: 'VT — Volumen Corriente',
        description: 'Volumen de aire movilizado en cada respiración tranquila. Parámetro de referencia para calcular los demás.',
      },
    ],
    indications: [
      'Pacientes con EPOC grave que no pueden completar la maniobra forzada correctamente',
      'Adultos mayores con limitaciones físicas o cognitivas para el esfuerzo máximo',
      'Enfermedades neuromusculares o de caja torácica (cifoescoliosis, parálisis diafragmática)',
      'Complemento a la pletismografía para cálculo de volúmenes pulmonares',
      'Evaluación de hiperinsuflación mediante la capacidad inspiratoria (IC)',
    ],
    duration: '15–25 minutos',
    preparation: [
      'No fumar al menos 4 horas antes',
      'Usar ropa cómoda que no limite los movimientos del tórax',
      'Informar sobre medicamentos actuales',
      'No es necesario suspender broncodilatadores salvo indicación específica',
    ],
    clinicalSignificance:
      'La diferencia VC-FVC es un indicador indirecto de atrapamiento aéreo: cuanto mayor es la diferencia, mayor es el colapso dinámico durante la espiración forzada. Esto es especialmente útil para cuantificar la obstrucción real en EPOC avanzado, donde la FVC subestima sistemáticamente la capacidad vital verdadera.',
  },

  // ─── VOLÚMENES PULMONARES ─────────────────────────────────────────────────
  {
    slug: 'pletismografia-corporal-total',
    name: 'Pletismografía corporal total',
    shortName: 'Pletismografía',
    category: 'Volúmenes Pulmonares',
    categorySlug: 'volumenes-pulmonares',
    tagline: 'El estándar de oro para medir los volúmenes pulmonares absolutos',
    description:
      'La pletismografía corporal es la técnica de referencia para medir los volúmenes pulmonares absolutos, incluidos aquellos que no son accesibles mediante espirometría, como el volumen residual y la capacidad pulmonar total. El paciente se sienta dentro de una cabina hermética y, mediante las variaciones de presión y volumen generadas durante pequeños esfuerzos respiratorios, se calculan con precisión todos los compartimentos pulmonares.\n\nA diferencia de las técnicas de dilución de gases, la pletismografía mide todo el gas intratorácico, incluyendo el atrapado en regiones pobremente ventiladas, lo que la convierte en el método más exacto para cuantificar hiperinsuflación y atrapamiento aéreo.',
    howItWorks: [
      'El paciente entra en la cabina pletismográfica hermética (similar a una cabina telefónica de cristal) y se sienta cómodamente.',
      'Se adapta una boquilla y una pinza nasal, y la puerta se cierra para crear el sello hermético.',
      'El paciente respira tranquilamente para establecer la línea de base y verificar el sellado de la cabina.',
      'A nivel de la capacidad residual funcional (FRC), se ocluye el flujo de aire y el paciente realiza esfuerzos respiratorios suaves (maniobra de jadeo).',
      'Los cambios de presión en la boquilla y en la cabina permiten calcular, por la ley de Boyle, el volumen de gas torácico (VGT).',
      'Se complementa con espirometría lenta y forzada para calcular todos los compartimentos (TLC, RV, FRC, Raw).',
    ],
    parameters: [
      {
        name: 'TLC — Capacidad Pulmonar Total',
        description: 'Volumen total de aire en los pulmones al final de una inspiración máxima. Parámetro definitorio de restricción (TLC < 80%) e hiperinsuflación (TLC > 120%).',
        reference: 'Normal: 80–120% del predicho',
      },
      {
        name: 'RV — Volumen Residual',
        description: 'Aire que permanece en los pulmones después de una espiración máxima. Elevado en obstrucción (atrapamiento aéreo) y disminuido en restricción.',
        reference: 'Normal: 80–135% del predicho',
      },
      {
        name: 'FRC — Capacidad Residual Funcional',
        description: 'Volumen de aire al final de una respiración tranquila. Equivale al VGT medido por pletismografía. Refleja el equilibrio entre retracción pulmonar y de la caja torácica.',
      },
      {
        name: 'RV/TLC — Índice de atrapamiento',
        description: 'Proporción del volumen residual respecto a la TLC. Un índice elevado indica atrapamiento aéreo significativo.',
        reference: 'Normal: < 35%',
      },
      {
        name: 'Raw — Resistencia de vías aéreas',
        description: 'Oposición al flujo de aire a través del árbol bronquial. Se mide simultáneamente durante la maniobra de jadeo y es útil en asma y obstrucción de grandes vías aéreas.',
      },
    ],
    indications: [
      'Diagnóstico y cuantificación de hiperinsuflación dinámica en EPOC',
      'Evaluación de atrapamiento aéreo no detectable por espirometría',
      'Diagnóstico de restricción verdadera vs. pseudo-restricción por obstrucción (TLC reducida)',
      'Enfermedades pulmonares intersticiales: fibrosis, sarcoidosis, neumoconiosis',
      'Valoración preoperatoria completa en cirugía de resección pulmonar',
      'Evaluación de enfermedades de caja torácica (cifoescoliosis severa)',
    ],
    duration: '30–45 minutos',
    preparation: [
      'No fumar al menos 4 horas antes',
      'Evitar broncodilatadores según indicación médica',
      'No realizar ejercicio intenso 30 minutos antes',
      'Pacientes con claustrofobia deben informarlo previamente; la cabina tiene ventana de cristal y se puede abrir desde adentro',
      'Usar ropa cómoda',
    ],
    clinicalSignificance:
      'Es el único método que mide con exactitud la TLC para confirmar restricción verdadera y para cuantificar el grado de hiperinsuflación en EPOC. Una TLC > 120% con RV/TLC > 40% confirma hiperinsuflación severa, que es uno de los factores pronósticos independientes más importantes en EPOC. También es indispensable para la valoración de candidatos a cirugía de reducción de volumen pulmonar.',
  },

  // ─── FUERZA MUSCULAR ──────────────────────────────────────────────────────
  {
    slug: 'presion-inspiratoria-maxima',
    name: 'Presión inspiratoria máxima (PImax)',
    shortName: 'PImax',
    category: 'Fuerza Muscular Respiratoria',
    categorySlug: 'fuerza-muscular',
    tagline: 'Mide la potencia de los músculos encargados de inhalar',
    description:
      'La PImax (Presión Inspiratoria Máxima) es la prueba estándar para cuantificar objetivamente la fuerza de los músculos inspiratorios, en especial del diafragma —el principal músculo respiratorio— y de los músculos intercostales externos y escalenos. Es fundamental en el diagnóstico y seguimiento de enfermedades neuromusculares que amenazan la función respiratoria.\n\nUna disminución progresiva de la PImax a lo largo del tiempo señala el deterioro de la musculatura respiratoria y permite anticipar la necesidad de soporte ventilatorio antes de que se produzca una crisis respiratoria.',
    howItWorks: [
      'El paciente exhala completamente hasta el volumen residual (vaciado pulmonar máximo), posición en la que el diafragma tiene su mayor longitud y, por lo tanto, mayor potencia.',
      'Se ocluye completamente la vía aérea mediante una válvula unidireccional.',
      'El paciente realiza un esfuerzo inspiratorio máximo y sostenido durante al menos 1–2 segundos.',
      'Se registra la presión negativa máxima generada en cmH₂O.',
      'Se repiten al menos 3 maniobras aceptables; se toma el valor más alto obtenido en 2 mediciones reproducibles (diferencia < 10%).',
    ],
    parameters: [
      {
        name: 'PImax (cmH₂O)',
        description: 'Presión negativa máxima generada durante el esfuerzo inspiratorio contra la vía aérea ocluida. Cuanto más negativo, más fuerte es la musculatura inspiratoria.',
        reference: 'Normal: < −70 cmH₂O en hombres; < −60 cmH₂O en mujeres (varía con la edad)',
      },
      {
        name: 'PImax % predicho',
        description: 'Comparación del valor obtenido con ecuaciones de referencia ajustadas a edad y sexo, para determinar si hay debilidad significativa.',
        reference: 'Normal: ≥ 80% del predicho',
      },
    ],
    indications: [
      'Enfermedades neuromusculares: esclerosis lateral amiotrófica (ELA), distrofias musculares, Guillain-Barré',
      'Evaluación de debilidad diafragmática uni o bilateral',
      'Monitoreo de progresión en miopatías inflamatorias (polimiositis, dermatomiositis)',
      'Valoración de candidatos a weaning de ventilación mecánica',
      'Disnea de causa no explicada con espirometría normal',
      'Síndromes de hipoventilación crónica',
    ],
    duration: '15–20 minutos',
    preparation: [
      'Evitar ejercicio físico intenso al menos 2 horas antes',
      'Informar sobre enfermedades musculares o neurológicas conocidas',
      'La prueba requiere el máximo esfuerzo y cooperación del paciente',
      'Informar si tiene dolor torácico, abdominal o dental que limite el esfuerzo',
    ],
    clinicalSignificance:
      'Una PImax < −60 cmH₂O en hombres o < −50 cmH₂O en mujeres sugiere debilidad inspiratoria clínicamente relevante. En ELA, una PImax < 60% del predicho es uno de los umbrales para considerar la indicación de ventilación no invasiva nocturna (VNI), medida que prolonga la supervivencia y mejora la calidad de vida.',
  },

  {
    slug: 'presion-espiratoria-maxima',
    name: 'Presión espiratoria máxima (PEmax)',
    shortName: 'PEmax',
    category: 'Fuerza Muscular Respiratoria',
    categorySlug: 'fuerza-muscular',
    tagline: 'Evalúa la potencia de los músculos que generan la tos y la espiración',
    description:
      'La PEmax (Presión Espiratoria Máxima) mide la fuerza de los músculos espiratorios: principalmente los músculos abdominales (recto abdominal, oblicuos) y los intercostales internos. Estos músculos son esenciales para generar una tos efectiva, mecanismo crítico para limpiar secreciones y prevenir neumonías, así como para hablar en voz alta y completar la espiración forzada.\n\nJunto con la PImax, forma el estudio completo de fuerza muscular respiratoria, y los dos parámetros en conjunto permiten valorar integralmente la musculatura ventilatoria en enfermedades neuromusculares.',
    howItWorks: [
      'El paciente inhala completamente hasta la capacidad pulmonar total (inspiración máxima), posición en la que los músculos espiratorios tienen su mayor capacidad de generar presión.',
      'Se ocluye la vía aérea con una válvula de obstrucción.',
      'El paciente realiza un esfuerzo espiratorio máximo y sostenido durante 1–2 segundos.',
      'Se registra la presión positiva máxima generada en cmH₂O.',
      'Se repiten al menos 3 maniobras aceptables; se toma el valor más alto.',
    ],
    parameters: [
      {
        name: 'PEmax (cmH₂O)',
        description: 'Presión positiva máxima generada durante el esfuerzo espiratorio contra la vía aérea ocluida. Refleja la fuerza de los músculos abdominales e intercostales internos.',
        reference: 'Normal: > 120 cmH₂O en hombres; > 85 cmH₂O en mujeres (varía con la edad)',
      },
      {
        name: 'PCF — Flujo Pico de Tos (complementario)',
        description: 'Velocidad máxima del flujo de aire durante una tos voluntaria, medida con flujómetro. Complementa a la PEmax para evaluar la efectividad de la tos.',
        reference: 'PCF ≥ 270 L/min para tos efectiva; < 160 L/min = tos inefectiva',
      },
    ],
    indications: [
      'Enfermedades neuromusculares con compromiso de músculos espiratorios (ELA, miopatías)',
      'Evaluación del riesgo de retención de secreciones y neumonía',
      'Monitoreo en pacientes con esclerosis lateral amiotrófica para indicar asistencia a la tos',
      'Síndrome de Guillain-Barré: seguimiento durante la fase aguda',
      'Distrofias musculares de Duchenne y Becker',
      'Evaluación del riesgo perioperatorio en enfermedades neuromusculares',
    ],
    duration: '15–20 minutos',
    preparation: [
      'Evitar ejercicio físico intenso 2 horas antes',
      'Informar si hay dolor torácico o abdominal',
      'La prueba requiere máximo esfuerzo; no hay riesgo si se realiza correctamente',
      'Informar sobre dispositivos de asistencia a la tos que ya usa',
    ],
    clinicalSignificance:
      'Una PEmax disminuida predice mayor riesgo de complicaciones respiratorias postoperatorias, retención de secreciones y neumonía aspirativa. En ELA, una PCF < 270 L/min es indicación de enseñar técnicas de asistencia manual a la tos y considerar el uso de Cough Assist mecánico, reduciendo significativamente las hospitalizaciones por infecciones respiratorias.',
  },

  // ─── INTERCAMBIO DE GASES ─────────────────────────────────────────────────
  {
    slug: 'difusion-pulmonar-dlco',
    name: 'Difusión pulmonar de monóxido de carbono (DLCO)',
    shortName: 'DLCO',
    category: 'Intercambio de O₂ y Biomarcadores',
    categorySlug: 'intercambio-gases',
    tagline: 'Evalúa la capacidad de los pulmones para transferir oxígeno a la sangre',
    description:
      'La DLCO (Diffusing capacity of the Lungs for Carbon monoxide) mide la eficiencia con la que los pulmones transfieren gases desde el alvéolo hasta los glóbulos rojos en los capilares pulmonares. Utiliza monóxido de carbono como gas trazador (en concentración segura y no tóxica) porque tiene una afinidad por la hemoglobina 200 veces mayor que el oxígeno, lo que facilita la medición precisa.\n\nEs una de las pruebas más sensibles para detectar enfermedades que afectan la membrana alveolo-capilar, como la fibrosis pulmonar, el enfisema o la hipertensión pulmonar, incluso antes de que aparezcan síntomas.',
    howItWorks: [
      'El paciente exhala completamente hasta el volumen residual.',
      'Inhala rápidamente una mezcla de gases trazadores: CO al 0.3% y un gas inerte (helio o metano) para medir el volumen alveolar accesible.',
      'Mantiene el aliento durante exactamente 10 segundos en apnea para permitir la difusión del CO.',
      'Exhala lentamente; se descarta la primera parte del volumen exhalado (espacio muerto) y se recoge una muestra del alveolar.',
      'Un analizador de gases mide la concentración de CO en la muestra inhalada versus la exhalada para calcular la cantidad difundida.',
      'Se realizan al menos 2 maniobras aceptables con un intervalo de 4 minutos entre ellas.',
    ],
    parameters: [
      {
        name: 'DLCO (mL CO/min/mmHg)',
        description: 'Capacidad total de transferencia del CO a través de la membrana alveolo-capilar por unidad de presión. El parámetro principal del estudio.',
        reference: 'Normal: ≥ 70% del predicho',
      },
      {
        name: 'KCO — Factor de transferencia (DLCO/VA)',
        description: 'DLCO dividida entre el volumen alveolar accesible. Permite distinguir si la reducción de la DLCO se debe a pérdida de superficie alveolar o a engrosamiento de la membrana.',
        reference: 'Normal: ≥ 70% del predicho',
      },
      {
        name: 'VA — Volumen Alveolar',
        description: 'Volumen de pulmón accesible al gas trazador. Una VA reducida con KCO normal sugiere restricción anatómica (no daño de membrana).',
      },
    ],
    indications: [
      'Diagnóstico y seguimiento de fibrosis pulmonar idiopática y otras enfermedades pulmonares intersticiales',
      'Cuantificación del componente de enfisema en EPOC',
      'Diagnóstico de hipertensión arterial pulmonar',
      'Monitoreo de toxicidad pulmonar por amiodarona, metotrexato, bleomicina u otros fármacos',
      'Valoración preoperatoria de cirugía de resección pulmonar',
      'Sospecha de hemorragia alveolar difusa (la DLCO paradójicamente aumenta)',
    ],
    duration: '20–30 minutos',
    preparation: [
      'No fumar al menos 24 horas antes: el monóxido de carbono del tabaco eleva artificialmente la carboxihemoglobina y falsea la DLCO',
      'No realizar ejercicio físico intenso 4 horas antes',
      'Informar si tiene anemia (hemoglobina baja reduce la DLCO independientemente de la función pulmonar)',
      'Evitar alcohol el día del estudio',
      'Informar sobre todos los medicamentos, especialmente anticoagulantes o quimioterapia',
    ],
    clinicalSignificance:
      'Una DLCO < 40% del predicho indica alto riesgo de desaturación durante el ejercicio y tiene implicaciones pronósticas relevantes en fibrosis pulmonar y EPOC. La velocidad de caída de la DLCO a lo largo del tiempo (≥ 10 puntos porcentuales/año) es un predictor independiente de mortalidad en fibrosis pulmonar idiopática. También es el parámetro más sensible para detectar daño alveolo-capilar antes de que aparezcan anomalías en la espirometría.',
  },

  {
    slug: 'fraccion-exhalada-oxido-nitrico-feno',
    name: 'Fracción exhalada de óxido nítrico (FeNO)',
    shortName: 'FeNO',
    category: 'Intercambio de O₂ y Biomarcadores',
    categorySlug: 'intercambio-gases',
    tagline: 'Detecta inflamación eosinofílica de las vías aéreas de forma no invasiva',
    description:
      'El FeNO (Fracción Exhalada de Óxido Nítrico) es un biomarcador de inflamación eosinofílica de tipo 2 en las vías aéreas. El óxido nítrico es producido por las células del epitelio bronquial en respuesta a citocinas inflamatorias (IL-4, IL-13) que se liberan durante la inflamación alérgica. Un FeNO elevado indica que existe inflamación eosinofílica activa, que responde de forma excelente a los corticosteroides inhalados.\n\nEs la prueba más accesible, rápida e indolora de todo el catálogo de función respiratoria: dura apenas 10 segundos y no requiere ningún esfuerzo físico significativo.',
    howItWorks: [
      'El paciente inhala lentamente hasta la capacidad pulmonar total, respirando aire libre de NO (filtrado).',
      'Exhala a través del analizador a un flujo constante y controlado de 50 mL/s durante 6–10 segundos.',
      'Un sensor electroquímico ultrasensible mide en tiempo real la concentración de NO en partes por billón (ppb) en el aire exhalado.',
      'Se promedian 2–3 maniobras reproducibles (variación < 10%) para obtener el valor definitivo.',
      'El resultado está disponible inmediatamente.',
    ],
    parameters: [
      {
        name: 'FeNO (ppb) — Valor en partes por billón',
        description: 'Concentración de óxido nítrico en el aire exhalado alveolar. El parámetro único y definitivo de esta prueba.',
        reference: '< 25 ppb: Normal | 25–50 ppb: Zona gris | > 50 ppb: Inflamación eosinofílica significativa',
      },
      {
        name: 'Predicción de respuesta a corticosteroides',
        description: 'Un FeNO > 50 ppb predice respuesta al tratamiento con corticosteroides inhalados con sensibilidad del ~90%, lo que permite personalizar el tratamiento.',
      },
    ],
    indications: [
      'Diagnóstico de asma eosinofílica en pacientes con síntomas compatibles',
      'Predicción de respuesta a corticosteroides inhalados antes de iniciar tratamiento',
      'Monitoreo de adherencia al tratamiento con esteroides inhalados',
      'Diferenciación entre asma y EPOC cuando coexiste obstrucción',
      'Evaluación de rinitis alérgica con sospecha de afección bronquial',
      'Selección de candidatos para tratamiento biológico anti-IL-4/IL-13 (dupilumab)',
    ],
    duration: '5–10 minutos',
    preparation: [
      'No comer alimentos ricos en nitratos (espinacas, betabel, rúcula) al menos 1 hora antes: pueden elevar el FeNO',
      'No realizar ejercicio físico intenso 1 hora antes',
      'No fumar 1 hora antes',
      'Si el objetivo es medir el nivel basal de inflamación, no usar corticosteroides inhalados ni nasales el día del estudio',
      'Si el objetivo es monitorear el tratamiento, continuar el tratamiento habitual',
    ],
    clinicalSignificance:
      'Un FeNO > 50 ppb en un paciente con síntomas compatibles tiene un valor predictivo positivo > 90% para asma eosinofílica. En pacientes ya tratados con corticosteroides inhalados, un FeNO persistentemente elevado (> 25 ppb) sugiere mala adherencia al tratamiento, dosis insuficiente o refractariedad a esteroides, lo que puede indicar la necesidad de escalar a terapia biológica.',
  },

  // ─── FUNCIÓN EN EJERCICIO ─────────────────────────────────────────────────
  {
    slug: 'prueba-saturacion-oxigeno',
    name: 'Prueba de saturación y titulación de oxígeno',
    shortName: 'Saturometría / Titulación O₂',
    category: 'Función Pulmonar en Ejercicio',
    categorySlug: 'ejercicio',
    tagline: 'Determina si necesitas oxígeno suplementario y en qué cantidad exacta',
    description:
      'Esta prueba monitoriza de forma continua la saturación de oxígeno en sangre (SpO₂) mediante pulsioximetría durante diferentes condiciones fisiológicas: reposo, actividad física controlada o durante el sueño. Cuando la SpO₂ cae por debajo de 88–90%, existe hipoxemia que puede causar daño cardíaco y pulmonar a largo plazo, y se indica oxigenoterapia suplementaria.\n\nLa prueba de titulación determina con precisión el flujo de oxígeno (L/min) necesario para mantener una SpO₂ ≥ 90%, evitando tanto la hipoxemia como la hiperoxia.',
    howItWorks: [
      'Se coloca un sensor de pulsioximetría de dedo o de lóbulo de la oreja para monitorización continua.',
      'Se registra la SpO₂ y la frecuencia cardíaca basales en reposo durante al menos 5 minutos.',
      'El paciente realiza la actividad física estandarizada (caminata, prueba de marcha o cicloergómetro según el protocolo).',
      'Si la SpO₂ cae ≥ 4% o por debajo del 90%, se inicia la titulación: se van ajustando los flujos de O₂ (0.5, 1, 1.5, 2… L/min) hasta obtener una saturación estable ≥ 90%.',
      'Si se evalúa durante el sueño, el paciente porta el pulsioxímetro en su domicilio durante la noche.',
      'Los datos se descargan al día siguiente y se analizan los eventos de desaturación.',
    ],
    parameters: [
      {
        name: 'SpO₂ basal (%)',
        description: 'Saturación de oxígeno en sangre en reposo. El valor de referencia desde el que se evalúan las desaturaciones.',
        reference: 'Normal: ≥ 95%',
      },
      {
        name: 'SpO₂ mínima en ejercicio o sueño (%)',
        description: 'Valor más bajo registrado durante la prueba. El umbral de significancia clínica es SpO₂ < 88–90%.',
      },
      {
        name: 'Porcentaje de tiempo con SpO₂ < 90% (T90)',
        description: 'Relevante para prescripción de oxigenoterapia continua domiciliaria cuando T90 > 30% del tiempo de registro.',
      },
      {
        name: 'Flujo óptimo de O₂ (L/min)',
        description: 'Resultado de la titulación: el menor flujo necesario para mantener SpO₂ ≥ 90% durante la actividad evaluada.',
      },
    ],
    indications: [
      'EPOC estadio moderado-grave con sospecha de insuficiencia respiratoria',
      'Fibrosis pulmonar con desaturación durante el ejercicio o el sueño',
      'Evaluación antes de vuelo en avión (simula hipoxia a presión de cabina ~2.000 m)',
      'Prescripción y ajuste de oxigenoterapia domiciliaria a largo plazo',
      'Hipertensión pulmonar con desaturación en ejercicio',
      'Apnea del sueño con hipoxemia nocturna como complemento a la poligrafía',
    ],
    duration: '30 minutos – 8 horas (según protocolo)',
    preparation: [
      'Usar ropa y calzado cómodo para caminar si se realizará prueba de esfuerzo',
      'Traer el equipo de oxigenoterapia domiciliario si ya lo usa',
      'Informar si tiene dolor articular, fractura reciente o limitación para caminar',
      'Traer medicamentos de rescate (inhalador)',
    ],
    clinicalSignificance:
      'La oxigenoterapia domiciliaria continua (≥ 15 h/día) en EPOC con hipoxemia crónica (PaO₂ ≤ 55 mmHg o SpO₂ ≤ 88%) es la única intervención farmacológica o no farmacológica que ha demostrado reducir la mortalidad en EPOC avanzado. Esta prueba objetiva la indicación y optimiza el flujo prescrito, evitando sobredosificación o infradosificación de oxígeno.',
  },

  {
    slug: 'prueba-caminata-6-minutos',
    name: 'Prueba de caminata de 6 minutos',
    shortName: 'PC6M',
    category: 'Función Pulmonar en Ejercicio',
    categorySlug: 'ejercicio',
    tagline: 'Mide la capacidad funcional real del paciente en condiciones de ejercicio submáximo',
    description:
      'La prueba de caminata de 6 minutos (PC6M) es la prueba de ejercicio más utilizada en neumología y cardiología. Refleja la capacidad funcional global integrando los sistemas pulmonar, cardiovascular, muscular periférico, metabólico y la motivación del paciente, reproduciendo de forma más fiel la actividad de la vida diaria que las pruebas de ejercicio máximo en laboratorio.\n\nLa distancia recorrida en 6 minutos es uno de los mejores predictores de calidad de vida, hospitalización y mortalidad en múltiples enfermedades cardiopulmonares.',
    howItWorks: [
      'Se establece un corredor recto y nivelado de 30 metros con marcadores de distancia cada 3 metros.',
      'El paciente descansa sentado 10 minutos antes de iniciar. Se miden SpO₂, FC, PA y disnea basal (escala de Borg).',
      'Se entregan instrucciones estandarizadas: "camine lo más lejos que pueda en 6 minutos, a su ritmo".',
      'El técnico registra SpO₂ y FC de forma continua con pulsioxímetro portátil.',
      'Se pueden realizar paradas si el paciente lo necesita; el cronómetro no se detiene.',
      'Al finalizar, se registra la distancia total, SpO₂ mínima, FC máxima y disnea/fatiga (Borg).',
      'El paciente descansa durante 10 minutos mientras los signos vitales se recuperan.',
    ],
    parameters: [
      {
        name: 'Distancia recorrida (metros)',
        description: 'Principal resultado de la prueba. Se compara con valores de referencia ajustados a edad, sexo, talla y peso. Una distancia menor indica peor capacidad funcional.',
        reference: 'Normal: variable según edad/talla; < 350 m en EPOC = alto riesgo',
      },
      {
        name: 'SpO₂ mínima durante la prueba (%)',
        description: 'Desaturación ≥ 4% del basal o SpO₂ < 88% es clínicamente significativa e indica insuficiencia respiratoria de esfuerzo.',
      },
      {
        name: 'Escala de Borg post-ejercicio',
        description: 'Escala de percepción de disnea y fatiga de piernas (0–10). Permite evaluar la limitación subjetiva y comparar entre pruebas.',
      },
      {
        name: 'Diferencia mínima clínicamente importante (DMCI)',
        description: 'Cambio en la distancia que el paciente percibe como significativo. Útil para evaluar respuesta a tratamientos.',
        reference: 'DMCI: 25–35 metros (varía según enfermedad)',
      },
    ],
    indications: [
      'Evaluación funcional en EPOC, fibrosis pulmonar e hipertensión arterial pulmonar',
      'Valoración pre y post trasplante pulmonar y cardíaco',
      'Evaluación pre y post cirugía de reducción de volumen pulmonar',
      'Seguimiento de programas de rehabilitación pulmonar',
      'Criterio funcional en la selección de pacientes para terapias avanzadas',
      'Predicción de mortalidad y hospitalización en insuficiencia cardíaca',
    ],
    duration: '30–40 minutos',
    preparation: [
      'Usar ropa y calzado cómodo para caminar',
      'No realizar ejercicio físico vigoroso en las 2 horas previas',
      'Traer dispositivos de apoyo habituales (bastón, andadera)',
      'Traer medicamentos inhalados de rescate por si se necesitan',
      'Descansar 10 minutos antes de iniciar en el mismo lugar',
    ],
    clinicalSignificance:
      'En hipertensión arterial pulmonar, la PC6M es un criterio de evaluación de respuesta en todos los estudios clínicos principales y guía las decisiones de inicio o escalonamiento de tratamiento específico. En EPOC, una mejoría ≥ 25–30 metros tras rehabilitación pulmonar es considerada clínicamente significativa y se asocia con reducción de hospitalizaciones y mejora de la calidad de vida.',
  },

  // ─── ESTUDIOS DEL SUEÑO ───────────────────────────────────────────────────
  {
    slug: 'polisomnografia',
    name: 'Polisomnografía',
    shortName: 'PSG',
    category: 'Estudios del Sueño',
    categorySlug: 'sueno',
    tagline: 'El estudio completo del sueño que evalúa todas sus etapas y los eventos respiratorios',
    description:
      'La polisomnografía (PSG) es el estudio de referencia para el diagnóstico de los trastornos del sueño. Registra simultáneamente múltiples señales fisiológicas durante el sueño completo en nuestra unidad: actividad cerebral (EEG), movimientos oculares (EOG), tono muscular (EMG), flujo de aire nasal y oral, esfuerzo respiratorio torácico y abdominal, saturación de oxígeno, frecuencia cardíaca y posición corporal.\n\nA diferencia de la poligrafía, la PSG mide el tiempo real de sueño y diferencia las fases del sueño, lo que permite detectar no solo apneas sino también hipoventilación, movimientos de piernas periódicos, parasomnias y otros trastornos complejos.',
    howItWorks: [
      'El paciente llega a la unidad por la noche (generalmente 9–10 pm) con su ropa de dormir habitual.',
      'El técnico coloca los sensores: electrodos en cuero cabelludo (EEG: 16–22 canales), electrodos perioculares (EOG), electrodos en barbilla y piernas (EMG), sensor de flujo nasal y oral, cinturones torácico y abdominal, oxímetro de pulso y derivaciones de ECG.',
      'Se calibran todos los equipos con el paciente despierto para verificar la calidad de la señal.',
      'El paciente se acuesta y duerme lo más naturalmente posible; el técnico monitoriza en tiempo real desde la sala de control.',
      'Se registra el sueño completo (7–8 horas) hasta el despertar matutino.',
      'Un especialista en medicina del sueño analiza e interpreta la totalidad del registro, generando un informe detallado.',
    ],
    parameters: [
      {
        name: 'IAH — Índice de Apnea-Hipopnea (eventos/hora)',
        description: 'Número de apneas e hipopneas por hora de sueño real. El parámetro diagnóstico principal del síndrome de apnea-hipopnea obstructiva del sueño (SAOS).',
        reference: 'Normal: < 5/h | Leve: 5–14/h | Moderado: 15–29/h | Grave: ≥ 30/h',
      },
      {
        name: 'Arquitectura del sueño',
        description: 'Distribución porcentual de fases N1 (sueño ligero), N2 (sueño consolidado), N3 (sueño profundo/reparador) y REM. Permite detectar fragmentación y privación de sueño profundo.',
      },
      {
        name: 'SpO₂ mínima y T90',
        description: 'Saturación de oxígeno mínima y porcentaje de tiempo con SpO₂ < 90%. Refleja la gravedad de la hipoxemia nocturna y su repercusión cardiovascular.',
      },
      {
        name: 'IAR — Índice de microdespertares (Arousal Index)',
        description: 'Número de microdespertares electroencefalográficos por hora de sueño. Refleja la fragmentación del sueño independientemente de los eventos respiratorios.',
        reference: 'Normal: < 15/h',
      },
      {
        name: 'PLMI — Índice de movimientos periódicos de piernas',
        description: 'Número de movimientos periódicos de piernas por hora de sueño. Permite diagnosticar el síndrome de movimientos periódicos de extremidades (PLMS).',
        reference: 'Significativo: ≥ 15/h',
      },
    ],
    indications: [
      'Diagnóstico de síndrome de apnea-hipopnea obstructiva del sueño (SAOS)',
      'Sospecha de hipoventilación nocturna en EPOC, obesidad o enfermedades neuromusculares',
      'Narcolepsia y trastornos de hipersomnia central',
      'Parasomnias: sonambulismo, terrores nocturnos, trastorno de conducta en sueño REM',
      'Epilepsia nocturna de difícil clasificación',
      'Evaluación preoperatoria antes de cirugía de vías aéreas superiores (UPPP, geniogloso)',
      'Titulación de presión de CPAP cuando la titulación automática no es suficiente',
    ],
    duration: 'Noche completa (8–9 horas en la unidad)',
    preparation: [
      'No consumir alcohol ni tomar sedantes o hipnóticos el día del estudio (alterar la arquitectura del sueño)',
      'No tomar café ni bebidas con cafeína a partir del mediodía',
      'Lavarse el cabello sin usar productos (gel, lacas): facilita la colocación de electrodos y mejora la calidad de la señal',
      'Traer ropa cómoda para dormir (pijama o ropa deportiva holgada)',
      'Continuar todos los medicamentos habituales salvo indicación médica explícita',
      'Traer almohada propia si lo prefiere para facilitar el sueño',
    ],
    clinicalSignificance:
      'La PSG es el único estudio que diagnostica con certeza el tipo y la gravedad del trastorno del sueño. Un IAH ≥ 30/h con hipoxemia significativa (SpO₂ min < 85%) constituye SAOS grave, que se asocia con el doble de riesgo de hipertensión arterial, triple riesgo de accidente cerebrovascular y mayor incidencia de arritmias cardíacas. El tratamiento con CPAP reduce estos riesgos y mejora marcadamente la calidad de vida.',
  },

  {
    slug: 'poligrafia-respiratoria',
    name: 'Poligrafía respiratoria',
    shortName: 'Poligrafía',
    category: 'Estudios del Sueño',
    categorySlug: 'sueno',
    tagline: 'Diagnóstico simplificado y accesible de la apnea del sueño',
    description:
      'La poligrafía respiratoria (PR) es un estudio simplificado del sueño que registra las variables respiratorias esenciales sin necesidad de electroencefalograma. Es más accesible y económica que la polisomnografía completa, y tiene una alta precisión diagnóstica para la apnea obstructiva del sueño moderada-grave en pacientes sin comorbilidades neurológicas o psiquiátricas significativas.\n\nPuede realizarse de forma ambulatoria (el paciente duerme en su domicilio con el dispositivo) o en nuestra unidad, según las preferencias y la situación clínica de cada paciente.',
    howItWorks: [
      'El técnico coloca el dispositivo portátil con sus sensores: cánula nasal de presión (más sensible que el termistor), sensor de flujo oral, cinturones torácico y abdominal piezoeléctricos, oxímetro de pulso, sensor de posición corporal y micrófono para ronquidos.',
      'Se instruye al paciente sobre el uso del dispositivo y se verifica el correcto funcionamiento de todos los canales.',
      'El paciente duerme con el equipo puesto durante la noche completa en el domicilio o en la unidad.',
      'Al día siguiente, los datos se descargan al sistema informático y un especialista realiza el análisis manual del registro.',
    ],
    parameters: [
      {
        name: 'IAH (basado en tiempo de registro)',
        description: 'Índice de apneas e hipopneas calculado por horas totales de registro (no de sueño real, a diferencia de la PSG). Puede subestimar el IAH real hasta en un 20–30%.',
        reference: 'Diagnóstico de SAOS: ≥ 5 eventos/h con síntomas, o ≥ 15/h sin síntomas',
      },
      {
        name: 'ID — Índice de Desaturación',
        description: 'Número de caídas de SpO₂ ≥ 3% por hora de registro. Alta correlación con el IAH y útil cuando la cánula nasal no funciona correctamente.',
      },
      {
        name: 'SpO₂ media, mínima y T90',
        description: 'Perfil de oxigenación nocturna: complementa el IAH para evaluar la repercusión fisiológica de las apneas.',
      },
      {
        name: 'Índice de ronquido y posición corporal',
        description: 'Permite identificar el SAOS posicional (predominio en decúbito supino), que puede tratarse con dispositivos de posicionamiento antes de prescribir CPAP.',
      },
    ],
    indications: [
      'Sospecha de SAOS moderado-grave en pacientes sin comorbilidades neurológicas o psiquiátricas significativas',
      'Primera evaluación de ronquido habitual con pausas respiratorias referidas por la pareja',
      'Seguimiento del tratamiento con CPAP para verificar su eficacia',
      'Pacientes con limitaciones para pernoctar en una unidad hospitalaria',
      'Estudio previo a cirugía de roncopatía para documentar la severidad',
    ],
    duration: 'Noche completa (domicilio o en la unidad)',
    preparation: [
      'No consumir alcohol ni sedantes el día del estudio',
      'No tomar café ni bebidas con cafeína a partir del mediodía',
      'No requiere lavado especial de cabello',
      'Traer ropa cómoda para dormir',
      'Continuar medicamentos habituales salvo indicación médica',
      'El dispositivo es fácil de colocar; el técnico entregará instrucciones detalladas',
    ],
    clinicalSignificance:
      'Con un IAH ≥ 15 eventos/hora en poligrafía, la sensibilidad para diagnosticar SAOS moderado-grave es superior al 90%, lo que la convierte en una herramienta de primer nivel para la mayoría de los casos. Sin embargo, puede subestimar el IAH real y no detecta apneas centrales ni trastornos de la arquitectura del sueño. Cuando la poligrafía resulta negativa con alta sospecha clínica, o cuando se identifican comorbilidades complejas, se indica polisomnografía completa.',
  },
]

export function getStudyBySlug(slug: string): Study | undefined {
  return STUDIES.find((s) => s.slug === slug)
}

// Study slugs grouped by category slug (for StudiesSection links)
export const SLUG_MAP: Record<string, string> = Object.fromEntries(
  STUDIES.map((s) => [s.name, s.slug])
)
