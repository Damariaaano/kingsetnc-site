const nav = document.querySelector(".site-nav");
const toggle = document.querySelector(".menu-toggle");
const page = document.body.dataset.page;

if (toggle && nav) {
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
}

document.querySelectorAll(".site-nav a").forEach((link) => {
  const href = link.getAttribute("href");
  const map = {
    home: "index.html",
    mission: "mission.html",
    vision: "vision.html",
    "what-we-do": "what-we-do.html",
    "core-pillars": "core-pillars.html",
    "who-its-for": "who-its-for.html",
    "why-it-matters": "why-it-matters.html",
    program: "program.html",
    "program-details": "program-details.html",
    apply: "apply.html",
  };
  if (map[page] === href) link.classList.add("is-active");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 },
);

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const slideTabs = document.querySelectorAll("[data-slide-target]");
const slidePanels = document.querySelectorAll("[data-slide]");

if (slideTabs.length && slidePanels.length) {
  slideTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.slideTarget;
      slideTabs.forEach((item) => item.classList.remove("active"));
      slidePanels.forEach((panel) => panel.classList.remove("active"));
      tab.classList.add("active");
      const match = document.querySelector(`[data-slide="${target}"]`);
      if (match) match.classList.add("active");
    });
  });
}
