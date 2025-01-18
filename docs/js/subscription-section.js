document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Animation for the top heading
  gsap.fromTo(
    ".top-heading", // Target the top heading
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
        trigger: ".top-heading", // Trigger animation when this heading is in view
        start: "top 90%", // Trigger when 90% of the element enters the viewport
        toggleActions: "play none none none", // Play animation once
      },
    }
  );

  // Animation for the bottom heading
  gsap.fromTo(
    ".bottom-heading", // Target the bottom heading
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
        trigger: ".bottom-heading", // Trigger animation when this heading is in view
        start: "top 90%", // Trigger when 90% of the element enters the viewport
        toggleActions: "play none none none", // Play animation once
      },
    }
  );

  // Animation for subscription price and type
  gsap.fromTo(
    ".subscription-price", // Target the subscription price
    {
      opacity: 0, // Start invisible
      y: 20, // Start slightly below
    },
    {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 0.8, // Animation duration
      ease: "power3.out", // Smooth easing
      scrollTrigger: {
        trigger: ".subscription-price", // Trigger animation when this element is in view
        start: "top 95%", // Trigger when 85% of the element enters the viewport
        toggleActions: "play none none none", // Play animation once
      },
    }
  );

  gsap.fromTo(
    ".subscription-type", // Target the subscription type
    {
      opacity: 0, // Start invisible
      y: 20, // Start slightly below
    },
    {
      opacity: 1, // Fade in
      y: 0, // Move to original position
      duration: 0.8, // Animation duration
      ease: "power3.out", // Smooth easing
      scrollTrigger: {
        trigger: ".subscription-type", // Trigger animation when this element is in view
        start: "top 85%", // Trigger when 85% of the element enters the viewport
        toggleActions: "play none none none", // Play animation once
      },
    }
  );

  // 1) Ensure transform-origin is set to the left for each black-hr
  gsap.set(".black-hr", { transformOrigin: "left center" });

  // 2) Animate each black-hr individually when it scrolls into view
  gsap.utils.toArray(".black-hr").forEach((hr) => {
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
