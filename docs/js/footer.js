document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate "Let us take care of"
    gsap.fromTo(
      ".top-heading",
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
  
    // Animate "your design needs"
    gsap.fromTo(
      ".bottom-heading",
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
  
    // Animate footer cards with stagger
    gsap.fromTo(
      ".footer-card", // Target all footer cards
      {
        opacity: 0, // Start invisible
        y: 50, // Start below
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 1, // Animation duration
        ease: "power3.out", // Smooth easing
        stagger: 0.2, // Delay between animations of each card
        scrollTrigger: {
          trigger: ".footer-card-row", // Trigger animation when the row is in view
          start: "top 85%", // Trigger when 85% of the row enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  
    // 1) Ensure transform-origin is set to the left for each footer-hr
    gsap.set(".footer-hr", { transformOrigin: "left center" });
  
    // 2) Animate each footer-hr individually when it scrolls into view
    gsap.utils.toArray(".footer-hr").forEach((hr) => {
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
  
    // Animate "footer-brand" first
    gsap.fromTo(
      ".footer-brand",
      {
        opacity: 0, // Start invisible
        y: 30, // Start slightly below
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 0.8, // Animation duration
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: ".footer-brand", // Trigger animation when this element is in view
          start: "top 85%", // Trigger when 85% of the element enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  
    // Animate "footer-q" and "footer-r"
    gsap.fromTo(
      [".footer-q", ".footer-r"],
      {
        opacity: 0, // Start invisible
        y: 30, // Start slightly below
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 0.8, // Animation duration
        ease: "power3.out", // Smooth easing
        stagger: 0.2, // Slight delay between animations
        scrollTrigger: {
          trigger: ".footer-q", // Trigger animation when the first element is in view
          start: "top 85%", // Trigger when 85% of the element enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  });
  