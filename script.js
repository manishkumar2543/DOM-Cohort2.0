let img =document.querySelector("img")
let love=document.querySelector("#love")

img.addEventListener("dblclick",function(){
      love.style.opacity=1
    love.style.transform=' translate(-50%,-50%) scale(1) rotate(0)'
   setTimeout(() => {
    
    love.style.transform=' translate(-50%,-300%) scale(1) rotate(0)'
   },800);

      setTimeout(() => {
     love.style.opacity=0
   },1000);

   setTimeout(()=>{
     love.style.transform=' translate(-50%,-50%) scale(1) rotate(0)'
   },1200)
    
})