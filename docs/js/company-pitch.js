document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // -----------------------------------------------
  // 1. Your existing heading animations (unchanged)
  // -----------------------------------------------
  gsap.fromTo(
    ".pitch-heading-1",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pitch-heading-1",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

  gsap.fromTo(
    ".pitch-heading-2",
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".pitch-heading-2",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    }
  );

  // 1) Ensure transform-origin is set to the left for each black-hr
  gsap.set(".pitch-hr", { transformOrigin: "left center" });

  // 2) Animate each black-hr individually when it scrolls into view
  gsap.utils.toArray(".pitch-hr").forEach((hr) => {
    gsap.fromTo(
      hr,
      { scaleX: 0 }, // start collapsed
      {
        scaleX: 1, // full width
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: hr,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  // -----------------------------------------------
  // 2. Animate the .pitch-col items in grouped rows
  // -----------------------------------------------

  let pitchColsTimeline;

  // Decide how many columns form a “row” based on viewport
  function getGroupSize() {
    if (window.innerWidth >= 992) return 3; // Desktop: 3 columns per row
    if (window.innerWidth >= 768) return 2; // Tablet: 2 columns per row
    return 1; // Mobile: 1 column per row
  }

  function animatePitchCols() {
    // Kill any previous timeline (on resize)
    if (pitchColsTimeline) {
      pitchColsTimeline.kill();
      pitchColsTimeline = null;
    }

    const allCols = gsap.utils.toArray(".pitch-col");
    const groupSize = getGroupSize();

    // Slice the columns into sub-arrays of groupSize
    const groups = [];
    for (let i = 0; i < allCols.length; i += groupSize) {
      groups.push(allCols.slice(i, i + groupSize));
    }

    // Create a single timeline with one scrollTrigger
    pitchColsTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".pitch-row",
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    // Animate each group in sequence
    groups.forEach((group, index) => {
      // Each group’s entire set of columns fades in at once
      pitchColsTimeline.from(
        group,
        {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        },
        index * 0.3
      );
      // ^ index * 0.3 = slight delay for each subsequent group
      //   Increase to (index * 0.8 or 1) if you want no overlap
    });
  }

  // Run on page load
  animatePitchCols();

  // On resize, recalculate grouping & refresh
  window.addEventListener("resize", () => {
    ScrollTrigger.refresh();
    animatePitchCols();
  });
});
