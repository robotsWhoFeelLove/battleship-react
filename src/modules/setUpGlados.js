import ps from "../index"

// const gladosBoard = Gameboard(glados.name)

const setUpGlados = function (gladosBoard){
    let shipsLeft = 5 
    console.log(gladosBoard)
  
     ps.subscribe("try-ship",gladosBoard.placeShip)
     ps.subscribe("ship-placed",computerSetup);
     let shipLength = 5;
      function computerSetup(test){
          if(test && !shipsLeft){
              ps.unsubscribe("try-ship",gladosBoard.placeShip);
              ps.unsubscribe("ship-placed",computerSetup);
            //   ps.publish("start-board","playerBoard",gladosBoard)
              return;
          } 
          let x = Math.floor(Math.random()*10);
          let y = Math.floor(Math.random()*10);
          
          let dir
          if(Math.floor(Math.random()*3)==1){
              dir = "horizontal"
          } else {
              dir = "vertical"
          }
          if (test && shipsLeft) {
              if (shipLength == 2){
                  shipLength = shipLength + 1;
                  shipsLeft = shipsLeft -1
                  ps.publish("ship-placed",false)
              } else {
                  shipLength = shipLength -1;    
                  shipsLeft = shipsLeft -1;
                  ps.publish("ship-placed",false)
              }
              // ps.unsubscribe("ship-placed",firstMove)
  
          }
          ps.publish("try-ship",x,y,shipLength,dir)
  
      }
      ps.publish("ship-placed",false)
  
  }

 

  export default setUpGlados
  