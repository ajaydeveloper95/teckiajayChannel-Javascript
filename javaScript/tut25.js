// for of loop in array 

let a = [45,43434,6,45,645,4555,45534,5,345,34,5000];

for(let item of a){
    if(item > 5000){
        console.log("This item is grather than 5000",item)
    }
    else if(item === 5000){
        console.log("This item is equal to 5000",item)
    }
}