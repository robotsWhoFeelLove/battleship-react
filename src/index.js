import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App,{Board} from './components/App.js';
import pubSub from "./modules/pubSub"
import Gameboard from './modules/gameBoard';
import setUpGlados from './modules/setUpGlados';
import AnimatedDivs from './components/AnimatedDivs';
import displayMessage from './modules/display';
import gladosMove from './modules/gladosMove';
import instructions from './modules/instructions';

const ps = pubSub()
let gameInProgress = true;

function gameOver(){
  gameInProgress = false;
}



function testFunc(test){
    console.log(test);
    ps.show()
    return(test)
}


let playerBoard = Gameboard("playerBoard");
let gladosBoard = Gameboard("gladosBoard");
let stagingBoard = Gameboard("stagingBoard")
// ps.subscribe("")

function startGame(){
  console.log("restarting")
  playerBoard = Gameboard("playerBoard");
  gladosBoard = Gameboard("gladosBoard");
  stagingBoard = Gameboard("stagingBoard");

  }

  // document.querySelector(".restart").addEventListener("click",()=>{
  //   console.log("restart");
  //   startGame()})

function updateGladosBoard(board){
  gladosBoard = board
  console.log(gladosBoard)
}

function removeShip(test){
   if(test) 
  //  console.log(removing + dragItem)
   dragItem.classList.add("hide") 
}

ps.subscribe("gladosBoard-change",updateGladosBoard)
ps.subscribe("new-message",testFunc);
// ps.subscribe("start-board",startGame)
ps.subscribe("start-board",testFunc)
ps.subscribe("create-gladosBoard",setUpGlados)
ps.subscribe("gladosBoard",testFunc)
ps.subscribe("try-ship",testFunc)
ps.subscribe("glados-created",testFunc)
ps.show("playerBoard",App)
ps.subscribe("playerBoard",playerBoard.placeShip)
// ps.subscribe("content-generated",App)
// ps.subscribe("playerBoard",AnimatedDivs)
ps.publish("create-gladosBoard",gladosBoard)
ps.subscribe("ship-placed",removeShip)
ps.subscribe("gladosBoard-attack",gladosBoard.receiveAttack)
ps.subscribe("gladosBoard-hit",testFunc)
ps.subscribe("gladosBoard-miss",testFunc)
ps.subscribe("display-message",displayMessage)
ps.subscribe("glados-attack",gladosMove)
ps.subscribe("glados-move",playerBoard.receiveAttack)
ps.subscribe("all-sunk",gameOver)

// document.querySelector(".start").addEventListener("click",()=>
//    ps.publish("start-board",""))
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector(".player-board"));
root.render(
  <React.StrictMode>
    <App 
      props = {playerBoard}
    />
  </React.StrictMode>
);

// document.querySelector(".player-board").addEventListener("dragenter",(e) =>{
//   console.log(e.target)
// })
let dragItem
document.querySelector(".loading-dock").addEventListener('dragstart',(e) =>{
  console.log(e.target)
  dragItem = e.target
  return dragItem; })
  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

  let carrier = document.querySelector("#carrier5")
// window.onload = function()  {  
//   // dock.addEventListener("touchstart", touchHandler)
//   carrier.addEventListener("touchmove", function(e){
   
//   // function touchHandler(e){
     
//       dragItem = e.target;
//       console.log(e)
//        let touchLocation = e.targetTouches[0];
//        carrier.style.left = touchLocation.pageX + 'px';
//        carrier.style.top = touchLocation.pageY + 'px';
//       //  console.log({touchLocation})
//   })
// }
// carrier.addEventListener("click",function()  {console.log("I got clicked")})

  document.querySelectorAll(".carrier").forEach((ship)=> ship.addEventListener("touchStart", function(e){
    dragItem = ship.id;
    let touchLocation = e.targetTouches[0]
    ship.computedStyleMap.left = touchLocation.pageX + 'px';
    ship.computedStyleMap.top = touchLocation.pageY + 'px';
  }))

  document.querySelectorAll(".carrier").forEach((ship)=> ship.addEventListener("click", function(e){
   if(document.getElementsByClassName("selected").length > 0)
    {
    let item = document.querySelector(".selected")
    item.classList.remove("selected")
    console.log({item})
  }
  if(e.target.parentNode.classList.contains("carrier"))
    dragItem = e.target.parentNode;
   e.target.parentNode.classList.add("selected")

  }))

instructions()

// setTimeout(()=> ps.publish("display-message","SELECT A SHIP",true),
// 2000)
// setTimeout(()=> {ps.publish("display-message","TO HIGHLIGHT IT",true)
// document.querySelector(".carrier").classList.add("selected")
// },
// 3000)
// setTimeout(()=> {ps.publish("display-message","ROTATE HERE",true);
// document.querySelector(".rotate").classList.add("pop");
// rotateDock()
// },
// 6000)
// setTimeout(()=> {;
// document.querySelector(".rotate").classList.remove("pop");
// rotateDock()
// },
// 6500)
// setTimeout(()=> {;
//   document.querySelector(".rotate").classList.add("pop");
//   rotateDock()
//   // popScreen(99)
//   },
//   7000)
//   setTimeout(()=> {;
//     document.querySelector(".rotate").classList.remove("pop");
//     rotateDock()
//     // popScreen(99)
//     },
//     7500)

//   setTimeout(()=> {
//     ps.publish("display-message","USE BLUE DOT",true)},
//   8500)
//   setTimeout(()=> {
//     ps.publish("display-message","FOR REFERENCE",true)},
//   9500)
//   setTimeout(()=> {
//     ps.publish("display-message","AND",true)},
//   10250)
//   setTimeout(()=> {
//     ps.publish("display-message","PLACE ON BOARD",true)
//     popScreen(99)},
//   11000)
//  function popScreen (num) {
//   if(num < 1) return;
//   if(document.getElementsByClassName("space").length > 0) {
//     let space;
//     if (num < 10) {space = document.querySelector(`#space0${num}`)
//     } else { 
//     space = document.querySelector(`#space${num}`)
//     }
//     space.classList.add("pop")
//     setTimeout(()=> {
//     space.classList.remove("pop");
//     popScreen(num-1)
//     },
//     15)}}
//     setTimeout(()=> {
//       ps.publish("display-message","HAVE FUN!!!")},
//     13000)


// document.querySelector(".player-board").addEventListener("drop",(e) =>{
//   e.preventDefault();
//   console.log(e.target)
//   console.log(dragItem)
// })

document.querySelector(".rotate").addEventListener("click",rotateDock)

function rotateDock(){
  document.querySelectorAll(".loading-dock>div").forEach((el)=> el.classList.toggle("vertical"))
}
   

// console.log({gladosBoard})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export {ps as default,playerBoard,gameInProgress,gladosBoard,stagingBoard,dragItem, rotateDock};

