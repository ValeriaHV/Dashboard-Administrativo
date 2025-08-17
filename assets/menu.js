// Script para controlar el menú hamburguesa móvil en todas las páginas.

document.addEventListener("DOMContentLoaded", function () {
  // botón y un menú
  const menuBtn = document.querySelector(".menu-btn");
  const mobileMenu = document.querySelector(".mobile-menu");

  if (menuBtn && mobileMenu) {
    // Toggle al hacer clic en el botón
    menuBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      mobileMenu.classList.toggle("active");
      document.body.classList.toggle("menu-open");

      const isOpen = mobileMenu.classList.contains("active");
      menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });

    // Cerrar clic 
    document.addEventListener("click", function (e) {
      if (
        mobileMenu.classList.contains("active") &&
        !mobileMenu.contains(e.target) &&
        e.target !== menuBtn
      ) {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });

    // Cerrar con ESC
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && mobileMenu.classList.contains("active")) {
        mobileMenu.classList.remove("active");
        document.body.classList.remove("menu-open");
        menuBtn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
