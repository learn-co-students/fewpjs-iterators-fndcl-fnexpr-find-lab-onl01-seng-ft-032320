const testVar = {}

function testFunc() {
    return "hi"
}

function superbowlWin(array) {
    const won = array.find(e => e.result === "W")
    if (won) {
        return won.year
    }
}