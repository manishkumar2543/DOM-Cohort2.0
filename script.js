let allBtn=document.querySelectorAll('button')

allBtn.forEach(function(elem){
    elem.addEventListener('click',function(){
    //    elem.innerHTML='Remove Friend'
    if(elem.innerHTML=='Add Friend'){
        elem.innerHTML='Remove Friend'
    }
    else{
        elem.innerHTML='Add Friend'
    }
       
    })
    
})