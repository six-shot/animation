console.clear();

gsap.registerPlugin(ScrollTrigger);

// Ensure `.right` is centered vertically
gsap.set(".right", { yPercent: -50 });

// Create the timeline for scroll-triggered animation
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".container", // The container element
      pin: true, // Pins the container during the animation
      start: "top top", // Animation starts when container hits the top
      end: "+=200%", // Scroll distance for the animation
      scrub: true, // Smooth scrubbing based on scroll position
      markers: true, // Debug markers (remove when done)
    },
  })
  .to(".right", {
    x: () => "+=" + window.innerWidth, // Move horizontally based on window width
    ease: "none", // No easing for consistent movement
  })
  .to(
    ".left",
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)", // Reveal the left text
      ease: "none",
    },
    "<" // Synchronize with the previous animation
  );
