import ps from "../index"


 const Ship = function (length,dir){
    let self = {
        length,
        hits: null,
        pos: [],
        dir: dir,
        hit: function (h=1){
            self.hits = self.hits + h 
            console.log(self.hits)

        },
        isSunk: function (){
            console.log("check for sunk")
            if(self.length <= self.hits) {
                console.log("Ship is sunk")
                // ps.show()
                ps.publish("display-message","SHIP SUNK!")
                ps.publish("ship-sunk",self)
            } else {
                ps.publish("ship-sunk",false)
            console.log("not sunk")
            console.log(self.length); 
            console.log(self.hits);
            }
        } 
    }
    ps.publish("ship-created",self)
    return{
        self
    }
}

export default Ship