import {ps} from "./index.js";
import {buildPlayerBoard} from "./buildPlayerBoard.js"
import {Gameboard} from "./gameBoard.js";
import animatedDivs from "../components/AnimatedDivs.jsx"
import Player from "./player.js"




// export const ps = pubSub();


// function testFunc(test){
//     console.log(test);
//     return(test)
// }


// ps.subscribe("new-message",testFunc);
ps.show()

// export const Ship = function (length,dir){
//     let self = {
//         length,
//         hits: null,
//         pos: [],
//         dir: dir,
//         hit: function (h=1){
//             self.hits = self.hits + h 
//             console.log(self.hits)

//         },
//         isSunk: function (){
//             if(self.length <= self.hits) {
//                 console.log("Ship is sunk")
//                 ps.publish("ship-sunk",self)
//             } else {
//             console.log("not sunk")
//             console.log(self.length); 
//             console.log(self.hits);
//             }
//         } 
//     }
//     ps.publish("ship-created",self)
//     return{
//         self
//     }
// }

// export const Player = function (name){
//     const player = name
//     ps.publish("new-player", name)
     
//     function move (x,y) {
//         ps.publish("player-move",x,y)
//         ps.publish("new-message","Player name made a move")
//     }
//     // function startPlayerTurn (){
//     //     place holder for adding subs
//     // }
//         // function endPlayerTurn (){
//         //     placeholder for removing all subs
//         // }
//         return{
//             move,
//             name
//         }
// }
// ps.subscribe("ship-hit",testFunc)

// const playerOneBoard = Gameboard();
// const playerTwoBoard = Gameboard();
// ps.subscribe("ship-hit",playerOneBoard.checkShipStatus)
// playerOneBoard.placeShip(3,3,4,"horizontal");
// playerOneBoard.placeShip(4,2,4,"vertical");
// playerOneBoard.receiveAttack(6,3);
// playerOneBoard.receiveAttack(3,3);
// playerOneBoard.receiveAttack(4,3);
// playerOneBoard.receiveAttack(5,3);
// playerOneBoard.receiveAttack(5,5);
// // Ship().hit

// playerTwoBoard.placeShip(1,1,4,"horizontal")
// playerTwoBoard.receiveAttack(5,5);
// playerOneBoard.receiveAttack(5,5);

// const controller = function () {
//     function newPlayer(){}
// }

// const controller = function () {
const playerOne = Player("Ian")
const playerBoard = Gameboard(playerOne.name)

const glados = Player("glados")
const gladosBoard = Gameboard(glados.name)
ps.publish("gladosBoard-created",false)
// ps.subscribe("glados-move",playerBoard.receiveAttack)
    
// }
// controller()


// const setUpGlados = function (){
//   let shipsLeft = 5 

//    ps.subscribe("try-ship",gladosBoard.placeShip)
//    ps.subscribe("ship-placed",computerSetup);
//    let shipLength = 5;
//     function computerSetup(test){
//         if(test && !shipsLeft){
//             ps.unsubscribe("try-ship",gladosBoard.placeShip);
//             ps.unsubscribe("ship-placed",computerSetup);
//             return;
//         } 
//         let x = Math.floor(Math.random()*10);
//         let y = Math.floor(Math.random()*10);
        
//         let dir
//         if(Math.floor(Math.random()*3)==1){
//             dir = "horizontal"
//         } else {
//             dir = "vertical"
//         }
//         if (test && shipsLeft) {
//             if (shipLength == 2){
//                 shipLength = shipLength + 1;
//                 shipsLeft = shipsLeft -1
//                 ps.publish("ship-placed",false)
//             } else {
//                 shipLength = shipLength -1;    
//                 shipsLeft = shipsLeft -1;
//                 ps.publish("ship-placed",false)
//             }
//             // ps.unsubscribe("ship-placed",firstMove)

//         }
//         ps.publish("try-ship",x,y,shipLength,dir)

//     }
//     ps.publish("ship-placed",false)

// }

ps.subscribe("gladosBoard-created",setUpGlados)
// setUpGlados()
// playerOne.move(0,7);

// const gladosMove = function (){
//     // ps.subscribe("ship-hit",logHit)
//     // function logHit(){
//     //     let hit1 =
//     // } 

//     let x = Math.floor(Math.random()*10);
//     let y = Math.floor(Math.random()*10);
    
//     if(playerBoard.board.spaces[`space${x}${y}`].isHit) {
//         console.log(`move ${x}${y} aborted`);
//         gladosMove()} else {
//             console.log("glados-move")
//         ps.publish("glados-move",x,y)
//         }  
// }
// gladosMove()

// ps.subscribe("start-game",buildPlayerBoard)
// ps.subscribt("start-game",AnimatedDivs)

document.querySelector(".start").addEventListener("click",()=>
   console.log(gladosBoard.spaces))

   const listener = document.addEventListener;


   listener('dragenter',function handleDragEnter(e){
      
      e.target.classList.add('over');
   });
   
   listener('dragleave',function handleDragLeave (e){
      e.target.classList.remove('over');
   });
  
   listener('dragend',function handleDragEnd (e){
      e.target.classList.remove('over');
   });
  
   listener('dragover', function(e){
      // e.target.classList.toggle('over');
      // e.target.classList.toggle('over');
      return e.preventDefault();
   });
  
//    listener('dragstart',function handleDragStart(e){
//       dragItem = e.target
//       return dragItem;
//    });
  
//    listener('drop',function handleDrop(e){
