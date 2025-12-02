// addEventListener('mousemove', (e) => {
// console.log(e.clientX, e.clientY)

// document.body.style.setProperty("--alok", e.clientX + "px")
// document.body.style.setProperty("--gaurav", e.clientY + "px")
// })



// part- second project on spotlight

const p = document.querySelector("p")
const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
const text =  p.innerText
let iteration = 0

function randomText(){
    const str = text.split("").map((char,index)=>{
        if(index < iteration){
            return char
        }
  return character.split("")[Math.floor(Math.random()) * 52 ]
    }).join("")
    p.innerText = str
    iteration = iteration+0.9
}
setInterval(randomText, 100)