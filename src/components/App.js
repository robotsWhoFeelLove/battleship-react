
import React,{useState, useContext} from "react"
import { dragItem } from "../index";
// import { Dropzone } from "dropzone";
import ps from "../index"
import AnimatedDivs from "./AnimatedDivs";
// import Gameboard from "../modules/gameBoard";
import { playerBoard, stagingBoard } from "../index";
import { gladosBoard } from "../index";

// const dropzone = new Dropzone("div.player-board", { url: "/file/post" });


function App(props) {
  return(<>
    {/* <div className="player-area">
      <div className="loading-dock">
        <button className="rotate">Rotate</button>
        <div draggable="true" id="carrier5" className="carrier">
          <div className="block" />
          <div className="block" />
          <div className="block" />
          <div className="block" />
          <div className="block" />
        </div>
      </div>
      <div className="player-board"> */}
      <Board />
      {/* </div>
    </div> */}
    </>)
}

function Board(){
 
const [board,setBoard] = useState(playerBoard.board)
console.log(board.spaces)



function handleClick(){
  // ps.publish("board-change",board)
  console.log(board)
  setTimeout(setBoard(board.name === "playerBoard" ? gladosBoard.board :
    playerBoard.board),500)
}

function handleDragEnter(e){
  e.target.classList.add("pop")
}

function handleDragLeave(e){
  e.target.classList.remove("pop")
}

function updateBoard(){
  console.log("updating Board")
  // setTimeout(setBoard(gladosBoard.board),0)
  setBoard(stagingBoard.board)
  setTimeout(()=>{
    console.log("setting board")
    setBoard(playerBoard.board)}
  ,0)
}
let shipsToPlayce = 5

function handleDrop(props){
  console.log(dragItem)
  console.log(props)
  let shipLength = dragItem.id.substring(dragItem.id.length-1)
  let dir = dragItem.classList.contains("vertical")? "vertical ": "horizontal"
  console.log(shipLength)
  let x = Number(props.target.id.substring(5,6))
  let y = Number(props.target.id.substring(6,7))
  console.log({x,y,shipLength,dir})
  ps.publish("playerBoard",x,y,shipLength,dir)
  setTimeout(updateBoard,0)
  props.target.classList.add("air-carrier")
  // props.target.appendChild(dragItem)
  // console.log(props.target)
  // dragItem.classList.add("hide")
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
        onClick={handleClick}
        onDrop={handleDrop}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
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
        if(space.isShip){
          classList = `space ship`
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
       
        //  if(boardName == gladosBoard){
        //   classList = classList + " air-carrier"
        //  }
      // } else {
      //   classList = "space enemy"
      // }
      
    }
    // console.log({classList})
        //change to player board in future
    // console.log({space})
    return(<Space 
    key = {`${space.boardName}${space.x}${space.y}`}
    id = {`space${space.x}${space.y}`}
    classList = {classList}
    
    />)
  }
}

// function createBoard(board){
//     console.log(board)
//     let boardName = board.name

//  return (Array.from(board.spaces).map(createSpaces))









// export function Board(board,otherBoard,switchFlag){
//   if(switchFlag){
//     const items = board.Spaces;
//     return (<AnimatedDivs() 
//       items = "board"
//       />)
//   }
// }

export default App;