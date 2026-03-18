// Change image source on button click
const button=document.querySelector("#change")
let img=document.querySelector("#Image")
const imageSrc=["https://images.unsplash.com/photo-1761839258657-457dda39b5cc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8","https://images.unsplash.com/photo-1773423389979-b28b469967f8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1773118095169-6dd955bae91c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D","https://images.unsplash.com/photo-1773402208827-97c7cc7d4246?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D"]
    let count=0;
button.addEventListener("click",(e)=>{

    console.log("change")
    let length=imageSrc.length
    
    if(length === count){
        count = 0;     
    }
     img.src=imageSrc[count]
     count++;
})


