const list=document.querySelector(".orderLI")
list.addEventListener("click",(e)=>{
    if(e.target.tagName == "LI"){
        let items=Array.from(list.children)
        let index=items.indexOf(e.target)
        let div=document.createElement("p")
        div.textContent=`Index : ${index}`
       
      document.querySelector(".result").append(div)

        }
})