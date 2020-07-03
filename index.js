const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let found = array.find(record =>{
    return record.result === "W"
  })
  if (found){
    return found.year
  } else {
   return  undefined
  }
}