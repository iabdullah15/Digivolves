// // GSAP Animation for seamless wave effect
// gsap.to(".wave-wrapper", {
//   xPercent: -50, // Move halfway to create the illusion of continuous motion
//   duration: 10, // Adjust this for speed
//   ease: "linear", // Linear motion for smooth and infinite animation
//   repeat: -1, // Infinite loop
// });

// Register GSAP
gsap.registerPlugin(ScrollTrigger);

// Seamless wave animation
gsap.to(".wave-wrapper", {
  xPercent: -50, // Move the wrapper left by 50%
  ease: "linear", // Smooth, continuous motion
  duration: 10, // Adjust for wave speed
  repeat: -1, // Infinite loop
  modifiers: {
    xPercent: gsap.utils.wrap(-50, 0) // Reset the animation seamlessly
  }
});
