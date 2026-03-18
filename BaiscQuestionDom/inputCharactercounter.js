// Display live character count from input

const input=document.querySelector("#textInput")
const count=document.querySelector("#count")
input.addEventListener("input",(e)=>{
    let word=e.target.value
    count.textContent=word.length
})