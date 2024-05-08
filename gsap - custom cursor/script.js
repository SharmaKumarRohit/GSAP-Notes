let main = document.querySelector('.main');
let cursor = document.querySelector('.cursor');
let image = document.querySelector('.image');

main.addEventListener('mousemove', (dets) => {
    gsap.to(cursor, {
        x: dets.x,
        y: dets.y,
        ease: 'power3'
    })
})

image.addEventListener('mouseenter', () => {
    cursor.innerHTML = 'View More'
    gsap.to(cursor, {
        scale: 6,
        backgroundColor: '#ffffff8c'
    })
})

image.addEventListener('mouseleave', () => {
    cursor.innerHTML = '';
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#F5EFED'
    })
})

gsap.from('.image img', {
    opacity: 0,
    scale: 0.2,
    y: 20,
    duration: 0.5,
    ease: 'back.out'
})