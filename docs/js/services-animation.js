document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Fade-up animation for "Our services" and "include" headings
  gsap.fromTo(
    ".our-services",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".our-services",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".include",
    {
      opacity: 0,
      y: 30,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".include",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );

  // Loading from top-to-bottom animation for service images
  gsap.fromTo(
    ".service-img img",
    {
      webkitMaskImage: "linear-gradient(to bottom, black, black 0%, transparent 100%)", // Top is visible, bottom hidden
      maskImage: "linear-gradient(to bottom, black, black 0%, transparent 100%)", // For modern browsers
      opacity: 0, // Start invisible
    },
    {
      webkitMaskImage: "linear-gradient(to bottom, black, black 100%, transparent 0%)", // Bottom becomes visible
      maskImage: "linear-gradient(to bottom, black, black 100%, transparent 0%)", // For modern browsers
      opacity: 1, // Fade in
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".service-container",
        start: "top 85%",
        toggleActions: "play none none none",
      },
    }
  );


// Fade-in animation for service pills by row
document.querySelectorAll(".pill-container").forEach((row, index) => {
  gsap.fromTo(
    row.children, // Target pills within the current row
    {
      opacity: 0, // Start invisible
      y: 20, // Slightly below the original position
    },
    {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 0.8, // Animation duration
      ease: "power3.out", // Smooth easing
      stagger: 0.2, // Stagger each pill within the row
      scrollTrigger: {
        trigger: row, // Trigger animation for this row when it is in view
        start: "top 85%", // Start when top of the row is 85% visible
        toggleActions: "play none none none", // Play animation once
      },
    }
  );
});




});
