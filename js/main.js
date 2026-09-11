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

    // Envío del formulario de contacto (Netlify Forms) por AJAX, para que
    // la persona vea el resultado sin salir de la página. Si por algo falla
    // el fetch, no hacemos nada especial: el <form> ya tiene action="/gracias.html"
    // como respaldo, así que igual se envía de la forma tradicional.
    const form = document.querySelector('form[name="contacto"]');
    if (form) {
      const estado = form.querySelector(".form__estado");
      const boton = form.querySelector('button[type="submit"]');
      const textoEnviar = ES.contacto.formEnviar;

      form.addEventListener("submit", (event) => {
        event.preventDefault();

        boton.disabled = true;
        boton.textContent = ES.contacto.formEnviando;
        estado.textContent = "";
        estado.className = "form__estado";

        const datos = new URLSearchParams(new FormData(form)).toString();

        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: datos,
        })
          .then((response) => {
            if (!response.ok) throw new Error("Respuesta no exitosa");
            form.reset();
            estado.textContent = ES.contacto.formExito;
            estado.classList.add("form__estado--exito");
          })
          .catch(() => {
            estado.textContent = ES.contacto.formError;
            estado.classList.add("form__estado--error");
          })
          .finally(() => {
            boton.disabled = false;
            boton.textContent = textoEnviar;
          });
      });
    }
  });
})();
