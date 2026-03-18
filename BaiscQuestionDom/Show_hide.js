const btn=document.querySelector("span")
const input=document.querySelector("input")
btn.addEventListener("click",(e)=>{
    console.log("Clicked On eye button")
    if(input.type == "password"){
        input.type="text"
    }else{
         input.type="password"
       
    }
})