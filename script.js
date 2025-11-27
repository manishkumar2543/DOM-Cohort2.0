// let h1=document.querySelectorAll("h1");

// h1[2].innerHTML='Change'

// ParentNode ChildNode💡

// let outer= document.querySelector('.outer');
// console.log(outer.childNodes[2])


let allElem=document.querySelectorAll(".elem")

allElem.forEach(function(elem){
    // console.log(elem.innerHTML)
    console.log(elem.childNodes[2])
     console.log(elem.childNodes[3])
})