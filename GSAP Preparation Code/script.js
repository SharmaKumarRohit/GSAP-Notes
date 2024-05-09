// gsap.to('.container', {
//     x: 1000,
//     duration: 2,
//     delay: 1,
//     rotate: 360,
//     scale: 0.5,
//     backgroundColor: 'blue',
//     borderRadius: '50%'
// })

// gsap.from('h1', {
//     y: 20,
//     opacity: 0,
//     stagger: 0.2,
// })

// gsap.to('.container', {
//     x: 500,
//     duration: 1,
//     delay: 1,
//     borderRadius: "50%",
//     rotate: 360,
//     // repeat: -1,
//     yoyo: true,
// })

// gsap.to('.box1', {
//     x: 500,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
//     borderRadius: '50%'
// })

// gsap.to('.box2', {
//     x: 500,
//     duration: 1.5,
//     delay: 2.5,
//     backgroundColor: 'yellow'
// })

// gsap.to('.box3', {
//     x: 500,
//     duration: 1.5,
//     delay: 4,
//     rotate: 360,
//     borderRadius: '50%'
// })

// let tl = gsap.timeline();

// tl.to('.box1', {
//     x: 500,
//     duration: 1.5,
//     delay: 1
// })

// tl.to('.box2', {
//     x: 500,
//     duration: 1.5
// })

// tl.to('.box3', {
//     x: 500,
//     duration: 1.5
// })

// let tl = gsap.timeline();

// tl.from('.logo', {
//     y: -20,
//     opacity: 0,
//     duration: 0.5,
//     delay: 0.5,
//     ease: 'power5.inOut'
// })

// tl.from('.nav_links li', {
//     y: -20,
//     opacity: 0,
//     duration: 0.5,
//     stagger: 0.2,
//     ease: 'power5.inOut'
// })

// tl.from('h1', {
//     y: 20,
//     opacity: 0,
//     scale: 0.2,
//     duration: 0.5,
//     ease: 'power5.inOut'
// })

// gsap.from('.page .box1', {
//     scale: 0.2,
//     opacity: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 0.5
// })

// gsap.from('.page .box2', {
//     scale: 0.2,
//     opacity: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 0.5,
//     scrollTrigger: '.page .box2',
//     ease: 'power3'
// })

// gsap.from('.page .box1', {
//     scale: 0.2,
//     opacity: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 0.5
// })

// gsap.from('.page .box2', {
//     scale: 0.2,
//     opacity: 0,
//     rotate: 360,
//     duration: 1,
//     delay: 0.5,
//     scrollTrigger: {
//         trigger: '.page .box2',
//         scoller: 'body',
//         start: 'top 60%'
//     }
// })

// gsap.from('.page2 h1', {
//     opacity: 0,
//     x: 500,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.page2 h1',
//         scroller: 'body',
//         start: 'top 60%'
//     }
// })

// gsap.from('.page2 h2', {
//     opacity: 0,
//     x: -500,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.page2 h2',
//         scroller: 'body',
//         start: 'top 60%'
//     }
// })

// gsap.from('.page2 .box2', {
//     opacity: 0,
//     scale: 0,
//     rotate: 360,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.page2',
//         scroller: 'body',
//         start: 'top 0%',
//         end: 'top -150%',
//         markers: true,
//         scrub: 2,
//         pin: true
//     }
// })

// gsap.from('.page3 .box3', {
//     opacity: 0,
//     rotate: 360,
//     scale: 0,
//     duration: 1,
//     scrollTrigger: {
//         trigger: '.page3 .box3',
//         scroller: 'body',
//         start: 'top 60%'
//     }
// })

// gsap.to('.page2 h1', {
//     transform: 'translateX(-150%)',
//     scrollTrigger: {
//         trigger: '.page2',
//         scroller: 'body',
//         // markers: true,
//         start: 'top 0%',
//         end: 'top -150%',
//         scrub: 2,
//         pin: true
//     }
// })

// gsap.to('.box2 h1', {
//     x: '-150%',
//     scrollTrigger: {
//         trigger: '.box2',
//         scroller: 'body',
//         // markers: true,
//         start: 'top 0%',
//         end: 'top -150%',
//         scrub: 2,
//         pin: true,
//         ease: 'power3.inOut'
//     }
// })

let initialPath = 'M 10 100 Q 500 100 990 100';
let finalPath = 'M 10 100 Q 500 100 990 100';

let container = document.querySelector('.container');

container.addEventListener('mousemove', (dets) => {
    initialPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;

    gsap.to('svg path', {
        attr: {d: initialPath},
        duration: 0.2,
        ease: 'power3.out'
    })
})

container.addEventListener('mouseleave', () => {
    gsap.to('svg path', {
        attr: {d: finalPath},
        duration: 2,
        ease: 'elastic.out(1,0.1)'
    })
})