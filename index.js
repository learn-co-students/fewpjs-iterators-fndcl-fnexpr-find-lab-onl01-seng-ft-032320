const testVar = {}

function superbowlWin(record) {
  let winner = record.find(array => {
    return array['result'] === "W"
  })
  if (winner){
    return winner['year'];
  } else {
    return undefined
  }
}
