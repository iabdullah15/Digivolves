document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Center text animation
    gsap.fromTo(
      ".center-text",
      {
        opacity: 0, // Start invisible
        y: 20, // Start below its original position
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to its original position
        duration: 1, // Animation duration
        ease: "power2.out", // Smooth easing
        scrollTrigger: {
          trigger: ".center-text",
          start: "top 80%", // When the top of center-text is 80% down the viewport
          toggleActions: "play none none none", // Play animation when entering
        },
      }
    );
  });
  