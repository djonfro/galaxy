const green = document.querySelectorAll('.green');

window.addEventListener('load', () => { ;
const TL = gsap.timeline({paused: true });

TL
.staggerTo(green, 10,  { x:700, ease: "solid", rotation:360 }, 0.1 )


   TL.play()



} );

gsap.to(".rrr",{
  
   x:3076,  
  
   rotation:360,
 
   opacity:1,

   duration:5,
   ease: "solid",

  
   repeat:-1,
   pause: true 
             
   //le scale permet de faire des transition de fond "  scale:(-1), " //
  
   
  } );

  gsap.to(".r",{
   
   x:1800,  
   scale:-1,
   rotation:360,
 
   opacity:0,

   duration:20,
   ease: "solid",

  
   repeat:-1,
   pause: true 
             
   //le scale permet de faire des transition de fond "  scale:(-1), " //
  
   
  } );



   var t = gsap.to(".rr",{
    
    x:2196,
      
  
    rotation:360,
  
    opacity:1,
   
    duration: 5,
    ease: "solid",
   
   
    repeat:-1,
    pause:true
              
    //le scale permet de faire des transition de fond "  scale:(-1), " //
   
    
   } );

   gsap.to(".rrr",{
  
      x:3076, 
     
     
      rotation:360,
    
      opacity:1,
   
      duration:5,
      ease: "solid",
   
     
      repeat:-1,
      pause: true 
                
      //le scale permet de faire des transition de fond "  scale:(-1), " //
     
      
     } );
   
     gsap.to(".rrrr",{
        
      x:0,
      rotation:360,
    
      opacity:1,
   
      duration:0.1,
      ease: "solid",
   
     
      repeat:-1,
      pause: true 
                
      //le scale permet de faire des transition de fond "  scale:(-1), " //
     
      
     } );


gsap.to(".e",{
      
      
      x:3000,
      rotation:360,
    
      opacity:1,
   
      duration:10,
      ease: "solid",
   
     
      repeat:-1,
      
                
      //le scale permet de faire des transition de fond "  scale:(-1), " //
     
      
     } );
     // etoile//
     gsap.to(".f",{
      
      
      x:0,
      rotation:0,
     scale:0,
      opacity:1,
   
      duration:2,
      ease: "elastic",
   
     
      repeat:-1,
      
                
     
     
      
     } );

     gsap.to(".z",{
      delay:3,
      
      x:0,
      rotation:0,
     scale:0,
      opacity:1,
   
      duration:2,
      ease: "elastic",
   
     
      repeat:-1,
      
                
     
     
      
     } );


      // etoile//
   
document.querySelector("#jouer").onclick = () => t.play();
document.querySelector("#pause").onclick = () => t.pause();
document.querySelector("#resume").onclick = () => t.resume();
document.querySelector("#reverse").onclick = () => t.reverse();
document.querySelector("#debut").onclick = () => t.restart();

  



