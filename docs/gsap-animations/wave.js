gsap.registerPlugin(ScrollTrigger);

// Seamless wave animation
gsap.to(".wave-wrapper", {
  xPercent: -50, // Move the wrapper left by 50%
  ease: "linear", // Smooth, continuous motion
  duration: 5, // Adjust for wave speed
  repeat: -1, // Infinite loop
  modifiers: {
    xPercent: gsap.utils.wrap(-50, 0) // Reset the animation seamlessly
  }
});
