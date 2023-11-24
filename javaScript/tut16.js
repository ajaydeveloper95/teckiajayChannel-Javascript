// break and continue keywords

let tableNumber = 5

for (let row = 1;row<=10;row++){
    if(row === 5){
        continue;
        console.log("hello")
    }
    console.log(row)
    // console.log(`${tableNumber} * ${row} = ${tableNumber*row}`)
    // if(row === 5){
    //     // break;
    //     // console.log("its break")
    // }
}
// console.log("its outside the loop")