// Textos del sitio en español.
// Cada clave se referencia en el HTML con data-i18n="clave.subclave".
// Para agregar inglés más adelante: crear i18n/en.js con las mismas claves
// y agregar un selector de idioma en js/i18n.js (ver comentario ahí).
const ES = {
  meta: {
    title: "Envases Flexibles S.A. — Fabricación de bolsas camiseta en Rosario",
    description:
      "Fabricamos bolsas camiseta de polietileno para distribuidoras, mayoristas y comercios. Empresa familiar de Rosario, Santa Fe.",
  },

  nav: {
    nosotros: "Nosotros",
    productos: "Productos",
    proceso: "Proceso",
    contacto: "Contacto",
  },

  hero: {
    titulo: "Envases Flexibles S.A.",
    subtitulo:
      "Más de 40 años fabricando bolsas de polietileno con calidad industrial, para distribuidoras y comercios de todo el país.",
    cta: "Contactanos",
  },

  nosotros: {
    titulo: "Nosotros",
    parrafo1:
      "Somos una empresa familiar de Rosario, Santa Fe, dedicada a la fabricación de envases flexibles de polietileno. Con más de 40 años de trayectoria en el rubro, acompañamos a distribuidoras, mayoristas y comercios que necesitan bolsas confiables para su operación diaria.",
    parrafo2:
      "Trabajamos con procesos controlados en cada etapa de producción y adaptamos nuestra operación a la normativa vigente sobre bolsas plásticas, siguiendo de cerca los cambios regulatorios en la materia.",
    parrafo3:
      "Nuestro compromiso es simple: producto de calidad, entregas confiables y una relación directa y cercana con cada cliente.",
  },

  productos: {
    titulo: "Productos",
    intro:
      "Fabricamos bolsas camiseta de polietileno en distintos tamaños, pensadas para uso comercial intensivo.",
    item1: {
      nombre: "Bolsa camiseta 30x40 cm",
      material: "Polietileno",
      destinatario: "Ideal para comercios chicos y kioscos",
    },
    item2: {
      nombre: "Bolsa camiseta 40x50 cm",
      material: "Polietileno",
      destinatario: "Ideal para comercios de cercanía y almacenes",
    },
    item3: {
      nombre: "Bolsa camiseta 45x60 cm",
      material: "Polietileno",
      destinatario: "Ideal para distribuidoras y mayoristas con mayor volumen",
    },
    proximamente:
      "Estamos ampliando nuestra línea de productos. Consultanos por tamaños o requerimientos especiales.",
  },

  proceso: {
    titulo: "Cómo lo hacemos",
    intro:
      "Nuestro proceso de fabricación sigue cuatro etapas principales, pensadas para asegurar calidad constante en cada lote.",
    paso1: {
      titulo: "Extrusión del film",
      descripcion:
        "Transformamos la materia prima de polietileno en un film continuo mediante una extrusora de film soplado.",
    },
    paso2: {
      titulo: "Impresión (opcional)",
      descripcion:
        "Cuando el cliente lo requiere, imprimimos el film con una impresora flexográfica antes de continuar con el proceso.",
    },
    paso3: {
      titulo: "Sellado y corte",
      descripcion:
        "El film se sella y se corta con precisión para dar forma final a cada bolsa camiseta.",
    },
    paso4: {
      titulo: "Control de calidad y empaquetado",
      descripcion:
        "Cada lote pasa por un control de calidad antes de ser empaquetado y preparado para su despacho.",
    },
  },

  contacto: {
    titulo: "Contacto",
    intro: "Escribinos y te respondemos a la brevedad.",
    emailLabel: "Email",
    telefonoLabel: "Teléfono",
    telefonoPlaceholder: "[TELÉFONO A COMPLETAR]",
    direccionLabel: "Dirección",
    direccionPlaceholder: "[DIRECCIÓN A COMPLETAR]",
    ubicacionLabel: "Ubicación",
    ubicacion: "Rosario, Santa Fe, Argentina",
    formTitulo: "Envianos un mensaje",
    formNombreLabel: "Nombre",
    formEmpresaLabel: "Empresa (opcional)",
    formEmailLabel: "Email",
    formTelefonoLabel: "Teléfono (opcional)",
    formMensajeLabel: "Mensaje",
    formEnviar: "Enviar",
    formEnviando: "Enviando...",
    formExito: "¡Gracias! Recibimos tu mensaje y te vamos a responder a la brevedad.",
    formError:
      "No pudimos enviar el mensaje. Probá de nuevo en un momento, o escribinos directo a envasesflexibles@gmail.com.",
  },

  footer: {
    texto: "Envases Flexibles S.A. — Rosario, Santa Fe, Argentina.",
  },
};
