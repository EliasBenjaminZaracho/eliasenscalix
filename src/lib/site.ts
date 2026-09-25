export const site = {
  name: "Scalix",
  tagline: "Posicionamiento y crecimiento online de negocios",
  description:
    "Posicionamos y hacemos crecer negocios locales en Internet: Google Maps, SEO, GEO, páginas web profesionales, hosting y dominio. Planes claros desde 49 €/mes.",
  phones: ["640 29 57 43", "640 24 30 45"],
  tel: (phone: string) => `tel:+34${phone.replace(/\s/g, "")}`,
};

export type IconName =
  | "map"
  | "search"
  | "spark"
  | "web"
  | "server"
  | "trend";

export const navigation = [
  { href: "/", label: "Inicio" },
  { href: "/servicios", label: "Servicios" },
  { href: "/planes", label: "Planes" },
  { href: "/sobre-nosotros", label: "Nosotros" },
  { href: "/faq", label: "FAQ" },
  { href: "/contacto", label: "Contacto" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  summary: string;
  description: string;
  bullets: string[];
  icon: IconName;
  includedNote?: string;
};

export const services: Service[] = [
  {
    slug: "google-maps",
    name: "Posicionamiento en Google Maps",
    short: "Google Maps",
    summary:
      "Posicionamiento y optimización de la presencia del negocio en Google Maps y búsquedas locales.",
    description:
      "La mayoría de tus clientes te buscan en Google Maps. Optimizamos tu ficha, tus datos y tu presencia local para que tu negocio aparezca cuando alguien busca lo que ofreces cerca de él.",
    bullets: [
      "Optimización completa de la ficha de Google Maps",
      "Categorías, descripción y datos de contacto correctos",
      "Estrategia para búsquedas y recomendaciones locales",
      "Seguimiento de tu visibilidad en tu zona",
    ],
    icon: "map",
  },
  {
    slug: "seo",
    name: "SEO",
    short: "SEO",
    summary:
      "Optimización de la presencia orgánica del negocio para mejorar su visibilidad en buscadores.",
    description:
      "Hacemos que tu página web aparezca en los resultados de Google cuando tus clientes buscan tus productos o servicios, trabajando el contenido, la técnica y la autoridad de tu sitio.",
    bullets: [
      "Análisis y optimización técnica de la web",
      "Contenidos y palabras clave orientadas a tu negocio",
      "Mejora de la estructura y la experiencia de usuario",
      "Resultados medibles en buscadores",
    ],
    icon: "search",
  },
  {
    slug: "geo",
    name: "GEO",
    short: "GEO",
    summary:
      "Optimización orientada a las nuevas formas de búsqueda y a los entornos basados en inteligencia artificial.",
    description:
      "La forma de buscar está cambiando: los asistentes y resúmenes inteligentes responden por ti. Preparamos tu negocio para aparecer en esas nuevas respuestas.",
    bullets: [
      "Adaptación a búsquedas por voz y asistentes",
      "Optimización para entornos y respuestas de IA",
      "Contenido estructurado para las nuevas búsquedas",
      "Visibilidad en las fuentes que citan los asistentes",
    ],
    icon: "spark",
  },
  {
    slug: "web",
    name: "Página web",
    short: "Página web",
    summary: "Diseño y creación de páginas web profesionales para negocios.",
    description:
      "Diseñamos y creamos webs profesionales, rápidas y pensadas para convertir visitas en consultas. Tu web es la base de todo tu posicionamiento.",
    bullets: [
      "Diseño profesional adaptado a tu marca",
      "Web rápida y optimizada para móvil",
      "Estructura preparada para SEO",
      "Incluida en todos los planes",
    ],
    icon: "web",
  },
  {
    slug: "hosting",
    name: "Hosting y dominio",
    short: "Hosting y dominio",
    summary: "Incluidos según el plan contratado.",
    description:
      "Nos ocupamos de que tu web esté siempre disponible, con hosting estable y tu propio dominio. Sin preocupaciones técnicas.",
    bullets: [
      "Hosting estable y configuración lista",
      "Tu dominio propio incluido",
      "Certificado y seguridad básica configurada",
      "Incluido según el plan contratado",
    ],
    icon: "server",
    includedNote: "Incluido según el plan contratado",
  },
];

export type Plan = {
  index: number;
  name: string;
  price: string;
  features: string[];
  featured: boolean;
  badge?: string;
};

export const plans: Plan[] = [
  {
    index: 1,
    name: "Esencial",
    price: "49",
    features: [
      "Página web",
      "Hosting",
      "Dominio",
      "Mantenimiento básico",
    ],
    featured: false,
  },
  {
    index: 2,
    name: "Crecimiento",
    price: "82",
    features: ["Página web", "Hosting", "Dominio", "SEO básico", "GEO"],
    featured: true,
    badge: "Más popular",
  },
  {
    index: 3,
    name: "Máximo",
    price: "99",
    features: [
      "Página web profesional",
      "Hosting",
      "Dominio",
      "SEO",
      "GEO avanzado",
      "Posicionamiento avanzado / ultra avanzado",
    ],
    featured: false,
    badge: "Máximo alcance",
  },
];

export const comparisonColumns = ["49 €/mes", "82 €/mes", "99 €/mes"];

export const comparisonRows: {
  label: string;
  plan1: boolean;
  plan2: boolean;
  plan3: boolean;
}[] = [
  { label: "Página web", plan1: true, plan2: true, plan3: true },
  { label: "Hosting", plan1: true, plan2: true, plan3: true },
  { label: "Dominio", plan1: true, plan2: true, plan3: true },
  { label: "Mantenimiento básico", plan1: true, plan2: false, plan3: false },
  { label: "SEO básico", plan1: false, plan2: true, plan3: true },
  { label: "GEO", plan1: false, plan2: true, plan3: true },
  { label: "GEO avanzado", plan1: false, plan2: false, plan3: true },
  {
    label: "Posicionamiento avanzado",
    plan1: false,
    plan2: false,
    plan3: true,
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Analizamos",
    text: "Analizamos la situación actual del negocio.",
  },
  {
    n: "02",
    title: "Optimizamos",
    text: "Trabajamos la página web y la presencia digital.",
  },
  {
    n: "03",
    title: "Posicionamos",
    text: "Aplicamos estrategias de SEO, GEO y posicionamiento local.",
  },
  {
    n: "04",
    title: "Mejoramos",
    text: "Trabajamos continuamente para mejorar la presencia online.",
  },
];

export const heroFaqs = [
  {
    q: "¿Qué incluye cada plan?",
    a: "Todos los planes incluyen página web, hosting y dominio. El Plan 1 añade mantenimiento básico, el Plan 2 incorpora SEO básico y GEO, y el Plan 3 suma SEO completo, GEO avanzado y posicionamiento avanzado.",
  },
  {
    q: "¿Qué diferencia hay entre SEO y GEO?",
    a: "El SEO optimiza tu presencia en buscadores tradicionales como Google. El GEO prepara tu negocio para las nuevas formas de búsqueda: asistentes y respuestas generadas por inteligencia artificial.",
  },
  {
    q: "¿Trabajáis con negocios locales?",
    a: "Sí, es nuestra especialidad. Trabajamos con negocios que quieren aparecer en Google Maps y en las búsquedas de su zona.",
  },
  {
    q: "¿Qué plan necesita mi negocio?",
    a: "Si quieres empezar con presencia completa, el Plan 1. Si quieres crecer en buscadores, el Plan 2. Si buscas el máximo alcance, el Plan 3. Si tienes dudas, llámanos y te lo contamos.",
  },
];

export const faqs = [
  {
    q: "¿Qué incluye cada plan?",
    a: "Cada plan incluye página web, hosting y dominio. El Plan 1 añade mantenimiento básico; el Plan 2 incorpora SEO básico y GEO; el Plan 3 suma SEO completo, GEO avanzado y posicionamiento avanzado. Puedes ver la comparativa completa en la sección de planes.",
  },
  {
    q: "¿Qué diferencia hay entre SEO y GEO?",
    a: "El SEO optimiza tu presencia orgánica para buscadores tradicionales como Google. El GEO optimiza tu negocio para las nuevas formas de búsqueda basadas en inteligencia artificial: asistentes, resúmenes y respuestas generadas. Hoy, aparecer en ambos es clave.",
  },
  {
    q: "¿Trabajáis con negocios locales?",
    a: "Sí, es nuestra especialidad. Trabajamos con negocios locales que quieren aparecer en Google Maps y en las búsquedas de su zona.",
  },
  {
    q: "¿El dominio está incluido?",
    a: "Sí. El dominio está incluido en todos nuestros planes.",
  },
  {
    q: "¿El hosting está incluido?",
    a: "Sí. El hosting está incluido en todos nuestros planes.",
  },
  {
    q: "¿Qué incluye el mantenimiento?",
    a: "El mantenimiento básico del Plan 1 cubre el cuidado y la actualización de tu página web, junto con el hosting y el dominio, para que todo funcione correctamente.",
  },
  {
    q: "¿Qué plan necesita mi negocio?",
    a: "Si empiezas y quieres una presencia completa, el Plan 1 es ideal. Si quieres crecer en buscadores, el Plan 2. Si buscas el máximo alcance —SEO completo, GEO avanzado y posicionamiento—, el Plan 3. Si tienes dudas, llámanos y te orientamos sin compromiso.",
  },
];

export const trustValues = [
  {
    title: "Especialistas en negocios locales",
    text: "Sabemos cómo se busca y se elige un negocio en tu zona.",
  },
  {
    title: "Presencia integral",
    text: "Google Maps, SEO, GEO y web: todo trabajado de forma conjunta.",
  },
  {
    title: "Planes con todo incluido",
    text: "Hosting y dominio dentro de cada plan. Sin costes escondidos.",
  },
  {
    title: "Acompañamiento continuo",
    text: "Trabajamos mes a mes para mejorar y mantener tu presencia.",
  },
];

export const reservedSlots = [
  "Testimonios",
  "Logos de clientes",
  "Casos de éxito",
  "Resultados",
  "Capturas de Google Maps",
  "Estadísticas",
];