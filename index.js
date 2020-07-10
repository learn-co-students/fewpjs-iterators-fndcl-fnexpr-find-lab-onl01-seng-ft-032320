const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
    let win = record.find( rcd => rcd.result === "W" )
    if (win != undefined) {
        return win.year
    } else {
        return win
    }
}
