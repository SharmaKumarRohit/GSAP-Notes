
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

document.querySelectorAll('.card').forEach(card => {
    gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
            trigger: card,
            start: "top 15%",
            end: "bottom 15%",
            scrub: 1.5
        }
    })
})