import ps from "../index.js"

export default function displayMessage(message){
    const display = document.querySelector(".display")
    display.classList.remove("hide")
    display.textContent = message
    setTimeout(()=> {
        display.textContent = "";
    display.classList.add("hide")},
    3000)
}