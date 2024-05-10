let h1 = document.querySelector('h1');
let text = h1.textContent.split("");
let temp = '';
let textLength = Math.floor(text.length / 2);

text.forEach(function(elm, idx) {
    if(idx <= textLength) {
        temp += `<span class="a">${elm}</span>`;
    }
    else {
        temp += `<span class="b">${elm}</span>`;
    }
})

h1.innerHTML = temp;

gsap.from('h1 .a', {
    y: 70,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: 0.15
})

gsap.from('h1 .b', {
    y: 70,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
    stagger: -0.15
})