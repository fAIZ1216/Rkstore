gsap.registerPlugin(ScrollTrigger)

function Animations(){
  
gsap.from("nav",{
  y:-100,
  opacity:0,
  duration:1.8,
  scurb:2,
  stagger:{
      each:0.1,
      from:1
  }
})

gsap.from(".Hero-section",{
y:100,
duration:2,
opacity:0,


})
gsap.from(".list-items",{
y:200,
opacity:0,
duration:2,
scrollTrigger:{
  trigger:".list-items",
  toggleActions:"restart",
  start:"top 100%",
 
}
})
gsap.from(".section3-img",{
x:-100,
opacity:0,
duration:2,
scrollTrigger:{
  trigger:".section3",
  toggleActions:"restart",
  start:"top 100%",

}
},"a")
gsap.from(".section3-contant",{
x:100,
opacity:0,
duration:2,
scrollTrigger:{
  trigger:".section3",
  toggleActions:"restart",
  start:"top 100%",
  
}
},"a")

}
gsap.from(".review-contant,.reivew-card",{
  y:200,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:".Review",
    toggleActions:"restart",
    start:"top 75%",
    
  }
})
// about animation
gsap.from(".ex-contant",{
  x:-100,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:".experience",
    toggleActions:"restart",
    start:"top 75%",
   
  }
},"a")
gsap.to(".ex-logo",{
  y:-100,
  
  duration:2,
  scrollTrigger:{
    trigger:".experience",
    toggleActions:"restart",
    start:"top 75%",
    
  }
},"a")

gsap.from(".store-contant",{
  x:100,
  opacity:0,
  duration:2,
  scrollTrigger:{
    trigger:".about-store",
    toggleActions:"restart",
    start:"top 80%",
   
  }
})
gsap.from(".deatils-img",{
  y:300,
  opacity :0,
  duration:1,
  scrollTrigger:{
    trigger:".more-deatils",
    toggleActions:"restart",
    start:"top 75%",
    
  }
})
Animations()


