document.querySelector(".bottom").innerHTML = document
  .querySelector(".bottom")
  .innerHTML.replace("SCRIPT_YEAR", new Date().getFullYear());
const nav = document.querySelector("header.nav");
const burger = nav.querySelector(".burger");

burger.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", isOpen);
});

// Ferme le menu au clic sur un lien
nav.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
const btn = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
  btn.classList.toggle("visible", window.scrollY > 300);
});

btn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// Affichage conditionnel Mentions légales & RGPD
document.addEventListener("DOMContentLoaded", function () {
  const mentionsSection = document.getElementById("mentions-legales");
  const mentionsLink = document.querySelector('a[href="#mentions-legales"]');
  const closeBtn = document.querySelector(".close-mentions");
  if (mentionsLink && mentionsSection && closeBtn) {
    mentionsLink.addEventListener("click", function (e) {
      e.preventDefault();
      mentionsSection.classList.remove("hidden");
      mentionsSection.scrollIntoView({ behavior: "smooth" });
    });
    closeBtn.addEventListener("click", function () {
      mentionsSection.classList.add("hidden");
    });
  }
});
