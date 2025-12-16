// Menu mobile
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger?.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  burger.setAttribute("aria-expanded", String(open));
});

// Chiudi menu quando clicchi un link
nav?.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    burger?.setAttribute("aria-expanded", "false");
  });
});

// Anno nel footer
document.getElementById("year").textContent = String(new Date().getFullYear());

// Contatore numeri (effetto "10", "40+" ecc.)
function animateCounters() {
  document.querySelectorAll("[data-count]").forEach(el => {
    const target = Number(el.getAttribute("data-count"));
    let current = 0;
    const steps = 36;
    const inc = Math.max(1, Math.round(target / steps));

    const timer = setInterval(() => {
      current += inc;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      el.textContent = String(current);
    }, 24);
  });
}

let countersStarted = false;
const stats = document.querySelector(".stats");
const io = new IntersectionObserver((entries) => {
  if (!countersStarted && entries.some(e => e.isIntersecting)) {
    countersStarted = true;
    animateCounters();
  }
}, { threshold: 0.2 });

if (stats) io.observe(stats);

// Lightbox galleria
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll("[data-lightbox]").forEach(btn => {
  btn.addEventListener("click", () => {
    const src = btn.getAttribute("data-lightbox");
    lightboxImg.src = src;
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  });
});

function closeLightbox(){
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
}
lightboxClose?.addEventListener("click", closeLightbox);
lightbox?.addEventListener("click", (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Form demo (non invia email su GitHub Pages)
document.getElementById("contactForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form salvato! Per inviare email davvero, collega Formspree o simili.");
});
