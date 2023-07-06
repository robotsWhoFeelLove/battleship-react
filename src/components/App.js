
import React,{useState, useContext} from "react"
import { dragItem } from "../index";
// import { Dropzone } from "dropzone";
import ps from "../index"
import AnimatedDivs from "./AnimatedDivs";
// import Gameboard from "../modules/gameBoard";
import { playerBoard, stagingBoard,gameInProgress } from "../index";
import { gladosBoard } from "../index";

// const dropzone = new Dropzone("div.player-board", { url: "/file/post" });


function App(props) {
  return(<>

      <Board />

    </>)
}

function Board(){
 
const [board,setBoard] = useState(playerBoard.board)
// console.log(board.spaces)



function handleClick(e){
  // if (shipsLeft)
  //   // browser supports multi-touch
  // }
  let x = Number(e.target.id.substring(5,6))
  let y = Number(e.target.id.substring(6,7))
  console.log({x,y})
  if(board.name==="gladosBoard" && gameInProgress){
  ps.publish("gladosBoard-attack",x,y)
  // }
  setTimeout(updateBoard,0);
  if(gameInProgress)
 { setTimeout(()=> {
    setBoard(playerBoard.board)},
  2000)
  setTimeout(()=> {
  //   setBoard(playerBoard.board)
    ps.publish("glados-attack",playerBoard);
    updateBoard();
    setTimeout(()=>{
      setBoard(gladosBoard.board)
      // reRender(board)
      updateBoard()
      // updateBoard()
      ps.publish("display-message","YOUR TURN!")},1500)
  },
  3000)}
}
}

// function reRender(board){
//   // setTimeout(updateBoard,0)
// const boardSpaces = Object.values(board.spaces)
// // console.log(boardSpaces)
// return (
// <>
//  {boardSpaces.map(createSpaces)}
// </>
// );
// }
function handleDragEnter(e){
  e.target.classList.add("pop")

}

function handleDragLeave(e){
  e.target.classList.remove("pop")

}

function updateBoard(){
  console.log("updating Board")
  // setTimeout(setBoard(gladosBoard.board),0)
  let previous;
  setBoard((prevBoard)=>{
    previous = prevBoard
    return stagingBoard.board})
  setTimeout(()=>{
    console.log("setting board")
    setBoard(previous)}
  ,0)
}
const [shipsLeft,setShipsLeft] = useState(5)

function handleTouchEnd(el){
  console.log(el)
}

function handleDrop(el){
  // console.log(dragItem)
  setShipsLeft(prevValue => prevValue - 1)
  let shipLength = dragItem.id.substring(dragItem.id.length-1)
  let dir = dragItem.classList.contains("vertical")? "vertical ": "horizontal"
  console.log(shipLength)
  let x = Number(el.target.id.substring(5,6))
  let y = Number(el.target.id.substring(6,7))
  // console.log({x,y,shipLength,dir})
  ps.publish("playerBoard",x,y,shipLength,dir)
  

  if(shipsLeft == 1){
    ps.publish("display-message","GAME START!");
    setTimeout(
      ()=> setBoard(gladosBoard.board),1000)
      
  } else {
    ps.publish("display-message",shipsLeft-1 + " REMAINING" )
    
  }
  // setShipsLeft(prevValue => prevValue - 1)
  setTimeout(updateBoard,0)
  el.target.classList.add("air-carrier")

}

  const boardSpaces = Object.values(board.spaces)
  // console.log(boardSpaces)
return (
  <>
   {boardSpaces.map(createSpaces)}
  </>
);

function Space(props){
  // console.log({Space})
  const [count,setCount] = useState(0)



    function forceRender() {
      console.log({count})
      setCount(count+1)
      console.log({count})
    }

  return(
    <div
        className={props.classList}
        id = {props.id}
        onClick={shipsLeft? handleDrop : handleClick}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onTouchEnd={shipsLeft? handleDrop: handleClick}
        ></div>
  )
  }

  function createSpaces(space){
    
      let classList = `space`
      // console.log("boardname " + (space.boardName == 'gladosBoard'))
      // if(space.boardName == "playerBoard"){
        if(space.boardName == "gladosBoard"){
          classList = classList + " enemy"
         }
        //  if(space.isHit && !space.isShip == null){
        //   classList = classList + " hit"}
        if(space.isHit){
          classList = classList + " hit"
        }  
        if(space.isHit && space.isShip == null){console.log("miss registered")
          classList = classList + " miss"
        } 
        if(space.isShip && space.boardName == "playerBoard"){
          // console.log({space})
          classList = `space ship`
          if(space.isHit){
            classList = classList + " hit"
          }  
          if(space.isShip.self.length==5){
            classList = classList + " air-carrier"
           }
         if(space.isShip.self.length==4){
          classList = classList + " battleship"
         }
         if(space.isShip.self.length==3){
          classList = classList + " cruiser"
         }
         if(space.isShip.self.length==2){
          classList = classList + " destroyer"
         }
       

      
    }

    return(<Space 
    key = {`${space.boardName}${space.x}${space.y}`}
    id = {`space${space.x}${space.y}`}
    classList = {classList}
    
    />)
  }
}



export default App;