// Description:- Jab Locomotive JS ka use karega tab ak wrapper main create karna hota hai,
// Jesh mai shara html content hoga, or esh main ko height and width nahi dena hai,
// tab he Locomotive JS work karega otherwise work nahi karega.
const scroll = new LocomotiveScroll({
    el: document.querySelector('main'),
    smooth: true
});