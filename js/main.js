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

    // Resalta en el menú el link de la sección que está visible en pantalla.
    // IntersectionObserver avisa cuando una sección entra/sale del viewport,
    // sin tener que escuchar el evento "scroll" a mano (más prolijo y liviano).
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = menu.querySelectorAll("a");

    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" } // considera "activa" la sección cuando cruza la franja media de la pantalla
    );

    sections.forEach((section) => observer.observe(section));
  });
})();
