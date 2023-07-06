import ps from "../index.js"
import Ship from "./ship.js"
import inArr from "./inArr.js"



const Gameboard = function(name,otherBoard){
    console.log("constructing board")
    let shipArr = []
    const board = {
        name: name,
        shipsRemaining: 5,
        spaces: {},
        placeShip : placeShip
    }
   
          for(let i = 0 ; i < 10; i++){
        for(let j = 0; j <10; j++){
            board.spaces["space"+j+i]={x:j,y:i,isHit:false,isShip:null,boardName:name}
            
        }
   }
   console.log(board)
//    ps.publish(`${name}`,board,otherBoard,true)
   if(name="playerBoard"){console.log(board)}


    function checkLoc (xArr,yArr){
        if(!xArr.length) return true;
            let x3 = xArr.shift()
            let y3 = yArr.shift()
            console.log("is Ship? ")
            console.log(board.spaces[`space${x3}${y3}`]? board.spaces[`space${x3}${y3}`].isShip : "no space")
            if(x3 > 9 || x3 < 0 || y3> 9 || y3 < 0 || inArr(shipArr,x3,y3))
            //    board.spaces[`space${x3}${y3}`].isShip) 
           { 
               return false;} else {
                // console.log("check for ship " + inArr(shipArr,x3,y3) + x3 + y3)
            shipArr.push([x3,y3])
           }

            return checkLoc (xArr,yArr)
        }
    

    function placeShip(x,y,length,dir){
        let xArr = [];
        let yArr = [];
        function moveArr(x,y,length,dir){
            if (length <= 0)return;
            if(dir == "horizontal" && length > 0){
                xArr.push(Number(x))
                yArr.push(Number(y))
                moveArr(Number(x + 1),y,length-1,dir)
            } else {
                xArr.push(x)
                yArr.push(y)
                moveArr(Number(x),Number(y+1),length-1,dir)
            }
         console.log({xArr,yArr})
        }
    moveArr(x,y,length,dir)


        
        if(!checkLoc(xArr,yArr)) {
            ps.publish("ship-placed",false)
            ps.publish("new-message","This location is out of bounds",{x},{y})
        } else { 
        let newShip = Ship(length,dir)    
        for (let k = 0; k < length; k++){
            if(dir=="horizontal"){
                board.spaces[`space${x+k}${y}`].isShip = newShip
                console.log(board.spaces[`space${x+k}${y}`])
            } else {
                board.spaces[`space${x}${y+k}`].isShip = newShip
                console.log(board.spaces[`space${x}${y+k}`])
            }
            ps.publish("ship-placed",true)
            console.log(board)
            
        }
        }
    }

    function receiveAttack(a,b){
        let space = board.spaces[`space${a}${b}`]
        if(space.isShip){
            space.isHit = true;
            ps.publish("new-message",`Ship hit at ${a},${b}`)
           
            // document.querySelector()
            space.isShip.self.hit();
            console.log(board)
             ps.publish(`${board.name}-hit`,space.isShip.self)
             ps.publish("display-message", `Hit!!!!`)
             console.log(space.isShip)
             ps.subscribe("ship-sunk",removeShip)
            space.isShip.self.isSunk()
            
        } else {
            space.isHit = true;
            console.log("miss at " + {space})
            ps.publish("gladosBoard-miss",space)
            ps.publish("display-message", `Miss`)
        }

    }
    function removeShip(test){
       if(test){
        console.log("removing ship")
        board.shipsRemaining = board.shipsRemaining -1
        console.log(board.shipsRemaining)
        areAllSunk()
       }
      ps.unsubscribe("ship-sunk",board.removeShip)
    }  

    function areAllSunk(){
        if(board.shipsRemaining < 1){
            ps.publish("all-sunk",board.name)
            if(board.name=="gladosBoard"){
            ps.publish("display-message",`ALL SHIPS SUNK!
            YOU WIN!!!!`)
        } else { ps.publish("display-message",`ALL SHIPS SUNK!
        YOU LOSE 😫`)
            
        }
        }
    }
    return{
        placeShip,
        receiveAttack,
        removeShip,
        areAllSunk,
        board
    }
}



export default Gameboard