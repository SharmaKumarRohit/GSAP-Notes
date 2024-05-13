window.addEventListener('wheel', (dets) => {
    if(dets.deltaY > 0) {
        gsap.to('.marque', {
            transform: 'translateX(-200%)',
            duration: 5,
            repeat: -1,
            ease: 'none'
        })

        gsap.to('.marque img', {
            rotate: 180
        })
    }
    else {
        gsap.to('.marque', {
            transform: 'translateX(0%)',
            duration: 5,
            repeat: -1,
            ease: 'none'
        })

        gsap.to('.marque img', {
            rotate: 0
        })
    }
})

let copy = document.querySelector('.marque').cloneNode(true);
document.querySelector('.move').appendChild(copy);