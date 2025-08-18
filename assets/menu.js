// Menú hamburguesa móvil. busca el botón y menú de la página actual

document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (!menuBtn || !mobileMenu) return;

  function openMenu() {
    mobileMenu.classList.add('active');
    document.body.classList.add('menu-open');
    menuBtn.setAttribute('aria-expanded', 'true');
    menuBtn.focus();
  }

  function closeMenu() {
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.focus();
  }

  menuBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    if (mobileMenu.classList.contains('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar el menú si se hace clic fuera de él.
  document.addEventListener('click', function (e) {
    if (mobileMenu.classList.contains('active')) {
      if (!mobileMenu.contains(e.target) && e.target !== menuBtn) {
        closeMenu();
      }
    }
  });

  // Cerrar el menú con la tecla ESC.
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
      closeMenu();
    }
  });
});