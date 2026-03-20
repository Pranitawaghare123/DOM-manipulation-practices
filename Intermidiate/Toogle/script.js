let container=document.querySelector(".main")
container.addEventListener("click",(e)=>{
    if(e.target.tagName !== "P"){
        return
    }
        let items=Array.from(container.children)
        items.forEach(element => { element.classList.remove("active")});
        e.target.classList.add("active")  
})
