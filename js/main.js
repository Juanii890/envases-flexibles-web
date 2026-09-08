// Comportamiento general del sitio: menú hamburguesa en mobile y cierre
// automático del menú al hacer click en un link (útil en pantallas chicas).

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".nav__toggle");
    const menu = document.querySelector(".nav__menu");

    if (!toggle || !menu) return;

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.toggle("nav__menu--open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    menu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menu.classList.remove("nav__menu--open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  });
})();
