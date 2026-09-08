# Envases Flexibles S.A. — sitio web

Sitio institucional de una sola página para Envases Flexibles S.A., empresa
familiar de Rosario, Santa Fe, dedicada a la fabricación de bolsas camiseta
de polietileno.

Hecho con HTML, CSS y JavaScript vanilla, sin frameworks ni herramientas de
build.

## Estructura del proyecto

```
EF/
├── index.html          # Única página del sitio
├── css/
│   └── style.css       # Estilos (paleta, layout, responsive)
├── js/
│   ├── main.js          # Menú mobile
│   └── i18n.js          # Motor simple de traducción (ver abajo)
├── i18n/
│   └── es.js            # Textos del sitio en español
└── images/
    └── proceso-extrusion.jpg
```

### Por qué los textos están separados en `i18n/es.js`

En vez de escribir el texto directamente en el HTML, cada elemento de texto
tiene un atributo `data-i18n="clave"` y `js/i18n.js` lo completa al cargar la
página, buscando esa clave en `i18n/es.js`. Esto permite agregar una versión
en inglés en el futuro sin tocar el HTML: alcanza con crear `i18n/en.js` con
las mismas claves traducidas y armar un selector de idioma simple.

## Cómo verlo localmente

No hace falta instalar nada. Alcanza con abrir `index.html` en el navegador,
o bien levantar un servidor local simple (recomendado, para que las rutas
relativas de imágenes se comporten igual que en producción):

```bash
# Con Python instalado
python -m http.server 8000
```

Después abrir `http://localhost:8000` en el navegador.

## Cómo deployar gratis

El sitio es 100% estático, así que se puede publicar gratis en varias
plataformas. Recomendado: **Netlify** (o Vercel, el proceso es casi idéntico).

### Opción recomendada: Netlify conectado a GitHub

1. Subir este proyecto a un repositorio de GitHub (público).
2. Entrar a [netlify.com](https://netlify.com) e iniciar sesión con la cuenta
   de GitHub.
3. "Add new site" → "Import an existing project" → elegir el repositorio.
4. Como es un sitio estático sin build, dejar "Build command" vacío y
   "Publish directory" en `.` (la raíz del proyecto).
5. Deploy. Netlify da una URL gratuita tipo `nombre-al-azar.netlify.app` y
   sirve el sitio por HTTPS automáticamente.
6. Cada vez que se suba un cambio a la rama principal del repositorio,
   Netlify vuelve a publicar el sitio solo.

### Alternativa: GitHub Pages

1. En la configuración del repositorio de GitHub, ir a "Pages".
2. Elegir la rama principal y la carpeta raíz (`/`) como fuente.
3. GitHub publica el sitio en `https://usuario.github.io/nombre-repo/` con
   HTTPS automático.

## Buenas prácticas de seguridad aplicadas

Al ser un sitio estático sin login, sin base de datos y sin formulario
funcional, la superficie de riesgo es chica. Aun así:

- **HTTPS automático**: tanto Netlify, Vercel como GitHub Pages sirven el
  sitio por HTTPS sin configuración adicional. Nunca hay que aceptar
  publicar el sitio solo por HTTP.
- **Sin datos sensibles en el código**: el único dato de contacto público es
  el email de la empresa (ya pensado para ser público). No hay teléfonos,
  direcciones reales, ni ningún tipo de clave en el repositorio.
- **`.gitignore` desde el inicio**: para evitar subir por error archivos de
  configuración local, variables de entorno o carpetas de dependencias si
  en el futuro se agrega alguna herramienta.
- **Sin formulario de contacto funcional todavía**: se optó por mostrar los
  datos de contacto directamente (con `mailto:`) en vez de armar un
  formulario que reciba datos, para no tener que manejar ni almacenar
  información de terceros sin necesidad.
- **Si en el futuro se agrega un formulario con una API** (por ejemplo, para
  enviar el mensaje por email desde un servicio como Formspree, EmailJS o
  una función serverless propia): la clave de API **nunca** debe escribirse
  directamente en el HTML/JS del sitio, porque quedaría visible para
  cualquiera que abra el código fuente. Debe configurarse como **variable de
  entorno en el panel del hosting** (Netlify/Vercel tienen una sección
  "Environment variables") y usarse solo desde una función serverless que
  corra del lado del servidor, nunca desde JavaScript que se ejecuta en el
  navegador del visitante.

## Placeholders pendientes de completar

Ver el resumen al final de la conversación con el asistente, o buscar en el
código los siguientes marcadores:

- `[TELÉFONO A COMPLETAR]` y `[DIRECCIÓN A COMPLETAR]` en la sección de
  contacto (`index.html`).
- Logo real de la empresa (por ahora se usa el nombre como wordmark).
- Fotos propias de planta, máquinas y productos (por ahora hay una foto de
  stock en la sección "Proceso" y placeholders en "Productos").
- Confirmación de qué normativa específica sobre bolsas plásticas aplica
  (el sitio la menciona de forma genérica a propósito).
- Versión en inglés (la estructura ya está preparada, ver sección de i18n
  más arriba).
