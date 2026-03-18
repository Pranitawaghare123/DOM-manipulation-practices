// Create a button → change paragraph text on click
const p=document.querySelector("p")
const button=document.querySelector("button")
button.addEventListener("click",(e)=>{
    p.textContent="developers can update text, change styles, add or remove elements, and respond to user actions such as clicks or form inputs. It is a core skill for front-end development, enabling the creation of interactive and responsive user interfaces without reloading the page."
})