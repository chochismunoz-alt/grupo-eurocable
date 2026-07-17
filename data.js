/* ============================================================
   DATA.JS — Datos del grupo y de cada empresa.
   Para agregar una nueva empresa:
     1. Duplicar uno de los objetos de EMPRESAS y editar sus datos.
     2. Crear su página de detalle copiando eurocable.html
        y cambiando <body data-empresa="..."> por el nuevo id.
   El index se regenera solo — no hay que tocar HTML ni CSS.
   ============================================================ */

const HOLDING = {
  // ⚠️ PENDIENTE: confirmar el nombre real del holding.
  nombre: "Grupo Eurocable",
  // Archivo de la página principal (destino del botón "Volver").
  // Si se renombra ese archivo, actualizar solo esta línea.
  pagina: "index.html",
  eyebrow: "Grupo Empresarial",
  descripcion:
    "Confort, energía y protección. Un grupo con más de tres décadas de trayectoria, " +
    "presente en América Latina y Europa a través de sus empresas y representaciones.",
};

const EMPRESAS = [
  {
    id: "eurocable",
    nombre: "Eurocable",
    pagina: "eurocable.html",
    logo: "assets/logo-eurocable.png",
    icono: "radiante",
    acento: "#A8382F", // rojo profundo — único acento permitido en su página
    rubro: "Piso Radiante Eléctrico",
    tagline: "El calor que transforma cualquier espacio.",
    descripcionCorta:
      "Líder en piso radiante eléctrico en Latinoamérica. Más de 30 años, presencia en 5 países.",
    web: "https://www.eurocable.net/",

    // Datos confirmados en el sitio oficial:
    trayectoria: {
      titulo: "Trayectoria",
      cifras: [
        { valor: "+30", unidad: "años", detalle: "de experiencia en el mercado latinoamericano" },
        { valor: "+10.000", unidad: "instalaciones", detalle: "realizadas en la región" },
        { valor: "+5M", unidad: "m²", detalle: "de cable calefactor instalado" },
        { valor: "5", unidad: "países", detalle: "con oficinas y atención local" },
      ],
      nota: "Cable reforzado de fabricación propia y servicio integral completo.",
    },

    // ⚠️ PENDIENTE: misión, visión y año de fundación no están publicados
    // en eurocable.net — completar cuando el cliente los confirme.
    mision: null,
    vision: null,
    fundacion: null,

    paises: [
      { codigo: "ar", nombre: "Argentina", ciudad: "Buenos Aires", nota: "Oficina principal" },
      { codigo: "bo", nombre: "Bolivia", ciudad: "La Paz", nota: "Atención especializada" },
      { codigo: "br", nombre: "Brasil", ciudad: "São Paulo", nota: "Cobertura en todo Brasil" },
      { codigo: "py", nombre: "Paraguay", ciudad: "Asunción", nota: "Servicio local" },
      { codigo: "pe", nombre: "Perú", ciudad: "Lima", nota: "Representación local" },
    ],

    catalogo: [
      {
        titulo: "Piso radiante eléctrico",
        descripcion:
          "Sistema de calefacción por radiación que se integra al piso y emite calor uniforme en todo el ambiente. Regulación independiente por ambiente, sin mantenimiento y compatible con porcelanato, mármol, cerámica, vinílicos, madera y microcemento.",
        items: [
          "Hasta 30% de ahorro frente a otros sistemas",
          "Calor uniforme, sin corrientes de aire",
          "Recomendado por la OMS como calefacción saludable",
          "Instalación sencilla sobre el contrapiso",
        ],
      },
      {
        titulo: "Materiales de instalación",
        descripcion: "Componentes propios diseñados para una instalación segura y duradera.",
        items: [
          "Cable calefactor eléctrico reforzado, en distintas longitudes y potencias",
          "Termostato con pantalla táctil y control preciso de temperatura",
          "Regletas de fijación resistentes al calor y a la humedad",
          "Cajetín plástico de alto impacto para termostatos",
        ],
      },
      {
        titulo: "Otros productos",
        descripcion: "Confort eléctrico más allá del piso.",
        items: [
          "Calentador de toallas — cobre, negro, plateado y blanco, en 4 y 7 barras (Argentina, Bolivia y Paraguay)",
          "Calefactor de pared por convección forzada (Bolivia)",
          "Calefactor de exteriores para terrazas y patios (Bolivia)",
        ],
      },
    ],

    representaciones: [],
  },

  {
    id: "heatcable",
    nombre: "Heatcable",
    pagina: "heatcable.html",
    logo: "assets/logo-heatcable.png",
    icono: "hogar",
    acento: "#C2621F", // ámbar quemado — único acento permitido en su página
    rubro: "Climatización y Protección Eléctrica",
    tagline: "El calor de hogar que tu familia necesita.",
    descripcionCorta:
      "Piso radiante eléctrico en Uruguay. Representante de Indelec (pararrayos) y TBBT (seguridad).",
    web: "https://www.heatcable.net/",

    trayectoria: null,

    // ⚠️ PENDIENTE: misión, visión y año de fundación no están publicados
    // en heatcable.net — completar cuando el cliente los confirme.
    mision: null,
    vision: null,
    fundacion: null,

    paises: [
      {
        codigo: "uy",
        nombre: "Uruguay",
        ciudad: "Punta del Este",
        nota: "Calle San Francisco, Galería Open Mall, local 003",
      },
    ],

    catalogo: [
      {
        titulo: "Piso radiante eléctrico",
        descripcion:
          "Cable calefactor reforzado de baja temperatura con termostatos individuales por ambiente. Calor uniforme, saludable y sin mantenimiento, con hasta 30% de ahorro frente a otros sistemas.",
        items: [
          "Cable calefactor eléctrico HEATCABLE®",
          "Termostato táctil programable",
          "Regletas de fijación y cajetín plástico de instalación",
          "Calentador de toallas en 4 y 7 barras",
        ],
      },
      {
        titulo: "Pararrayos y protección contra rayos",
        descripcion:
          "Representación oficial de Indelec® en Uruguay: pararrayos Prevectron®, tecnología francesa líder mundial presente en más de 80 países.",
        items: [
          "Protección certificada a nivel internacional",
          "Industria, edificios públicos y gobierno",
          "Residencial premium e infraestructura crítica",
        ],
      },
      {
        titulo: "Seguridad perimetral inteligente",
        descripcion:
          "Representación oficial de TBBT, partner de SensoGuard (Israel): sensores sísmicos enterrados que crean perímetros de protección invisibles e inviolables.",
        items: [
          "Escudo Sísmico — cableado, inalámbrico, Pro y Residencial",
          "Sensores Minivib para superficies sensibles",
          "OutWatch — supervisión de alertas con inteligencia artificial",
        ],
      },
    ],

    representaciones: [
      {
        nombre: "Indelec®",
        icono: "rayo",
        rubro: "Protección contra rayos",
        descripcion:
          "Líder mundial francés con más de 60 años de experiencia. Su pararrayos Prevectron® protege instalaciones en más de 80 países.",
        web: "https://www.indelec.com/",
      },
      {
        nombre: "TBBT",
        icono: "escudo",
        rubro: "Seguridad perimetral",
        descripcion:
          "The Best Business Technology, partner de SensoGuard (Israel). Sensores sísmicos enterrados, cámaras térmicas e inteligencia artificial.",
        web: "https://the-bbt.com/",
      },
    ],
  },

  {
    id: "indelec",
    nombre: "Indelec",
    pagina: "indelec.html",
    logo: "assets/logo-indelec.svg",
    icono: "rayo",
    acento: "#2D5C94", // azul profundo — único acento permitido en su página
    rubro: "Protección contra el Rayo",
    tagline: "Soluciones de protección contra el rayo para sus proyectos.",
    descripcionCorta:
      "Protección contra el rayo desde 1955. Pararrayos Prevectron® en más de 80 países.",
    web: "https://indelec.com/es/",

    // Datos confirmados en el sitio oficial:
    trayectoria: {
      titulo: "Trayectoria",
      cifras: [
        { valor: "1955", unidad: "fundación", detalle: "empresa familiar e independiente nacida en Douai, Francia" },
        { valor: "+80", unidad: "países", detalle: "con presencia mediante filiales y partners especializados" },
        { valor: "280.000", unidad: "pararrayos", detalle: "instalados en todo el mundo" },
        { valor: "5%", unidad: "en I+D", detalle: "de la facturación dedicada a investigación y desarrollo" },
      ],
      nota: "Alrededor de 300 colaboradores y 20 sedes en el mundo. Miembro de la French Fab.",
    },

    // ⚠️ PENDIENTE: misión y visión no están publicadas en indelec.com —
    // completar cuando el cliente las confirme.
    mision: null,
    vision: null,
    fundacion: 1955,

    paises: [
      { codigo: "fr", nombre: "Francia", ciudad: "Douai", nota: "Sede mundial y fábrica" },
      { codigo: "pt", nombre: "Portugal", ciudad: "Filial propia", nota: "" },
      { codigo: "br", nombre: "Brasil", ciudad: "Filial propia", nota: "" },
      { codigo: "world", nombre: "Red mundial", ciudad: "+80 países", nota: "Filiales y partners especializados" },
    ],

    catalogo: [
      {
        titulo: "Pararrayos Prevectron®",
        descripcion:
          "Pararrayos con dispositivo de cebado (Early Streamer Emission), elegidos por empresas, industrias y gobiernos para proteger sus instalaciones más importantes.",
        items: [
          "Prevectron® 3 — pararrayos ESE de última generación",
          "Prevectron® 3 Connect — supervisión remota del sistema",
          "Contadores de impactos de rayo",
          "Mástiles, conductores y accesorios",
        ],
      },
      {
        titulo: "Instalación y puesta a tierra",
        descripcion: "Componentes certificados para una protección integral de la instalación.",
        items: [
          "Sistemas de puesta a tierra y tomas de tierra profundas",
          "Protección contra sobretensiones",
          "Balizamiento aéreo",
        ],
      },
      {
        titulo: "Servicios",
        descripcion: "Acompañamiento completo durante toda la vida útil del sistema.",
        items: [
          "Instalación, inspección y mantenimiento",
          "Trabajos en altura y seguridad en altura",
          "Soluciones de movilidad eléctrica",
        ],
      },
    ],

    representaciones: [],
  },

  {
    id: "tbbt",
    nombre: "TBBT",
    pagina: "tbbt.html",
    logo: "assets/logo-tbbt.png",
    icono: "escudo",
    acento: "#2B3F63", // azul marino — único acento permitido en su página
    rubro: "Seguridad Perimetral Inteligente",
    tagline: "Soluciones de seguridad innovadoras con la última tecnología de origen israelí.",
    descripcionCorta:
      "Seguridad perimetral de origen israelí: sensores sísmicos, cámaras e inteligencia artificial.",
    web: "https://www.the-bbt.com/",

    trayectoria: null,

    // Misión y visión confirmadas — publicadas en the-bbt.com/compañía:
    mision:
      "Facilitamos la mejora de la eficiencia empresarial al guiar a las organizaciones en la adopción de las más recientes tecnologías de seguridad.",
    vision: "Liderar el mercado de seguridad electrónica en Latinoamérica.",
    // ⚠️ PENDIENTE: año de fundación no publicado en el sitio.
    fundacion: null,

    paises: [
      { codigo: "ar", nombre: "Argentina", ciudad: "Buenos Aires y Córdoba", nota: "Oficinas propias" },
      { codigo: "uy", nombre: "Uruguay", ciudad: "Punta del Este", nota: "Galería Open Mall, local 003" },
      { codigo: "cl", nombre: "Chile", ciudad: "Buin", nota: "Oficina local" },
    ],

    catalogo: [
      {
        titulo: "Escudos sísmicos",
        descripcion:
          "Sensores sísmicos enterrados de SensoGuard que crean perímetros de seguridad invisibles e inviolables, sin riesgo de ser desactivados.",
        items: [
          "Escudo Sísmico — sistema ilimitado de sensores enterrados",
          "Escudo Sísmico Pro — con cámaras e inteligencia artificial",
          "Escudo Sísmico Residencial — para viviendas y barrios privados",
          "Escudo Sísmico Inalámbrico — sensores sin cableado",
        ],
      },
      {
        titulo: "Sensores especializados",
        descripcion: "Detección precisa para cualquier tipo de superficie e instalación crítica.",
        items: [
          "InvisiFence Plus — sensores sísmicos digitales enterrados",
          "Sensores Minivib — detección de minivibraciones, pérdidas de líquidos y microgrietas",
          "TACT-PIR — sensor térmico de movimiento de alto rendimiento",
          "TACT-RADAR — sensor de movimiento compacto y discreto",
        ],
      },
      {
        titulo: "Software y supervisión",
        descripcion: "Plataformas de configuración, comando y operación de campo.",
        items: [
          "PC-Suite, PC-CCS y PC-Design",
          "Aplicaciones móviles SG-Patrol, SG-Hunter y CCS-Client",
          "OutWatch — supervisión de alarmas basada en inteligencia artificial",
        ],
      },
    ],

    representaciones: [],
  },

  {
    id: "heathome",
    nombre: "Heathome",
    pagina: "heathome.html",
    logo: "assets/logo-heathome.png",
    icono: "carrito",
    acento: "#AD4A1E", // terracota quemada — único acento permitido en su página
    rubro: "Calefacción Eléctrica — Venta Online",
    tagline: "Calor de hogar: kits de piso radiante eléctrico con compra online y envío a domicilio.",
    descripcionCorta:
      "La tienda online del grupo: kits de piso radiante con envíos en Argentina, Brasil y Uruguay.",
    web: "https://heathome.net/",

    // ⚠️ PENDIENTE: el sitio muestra contadores de trayectoria pero sin
    // valores verificables — completar cuando el cliente confirme cifras.
    trayectoria: null,

    // ⚠️ PENDIENTE: misión, visión y año de fundación no publicados.
    mision: null,
    vision: null,
    fundacion: null,

    paises: [
      { codigo: "ar", nombre: "Argentina", ciudad: "Buenos Aires", nota: "Fraga 483, CABA — base de operaciones" },
      { codigo: "br", nombre: "Brasil", ciudad: "Venta online", nota: "Atención y envíos a domicilio" },
      { codigo: "uy", nombre: "Uruguay", ciudad: "Venta online", nota: "Atención y envíos a domicilio" },
    ],

    catalogo: [
      {
        titulo: "Cables calefactores",
        descripcion:
          "Cable calefactor propio que irradia calor a través del suelo, calentando el ambiente de manera uniforme.",
        items: [
          "Cable de 360 W para 3,5 m² — ideal para baños y espacios pequeños",
          "Alta eficiencia energética",
          "Instalación sencilla",
        ],
      },
      {
        titulo: "Kits completos",
        descripcion: "Todo lo necesario en una sola caja: cable, termostato y accesorios de instalación.",
        items: [
          "Kit 3,5 m² con termostato WiFi — control desde el móvil",
          "Kit 13 m² con termostato digital programable — para espacios amplios",
          "Programación avanzada en ambos modelos",
        ],
      },
      {
        titulo: "Compra online",
        descripcion: "Proceso simple: elegís el producto, dejás tu ubicación y el envío sale en camino.",
        items: [
          "Tienda oficial en Mercado Libre",
          "Pagos protegidos con Mercado Pago",
          "Envíos a domicilio en todos los pedidos",
          "Soporte técnico todos los días",
        ],
      },
    ],

    representaciones: [],
  },

  {
    id: "solerpalau",
    nombre: "Soler & Palau",
    pagina: "solerpalau.html",
    logo: "assets/logo-solerpalau.svg",
    icono: "ventilador",
    acento: "#9E1B1B", // rojo carmín — único acento permitido en su página
    rubro: "Sistemas de Ventilación",
    tagline: "Queremos un mundo donde la calidad del aire interior esté al alcance de todas las personas.",
    descripcionCorta:
      "Líder mundial en ventilación y calidad de aire interior. Más de 70 años y fábricas en tres continentes.",
    web: "https://www.solerpalau.com/es-es/",

    // Datos confirmados en el sitio oficial:
    trayectoria: {
      titulo: "Trayectoria",
      cifras: [
        { valor: "+70", unidad: "años", detalle: "de experiencia en diseño y producción de ventilación" },
        { valor: "5M", unidad: "unidades/año", detalle: "de ventilación producidas en sus fábricas" },
        { valor: "7 s", unidad: "ritmo mundial", detalle: "cada 7 segundos se instala un producto S&P en algún lugar del mundo" },
        { valor: "+60", unidad: "ingenieros", detalle: "y técnicos dedicados a I+D" },
      ],
      nota:
        "Sede central en Parets del Vallès (España) y fábricas en Europa, América y Asia. " +
        "Tres pilares: Install-friendly, Planet-friendly y Breathe&Relax.",
    },

    // ⚠️ PENDIENTE: misión/visión formales y año de fundación exacto
    // no publicados en el sitio (solo "+70 años").
    mision: null,
    vision: null,
    fundacion: null,

    paises: [
      { codigo: "es", nombre: "España", ciudad: "Parets del Vallès", nota: "Sede central; fábricas en Ripoll, Sils, Torelló y Madrid" },
      { codigo: "world", nombre: "Red mundial", ciudad: "3 continentes", nota: "Fábricas en Europa, América y Asia" },
    ],

    catalogo: [
      {
        titulo: "Ventilación residencial",
        descripcion: "Calidad de aire interior para viviendas unifamiliares y multifamiliares.",
        items: [
          "Ventilación mecánica controlada (VMC)",
          "Extractores de baño y cocina",
          "Ventilación inteligente conectada",
        ],
      },
      {
        titulo: "Ventilación comercial e industrial",
        descripcion: "Soluciones de gran caudal para edificios, industria e infraestructura.",
        items: [
          "Recuperadores de calor de alta eficiencia",
          "Unidades de tratamiento de aire (UTA)",
          "Ventiladores industriales y jet fans para parkings",
          "Ventilación de protección contra incendios",
        ],
      },
      {
        titulo: "Recursos para profesionales",
        descripcion: "Herramientas y formación para prescriptores e instaladores.",
        items: [
          "Software de selección EasyVent",
          "Catálogos, hojas técnicas y normativas",
          "S&P Academy — formación técnica",
          "Accesorios: filtros, compuertas y controles",
        ],
      },
    ],

    representaciones: [],
  },
];

/* ------------------------------------------------------------
   PALETA — colores de escena derivados del acento de una empresa.
   La usan el home y las páginas de detalle para teñir el fondo
   degradado y la tarjeta oscura con el color de cada empresa.
   ------------------------------------------------------------ */
function PALETA(hexAcento) {
  var r = parseInt(hexAcento.slice(1, 3), 16) / 255;
  var g = parseInt(hexAcento.slice(3, 5), 16) / 255;
  var b = parseInt(hexAcento.slice(5, 7), 16) / 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h = 0, s = 0, l = (max + min) / 2;
  if (max !== min) {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
  }
  h = Math.round(h);
  s = Math.round(s * 100);
  var sat = Math.min(Math.max(s * 1.25, 62), 92);
  return {
    gradA: "hsl(" + h + " " + Math.round(sat) + "% 55%)",
    gradB: "hsl(" + ((h + 18) % 360) + " " + Math.round(Math.min(sat + 6, 96)) + "% 46%)",
    gradC: "hsl(" + ((h + 348) % 360) + " " + Math.round(sat) + "% 63%)",
    card: "hsl(" + h + " " + Math.round(Math.max(s * 0.5, 22)) + "% 26%)",
    deep: "hsl(" + h + " " + Math.round(Math.max(s * 0.55, 24)) + "% 15%)"
  };
}

/* ------------------------------------------------------------
   Íconos lineales (stroke 1.4, sin relleno) — guiño al rubro real.
   ------------------------------------------------------------ */
const ICONOS = {
  radiante: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M6 36h36"/><path d="M6 41h36"/>
      <path d="M10 36v-6a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2a4 4 0 0 0 4 4"/>
      <path d="M16 27c0-9 3-13 8-19"/>
      <path d="M26 27c0-7 2-10 6-15"/>
      <path d="M36 27c0-5 1.5-7.5 4-11"/>
    </svg>`,
  hogar: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M8 22 24 8l16 14"/>
      <path d="M12 20v20h24V20"/>
      <path d="M19 34c0-4 1.2-5.6 3.2-8"/>
      <path d="M25 34c0-3 .9-4.4 2.6-6.4"/>
    </svg>`,
  rayo: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M26 6 14 28h8l-4 14 16-24h-9l5-12h-4z"/>
    </svg>`,
  escudo: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M24 6 8 12v12c0 10 7 16 16 20 9-4 16-10 16-20V12L24 6z"/>
      <circle cx="24" cy="24" r="3"/>
      <path d="M17 24a7 7 0 0 1 14 0"/>
    </svg>`,
  carrito: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M7 11h5l4.4 19H36l4-14H14"/>
      <circle cx="19" cy="37" r="2.6"/>
      <circle cx="33" cy="37" r="2.6"/>
      <path d="M24 21c0-3 1-4.5 2.6-6.5"/>
      <path d="M29 21c0-2.2.7-3.3 1.9-4.8"/>
    </svg>`,
  ventilador: `
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="24" cy="24" r="3.2"/>
      <path d="M24 20.8c0-7 3.5-11 10.5-11.8.8 6.6-3.5 11.3-8.6 11.8"/>
      <path d="M24 20.8c0-7 3.5-11 10.5-11.8.8 6.6-3.5 11.3-8.6 11.8" transform="rotate(120 24 24)"/>
      <path d="M24 20.8c0-7 3.5-11 10.5-11.8.8 6.6-3.5 11.3-8.6 11.8" transform="rotate(240 24 24)"/>
    </svg>`,
};

/* ------------------------------------------------------------
   Banderas pequeñas (SVG simplificado, 20×14).
   ------------------------------------------------------------ */
const BANDERAS = {
  ar: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#74ACDF"/><rect y="4.7" width="20" height="4.6" fill="#fff"/><circle cx="10" cy="7" r="1.5" fill="#F6B40E"/></svg>`,
  bo: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#D52B1E"/><rect y="4.7" width="20" height="9.3" fill="#F9E300"/><path d="M0 9.3h20V14H0z" fill="#007934"/></svg>`,
  br: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#009C3B"/><path d="M10 2 18 7l-8 5-8-5z" fill="#FFDF00"/><circle cx="10" cy="7" r="2.4" fill="#002776"/></svg>`,
  py: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#D52B1E"/><rect y="4.7" width="20" height="4.6" fill="#fff"/><path d="M0 9.3h20V14H0z" fill="#0038A8"/><circle cx="10" cy="7" r="1.3" fill="none" stroke="#8A8D91" stroke-width=".6"/></svg>`,
  pe: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#D91023"/><rect x="6.7" width="6.6" height="14" fill="#fff"/></svg>`,
  uy: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#fff"/><g fill="#0038A8"><rect y="1.8" width="20" height="1.7"/><rect y="5.2" width="20" height="1.7"/><rect y="8.6" width="20" height="1.7"/><rect y="12" width="20" height="1.6"/></g><rect width="9" height="7" fill="#fff"/><circle cx="4.5" cy="3.5" r="1.8" fill="#FCD116"/></svg>`,
  fr: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#fff"/><path d="M0 2.5A2.5 2.5 0 0 1 2.5 0h4.2v14H2.5A2.5 2.5 0 0 1 0 11.5z" fill="#0055A4"/><path d="M13.3 0h4.2A2.5 2.5 0 0 1 20 2.5v9a2.5 2.5 0 0 1-2.5 2.5h-4.2z" fill="#EF4135"/></svg>`,
  pt: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#FF0000"/><path d="M0 2.5A2.5 2.5 0 0 1 2.5 0H8v14H2.5A2.5 2.5 0 0 1 0 11.5z" fill="#006600"/><circle cx="8" cy="7" r="2.2" fill="#FFDF00"/></svg>`,
  cl: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#fff"/><path d="M0 7h20v4.5a2.5 2.5 0 0 1-2.5 2.5h-15A2.5 2.5 0 0 1 0 11.5z" fill="#D52B1E"/><path d="M0 2.5A2.5 2.5 0 0 1 2.5 0H7v7H0z" fill="#0039A6"/><path d="m3.5 2 .5 1.4h1.4l-1.1.9.4 1.4-1.2-.8-1.2.8.4-1.4-1.1-.9h1.4z" fill="#fff"/></svg>`,
  world: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="none" stroke="#8A8D91" stroke-width="1"/><circle cx="10" cy="7" r="4.6" fill="none" stroke="#8A8D91" stroke-width="1"/><ellipse cx="10" cy="7" rx="2" ry="4.6" fill="none" stroke="#8A8D91" stroke-width="1"/><path d="M5.4 7h9.2" stroke="#8A8D91" stroke-width="1"/></svg>`,
  es: `<svg viewBox="0 0 20 14" aria-hidden="true"><rect width="20" height="14" rx="2.5" fill="#AA151B"/><rect y="3.7" width="20" height="6.6" fill="#F1BF00"/></svg>`,
};
