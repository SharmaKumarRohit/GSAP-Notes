// Starting Point
// Ya code GSAP and Locomotive JS ko ek shath run karta hai.
gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("main"), // Define wrapper main container
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("main", { // Define wrapper main container
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("main").style.transform ? "transform" : "fixed"
  // Define wrapper main container
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

// Ending Point


gsap.from(".page1 .box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    ease: "power5"
})

gsap.from(".page2 .box", {
    scale: 0,
    duration: 2,
    rotate: 360,
    ease: "power5",
    scrollTrigger: {
        trigger: ".page2 .box",
        scroller: "main",
        markers: true,
        start: "top 50%"
    }
})