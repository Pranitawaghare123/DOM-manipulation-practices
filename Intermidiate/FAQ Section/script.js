let container=document.querySelector(".main")
container.addEventListener("click",(e)=>{
  let closeElement=e.target.closest(".Question")
  if(!closeElement){
    console.log("not found")
    return
  }
  let items=container.querySelectorAll("P")
  console.log(items)
  items.forEach((e)=>{e.classList.remove("show")})
  let para=closeElement.querySelector("P")
if(para){
    para.classList.add("show")
}
})