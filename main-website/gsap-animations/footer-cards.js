// Select all animated card links
const animatedCards = document.querySelectorAll(".animated-card-link");

animatedCards.forEach((cardLink) => {
  // Select the rotating background within the card
  const rotatingBackground = cardLink.querySelector(".rotating-background");

  // Hover in animation
  cardLink.addEventListener("mouseenter", () => {
    // Rotate the background 90 degrees to the right (clockwise)
    gsap.to(rotatingBackground, {
      duration: 0.1,
      rotation: 90, // Rotate 90 degrees clockwise
      ease: "power2.out",
    });
  });

  // Hover out animation
  cardLink.addEventListener("mouseleave", () => {
    // Rotate the background back to original position
    gsap.to(rotatingBackground, {
      duration: 0.1,
      rotation: 0, // Rotate back to 0 degrees
      ease: "power2.out",
    });
  });
});
