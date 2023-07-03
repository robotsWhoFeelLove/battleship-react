import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import App,{Board} from './components/App.js';
import pubSub from "./modules/pubSub"
import Gameboard from './modules/gameBoard';
import setUpGlados from './modules/setUpGlados';
import AnimatedDivs from './components/AnimatedDivs';

const ps = pubSub()

function testFunc(test){
    console.log(test);
    ps.show()
    return(test)
}

// function startGame(){
const playerBoard = Gameboard("playerBoard");
let gladosBoard = Gameboard("gladosBoard");
const stagingBoard = Gameboard("stagingBoard")

// ps.subscribe("")

function updateGladosBoard(board){
  gladosBoard = board
  console.log(gladosBoard)
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
  // e.currentTarget.style.border = "dashed";
  // e.dataTransfer.clearData();
  // const dataList = e.dataTransfer.items
  // dataList.add(e.target.classList,"text/plain");
  // console.log(dataList)
  return dragItem; })

  document.addEventListener("dragover", function(event) {
    event.preventDefault();
  });

// document.querySelector(".player-board").addEventListener("drop",(e) =>{
//   e.preventDefault();
//   console.log(e.target)
//   console.log(dragItem)
// })

document.querySelector(".rotate").addEventListener("click",()=>{
  document.querySelectorAll(".loading-dock>div").forEach((el)=> el.classList.toggle("vertical"))
}
   )

// console.log({gladosBoard})
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export {ps as default,playerBoard, gladosBoard,stagingBoard,dragItem};

