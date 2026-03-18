// Toggle background color of a div
const p=document.querySelector("p")
const button=document.querySelector("button")
const div=document.querySelector(".main")

let updateText=()=>{
      p.textContent="developers can update text, change styles, add or remove elements, and respond to user actions such as clicks or form inputs. It is a core skill for front-end development, enabling the creation of interactive and responsive user interfaces without reloading the page."
}
button.addEventListener("click",(e)=>{
  updateText()

    div.classList.toggle("active")
})