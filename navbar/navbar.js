document.addEventListener("DOMContentLoaded", (event) => {
  gsap.registerPlugin(
    Flip,
    ScrollTrigger,
    Observer,
    ScrollToPlugin,
    Draggable,
    MotionPathPlugin,
    EaselPlugin,
    PixiPlugin,
    TextPlugin,
    RoughEase,
    ExpoScaleEase,
    SlowMo,
    CustomEase
  );

  var tl = gsap.timeline();

  // Animate the spans in the order you desire
  tl.from(".animate-span", {
    duration: 1.2,
    y: 60,
    opacity: 0,
    ease: "power3.out",
    stagger: {
      amount: 1, // Time difference between each span animation
      from: "end", // Start animating from the last element
    },
  })

    // Then, start animating the navbar elements after the header text animation
    .from(
      ".navbar-container",
      {
        duration: 0.3,
        y: 10,
        opacity: 0.5,
        ease: "power2.out",
      },
      "+=0.1"
    ) // Delay slightly after header-text finishes

    .from(
      ".navbar-brand, .nav-item, .navbar-btn",
      {
        duration: 1,
        y: 10,
        opacity: 0,
        ease: "power2.out",
      },
      "-=0.3"
    ); // Slight overlap with previous animation
});
