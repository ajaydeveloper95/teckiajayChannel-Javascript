// Object destructuring in js

let userBasic = {
  firstName: "ajay",
  LastName: "kumar",
  age: 34,
  status: "active",
};

// let fName = userBasic.firstName
// let lName = userBasic.LastName
// let Age = userBasic.age
// let Status = userBasic.status

// let {property:varibleName, otherProperty:VaribleName} = object

// let {firstName:fName,LastName:lName,age:Age,status:Status} = userBasic

// same varible name as a object property

let { firstName, LastName, age : Age, status, test} = userBasic;

console.log(test);
