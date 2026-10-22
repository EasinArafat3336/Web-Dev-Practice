


//for RGB COLOR

/*RGB Color Generator Logic

Step-1
Button এ click।

↓
Step-2
Random R, G, B value তৈরি হয়।

↓
Step-3
rgb(R,G,B) string তৈরি হয়।

↓
Step-4
backgroundColor এর মাধ্যমে box-এর color পরিবর্তন হয়।

↓
Step-5
textContent এর মাধ্যমে color code display হয়।

*/
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
    code.textContent = `rgb(${R},${G}, ${B})`
})





//FOR HEXA DECIMEL COLOR

let hexaColor = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
let hexa = ['f','f','f','f','f','f'];

let hexaDisplay = document.querySelector('.SecondisplayCode span')
hexaDisplay.textContent = `#${hexa.join("")}`;

let secondisplayColor = document.querySelector('.SecondisplayColor')

secondisplayColor.style.backgroundColor = `#${hexa[0]}${hexa[1]}${hexa[2]}${hexa[3]}${hexa[4]}${hexa[5]}`;


let generateSecond = document.querySelector('.generateSecond')

generateSecond.addEventListener("click", ()=>{
    for (let i = 0; i < hexaColor.length; i++) {
        
        let H = Math.floor(Math.random()*hexaColor.length)
        hexa.unshift(hexaColor[H])
        hexa.pop();

        secondisplayColor.style.backgroundColor = `#${hexa[0]}${hexa[1]}${hexa[2]}${hexa[3]}${hexa[4]}${hexa[5]}`;

    }
    hexaDisplay.textContent = `#${hexa.join("")}`;
})

