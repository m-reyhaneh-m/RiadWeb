const navMenu = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");

if (navMenu && menuToggle) {
  function closeMenu() {
    navMenu.classList.remove("show-menu");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "باز کردن منو");
  }

  function toggleMenu() {
    const isOpen = navMenu.classList.toggle("show-menu");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "بستن منو" : "باز کردن منو");
  }

  menuToggle.addEventListener("click", toggleMenu);

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) {
      closeMenu();
    }
  });
}
