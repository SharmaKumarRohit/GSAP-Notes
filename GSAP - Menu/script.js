let openMenu = document.querySelector('nav i');
let closeMenu = document.querySelector('ul i');

let tl = gsap.timeline();

tl.to('ul', {
    right: 0,
    ease: 'bounce.out'
})

tl.from('li', {
    x: 60,
    duration: 0.5,
    stagger: 0.2,
    opacity: 0,
    ease: 'elastic.out(1,0.5)'
})

tl.from('ul i', {
    opacity: 0,
    scale: 0.2,
    ease: 'elastic.out(1,0.4)'
})

tl.pause();

openMenu.addEventListener('click', () => {
    tl.play();
})

closeMenu.addEventListener('click', () => {
    tl.reverse();
})

gsap.from('h2, nav i', {
    y: -20,
    opacity: 0,
    ease: 'bounce.out',
    stagger: 0.2,
    duration: 0.5
})