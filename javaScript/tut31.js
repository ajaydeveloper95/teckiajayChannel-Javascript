// computed properties in object

let firstName = "Ajay"
let LastName = "kumar"

let user={
    firstName : "hello",
    LastName:"good",
    ['firstName'] : "kumar"

}

// user.thisAll = "hello this is all"
// user[LastName] = "this is computed of LastName"

console.log(user)