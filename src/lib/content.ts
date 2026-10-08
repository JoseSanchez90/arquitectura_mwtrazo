export const contact = {
  whatsapp: "https://wa.me/51947224879",
  phone: "+51 947 224 879",
  email: "contacto@hotmail.com",
  location: "Lima y Callao, Perú",
  map: "https://maps.app.goo.gl/REKArk6kkPzxTrak6",
};

export const stats = [
  ["6+", "Años de experiencia"],
  ["250+", "Proyectos completados"],
  ["8", "Profesionales asociados"],
  ["215k+", "M² regularizados"],
];

export const values = [
  {
    title: "Transparencia",
    text: "Trabajamos con total claridad. Te entregamos el número de título de SUNARP para que hagas seguimiento directo y sustentamos cada pago realizado a las entidades.",
  },
  {
    title: "Garantía real",
    text: "Evaluamos previamente tu documentación para asegurar que el trámite no tenga observaciones. Además, ofrecemos garantía de devolución total de tu dinero durante 45 días.",
  },
  {
    title: "Rapidez",
    text: "La eficiencia nos define. Ingresamos los títulos en aproximadamente una semana y resolvemos cualquier observación registral en solo 2 a 3 días hábiles.",
  },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  image: string;
  icon: "building" | "plan" | "land" | "shield";
  question: string;
  paragraphs: string[];
  benefits: string[];
  requirements?: [string, string][];
  includes?: string[];
  closing?: { title: string; text: string };
};

export const services: Service[] = [
  {
    slug: "declaratoria-de-fabrica",
    title: "Declaratoria de fábrica",
    shortTitle: "Declaratoria de fábrica",
    eyebrow: "Legalización de edificaciones",
    image: "/images/article-house.jpg",
    icon: "building",
    description:
      "Formaliza legalmente tu construcción, evita multas municipales e incrementa el valor de tu inmueble en el mercado inmobiliario.",
    question: "¿Qué es la declaratoria de fábrica?",
    paragraphs: [
      "Es la inscripción registral de la edificación que has construido en tu terreno. Este trámite permite que tu construcción exista legalmente ante la SUNARP y las autoridades municipales.",
      "Muchas personas tienen su terreno inscrito, pero no las casas o pisos que han construido sobre él. Esto significa que legalmente la construcción “no existe”, lo que te impide venderla a su valor real, independizarla o usarla como garantía bancaria.",
    ],
    benefits: [
      "Seguridad jurídica total",
      "Aumenta el valor comercial",
      "Facilita ventas e hipotecas",
      "Evita multas por construcción",
    ],
    requirements: [
      ["Partida registral", "Copia literal del predio (SUNARP)."],
      ["DNI", "Documentos de identidad de los propietarios."],
      ["Planos actuales", "Si existen, de arquitectura y distribución."],
      ["Constancia", "Certificado de parámetros urbanísticos."],
    ],
    closing: {
      title: "¿Por qué elegir a MW Trazo?",
      text: "En MWTRAZO no somos solo tramitadores, somos especialistas. Asumimos la responsabilidad técnica como verificadores inscritos en SUNARP, asegurando que tu expediente ingrese impecable, en tiempos récord y con garantía de devolución.",
    },
  },
  {
    slug: "independizacion",
    title: "Independización de inmuebles",
    shortTitle: "Independización SUNARP",
    eyebrow: "Fragmentación registral",
    image: "/images/hero-buildings.jpg",
    icon: "plan",
    description:
      "Divide legalmente tu edificación en unidades independientes (departamentos, pisos o locales) y obtén una partida registral propia para cada área.",
    question: "¿En qué consiste la independización?",
    paragraphs: [
      "Es un proceso legal que divide una edificación matriz en unidades independientes. Esto aplica perfectamente para departamentos, pisos, azoteas, locales comerciales o estacionamientos.",
      "Al realizar este trámite, cada unidad obtiene su propia partida registral y título de propiedad en SUNARP. Esto significa que cada área pasa a tener independencia física y legal, definiendo claramente las áreas privadas y las áreas comunes.",
    ],
    benefits: [
      "Delimitación clara de la propiedad",
      "Evita conflictos entre propietarios",
      "Servicios independientes (agua, luz)",
      "Facilita herencias y sucesiones",
    ],
    includes: [
      "Levantamiento de arquitectura",
      "Elaboración de planos técnicos",
      "Llenado de formulario registral",
      "Emisión de informe técnico",
      "Levantamiento de observaciones",
      "Seguimiento completo del trámite",
    ],
    requirements: [
      ["Reglamento interno", "Documento firmado que regula la convivencia."],
      ["Áreas comunes", "Documento oficial de independización y áreas."],
      ["Planos específicos", "Planos detallados de la independización."],
      ["Certificados", "Certificado de numeración municipal e informe."],
    ],
    closing: {
      title: "Garantía y rapidez MW Trazo",
      text: "Una vez ingresado el expediente, SUNARP demora aproximadamente 7 días hábiles en responder. Nosotros te entregamos el número de título para que hagas seguimiento directo y te brindamos garantía de devolución. Además, ofrecemos facilidades de pago en cuotas sin intereses.",
    },
  },
  {
    slug: "subdivision",
    title: "Subdivisión de predios",
    shortTitle: "Subdivisión de predios",
    eyebrow: "Partición de suelos urbanos",
    image: "/images/portfolio-house.jpg",
    icon: "land",
    description:
      "Divide un terreno matriz en varios sublotes independientes, cada uno con su propia partida electrónica ante SUNARP.",
    question: "¿Qué es la subdivisión de predios?",
    paragraphs: [
      "Es el proceso técnico-legal que permite fragmentar un lote de terreno en unidades más pequeñas. Cada uno de estos nuevos lotes resultantes adquiere su propia independencia jurídica, con una partida electrónica individual en SUNARP.",
      "En MWTRAZO, podemos realizar este trámite directamente en SUNARP mediante un verificador inscrito, simplificando los tiempos municipales en casos específicos.",
    ],
    benefits: [
      "Facilita ventas de lotes pequeños",
      "Instalaciones de agua y luz independientes",
      "Mejora la distribución patrimonial",
      "Genera nuevas oportunidades inmobiliarias",
    ],
    requirements: [
      ["Plano de ubicación", "Ubicación y distribución del predio."],
      ["Memoria descriptiva", "Descripción técnica de los lotes."],
      ["Copia literal", "Información registral de la propiedad."],
      ["Códigos catastrales", "Identificación catastral de los predios."],
    ],
  },
  {
    slug: "levantamiento-de-cargas",
    title: "Levantamiento de cargas técnicas",
    shortTitle: "Levantamiento de cargas",
    eyebrow: "Saneamiento de títulos",
    image: "/images/article-building.jpg",
    icon: "shield",
    description:
      "Elimina restricciones técnicas registrales para facilitar ventas o hipotecas y regularizar completamente tu propiedad.",
    question: "Recupera la libertad registral de tu propiedad",
    paragraphs: [
      "Eliminamos las restricciones e inscripciones preventivas que bloquean la comercialización de tu inmueble. Restauramos la libertad registral de tu propiedad para procesos bancarios.",
      "Nuestros verificadores inscritos en SUNARP evalúan la documentación de tu predio y se encargan de la gestión técnica y legal. Analizamos tu caso antes de iniciar el servicio.",
    ],
    benefits: [
      "Eliminación de restricciones técnicas",
      "Facilita ventas e hipotecas",
      "Asesoría técnica especializada",
      "Seguimiento documentado del trámite",
    ],
  },
];

export const faq = [
  {
    question: "¿Qué garantía ofrecen en sus servicios?",
    answer:
      "Evaluamos previamente toda la documentación para asegurar que el trámite no tenga observaciones ni problemas. Además, brindamos una garantía de devolución total de tu dinero durante 45 días en caso de inconvenientes con el proceso.",
  },
  {
    question: "¿Cuánto tiempo demora un trámite en SUNARP?",
    answer:
      "Nos caracterizamos por nuestra rapidez: los títulos son ingresados en aproximadamente una semana. SUNARP tiene un plazo de respuesta de unos 7 días hábiles. Si existieran observaciones, las resolvemos en solo 2 o 3 días luego de ser notificadas.",
  },
  {
    question: "¿Qué es un verificador SUNARP?",
    answer:
      "Es el profesional legalmente autorizado para regularizar construcciones y gestionar trámites técnicos registrales bajo la Ley 27157. En MWTRAZO contamos con verificadores inscritos en SUNARP que se encargarán de toda la gestión técnica y legal por ti.",
  },
  {
    question: "¿Cómo garantizan la transparencia del proceso?",
    answer:
      "Trabajamos con total transparencia. Te entregamos el número de título de SUNARP para que puedas hacer seguimiento directo a tu caso. Asimismo, todos los pagos que realizamos a las entidades correspondientes son debidamente sustentados y documentados.",
  },
];

export const projects = [
  {
    slug: "familia-quintana",
    family: "Quintana",
    location: "Surco",
    category: "Residencial",
    title: "Declaratoria de fábrica e independización",
    image: "/images/project-quintana.jpg",
  },
  {
    slug: "familia-melendez",
    family: "Melendez",
    location: "Chorrillos",
    category: "Ampliación",
    title: "Ampliación de fábrica e independización",
    image: "/images/project-melendez.jpg",
  },
  {
    slug: "familia-almeida",
    family: "Almeida",
    location: "Callao",
    category: "Residencial",
    title: "Declaratoria de fábrica e independización",
    image: "/images/project-almeida.jpg",
  },
  {
    slug: "familia-cespedes",
    family: "Céspedes",
    location: "Rímac",
    category: "Residencial",
    title: "Declaratoria de fábrica e independización",
    image: "/images/portfolio-house.jpg",
  },
  {
    slug: "familia-medano",
    family: "Medano",
    location: "Lince",
    category: "Residencial",
    title: "Declaratoria de fábrica e independización",
    image: "/images/hero-buildings.jpg",
  },
  {
    slug: "familia-tapia",
    family: "Tapia",
    location: "La Molina",
    category: "Técnico",
    title: "Declaratoria de fábrica",
    image: "/images/project-tapia.jpg",
  },
  {
    slug: "familia-rojas",
    family: "Rojas",
    location: "Surco",
    category: "Técnico",
    title: "Declaratoria de fábrica",
    image: "/images/article-house.jpg",
  },
  {
    slug: "familia-ramirez",
    family: "Ramirez",
    location: "Ancón",
    category: "Residencial",
    title: "Declaratoria de fábrica e independización",
    image: "/images/hero-house.jpg",
  },
  {
    slug: "familia-silva",
    family: "Silva",
    location: "Carabayllo",
    category: "Residencial",
    title: "Declaratoria de fábrica",
    image: "/images/project-melendez.jpg",
  },
  {
    slug: "familia-navarro",
    family: "Navarro",
    location: "San Miguel",
    category: "Residencial",
    title: "Declaratoria de fábrica",
    image: "/images/project-quintana.jpg",
  },
  {
    slug: "familia-esteban",
    family: "Esteban",
    location: "Lurigancho",
    category: "Residencial",
    title: "Declaratoria de fábrica e independización",
    image: "/images/project-almeida.jpg",
  },
  {
    slug: "familia-quintanilla",
    family: "Quintanilla",
    location: "Miraflores",
    category: "Residencial",
    title: "Declaratoria de fábrica",
    image: "/images/project-tapia.jpg",
  },
].map((p) => ({ ...p, year: "2023" }));

export const verifierFunctions = [
  [
    "Regularizar construcciones",
    "Formalización de edificaciones terminadas para su reconocimiento legal.",
  ],
  [
    "Inscribir declaratorias",
    "Gestión completa de declaratorias de fábrica ante registros públicos.",
  ],
  [
    "Levantar cargas técnicas",
    "Eliminación de observaciones registrales que bloquean ventas o hipotecas.",
  ],
  [
    "Soluciones de parámetros",
    "Búsqueda de alternativas legales ante incumplimientos urbanísticos.",
  ],
  [
    "Construcciones sin licencia",
    "Regularización de obras ejecutadas sin autorización municipal previa.",
  ],
  [
    "Firma de expedientes",
    "Validación técnica de toda la documentación ante SUNARP.",
  ],
];
