
import React,{useState} from "react"
import ps from "../index"
import AnimatedDivs from "./AnimatedDivs";

import { playerBoard } from "../index";
import { gladosBoard } from "../index";




function App(props) {
    const [board,setBoard]= useState (props.playerBoard.board)

  function changeBoard(){
    console.log(board.name)
    setBoard(board.name == "playerBoard" ? gladosBoard.board :
      props.playerBoard.board)
  }

    const boardSpaces = Object.values(board.spaces)
    // console.log(boardSpaces)
  return (
    <>
     {boardSpaces.map(createSpaces)}
    </>
  );

  function Space(props){
    return(
      <div
          className="space"
          id = {props.id}
          onClick={changeBoard}
          ></div>
    )
    }

    function createSpaces(space){
      // console.log({space})
      return(<Space 
      key = {`${space.boardName} + ${space.x} + ${space.y}`}
      id = {`space${space.x}${space.y}`}
      className = "space"
      
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