
// DOM- Document Object Model 
// Forntend ki js


// DOM 4 Pillars 
// - Selection of an Element
            // querySelector
            // getElementById
            // 
    // - Changing HTML
    // -  textContent
    // -innerHTML 
// - changing Css
// - Event listeners

// let h1 = document.querySelector('h1')
// h1.innerHTML="Change HTML";
// h1.style.color="pink";

// let box=document.querySelector(".box")
// box.innerHTML="hey hey";
// box.style.backgroundColor="blue";


// let h1 = document.querySelector('h1')
// h1.innerHTML="Change HTML";
// h1.style.color="pink";

// h1.addEventListener("click",function(){
//     console.log("helo")
// })


let btn=document.querySelector("button");
let h1=document.querySelector("h1");

btn.addEventListener("click",function(){
    h1.style.fontSize="60px"
    h1.style.color="pink";
    h1.innerHTML="change ho gya";
})


