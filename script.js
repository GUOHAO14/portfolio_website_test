const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".site-nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    const expanded = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
}

const page = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");

navLinks.forEach((link) => {
  const href = link.getAttribute("href");
  if (
    (page === "home" && href === "index.html") ||
    (page === "projects" && href === "projects.html") ||
    (page === "achievements" && href === "achievements.html")
  ) {
    link.classList.add("is-current");
  }
});

const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length && projectCards.length) {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const selected = button.dataset.filter;

      filterButtons.forEach((chip) => chip.classList.remove("is-active"));
      button.classList.add("is-active");

      projectCards.forEach((card) => {
        const matches = selected === "all" || card.dataset.category === selected;
        card.dataset.hidden = String(!matches);
      });
    });
  });
}
