document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Fade-up animation for "Check out" and "Our Portfolio" headings
    gsap.fromTo(
      ".check-out", // Target the "Check out" heading
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
          trigger: ".portfolio-heading", // Trigger animation when the heading container is in view
          start: "top 85%", // Trigger when 85% of the container enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  
    gsap.fromTo(
      ".our-portfolio", // Target the "Our Portfolio" heading
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
          trigger: ".portfolio-heading", // Trigger animation when the heading container is in view
          start: "top 85%", // Trigger when 85% of the container enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  });
  