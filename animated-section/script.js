


// // Register GSAP's ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const purpleFolder = document.querySelector('.purple img');
// const yellowFolder = document.querySelector('.yellow img');
// const container = document.querySelector('.scroll-container');
// const totalScrollDistance = 5000; // Adjusted distance for more room

// // Create a single ScrollTrigger-controlled GSAP timeline for both images
// const scrollTimeline = gsap.timeline({
//     scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=" + totalScrollDistance,
//         pin: container, // Pin the container during the animation
//         scrub: true, // Synchronize animation with scroll
//         anticipatePin: 1,
//         onEnter: () => {
//             // Reset folders to initial states in case of mid-scroll refresh
//             gsap.set(purpleFolder, {
//                 x: 0,
//                 y: 0,
//                 rotation: 10,
//                 scale: 1,
//                 filter: 'blur(0px)',
//                 visibility: 'visible'
//             });
//             gsap.set(yellowFolder, {
//                 x: 0,
//                 y: 0,
//                 rotation: -10,
//                 scale: 1,
//                 filter: 'blur(0px)',
//                 visibility: 'visible'
//             });
//         }
//     }
// });

// // Step 1: Move the images apart, blur them
// scrollTimeline.to(purpleFolder, {
//     x: -300,
//     y: 1000, // Increased Y position
//     rotation: 100,
//     scale: 0.3,
//     filter: 'blur(30px)',
//     ease: "power1.out"
// }, 0);

// scrollTimeline.to(yellowFolder, {
//     x: 300,
//     y: 1000, // Increased Y position
//     rotation: -100,
//     scale: 0.3,
//     filter: 'blur(30px)',
//     ease: "power1.out"
// }, 0);

// // Step 2: Move the images closer together, remove blur
// scrollTimeline.to(purpleFolder, {
//     x: -10,
//     rotation: 90,
//     filter: 'blur(0px)',
//     ease: "power1.out",
//     duration: 6
// }, "+=1");

// scrollTimeline.to(yellowFolder, {
//     x: 10,
//     rotation: -90,
//     filter: 'blur(0px)',
//     ease: "power1.out",
//     duration: 6
// }, "<"); // Sync movement



// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const purpleFolder = document.querySelector('.purple img');
const yellowFolder = document.querySelector('.yellow img');
const container = document.querySelector('.scroll-container');
const totalScrollDistance = 6000; // Slower animation

// Create a single ScrollTrigger-controlled GSAP timeline for both images
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
                filter: 'blur(0px)',
                visibility: 'visible'
            });
            gsap.set(yellowFolder, {
                x: 0,
                y: 0,
                rotation: -10,
                scale: 1,
                filter: 'blur(0px)',
                visibility: 'visible'
            });
        }
    }
});

// Step 1: Move the images apart, blur them
scrollTimeline.to(purpleFolder, {
    x: -300,
    y: 800,  // Reduced Y position so the images don’t go too far down
    rotation: 100,
    scale: 0.3,
    filter: 'blur(30px)',
    ease: "power1.out",
    duration: 12 // Slow movement
}, 0);

scrollTimeline.to(yellowFolder, {
    x: 300,
    y: 800, // Reduced Y position for yellow folder as well
    rotation: -100,
    scale: 0.3,
    filter: 'blur(30px)',
    ease: "power1.out",
    duration: 12 // Sync with purpleFolder
}, 0);

// Step 2: Move the images closer together, remove blur
scrollTimeline.to(purpleFolder, {
    x: -10,
    rotation: 90,
    filter: 'blur(0px)',
    ease: "power1.out",
    duration: 6 // Slowed down coming together
}, "+=2");

scrollTimeline.to(yellowFolder, {
    x: 10,
    rotation: -90,
    filter: 'blur(0px)',
    ease: "power1.out",
    duration: 6 
}, "<"); 

