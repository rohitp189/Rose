let viewHeight = window.innerHeight;
let viewWidth = window.innerWidth;

let textContainers = document.querySelectorAll('.text-container');

textContainers.forEach((element, index) => {
  let top = element.getBoundingClientRect().top;
  let start = viewHeight - top;

  let firstText = element.querySelector('.parallax-text:first-child');
  let secondText = element.querySelector('.parallax-text:last-child');

  // First text scroll animation with even more increased movement
  gsap.to(firstText, {
    scrollTrigger: {
      trigger: element,
      scrub: 1, // Smooth scrolling
      start: start + "px bottom",
      end: "bottom top"
    },
    x: '-100vw',  // Increased scroll movement (previous was '-70vw')
    transformOrigin: "left center", 
    ease: "none"
  });

  // Second text scroll animation with even more increased movement
  gsap.to(secondText, {
    scrollTrigger: {
      trigger: element,
      scrub: 1, // Smooth scrolling
      start: start + "px bottom",
      end: "bottom top"
    },
    x: '70vw',  // Increased scroll movement (previous was '45vw')
    transformOrigin: "left center", 
    ease: "none"
  });
});