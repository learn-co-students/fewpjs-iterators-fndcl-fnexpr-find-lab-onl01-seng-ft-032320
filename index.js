
const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winningRecord = array.find(record => record["result"] == "W");
  return winningRecord ? winningRecord.year : undefined
}