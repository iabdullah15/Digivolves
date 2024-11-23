// // Register GSAP's ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const purpleFolder = document.querySelector(".purple");
// const yellowFolder = document.querySelector(".yellow");
// const container = document.querySelector(".scroll-container");
// const totalScrollDistance = 8000;

// // Define y values based on screen width
// const yValueLarge = 800;
// const yValueMedium = 525;
// const yValueSmall = 525;

// const getYValue = () => {
// //   if (window.innerWidth <= 768) return yValueSmall;
//   if (window.innerWidth < 950) return yValueMedium;
//   if (window.innerWidth > 950 && window.innerWidth <= 1300) return 500;
//   return yValueLarge;
// };

// // GSAP timeline for animation sequence
// const scrollTimeline = gsap.timeline({
//   scrollTrigger: {
//     trigger: container,
//     start: "top top",
//     end: "+=" + totalScrollDistance,
//     pin: container,
//     scrub: true,
//     anticipatePin: 1,
//     onEnter: () => {
//       // Reset folders to initial states in case of mid-scroll refresh
//       gsap.set(purpleFolder, {
//         x: 0,
//         y: 0,
//         rotation: 10,
//         scale: 1,
//         left: "20%",
//         top: "5%",
//         filter: "blur(0px)",
//       });
//       gsap.set(yellowFolder, {
//         x: 0,
//         y: 0,
//         rotation: -10,
//         scale: 1,
//         right: "20%",
//         top: "5%",
//         filter: "blur(0px)",
//       });
//     },
//   },
// });

// // Step 1: Move images outward with blur effect
// scrollTimeline.to(
//   purpleFolder,
//   {
//     x: -150,
//     y: 300,
//     rotation: 60,
//     scale: 0.6,
//     left: "15%",
//     filter: "blur(20px)",
//     ease: "power1.out",
//     duration: 16,
//   },
//   0
// );

// scrollTimeline.to(
//   yellowFolder,
//   {
//     x: 200,
//     y: 300,
//     rotation: -60,
//     scale: 0.6,
//     right: "15%",
//     filter: "blur(20px)",
//     ease: "power1.out",
//     duration: 16,
//   },
//   0
// );

// // Step 2: Bring images back to centered positions with dynamic Y value
// scrollTimeline.to(
//   purpleFolder,
//   {
//     x: -50,
//     y: getYValue(),
//     left: "42%", // Center alignment without overlap
//     rotation: 90,
//     top: "5%",
//     filter: "blur(0px)",
//     ease: "power1.out",
//     duration: 20,
//   },
//   "+=2"
// );

// scrollTimeline.to(
//   yellowFolder,
//   {
//     x: 50,
//     y: getYValue(),
//     right: "42%", // Center alignment without overlap
//     rotation: -90,
//     top: "5%",
//     filter: "blur(0px)",
//     ease: "power1.out",
//     duration: 20,
//   },
//   "<"
// );

// // Re-run animation on resize to adjust Y value dynamically
// window.addEventListener("resize", () => {
//   ScrollTrigger.getAll().forEach((t) => t.kill());
//   scrollTimeline.invalidate().restart();
// });

// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const purpleFolder = document.querySelector(".purple");
const yellowFolder = document.querySelector(".yellow");
const container = document.querySelector(".scroll-container");
const totalScrollDistance = 8000;

// Define y values based on screen width
const yValueLarge = 800;
const yValueMedium = 750;
const yValueSmall = 700;

const getYValue = () => {
  if (window.innerWidth < 950) return yValueSmall;
  if (window.innerWidth > 950 && window.innerWidth <= 1300) return yValueMedium;
  return yValueLarge;
};

// Define scale values based on screen width
const scaleLarge = 0.4;
const scaleMedium = 0.3;
const scaleSmall = 0.2;

const getScaleValue = () => {
  if (window.innerWidth < 768) return scaleSmall;
  if (window.innerWidth >= 768 && window.innerWidth <= 1024) return scaleMedium;
  return scaleLarge;
};

// GSAP timeline for animation sequence
const scrollTimeline = gsap.timeline({
  scrollTrigger: {
    trigger: container,
    start: "top top",
    end: "+=" + totalScrollDistance,
    pin: container,
    scrub: true,
    anticipatePin: 1,
    onEnter: () => {
      // Reset folders to initial states in case of mid-scroll refresh
      gsap.set(purpleFolder, {
        x: 0,
        y: 0,
        rotation: 10,
        scale: 1,
        left: "20%",
        top: "5%",
        filter: "blur(0px)",
      });
      gsap.set(yellowFolder, {
        x: 0,
        y: 0,
        rotation: -10,
        scale: 1,
        right: "20%",
        top: "5%",
        filter: "blur(0px)",
      });
    },
  },
});

// Step 1: Move images outward with blur effect
scrollTimeline.to(
  purpleFolder,
  {
    x: -150,
    y: 300,
    rotation: 60,
    scale: 0.4, // Shrink at the outward stage
    left: "15%",
    filter: "blur(20px)",
    ease: "power1.out",
    duration: 16,
  },
  0
);

scrollTimeline.to(
  yellowFolder,
  {
    x: 200,
    y: 300,
    rotation: -60,
    scale: 0.4, // Shrink at the outward stage
    right: "15%",
    filter: "blur(20px)",
    ease: "power1.out",
    duration: 16,
  },
  0
);

// Step 2: Bring images back to centered positions with dynamic Y value and scale
scrollTimeline.to(
  purpleFolder,
  {
    x: -50,
    y: getYValue(),
    left: "42%", // Center alignment without overlap
    rotation: 90,
    top: "5%",
    scale: getScaleValue(), // Dynamic end size
    filter: "blur(0px)",
    ease: "power1.out",
    duration: 20,
  },
  "+=2"
);

scrollTimeline.to(
  yellowFolder,
  {
    x: 50,
    y: getYValue(),
    right: "42%", // Center alignment without overlap
    rotation: -90,
    top: "5%",
    scale: getScaleValue(), // Dynamic end size
    filter: "blur(0px)",
    ease: "power1.out",
    duration: 20,
  },
  "<"
);

// Re-run animation on resize to adjust Y value and scale dynamically
window.addEventListener("resize", () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  scrollTimeline.invalidate().restart();
});
