const navMenu = document.querySelector(".primary-nav");
const menuToggle = document.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("show-menu");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "بستن منو" : "باز کردن منو");
});
navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "باز کردن منو");
  });
});
