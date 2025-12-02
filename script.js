const para=document.querySelector('p');
const characters= 'ABCDEFGHIJKLMNOPQERSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const text=para.innerHTML
para.addEventListener('mousemove',function(){
    setInterval(() => {
        const str=text.split('').map((char,index)=>{
            return characters.split("")[Math.floor(Math.random()*52)]
        }).join("")
        // console.log(str)
        para.innerHTML=str
    }, 30);
})