// Dropdown → show selected value in UI
const input=document.querySelector("h1")
const selectOption=document.querySelector("select")
selectOption.addEventListener("change",(e)=>{
    input.textContent =`I am from ${e.target.value}`
})