gsap.to(".left", {
    right: "100%",
    width: "50%",
    duration: 1.5,
    ease: "power5",
    delay: 0.5
})

gsap.to(".right", {
    left: "100%",
    width: "0%",
    duration: 1.5,
    ease: "power5",
    delay: 0.5
})

gsap.to(".loader", {
    delay: 2,
    display: "none"
})

let tl = gsap.timeline();

tl.to("#img4", {
  rotate: "8deg",
  duration: 0.5,
  delay: 2,
  opacity: 1,
  ease: "power5"
});
tl.to("#img3", {
  rotate: "16deg",
  duration: 0.5,
  opacity: 1,
  ease: "power5"
});
tl.to("#img2", {
  rotate: "24deg",
  duration: 0.5,
  opacity: 1,
  ease: "power5"
});

const text = new SplitType(".split", {type: "chars"});
let chars = text.chars;

tl.from(chars, {
  y: 100,
  stagger: 0.05,
  delay: 0.2,
  duration: 0.5,
  opacity: 0,
  ease: "back.out",
});

tl.from("h2, a, .hamburger_menu", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.05
})
