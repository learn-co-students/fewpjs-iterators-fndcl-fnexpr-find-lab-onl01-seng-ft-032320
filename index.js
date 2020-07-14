const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(objects) {
  for (let i = 0; i < objects.length; i ++) {
    if (objects[i].result === "W") {
      return objects[i].year;
    }
  }
}
