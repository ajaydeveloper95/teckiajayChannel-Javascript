// Array important methods

// creating a array
let arry = [2,0,4,45,34,6,567,7,8,67,4,43,45,43,34,345,5,43,45,6]

// foreach 
// arry.forEach((item,index,arr)=>{
//     console.log(`index : ${index} value : ${item}`)
// })

// map 
// let x = arry.map((item,index,arr)=>{
    // console.log(item,index)
    // console.log(arr)
    // return item%2
// })


// filter
// let x = arry.filter((item)=>{
//     // console.log(item)
//     return item%2
// })

// reduce 
// let x = arry.reduce((prev,val,valIndex)=>{
//     return true
// })

// Sort 
// let x  = arry.sort((a,b)=>{
//     return a-b
// })

// find
// let x = arry.find((g)=>{
//     return g%2
// })

let allOdd = [52,72,92,32,5652,652,652,44,3]

// every and some method in array
// let x = allOdd.every((item)=>{
//     return item%2
// })

// some method in array 
// let v = allOdd.some((item)=>{
//     return item%2
// })

// fill method in array
// let v = allOdd.fill("item",3,5)

// splice method 

let v = allOdd.splice(7,10)

console.log(v)



