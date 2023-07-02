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
            if(self.length <= self.hits) {
                console.log("Ship is sunk")
                ps.publish("ship-sunk",self)
            } else {
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