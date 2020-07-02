// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record){
  const data = record.find( ({ result }) => result === 'W' );
  if (data === undefined){
    console.log(data);
  }
    else{
    return data.year;  
    }
  
  }

// function superbowlWin(record){
//   const data = record.find( ({ result }) => result === 'W' );
//   return data.year;
//   }