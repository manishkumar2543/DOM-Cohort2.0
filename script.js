// setTimeout - delay
// setInterval - repeat


// console.log("Start");
// setTimeout(()=>{
//     console.log("helo world")
// },2000); // 2 seconds delay

// console.log("End");


// let btn=document.querySelector("button");
// let h1=document.querySelector("h1");

// btn.addEventListener("click",function(){
//     h1.innerHTML="Loading...";
//     setTimeout(()=>{
//         h1.innerHTML="Hello I am John";
//     },2000)
// })




// let a=0;

// setInterval(()=>{
//     a++;
//     console.log(a);
// },2000)

// let a=0;
// setTimeout(function(){
//     a++;
//     console.log(a);
// },500)


// var a=0;

// var int=setInterval(()=>{
//     a++;
//     console.log(a);
// },50);

// setTimeout(()=>{
//     clearInterval(int);
// },5000);


let grow=0;
let btn=document.querySelector("button");
let h2=document.querySelector("h2");
let inner=document.querySelector(".inner");


btn.addEventListener("click",function(){

    btn.style.pointerEvents='none';

    let num= 50 + Math.floor(Math.random());
    console.log(num)

   let int = setInterval(() => {
        grow++;
        h2.innerHTML=grow+"%";
        inner.style.width=grow+"%";
    }, num);

    setTimeout(()=>{
        clearInterval(int);
        btn.innerHTM="Downloaded";
        
         console.log('Downloaded in ',num/10,`Seconds`)
    },num*100);

   
})
