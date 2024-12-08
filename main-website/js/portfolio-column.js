// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the second column as you scroll
gsap.to(".portfolio-column-2", {
  y: 250, // Move it down during the scroll
  ease: "none", // Smooth, linear movement
  scrollTrigger: {
    trigger: ".portfolio-images-row", // Start animation when this section is reached
    start: "top center", // Adjust based on when you want the animation to start
    end: "bottom center", // Animation ends as you scroll further
    scrub: true, // Syncs the animation with the scroll position
  },
});
