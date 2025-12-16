const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger?.setAttribute("aria-expanded", "false");
  });
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = Number(el.getAttribute("data-count"));
    let current = 0;
    const steps = 36;
    const inc = Math.max(1, Math.round(target / steps));

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { current = target; clearInterval(timer); }
      el.textContent = String(current);
    }, 24);
  });
}

let started = false;
const stats = document.querySelector(".stats");
if (stats) {
  const io = new IntersectionObserver((entries) => {
    if (!started && entries.some(e => e.isIntersecting)) {
      started = true;
      animateCounters();
    }
  }, { threshold: 0.2 });

  io.observe(stats);
}
