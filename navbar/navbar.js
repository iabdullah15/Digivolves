document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(
      Flip,
      ScrollTrigger,
      Observer,
      ScrollToPlugin,
      Draggable,
      MotionPathPlugin,
      EaselPlugin,
      PixiPlugin,
      TextPlugin,
      RoughEase,
      ExpoScaleEase,
      SlowMo,
      CustomEase
    );
    
    var tl = gsap.timeline();
  
    // Animate the navbar container from above
    tl.from(".navbar-container", { duration: 0.8, y: 10, opacity: 0.5 })
    
      // Then, animate the navbar brand separately, after the container animation
    .from(".navbar-brand", { 
        duration: 1, 
        y: 10, // Start the brand slightly lower
        opacity: 0, 
        ease: "power2.out" // Smooth easing for a nice effect
      }, "-=0.3") // This overlaps the brand animation to start slightly before the container finishes.

    .from(".nav-item", { 
        duration: 1, 
        y: 10, // Start the brand slightly lower
        opacity: 0, 
        ease: "power2.out" // Smooth easing for a nice effect
        }, "-=1"); // This overlaps the brand animation to start slightly before the container finishes.
      
  });
  