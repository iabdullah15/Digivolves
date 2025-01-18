// document.addEventListener("DOMContentLoaded", () => {
//   gsap.registerPlugin(ScrollTrigger);

//   // Animate the work-process-heading
//   gsap.fromTo(
//     "#work-process-heading",
//     {
//       opacity: 0, // Start invisible
//       y: 50, // Start slightly below
//     },
//     {
//       opacity: 1, // Fade in
//       y: 0, // Move to original position
//       duration: 1, // Animation duration
//       ease: "power3.out", // Smooth easing
//       scrollTrigger: {
//         trigger: "#work-process-heading", // Trigger animation when this element is in view
//         start: "top 80%", // Trigger when 80% of the element enters the viewport
//         toggleActions: "play none none none", // Play animation once
//       },
//     }
//   );


























//   // Staggered animation for cards
//   gsap.fromTo(
//     ".proc-card", // Target all cards
//     {
//       opacity: 0, // Start invisible
//       y: 50, // Start below the viewport
//     },
//     {
//       opacity: 1, // Fade in
//       y: 0, // Move to original position
//       duration: 0.8, // Animation duration
//       ease: "power3.out", // Smooth easing
//       stagger: 0.4, // Delay between each card animation
//       scrollTrigger: {
//         trigger: ".proc-card-row", // Trigger animation when this row is in view
//         start: "top 80%", // Start when top of the row is 80% down the viewport
//         toggleActions: "play none none none", // Play animation once
//       },
//     }
//   );


// });
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animate the work-process-heading
    gsap.fromTo(
      "#work-process-heading",
      {
        opacity: 0, // Start invisible
        y: 50, // Start slightly below
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 1, // Animation duration
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: "#work-process-heading", // Trigger animation when this element is in view
          start: "top 80%", // Trigger when 80% of the element enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  
    // Staggered animation for cards
    gsap.fromTo(
      ".proc-card", // Target all cards
      {
        opacity: 0, // Start invisible
        y: 50, // Start below the viewport
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 0.8, // Animation duration
        ease: "power3.out", // Smooth easing
        stagger: 0.3, // Delay between each card animation
        scrollTrigger: {
          trigger: ".proc-card-row", // Trigger animation when this row is in view
          start: "top 80%", // Start when top of the row is 80% down the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  
    // Fade-up animation for work-about-us-container
    gsap.fromTo(
      ".work-about-us-container h2",
      {
        opacity: 0, // Start invisible
        y: 50, // Start slightly below
      },
      {
        opacity: 1, // Fade in
        y: 0, // Move to original position
        duration: 1, // Animation duration
        ease: "power3.out", // Smooth easing
        scrollTrigger: {
          trigger: ".work-about-us-container", // Trigger animation when this container is in view
          start: "top 90%", // Trigger when 90% of the element enters the viewport
          toggleActions: "play none none none", // Play animation once
        },
      }
    );
  });
  