document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade-in animation for FAQs heading
  gsap.fromTo(
    ".faqs-heading", // Target the FAQs heading
    {
      opacity: 0, // Start invisible
      y: 30, // Start slightly below
    },
    {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 1, // Animation duration
      ease: "power3.out", // Smooth easing
      scrollTrigger: {
        trigger: ".faqs-heading", // Trigger animation when this heading is in view
        start: "top 85%", // Trigger when 85% of the element enters the viewport
        toggleActions: "play none none none", // Play animation once
      },
    }
  );

  // 1) Ensure transform-origin is set to the left for each black-hr
  gsap.set(".accordion-hr", { transformOrigin: "left center" });

  // 2) Animate each black-hr individually when it scrolls into view
  gsap.utils.toArray(".accordion-hr").forEach((hr) => {
    gsap.fromTo(
      hr,
      { scaleX: 0 }, // start collapsed
      {
        scaleX: 1, // full width
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hr,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });
});
