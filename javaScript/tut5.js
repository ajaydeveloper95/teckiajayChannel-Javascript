// Null undefined  BigInt and typeOf
// create a varible with empty value
let ajay = null;
let ajay2 = undefined;

// for understanding 
// let t1 = 22;
// let t2 = "22";

// console.log(t1 === t2);

// not complete equal but near equal
let check = ajay === ajay2
console.log(check)
console.log(typeof ajay)
console.log(typeof ajay2)

// BigInt 
// max int goes to 2**52
// let a = 454545454n
let b = BigInt(45)
// console.log(2**52)
console.log(b)
