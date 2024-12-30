document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Fade-up animation for "Our services" and "include" headings
    gsap.fromTo(
      ".our-services", // Target the first heading
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
          trigger: ".our-services", // Trigger animation when this heading is in view
          start: "top 85%", // Trigger when 85% of the element enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  
    gsap.fromTo(
      ".include", // Target the second heading
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
          trigger: ".include", // Trigger animation when this heading is in view
          start: "top 85%", // Trigger when 85% of the element enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  });
  