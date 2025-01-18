// document.addEventListener("DOMContentLoaded", (event) => {
//   gsap.registerPlugin(
//     Flip,
//     ScrollTrigger,
//     Observer,
//     ScrollToPlugin,
//     Draggable,
//     MotionPathPlugin,
//     EaselPlugin,
//     PixiPlugin,
//     TextPlugin,
//     RoughEase,
//     ExpoScaleEase,
//     SlowMo,
//     CustomEase
//   );

//   var tl = gsap.timeline();

//   // Animate the spans in the order you desire
//   tl.from(".animate-span", {
//     duration: 1.2,
//     y: 60,
//     opacity: 0,
//     ease: "power3.out",
//     stagger: {
//       amount: 1, // Time difference between each span animation
//       from: "end", // Start animating from the last element
//     },
//   })

//     // Then, start animating the navbar elements after the header text animation
//     .from(
//       ".navbar-container",
//       {
//         duration: 0.3,
//         y: 10,
//         opacity: 0.5,
//         ease: "power2.out",
//       },
//       "+=0.1"
//     ) // Delay slightly after header-text finishes

//     .from(
//       ".navbar-brand, .nav-item, .navbar-btn",
//       {
//         duration: 1,
//         y: 10,
//         opacity: 0,
//         ease: "power2.out",
//       },
//       "-=0.3"
//     ); // Slight overlap with previous animation
// });

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Create the GSAP timeline
  const tl = gsap.timeline();

  // Animate the header content first (spans in the heading)
  tl.from(".animate-span", {
    duration: 0.5, // Short duration
    y: 30, // Slide up effect
    opacity: 0, // Fade in
    ease: "power2.out",
    stagger: 0.2, // Slight delay between spans
  })

    // Animate the paragraph after the heading
    .from(
      ".mkt-text-container",
      {
        duration: 0.5,
        y: 20, // Slide up effect
        opacity: 0, // Fade in
        ease: "power2.out",
      },
      "-=0.2" // Overlap slightly with the previous animation
    )

    // Animate the "Learn More" button
    .from(
      ".learn-more-btn-container",
      {
        duration: 0.5,
        y: 20, // Slide up effect
        opacity: 0, // Fade in
        ease: "power2.out",
      },
      "-=0.2" // Overlap slightly with the previous animation
    )

    // Animate the navbar container next
    .from(
      ".navbar-container",
      {
        duration: 0.5,
        y: -20, // Slide down effect
        opacity: 0, // Fade in
        ease: "power2.out",
      },
      "+=0.25" // Small delay after the header content finishes
    )

    // Animate individual navbar items
    .from(
      ".navbar-brand, .nav-item, .navbar-btn",
      {
        duration: 0.5,
        y: 10, // Slide up effect
        opacity: 0, // Fade in
        ease: "power2.out",
        stagger: 0.1, // Slight delay between each navbar item
      },
      "-=0.2" // Overlap with navbar container animation
    );
});
