// Remove element when clicking "delete" button

let list=document.querySelectorAll(".main")
list.forEach((elem)=>{
     elem.addEventListener("click",(e)=>{
        e.target.remove()
        // e.currentTarget.remove()
     })
})