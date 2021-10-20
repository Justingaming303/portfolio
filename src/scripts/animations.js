

//gsap.from('#navcolor' , {duration: 1, x: '-100%', ease: 'power2' })




document.getElementById('text1').style.visibility = "visible";
document.getElementById('text2').style.visibility = "visible";
document.getElementById('text3').style.visibility = "visible";
document.getElementById('text-html').style.visibility = "visible";
document.getElementById('text-js').style.visibility = "visible";
document.getElementById('text-css').style.visibility = "visible";

const f = document.querySelector('#text1')
const e = document.querySelector('#text2')
const d = document.querySelector('#text3')
const h = document.querySelector('#text-html')
const j = document.querySelector('#text-js')
const c = document.querySelector('#text-css')
const discordjs = document.querySelector('#library-container-discordjs')
const gsap3 = document.querySelector('#library-container-gsap3')



f.addEventListener('mouseover', function fr() {
    gsap.to(f, { duration: 1, y: '-125%', ease: 'bounce', repeat: 0 })
})

f.addEventListener('mouseout', function fr() {
    gsap.to(f, { duration: 1, y: 'default', ease: 'bounce' })
})
e.addEventListener('mouseover', function er() {
    gsap.to(e, { duration: 1, y: '-100%', ease: 'bounce', repeat: 0 })
})

e.addEventListener('mouseout', function er() {
    gsap.to(e, { duration: 1, y: 'default', ease: 'bounce' })
})
d.addEventListener('mouseover', function dr() {
    gsap.to(d, { duration: 1, y: '-100%', ease: 'bounce', repeat: 0 })
})

d.addEventListener('mouseout', function dr() {
    gsap.to(d, { duration: 1, y: 'default', ease: 'bounce' })
})

h.addEventListener('mouseover', function hr() {
    gsap.to(h, { duration: 1, y: '125%', ease: 'bounce', repeat: 0 })
})

h.addEventListener('mouseout', function hr() {
    gsap.to(h, { duration: 1, y: 'default', ease: 'bounce' })
})
j.addEventListener('mouseover', function jr() {
    gsap.to(j, { duration: 1, y: '125%', ease: 'bounce', repeat: 0 })
})

j.addEventListener('mouseout', function jr() {
    gsap.to(j, { duration: 1, y: 'default', ease: 'bounce' })
})
c.addEventListener('mouseover', function cr() {
    gsap.to(c, { duration: 1, y: '100%', ease: 'bounce', repeat: 0 })
})

c.addEventListener('mouseout', function cr() {
    gsap.to(c, { duration: 1, y: 'default', ease: 'bounce' })
})

