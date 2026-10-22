const add = document.querySelector(".add")
const minus = document.querySelector(".minus")
const span = document.querySelector("span")
let a = 0;
span.textContent = a;


add.addEventListener("click", ()=>{
    if(a < 10){
        a++
        span.textContent = a;
        if(a == 10){
            add.disabled = true;
        }
    }
    if(minus.disabled = true){
        minus.disabled = false;
    }
  
})
minus.addEventListener("click", ()=>{
    if(a > 0){
        a--
        span.textContent = a;
        if(a == 0){
            minus.disabled = true;
        }
    }
    if(add.disabled = true){
        add.disabled = false;
    }
})