gsap.registerPlugin(ScrollTrigger);

// Seamless wave animation
gsap.to(".wave-wrapper", {
  xPercent: -100, // Scroll wrapper by 50% of its width
  ease: "linear", // Smooth, continuous motion
  duration: 7, // Adjust for wave speed (in seconds)
  repeat: -1, // Infinite loop
  modifiers: {
    // Wraps the xPercent values so the animation snaps seamlessly
    xPercent: gsap.utils.wrap(-100, 0),
  },
});
