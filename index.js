const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {

  if(array.find( function(e) { return e.result === "W"} )){

    const result = array.find( function(e) { return e.result === "W"} ) 
    return result.year 

  }

  return undefined

  
  

 
 }