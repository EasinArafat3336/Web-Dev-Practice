let R = 255;
let G = 255;
let B = 255;

let display = document.querySelector(".displayColor")
let code = document.querySelector(".displayCode span")
let Generate = document.querySelector(".generate")

code.textContent = `(${R},${G}, ${B})`
display.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;

Generate.addEventListener("click", ()=>{
    R = Math.floor(Math.random()*(256 - 0) + 0)
    G = Math.floor(Math.random()*(256 - 0) + 0)
    B = Math.floor(Math.random()*(256 - 0) + 0)
    
    display.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    code.textContent = `(${R},${G}, ${B})`
})