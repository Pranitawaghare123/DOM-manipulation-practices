const increment=document.querySelector("#Increment")
const decrement = document.querySelector("#decrement")
const reset=document.querySelector("#reset")
const counter=document.querySelector("#counter")

reset.addEventListener("click",(e)=>{
    counter.textContent="0"
})
increment.addEventListener("click",(e)=>{
    let number=Number(counter.textContent)
    counter.textContent=number+1;
})
decrement.addEventListener("click",(e)=>{
    let number=Number(counter.textContent)
     counter.textContent=number >0?number-1:0;
})