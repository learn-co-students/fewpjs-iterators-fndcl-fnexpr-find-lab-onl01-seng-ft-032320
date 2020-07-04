const testVar = {}

function testFunc() {
  return "hi"
}

const record = [
  {year: "2018", result: "L"},
  {year: "2017", result: "W"},
  {year: "2016", result: "N/A"}
  //...
]

function superbowlWin(record) {
  if (record.find(r => r.result === "W")){
    return record.find(r => r.result === "W").year
  }
    return undefined
}