const testVar = {};

function testFunc() {
  return "hi";
}

function superbowlWin(array) {
  let search = array.find((s) => s.result === "W");
  if (search) {
    return search.year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));
