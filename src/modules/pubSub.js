// import {inArr} from './index.js'
// import { Gameboard } from "./gameboard.js";

 export default function pubSub() {
    const subscribers = {};

    function publish(eventName, data,...args) {
        if(!Array.isArray(subscribers[eventName])) {
            return
        }
        subscribers[eventName].forEach((callback) => {
            console.log({callback,data})
            callback(data,...args)
        })
    }

    function subscribe(eventName, callback) {
        if (!Array.isArray(subscribers[eventName])) {
           subscribers[eventName] = []
        }
        subscribers[eventName].push(callback)
    }

    function unsubscribe(eventName,callback){
        if (Array.isArray(subscribers[eventName])) {
        const callbackIndex = subscribers[eventName].indexOf(callback);
        subscribers[eventName].splice(callbackIndex,1)
        } 
    }

    function show(){
        console.log({subscribers})
    }

    return {
        publish,
        subscribe,
        unsubscribe,
        show,
        subscribers
    }
}

function testFunc(test){
    console.log(test)
}