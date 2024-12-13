function locomotiveanimation(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});



// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
locomotiveanimation()

gsap.to("#nav #navleft svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
        trigger: "#page1",  // The section that triggers the animation
        scroller: "#main", // The scrollable container
        // markers: true,     // Enable visual markers for debugging
        start: "top top",  // Adjust the start point
        end: "top -5%",    // Adjust the end point
        scrub: true        // Smooth animation sync with scrolling
    }
});

function imageanimation()
{
    var imgcon=document.querySelector("#img-container")
var playbtn=document.querySelector("#play")
console.log("imgcon:", imgcon);
console.log("playbtn:", playbtn);

imgcon.addEventListener("mouseenter",function(){
    gsap.to(playbtn,{
        scale:1,
        opacity:1
    })
})
imgcon.addEventListener("mouseleave",function(){
    gsap.to(playbtn,{
        scale:0,
        opacity:0
    })
})
imgcon.addEventListener("mousemove",function(dets){
    gsap.to(playbtn,{
        left: dets.x,
        top:dets.y
    })
})
}
imageanimation()
function loadanimation(){
    gsap.from("#page1 h1",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3
    })
    gsap.from("#page1 #img-container",{
        y:80,
        opacity:0.1,
        delay:1,
        duration:0.9,
        scale:0.95    
    })
}
loadanimation()
function cursoranimation(){
    var cursor=document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left: dets.x-10,
        top: dets.y-8
    })
})
document.querySelector("#child1").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(1)' 
    })
})
document.querySelector("#child1").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(0)' 
    })
})
document.querySelector("#child2").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(1)' 
    })
})
document.querySelector("#child2").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(0)' 
    })
})
document.querySelector("#child3").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(1)' 
    })
})
document.querySelector("#child3").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(0)' 
    })
})
document.querySelector("#child4").addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(1)' 
    })
})
document.querySelector("#child4").addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        transform:'translate(-50%,-50%) scale(0)' 
    })
})
}
cursoranimation()