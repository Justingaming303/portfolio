

//gsap.from('#navcolor' , {duration: 1, x: '-100%', ease: 'power2' })
const tl = gsap.timeline()

tl.from('#navcolor', { duration: 1, x: '-100%', ease: 'power2' })
    .from('.navbtn', { duration: 1, y: '-100%', ease: 'power', stagger: '0.2', delay: '0.2' })
    gsap.from('.text', { duration: 1, x: '-100%', scale: '0', ease: 'power' })
    gsap.from('#blob', { duration: 1, y: '-100%', scale: '0', rotation: '720', ease: 'power' })
    gsap.from('#waves', { duration: 1, y: '100%', ease: 'bounce' })


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

discordjs.addEventListener('click', function djs() {

gsap.to(discordjs, { duration: 1, x: '150%', ease: 'power2', })
gsap.to(gsap3, { duration: 1, x: '-150%', ease: 'power2'})

})           

