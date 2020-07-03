const testVar = {}

// function testFunc(array) {
//   return "hi"
// }


function superbowlWin(array) {
  if(array.find(e => e.result ==="W")){
    return array.find(e => e.result === "W").year
  }
    return undefined
}