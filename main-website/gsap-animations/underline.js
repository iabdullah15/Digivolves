const link = document.querySelector(".footer-row h3 a");
const underline = link.querySelector(".underline");

link.addEventListener("mouseenter", () => {
  gsap.to(underline, { width: "100%", duration: 0.3, ease: "linear" });
});

link.addEventListener("mouseleave", () => {
  gsap.to(underline, { width: "0%", duration: 0.3, ease: "linear" });
});
