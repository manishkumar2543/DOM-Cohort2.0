// let box=document.querySelector("#box");

// box.addEventListener("mouseenter",function(){
//     console.log("enter..")
//     box.style.backgroundC
// })

// box.addEventListener("mouseleave",function(){
//     console.log("left ...")
// })

// let chutki=document.querySelector('img');
// let msg=document.querySelector('h2 span');
// let body=document.body


// chutki.addEventListener('mouseenter',function(){
//     msg.innerHTML='chutki se door ho jaaa'
//     body.style.backgroundColor='red'
// })

// chutki.addEventListener('mouseleave',function(){
//    msg.innerHTML='Good! Ab door hi rahna'
//    body.style.backgroundColor='black'
// })


// let main=document.querySelector('.main');
// let cursor=document.querySelector('#cursor');

// main.addEventListener('mousemove',function(dets){
//     cursor.style.left=dets.x + 'px'
//     cursor.style.top=dets.y + 'px'
// })

let aud=new Audio('D.mp3')

let h1=document.querySelector("h1");

window.addEventListener('keydown',function(dets){
    // console.log(dets.key)
     h1.innerHTML=dets.key

     if(h1.innerHTML===" "){
        h1.innerHTML='SPC'
     }
     if(h1.innerHTML==="d"){
        aud.play()
     }
   
        
})