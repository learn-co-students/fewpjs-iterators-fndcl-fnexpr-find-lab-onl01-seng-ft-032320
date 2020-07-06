const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(superArray) {
  let result = superArray.find( superArray => superArray.result === "W");
  return !!result ? result.year : undefined;
}