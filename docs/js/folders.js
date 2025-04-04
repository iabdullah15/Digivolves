gsap.registerPlugin(ScrollTrigger);

const purpleFolder = document.querySelector(".purple");
const yellowFolder = document.querySelector(".yellow");
const container = document.querySelector(".scroll-container");
const totalScrollDistance = window.innerHeight * 5; // Adjusted for responsiveness

// Functions to get dynamic values based on viewport size
const getYValue = () => {
  if (window.innerWidth < 560) return window.innerHeight * 1.8;
  if (window.innerWidth < 576) return window.innerHeight * 1.28;
  if (window.innerWidth < 768) return window.innerHeight * 1.45;
  if (window.innerWidth < 1024) return window.innerHeight * 1.45;
  return window.innerHeight * 1.45;
};

const getScaleValue = () => {
  if (window.innerWidth < 576) return 0.2;
  if (window.innerWidth < 768) return 0.3;
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

function calculateFinalPositions() {
  const gap = 10;

  const finalWidth = getInitialFolderSize() * getScaleValue();
  console.log(getInitialFolderSize(), getScaleValue());

  let yellowRight;
  let purpleLeft;
  if (window.innerWidth < 420) {
    // Add logic here if needed
    purpleLeft = window.innerWidth / 3 - finalWidth - gap  / 2 + "px";
    yellowRight = window.innerWidth / 3 - finalWidth - gap  / 2 + "px";
    console.log(purpleLeft);
    console.log(yellowRight);
    console.log(finalWidth);
  } else if (window.innerWidth < 580) {
    // Add logic here if needed
    purpleLeft = window.innerWidth / 2.45 - finalWidth - gap / 2 + "px";
    yellowRight = window.innerWidth / 2.45 - finalWidth - gap / 2 + "px";
    console.log(purpleLeft);
    console.log(yellowRight);
    console.log(finalWidth);
  } else if (window.innerWidth < 768) {
    // Add logic here if needed
    purpleLeft = window.innerWidth / 2.3 - finalWidth - gap / 2 + "px";
    yellowRight = window.innerWidth / 2.3 - finalWidth - gap / 2 + "px";
  } else if (window.innerWidth < 1021) {
    // Add logic here if needed
    purpleLeft = window.innerWidth / 2.2 - finalWidth - gap / 2.9 + "px";
    yellowRight = window.innerWidth / 2.2 - finalWidth - gap / 2.9 + "px";
  } else if (window.innerWidth < 1165) {
    // Add logic here if needed
    purpleLeft = window.innerWidth / 2.2 - finalWidth - gap / 2 + "px";
    yellowRight = window.innerWidth / 2.2 - finalWidth - gap / 2 + "px";

  } else if (window.innerWidth < 1550) {
    purpleLeft = window.innerWidth / 2.1 - finalWidth - gap / 2 + "px";
    yellowRight = window.innerWidth / 2.1 - finalWidth - gap / 2 + "px";
  } else if (window.innerWidth <= 1920) {
    purpleLeft = window.innerWidth / 2.02 - finalWidth - gap / 2 + "px";
    yellowRight = window.innerWidth / 2.02 - finalWidth - gap / 2 + "px";
  } else {
    // Default or fallback case if none of the above conditions apply
    purpleLeft = window.innerWidth / 2 - finalWidth - gap / 2 + "px";
    yellowRight = window.innerWidth / 2 - finalWidth - gap / 2 + "px";
  }

  // Finally, return the positions
  return { purpleLeft, yellowRight };
}

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
      gsap.set(container, {
        y: 20, // shift down 80px so there's a visible gap on top
      });
    },
    // Shift down 80px when pinned from the bottom (scrolling up)
    onEnterBack: () => gsap.set(container, { y: 20 }),
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

// Define a function to calculate the final Y offset for folders
const getFinalY = () => {
  // For viewports below 560px, we push the folders further down
  if (window.innerWidth < 560) {
    // e.g., use 1.8 as multiplier so that the net offset is:
    // 1.8 * window.innerHeight - 0.5 * window.innerHeight = 1.3 * window.innerHeight
    return window.innerHeight * 1.5 - window.innerHeight * 0.5;
  }
  // For viewports 560px and wider, use a constant value (e.g., 1.45 multiplier)
  return getYValue() - window.innerHeight * 0.5;
};

// Step 2: Bring images back to a centered position, side by side
scrollTimeline.to(
  purpleFolder,
  {
    x: () => -window.innerWidth * 0.1,
    y: () => getFinalY(), // Use the responsive final Y value
    rotation: 90,
    top: "5%",  
    scale: getScaleValue(),
    left: () => calculateFinalPositions().purpleLeft,
    ease: "power1.out",
    duration: 1,
  },
  "+=0.2"
);

scrollTimeline.to(
  yellowFolder,
  {
    x: () => window.innerWidth * 0.1,
    y: () => getFinalY(), // Use the same function for consistency
    rotation: -90,
    top: "5%",
    scale: getScaleValue(),
    right: () => calculateFinalPositions().yellowRight,
    ease: "power1.out",
    duration: 1,
  },
  "<"
);

window.addEventListener("resize", () => {
  // 1. Capture the current progress of the timeline
  let currentProgress = scrollTimeline.progress();

  // 2. Update folder image widths on resize
  document.querySelectorAll(".folder img").forEach((img) => {
    img.style.width = getInitialFolderSize() + "px";
  });

  ScrollTrigger.refresh();
});
