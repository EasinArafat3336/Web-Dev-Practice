gsap.from('.Page1 > div',{
    y: 500,
    x: 800,
    opacity: 0,
    rotate: 360,
    duration: 1,
    scale: 0.1,
})
gsap.from('.Page2 > div',{
    y: 300,
    x: -800,
    opacity: 0,
    rotate: 360,
    duration: 1,
    scale: 0.1,
    scrollTrigger:{
        trigger: ".Page2 > div",
        scroller: "body",
        markers: true,
        start: 'bottom 100%',
        end: "top 70%",
        scrub: true,


    }
})