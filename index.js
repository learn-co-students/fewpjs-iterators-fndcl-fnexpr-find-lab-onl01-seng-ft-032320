const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(arr) {
  const winRecord = arr.find(element => element.result === 'W');
  if (winRecord) { return winRecord.year; }
}