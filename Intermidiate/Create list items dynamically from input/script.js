const input=document.querySelector("input")
const Btn=document.querySelector("button")
const list=document.querySelector(".Add_list")
Btn.addEventListener("click",(e)=>{
    let TextValue=input.value
    if(TextValue.length <= 0){
       list.innerHTML=`<h1 class="heading">Try Again not Added the data</h1>`
       return
    }
    else{
        document.querySelector(".heading").style.display="none"
        list.innerHTML +=`<li>${TextValue}</li>`
        
    }
})