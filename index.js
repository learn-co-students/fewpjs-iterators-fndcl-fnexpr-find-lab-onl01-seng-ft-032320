const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let winningYear = (record.find(function(s) { return s["result"] === "W"}))
  if (winningYear) {
    return winningYear["year"]
  }
}