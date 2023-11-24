// clone array and spread operator

let a = [345, 345, 435, 34, 554, 431, 5, 43, 54343];

let c = ["tecki ajay", "vikash", "sonu"];

let b = [...a, ...c,"new update"];

b.push("this element is push in the arr")

a.push("ttt");

console.log(a);
console.log(b);
