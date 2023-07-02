import {ps} from "./main.js"
// import{pubSub} from "./pubSub.js"

// const ps = pubSub()

export const buildPlayerBoard = function(pBoard,t=0){
    ps.unsubscribe("start-game",buildPlayerBoard)
    console.log(pBoard.board.spaces)
    let arr = Array.from(Object.entries(pBoard.board.spaces))
        console.log({arr})
        // const [key,value] = entry;
        let id = arr[t][0]
        console.log(id)
        let div = document.createElement("div")
        div.classList.add("player-space")
        div.id = id
        setTimeout(()=> {
            document.querySelector(".player-board").appendChild(div);
            div.classList.add("pop")
            if(t<100){buildPlayerBoard(pBoard,t+1)}},
        10)
}
// )}
// ps.subscribe("start-game",buildPlayerBoard)
// ps.publish("playerBoard-created",playerBoard)