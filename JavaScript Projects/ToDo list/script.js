//for input hover effect

const inp = document.querySelector("input")
const  add = document.querySelector(".add")

inp.addEventListener("mouseenter", doSomething)
inp.addEventListener("mouseout", doOutSomething)

function doSomething(){
    add.style.boxShadow = "none";
    add.style.transition = "0.3s" 
}

function doOutSomething(){
    add.style.boxShadow = "5px 5px"
    add.style.transition = "0.3s"
}


//for button add
const button = document.querySelector("button");
const main = document.querySelector(".mainContent")

button.addEventListener("click", addCheckbox)
function addCheckbox() {
    let check = document.createElement("input")
    check.type = "checkbox";
    main.appendChild(check)
    
}