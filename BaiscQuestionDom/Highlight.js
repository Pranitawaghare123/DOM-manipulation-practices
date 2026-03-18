const buttons=document.querySelectorAll("button")
buttons.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        buttons.forEach((e)=>e.classList.remove("highlight"))
         e.target.classList.toggle("highlight")
    
    })
})