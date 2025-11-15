// Math.random()=> ek random number deta hai
// Math.random() * 10 => 0 to 9.999999
// Math.floor(Math.random() * 10) => 0 to 9


// var a=Math.random();
// console.log(a);

// let a = Math.floor(Math.random() * 100);
// console.log(a);


// let btn=document.querySelector("button");
// let box=document.getElementById("box");

// btn.addEventListener("click",function(){
//     let c1=Math.floor(Math.random()*256);
//     let c2=Math.floor(Math.random()*256);
//     let c3=Math.floor(Math.random()*256);
    
//     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
//     box.innerHTML=`rgb(${c1},${c2},${c3})`;
// })


// var arr=["red","green","blue","yellow","pink","purple","orange","brown","grey","black"];

// var a=Math.floor(Math.random()*arr.length);
// console.log(arr[a]);


var arr=[
    {
        team:"CSK",
        primaryColor:"yellow",
        secondaryColor:"blue",
        fullname:"Chennai Super Kings",
        captain:"MS Dhoni"

    },
    {
        team:"MI",
        primaryColor:"blue",
        secondaryColor:"gold",
        fullname:"Mumbai Indians",
        captain:"Rohit Sharma",


    },
    {
        team:"RCB",
        primaryColor:"red",
        secondaryColor:"black",
        fullname:"Royal Challengers Bangalore",
        captain:"virat Kohli",

    },
    {
        team:"KKR",
        primaryColor:"purple",
        secondaryColor:"gold",
        fullname:"Kolkata Knight Riders",
        captain:"Shreyas Iyer",

    },
    {
        team:"SRH",
        primaryColor:"orange",
        secondaryColor:"red",
        fullname:"Sunrisers Hyderabad",
        captain:"Abhishek Sharma",
    },
    {
        team:"PBKS",
        primaryColor:"pink",
        secondaryColor:"red",
        fullname:"Punjab Kings",
        captain:"Shikhar Dhawan",

    },
    {
        team:"DC",
        primaryColor:"blue",
        secondaryColor:"red",
        fullname:"Delhi Capitals",
        captain:"Rishabh Pant",

    },
    {
        team:"RR",
        primaryColor:"blue",
        secondaryColor:"pink",
        fullname:"Rajasthan Royals",
        captain:"Sanju Samson",

    },
]

// let a=Math.floor(Math.random()*arr.length);
// console.log(arr[a]);

let btn=document.querySelector("button");
let h1=document.querySelector("h1");
let main=document.querySelector("main");

btn.addEventListener("click",function(){
    let winner =arr[Math.floor(Math.random()*arr.length)];
    h1.innerText=`${winner.fullname} won the IPL Trophy! Captain: ${winner.captain}`;
    h1.style.color=winner.secondaryColor;
    main.style.backgroundColor=winner.primaryColor;


})