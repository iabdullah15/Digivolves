// // Register GSAP's ScrollTrigger plugin
// gsap.registerPlugin(ScrollTrigger);

// const purpleFolder = document.querySelector('.purple img');
// const yellowFolder = document.querySelector('.yellow img');
// const container = document.querySelector('.scroll-container');
// const totalScrollDistance = 2500; // The distance needed for the full animation

// // Use ScrollTrigger to pin the container and control animation
// ScrollTrigger.create({
//     trigger: container,
//     start: "top top",
//     end: "+=" + totalScrollDistance,
//     pin: container, // Keeps the container fixed during the scroll animation
//     scrub: true, // Animation is tied to scrolling
//     anticipatePin: 1,
//     onLeave: () => {
//         // Release pin earlier when leaving the container
//         gsap.set(container, { pin: false });
//     }
// });

// // Scroll-triggered GSAP animation for Purple Folder (moving apart, rotating, then coming closer)
// gsap.to(purpleFolder, {
//     x: -300,
//     y: 400,
//     rotation: 100,
//     scale: 0.3,
//     ease: "power1.out",
//     scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=" + totalScrollDistance,
//         scrub: true,
//         anticipatePin: 1,
//         onUpdate: (self) => {
//             // Apply blur depending on image position relative to the container
//             let blurIntensity = Math.min(30, self.progress * 30);
//             if (self.progress > 0.9) {
//                 blurIntensity = 0; // Unblur images earlier (just before reaching final position)
//             }
//             purpleFolder.style.filter = `blur(${blurIntensity}px)`;

//             // Gradually bring them closer after more of the scroll distance
//             if (self.progress > 0.8) {
//                 gsap.to(purpleFolder, {
//                     x: -10, // Adjusted x-position to make it come closer slower
//                     rotation: 90,
//                     ease: "power1.out",
//                     duration: 3 // Increase duration to slow down coming together
//                 });
//             }
//         },
//         onLeaveBack: () => {
//             // Ensure proper reset when scrolling back up
//             gsap.to(purpleFolder, {
//                 x: 0,
//                 y: 0,
//                 rotation: 10,
//                 scale: 1,
//                 filter: 'blur(0px)',
//                 ease: "power1.out",
//                 duration: 1
//             });
//         }
//     }
// });

// // Scroll-triggered GSAP animation for Yellow Folder (moving apart, rotating, then coming closer)
// gsap.to(yellowFolder, {
//     x: 300,
//     y: 400,
//     rotation: -100,
//     scale: 0.3,
//     ease: "power1.out",
//     scrollTrigger: {
//         trigger: container,
//         start: "top top",
//         end: "+=" + totalScrollDistance,
//         scrub: true,
//         anticipatePin: 1,
//         onUpdate: (self) => {
//             // Apply blur depending on image position relative to the container
//             let blurIntensity = Math.min(30, self.progress * 30);
//             if (self.progress > 0.9) {
//                 blurIntensity = 0; // Unblur images earlier (just before reaching final position)
//             }
//             yellowFolder.style.filter = `blur(${blurIntensity}px)`;

//             // Gradually bring them closer after more of the scroll distance
//             if (self.progress > 0.8) {
//                 gsap.to(yellowFolder, {
//                     x: 10, // Adjusted x-position to make it come closer slower
//                     rotation: -90,
//                     ease: "power1.out",
//                     duration: 3 // Increase duration to slow down coming together
//                 });
//             }
//         },
//         onLeaveBack: () => {
//             // Ensure proper reset when scrolling back up
//             gsap.to(yellowFolder, {
//                 x: 0,
//                 y: 0,
//                 rotation: -10,
//                 scale: 1,
//                 filter: 'blur(0px)',
//                 ease: "power1.out",
//                 duration: 1
//             });
//         }
//     }
// });

// // Unpin the container and unblur images when the images leave the container
// ScrollTrigger.create({
//     trigger: container,
//     start: "bottom bottom",
//     onEnterBack: () => {
//         // Keep images unblurred when they are outside the container
//         gsap.to([purpleFolder, yellowFolder], {
//             filter: "blur(0px)",
//             duration: 1
//         });
//         gsap.set(container, {
//             pin: false // Release the pin when the images are outside
//         });
//     }
// });



// Register GSAP's ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const purpleFolder = document.querySelector('.purple img');
const yellowFolder = document.querySelector('.yellow img');
const container = document.querySelector('.scroll-container');
const totalScrollDistance = 3000; // Adjusted distance to give enough room for the entire animation

// Create a single ScrollTrigger-controlled GSAP timeline for both images
const scrollTimeline = gsap.timeline({
    scrollTrigger: {
        trigger: container,
        start: "top top",
        end: "+=" + totalScrollDistance,
        pin: container, // Pin the container during the animation
        scrub: true, // Synchronize animation with scroll
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
    y: 400,
    rotation: 100,
    scale: 0.3,
    filter: 'blur(30px)',
    ease: "power1.out"
}, 0);

scrollTimeline.to(yellowFolder, {
    x: 300,
    y: 400,
    rotation: -100,
    scale: 0.3,
    filter: 'blur(30px)',
    ease: "power1.out"
}, 0); // Both images start moving apart simultaneously

// Step 2: Move the images closer together, remove blur
scrollTimeline.to(purpleFolder, {
    x: -10,
    rotation: 90,
    filter: 'blur(0px)',
    ease: "power1.out",
    duration: 3
}, "+=0.5");

scrollTimeline.to(yellowFolder, {
    x: 10,
    rotation: -90,
    filter: 'blur(0px)',
    ease: "power1.out",
    duration: 3
}, "<"); // Sync the movement of yellow folder with the purple one

// Handle smooth reverse on scroll back up
scrollTimeline.eventCallback("onReverseComplete", () => {
    // Smooth reset to the initial position when scrolling back to the top
    gsap.to(purpleFolder, {
        x: 0,
        y: 0,
        rotation: 10,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: "power1.out",
        visibility: 'visible'
    });

    gsap.to(yellowFolder, {
        x: 0,
        y: 0,
        rotation: -10,
        scale: 1,
        filter: 'blur(0px)',
        duration: 1.5,
        ease: "power1.out",
        visibility: 'visible'
    });
});

// Ensure the visibility of elements remains intact throughout scrolling
window.addEventListener('load', () => {
    gsap.set([purpleFolder, yellowFolder], { visibility: 'visible' });
});

window.addEventListener('scroll', () => {
    // Prevent any potential hiding of elements during scroll
    gsap.set([purpleFolder, yellowFolder], { visibility: 'visible' });
});
