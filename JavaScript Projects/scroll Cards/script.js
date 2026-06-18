let left = document.querySelector(".fa-arrow-left")
let right = document.querySelector(".fa-arrow-right")
let rap = document.querySelector(".scroll")

left.addEventListener("click",()=>{
    rap.style.transform = "translateX(300px)"
})

right.addEventListener("click", ()=>{
    rap.style.transform = "translateX(-300px)"
})