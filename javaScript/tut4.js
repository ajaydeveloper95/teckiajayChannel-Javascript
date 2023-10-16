// Useful String methods
// concat() adding two strings
let a = "         tecki ajay channel   youtube also instgram page facebook page also testnewTEST         "
let b = "ajay"

let c = a.concat(b)
// console.log(a + " " +  b)
// console.log(c)

// replace()
// let g = a.replace("youtube","instagram")
// console.log(g)

// replaceAll ()
// let check = a.replaceAll("youtube","instagram")
// console.log(check)

// search() its find match in the string return index 
// let searcht = a.search("instgram")
// console.log(searcht)

// Slice() return string char in a range (0,5)
// let rangeCheck = a.slice(5,9)
// let rangeCheck = a.slice(0,3)
// console.log(rangeCheck)

// let splictcheck = a.split(" ")
// console.log(splictcheck)

// let checkToUpper = a.toUpperCase()
// let checkToLower = a.toLowerCase()
// console.log(checkToLower)

// trim() remove white space starting and end of the staring 
let trimtest = a.trim()
// trimEnd()
let trimtestEnd = a.trimEnd()
// trimStart()
let trimtestStart = a.trimStart()
// console.log(trimtestStart)



// Template Strings
let name = "ajay kumar"
let age = 20
let date = "03/11/2023"

// let temp = "Name: Ajay kumar Age:20 date : 11/11/2023"
// this temp create without templete string 
let temp1 ="Name:"+name+" "+ "age:" + age + " " + "Date:" + date

// create temp with templete string 
let temp2 = `Name: ${name} Age: ${age} date: ${date}`

console.log(temp2)
