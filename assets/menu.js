// Script para controlar el menú hamburguesa móvil en todas las páginas.

document.addEventListener('DOMContentLoaded', function () {
  // Selecciona los botones de menú hamburguesa y los menús móviles.
  const menuBtns = document.querySelectorAll('.hamburger');
  const mobileMenus = document.querySelectorAll('.mobile-menu');

  // Si no hay botones ni menús, salimos y no hacemos nada (no rompe otras páginas)
  if (menuBtns.length === 0 || mobileMenus.length === 0) return;

  menuBtns.forEach(function (menuBtn, i) {
    const mobileMenu = mobileMenus[i];

    // Función para abrir el menú.
    function openMenu() {
      if (mobileMenu) {
        mobileMenu.classList.add('active');
        document.body.classList.add('menu-open');
        menuBtn.setAttribute('aria-expanded', 'true');
      }
    }

    // Función para cerrar el menú.
    function closeMenu() {
      if (mobileMenu) {
        mobileMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    }

    // Mostrar u ocultar el menú al hacer clic en el botón.
    menuBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (mobileMenu.classList.contains('active')) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Cerrar el menú si se hace clic fuera.
    document.addEventListener('click', function (e) {
      if (mobileMenu.classList.contains('active')) {
        if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
          closeMenu();
        }
      }
    });

    // Cerrar con la tecla ESC.
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        closeMenu();
      }
    });
  });
});
