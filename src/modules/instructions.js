import ps from "../index"
import { rotateDock } from "../index"

export default function instructions(){
setTimeout(()=> ps.publish("display-message","SELECT A SHIP",true),
2000)
setTimeout(()=> {ps.publish("display-message","TO HIGHLIGHT IT",true)
document.querySelector(".carrier").classList.add("selected")
},
3000)
setTimeout(()=> {ps.publish("display-message","ROTATE HERE",true);
document.querySelector(".rotate").classList.add("pop");
rotateDock()
},
6000)
setTimeout(()=> {;
document.querySelector(".rotate").classList.remove("pop");
rotateDock()
},
6500)
setTimeout(()=> {;
  document.querySelector(".rotate").classList.add("pop");
  rotateDock()
  // popScreen(99)
  },
  7000)
  setTimeout(()=> {;
    document.querySelector(".rotate").classList.remove("pop");
    rotateDock()
    // popScreen(99)
    },
    7500)

  setTimeout(()=> {
    ps.publish("display-message","USE BLUE DOT",true)
    document.querySelector("#carrier5").firstElementChild.classList.toggle("pop")},
  8500)
  setTimeout(()=> {
    ps.publish("display-message","FOR REFERENCE",true)
    document.querySelector("#carrier5").firstElementChild.classList.toggle("pop")} ,
  9500)
  setTimeout(()=> {
    ps.publish("display-message","AND",true)
    document.querySelector("#carrier5").firstElementChild.classList.toggle("pop")},
  10250)
  setTimeout(()=> {
    ps.publish("display-message","PLACE ON BOARD",true)
    popScreen(99)
    document.querySelector("#carrier5").classList.remove("selected")
    document.querySelector("#carrier5").firstElementChild.classList.toggle("pop")},
  11000)
 function popScreen (num) {
  if(num < 1) return;
  if(document.getElementsByClassName("space").length > 0) {
    let space;
    if (num < 10) {space = document.querySelector(`#space0${num}`)
    } else { 
    space = document.querySelector(`#space${num}`)
    }
    space.classList.add("pop")
    setTimeout(()=> {
    space.classList.remove("pop");
    popScreen(num-1)
    },
    15)}}
    setTimeout(()=> {
      ps.publish("display-message","HAVE FUN!!!")},
    13000)}