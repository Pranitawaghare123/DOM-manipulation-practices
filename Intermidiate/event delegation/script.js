let container =document.querySelector(".main")
let btn=document.querySelector(".btn1")
btn.addEventListener("click",(e)=>{
   let btn=document.createElement("button")
   btn.classList.add("btn")  
   btn.textContent="button"
   container.append(btn)
})
container.addEventListener("click",(e)=>{
    if(e.target.classList.contains("btn")){
        e.target.remove()
    }
})