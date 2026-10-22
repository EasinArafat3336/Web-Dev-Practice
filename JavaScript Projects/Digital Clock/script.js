let time = new Date();

let hour = document.querySelector(".hour");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");

setInterval(() => {
    hour.innerText = time.getHours();
    min.innerText = time.getMinutes();
    sec.innerText = time.getSeconds();
}, 1000);

