// // Register GSAP's ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const purpleFolder = document.querySelector('.purple');
// const yellowFolder = document.querySelector('.yellow');
// const container = document.querySelector('.scroll-container');
// const totalScrollDistance = 8000; // Slow down the animation further

// // GSAP timeline for animation sequence
// const scrollTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=" + totalScrollDistance,
//         pin: container,
//         scrub: true,
//         anticipatePin: 1,
//         onEnter: () => {
//             // Reset folders to initial states in case of mid-scroll refresh
//             gsap.set(purpleFolder, { x: 0, y: 0, rotation: 10, scale: 1, left: "20%", top: "5%", filter: 'blur(0px)' });
//             gsap.set(yellowFolder, { x: 0, y: 0, rotation: -10, scale: 1, right: "60%", top: "3%", filter: 'blur(0px)' });
//         }
//     }
// });

// // Step 1: Move images outward with blur effect
// scrollTimeline.to(purpleFolder, {
//     x: -150, // Move left, but controlled distance
//     y: 400,
//     rotation: 60,
//     scale: 0.3,
//     left: "15%", // Slightly further left
//     filter: 'blur(20px)',
//     ease: "power1.out",
//     duration: 16
// }, 0);

// scrollTimeline.to(yellowFolder, {
//     x: 200, // Move right, controlled distance
//     y: 400,
//     rotation: -60,
//     scale: 0.3,
//     right: "15%", // Slightly further right
//     filter: 'blur(20px)',
//     ease: "power1.out",
//     duration: 16
// }, 0);

// // Step 2: Bring images back to centered positions while keeping them on their respective sides
// scrollTimeline.to(purpleFolder, {
//     x: -50, // Keep purple to the left
//     y: 800, // Final Y position, lower down
//     left: "40%", // Final left position to center it
//     rotation: 90,
//     top: "5%", // Align top positions
//     filter: 'blur(0px)',
//     ease: "power1.out",
//     duration: 20
// }, "+=2");

// scrollTimeline.to(yellowFolder, {
//     x: 50, // Keep yellow to the right
//     y: 800, // Final Y position, lower down
//     right: "40%", // Final right position to center it
//     rotation: -90,
//     top: "5%", // Align top positions
//     filter: 'blur(0px)',
//     ease: "power1.out",
//     duration: 20
// }, "<");


// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const purpleFolder = document.querySelector('.purple');
const yellowFolder = document.querySelector('.yellow');
const container = document.querySelector('.scroll-container');
const totalScrollDistance = 8000; // Slow down the animation further

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
            gsap.set(purpleFolder, { x: 0, y: 0, rotation: 10, scale: 1, left: "20%", top: "5%", filter: 'blur(0px)' });
            gsap.set(yellowFolder, { x: 0, y: 0, rotation: -10, scale: 1, right: "60%", top: "3%", filter: 'blur(0px)' });
        }
    }
});

// Step 1: Move images outward with blur effect
scrollTimeline.to(purpleFolder, {
    x: -150, // Move left, but controlled distance
    y: 400,
    rotation: 60,
    scale: 0.3,
    left: "15%", // Slightly further left
    filter: 'blur(20px)',
    ease: "power1.out",
    duration: 16
}, 0);

scrollTimeline.to(yellowFolder, {
    x: 200, // Move right, controlled distance
    y: 400,
    rotation: -60,
    scale: 0.3,
    right: "15%", // Slightly further right
    filter: 'blur(20px)',
    ease: "power1.out",
    duration: 16
}, 0);

// Step 2: Bring images back to centered positions while keeping them on their respective sides
scrollTimeline.to(purpleFolder, {
    x: -30, // Slightly closer to the center
    y: 800, // Final Y position, lower down
    left: "42%", // Final left position closer to the center
    rotation: 90,
    top: "5%", // Align top positions
    filter: 'blur(0px)',
    ease: "power1.out",
    duration: 20
}, "+=2");

scrollTimeline.to(yellowFolder, {
    x: 30, // Slightly closer to the center
    y: 800, // Final Y position, lower down
    right: "42%", // Final right position closer to the center
    rotation: -90,
    top: "5%", // Align top positions
    filter: 'blur(0px)',
    ease: "power1.out",
    duration: 20
}, "<");
