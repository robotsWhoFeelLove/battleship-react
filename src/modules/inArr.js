export default function inArr(someArr,nested1,nested2){
    return !!someArr.find(el=>el[0]== nested1 && el[1] == nested2)
}