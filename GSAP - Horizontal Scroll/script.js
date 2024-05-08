gsap.to('.page2 h1', {
    x: '-305%',
    scrollTrigger: {
        trigger: '.page2',
        scroller: 'body',
        start: 'top 0%',
        end: 'top -305%',
        scrub: 2,
        pin: true
    }
})

gsap.to('svg path', {
    y: -30,
    repeat: -1,
    yoyo: true,
    ease: 'power5.out'
})