const input=document.querySelector("input")
const btn =document.querySelector("button")
const form=document.querySelector("form")
const listDIv=document.querySelector(".Lists")
const divList=document.querySelectorAll(".div1")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let textContent=input.value
    let div=document.createElement("div")
    div.classList.add("div1")
    div.setAttribute("id",Date.now() +Math.random())
    div.innerHTML=`<p>${textContent}</p> <span id=${Date.now()}>❎</span>`
    listDIv.append(div)
    form.reset()
    const span=document.querySelectorAll("span")
   span.forEach((elem)=>{
    elem.addEventListener("click",(e)=>{
        let id=e.target.id;
        const element=document.getElementById(id);
        const parentId=element.parentElement.id;
        const parent=document.getElementById(parentId)
        console.log(parentId);
        console.log(parent)
        parent.remove()
    })
   })
        
})


