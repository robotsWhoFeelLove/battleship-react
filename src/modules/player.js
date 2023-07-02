import ps from "../index";

const Player = function (name){
    const player = name
    ps.publish("new-player", name)
     
    function move (x,y) {
        ps.publish("player-move",x,y)
        ps.publish("new-message","Player name made a move")
    }
    // function startPlayerTurn (){
    //     place holder for adding subs
    // }
        // function endPlayerTurn (){
        //     placeholder for removing all subs
        // }
        return{
            move,
            name
        }
}

export default Player