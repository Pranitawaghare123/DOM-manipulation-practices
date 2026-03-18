// Form submit → prevent reload + log values
let form=document.querySelector("form")
console.log(form)

form.addEventListener("submit",(e)=>{
  e.preventDefault()
})