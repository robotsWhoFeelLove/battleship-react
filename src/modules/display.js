import ps from "../index.js"

export default function displayMessage(message,noReturn=false){
    const display = document.querySelectorAll(".svg-text").forEach(el=>{
    // display.classList.remove("hide")
    el.textContent = message
    if(!noReturn) setTimeout(()=> {
        el.textContent = "BATTLESHIP";},
    // display.classList.add("hide")},
    3000)})
}