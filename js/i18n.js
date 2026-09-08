// Aplica los textos del idioma activo a los elementos marcados con data-i18n.
//
// Cómo funciona:
// - Cada texto vive en un objeto plano (por ahora solo i18n/es.js -> variable ES).
// - Las claves anidadas se escriben con puntos: "productos.item1.nombre".
// - En el HTML, data-i18n="productos.item1.nombre" hace que este script
//   busque esa clave en el diccionario y reemplace el contenido del elemento.
// - data-i18n-attr="href:mailto" (opcional) permite traducir un atributo en
//   vez del texto interno, si algún día hace falta.
//
// Para agregar inglés más adelante:
// 1. Crear i18n/en.js con la misma forma que es.js pero en inglés (variable EN).
// 2. Incluir <script src="i18n/en.js"></script> en index.html antes de i18n.js.
// 3. Definir un diccionario por idioma (ej: const DICTIONARIES = { es: ES, en: EN })
//    y elegir cuál usar según un selector de idioma o el idioma del navegador.
// No hace falta nada más complejo para un sitio estático de este tamaño.

(function () {
  const dictionary = ES; // Único idioma disponible por ahora.

  function getValue(path) {
    return path
      .split(".")
      .reduce((obj, key) => (obj && obj[key] !== undefined ? obj[key] : null), dictionary);
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const value = getValue(el.getAttribute("data-i18n"));
      if (value === null) {
        console.warn(`[i18n] No se encontró texto para la clave: ${el.getAttribute("data-i18n")}`);
        return;
      }
      el.textContent = value;
    });

    document.title = getValue("meta.title") || document.title;
  }

  document.addEventListener("DOMContentLoaded", applyTranslations);
})();
