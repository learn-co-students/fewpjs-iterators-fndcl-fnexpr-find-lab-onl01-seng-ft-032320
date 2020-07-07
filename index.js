const testVar = {};

function testFunc() {
  return "hi";
}

const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" },
];

function superbowlWin(array) {
  if (array.find((s) => s.result === "W")) {
    return array.find((s) => s.result === "W").year;
  } else {
    return undefined;
  }
}

console.log(superbowlWin(record));
