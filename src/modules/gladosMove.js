import ps from "../index"

 const gladosMove = function (playerBoard){
    // ps.subscribe("ship-hit",logHit)
    // function logHit(){
    //     let hit1 =
    // } 

    let x = Math.floor(Math.random()*10);
    let y = Math.floor(Math.random()*10);
    
    if(playerBoard.board.spaces[`space${x}${y}`].isHit) {
        console.log(`move ${x}${y} aborted`);
        gladosMove(playerBoard)} else {
            console.log("glados-move")
        ps.publish("glados-move",x,y)
        }  
}

export default gladosMove