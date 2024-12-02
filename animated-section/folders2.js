// gsap.registerPlugin(ScrollTrigger);

// const purpleFolder = document.querySelector(".purple");
// const yellowFolder = document.querySelector(".yellow");
// const container = document.querySelector(".scroll-container");
// const totalScrollDistance = 8000;

// // Define y values based on screen width
// const yValueLarge = 800;
// const yValueMedium = 750;
// const yValueSmall = 700;

// const getYValue = () => {
//   if (window.innerWidth < 950) return yValueSmall;
//   if (window.innerWidth > 950 && window.innerWidth <= 1300) return yValueMedium;
//   return yValueLarge;
// };

// // Define scale values based on screen width
// const scaleLarge = 0.25;
// const scaleMedium = 0.15;
// const scaleSmall = 0.125;

// const getScaleValue = () => {
//   if (window.innerWidth < 768) return scaleSmall;
//   if (window.innerWidth >= 768 && window.innerWidth <= 1024) return scaleMedium;
//   return scaleLarge;
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
//         top: "-7%",
//       });
//       gsap.set(yellowFolder, {
//         x: 0,
//         y: 0,
//         rotation: -10,
//         scale: 1,
//         right: "58%",
//         top: "-7%",
//       });
//     },
//   },
// });

// // Step 1: Move images outward
// scrollTimeline.to(
//   purpleFolder,
//   {
//     x: -150,
//     y: 300,
//     rotation: 60,
//     scale: 0.4,
//     left: "15%",
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
//     scale: 0.4,
//     right: "15%",
//     ease: "power1.out",
//     duration: 16,
//   },
//   0
// );

// // Step 2: Bring images back to centered positions
// scrollTimeline.to(
//   purpleFolder,
//   {
//     x: -50,
//     y: getYValue(),
//     left: "42%",
//     rotation: 90,
//     top: "5%",
//     scale: getScaleValue(),
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
//     right: "42%",
//     rotation: -90,
//     top: "5%",
//     scale: getScaleValue(),
//     ease: "power1.out",
//     duration: 20,
//   },
//   "<"
// );

// // Re-run animation on resize to adjust dynamically
// window.addEventListener("resize", () => {
//   ScrollTrigger.getAll().forEach((t) => t.kill());
//   scrollTimeline.invalidate().restart();
// });

gsap.registerPlugin(ScrollTrigger);

const purpleFolder = document.querySelector(".purple");
const yellowFolder = document.querySelector(".yellow");
const container = document.querySelector(".scroll-container");
const totalScrollDistance = window.innerHeight * 5; // Adjusted for responsiveness

// Functions to get dynamic values based on viewport size
const getYValue = () => {
  if (window.innerWidth < 576) return window.innerHeight * 1.2;
  if (window.innerWidth < 768) return window.innerHeight * 1.5;
  if (window.innerWidth < 1024) return window.innerHeight * 1.5;
  return window.innerHeight * 1.5;
};

const getScaleValue = () => {
  if (window.innerWidth < 576) return 0.1;
  if (window.innerWidth < 768) return 0.15;
  if (window.innerWidth < 1024) return 0.2;
  return 0.25;
};

const getInitialFolderSize = () => {
  if (window.innerWidth < 576) return 200;
  if (window.innerWidth < 768) return 200;
  if (window.innerWidth < 1024) return 200;
  return 250;
};

// Set initial folder image sizes
document.querySelectorAll(".folder img").forEach((img) => {
  img.style.width = getInitialFolderSize() + "px";
});

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
        top: "-7%",
      });
      gsap.set(yellowFolder, {
        x: 0,
        y: 0,
        rotation: -10,
        scale: 1,
        right: "58%",
        top: "-7%",
      });
    },
  },
});

// Step 1: Move images outward
scrollTimeline.to(
  purpleFolder,
  {
    x: () => -window.innerWidth * 0.15,
    y: () => window.innerHeight * 0.3,
    rotation: 60,
    scale: () => getScaleValue() * 1.6,
    left: "15%",
    ease: "power1.out",
    duration: 1,
  },
  0
);

scrollTimeline.to(
  yellowFolder,
  {
    x: () => window.innerWidth * 0.2,
    y: () => window.innerHeight * 0.3,
    rotation: -60,
    scale: () => getScaleValue() * 1.6,
    right: "15%",
    ease: "power1.out",
    duration: 1,
  },
  0
);

// Step 2: Bring images back to centered positions and move them upwards
scrollTimeline.to(
  purpleFolder,
  {
    x: () => -window.innerWidth * 0.05,
    y: () => getYValue() - window.innerHeight * 0.5,
    left: "45%",
    rotation: 90,
    top: "5%",
    scale: getScaleValue(),
    ease: "power1.out",
    duration: 1,
  },
  "+=0.2"
);

scrollTimeline.to(
  yellowFolder,
  {
    x: () => window.innerWidth * 0.05,
    y: () => getYValue() - window.innerHeight * 0.5,
    right: "45%",
    rotation: -90,
    top: "5%",
    scale: getScaleValue(),
    ease: "power1.out",
    duration: 1,
  },
  "<"
);

// Re-run animation on resize to adjust dynamically
window.addEventListener("resize", () => {
  // Update folder sizes on resize
  document.querySelectorAll(".folder img").forEach((img) => {
    img.style.width = getInitialFolderSize() + "px";
  });

  // Refresh ScrollTrigger and animation values
  ScrollTrigger.getAll().forEach((t) => t.kill());
  scrollTimeline.invalidate().restart();
});
