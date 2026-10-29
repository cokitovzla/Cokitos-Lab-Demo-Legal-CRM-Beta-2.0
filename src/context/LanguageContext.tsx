import React, { createContext, useContext, useState } from 'react';

export type Language = 'es' | 'fr' | 'en' | 'it' | 'de' | 'pt';

export interface Translations {
  nav: {
    whyUs: string;
    services: string;
    howItWorks: string;
    team: string;
    contact: string;
    crm: string;
    crmActive: string;
    backToWeb: string;
    login: string;
    register: string;
    demoBadge: string;
    diagnostic: string;
    blog: string;
  };
  hero: {
    kicker: string;
    titleLine1: string;
    titleLine2: string;
    titleLine3: string;
    subtitle: string;
    btnDiagnosis: string;
    btnServices: string;
    trustPoint1: string;
    trustPoint2: string;
    trustPoint3: string;
    cardBadge: string;
    cardTitle: string;
    cardDesc: string;
    cardItem1: string;
    cardItem2: string;
    cardItem3: string;
  };
  why: {
    kicker: string;
    title: string;
    subtitle: string;
    quote: string;
    quoteAuthor: string;
    quoteRole: string;
    quoteBadge: string;
    p1Num: string;
    p1Title: string;
    p1Desc: string;
    p2Num: string;
    p2Title: string;
    p2Desc: string;
    p3Num: string;
    p3Title: string;
    p3Desc: string;
  };
  services: {
    kicker: string;
    title: string;
    subtitle: string;
    moduleLabel: string;
    approachLabel: string;
    deliverablesLabel: string;
    risksLabel: string;
    idealStageLabel: string;
    closeModal: string;
    ctaDiagnosis: string;
    ctaDiagnosisModal: string;
    modalHint: string;
    items: Record<string, {
      title: string;
      shortDesc: string;
      fullDesc: string;
      deliverables: string[];
      risks: string[];
      stage: string;
    }>;
  };
  how: {
    kicker: string;
    title: string;
    subtitle: string;
    stepPrefix: string;
    deliverablesPrefix: string;
    step1Title: string;
    step1Subtitle: string;
    step1Desc: string;
    step1Deliv1: string;
    step1Deliv2: string;
    step1Deliv3: string;
    step1Time: string;
    step2Title: string;
    step2Subtitle: string;
    step2Desc: string;
    step2Deliv1: string;
    step2Deliv2: string;
    step2Deliv3: string;
    step2Time: string;
    step3Title: string;
    step3Subtitle: string;
    step3Desc: string;
    step3Deliv1: string;
    step3Deliv2: string;
    step3Deliv3: string;
    step3Time: string;
  };
  team: {
    kicker: string;
    title: string;
    subtitle: string;
    founderBadge: string;
    founderQuote: string;
    founderCta: string;
    founderProfileBtn: string;
    specialistsBadge: string;
    specialistsDesc: string;
  };
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    companyLabel: string;
    messageLabel: string;
    submitBtn: string;
    sendingBtn: string;
    successTitle: string;
    successDesc: string;
    successCrmBadge: string;
    channelsTitle: string;
    whatsappBtn: string;
    emailBtn: string;
    hoursTitle: string;
    hoursDesc: string;
    locationsTitle: string;
    locationsDesc: string;
    newsletterTitle: string;
    newsletterSubtitle: string;
    newsletterBtn: string;
    newsletterSuccess: string;
  };
  agency: {
    kicker: string;
    title: string;
    subtitle: string;
    storyTitle: string;
    storyDesc: string;
    formulaTitle: string;
    formulaDesc: string;
    step1Label: string;
    step1Tag: string;
    step1Title: string;
    step1Desc: string;
    step1Badge: string;
    step2Label: string;
    step2Tag: string;
    step2Title: string;
    step2Desc: string;
    step2Badge: string;
    step3Label: string;
    step3Tag: string;
    step3Title: string;
    step3Desc: string;
    step3Badge: string;
    networkTitle: string;
    networkDesc: string;
    hubsTitle: string;
    ctaButton: string;
    ctaSubtitle: string;
  };
  crmBanner: {
    badge: string;
    title: string;
    desc: string;
    ctaBack: string;
  };
  drawers: {
    diagnosticBadge: string;
    diagnosticTitle: string;
    diagnosticSubtitle: string;
    diagnosticCtaOpen: string;
    diagnosticCtaClose: string;
    blogBadge: string;
    blogTitle: string;
    blogSubtitle: string;
    blogCtaOpen: string;
    blogCtaClose: string;
  };
  footer: {
    tagline: string;
    rights: string;
    network: string;
    europeOffices: string;
    poweredBy: string;
    allRightsReserved: string;
  };
}

const translationsData: Record<Language, Translations> = {
  es: {
    nav: {
      whyUs: 'Por qué',
      services: 'Qué hacemos',
      howItWorks: 'Cómo',
      team: 'Equipo',
      contact: 'Contacto',
      crm: 'Panel CRM',
      crmActive: 'CRM Activo',
      backToWeb: 'Ver Sitio Web',
      login: 'Iniciar Sesión',
      register: 'Registrarse',
      demoBadge: "Cokito's Lab · Entorno Demo",
      diagnostic: 'Diagnóstico',
      blog: 'Blog & Recursos',
    },
    hero: {
      kicker: "Cokito's Lab International · Solución para Firmas",
      titleLine1: 'Impulsamos y',
      titleLine2: 'protegemos tu negocio',
      titleLine3: 'con tecnología y estrategia legal.',
      subtitle: "Demo interactiva desarrollada por Cokito's Lab para despachos y empresas. Así es como luce una experiencia moderna que convierte prospectos y los gestiona en su propio CRM interno.",
      btnDiagnosis: 'Probar Diagnóstico Interactivo',
      btnServices: 'Conocer Qué Hacemos',
      trustPoint1: 'Estructuración societaria y contratos',
      trustPoint2: 'Conectado a CRM administrativo en tiempo real',
      trustPoint3: 'Soporte multilingüe para Europa y América',
      cardBadge: 'Caso de Estudio Real',
      cardTitle: 'Arquitectura Legal + CRM',
      cardDesc: "Un abogado nos trajo su visión y Cokito's Lab la convirtió en esta plataforma de captación y administración de clientes.",
      cardItem1: 'Captación digital y triaje de consultas preventivas',
      cardItem2: 'Tablero kanban y expedientes de clientes en línea',
      cardItem3: 'Red de colaboradores en Europa y América',
    },
    why: {
      kicker: 'Por Qué Modernizar tu Práctica Legal',
      title: 'El modelo tradicional de asesoría legal está roto. Te mostramos cómo transformarlo.',
      subtitle: "Consultas que se pierden en bandejas de entrada, semanas para revisar un contrato y clientes que no saben en qué estado va su expediente. En Cokito's Lab construimos la tecnología para que tu firma u organización opere como una plataforma digital moderna: rápida, preventiva y conectada en tiempo real.",
      quoteBadge: 'Impacto Comprobado de la Modernización',
      quote: 'La digitalización no deshumaniza el servicio jurídico: elimina las tareas repetitivas y lentas para que el abogado se enfoque en estrategia de alto valor y el cliente tenga respuestas en horas.',
      quoteAuthor: 'Daniel Eduardo Pérez',
      quoteRole: 'Director General · JurisNova',
      p1Num: '01',
      p1Title: 'Porque la lentitud y la opacidad cuestan clientes',
      p1Desc: 'El 80% de los clientes que abandonan una firma lo hacen por la falta de visibilidad y las semanas de silencio en sus trámites. Un entorno web con diagnóstico express y seguimiento de hitos en tiempo real genera confianza inmediata y multiplica la retención.',
      p2Num: '02',
      p2Title: 'Porque el software convierte tu expertise en un activo escalable',
      p2Desc: 'Sin herramientas tecnológicas, los abogados facturan únicamente por horas vendidas. Con captación automatizada y CRM de expedientes, tu despacho pasa de ser un servicio artesanal a una empresa escalable con operaciones ordenadas.',
      p3Num: '03',
      p3Title: 'Porque la prevención ahorra litigios costosos',
      p3Desc: 'El derecho moderno no espera a que el conflicto explote. Un triaje inteligente clasifica riesgos en pactos de socios, propiedad intelectual y compliance regulatorio antes de que se conviertan en demandas.',
    },
    services: {
      kicker: "Módulos de Práctica Recomendados por Cokito's Lab",
      title: 'Acompañamiento legal estratégico y modular',
      subtitle: 'Estas son las áreas de práctica prioritarias recomendadas para estructurar tu plataforma: módulos de alta demanda y recurrencia diseñados para solicitar asesoría societaria, blindaje de activos y compliance de forma ágil.',
      moduleLabel: 'Módulo',
      approachLabel: 'Enfoque Estratégico Recomendado',
      deliverablesLabel: 'Entregables Principales Incluidos',
      risksLabel: 'Riesgos si tu empresa no atiende esta área oportunamente',
      idealStageLabel: 'Momento Ideal:',
      closeModal: 'Cerrar',
      ctaDiagnosis: 'Probar Diagnóstico en esta área',
      ctaDiagnosisModal: 'Probar Diagnóstico en esta área',
      modalHint: 'Diagnóstico express interactivo disponible sin compromiso',
      items: {
        corporate: {
          title: 'Corporativo & Sociedades',
          shortDesc: 'Constitución ágil, pactos de socios, actas de asambleas y gobierno corporativo preventivo.',
          fullDesc: 'Blindaje integral de la estructura societaria para prevenir conflictos entre socios y facilitar rondas de inversión.',
          deliverables: ['Pacto de Socios (Founders Agreement)', 'Estatutos Sociales a Medida', 'Libros Corporativos y Actas de Asamblea', 'Estructuración de Órganos de Gobierno'],
          risks: ['Bloqueo de decisiones por empates 50/50', 'Fuga de socios con la propiedad del código o marca', 'Riesgo fiscal por actas desactualizadas'],
          stage: 'Fase de ideación, constitución o antes de admitir nuevos inversores.'
        },
        ip: {
          title: 'Propiedad Intelectual & Marcas',
          shortDesc: 'Registro marcario internacional, patentes, derechos de autor y protección de software y código fuente.',
          fullDesc: 'Protegemos los activos intangibles más valiosos de tu negocio para que nadie copie tu producto o use tu marca sin autorización.',
          deliverables: ['Estudio de Viabilidad y Registro de Marcas', 'Cesión de Derechos de Autor sobre Software y Contenido', 'Acuerdos de Confidencialidad (NDA)', 'Auditoría de Activos Intangibles'],
          risks: ['Pérdida de la marca a manos de un tercero oportunista', 'Reclamaciones por uso no autorizado de software desarrollado por terceros', 'Devaluación de la empresa en auditorías de compra'],
          stage: 'Desde el lanzamiento comercial o antes de divulgar prototipos.'
        },
        regulatory: {
          title: 'Regulatorio & Compliance',
          shortDesc: 'Cumplimiento normativo, adecuación al RGPD/GDPR, licencias sectoriales y prevención de sanciones.',
          fullDesc: 'Garantizamos que tu operación cumpla con todas las normativas legales locales y comunitarias, evitando sanciones millonarias.',
          deliverables: ['Auditoría de Cumplimiento RGPD y Políticas de Privacidad', 'Términos y Condiciones para Plataformas Digitales', 'Protocolos Anti-Blanqueo y Buenas Prácticas', 'Gestión de Licencias y Permisos Operativos'],
          risks: ['Multas severas por infracciones a la privacidad de datos', 'Cierre preventivo o bloqueo de pasarelas de pago', 'Daño reputacional por denuncias de consumidores'],
          stage: 'Obligatorio antes del inicio de operaciones comerciales.'
        },
        labor: {
          title: 'Laboral & Contratación',
          shortDesc: 'Contratos de trabajo y prestación de servicios, planes de stock options (phantom shares) y compliance laboral.',
          fullDesc: 'Estructuración transparente de las relaciones laborales para retener talento y prevenir demandas laborales costosas.',
          deliverables: ['Contratos de Trabajo Especiales y Acuerdos de Teletrabajo', 'Contratos de Prestación de Servicios (Freelance / Contractor)', 'Planes de Incentivos y Phantom Shares', 'Reglamentos Internos y Políticas de Conducta'],
          risks: ['Demandas por reclasificación de falsos autónomos', 'Fuga de talento clave sin cláusulas de no competencia', 'Sanciones de la inspección de trabajo'],
          stage: 'Al momento de contratar los primeros empleados o colaboradores clave.'
        },
        mediation: {
          title: 'Mediación & Negociación Comercial',
          shortDesc: 'Resolución alternativa de disputas, renegociación de contratos y mediación extrajudicial ágil.',
          fullDesc: 'Solucionamos controversias comerciales de manera confidencial, rápida y sin acudir a lentos tribunales.',
          deliverables: ['Acuerdos Transaccionales y Finiquitos', 'Renegociación de Contratos con Proveedores y Clientes', 'Sesiones de Mediación y Resolución Extrajudicial', 'Estrategias de Salida y Liquidación de Conflictos'],
          risks: ['Juicios que tardan años y consumen miles de euros en costes', 'Ruptura irreversible de relaciones comerciales estratégicas', 'Congelación de activos bancarios por litigios activos'],
          stage: 'Ante cualquier divergencia o desacuerdo comercial antes de interponer demanda.'
        },
        contracts: {
          title: 'Contratos Mercantiles & SaaS',
          shortDesc: 'Redacción y revisión de contratos de licencia, acuerdos de distribución, SLA y alianzas estratégicas.',
          fullDesc: 'Diseño de contratos robustos adaptados a modelos de negocio digitales y físicos, con límites claros de responsabilidad.',
          deliverables: ['Contratos SaaS y Acuerdos de Nivel de Servicio (SLA)', 'Contratos de Distribución y Agencia Comercial', 'Alianzas Estratégicas y Joint Ventures', 'Revisión y Negociación de Contratos de Proveedores'],
          risks: ['Responsabilidad ilimitada por fallos del servicio o producto', 'Cláusulas de exclusividad abusivas', 'Imposibilidad de rescindir acuerdos perjudiciales'],
          stage: 'En cada nueva venta B2B, integración con terceros o alianza comercial.'
        }
      }
    },
    how: {
      kicker: "Metodología Cokito's Lab",
      title: 'Soluciones legales alternativas: un flujo moderno y sin fricciones',
      subtitle: 'Eliminamos la burocracia y los plazos indeterminados de la asesoría tradicional. Conectamos cada solicitud con triaje inteligente y un CRM operativo.',
      stepPrefix: 'Paso',
      deliverablesPrefix: 'Lo que obtienes:',
      step1Title: 'Captación & Triaje Inteligente',
      step1Subtitle: 'Diagnóstico express y semáforo automático de riesgos',
      step1Desc: 'El cliente potencial completa una evaluación ágil de 4 minutos. El algoritmo perfila su situación, detecta contingencias críticas en 6 áreas del negocio y sincroniza la solicitud en el CRM interno.',
      step1Deliv1: 'Formulario interactivo guiado adaptado al mercado europeo y global',
      step1Deliv2: 'Cálculo instantáneo de riesgo (0 a 100) con semáforo de prioridades',
      step1Deliv3: 'Registro automático del contacto y aviso al equipo asignado',
      step1Time: 'Inmediato (Tiempo Real)',
      step2Title: 'Estructuración & Propuesta a Medida',
      step2Subtitle: 'Repositorio seguro de recaudos y presupuesto cerrado',
      step2Desc: 'Se habilita un canal seguro para cargar documentos y validar estatutos o contratos sin pérdidas de información. Se genera una propuesta transparente con honorarios claros y sin sorpresas.',
      step2Deliv1: 'Revisión documental ágil de pactos, marcas o relaciones laborales',
      step2Deliv2: 'Presupuesto cerrado por fases y cotizaciones transparentes',
      step2Deliv3: 'Asignación del abogado líder y apertura de expediente en el CRM',
      step2Time: '24 a 48 horas hábiles',
      step3Title: 'Ejecución & Seguimiento en Vivo',
      step3Subtitle: 'Tablero de hitos, entregables y trazabilidad total',
      step3Desc: 'El trámite se ejecuta con absoluta claridad: el cliente visualiza el avance de cada hito y los abogados controlan tareas, revisiones y firmas en el panel de expedientes.',
      step3Deliv1: 'Tablero kanban operativo con estatus actualizado en directo',
      step3Deliv2: 'Entrega y custodia digital de escrituras, contratos y registros',
      step3Deliv3: 'Acompañamiento preventivo continuo y alertas tempranas',
      step3Time: 'Trazabilidad continua',
    },
    team: {
      kicker: 'Socios & Especialistas Legales',
      title: 'Abogados especializados, obsesionados con tu crecimiento',
      subtitle: 'Combinamos rigor jurídico, agilidad en trámites y visión comercial. Entendemos la presión del flujo de caja, la necesidad de cerrar contratos rápidos y el valor de no perder tiempo en burocracia estéril.',
      founderBadge: 'Fundador & Director General',
      founderQuote: 'Impulsamos JurisNova International bajo la visión de Cokito\'s Lab: la ley debe ser una catapulta de crecimiento y no un laberinto burocrático para los emprendedores. Nuestro compromiso es blindar tu negocio en Europa y a nivel transfronterizo.',
      founderCta: 'Solicitar consulta directa',
      founderProfileBtn: 'Ver perfil profesional',
      specialistsBadge: 'Red de Abogados y Asesores Sectoriales',
      specialistsDesc: 'Especialistas por área de práctica: societario, propiedad intelectual, tributario y litigios mercantiles.',
    },
    contact: {
      kicker: 'Contacto Directo',
      title: 'Hablemos de tu empresa y tus objetivos legales',
      subtitle: 'Envíanos tu consulta. Cada mensaje se registra de inmediato en nuestro CRM interno y un abogado especialista te contactará en menos de 24 horas hábiles.',
      nameLabel: 'Nombre completo',
      emailLabel: 'Correo electrónico corporativo',
      companyLabel: 'Empresa u Organización',
      messageLabel: 'Describe brevemente tu situación o requerimiento legal',
      submitBtn: 'Enviar Consulta al Despacho',
      sendingBtn: 'Registrando consulta...',
      successTitle: '¡Consulta Recibida con Éxito!',
      successDesc: 'Tu solicitud ha quedado sincronizada en nuestro CRM interno. Un abogado asignado revisará tu caso de inmediato.',
      successCrmBadge: 'Sincronizado en CRM en Tiempo Real',
      channelsTitle: 'Canales de Atención Directa',
      whatsappBtn: 'WhatsApp Asistente Legal',
      emailBtn: 'Escribir por Correo',
      hoursTitle: 'Horario de Atención',
      hoursDesc: 'Lunes a Viernes: 08:30 - 18:30 CET. Guardia para urgencias corporativas 24/7.',
      locationsTitle: 'Presencia Internacional',
      locationsDesc: 'Sede central en USA · Representantes en Madrid, Valencia, París, Berlín y Faro (Portugal).',
      newsletterTitle: 'Boletín Legal Estratégico',
      newsletterSubtitle: 'Recibe análisis mensuales sobre cambios regulatorios, rondas de inversión y protección de empresas.',
      newsletterBtn: 'Suscribirme',
      newsletterSuccess: '¡Te has suscrito correctamente al boletín legal!',
    },
    agency: {
      kicker: "Cokito's Lab International",
      title: 'Somos un Laboratorio de Soluciones e Ideas',
      subtitle: "Tú nos traes tu idea de negocio y en Cokito's Lab la transformamos en software, plataformas web de alta conversión y sistemas de gestión a medida.",
      storyTitle: 'De una conversación legal a una plataforma automatizada',
      storyDesc: 'Esta página es un caso de estudio real: un despacho necesitaba eliminar la burocracia, evaluar clientes digitalmente y administrar trámites en un CRM privado. Diseñamos este prototipo interactivo para demostrar lo que podemos construir para ti.',
      formulaTitle: 'La Fórmula de Reacción de Cokito',
      formulaDesc: "Inspirada en la precisión analítica de la química: convertimos problemas en software pulcro y escalable.",
      step1Label: '1. Reactivo: Tu Idea en Bruto',
      step1Tag: 'El Problema',
      step1Title: 'Tú nos traes tu necesidad o idea de negocio',
      step1Desc: 'Un fundador o director llega con un cuello de botella: tareas manuales, clientes desatendidos o falta de herramientas tecnológicas.',
      step1Badge: 'Materia Prima',
      step2Label: "2. Reacción: El Laboratorio de Cokito",
      step2Tag: 'La Alquimia Digital',
      step2Title: 'Sintetizamos tu visión en arquitectura de software',
      step2Desc: 'Ideado y dirigido por Ana Teresa Sandoval («Cokito»), estructuramos la experiencia, los algoritmos de triaje y la base de datos reactiva.',
      step2Badge: 'Catalizador Activo',
      step3Label: '3. Compuesto Puro: El Software en Vivo',
      step3Tag: 'El Resultado',
      step3Title: 'Nace tu plataforma web + tu CRM administrativo',
      step3Desc: 'El resultado es exactamente lo que ves: un portal multilingüe conectado a un CRM interno en tiempo real para operar globalmente.',
      step3Badge: '99.8% Pureza Operativa',
      networkTitle: 'Presencia Internacional y Red de Representantes',
      networkDesc: 'Contamos con una red de aliados estratégicos y agencias locales para acompañar tu expansión en Europa y América.',
      hubsTitle: 'Nodos Activos de Cokito\'s Lab',
      ctaButton: "Conversar con Cokito's Lab sobre tu idea",
      ctaSubtitle: 'Desarrollamos soluciones web, móviles y empresariales para Europa, EE. UU. y Latinoamérica.',
    },
    crmBanner: {
      badge: "Cokito's Lab CRM Engine",
      title: 'Panel Administrativo en Tiempo Real',
      desc: "Este es el CRM interno diseñado por Cokito's Lab donde tu equipo recibe solicitudes, programa reuniones, asigna abogados y gestiona expedientes.",
      ctaBack: 'Volver a la Web Pública',
    },
    drawers: {
      diagnosticBadge: 'Herramienta Preventiva',
      diagnosticTitle: '¿Quieres evaluar la salud legal de tu empresa?',
      diagnosticSubtitle: 'Diagnóstico express con informe preliminar en 4 minutos. Haz clic para desplegar.',
      diagnosticCtaOpen: 'Abrir Diagnóstico',
      diagnosticCtaClose: 'Cerrar Gabeta',
      blogBadge: 'Centro de Conocimiento',
      blogTitle: 'Blog & Guías Prácticas para PYMES',
      blogSubtitle: 'Pactos de socios, protección de activos y cumplimiento en Europa. Haz clic para leer.',
      blogCtaOpen: 'Explorar Artículos',
      blogCtaClose: 'Cerrar Gabeta',
    },
    footer: {
      tagline: "Cokito's Lab International · Laboratorio global de soluciones digitales, software y plataformas para empresas.",
      rights: 'Todos los derechos reservados.',
      network: 'Sede en USA · Representantes en Francia, Alemania, Faro (Portugal), Madrid y Valencia (España).',
      europeOffices: 'Representación en París, Berlín, Faro, Madrid & Valencia',
      poweredBy: "Desarrollado y operado por Cokito's Lab International",
      allRightsReserved: 'Todos los derechos reservados.',
    },
  },
  fr: {
    nav: {
      whyUs: 'Pourquoi',
      services: 'Ce que nous faisons',
      howItWorks: 'Comment',
      team: 'Équipe',
      contact: 'Contact',
      crm: 'Panneau CRM',
      crmActive: 'CRM Actif',
      backToWeb: 'Voir le Site Web',
      login: 'Connexion',
      register: "S'inscrire",
      demoBadge: "Cokito's Lab · Démo Interactive",
      diagnostic: 'Diagnostic',
      blog: 'Blog & Ressources',
    },
    hero: {
      kicker: "Cokito's Lab International · Solution pour Cabinets",
      titleLine1: 'Nous propulsons et',
      titleLine2: 'protégeons votre entreprise',
      titleLine3: 'avec technologie et droit stratégique.',
      subtitle: "Démonstration interactive développée par Cokito's Lab pour les cabinets et entreprises. Voici à quoi ressemble une solution moderne qui convertit les prospects et les gère dans son CRM interne.",
      btnDiagnosis: 'Tester le Diagnostic Interactif',
      btnServices: 'Découvrir Nos Services',
      trustPoint1: "Structuration d'entreprise et contrats",
      trustPoint2: 'Connecté à un CRM en temps réel',
      trustPoint3: "Support multilingue pour l'Europe et l'Amérique",
      cardBadge: 'Étude de Cas Réelle',
      cardTitle: 'Architecture Juridique + CRM',
      cardDesc: "Un avocat nous a confié son idée et Cokito's Lab l'a transformée en cette plateforme de gestion client.",
      cardItem1: 'Acquisition digitale et triage des consultations',
      cardItem2: 'Tableau kanban et dossiers clients en direct',
      cardItem3: 'Réseau de conseillers en Europe et aux Amériques',
    },
    why: {
      kicker: 'Pourquoi Moderniser Votre Cabinet Juridique',
      title: 'Le modèle traditionnel du conseil juridique est dépassé. Voici comment le réinventer.',
      subtitle: "Courriels perdus, semaines pour réviser un contrat et clients désorientés. Cokito's Lab développe des technologies permettant aux cabinets d'opérer comme des plateformes modernes, préventives et réactives.",
      quoteBadge: 'Impact Prouvé de la Modernisation',
      quote: "La digitalisation n'enlève pas la dimension humaine : elle élimine la bureaucratie lente pour que l'avocat se concentre sur la stratégie à forte valeur ajoutée.",
      quoteAuthor: 'Daniel Eduardo Pérez',
      quoteRole: 'Directeur Général · JurisNova',
      p1Num: '01',
      p1Title: 'Parce que les lenteurs et le manque de clarté coûtent des clients',
      p1Desc: "80 % des clients quittent un cabinet en raison du manque de visibilité. Un portail moderne avec diagnostic express et suivi d'étapes en temps réel fidélise immédiatement.",
      p2Num: '02',
      p2Title: 'Parce que le logiciel transforme votre expertise en actif scalable',
      p2Desc: "Sans outils technologiques, un avocat ne facture que des heures passées. Avec un CRM dédié, votre cabinet devient une entreprise scalable opérant dans toute l'Europe.",
      p3Num: '03',
      p3Title: 'Parce que la prévention évite les contentieux coûteux',
      p3Desc: "Le droit moderne anticipe les conflits. Le triage intelligent classe les risques sur les pactes d'associés et la conformité avant qu'ils ne se transforment en litiges.",
    },
    services: {
      kicker: "Modules Recommandés par Cokito's Lab",
      title: 'Accompagnement juridique stratégique et modulaire',
      subtitle: "Voici les domaines prioritaires recommandés pour structurer votre cabinet en ligne : modules à forte demande pour sécuriser vos associés, actifs et contrats.",
      moduleLabel: 'Module',
      approachLabel: 'Approche Stratégique Recommandée',
      deliverablesLabel: 'Livrables Principaux Inclus',
      risksLabel: 'Risques en cas de négligence de ce domaine',
      idealStageLabel: 'Moment Idéal :',
      closeModal: 'Fermer',
      ctaDiagnosis: 'Tester le Diagnostic dans ce domaine',
      ctaDiagnosisModal: 'Tester le Diagnostic dans ce domaine',
      modalHint: 'Diagnostic express interactif disponible sans engagement',
      items: {
        corporate: {
          title: 'Droit des Sociétés & Gouvernance',
          shortDesc: "Constitution rapide, pactes d'actionnaires, assemblées et gouvernance préventive.",
          fullDesc: "Protection intégrale des statuts pour éviter les blocages entre associés et faciliter les levées de fonds.",
          deliverables: ["Pacte d'actionnaires sur mesure", 'Statuts constitutifs révisés', 'Tenue de registres et assemblées', 'Gouvernance et pouvoirs'],
          risks: ['Blocage décisionnel à 50/50', 'Départ imprévu de cofondateurs', 'Irrégularités statutaires'],
          stage: 'Création ou avant accueil de nouveaux investisseurs.'
        },
        ip: {
          title: 'Propriété Intellectuelle & Marques',
          shortDesc: 'Dépôt de marques européennes, brevets, droits d’auteur et protection logicielle.',
          fullDesc: 'Protégez vos actifs immatériels essentiels pour empêcher la contrefaçon et valoriser votre entreprise.',
          deliverables: ['Recherche d’antériorité et dépôt de marques', 'Cession de droits d’auteur sur code et designs', 'Accords de confidentialité (NDA)', 'Audit de portefeuille immatériel'],
          risks: ['Perte de droits exclusifs sur la marque', 'Plagiat de code source sans recours', 'Décote lors d’audits d’acquisition'],
          stage: 'Dès le lancement ou avant révélation de prototypes.'
        },
        regulatory: {
          title: 'Réglementaire & Conformité RGPD',
          shortDesc: 'Mise en conformité RGPD, licences d’activité, conditions générales et prévention d’amendes.',
          fullDesc: 'Assurez la totale conformité de vos opérations avec les règles européennes et sectorielles.',
          deliverables: ['Audit RGPD et politique de confidentialité', 'Conditions Générales d’Utilisation (CGU/CGV)', 'Protocoles antiblanchiment (LCB-FT)', 'Licences d’exploitation'],
          risks: ['Lourdes amendes de la CNIL/régulateurs', 'Interruption de services de paiement', 'Atteinte majeure à la réputation'],
          stage: 'Obligatoire dès la mise en ligne des services.'
        },
        labor: {
          title: 'Droit du Travail & Ressources',
          shortDesc: 'Contrats de travail, statuts de prestataires, plans d’intéressement (BSA/BSPCE).',
          fullDesc: 'Relations de travail transparentes et sécurisées pour attirer les meilleurs profils sans risques contentieux.',
          deliverables: ['Contrats de travail et télétravail', 'Contrats de prestations de services', 'Mise en place de stock-options / BSPCE', 'Règlement intérieur'],
          risks: ['Requalification de prestataires indépendants', 'Fuite de talents sans clause de non-concurrence', 'Contrôles de l’inspection du travail'],
          stage: 'Dès les premiers recrutements ou prestataires clés.'
        },
        mediation: {
          title: 'Médiation & Négociation Commerciale',
          shortDesc: 'Résolution amiable de litiges, renégociation de contrats et médiation confidentielle.',
          fullDesc: 'Dénouez les contentieux commerciaux rapidement et discrètement sans subir les lenteurs judiciaires.',
          deliverables: ['Protocoles d’accord transactionnel', 'Renégociation contractuelle avec fournisseurs', 'Sessions de médiation extrajudiciaire', 'Stratégies de sortie de crise'],
          risks: ['Procès durant plusieurs années et frais exorbitants', 'Rupture définitive de partenariats stratégiques', 'Gel d’avoirs bancaires'],
          stage: 'Dès l’apparition d’une discorde commerciale.'
        },
        contracts: {
          title: 'Contrats Commerciaux & SaaS',
          shortDesc: 'Accords SaaS, licences de logiciel, accords de niveau de service (SLA) et partenariats.',
          fullDesc: 'Des accords contractuels équilibrés protégeant votre responsabilité et assurant des revenus stables.',
          deliverables: ['Contrats de licence SaaS et SLA', 'Contrats de distribution et d’agence', 'Accords de partenariat stratégique', 'Revue de contrats fournisseurs'],
          risks: ['Responsabilité financière illimitée', 'Engagements excessifs sans clauses d’échappatoire', 'Impossibilité de résilier'],
          stage: 'À chaque vente B2B ou intégration avec un tiers.'
        }
      }
    },
    how: {
      kicker: "Méthodologie Cokito's Lab",
      title: 'Solutions juridiques alternatives : un flux moderne et sans friction',
      subtitle: 'Nous supprimons la bureaucratie de l’accompagnement juridique traditionnel grâce au triage en ligne et au CRM connecté.',
      stepPrefix: 'Étape',
      deliverablesPrefix: 'Ce que vous obtenez :',
      step1Title: 'Acquisition & Triage Intelligent',
      step1Subtitle: 'Évaluation express et scoring de risques automatisé',
      step1Desc: 'Le client effectue un bilan en 4 minutes. Notre algorithme identifie les risques clés et synchronise le dossier dans le CRM.',
      step1Deliv1: 'Formulaire guidé adapté au marché européen',
      step1Deliv2: 'Score de risque instantané (0 à 100) avec priorités',
      step1Deliv3: 'Notification instantanée de l’équipe juridique',
      step1Time: 'Immédiat (Temps réel)',
      step2Title: 'Structuration & Proposition Dédiée',
      step2Subtitle: 'Coffre-fort documentaire et budget forfaitaire clair',
      step2Desc: 'Transmission sécurisée de documents sans pertes. Émission d’une proposition transparente sans frais cachés.',
      step2Deliv1: 'Revue documentaire rapide des statuts et marques',
      step2Deliv2: 'Budget clair et sans surprise par étapes',
      step2Deliv3: 'Attribution d’un avocat référent dans le CRM',
      step2Time: '24 à 48 heures ouvrées',
      step3Title: 'Exécution & Suivi en Direct',
      step3Subtitle: 'Tableau des jalons et traçabilité continue',
      step3Desc: 'Le client suit chaque étape de son dossier pendant que l’avocat gère signatures et validations dans le CRM.',
      step3Deliv1: 'Tableau kanban avec statut mis à jour en direct',
      step3Deliv2: 'Coffre-fort numérique des actes et contrats signés',
      step3Deliv3: 'Veille préventive et alertes d’échéances',
      step3Time: 'Traçabilité continue',
    },
    team: {
      kicker: 'Avocats & Conseillers Juridiques',
      title: 'Des juristes spécialisés, focalisés sur votre croissance',
      subtitle: "Rigueur légale, réactivité opérationnelle et esprit d'entreprise. Nous savons qu'un contrat doit se conclure rapidement sans blocages inutiles.",
      founderBadge: 'Fondateur & Directeur Général',
      founderQuote: "Chez JurisNova et Cokito's Lab, nous croyons que le droit doit être un levier d'accélération et non un labyrinthe administratif.",
      founderCta: 'Demander un entretien direct',
      founderProfileBtn: 'Voir le profil complet',
      specialistsBadge: 'Réseau d’Avocats Spécialisés',
      specialistsDesc: 'Experts dédiés en droit des affaires, propriété intellectuelle, fiscalité et contentieux commercial.',
    },
    contact: {
      kicker: 'Contact Direct',
      title: 'Échangeons sur vos enjeux d’entreprise et vos besoins légaux',
      subtitle: 'Envoyez-nous votre demande. Chaque message est intégré à notre CRM et un juriste vous répond sous 24h ouvrées.',
      nameLabel: 'Nom et prénom',
      emailLabel: 'Adresse email professionnelle',
      companyLabel: 'Entreprise ou Organisation',
      messageLabel: 'Décrivez brièvement votre situation ou votre besoin',
      submitBtn: 'Envoyer ma demande',
      sendingBtn: 'Transmission en cours...',
      successTitle: 'Demande Reçue avec Succès !',
      successDesc: 'Votre demande est enregistrée dans notre CRM en temps réel. Un avocat prendra contact avec vous sans délai.',
      successCrmBadge: 'Synchronisé avec le CRM en direct',
      channelsTitle: 'Canaux d’Assistance Directs',
      whatsappBtn: 'WhatsApp Assistant Juridique',
      emailBtn: 'Nous écrire par Email',
      hoursTitle: 'Horaires d’Ouverture',
      hoursDesc: 'Du lundi au vendredi : 08h30 - 18h30 CET. Permanence urgences 24/7.',
      locationsTitle: 'Présence Internationale',
      locationsDesc: 'Siège aux USA · Représentants à Paris, Berlin, Faro (Portugal), Madrid et Valence (Espagne).',
      newsletterTitle: 'Veille Juridique Stratégique',
      newsletterSubtitle: 'Recevez notre analyse mensuelle sur les évolutions réglementaires et le droit des affaires.',
      newsletterBtn: "M'abonner",
      newsletterSuccess: 'Vous êtes inscrit avec succès à notre veille juridique !',
    },
    agency: {
      kicker: "Cokito's Lab International",
      title: "Un Laboratoire d'Idées et de Solutions Digitales",
      subtitle: "Vous apportez votre vision et Cokito's Lab la matérialise en logiciels sur mesure, portails web et CRM complets.",
      storyTitle: "De l'idée d'un juriste à une plateforme automatisée",
      storyDesc: "Ce site web illustre notre savoir-faire : transformer une idée métier en un produit digital prêt pour le marché européen et international.",
      formulaTitle: 'La Formule Chimique de Cokito',
      formulaDesc: "Inspirée de la précision analytique du laboratoire : nous transformons les frictions en logiciels robustes.",
      step1Label: '1. Réactif : Votre Idée Brute',
      step1Tag: 'Le Défi',
      step1Title: 'Vous nous confiez votre besoin métier',
      step1Desc: "Un fondateur nous partage ses freins opérationnels : tâches répétitives, demandes dispersées et manque d'outils modernes.",
      step1Badge: 'Matière Première',
      step2Label: "2. Réaction : Le Laboratoire de Cokito",
      step2Tag: 'Alchimie Technologique',
      step2Title: "Nous transformons votre vision en architecture logicielle",
      step2Desc: "Dirigé par Ana Teresa Sandoval (« Cokito »), notre lab conçoit l'expérience utilisateur, les règles de calcul et le backend réactif.",
      step2Badge: 'Catalyseur Actif',
      step3Label: '3. Composé Pur : Le Logiciel en Ligne',
      step3Tag: 'Le Résultat',
      step3Title: 'Votre portail web et votre CRM entrent en service',
      step3Desc: "Le résultat est ce que vous utilisez ici : un portail public connecté à un CRM interne pour piloter votre activité en direct.",
      step3Badge: 'Pureté Opérationnelle 99.8%',
      networkTitle: 'Présence Internationale & Réseau de Représentants',
      networkDesc: 'Des partenaires locaux et agences alliées pour accompagner votre déploiement en Europe et en Amérique.',
      hubsTitle: 'Bureaux & Pôles Cokito\'s Lab',
      ctaButton: "Échanger avec Cokito's Lab sur votre projet",
      ctaSubtitle: 'Solutions technologiques pour entreprises en Europe, aux États-Unis et à l’international.',
    },
    crmBanner: {
      badge: "Moteur CRM Cokito's Lab",
      title: 'Espace Collaboratif en Temps Réel',
      desc: "Ce CRM exclusif permet à vos équipes de traiter les demandes, suivre les dossiers et gérer vos prospects sans friction.",
      ctaBack: 'Retour au Site Public',
    },
    drawers: {
      diagnosticBadge: 'Outil Préventif',
      diagnosticTitle: 'Évaluez la santé juridique de votre entreprise',
      diagnosticSubtitle: 'Diagnostic express avec rapport préliminaire en 4 minutes. Cliquez pour déplier.',
      diagnosticCtaOpen: 'Ouvrir le Diagnostic',
      diagnosticCtaClose: 'Fermer le Tiroir',
      blogBadge: 'Ressources',
      blogTitle: 'Guides Juridiques & Articles PME',
      blogSubtitle: 'Pactes d’actionnaires, conformité et propriété intellectuelle.',
      blogCtaOpen: 'Lire les Articles',
      blogCtaClose: 'Fermer le Tiroir',
    },
    footer: {
      tagline: "Cokito's Lab International · Laboratoire de création logicielle et plateformes métiers.",
      rights: 'Tous droits réservés.',
      network: 'Siège aux USA · Représentants à Paris, Berlin, Faro (Portugal), Madrid et Valence (Espagne).',
      europeOffices: 'Représentation à Paris, Berlin, Faro, Madrid & Valence',
      poweredBy: "Propulsé par Cokito's Lab International",
      allRightsReserved: 'Tous droits réservés.',
    },
  },
  en: {
    nav: {
      whyUs: 'Why Us',
      services: 'What We Do',
      howItWorks: 'How It Works',
      team: 'Team',
      contact: 'Contact',
      crm: 'CRM Panel',
      crmActive: 'CRM Active',
      backToWeb: 'View Website',
      login: 'Sign In',
      register: 'Register',
      demoBadge: "Cokito's Lab · Live Demo Showcase",
      diagnostic: 'Assessment',
      blog: 'Blog & Insights',
    },
    hero: {
      kicker: "Cokito's Lab International · Firm Technology Showcase",
      titleLine1: 'We empower and',
      titleLine2: 'protect your enterprise',
      titleLine3: 'with strategic law and technology.',
      subtitle: "Interactive live demo developed by Cokito's Lab for firms and businesses. This is how a high-converting digital portal paired with a real-time back-office CRM operates seamlessly.",
      btnDiagnosis: 'Try Interactive Assessment',
      btnServices: 'Explore Capabilities',
      trustPoint1: 'Corporate structuring & international governance',
      trustPoint2: 'Built-in real-time pipeline CRM back office',
      trustPoint3: 'Pan-European and cross-border capabilities',
      cardBadge: 'Real Client Case Study',
      cardTitle: 'Legal Portal + CRM Engine',
      cardDesc: "An attorney brought us an initial vision, and Cokito's Lab transformed it into this automated client acquisition & case management system.",
      cardItem1: 'Digital onboarding and automated risk screening',
      cardItem2: 'Live case kanban and document portal',
      cardItem3: 'International representative network in Europe & USA',
    },
    why: {
      kicker: 'Why Modernize Your Legal Practice',
      title: 'The traditional legal advisory model is broken. Here is how to fix it.',
      subtitle: "Unanswered emails, weeks to review simple contracts, and clients left in the dark. At Cokito's Lab, we engineer technology so your firm functions as a modern digital platform: fast, preventive, and connected in real time.",
      quoteBadge: 'Proven Impact of Digitalization',
      quote: 'Technology does not dehumanize legal work: it eliminates slow bureaucratic friction so lawyers can focus on high-value strategy and clients get answers in hours.',
      quoteAuthor: 'Daniel Eduardo Pérez',
      quoteRole: 'Managing Director · JurisNova',
      p1Num: '01',
      p1Title: 'Because slowness and opacity lose valuable clients',
      p1Desc: '80% of clients who abandon a legal practice do so because of lack of visibility and weeks of silence. A modern portal with express triage and live milestone tracking builds immediate trust.',
      p2Num: '02',
      p2Title: 'Because software turns expertise into a scalable asset',
      p2Desc: 'Without tech tools, lawyers only bill for hours sold. Automated intake combined with an operative CRM turns your firm into an organized, scalable cross-border operation.',
      p3Num: '03',
      p3Title: 'Because early prevention prevents expensive litigation',
      p3Desc: 'Modern law does not wait for disaster to strike. Smart triage detects risks in shareholder pacts, IP, and regulatory compliance before they turn into lawsuits.',
    },
    services: {
      kicker: "Modular Capabilities Recommended by Cokito's Lab",
      title: 'Strategic, modular legal advisory',
      subtitle: 'Recommended core modules to organize your firm: high-demand services designed to let clients request corporate advisory, IP protection, and compliance with ease.',
      moduleLabel: 'Module',
      approachLabel: 'Strategic Approach',
      deliverablesLabel: 'Key Deliverables Included',
      risksLabel: 'Risks of neglecting this area',
      idealStageLabel: 'Optimal Timing:',
      closeModal: 'Close',
      ctaDiagnosis: 'Run Assessment in this Area',
      ctaDiagnosisModal: 'Run Assessment in this Area',
      modalHint: 'Interactive express diagnostic available with no obligation',
      items: {
        corporate: {
          title: 'Corporate & Governance',
          shortDesc: 'Rapid incorporation, founders agreements, board minutes, and preventive governance.',
          fullDesc: 'Comprehensive corporate structuring to prevent shareholder deadlock and prepare for investment rounds.',
          deliverables: ['Custom Founders Agreement', 'Tailored Articles of Association', 'Corporate Minute Books & Governance Records', 'Board Advisory Framework'],
          risks: ['Deadlock in 50/50 equity splits', 'Founders walking away with critical code or brand', 'Tax and statutory penalties'],
          stage: 'Founding phase or prior to onboarding new investors.'
        },
        ip: {
          title: 'Intellectual Property & Trademarks',
          shortDesc: 'International trademark registration, copyright, patent filing, and software protection.',
          fullDesc: 'We safeguard your intangible assets so no competitors can infringe your trademarks or replicate your proprietary technology.',
          deliverables: ['Trademark Clearance & Registration', 'Software IP & Copyright Assignment Agreements', 'Non-Disclosure Agreements (NDA)', 'Intangible Asset Audit'],
          risks: ['Loss of brand rights to trademark squatters', 'Copyright claims over outsourced development', 'Valuation write-downs in M&A due diligence'],
          stage: 'Prior to product launch or public pitch disclosure.'
        },
        regulatory: {
          title: 'Regulatory & GDPR Compliance',
          shortDesc: 'GDPR privacy frameworks, terms of service, sector licenses, and penalty prevention.',
          fullDesc: 'Ensuring your digital operations conform to European directives and local statutory requirements.',
          deliverables: ['GDPR Audit & Data Privacy Policies', 'Platform Terms & Conditions (TOS/EULA)', 'Anti-Money Laundering Protocols (AML)', 'Operating Licenses & Registrations'],
          risks: ['Severe GDPR regulatory fines', 'Payment gateway freezes', 'Reputational fallout from privacy complaints'],
          stage: 'Mandatory before starting public operations.'
        },
        labor: {
          title: 'Employment & Talent Structuring',
          shortDesc: 'Employment and contractor agreements, phantom shares, stock options, and labor compliance.',
          fullDesc: 'Transparent workforce structuring to attract key talent while eliminating misclassification liabilities.',
          deliverables: ['Employment Contracts & Remote Work Policies', 'Independent Contractor Agreements', 'Incentive Plans & Phantom Stock Schemes', 'Internal Workplace Policies'],
          risks: ['Misclassification lawsuits (disguised employment)', 'Key staff exits without non-compete safeguards', 'Labor inspection fines'],
          stage: 'When hiring your first employees or contractors.'
        },
        mediation: {
          title: 'Mediation & Commercial Settlement',
          shortDesc: 'Alternative dispute resolution, contract renegotiation, and out-of-court settlements.',
          fullDesc: 'Resolving business conflicts confidentially and swiftly without years of expensive courtroom proceedings.',
          deliverables: ['Binding Settlement Agreements', 'Supplier & Client Contract Renegotiation', 'Private Mediation Sessions', 'Exit & Conflict Resolution Strategy'],
          risks: ['Lawsuits that drag on for years and consume capital', 'Destruction of strategic vendor partnerships', 'Bank account freezing orders'],
          stage: 'At the first sign of commercial divergence.'
        },
        contracts: {
          title: 'Commercial Contracts & SaaS',
          shortDesc: 'SaaS agreements, software licensing, SLAs, distribution, and strategic alliances.',
          fullDesc: 'Rock-solid commercial contracts with balanced liability clauses that protect revenues and operational continuity.',
          deliverables: ['SaaS Terms & Service Level Agreements (SLA)', 'Commercial Distribution & Agency Agreements', 'Strategic Partnerships & Joint Ventures', 'Vendor Contract Review & Negotiation'],
          risks: ['Unlimited financial liability for service outages', 'Onerous lock-in terms with vendors', 'Inability to terminate bad contracts'],
          stage: 'With every B2B client acquisition or partner integration.'
        }
      }
    },
    how: {
      kicker: "Cokito's Lab Methodology",
      title: 'Alternative legal solutions: a modern, frictionless workflow',
      subtitle: 'Eliminating bureaucracy and vague timelines. Connecting digital intake with a live administrative CRM.',
      stepPrefix: 'Step',
      deliverablesPrefix: 'What you receive:',
      step1Title: 'Smart Onboarding & Triage',
      step1Subtitle: 'Express assessment and automated risk grading',
      step1Desc: 'Prospective clients complete a 4-minute digital questionnaire. The algorithm flags key vulnerabilities and creates a lead in the internal CRM.',
      step1Deliv1: 'Guided interactive intake tailored to European and US markets',
      step1Deliv2: 'Instant risk score (0 to 100) with priority alerts',
      step1Deliv3: 'Automated CRM lead dispatch and team notification',
      step1Time: 'Instant (Real Time)',
      step2Title: 'Bespoke Proposal & Structuring',
      step2Subtitle: 'Encrypted document vault and fixed-fee quotes',
      step2Desc: 'A secure channel to upload records and bylaws without information loss. Transparent pricing with clear deliverables and no surprises.',
      step2Deliv1: 'Rapid document review of bylaws, trademarks, or contracts',
      step2Deliv2: 'Capped, fixed-phase quotation',
      step2Deliv3: 'Assigned lead attorney and CRM matter setup',
      step2Time: '24 to 48 business hours',
      step3Title: 'Execution & Live Tracking',
      step3Subtitle: 'Milestone boards, deliverables, and total transparency',
      step3Desc: 'Operations execute with complete clarity: clients observe progress while attorneys manage approvals and documents directly.',
      step3Deliv1: 'Live kanban workflow board with real-time updates',
      step3Deliv2: 'Secure digital vault for signed deeds and agreements',
      step3Deliv3: 'Continuous preventive advisory and renewal alerts',
      step3Time: 'Continuous Tracking',
    },
    team: {
      kicker: 'Partners & Legal Specialists',
      title: 'Specialized attorneys obsessed with your company’s growth',
      subtitle: 'Combining legal rigor, procedural agility, and commercial insight. We know cash flow matters and deals must close without bureaucratic drag.',
      founderBadge: 'Founder & Managing Director',
      founderQuote: "We operate JurisNova International under Cokito's Lab vision: the law must act as a growth catalyst, never a bureaucratic maze for entrepreneurs.",
      founderCta: 'Request Direct Consultation',
      founderProfileBtn: 'View Full Bio',
      specialistsBadge: 'Network of Senior Legal Counsel',
      specialistsDesc: 'Dedicated counsel in corporate structuring, IP protection, tax compliance, and commercial dispute mediation.',
    },
    contact: {
      kicker: 'Direct Contact',
      title: 'Let’s talk about your company and your legal roadmap',
      subtitle: 'Send us your inquiry. Every submission instantly syncs with our internal CRM and an assigned lawyer will reach out within 24 business hours.',
      nameLabel: 'Full Name',
      emailLabel: 'Corporate Email Address',
      companyLabel: 'Company or Organization',
      messageLabel: 'Briefly describe your business situation or legal need',
      submitBtn: 'Submit Inquiry to Practice',
      sendingBtn: 'Registering inquiry...',
      successTitle: 'Inquiry Successfully Received!',
      successDesc: 'Your request is now synced with our internal CRM. A lawyer has been notified to review your matter promptly.',
      successCrmBadge: 'Synced with Real-Time CRM',
      channelsTitle: 'Direct Contact Channels',
      whatsappBtn: 'WhatsApp Legal Assistant',
      emailBtn: 'Send Corporate Email',
      hoursTitle: 'Operating Hours',
      hoursDesc: 'Monday to Friday: 08:30 - 18:30 CET. 24/7 emergency corporate response.',
      locationsTitle: 'International Footprint',
      locationsDesc: 'HQ in USA · Representatives in Paris, Berlin, Faro (Portugal), Madrid, and Valencia (Spain).',
      newsletterTitle: 'Strategic Legal Briefing',
      newsletterSubtitle: 'Receive monthly executive briefings on regulatory changes, funding rounds, and asset protection.',
      newsletterBtn: 'Subscribe',
      newsletterSuccess: 'You have successfully subscribed to our legal briefing!',
    },
    agency: {
      kicker: "Cokito's Lab International",
      title: 'The Ideas-to-Software Laboratory',
      subtitle: "Bring us your concept and Cokito's Lab will build the custom software, responsive web platform, and internal CRM you need to scale globally.",
      storyTitle: 'From an initial consult to a production-grade platform',
      storyDesc: 'This portal is a real demonstration: a corporate practice needed digital intake, instant triage, and private case tracking. We designed this solution to showcase how fast we build.',
      formulaTitle: "Cokito's Reaction Formula",
      formulaDesc: 'Inspired by analytical chemistry precision: we turn friction into pure, high-performance software.',
      step1Label: '1. Raw Material: Your Vision',
      step1Tag: 'The Challenge',
      step1Title: 'You bring us your business need or raw idea',
      step1Desc: 'A founder approaches our lab with a bottleneck: repetitive tasks, messy spreadsheets, or missing software tools.',
      step1Badge: 'Input',
      step2Label: "2. Reaction: Cokito’s Lab Engine",
      step2Tag: 'The Tech Catalyst',
      step2Title: 'We synthesize your idea into production-grade software',
      step2Desc: 'Conceived and directed by Ana Teresa Sandoval ("Cokito"), we architect high-converting UX, intake algorithms, and real-time reactive backends.',
      step2Badge: 'Active Catalyst',
      step3Label: '3. Pure Compound: Live Software',
      step3Tag: 'The Final Output',
      step3Title: 'Your live web platform + custom CRM is born',
      step3Desc: 'The outcome is what you are using right now: a public portal paired with an internal CRM to coordinate operations across borders.',
      step3Badge: '99.8% High Performance',
      networkTitle: 'International Presence & Representative Network',
      networkDesc: 'Allied agencies and local representatives across Europe and the Americas to support your digital scale.',
      hubsTitle: 'Active Cokito\'s Lab Hubs',
      ctaButton: "Talk with Cokito's Lab about your idea",
      ctaSubtitle: 'Building software solutions across Europe, North America, and Latin America.',
    },
    crmBanner: {
      badge: "Cokito's Lab CRM Engine",
      title: 'Real-Time CRM & Case Operations',
      desc: "This internal CRM engineered by Cokito's Lab allows legal teams to track incoming web leads, schedule appointments, and assign lawyers in real time.",
      ctaBack: 'Back to Public Website',
    },
    drawers: {
      diagnosticBadge: 'Risk Prevention Tool',
      diagnosticTitle: 'Assess your company’s legal resilience',
      diagnosticSubtitle: '4-minute interactive assessment with tailored recommendations. Click to expand.',
      diagnosticCtaOpen: 'Open Assessment',
      diagnosticCtaClose: 'Close Drawer',
      blogBadge: 'Knowledge Hub',
      blogTitle: 'SME Guides & Regulatory Briefs',
      blogSubtitle: 'Shareholder pacts, cross-border compliance, and startup law.',
      blogCtaOpen: 'Explore Articles',
      blogCtaClose: 'Close Drawer',
    },
    footer: {
      tagline: "Cokito's Lab International · Global laboratory for software development and enterprise platforms.",
      rights: 'All rights reserved.',
      network: 'Headquarters in USA · Representatives in France, Germany, Faro (Portugal), Madrid & Valencia (Spain).',
      europeOffices: 'Offices in Paris, Berlin, Faro, Madrid & Valencia',
      poweredBy: "Engineered by Cokito's Lab International",
      allRightsReserved: 'All rights reserved.',
    },
  },
  it: {
    nav: {
      whyUs: 'Perché noi',
      services: 'Cosa facciamo',
      howItWorks: 'Come funziona',
      team: 'Team',
      contact: 'Contatto',
      crm: 'Pannello CRM',
      crmActive: 'CRM Attivo',
      backToWeb: 'Visualizza Sito',
      login: 'Accedi',
      register: 'Registrati',
      demoBadge: "Cokito's Lab · Demo Interattiva",
      diagnostic: 'Diagnosi',
      blog: 'Blog & Risorse',
    },
    hero: {
      kicker: "Cokito's Lab International · Soluzione per Studi Legali",
      titleLine1: 'Diamo slancio e',
      titleLine2: 'proteggiamo la tua impresa',
      titleLine3: 'con tecnologia e strategia legale.',
      subtitle: "Demo sviluppata da Cokito's Lab per studi e aziende: acquisizione clienti in tempo reale e CRM gestionale integrato.",
      btnDiagnosis: 'Prova Diagnosi Preventiva',
      btnServices: 'Scopri i Servizi',
      trustPoint1: 'Costituzione societaria e patti contrattuali',
      trustPoint2: 'Connesso a un CRM operativo in tempo reale',
      trustPoint3: 'Supporto multilingue per tutta Europa',
      cardBadge: 'Caso di Studio',
      cardTitle: 'Piattaforma Legale + CRM',
      cardDesc: "Un avvocato ci ha affidato la sua idea e Cokito's Lab l'ha trasformata in questa piattaforma digitale.",
      cardItem1: 'Acquisizione digitale e triage delle richieste',
      cardItem2: 'Bacheca kanban e fascicoli cliente in linea',
      cardItem3: 'Rete di collaboratori in Europa e America',
    },
    why: {
      kicker: 'Perché Modernizzare lo Studio Legale',
      title: 'Il modello legale tradizionale è superato. Ecco come trasformarlo.',
      subtitle: "Email che si perdono, settimane per revisionare un contratto e clienti insoddisfatti. Cokito's Lab costruisce la tecnologia per far lavorare il tuo studio come una piattaforma digitale agile e preventiva.",
      quoteBadge: 'Impatto Dimostrato',
      quote: "La digitalizzazione elimina la burocrazia lenta per consentire all'avvocato di concentrarsi sulla strategia ad alto valore.",
      quoteAuthor: 'Daniel Eduardo Pérez',
      quoteRole: 'Direttore Generale · JurisNova',
      p1Num: '01',
      p1Title: 'Perché la lentezza costa clienti preziosi',
      p1Desc: "La maggior parte dei clienti cambia consulente per mancanza di trasparenza. Un portale con diagnosi rapida e aggiornamenti live fidelizza subito.",
      p2Num: '02',
      p2Title: 'Perché il software rende scalabile la tua competenza',
      p2Desc: "Senza strumenti digitali si fatturano solo ore. Con un CRM gestionale, lo studio diventa un'impresa strutturata e scalabile.",
      p3Num: '03',
      p3Title: 'Perché prevenire evita costosi contenziosi',
      p3Desc: "Il diritto moderno previene i conflitti. Il triage classifica i rischi societari e contrattuali prima che diventino cause giudiziarie.",
    },
    services: {
      kicker: "Moduli Consigliati da Cokito's Lab",
      title: 'Consulenza legale strategica e modulare',
      subtitle: 'Aree prioritarie consigliate per la tua presenza digitale: moduli ad alta richiesta per tutelare soci, contratti e proprietà intellettuale.',
      moduleLabel: 'Modulo',
      approachLabel: 'Approccio Strategico',
      deliverablesLabel: 'Risultati Inclusi',
      risksLabel: 'Rischi in caso di mancata tutela',
      idealStageLabel: 'Momento Ideale:',
      closeModal: 'Chiudi',
      ctaDiagnosis: 'Avvia Diagnosi in quest’area',
      ctaDiagnosisModal: 'Avvia Diagnosi in quest’area',
      modalHint: 'Diagnosi express interattiva disponibile senza impegno',
      items: {
        corporate: {
          title: 'Societario & Governance',
          shortDesc: 'Costituzione societaria, patti parasociali, verbali e governance aziendale preventiva.',
          fullDesc: 'Blindatura completa della struttura societaria per evitare dissidi tra soci e favorire investimenti.',
          deliverables: ['Patto Parasociale personalizzato', 'Statuti societari su misura', 'Libri sociali e delibere assembleari', 'Struttura degli organi direttivi'],
          risks: ['Stallo decisionale al 50/50', 'Abbandono di soci chiave con codice o marchi', 'Sanzioni statutarie'],
          stage: 'Fase di costituzione o prima di accogliere nuovi soci.'
        },
        ip: {
          title: 'Proprietà Intellettuale & Marchi',
          shortDesc: 'Registrazione marchi UE, brevetti, tutela del software e accordi di riservatezza.',
          fullDesc: 'Proteggiamo i tuoi asset immateriali impedendo copie non autorizzate da parte di concorrenti.',
          deliverables: ['Ricerca e deposito marchi', 'Cessione diritti d’autore su software', 'Accordi di riservatezza (NDA)', 'Audit degli asset immateriali'],
          risks: ['Perdita del marchio aziendale', 'Contenziosi sul codice proprietario', 'Deprezzamento in fase di acquisizione'],
          stage: 'Prima del lancio commerciale o presentazione pubblica.'
        },
        regulatory: {
          title: 'Regolatorio & GDPR',
          shortDesc: 'Conformità GDPR privacy, termini e condizioni, licenze di settore e prevenzione sanzioni.',
          fullDesc: 'Garantiamo che l’attività operi nel pieno rispetto delle normative comunitarie.',
          deliverables: ['Audit GDPR e policy privacy', 'Termini d’uso (ToS/EULA)', 'Protocolli antiriciclaggio', 'Licenze operative'],
          risks: ['Sanzioni severe dal Garante', 'Blocco dei pagamenti elettronici', 'Danni alla reputazione'],
          stage: 'Obbligatorio prima dell’avvio al pubblico.'
        },
        labor: {
          title: 'Lavoro & Risorse Umane',
          shortDesc: 'Contratti di lavoro, collaboratori freelance, piani di stock option (phantom shares).',
          fullDesc: 'Relazioni di lavoro chiare e conformi per trattenere i migliori talenti senza rischi.',
          deliverables: ['Contratti di lavoro e smart working', 'Contratti per consulenti e freelance', 'Piani di incentivazione e phantom stock', 'Regolamenti interni'],
          risks: ['Riqualificazione contrattuale forzata', 'Fuga di figure chiave senza patto di non concorrenza', 'Ispezioni del lavoro'],
          stage: 'Alle prime assunzioni o collaborazioni esterne.'
        },
        mediation: {
          title: 'Mediazione Commerciale',
          shortDesc: 'Risoluzione stragiudiziale rapida, rinegoziazione contratti e accordi transattivi.',
          fullDesc: 'Risolviamo dispute commerciali in modo rapido e riservato, evitando i tribunali.',
          deliverables: ['Accordi transattivi vincolanti', 'Rinegoziazione contratti fornitori', 'Sessioni di mediazione privata', 'Strategie di composizione amichevole'],
          risks: ['Cause legali pluriennali e costi insostenibili', 'Interruzione di accordi commerciali chiave', 'Blocco dei conti correnti'],
          stage: 'Al sorgere di qualsiasi contrasto commerciale.'
        },
        contracts: {
          title: 'Contrattualistica & SaaS',
          shortDesc: 'Contratti software SaaS, accordi di distribuzione, SLA e partnership commerciali.',
          fullDesc: 'Accordi commerciali solidi con limitazione della responsabilità e garanzia dei ricavi.',
          deliverables: ['Termini SaaS e accordi SLA', 'Contratti di distribuzione commerciale', 'Partnership strategiche e joint venture', 'Revisione contratti fornitori'],
          risks: ['Responsabilità illimitata per disservizi', 'Clausole vessatorie a favore di terzi', 'Impossibilità di recesso'],
          stage: 'A ogni vendita B2B o integrazione di fornitura.'
        }
      }
    },
    how: {
      kicker: "Metodologia Cokito's Lab",
      title: 'Soluzioni legali moderne: un flusso operativo senza attriti',
      subtitle: 'Eliminiamo la burocrazia tradizionale con triage digitale e CRM in tempo reale.',
      stepPrefix: 'Passo',
      deliverablesPrefix: 'Cosa ottieni:',
      step1Title: 'Triage Intelligente & Intake',
      step1Subtitle: 'Questionario express e calcolo automatico del rischio',
      step1Desc: 'Il cliente compila una valutazione di 4 minuti. L’algoritmo calcola le priorità e notifica il team nel CRM.',
      step1Deliv1: 'Form guidato per imprese europee',
      step1Deliv2: 'Indice di rischio (0-100) immediato',
      step1Deliv3: 'Creazione immediata del contatto nel CRM',
      step1Time: 'Immediato (Tempo reale)',
      step2Title: 'Proposta & Strutturazione',
      step2Subtitle: 'Invio documenti protetto e preventivo fisso',
      step2Desc: 'Canale sicuro per scambiare file senza perdite. Tariffario trasparente e chiaro.',
      step2Deliv1: 'Analisi documentale rapida di statuti e contratti',
      step2Deliv2: 'Preventivo fisso per fasi',
      step2Deliv3: 'Assegnazione avvocato referente nel CRM',
      step2Time: '24-48 ore lavorative',
      step3Title: 'Esecuzione & Monitoraggio Live',
      step3Subtitle: 'Bacheca avanzamento e tracciabilità completa',
      step3Desc: 'Massima chiarezza: il cliente segue le tappe e i legali gestiscono firme e approvazioni.',
      step3Deliv1: 'Bacheca kanban aggiornata in tempo reale',
      step3Deliv2: 'Archivio digitale sicuro degli atti',
      step3Deliv3: 'Avvisi periodici e consulenza preventiva',
      step3Time: 'Tracciabilità continua',
    },
    team: {
      kicker: 'Partner & Consulenti Legali',
      title: 'Avvocati specializzati, dedicati alla crescita della tua impresa',
      subtitle: 'Uniamo rigore giuridico, rapidità operativa e visione aziendale. Comprendiamo le esigenze del mercato moderno.',
      founderBadge: 'Fondatore & Direttore Generale',
      founderQuote: "In JurisNova e Cokito's Lab crediamo che il diritto debba essere un acceleratore e non un labirinto burocratico.",
      founderCta: 'Richiedi consulenza diretta',
      founderProfileBtn: 'Visualizza profilo completo',
      specialistsBadge: 'Network di Esperti di Settore',
      specialistsDesc: 'Professionisti dedicati a diritto societario, proprietà intellettuale, tributario e contenzioso.',
    },
    contact: {
      kicker: 'Contatto Diretto',
      title: 'Parliamo dei tuoi obiettivi aziendali e legali',
      subtitle: 'Inviaci la tua richiesta: viene registrata istantaneamente nel nostro CRM interno e un avvocato ti ricontatterà entro 24 ore lavorative.',
      nameLabel: 'Nome e cognome',
      emailLabel: 'Email aziendale',
      companyLabel: 'Azienda o Organizzazione',
      messageLabel: 'Descrivi brevemente la tua situazione o necessità',
      submitBtn: 'Invia Richiesta allo Studio',
      sendingBtn: 'Registrazione in corso...',
      successTitle: 'Richiesta Inviata con Successo!',
      successDesc: 'La tua richiesta è sincronizzata nel nostro CRM in tempo reale. Un avvocato la prenderà in carico subito.',
      successCrmBadge: 'Sincronizzato nel CRM in tempo reale',
      channelsTitle: 'Canali di Assistenza',
      whatsappBtn: 'WhatsApp Assistente Legale',
      emailBtn: 'Scrivi via Email',
      hoursTitle: 'Orari di Apertura',
      hoursDesc: 'Lunedì - Venerdì: 08:30 - 18:30 CET. Reperibilità urgenze 24/7.',
      locationsTitle: 'Presenza Internazionale',
      locationsDesc: 'Sede centrale USA · Rappresentanti a Parigi, Berlino, Faro (Portogallo), Madrid e Valencia (Spagna).',
      newsletterTitle: 'Aggiornamento Legale Strategico',
      newsletterSubtitle: 'Ricevi la nostra panoramica mensile su regolamentazione, investimenti e tutela d’impresa.',
      newsletterBtn: 'Iscriviti',
      newsletterSuccess: 'Iscrizione completata con successo!',
    },
    agency: {
      kicker: "Cokito's Lab International",
      title: 'Laboratorio di Soluzioni Digitali e Software',
      subtitle: "Portaci la tua idea e Cokito's Lab la trasformerà in piattaforme web, app e software aziendali all'avanguardia.",
      storyTitle: 'Da una visione a una piattaforma funzionante',
      storyDesc: 'Questo portale dimostra la capacità di Cokito’s Lab di creare soluzioni su misura per professionisti e imprese internazionali.',
      formulaTitle: 'La Formula di Cokito',
      formulaDesc: 'Ispirata alla precisione del laboratorio: trasformiamo le complessità operative in software snello.',
      step1Label: '1. Reattivo: La Tua Idea Grezza',
      step1Tag: 'La Sfida',
      step1Title: 'Ci presenti la tua necessità o intuizione',
      step1Desc: 'Un imprenditore ci illustra i problemi quotidiani: processi manuali, messaggi sparsi e assenza di strumenti ad hoc.',
      step1Badge: 'Input',
      step2Label: "2. Reazione: Il Motore Cokito's Lab",
      step2Tag: 'Catalizzatore Digitale',
      step2Title: 'Delineiamo l’architettura software perfetta',
      step2Desc: 'Guidato da Ana Teresa Sandoval («Cokito»), il nostro lab modella esperienza utente, logiche di calcolo e backend in tempo reale.',
      step2Badge: 'Catalizzatore Attivo',
      step3Label: '3. Composto Puro: Il Software Operativo',
      step3Tag: 'Il Risultato',
      step3Title: 'Nasce il tuo portale web con CRM integrato',
      step3Desc: 'Il risultato è esattamente ciò che stai provando: un portale pubblico connesso a un CRM per coordinare il lavoro ovunque.',
      step3Badge: 'Purezza 99.8%',
      networkTitle: 'Presenza Globale & Rappresentanti',
      networkDesc: 'Agenzie partner e referenti locali per supportare la tua crescita in Europa e in America.',
      hubsTitle: 'Sedi & Nodi Cokito\'s Lab',
      ctaButton: "Contatta Cokito's Lab per il tuo progetto",
      ctaSubtitle: 'Sviluppiamo soluzioni per imprese in Europa, USA e mercati internazionali.',
    },
    crmBanner: {
      badge: "Motore CRM Cokito's Lab",
      title: 'Pannello di Gestione in Tempo Reale',
      desc: "Questo è il CRM interno che gestisce le richieste web e i procedimenti aziendali con estrema agilità.",
      ctaBack: 'Torna al Sito Web',
    },
    drawers: {
      diagnosticBadge: 'Valutazione Preventiva',
      diagnosticTitle: 'Misura lo stato giuridico della tua azienda',
      diagnosticSubtitle: 'Diagnosi interattiva con raccomandazioni in 4 minuti. Clicca per aprire.',
      diagnosticCtaOpen: 'Apri Diagnosi',
      diagnosticCtaClose: 'Chiudi',
      blogBadge: 'Risorse',
      blogTitle: 'Guide Pratiche per PMI',
      blogSubtitle: 'Patti parasociali, contratti e conformità europea.',
      blogCtaOpen: 'Leggi Articoli',
      blogCtaClose: 'Chiudi',
    },
    footer: {
      tagline: "Cokito's Lab International · Laboratorio globale di soluzioni software e piattaforme web.",
      rights: 'Tutti i diritti riservati.',
      network: 'Sede negli USA · Rappresentanti a Parigi, Berlino, Faro (Portogallo), Madrid e Valencia (Spagna).',
      europeOffices: 'Rappresentanza a Parigi, Berlino, Faro, Madrid & Valencia',
      poweredBy: "Sviluppato da Cokito's Lab International",
      allRightsReserved: 'Tutti i diritti riservati.',
    },
  },
  de: {
    nav: {
      whyUs: 'Warum wir',
      services: 'Leistungen',
      howItWorks: 'Ablauf',
      team: 'Team',
      contact: 'Kontakt',
      crm: 'CRM-Panel',
      crmActive: 'CRM Aktiv',
      backToWeb: 'Website anzeigen',
      login: 'Anmelden',
      register: 'Registrieren',
      demoBadge: "Cokito's Lab · Interaktive Demo",
      diagnostic: 'Diagnose',
      blog: 'Blog & Ratgeber',
    },
    hero: {
      kicker: "Cokito's Lab International · Software für Kanzleien",
      titleLine1: 'Wir stärken und',
      titleLine2: 'schützen Ihr Unternehmen',
      titleLine3: 'durch Technologie und Rechtsberatung.',
      subtitle: "Interaktive Demo von Cokito's Lab für Kanzleien und Mittelstand. Eine moderne Lösung zur Lead-Generierung und Kundenverwaltung im integrierten CRM.",
      btnDiagnosis: 'Online-Diagnose starten',
      btnServices: 'Leistungen ansehen',
      trustPoint1: 'Gesellschaftsrecht und Verträge',
      trustPoint2: 'Echtzeit-Anbindung an internes CRM-System',
      trustPoint3: 'Mehrsprachige Betreuung für ganz Europa',
      cardBadge: 'Echte Fallstudie',
      cardTitle: 'Kanzlei-Portal + CRM',
      cardDesc: "Ein Anwalt brachte uns seine Idee, und Cokito's Lab verwandelte sie in diese schlüsselfertige Plattform.",
      cardItem1: 'Digitale Intake- und Risikoanalyse',
      cardItem2: 'Echtzeit-Kanban für Akten und Mandanten',
      cardItem3: 'Internationales Netzwerk in Europa und USA',
    },
    why: {
      kicker: 'Warum Sie Ihre Rechtspraxis modernisieren sollten',
      title: 'Das traditionelle Rechtsberatungsmodell ist veraltet. So sieht die Zukunft aus.',
      subtitle: "Überfüllte Postfächer, wochenlange Vertragsprüfungen und ratlose Mandanten. Cokito's Lab entwickelt Technologie, damit Ihre Kanzlei wie eine moderne digitale Plattform agiert: schnell, präventiv und in Echtzeit vernetzt.",
      quoteBadge: 'Bewiesene Wirkung der Digitalisierung',
      quote: 'Digitalisierung nimmt nicht die menschliche Nähe: Sie eliminiert zeitraubende Bürokratie, damit sich Anwälte auf strategische Wertschöpfung konzentrieren können.',
      quoteAuthor: 'Daniel Eduardo Pérez',
      quoteRole: 'Geschäftsführender Direktor · JurisNova',
      p1Num: '01',
      p1Title: 'Weil Langsamkeit und Intransparenz Mandanten kosten',
      p1Desc: '80 % unzufriedener Mandanten wechseln wegen fehlender Transparenz. Ein Portal mit Express-Check und Live-Status schafft sofortiges Vertrauen.',
      p2Num: '02',
      p2Title: 'Weil Software Ihre Expertise in ein skalierbares Gut verwandelt',
      p2Desc: 'Ohne digitale Tools verkaufen Anwälte nur Stunden. Mit automatisiertem Intake und eigenem CRM wächst Ihre Kanzlei zu einem skalierbaren Unternehmen.',
      p3Num: '03',
      p3Title: 'Weil Vorsorge kostspielige Gerichtsverfahren verhindert',
      p3Desc: 'Modernes Recht wartet nicht auf Streitigkeiten. Intelligentes Triage erkennt Risiken in Gesellschafterverträgen und IP frühzeitig.',
    },
    services: {
      kicker: "Von Cokito's Lab empfohlene Kanzleibausteine",
      title: 'Strategische und modulare Rechtsberatung',
      subtitle: 'Empfohlene Kernbereiche für Ihre Online-Präsenz: gefragte Module für Gesellschaftsrecht, Markenschutz, Arbeitsrecht und Compliance.',
      moduleLabel: 'Modul',
      approachLabel: 'Strategischer Ansatz',
      deliverablesLabel: 'Enthaltene Kernleistungen',
      risksLabel: 'Risiken bei Versäumnis dieses Bereichs',
      idealStageLabel: 'Idealer Zeitpunkt:',
      closeModal: 'Schließen',
      ctaDiagnosis: 'Diagnose für diesen Bereich starten',
      ctaDiagnosisModal: 'Diagnose für diesen Bereich starten',
      modalHint: 'Interaktiver Express-Check unverbindlich verfügbar',
      items: {
        corporate: {
          title: 'Gesellschaftsrecht & Governance',
          shortDesc: 'Schnelle Gründung, Gesellschaftervereinbarungen, Beschlüsse und präventive Governance.',
          fullDesc: 'Umfassende gesellschaftsrechtliche Absicherung zur Vermeidung von Gesellschafterstreitigkeiten und Vorbereitung von Investitionen.',
          deliverables: ['Maßgeschneiderte Gesellschaftervereinbarung', 'Individuelle Satzung', 'Handelsregister- & Beschlussführung', 'Corporate Governance Struktur'],
          risks: ['Patt-Situationen bei 50/50-Beteiligung', 'Abgang von Gründern mit wichtigem Code/Marken', 'Registerstrafen'],
          stage: 'Gründungsphase oder vor Aufnahme neuer Investoren.'
        },
        ip: {
          title: 'Marken & Gewerblicher Rechtsschutz',
          shortDesc: 'Internationale Markenanmeldung, Urheberrecht, Softwareschutz und Geheimhaltungsvereinbarungen.',
          fullDesc: 'Wir schützen Ihre immateriellen Vermögenswerte gegen Plagiate und Nachahmung durch Wettbewerber.',
          deliverables: ['Markenrecherche und -anmeldung', 'Rechteabtretung für Software & Designs', 'Geheimhaltungsvereinbarungen (NDA)', 'IP-Audit'],
          risks: ['Verlust des Markennamens an Dritte', 'Urheberrechtsstreitigkeiten bei Software', 'Wertminderung bei Unternehmensbewertung'],
          stage: 'Vor Markteintritt oder öffentlicher Vorstellung.'
        },
        regulatory: {
          title: 'Regulatorik & DSGVO-Compliance',
          shortDesc: 'DSGVO-Datenschutz, AGB/Nutzungsbedingungen, behördliche Lizenzen und Bußgeldvermeidung.',
          fullDesc: 'Sicherstellung der vollständigen Konformität mit europäischen Datenschutz- und Branchenvorgaben.',
          deliverables: ['DSGVO-Audit & Datenschutzerklärungen', 'Allgemeine Geschäftsbedingungen (AGB)', 'Geldwäscheprävention (AML)', 'Erforderliche Betriebslizenzen'],
          risks: ['Hohe Bußgelder der Datenschutzbehörden', 'Sperrung von Zahlungsdienstleistern', 'Schwerer Reputationsschaden'],
          stage: 'Vor Aufnahme des Live-Geschäfts zwingend.'
        },
        labor: {
          title: 'Arbeitsrecht & Mitarbeiterbeteiligung',
          shortDesc: 'Arbeits- und Freelancer-Verträge, Mitarbeiterbeteiligungsprogramme (Phantom Stocks).',
          fullDesc: 'Rechtssichere Beschäftigungsverhältnisse zur Bindung von Leistungsträgern ohne Scheinselbstständigkeitsrisiko.',
          deliverables: ['Arbeitsverträge & Remote-Work-Richtlinien', 'Dienstleistungs- & Freelancerverträge', 'VSOP- & Phantom-Stock-Modelle', 'Betriebliche Richtlinien'],
          risks: ['Klagen wegen Scheinselbstständigkeit', 'Abwanderung von Schlüsselkräften ohne Wettbewerbsverbot', 'Arbeitsinspektionsstrafen'],
          stage: 'Bei den ersten Festanstellungen oder festen Freelancern.'
        },
        mediation: {
          title: 'Mediation & Verhandlungsführung',
          shortDesc: 'Außergerichtliche Streitbeilegung, Vertragsneuverhandlung und vertrauliche Schlichtung.',
          fullDesc: 'Wirtschaftskonflikte schnell, diskret und kostensparend ohne langwierige Gerichtsverfahren beilegen.',
          deliverables: ['Verbindliche Vergleichsvereinbarungen', 'Neuverhandlung von Lieferantenverträgen', 'Private Schlichtungsverfahren', 'Krisenausstiegsstrategien'],
          risks: ['Jahrelange Prozesse mit immensen Kosten', 'Zerstörung wichtiger Geschäftsbeziehungen', 'Kontosperrungen bei Klagen'],
          stage: 'Beim ersten Auftreten geschäftlicher Spannungen.'
        },
        contracts: {
          title: 'Wirtschaftsverträge & SaaS',
          shortDesc: 'SaaS-Verträge, Softwarelizenzierung, SLA-Garantien und Vertriebsverträge.',
          fullDesc: 'Rechtssichere Verträge mit ausgewogenen Haftungsbegrenzungen zum Schutz Ihrer Einnahmen.',
          deliverables: ['SaaS-Nutzungsverträge & Service Level Agreements', 'Vertriebs- & Agenturverträge', 'Strategische Kooperationen', 'Lieferantenvertragsprüfung'],
          risks: ['Unbegrenzte Haftung bei Systemausfällen', 'Nachteilige Knebelklauseln', 'Fehlende Kündigungsrechte'],
          stage: 'Bei jedem B2B-Abschluss oder Zulieferervertrag.'
        }
      }
    },
    how: {
      kicker: "Cokito's Lab Arbeitsweise",
      title: 'Alternative Rechtsberatung: ein moderner, reibungsloser Ablauf',
      subtitle: 'Wir beenden die Trägheit herkömmlicher Kanzleien durch digitalen Intake und integriertes Echtzeit-CRM.',
      stepPrefix: 'Schritt',
      deliverablesPrefix: 'Ihr Mehrwert:',
      step1Title: 'Intelligente Erfassung & Triage',
      step1Subtitle: 'Express-Check und automatisierte Risikobewertung',
      step1Desc: 'Der Mandant füllt in 4 Minuten einen geführten Fragebogen aus. Das System bewertet Risiken und legt den Fall im CRM an.',
      step1Deliv1: 'Geführter Online-Check für den europäischen Markt',
      step1Deliv2: 'Sofortiger Risiko-Score (0-100) mit Prioritäten',
      step1Deliv3: 'Automatische Zuweisung im Kanzlei-CRM',
      step1Time: 'Sofort (Echtzeit)',
      step2Title: 'Maßgeschneidertes Angebot',
      step2Subtitle: 'Sicherer Datenraum und transparenter Festpreis',
      step2Desc: 'Verschlüsselter Dokumentenaustausch ohne Informationsverlust. Festpreisangebote ohne versteckte Kosten.',
      step2Deliv1: 'Schnelle Dokumentenprüfung von Verträgen und Marken',
      step2Deliv2: 'Feste Honorare nach Meilensteinen',
      step2Deliv3: 'Fester Ansprechpartner im CRM zugewiesen',
      step2Time: '24 bis 48 Arbeitsstunden',
      step3Title: 'Umsetzung & Live-Verfolgung',
      step3Subtitle: 'Transparente Meilensteine und lückenlose Historie',
      step3Desc: 'Volle Transparenz: Mandanten sehen den Bearbeitungsstand, Anwälte steuern Freigaben im CRM.',
      step3Deliv1: 'Echtzeit-Kanban für den Bearbeitungsfortschritt',
      step3Deliv2: 'Sichere digitale Dokumentenablage',
      step3Deliv3: 'Laufende Überwachung und Fristenkontrolle',
      step3Time: 'Kontinuierliche Begleitung',
    },
    team: {
      kicker: 'Partner & Rechtsberater',
      title: 'Spezialisierte Juristen mit Blick auf Ihr Wachstum',
      subtitle: 'Rechtliche Präzision, Schnelligkeit und unternehmerisches Denken. Wir verstehen, dass Verträge zügig geschlossen werden müssen.',
      founderBadge: 'Gründer & Geschäftsführender Direktor',
      founderQuote: "Wir führen JurisNova im Geist von Cokito's Lab: Das Gesetz muss ein Beschleuniger sein, kein bürokratisches Labyrinth.",
      founderCta: 'Direktes Beratungsgespräch anfragen',
      founderProfileBtn: 'Profil ansehen',
      specialistsBadge: 'Fachberater-Netzwerk',
      specialistsDesc: 'Spezialisten für Gesellschaftsrecht, geistiges Eigentum, Steuerrecht und Wirtschaftsmediation.',
    },
    contact: {
      kicker: 'Direkter Kontakt',
      title: 'Lassen Sie uns über Ihre rechtlichen Anforderungen sprechen',
      subtitle: 'Senden Sie uns Ihre Anfrage. Sie wird sofort in unserem CRM erfasst und ein Anwalt meldet sich innerhalb von 24 Arbeitsstunden.',
      nameLabel: 'Vollständiger Name',
      emailLabel: 'Geschäftliche E-Mail-Adresse',
      companyLabel: 'Unternehmen oder Organisation',
      messageLabel: 'Beschreiben Sie kurz Ihr Anliegen oder Ihren Beratungsbedarf',
      submitBtn: 'Anfrage absenden',
      sendingBtn: 'Wird übermittelt...',
      successTitle: 'Anfrage erfolgreich eingegangen!',
      successDesc: 'Ihre Anfrage wurde in unserem CRM synchronisiert. Ein zuständiger Anwalt prüft Ihr Anliegen unverzüglich.',
      successCrmBadge: 'In Echtzeit im CRM synchronisiert',
      channelsTitle: 'Direkte Kontaktwege',
      whatsappBtn: 'WhatsApp Rechtsassistent',
      emailBtn: 'E-Mail schreiben',
      hoursTitle: 'Erreichbarkeit',
      hoursDesc: 'Montag bis Freitag: 08:30 - 18:30 Uhr MEZ. Notfall-Bereitschaft 24/7.',
      locationsTitle: 'Internationale Präsenz',
      locationsDesc: 'Hauptsitz in den USA · Vertreter in Paris, Berlin, Faro (Portugal), Madrid und Valencia (Spanien).',
      newsletterTitle: 'Strategischer Rechtsbrief',
      newsletterSubtitle: 'Erhalten Sie monatliche Einblicke zu Regulierungsänderungen, Finanzierungsrunden und Unternehmensschutz.',
      newsletterBtn: 'Abonnieren',
      newsletterSuccess: 'Erfolgreich für den Rechtsbrief angemeldet!',
    },
    agency: {
      kicker: "Cokito's Lab International",
      title: 'Das Labor für Software und Digitallösungen',
      subtitle: "Sie bringen Ihre Idee mit – Cokito's Lab baut maßgeschneiderte Software, Webplattformen und interne CRM-Lösungen.",
      storyTitle: 'Vom Konzept zur skalierbaren Plattform',
      storyDesc: 'Dieses Portal beweist, wie schnell wir komplexe Geschäftsideen in praxistaugliche Software für den europäischen Markt verwandeln.',
      formulaTitle: "Cokitos Reaktionsformel",
      formulaDesc: 'Inspiriert von der Genauigkeit chemischer Laborprozesse: Wir formen Reibungsverluste in hochleistungsfähigen Code um.',
      step1Label: '1. Rohstoff: Ihre rohe Idee',
      step1Tag: 'Die Herausforderung',
      step1Title: 'Sie bringen uns Ihren geschäftlichen Engpass',
      step1Desc: 'Ein Gründer wendet sich mit manuellen Prozessen, unübersichtlichen Tabellen oder fehlenden Tools an unser Labor.',
      step1Badge: 'Input',
      step2Label: "2. Reaktion: Cokito's Lab Motor",
      step2Tag: 'Technischer Katalysator',
      step2Title: 'Wir übersetzen Ihre Idee in modulare Software-Architektur',
      step2Desc: 'Geleitet von Ana Teresa Sandoval („Cokito“), entwickeln wir UX, Triage-Algorithmen und reaktive Datenbanken.',
      step2Badge: 'Aktiver Katalysator',
      step3Label: '3. Reines Produkt: Die fertige Software',
      step3Tag: 'Das Ergebnis',
      step3Title: 'Ihre Web-Plattform mit integriertem CRM geht live',
      step3Desc: 'Das Ergebnis sehen Sie hier: Ein öffentliches Portal, direkt vernetzt mit einem internen CRM zur Steuerung.',
      step3Badge: '99.8% Effizienz',
      networkTitle: 'Internationale Präsenz & Netzwerk',
      networkDesc: 'Partneragenturen und lokale Vertretungen in Europa und Amerika begleiten Ihre Skalierung.',
      hubsTitle: 'Aktive Cokito\'s Lab Standorte',
      ctaButton: "Mit Cokito's Lab sprechen",
      ctaSubtitle: 'Softwareentwicklung für Unternehmen in Europa, den USA und weltweit.',
    },
    crmBanner: {
      badge: "Cokito's Lab CRM-Engine",
      title: 'Echtzeit-Verwaltungszentrale',
      desc: "Das interne CRM von Cokito's Lab für die automatische Erfassung, Priorisierung und Zuweisung von Anfragen.",
      ctaBack: 'Zurück zur Website',
    },
    drawers: {
      diagnosticBadge: 'Vorsorge-Check',
      diagnosticTitle: 'Rechtliche Unternehmensprüfung',
      diagnosticSubtitle: '4-Minuten-Expresscheck mit Sofortanalyse. Zum Öffnen anklicken.',
      diagnosticCtaOpen: 'Diagnose öffnen',
      diagnosticCtaClose: 'Schublade schließen',
      blogBadge: 'Wissenszentrum',
      blogTitle: 'Ratgeber & Praxiswissen',
      blogSubtitle: 'Gesellschafterverträge, Compliance und IP-Schutz.',
      blogCtaOpen: 'Artikel lesen',
      blogCtaClose: 'Schublade schließen',
    },
    footer: {
      tagline: "Cokito's Lab International · Weltweites Software- und Innovationslabor.",
      rights: 'Alle Rechte vorbehalten.',
      network: 'Hauptsitz in den USA · Vertreter in Frankreich, Deutschland, Faro (Portugal), Madrid und Valencia (Spanien).',
      europeOffices: 'Vertretungen in Paris, Berlin, Faro, Madrid & Valencia',
      poweredBy: "Entwickelt von Cokito's Lab International",
      allRightsReserved: 'Alle Rechte vorbehalten.',
    },
  },
  pt: {
    nav: {
      whyUs: 'Porquê nós',
      services: 'O que fazemos',
      howItWorks: 'Como funciona',
      team: 'Equipa',
      contact: 'Contacto',
      crm: 'Painel CRM',
      crmActive: 'CRM Ativo',
      backToWeb: 'Ver Website',
      login: 'Iniciar Sessão',
      register: 'Criar Conta',
      demoBadge: "Cokito's Lab · Demonstração Interativa",
      diagnostic: 'Diagnóstico',
      blog: 'Blog & Recursos',
    },
    hero: {
      kicker: "Cokito's Lab International · Soluções Digitais",
      titleLine1: 'Impulsionamos e',
      titleLine2: 'protegemos o seu negócio',
      titleLine3: 'com tecnologia e estratégia jurídica.',
      subtitle: "Demonstração interativa desenvolvida por Cokito's Lab para gabinetes e empresas. Captação de clientes em direto e gestão ágil em CRM interno.",
      btnDiagnosis: 'Fazer Diagnóstico Gratuito',
      btnServices: 'Conhecer Serviços',
      trustPoint1: 'Estruturação societária e contratos',
      trustPoint2: 'Ligado a CRM operacional em tempo real',
      trustPoint3: 'Apoio multilingue para Europa e América',
      cardBadge: 'Caso de Estudo Real',
      cardTitle: 'Arquitetura Legal + CRM',
      cardDesc: "Um advogado trouxe-nos a sua ideia e Cokito's Lab transformou-a nesta plataforma de captação e gestão de processos.",
      cardItem1: 'Captação digital e triagem de consultas',
      cardItem2: 'Quadro kanban e gestão de clientes em direto',
      cardItem3: 'Rede de representantes na Europa e América',
    },
    why: {
      kicker: 'Porquê Modernizar a Sua Advocacia',
      title: 'O modelo tradicional de assessoria jurídica está ultrapassado. Veja como transformá-lo.',
      subtitle: "E-mails perdidos, semanas para rever contratos e clientes sem visibilidade. Na Cokito's Lab construímos tecnologia para que o seu escritório funcione como uma plataforma moderna: rápida, preventiva e conectada em tempo real.",
      quoteBadge: 'Impacto Comprovado da Modernização',
      quote: 'A tecnologia liberta os advogados da burocracia morosa para que possam dedicar-se à estratégia de alto valor para os clientes.',
      quoteAuthor: 'Daniel Eduardo Pérez',
      quoteRole: 'Diretor Geral · JurisNova',
      p1Num: '01',
      p1Title: 'Porque a lentidão e a opacidade custam clientes',
      p1Desc: '80% dos clientes descontentes saem devido à falta de visibilidade nos processos. Um portal com diagnóstico rápido e acompanhamento contínuo gera confiança imediata.',
      p2Num: '02',
      p2Title: 'Porque o software transforma o seu saber num ativo escalável',
      p2Desc: 'Sem ferramentas digitais, vendem-se apenas horas. Com captação e CRM integrados, o seu escritório torna-se numa empresa ágil e escalável internacionalmente.',
      p3Num: '03',
      p3Title: 'Porque a prevenção poupa litígios demorados',
      p3Desc: 'O direito moderno antecipa conflitos. A triagem inteligente deteta fragilidades em acordos parassociais e propriedade intelectual antes de virarem disputas.',
    },
    services: {
      kicker: "Módulos Recomendados pela Cokito's Lab",
      title: 'Acompanhamento jurídico estratégico e modular',
      subtitle: 'Áreas prioritárias recomendadas para estruturar a sua oferta digital: serviços de grande procura para blindar sócios, contratos e propriedade intelectual.',
      moduleLabel: 'Módulo',
      approachLabel: 'Abordagem Estratégica',
      deliverablesLabel: 'Entregáveis Incluídos',
      risksLabel: 'Riscos se a sua empresa não cuidar desta área',
      idealStageLabel: 'Momento Ideal:',
      closeModal: 'Fechar',
      ctaDiagnosis: 'Fazer Diagnóstico nesta área',
      ctaDiagnosisModal: 'Fazer Diagnóstico nesta área',
      modalHint: 'Diagnóstico rápido e interativo disponível sem compromisso',
      items: {
        corporate: {
          title: 'Societário & Governação',
          shortDesc: 'Constituição ágil, acordo parassocial, atas e governação preventiva.',
          fullDesc: 'Blindagem total dos estatutos societários para evitar bloqueios entre fundadores e preparar rondas de investimento.',
          deliverables: ['Acordo de Sócios / Parassocial', 'Estatutos personalizados', 'Livros e atas societárias', 'Estrutura de governação'],
          risks: ['Bloqueio decisório a 50/50', 'Saída de fundadores com propriedade de código ou marca', 'Multas regulatórias'],
          stage: 'Fase de constituição ou antes de receber novos investidores.'
        },
        ip: {
          title: 'Propriedade Intelectual & Marcas',
          shortDesc: 'Registo de marcas europeias, patentes, direitos de autor e proteção de software.',
          fullDesc: 'Protegemos os seus ativos intangíveis para evitar cópias não autorizadas por parte de concorrentes.',
          deliverables: ['Pesquisa e registo de marcas', 'Cessão de direitos de autor sobre software', 'Acordos de confidencialidade (NDA)', 'Auditoria de marcas'],
          risks: ['Perda do nome comercial para terceiros', 'Litígios sobre código desenvolvido por colaboradores', 'Desvalorização em auditorias de venda'],
          stage: 'Antes do lançamento comercial ou divulgação de protótipos.'
        },
        regulatory: {
          title: 'Regulatório & RGPD',
          shortDesc: 'Conformidade com o RGPD, termos de serviço, licenças de atividade e prevenção de coimas.',
          fullDesc: 'Garantimos que a sua atividade digital cumpre todas as diretivas europeias e locais.',
          deliverables: ['Auditoria de RGPD e política de privacidade', 'Termos e Condições para plataformas', 'Políticas de prevenção de branqueamento', 'Licenças de operação'],
          risks: ['Coimas avultadas da autoridade de dados', 'Bloqueio de gateways de pagamento', 'Dano grave à reputação da empresa'],
          stage: 'Obrigatório antes do início da operação pública.'
        },
        labor: {
          title: 'Laboral & Contratação',
          shortDesc: 'Contratos de trabalho, prestação de serviços com freelancers e planos de phantom shares.',
          fullDesc: 'Relações laborais claras para reter talento de topo sem risco de falsos recibos verdes.',
          deliverables: ['Contratos de trabalho e regime de teletrabalho', 'Contratos de prestação de serviços', 'Planos de incentivo e phantom shares', 'Regulamentos internos'],
          risks: ['Reconhecimento judicial de vínculo laboral', 'Fuga de talentos sem pacto de não concorrência', 'Multas da inspeção do trabalho'],
          stage: 'Na contratação dos primeiros colaboradores ou equipas chave.'
        },
        mediation: {
          title: 'Mediação & Negociação Comercial',
          shortDesc: 'Resolução extrajudicial célere, renegociação de contratos e acordos de transação.',
          fullDesc: 'Solucionamos divergências comerciais de forma rápida e confidencial, sem recorrer aos tribunais.',
          deliverables: ['Acordos de transação vinculativos', 'Renegociação com fornecedores e clientes', 'Sessões de mediação privada', 'Estratégias de resolução amigável'],
          risks: ['Processos judiciais que duram anos com custos elevados', 'Ruptura irreversível de parcerias estratégicas', 'Congelamento de contas bancárias'],
          stage: 'Perante qualquer sinal de discórdia comercial.'
        },
        contracts: {
          title: 'Contratos Mercantis & SaaS',
          shortDesc: 'Contratos de software SaaS, acordos de nível de serviço (SLA) e parcerias comerciais.',
          fullDesc: 'Contratos comerciais sólidos com limitação clara de responsabilidades para proteger a sua receita.',
          deliverables: ['Contratos SaaS e Acordos de Nível de Serviço (SLA)', 'Contratos de distribuição e agência', 'Parcerias estratégicas e consórcios', 'Revisão de contratos com fornecedores'],
          risks: ['Responsabilidade ilimitada por quebras de serviço', 'Cláusulas de exclusividade desfavoráveis', 'Impossibilidade de cancelamento de contratos'],
          stage: 'Em cada nova venda B2B ou integração com parceiros.'
        }
      }
    },
    how: {
      kicker: "Metodologia Cokito's Lab",
      title: 'Soluções jurídicas alternativas: um fluxo moderno e sem atritos',
      subtitle: 'Eliminamos a burocracia com triagem inteligente e um CRM conectado em tempo real.',
      stepPrefix: 'Passo',
      deliverablesPrefix: 'O que obtém:',
      step1Title: 'Captação & Triagem Inteligente',
      step1Subtitle: 'Avaliação express e cálculo automático de riscos',
      step1Desc: 'O cliente preenche um questionário ágil de 4 minutos. O algoritmo perfila a situação e encaminha o lead para o CRM.',
      step1Deliv1: 'Formulário interativo adaptado ao mercado europeu',
      step1Deliv2: 'Pontuação de risco instantânea (0 a 100)',
      step1Deliv3: 'Registo automático do contacto no CRM',
      step1Time: 'Imediato (Tempo Real)',
      step2Title: 'Estruturação & Proposta à Medida',
      step2Subtitle: 'Envio seguro de documentos e orçamento fechado',
      step2Desc: 'Canal seguro para carregar ficheiros sem perdas. Propostas transparentes sem custos surpresa.',
      step2Deliv1: 'Revisão documental ágil de contratos e marcas',
      step2Deliv2: 'Orçamento fechado por fases',
      step2Deliv3: 'Atribuição de advogado responsável no CRM',
      step2Time: '24 a 48 horas úteis',
      step3Title: 'Execução & Acompanhamento Live',
      step3Subtitle: 'Quadro de marcos, entregáveis e rastreabilidade total',
      step3Desc: 'Total clareza: o cliente acompanha cada fase enquanto os advogados gerem prazos e assinaturas no CRM.',
      step3Deliv1: 'Quadro kanban com estado atualizado em direto',
      step3Deliv2: 'Cofre digital para guarda de certidões e contratos',
      step3Deliv3: 'Acompanhamento preventivo e alertas de prazos',
      step3Time: 'Acompanhamento Contínuo',
    },
    team: {
      kicker: 'Sócios & Especialistas Jurídicos',
      title: 'Advogados focados no crescimento sustentável da sua empresa',
      subtitle: 'Combinamos rigor jurídico, agilidade processual e sentido prático de negócio. Sabemos que os negócios não podem esperar.',
      founderBadge: 'Fundador & Diretor Geral',
      founderQuote: "Guiamos a JurisNova sob a visão da Cokito's Lab: a lei deve ser uma alavanca de crescimento e não um labirinto burocrático.",
      founderCta: 'Pedir consulta direta',
      founderProfileBtn: 'Ver perfil completo',
      specialistsBadge: 'Rede de Consultores Especializados',
      specialistsDesc: 'Especialistas dedicados a societário, propriedade intelectual, fiscal e resolução de litígios.',
    },
    contact: {
      kicker: 'Contacto Direto',
      title: 'Vamos falar sobre a sua empresa e os seus desafios jurídicos',
      subtitle: 'Envie-nos a sua mensagem. Cada pedido fica imediatamente registado no nosso CRM e um advogado responderá em menos de 24 horas úteis.',
      nameLabel: 'Nome completo',
      emailLabel: 'E-mail profissional',
      companyLabel: 'Empresa ou Organização',
      messageLabel: 'Descreva brevemente a sua situação ou necessidade jurídica',
      submitBtn: 'Enviar Pedido ao Escritório',
      sendingBtn: 'A registar pedido...',
      successTitle: 'Pedido Recebido com Sucesso!',
      successDesc: 'O seu pedido foi sincronizado no nosso CRM em tempo real. Um advogado designado entrará em contacto muito em breve.',
      successCrmBadge: 'Sincronizado no CRM em Tempo Real',
      channelsTitle: 'Canais de Atendimento Direto',
      whatsappBtn: 'WhatsApp Assistente Jurídico',
      emailBtn: 'Enviar E-mail',
      hoursTitle: 'Horário de Atendimento',
      hoursDesc: 'Segunda a Sexta: 08:30 - 18:30 CET. Piquete para urgências corporativas 24/7.',
      locationsTitle: 'Presença Internacional',
      locationsDesc: 'Sede nos EUA · Representantes em Paris, Berlim, Faro (Portugal), Madrid e Valência (Espanha).',
      newsletterTitle: 'Boletim Jurídico Estratégico',
      newsletterSubtitle: 'Receba resumos mensais sobre alterações regulamentares, investimento e proteção empresarial.',
      newsletterBtn: 'Subscrever',
      newsletterSuccess: 'Inscrição no boletim efetuada com sucesso!',
    },
    agency: {
      kicker: "Cokito's Lab International",
      title: 'Laboratório de Ideias e Soluções Tecnológicas',
      subtitle: "Traga-nos a sua ideia de negócio e em Cokito's Lab transformamo-la em software, plataformas web e sistemas CRM à medida.",
      storyTitle: 'Da conversa inicial a uma plataforma completa',
      storyDesc: 'Este projeto demonstra como transformamos fluxos de trabalho tradicionais em ferramentas digitais escaláveis para mercados internacionais.',
      formulaTitle: 'A Fórmula de Cokito',
      formulaDesc: 'Inspirada na precisão da análise laboratorial: transformamos fricção em software eficiente e escalável.',
      step1Label: '1. Reagente: A Sua Ideia em Bruto',
      step1Tag: 'O Desafio',
      step1Title: 'Traz-nos a sua necessidade de negócio',
      step1Desc: 'Um fundador expõe os seus estrangulamentos: tarefas manuais repetitivas, pedidos dispersos e falta de sistemas modernos.',
      step1Badge: 'Input',
      step2Label: "2. Reação: O Motor Cokito's Lab",
      step2Tag: 'Catalisador Tecnológico',
      step2Title: 'Sintetizamos a sua visão em arquitetura de software',
      step2Desc: 'Liderado por Ana Teresa Sandoval («Cokito»), concebemos a experiência, os algoritmos de triagem e a base de dados reativa.',
      step2Badge: 'Catalisador Ativo',
      step3Label: '3. Composto Puro: O Software em Direto',
      step3Tag: 'O Resultado',
      step3Title: 'A sua plataforma web com CRM ganha vida',
      step3Desc: 'O resultado é exatamente o que está a utilizar: um portal público ligado a um CRM interno para gerir operações sem fronteiras.',
      step3Badge: 'Pureza 99.8%',
      networkTitle: 'Presença Internacional e Representantes',
      networkDesc: 'Rede de agências associadas e parceiros locais para apoiar a sua expansão na Europa e América.',
      hubsTitle: 'Centros e Nódulos Cokito\'s Lab',
      ctaButton: "Falar com Cokito's Lab sobre o seu projeto",
      ctaSubtitle: 'Desenvolvemos soluções web, móveis e empresariais para a Europa, EUA e América Latina.',
    },
    crmBanner: {
      badge: "Motor CRM Cokito's Lab",
      title: 'Painel Administrativo em Tempo Real',
      desc: "Este é o CRM interno concebido por Cokito's Lab onde a sua equipa gere pedidos, processos e contactos em direto.",
      ctaBack: 'Voltar ao Website Público',
    },
    drawers: {
      diagnosticBadge: 'Ferramenta Preventiva',
      diagnosticTitle: 'Avalie a saúde jurídica da sua empresa',
      diagnosticSubtitle: 'Diagnóstico express com relatório preliminar em 4 minutos. Clique para abrir.',
      diagnosticCtaOpen: 'Abrir Diagnóstico',
      diagnosticCtaClose: 'Fechar Gaveta',
      blogBadge: 'Centro de Conhecimento',
      blogTitle: 'Guias Práticos & Artigos para PME',
      blogSubtitle: 'Acordos parassociais, proteção de ativos e conformidade europeia.',
      blogCtaOpen: 'Explorar Artículos',
      blogCtaClose: 'Fechar Gaveta',
    },
    footer: {
      tagline: "Cokito's Lab International · Laboratório global de soluções digitais e software empresarial.",
      rights: 'Todos os direitos reservados.',
      network: 'Sede nos EUA · Representantes em França, Alemanha, Faro (Portugal), Madrid e Valência (Espanha).',
      europeOffices: 'Representação em Paris, Berlim, Faro, Madrid & Valência',
      poweredBy: "Desenvolvido por Cokito's Lab International",
      allRightsReserved: 'Todos os direitos reservados.',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
  languagesList: Array<{ code: Language; label: string; flag: string }>;
}

const LANGUAGES_LIST: Array<{ code: Language; label: string; flag: string }> = [
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', label: 'Português', flag: '🇵🇹' },
];

const LanguageContext = createContext<LanguageContextType>({
  language: 'es',
  setLanguage: () => {},
  t: translationsData.es,
  languagesList: LANGUAGES_LIST,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('cokitos_lab_language') as Language;
      if (['es', 'fr', 'en', 'it', 'de', 'pt'].includes(saved)) return saved;
    } catch {}
    return 'es';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('cokitos_lab_language', lang);
    } catch {}
  };

  const t = translationsData[language] || translationsData.es;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languagesList: LANGUAGES_LIST }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
