// Iterate objects


let user = {
    // key:value
    Fname:"tecki",
    Lname:"ajay",
    age:"2019",
    addresh:"sikar",
    invo:["tech topic","tech news","tech trend","course" ],
    isActive:true,
    34:"is 34"
}

let con = Object.keys(user)

// console.log(con)

// for of loop using iterarte the object
// for (let item of con){
//     // console.log(item)
//     console.log(`keys : ${item}  = value : ${user[item]}`)
// }


// for in loop using iterate the object
// for(let item in user){
//     // console.log(item)
//     console.log(`keys : ${item}  = value : ${user[item]}`)
// }

// for loop using iterate the object 
for(let i = 0;i<con.length;i++){
    let keyF = con[i]
    console.log(user[keyF])
}
