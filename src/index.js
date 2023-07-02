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
const gladosBoard = Gameboard("gladosBoard");
ps.publish("gladosboard",gladosBoard)
//   return{
//     playerBoard,
//     gladosBoard
//   }
// }


ps.subscribe("new-message",testFunc);
// ps.subscribe("start-board",startGame)
ps.subscribe("start-board",testFunc)
ps.subscribe("gladosBoard",setUpGlados)
ps.subscribe("gladosBoard",testFunc)
ps.subscribe("try-ship",testFunc)
ps.subscribe("glados-created",testFunc)
ps.show("playerBoard",App)
// ps.subscribe("content-generated",App)
// ps.subscribe("playerBoard",AnimatedDivs)


document.querySelector(".start").addEventListener("click",()=>
   ps.publish("start-board",""))
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.querySelector('.player-board'));
root.render(
  <React.StrictMode>
    <App 
      playerBoard = {playerBoard}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

export {ps as default, playerBoard, gladosBoard};

