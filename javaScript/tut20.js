// primitive vs reference data types 

let a = 34
let b = a

// console.log(a)
// console.log(b)

a = 55

// console.log(a,"update")
// console.log(b,"update")

// reference data type 

let g = [45,33,456,44]  

let h = g
let x = g

console.log(g)
console.log(h)

g.push(144)

// console.log(g)
console.log(h)