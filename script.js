// let h1=document.createElement("h1");
// console.log(h1);



// createElement 💡

// let btn=document.querySelector("button");
// btn.addEventListener("click",function(){
//   let h1=document.createElement("h1");
//   h1.innerText="Hello world";
//     console.log(h1);
  
// })


// appendChild 💡

// let h1=document.createElement("h1");
// h1.innerHTML="i love js";
// let main=document.querySelector("main");
// main.appendChild(h1);

// let btn=document.createElement("button");
// btn.innerText="New Button";
// let main=document.querySelector("main");
// main.appendChild(btn);
 
// let div=document.createElement("div");
// div.style.height="100px";
// div.style.width="100px";
// div.style.backgroundColor="Yellow";
// let main=document.querySelector("main");
// main.appendChild(div);

// let btn=document.querySelector("button");
// let main=document.querySelector("main");

// btn.addEventListener("click",function(){
//     let div=document.createElement("div");
//     let x=Math.random()*100
//     let y=Math.random()*100
//     let c1=Math.floor(Math.random()*256);
//     let c2=Math.floor(Math.random()*256);
//     let c3=Math.floor(Math.random()*256);
//     div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
//     div.style.height="100px";
//     div.style.width="100px";
//     div.style.left= x+ '%';
//     div.style.top= y+ '%';
//     // div.style.backgroundColor="Yellow";
//     div.style.position="absolute";
//     main.appendChild(div);
// })



let btn=document.querySelector("button");
let main=document.querySelector("main");

let arr=['Hey! i am Manish Kumar','I love coding','Javascript is fun','DOM manipulation is easy','Lets create something new'];
btn.addEventListener("click",function(){
    let h1=document.createElement("h1");
    let x=Math.random()*80
    let y=Math.random()*80
    let rot=Math.random()*360;
    let scl=Math.random()*3;
    h1.style.rotate=rot + 'deg';
    h1.style.scale=scl;
    h1.style.left= x+ '%';
    h1.style.top= y+ '%';
    let a= Math.floor(Math.random()*arr.length);
    h1.innerHTML=arr[a];
    h1.style.position="absolute";

    main.appendChild(h1);
})





// CreateElement is used to create new element
// appendChild is used to append it any parent.


