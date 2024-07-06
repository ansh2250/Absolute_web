var tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".brand img",
      start: "50% 80%",
      end: "40% 30%",
      scrub: true,
      ease: "power1.inOut" // Smooth easing function
    }
  });

  tl.from(".brand img", {
    x: 250,
    y: 350,
    duration: 1.5, // Extended duration for smoother effect
    transition: 0.5,
    width: 122,
    ease: "power1.inOut" // Matching ease for animation
  });


// Initialize a timeline with ScrollTrigger
var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: ".frenchise",
        start: "40% 95%",  // Animation starts when the top of `.two` hits the bottom of the viewport
        end: "70 10%",    // Animation ends when the bottom of `.two` leaves the top of the viewport
        scrub: true
    }
});

// Animate elements as they enter the viewport
tl2.to(".frenchise img", {
    x:-10, // Move from left to center
    y:10,
    rotate:360,
    delay:3,
    transition:0.5,
    duration:12, // Duration to complete the animation
    ease: "power3.out" // Smoothing out the animation
}, "-=1.2");
tl2.to(".frenchise h1, .frenchise p", {
    x:10,
    y:80, // Move from below to position
    transition:0.5,
    fontSize:20,
    duration: 12, // Consistent duration for a smooth flow
    stagger: 0.2, // Stagger the start times of each element
    ease: "power3.out" // Smoothing out the animation
}, "-=1.2"); // Overlap this animation with the previous one
 // GSAP timeline for animating elements within ".two" trigger

// image zoom in zoom out
document.addEventListener('scroll', function () {
    const zoomFactor = 0.001; // Adjust the zoom factor as needed
    const scrollY = window.scrollY;
    const images = document.querySelectorAll('.carousel-item img');

    images.forEach((img) => {
        const scale = 1 + scrollY * zoomFactor;
        img.style.transform = `scale(${scale})`;
    });
});