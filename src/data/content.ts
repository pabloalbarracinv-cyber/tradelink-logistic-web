export type Language = 'es' | 'en';

export interface ServiceItem {
  id: string;
  code: string;
  pillar: 'operations' | 'advisory';
  title: string;
  subtitle: string;
  description: string;
  executiveSummary: string;
  image: string;
  specs: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  departmentEmail: string;
  departmentLabel: string;
  ctaText: string;
  futureModuleTag: string;
}

export interface DepartmentContact {
  id: string;
  alias: string;
  email: string;
  role: string;
  description: string;
  sla: string;
  badge: string;
}

export interface TradeCorridor {
  code: string;
  origin: string;
  destination: string;
  mode: string;
  transitTime: string;
  frequency: string;
  coords: string;
}

export const CORPORATE_EMAILS = {
  comercial1: 'comercial1@tradelinklogistic.com',
  customs1: 'customs1@tradelinklogistic.com',
  contabilidad1: 'contabilidad1@tradelinklogistic.com',
  operaciones1: 'operaciones1@tradelinklogistic.com',
  operaciones2: 'operaciones2@tradelinklogistic.com',
} as const;

export const SITE_CONTENT: Record<
  Language,
  {
    meta: {
      title: string;
      description: string;
    };
    topBar: {
      status: string;
      domain: string;
      primaryContactLabel: string;
      ComplianceBadge: string;
    };
    nav: {
      operations: string;
      advisory: string;
      corridors: string;
      architecture: string;
      directory: string;
      ctaQuote: string;
    };
    hero: {
      telemetryBadge: string;
      titleLine1: string;
      titleHighlight: string;
      titleLine2: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
      quickActionsTitle: string;
      quickActions: {
        id: string;
        label: string;
        sublabel: string;
        email: string;
        subject: string;
        code: string;
      }[];
      kpis: {
        value: string;
        label: string;
        detail: string;
      }[];
    };
    operationsSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
    };
    advisorySection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      blueprintNote: string;
    };
    services: ServiceItem[];
    corridorsSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      corridors: TradeCorridor[];
    };
    futureModulesSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      modules: {
        code: string;
        name: string;
        status: string;
        description: string;
        targetEmail: string;
      }[];
    };
    contactSection: {
      eyebrow: string;
      title: string;
      subtitle: string;
      departments: DepartmentContact[];
      form: {
        title: string;
        subtitle: string;
        nameLabel: string;
        namePlaceholder: string;
        companyLabel: string;
        companyPlaceholder: string;
        emailLabel: string;
        emailPlaceholder: string;
        phoneLabel: string;
        phonePlaceholder: string;
        serviceLabel: string;
        departmentRoutingLabel: string;
        incotermLabel: string;
        messageLabel: string;
        messagePlaceholder: string;
        submitButton: string;
        copiedNotification: string;
        directMailNote: string;
      };
    };
    footer: {
      tagline: string;
      legalNote: string;
      headquarters: string;
      ports: string;
      rights: string;
    };
  }
> = {
  es: {
    meta: {
      title: 'TRADE LINK LOGISTIC SAS | Ingeniería Logística Global & Aduanas',
      description:
        'Agenciamiento aduanal, transporte internacional aéreo, marítimo y terrestre, estudios de mercado, clasificación arancelaria y capacitación ejecutiva.',
    },
    topBar: {
      status: 'CENTRO DE COMANDO GLOBAL ACTIVO // 24/7',
      domain: 'tradelinklogistic.com',
      primaryContactLabel: 'Dirección Comercial:',
      ComplianceBadge: 'NORMATIVA DIAN • VUCE • OEA • IATA • BASC',
    },
    nav: {
      operations: 'Transporte & Aduanas',
      advisory: 'Consultoría & Academia',
      corridors: 'Corredores 3D',
      architecture: 'Ecosistema Digital',
      directory: 'Directorio (5 Áreas)',
      ctaQuote: 'Cotizar con Comercial 1',
    },
    hero: {
      telemetryBadge: 'TRADE LINK LOGISTIC SAS • GLOBAL SUPPLY CHAIN ARCHITECTURE',
      titleLine1: 'Ingeniería Logística y',
      titleHighlight: 'Precisión Aduanal',
      titleLine2: 'Sin Fronteras.',
      description:
        'Conectamos la industria colombiana con los centros neurálgicos de Asia, Norteamérica, Europa y Latinoamérica. Combinamos ejecución física impecable en transporte multimodal con inteligencia arancelaria, estudios de internacionalización y formación ejecutiva.',
      primaryCta: 'Iniciar Cotización con Comercial 1',
      secondaryCta: 'Explorar las 7 Unidades de Negocio',
      quickActionsTitle: 'CONSOLA DE DESPACHO DIRECTO (ESTILO EXPEDITORS)',
      quickActions: [
        {
          id: 'quote',
          code: 'CMD-01',
          label: 'Cotizar Flete Internacional',
          sublabel: 'Aéreo • Marítimo FCL/LCL • Terrestre OTM',
          email: CORPORATE_EMAILS.comercial1,
          subject: 'Solicitud de Cotización Internacional - Trade Link Logistic SAS',
        },
        {
          id: 'customs',
          code: 'CMD-02',
          label: 'Agenciamiento & Aranceles',
          sublabel: 'Nacionalización DIAN • VUCE • Partidas HS',
          email: CORPORATE_EMAILS.customs1,
          subject: 'Consulta de Agenciamiento Aduanal y Clasificación Arancelaria',
        },
        {
          id: 'ops-intl',
          code: 'CMD-03',
          label: 'Tráfico Internacional (Ops 1)',
          sublabel: 'Coordinación Booking • BL • AWB',
          email: CORPORATE_EMAILS.operaciones1,
          subject: 'Coordinación Operativa Internacional - Operaciones 1',
        },
        {
          id: 'ops-land',
          code: 'CMD-04',
          label: 'Tráfico Nacional & DTA (Ops 2)',
          sublabel: 'Transporte Terrestre • OTM • Puertos',
          email: CORPORATE_EMAILS.operaciones2,
          subject: 'Coordinación de Transporte Terrestre / Puerto - Operaciones 2',
        },
      ],
      kpis: [
        {
          value: '120+',
          label: 'Nodos Portuarios y Aéreos',
          detail: 'Conexión directa con Shanghái, Miami, Rotterdam, Cartagena y Buenaventura.',
        },
        {
          value: '99.8%',
          label: 'Exactitud Arancelaria',
          detail: 'Blindaje normativo ante la DIAN, VUCE y entidades de control sanitario.',
        },
        {
          value: '24/7',
          label: 'Torre de Control Operativa',
          detail: 'Trazabilidad ejecutiva por canal dedicado: Comercial, Customs y Operaciones.',
        },
        {
          value: '7',
          label: 'Unidades Especializadas',
          detail: 'Integración total entre flujo físico de carga e inteligencia de comercio exterior.',
        },
      ],
    },
    operationsSection: {
      eyebrow: 'PILAR I • INFRAESTRUCTURA DE FLUJO FÍSICO',
      title: 'Operaciones Globales & Agenciamiento Aduanal',
      subtitle:
        'Ejecución rigurosa de extremo a extremo. Sincronizamos puertos, aeropuertos, carreteras y recintos aduaneros bajo protocolos internacionales de seguridad y cumplimiento.',
    },
    advisorySection: {
      eyebrow: 'PILAR II • INTELIGENCIA COMERCIAL & CUMPLIMIENTO NORMATIVO',
      title: 'Consultoría Estratégica, Estudios de Mercado y Academia',
      subtitle:
        'Antes de mover un contenedor, blindamos su rentabilidad y su seguridad jurídica. Transformamos datos arancelarios y regulatorios en ventajas competitivas reales.',
      blueprintNote: 'ARQUITECTURA DE CONOCIMIENTO // SISTEMA ARMONIZADO DE DESIGNACIÓN Y CODIFICACIÓN DE MERCANCÍAS',
    },
    services: [
      {
        id: 'agenciamiento-aduanal',
        code: 'UNIT-01 // CUSTOMS',
        pillar: 'operations',
        title: 'Servicio de Agenciamiento Aduanal',
        subtitle: 'Gestión integral ante DIAN, VUCE y autoridades portuarias con liberación acelerada.',
        description:
          'Actuamos como el brazo técnico-jurídico de su cadena de suministro en puertos, aeropuertos y pasos fronterizos. Estructuramos y ejecutamos declaraciones de importación, exportación y tránsito aduanero garantizando cero sobrecostos por demoras o inconsistencias documentales.',
        executiveSummary:
          'Inspección pre-arribo, levante anticipado, manejo de regímenes especiales (Plan Vallejo, Zonas Francas, Importación Temporal) y gestión integral de Vistos Buenos.',
        image: '/assets/services/customs-brokerage.jpg',
        specs: ['Levante Anticipado DIAN', 'Gestión VUCE / INVIMA / ICA', 'Zonas Francas & Plan Vallejo', 'Auditoría Pre-Inspección'],
        deliverables: [
          'Validación documental completa antes del zarpe o vuelo (Factura Comercial, Packing List, Certificados de Origen).',
          'Coordinación de inspecciones físicas y documentales en Cartagena, Buenaventura, Barranquilla, Bogotá y Medellín.',
          'Expediente digital auditable con trazabilidad de tributos aduaneros y levantes.',
        ],
        metrics: [
          { label: 'Tiempo Promedio Nacionalización', value: '24h - 48h' },
          { label: 'Cumplimiento Documental', value: '100%' },
        ],
        departmentEmail: CORPORATE_EMAILS.customs1,
        departmentLabel: 'Customs 1 (Aduanas)',
        ctaText: 'Contactar a Customs 1',
        futureModuleTag: 'Próximo Módulo: Validador VUCE & Expediente Digital',
      },
      {
        id: 'transporte-aereo',
        code: 'UNIT-02 // AIR FREIGHT',
        pillar: 'operations',
        title: 'Transporte Aéreo Internacional',
        subtitle: 'Velocidad crítica y prioridad de espacio en las principales aerolíneas cargueras del mundo.',
        description:
          'Diseñado para mercancías de alto valor, repuestos industriales urgentes, tecnología, farmacéuticos y perecederos. Operamos consolidaciones semanales y vuelos chárter desde los hubs de Miami, Madrid, Frankfurt, Shanghái, Hong Kong y Ciudad de México hacia El Dorado (BOG), Rionegro (MDE) y Alfonso Bonilla Aragón (CLO).',
        executiveSummary:
          'Soluciones Air Priority, Air Standard, carga con control de temperatura, mercancías peligrosas (DGR IATA) y despacho puerta a aeropuerto o puerta a puerta.',
        image: '/assets/services/air-freight.jpg',
        specs: ['IATA Cargo Standards', 'Next Flight Out (NFO)', 'Control Térmico & Pharma', 'Mercancía Peligrosa (DGR)'],
        deliverables: [
          'Emisión y control de guías aéreas (Master AWB & House AWB) con monitoreo de conexiones.',
          'Reserva garantizada de capacidad (Blocked Space Agreements) en temporadas altas.',
          'Desconsolidación exprés en depósitos habilitados para levante inmediato.',
        ],
        metrics: [
          { label: 'Tránsito Express USA/LATAM', value: '24h - 72h' },
          { label: 'Cobertura de Hubs IATA', value: '+85 Países' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 / Operaciones 1',
        ctaText: 'Cotizar Flete Aéreo',
        futureModuleTag: 'Próximo Módulo: Telemetría AWB en Tiempo Real',
      },
      {
        id: 'transporte-maritimo',
        code: 'UNIT-03 // OCEAN FREIGHT',
        pillar: 'operations',
        title: 'Transporte Marítimo (FCL / LCL / Proyectos)',
        subtitle: 'Capacidad global en contenedores completos, carga consolidada y carga sobredimensionada.',
        description:
          'Alianzas estratégicas con las principales líneas navieras globales para conectar Asia-Pacífico, Europa del Norte, el Mediterráneo, Golfo de EE. UU. y Sudamérica con las terminales marítimas de Cartagena (SPRC / Contecar), Buenaventura (SPIA / TCBuen), Barranquilla y Santa Marta.',
        executiveSummary:
          'Optimización de fletes marítimos en equipos Dry 20’/40’/40’HC, Reefer refrigerados, Open Top, Flat Rack y consolidados semanales LCL con días libres de demora negociados.',
        image: '/assets/services/ocean-freight.jpg',
        specs: ['FCL (20’ / 40’ / 40’HC)', 'Consolidado LCL Semanal', 'Equipos Reefer & Flat Rack', 'Breakbulk & Carga Proyecto'],
        deliverables: [
          'Negociación de días libres de demora y detención (Demurrage & Detention) en destino.',
          'Rutas directas y con transbordo optimizado desde China, Corea, Alemania, España, Brasil y EE. UU.',
          'Gestión de Bill of Lading (BL Original, Sea Waybill, Express Release) sin fricciones.',
        ],
        metrics: [
          { label: 'Salidas Semanales LCL/FCL', value: 'Frecuencia Fija' },
          { label: 'Terminales Conectadas', value: 'Global Tier-1' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 / Operaciones 1',
        ctaText: 'Cotizar Carga Marítima',
        futureModuleTag: 'Próximo Módulo: Simulador de Cubicación 3D Contenedores',
      },
      {
        id: 'transporte-terrestre',
        code: 'UNIT-04 // LAND & MULTIMODAL',
        pillar: 'operations',
        title: 'Transporte Terrestre Nacional y Andino',
        subtitle: 'Conexión puerto-planta, Tránsito Aduanero (DTA), OTM y distribución transfronteriza.',
        description:
          'Integramos el tramo terrestre con la misma rigurosidad que el tráfico internacional. Movilizamos contenedores y carga suelta desde las sociedades portuarias hacia zonas francas y plantas industriales en Bogotá, Medellín, Cali, Eje Cafetero, Santanderes y corredores internacionales hacia Ecuador y Perú.',
        executiveSummary:
          'Flota monitoreada por GPS satelital 24/7, escoltas de seguridad vial, cumplimiento de protocolos BASC, Operación de Transporte Multimodal (OTM) y Declaración de Tránsito Aduanero (DTA).',
        image: '/assets/services/land-transport.jpg',
        specs: ['Modalidad OTM & DTA', 'Monitoreo Satelital 24/7', 'Carga Masiva & Semi-masiva', 'Corredor Andino (ECU/PER)'],
        deliverables: [
          'Suspensión de tributos en puerto mediante continuación de viaje OTM hasta depósito o zona franca interior.',
          'Reportes de trazabilidad vial en puntos de control estratégicos y devolución oportuna de contenedor vacío (Drop-off).',
          'Vehículos dedicados: patinetas, tractomulas, furgones refrigerados y camas bajas.',
        ],
        metrics: [
          { label: 'Monitoreo de Seguridad', value: 'GPS Activo 24/7' },
          { label: 'Cobertura Industrial', value: 'Nacional + Andina' },
        ],
        departmentEmail: CORPORATE_EMAILS.operaciones2,
        departmentLabel: 'Operaciones 2 (Terrestre)',
        ctaText: 'Coordinar Transporte Terrestre',
        futureModuleTag: 'Próximo Módulo: Torre de Control GPS & Carta Porte',
      },
      {
        id: 'estudios-mercado',
        code: 'UNIT-05 // MARKET INTELLIGENCE',
        pillar: 'advisory',
        title: 'Estudios de Mercado para la Internacionalización',
        subtitle: 'Inteligencia de datos comerciales para exportar o importar con rentabilidad comprobada.',
        description:
          'Eliminamos la incertidumbre al abrir nuevos mercados internacionales o seleccionar proveedores en el exterior. Realizamos estudios profundos basados en estadísticas reales de comercio exterior por subpartida arancelaria, identificando compradores activos, proveedores confiables, precios FOB/CIF históricos y preferencias arancelarias en TLCs.',
        executiveSummary:
          'Viabilidad comercial y logística de su producto en mercados destino, costeo real Landed Cost, análisis de competencia internacional y matriz de riesgo país.',
        image: '/assets/services/market-studies.jpg',
        specs: ['Inteligencia por Subpartida HS', 'Cálculo de Landed Cost', 'Mapeo de TLCs y Acuerdos', 'Verificación de Proveedores'],
        deliverables: [
          'Dossier Ejecutivo de Internacionalización con volúmenes de importación/exportación y precios promedio.',
          'Simulación financiera completa de costos de exportación (Ex-Works hasta DDP) o importación hasta bodega.',
          'Identificación de barreras técnicas al comercio, normas de etiquetado y certificaciones exigidas en destino.',
        ],
        metrics: [
          { label: 'Acuerdos Comerciales Analizados', value: '+18 TLCs' },
          { label: 'Precisión en Costeo Landed', value: '99.4%' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 (Consultoría)',
        ctaText: 'Solicitar Estudio de Mercado',
        futureModuleTag: 'Próximo Módulo: Calculadora Interactiva Landed Cost',
      },
      {
        id: 'clasificacion-arancelaria',
        code: 'UNIT-06 // TARIFF & COMPLIANCE',
        pillar: 'advisory',
        title: 'Asesoría Personalizada en Clasificación Arancelaria y Cumplimiento Normativo',
        subtitle: 'Ingeniería arancelaria y blindaje jurídico frente a la DIAN y autoridades regulatorias.',
        description:
          'Una clasificación arancelaria exacta define el arancel, el IVA, los vistos buenos y las preferencias de origen de su mercancía. Nuestro equipo de especialistas en merceología y derecho aduanero analiza fichas técnicas, composición química y función mecánica para determinar la subpartida exacta a 10 dígitos bajo las Reglas Generales Interpretativas del Sistema Armonizado.',
        executiveSummary:
          'Dictámenes técnicos de clasificación arancelaria, Resoluciones Anticipadas ante la DIAN, auditoría preventiva de cumplimiento normativo y gestión de reglamentos técnicos (RETIE, RETIQ, INVIMA, ICA, ANLA).',
        image: '/assets/services/tariff-advisory.jpg',
        specs: ['Merceología & 6 Reglas OMA', 'Resoluciones Anticipadas DIAN', 'Reglamentos Técnicos & VUCE', 'Criterios de Origen TLC'],
        deliverables: [
          'Concepto Técnico de Clasificación Arancelaria sustentado jurídica y merceológicamente.',
          'Matriz de requisitos previos a la importación (registros sanitarios, licencias previas, etiquetado).',
          'Auditoría de declaraciones históricas para detectar oportunidades de ahorro arancelario o mitigar riesgos.',
        ],
        metrics: [
          { label: 'Codificación Técnica', value: '10 Dígitos DIAN' },
          { label: 'Riesgo Sancionatorio', value: 'Mitigación Total' },
        ],
        departmentEmail: CORPORATE_EMAILS.customs1,
        departmentLabel: 'Customs 1 (Aranceles & Normativa)',
        ctaText: 'Consultar con Especialista Aduanal',
        futureModuleTag: 'Próximo Módulo: Buscador Arancelario IA & Simulador de Tributos',
      },
      {
        id: 'capacitaciones-logistica',
        code: 'UNIT-07 // CORPORATE ACADEMY',
        pillar: 'advisory',
        title: 'Capacitaciones en Logística y Comercio Exterior',
        subtitle: 'Formación ejecutiva In-Company para potenciar a sus equipos de compras, logística y finanzas.',
        description:
          'Empoderamos al talento humano de su organización con programas de entrenamiento práctico, diseñados a la medida de su sector industrial. Nuestros talleres transforman la teoría aduanera y logística en decisiones financieras inteligentes que optimizan tiempos de aprovisionamiento y negociación con proveedores globales.',
        executiveSummary:
          'Entrenamiento corporativo en aplicación estratégica de Incoterms® 2020, contratación de transporte internacional, actualización en regulación aduanera colombiana y auditoría de costos logísticos.',
        image: '/assets/services/corporate-training.jpg',
        specs: ['Dominio Incoterms® 2020', 'Actualización Normativa DIAN', 'Negociación de Fletes & Seguros', 'Talleres In-Company / Virtual'],
        deliverables: [
          'Diagnóstico previo del equipo corporativo y diseño curricular adaptado a las operaciones reales de su empresa.',
          'Casos prácticos con documentos reales de transporte (BL, AWB, Carta Porte, Declaraciones de Importación).',
          'Material técnico de consulta rápida y certificación corporativa de asistencia emitida por TRADE LINK LOGISTIC SAS.',
        ],
        metrics: [
          { label: 'Modalidad Ejecutiva', value: 'In-Company & Live' },
          { label: 'Enfoque Metodológico', value: '100% Casos Reales' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 (Academia Corporativa)',
        ctaText: 'Programar Capacitación Corporativa',
        futureModuleTag: 'Próximo Módulo: Campus Virtual Trade Link Academy',
      },
    ],
    corridorsSection: {
      eyebrow: 'TELEMETRÍA DE RED GLOBAL // THREE.JS COMMAND',
      title: 'Corredores Estratégicos Conectados con Colombia',
      subtitle:
        'Operamos sobre las arterias comerciales de mayor tráfico del planeta con coordinación centralizada y visibilidad por etapa.',
      corridors: [
        {
          code: 'CORR-ASIA-PAC',
          origin: 'Shanghái / Ningbo / Shenzhen (CN)',
          destination: 'Buenaventura (BUN) / Bogotá (BOG)',
          mode: 'Marítimo FCL/LCL + OTM / Aéreo VIP',
          transitTime: '28-34 días (Mar) / 72h (Aéreo)',
          frequency: 'Salidas Semanales',
          coords: '31°13′N 121°28′E → 03°53′N 77°04′W',
        },
        {
          code: 'CORR-NORTH-AM',
          origin: 'Miami / Houston / New York (US)',
          destination: 'Cartagena (CTG) / El Dorado (BOG) / Medellín (MDE)',
          mode: 'Aéreo Consolidado / Marítimo Express',
          transitTime: '4-7 días (Mar) / 24h (Aéreo)',
          frequency: 'Diario (Aéreo) / Semanal (Mar)',
          coords: '25°47′N 80°17′W → 10°24′N 75°30′W',
        },
        {
          code: 'CORR-EUROPE',
          origin: 'Rotterdam (NL) / Hamburgo (DE) / Valencia (ES)',
          destination: 'Cartagena (CTG) / Barranquilla (BAQ)',
          mode: 'Marítimo Directo FCL/LCL & Aéreo Frankfurt/Madrid',
          transitTime: '14-18 días (Mar) / 48h (Aéreo)',
          frequency: 'Semanal Fijo',
          coords: '51°55′N 04°28′E → 10°24′N 75°30′W',
        },
        {
          code: 'CORR-ANDINO-LATAM',
          origin: 'Bogotá / Medellín / Cali (CO)',
          destination: 'Tulcán / Quito / Guayaquil (EC) & Callao / Lima (PE)',
          mode: 'Terrestre Internacional / Multimodal / Marítimo',
          transitTime: '3-6 días Puerta a Puerta',
          frequency: 'Salidas Diarias',
          coords: '04°36′N 74°05′W → 02°11′S 79°53′W',
        },
      ],
    },
    futureModulesSection: {
      eyebrow: 'ROADMAP TECNOLÓGICO // ARQUITECTURA ESCALABLE',
      title: 'Infraestructura Lista para Módulos Digitales',
      subtitle:
        'Nuestra plataforma web ha sido diseñada con una arquitectura de grado empresarial preparada para integrar herramientas de autogestión para nuestros clientes corporativos.',
      modules: [
        {
          code: 'MOD-01',
          name: 'Cotizador Inteligente & Booking Multimodal',
          status: 'En Arquitectura • Solicitar Acceso Prioritario',
          description:
            'Cálculo tarifario dinámico para cargas FCL, LCL, Aéreas y Terrestres con desglose de recargos locales y reserva inmediata.',
          targetEmail: CORPORATE_EMAILS.comercial1,
        },
        {
          code: 'MOD-02',
          name: 'Torre de Rastreo Satelital (BL / AWB / OTM)',
          status: 'En Arquitectura • Solicitar Acceso Prioritario',
          description:
            'Seguimiento unificado de hitos operativos: zarpe, arribo, levante aduanal DIAN y entrega terrestre en planta.',
          targetEmail: CORPORATE_EMAILS.operaciones1,
        },
        {
          code: 'MOD-03',
          name: 'Asistente de Clasificación Arancelaria & Tributos',
          status: 'En Arquitectura • Solicitar Acceso Prioritario',
          description:
            'Consulta rápida de subpartidas del Arancel de Aduanas, preferencias TLC y requisitos VUCE.',
          targetEmail: CORPORATE_EMAILS.customs1,
        },
        {
          code: 'MOD-04',
          name: 'Portal Financiero & Estados de Cuenta',
          status: 'En Arquitectura • Solicitar Acceso Prioritario',
          description:
            'Descarga de facturación electrónica, soportes de pagos a terceros (navieras/puertos) y conciliación.',
          targetEmail: CORPORATE_EMAILS.contabilidad1,
        },
      ],
    },
    contactSection: {
      eyebrow: 'COMUNICACIÓN DIRECTA // @TRADELINKLOGISTIC.COM',
      title: 'Directorio Oficial de Departamentos y Mesa de Despacho',
      subtitle:
        'En TRADE LINK LOGISTIC SAS usted nunca habla con un bot genérico. Conéctese directamente con el líder del área responsable de su operación.',
      departments: [
        {
          id: 'comercial1',
          alias: 'Comercial 1',
          email: CORPORATE_EMAILS.comercial1,
          role: 'Dirección Comercial & Nuevos Negocios (Contacto Principal)',
          description:
            'Cotizaciones integrales de transporte Aéreo, Marítimo y Terrestre, Estudios de Mercado para la Internacionalización y Capacitaciones Corporativas.',
          sla: 'Respuesta prioritaria < 2 horas hábiles',
          badge: 'CANAL PRINCIPAL',
        },
        {
          id: 'customs1',
          alias: 'Customs 1',
          email: CORPORATE_EMAILS.customs1,
          role: 'Dirección de Agenciamiento Aduanal & Aranceles',
          description:
            'Operaciones de nacionalización y exportación ante la DIAN, gestión VUCE, Clasificación Arancelaria a 10 dígitos y cumplimiento normativo.',
          sla: 'Atención especializada aduanal',
          badge: 'ADUANAS & NORMATIVA',
        },
        {
          id: 'operaciones1',
          alias: 'Operaciones 1',
          email: CORPORATE_EMAILS.operaciones1,
          role: 'Coordinación de Tráfico Internacional (Aéreo & Marítimo)',
          description:
            'Seguimiento de bookings activos, coordinación con agentes en origen, emisión de BL/AWB, avisos de zarpe y arribo internacional.',
          sla: 'Monitoreo continuo 24/7',
          badge: 'TRÁFICO INTERNACIONAL',
        },
        {
          id: 'operaciones2',
          alias: 'Operaciones 2',
          email: CORPORATE_EMAILS.operaciones2,
          role: 'Coordinación de Transporte Terrestre, Puertos & OTM/DTA',
          description:
            'Programación de retiro en puertos de Cartagena/Buenaventura, despachos terrestres nacionales, tránsitos aduaneros y entrega en bodega.',
          sla: 'Control de ruta en tiempo real',
          badge: 'TRÁFICO TERRESTRE & OTM',
        },
        {
          id: 'contabilidad1',
          alias: 'Contabilidad 1',
          email: CORPORATE_EMAILS.contabilidad1,
          role: 'Departamento de Contabilidad, Facturación & Tesorería',
          description:
            'Gestión de facturación electrónica, anticipos para tributos aduaneros, pagos a navieras/puertos, estados de cuenta y alta de proveedores.',
          sla: 'Soporte administrativo y financiero',
          badge: 'FINANZAS & FACTURACIÓN',
        },
      ],
      form: {
        title: 'Despacho de Solicitud Corporativa',
        subtitle:
          'Seleccione la unidad de servicio y nuestro sistema enrutará automáticamente su requerimiento al correo departamental correspondiente.',
        nameLabel: 'Nombre Completo / Cargo',
        namePlaceholder: 'Ej. Carlos Mendoza - Director de Supply Chain',
        companyLabel: 'Empresa / Razón Social (NIT)',
        companyPlaceholder: 'Ej. Industrias Globales S.A.S.',
        emailLabel: 'Correo Corporativo',
        emailPlaceholder: 'cmendoza@suempresa.com',
        phoneLabel: 'Teléfono / WhatsApp Corporativo',
        phonePlaceholder: '+57 300 000 0000',
        serviceLabel: 'Servicio o Unidad Requerida',
        departmentRoutingLabel: 'Destinatario Asignado Automáticamente:',
        incotermLabel: 'Modalidad / Incoterm Estimado',
        messageLabel: 'Especificaciones de la Carga o Consulta',
        messagePlaceholder:
          'Indique origen, destino, tipo de mercancía, peso/volumen estimado o detalle de la asesoría arancelaria / estudio de mercado requerido...',
        submitButton: 'Enviar Requerimiento Oficial',
        copiedNotification: '¡Correo copiado al portapapeles!',
        directMailNote:
          'Al enviar, se preparará su comunicación oficial dirigida directamente al departamento responsable de @tradelinklogistic.com.',
      },
    },
    footer: {
      tagline:
        'Ingeniería logística internacional, agenciamiento aduanal de alta precisión e inteligencia comercial para empresas que lideran el comercio global.',
      legalNote: 'TRADE LINK LOGISTIC SAS • Dominio Oficial: tradelinklogistic.com',
      headquarters: 'Operaciones en Colombia: Bogotá D.C. • Medellín • Cali • Cartagena • Buenaventura',
      ports: 'Nodos Globales: Miami • Houston • Rotterdam • Hamburgo • Shanghái • Ningbo • Santos • Callao',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    meta: {
      title: 'TRADE LINK LOGISTIC SAS | Global Logistics Engineering & Customs',
      description:
        'Customs brokerage, international air, ocean, and land freight, market internationalization studies, tariff classification, and executive training.',
    },
    topBar: {
      status: 'GLOBAL COMMAND CENTER ACTIVE // 24/7',
      domain: 'tradelinklogistic.com',
      primaryContactLabel: 'Commercial Desk:',
      ComplianceBadge: 'DIAN COMPLIANCE • VUCE • AEO • IATA • BASC',
    },
    nav: {
      operations: 'Freight & Customs',
      advisory: 'Advisory & Academy',
      corridors: '3D Corridors',
      architecture: 'Digital Ecosystem',
      directory: 'Directory (5 Desks)',
      ctaQuote: 'Quote with Comercial 1',
    },
    hero: {
      telemetryBadge: 'TRADE LINK LOGISTIC SAS • GLOBAL SUPPLY CHAIN ARCHITECTURE',
      titleLine1: 'Logistics Engineering &',
      titleHighlight: 'Customs Precision',
      titleLine2: 'Without Borders.',
      description:
        'We connect Colombian and Latin American industry with the strategic trade hubs of Asia, North America, and Europe. Combining flawless multimodal freight execution with tariff intelligence, market expansion studies, and executive training.',
      primaryCta: 'Request Quote via Comercial 1',
      secondaryCta: 'Explore All 7 Business Units',
      quickActionsTitle: 'DIRECT DISPATCH CONSOLE (EXPEDITORS-STYLE)',
      quickActions: [
        {
          id: 'quote',
          code: 'CMD-01',
          label: 'Request Freight Quote',
          sublabel: 'Air • Ocean FCL/LCL • Land OTM',
          email: CORPORATE_EMAILS.comercial1,
          subject: 'International Freight Quote Request - Trade Link Logistic SAS',
        },
        {
          id: 'customs',
          code: 'CMD-02',
          label: 'Customs & Tariff Desk',
          sublabel: 'DIAN Clearance • VUCE • HS Codes',
          email: CORPORATE_EMAILS.customs1,
          subject: 'Customs Brokerage & Tariff Classification Inquiry',
        },
        {
          id: 'ops-intl',
          code: 'CMD-03',
          label: 'Intl. Traffic Desk (Ops 1)',
          sublabel: 'Booking Coordination • BL • AWB',
          email: CORPORATE_EMAILS.operaciones1,
          subject: 'International Operations Coordination - Operaciones 1',
        },
        {
          id: 'ops-land',
          code: 'CMD-04',
          label: 'Inland & Port Traffic (Ops 2)',
          sublabel: 'Inland Trucking • OTM • DTA',
          email: CORPORATE_EMAILS.operaciones2,
          subject: 'Inland Transport & Port Dispatch - Operaciones 2',
        },
      ],
      kpis: [
        {
          value: '120+',
          label: 'Global Port & Air Nodes',
          detail: 'Direct corridors linking Shanghai, Miami, Rotterdam, Cartagena, and Buenaventura.',
        },
        {
          value: '99.8%',
          label: 'Tariff Accuracy Rate',
          detail: 'Full regulatory compliance before DIAN, VUCE, and sanitary authorities.',
        },
        {
          value: '24/7',
          label: 'Operational Control Tower',
          detail: 'Dedicated routing across Commercial, Customs, Operations & Finance desks.',
        },
        {
          value: '7',
          label: 'Specialized Units',
          detail: 'Seamless integration between physical cargo flow and trade intelligence.',
        },
      ],
    },
    operationsSection: {
      eyebrow: 'PILLAR I • PHYSICAL FLOW INFRASTRUCTURE',
      title: 'Global Freight Operations & Customs Brokerage',
      subtitle:
        'End-to-end engineering execution. We synchronize seaports, airports, inland corridors, and customs jurisdictions under strict security and compliance protocols.',
    },
    advisorySection: {
      eyebrow: 'PILLAR II • TRADE INTELLIGENCE & REGULATORY COMPLIANCE',
      title: 'Strategic Advisory, Market Studies & Corporate Academy',
      subtitle:
        'Before moving a single container, we safeguard your margins and legal compliance. Turning tariff engineering and trade data into decisive market advantages.',
      blueprintNote: 'KNOWLEDGE ARCHITECTURE // HARMONIZED COMMODITY DESCRIPTION AND CODING SYSTEM',
    },
    services: [
      {
        id: 'agenciamiento-aduanal',
        code: 'UNIT-01 // CUSTOMS',
        pillar: 'operations',
        title: 'Customs Brokerage Services',
        subtitle: 'Comprehensive customs clearance before DIAN, VUCE, and port authorities.',
        description:
          'We operate as the technical and legal arm of your supply chain at ports, airports, and border crossings. We structure and execute import, export, and customs transit declarations ensuring zero demurrage penalties or documentary friction.',
        executiveSummary:
          'Pre-arrival audit, advance customs clearance, Free Trade Zone regimes, temporary imports, and complete sanitary/regulatory permit management.',
        image: '/assets/services/customs-brokerage.jpg',
        specs: ['Advance DIAN Clearance', 'VUCE / INVIMA / ICA Permits', 'Free Trade Zones', 'Pre-Inspection Audit'],
        deliverables: [
          'Full documentary validation prior to vessel departure or flight (Commercial Invoice, Packing List, Certificates of Origin).',
          'On-site inspection coordination across Cartagena, Buenaventura, Barranquilla, Bogotá, and Medellín.',
          'Auditable digital customs dossier with complete tax and clearance traceability.',
        ],
        metrics: [
          { label: 'Average Clearance Time', value: '24h - 48h' },
          { label: 'Documentary Compliance', value: '100%' },
        ],
        departmentEmail: CORPORATE_EMAILS.customs1,
        departmentLabel: 'Customs 1 Desk',
        ctaText: 'Contact Customs 1',
        futureModuleTag: 'Upcoming Module: VUCE Validator & Digital Dossier',
      },
      {
        id: 'transporte-aereo',
        code: 'UNIT-02 // AIR FREIGHT',
        pillar: 'operations',
        title: 'International Air Freight',
        subtitle: 'Time-critical speed and priority uplift across premier global cargo carriers.',
        description:
          'Engineered for high-value cargo, urgent industrial spares, electronics, pharmaceuticals, and perishables. We operate weekly consolidations and charter flights from Miami, Madrid, Frankfurt, Shanghai, Hong Kong, and Mexico City into Bogotá (BOG), Medellín (MDE), and Cali (CLO).',
        executiveSummary:
          'Air Priority, Air Standard, temperature-controlled pharma logistics, IATA Dangerous Goods (DGR), and door-to-door execution.',
        image: '/assets/services/air-freight.jpg',
        specs: ['IATA Cargo Standards', 'Next Flight Out (NFO)', 'Cold Chain & Pharma', 'Dangerous Goods (DGR)'],
        deliverables: [
          'Master AWB & House AWB issuance with milestone flight connection monitoring.',
          'Guaranteed capacity allocation during peak global shipping seasons.',
          'Express deconsolidation at bonded customs warehouses for immediate release.',
        ],
        metrics: [
          { label: 'Express Transit USA/LATAM', value: '24h - 72h' },
          { label: 'IATA Hub Coverage', value: '+85 Countries' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 / Operaciones 1',
        ctaText: 'Quote Air Freight',
        futureModuleTag: 'Upcoming Module: Live AWB Flight Telemetry',
      },
      {
        id: 'transporte-maritimo',
        code: 'UNIT-03 // OCEAN FREIGHT',
        pillar: 'operations',
        title: 'Ocean Freight (FCL / LCL / Project Cargo)',
        subtitle: 'Global container capacity, consolidated LCL departures, and breakbulk engineering.',
        description:
          'Strategic partnerships with tier-one ocean carriers linking Asia-Pacific, Northern Europe, the Mediterranean, US Gulf/East Coast, and South America with Cartagena (SPRC / Contecar), Buenaventura (SPIA / TCBuen), Barranquilla, and Santa Marta.',
        executiveSummary:
          'Optimized ocean freight in 20’/40’/40’HC Dry containers, Refrigerated Reefers, Open Top, Flat Rack, and weekly LCL consolidations with extended free time.',
        image: '/assets/services/ocean-freight.jpg',
        specs: ['FCL (20’ / 40’ / 40’HC)', 'Weekly LCL Consolidation', 'Reefer & Flat Rack Equipment', 'Breakbulk & Project Cargo'],
        deliverables: [
          'Negotiated extended Demurrage & Detention free days at destination ports.',
          'Direct and optimized transshipment services from China, Germany, Spain, Brazil, and the USA.',
          'Frictionless Bill of Lading management (Original BL, Sea Waybill, Express Release).',
        ],
        metrics: [
          { label: 'Weekly LCL/FCL Sailings', value: 'Fixed Schedule' },
          { label: 'Connected Terminals', value: 'Global Tier-1' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 / Operaciones 1',
        ctaText: 'Quote Ocean Freight',
        futureModuleTag: 'Upcoming Module: 3D Container Load Calculator',
      },
      {
        id: 'transporte-terrestre',
        code: 'UNIT-04 // LAND & MULTIMODAL',
        pillar: 'operations',
        title: 'Inland & Cross-Border Land Transport',
        subtitle: 'Port-to-plant drayage, Customs Transit (DTA), OTM, and Andean distribution.',
        description:
          'We integrate inland trucking with the same rigor as international freight. Moving containerized and breakbulk cargo from seaports to Free Trade Zones and industrial plants in Bogotá, Medellín, Cali, and cross-border corridors into Ecuador and Peru.',
        executiveSummary:
          '24/7 GPS satellite-monitored fleet, road security escorts, BASC protocols, Multimodal Transport Operations (OTM), and Customs Transit (DTA).',
        image: '/assets/services/land-transport.jpg',
        specs: ['OTM & DTA Regimes', '24/7 Satellite GPS', 'Heavy & Container Drayage', 'Andean Corridor (ECU/PER)'],
        deliverables: [
          'Port duty suspension via OTM continuation to interior bonded warehouses or Free Trade Zones.',
          'Checkpoint telemetry reports and timely empty container drop-off management.',
          'Dedicated fleet: container chassis, heavy flatbeds, refrigerated trucks, and lowboys.',
        ],
        metrics: [
          { label: 'Security Monitoring', value: '24/7 Active GPS' },
          { label: 'Industrial Footprint', value: 'National + Andean' },
        ],
        departmentEmail: CORPORATE_EMAILS.operaciones2,
        departmentLabel: 'Operaciones 2 (Inland)',
        ctaText: 'Coordinate Land Transport',
        futureModuleTag: 'Upcoming Module: GPS Control Tower & Waybill',
      },
      {
        id: 'estudios-mercado',
        code: 'UNIT-05 // MARKET INTELLIGENCE',
        pillar: 'advisory',
        title: 'Market Studies for Internationalization',
        subtitle: 'Data-driven trade intelligence to export or source globally with proven ROI.',
        description:
          'We eliminate guesswork when entering foreign markets or qualifying international suppliers. We conduct deep market studies backed by real customs statistics per HS code, identifying active buyers, verified manufacturers, historical FOB/CIF pricing, and FTA tariff advantages.',
        executiveSummary:
          'Commercial and logistical feasibility, full Landed Cost modeling, international competitor benchmarking, and regulatory entry requirements.',
        image: '/assets/services/market-studies.jpg',
        specs: ['HS Code Trade Analytics', 'Landed Cost Modeling', 'FTA Tariff Optimization', 'Supplier Verification'],
        deliverables: [
          'Executive Internationalization Dossier detailing trade volumes, growth trends, and average pricing.',
          'End-to-end financial simulation from Ex-Works to DDP delivered at buyer warehouse.',
          'Mapping of non-tariff barriers, labeling rules, and mandatory destination certifications.',
        ],
        metrics: [
          { label: 'Trade Agreements Mapped', value: '+18 FTAs' },
          { label: 'Landed Cost Precision', value: '99.4%' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 (Advisory)',
        ctaText: 'Request Market Study',
        futureModuleTag: 'Upcoming Module: Interactive Landed Cost Simulator',
      },
      {
        id: 'clasificacion-arancelaria',
        code: 'UNIT-06 // TARIFF & COMPLIANCE',
        pillar: 'advisory',
        title: 'Custom Tariff Classification & Regulatory Compliance Advisory',
        subtitle: 'Tariff engineering and legal shielding before customs and regulatory agencies.',
        description:
          'Accurate tariff classification dictates duty rates, VAT, sanitary permits, and rules of origin. Our specialists in commodity science and customs law examine technical data sheets, chemical composition, and mechanical function to determine the exact 10-digit HS code under WCO General Interpretative Rules.',
        executiveSummary:
          'Technical tariff rulings, Advance Rulings before DIAN, preventive compliance audits, and technical regulation management (INVIMA, ICA, ANLA, RETIE).',
        image: '/assets/services/tariff-advisory.jpg',
        specs: ['WCO 6 General Rules', 'DIAN Advance Rulings', 'Technical Regulations & VUCE', 'FTA Rules of Origin'],
        deliverables: [
          'Formal Technical Tariff Classification Opinion backed by legal and merceological analysis.',
          'Pre-importation compliance matrix (sanitary registrations, import licenses, labeling).',
          'Historical declaration audit to uncover duty savings or mitigate penalty exposure.',
        ],
        metrics: [
          { label: 'Technical Coding', value: '10-Digit HS/DIAN' },
          { label: 'Compliance Shield', value: 'Zero-Penalty Focus' },
        ],
        departmentEmail: CORPORATE_EMAILS.customs1,
        departmentLabel: 'Customs 1 (Tariff & Legal)',
        ctaText: 'Consult Tariff Specialist',
        futureModuleTag: 'Upcoming Module: AI Tariff Finder & Duty Calculator',
      },
      {
        id: 'capacitaciones-logistica',
        code: 'UNIT-07 // CORPORATE ACADEMY',
        pillar: 'advisory',
        title: 'Corporate Training in Logistics & Foreign Trade',
        subtitle: 'In-Company executive education for procurement, logistics, and finance teams.',
        description:
          'We empower your human capital through practical, industry-tailored training programs. Our executive workshops translate complex customs and logistics rules into smart commercial decisions that reduce lead times and optimize international freight negotiation.',
        executiveSummary:
          'Executive programs on Incoterms® 2020 strategy, international freight contracting, updated Colombian customs legislation, and supply chain cost auditing.',
        image: '/assets/services/corporate-training.jpg',
        specs: ['Incoterms® 2020 Mastery', 'DIAN Customs Updates', 'Freight & Insurance Negotiation', 'In-Company / Live Virtual'],
        deliverables: [
          'Pre-training team assessment and customized syllabus aligned with your actual trade lanes.',
          'Hands-on case studies using real shipping documents (BL, AWB, Waybill, Customs Declarations).',
          'Quick-reference technical playbooks and official corporate certification by TRADE LINK LOGISTIC SAS.',
        ],
        metrics: [
          { label: 'Delivery Format', value: 'In-Company & Live' },
          { label: 'Methodology', value: '100% Real Cases' },
        ],
        departmentEmail: CORPORATE_EMAILS.comercial1,
        departmentLabel: 'Comercial 1 (Corporate Academy)',
        ctaText: 'Book Corporate Training',
        futureModuleTag: 'Upcoming Module: Trade Link Academy Virtual Campus',
      },
    ],
    corridorsSection: {
      eyebrow: 'GLOBAL NETWORK TELEMETRY // THREE.JS COMMAND',
      title: 'Strategic Trade Corridors Connected with Colombia',
      subtitle:
        'We operate across the world’s highest-volume trade arteries with centralized coordination and milestone visibility.',
      corridors: [
        {
          code: 'CORR-ASIA-PAC',
          origin: 'Shanghai / Ningbo / Shenzhen (CN)',
          destination: 'Buenaventura (BUN) / Bogotá (BOG)',
          mode: 'Ocean FCL/LCL + OTM / VIP Air',
          transitTime: '28-34 days (Ocean) / 72h (Air)',
          frequency: 'Weekly Sailings',
          coords: '31°13′N 121°28′E → 03°53′N 77°04′W',
        },
        {
          code: 'CORR-NORTH-AM',
          origin: 'Miami / Houston / New York (US)',
          destination: 'Cartagena (CTG) / El Dorado (BOG) / Medellín (MDE)',
          mode: 'Consolidated Air / Express Ocean',
          transitTime: '4-7 days (Ocean) / 24h (Air)',
          frequency: 'Daily (Air) / Weekly (Ocean)',
          coords: '25°47′N 80°17′W → 10°24′N 75°30′W',
        },
        {
          code: 'CORR-EUROPE',
          origin: 'Rotterdam (NL) / Hamburg (DE) / Valencia (ES)',
          destination: 'Cartagena (CTG) / Barranquilla (BAQ)',
          mode: 'Direct Ocean FCL/LCL & Frankfurt/Madrid Air',
          transitTime: '14-18 days (Ocean) / 48h (Air)',
          frequency: 'Fixed Weekly',
          coords: '51°55′N 04°28′E → 10°24′N 75°30′W',
        },
        {
          code: 'CORR-ANDINO-LATAM',
          origin: 'Bogotá / Medellín / Cali (CO)',
          destination: 'Quito / Guayaquil (EC) & Callao / Lima (PE)',
          mode: 'Cross-Border Land / Multimodal / Ocean',
          transitTime: '3-6 days Door-to-Door',
          frequency: 'Daily Dispatches',
          coords: '04°36′N 74°05′W → 02°11′S 79°53′W',
        },
      ],
    },
    futureModulesSection: {
      eyebrow: 'TECHNOLOGY ROADMAP // SCALABLE ARCHITECTURE',
      title: 'Enterprise Infrastructure Ready for Digital Modules',
      subtitle:
        'Our platform is engineered on a modular architecture ready to activate self-service client tools across future deployment phases.',
      modules: [
        {
          code: 'MOD-01',
          name: 'Smart Freight Quoter & Multimodal Booking',
          status: 'Architecture Ready • Request Priority Access',
          description:
            'Dynamic rate calculation for FCL, LCL, Air, and Inland cargo with transparent local charges and instant booking.',
          targetEmail: CORPORATE_EMAILS.comercial1,
        },
        {
          code: 'MOD-02',
          name: 'Satellite Tracking Tower (BL / AWB / OTM)',
          status: 'Architecture Ready • Request Priority Access',
          description:
            'Unified milestone visibility: vessel departure, port arrival, DIAN customs release, and plant delivery.',
          targetEmail: CORPORATE_EMAILS.operaciones1,
        },
        {
          code: 'MOD-03',
          name: 'AI Tariff Classification & Duty Simulator',
          status: 'Architecture Ready • Request Priority Access',
          description:
            'Instant lookup of 10-digit HS tariff codes, FTA duty preferences, and mandatory VUCE permits.',
          targetEmail: CORPORATE_EMAILS.customs1,
        },
        {
          code: 'MOD-04',
          name: 'Financial Portal & Account Statements',
          status: 'Architecture Ready • Request Priority Access',
          description:
            'Electronic invoice downloads, third-party port/carrier payment vouchers, and account reconciliation.',
          targetEmail: CORPORATE_EMAILS.contabilidad1,
        },
      ],
    },
    contactSection: {
      eyebrow: 'DIRECT COMMUNICATION // @TRADELINKLOGISTIC.COM',
      title: 'Official Department Directory & Dispatch Desk',
      subtitle:
        'At TRADE LINK LOGISTIC SAS you never talk to a generic bot. Connect directly with the department head responsible for your operation.',
      departments: [
        {
          id: 'comercial1',
          alias: 'Comercial 1',
          email: CORPORATE_EMAILS.comercial1,
          role: 'Commercial Direction & New Business (Primary Contact)',
          description:
            'Comprehensive Air, Ocean & Land freight quotes, Market Internationalization Studies, and Corporate Training programs.',
          sla: 'Priority response < 2 business hours',
          badge: 'PRIMARY DESK',
        },
        {
          id: 'customs1',
          alias: 'Customs 1',
          email: CORPORATE_EMAILS.customs1,
          role: 'Customs Brokerage & Tariff Compliance Desk',
          description:
            'Import/export clearance before DIAN, VUCE permits, 10-digit HS Tariff Classification, and regulatory compliance.',
          sla: 'Specialized customs advisory',
          badge: 'CUSTOMS & TARIFFS',
        },
        {
          id: 'operaciones1',
          alias: 'Operaciones 1',
          email: CORPORATE_EMAILS.operaciones1,
          role: 'International Traffic Coordination (Air & Ocean)',
          description:
            'Active booking follow-up, origin agent coordination, BL/AWB issuance, departure and arrival notices.',
          sla: '24/7 continuous monitoring',
          badge: 'INTL. OPERATIONS',
        },
        {
          id: 'operaciones2',
          alias: 'Operaciones 2',
          email: CORPORATE_EMAILS.operaciones2,
          role: 'Inland Transport, Port Drayage & OTM/DTA Desk',
          description:
            'Port pickup scheduling in Cartagena/Buenaventura, national trucking dispatches, customs transit, and plant delivery.',
          sla: 'Real-time route control',
          badge: 'INLAND & OTM OPS',
        },
        {
          id: 'contabilidad1',
          alias: 'Contabilidad 1',
          email: CORPORATE_EMAILS.contabilidad1,
          role: 'Accounting, Billing & Treasury Department',
          description:
            'Electronic invoicing, customs duty advances, carrier/port settlements, account statements, and vendor onboarding.',
          sla: 'Administrative & financial support',
          badge: 'FINANCE & BILLING',
        },
      ],
      form: {
        title: 'Corporate Request Dispatch',
        subtitle:
          'Select the required business unit and our system will automatically route your request to the designated department email.',
        nameLabel: 'Full Name / Title',
        namePlaceholder: 'e.g., Carlos Mendoza - Supply Chain Director',
        companyLabel: 'Company / Legal Entity (Tax ID)',
        companyPlaceholder: 'e.g., Global Industries Corp.',
        emailLabel: 'Corporate Email',
        emailPlaceholder: 'cmendoza@company.com',
        phoneLabel: 'Phone / Corporate WhatsApp',
        phonePlaceholder: '+57 300 000 0000',
        serviceLabel: 'Required Service or Business Unit',
        departmentRoutingLabel: 'Automatically Assigned Recipient:',
        incotermLabel: 'Estimated Mode / Incoterm',
        messageLabel: 'Cargo Specifications or Advisory Inquiry',
        messagePlaceholder:
          'Specify origin, destination, commodity type, estimated weight/volume, or details regarding tariff classification / market study...',
        submitButton: 'Dispatch Official Request',
        copiedNotification: 'Email copied to clipboard!',
        directMailNote:
          'Upon submission, your structured official communication will be routed directly to the designated @tradelinklogistic.com desk.',
      },
    },
    footer: {
      tagline:
        'International logistics engineering, high-precision customs brokerage, and trade intelligence for companies leading global commerce.',
      legalNote: 'TRADE LINK LOGISTIC SAS • Official Domain: tradelinklogistic.com',
      headquarters: 'Colombia Operations: Bogotá D.C. • Medellín • Cali • Cartagena • Buenaventura',
      ports: 'Global Nodes: Miami • Houston • Rotterdam • Hamburg • Shanghai • Ningbo • Santos • Callao',
      rights: 'All rights reserved.',
    },
  },
};
