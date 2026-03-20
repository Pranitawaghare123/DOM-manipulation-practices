let main=document.querySelector(".one")
let img=document.querySelector(".img")
main.addEventListener("click",(e)=>{
    // console.log(e.target)
    // // let element=e.target.querySelector(".small_i")
    //  let element=e.target.querySelector(".smallImg")
    // console.log(element.src)
    // img.src=element.src;
     let element=e.target.closest(".smallImg")
     img.src=element.src
})
