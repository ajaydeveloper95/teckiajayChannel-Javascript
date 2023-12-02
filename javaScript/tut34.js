// object inside Arrays

let userBasic = {
    firstName: "ajay",
    LastName: "kumar",
    age: 34,
    status: "active",
  };


  let userAdv={
    addresh : "ajay",
    pincode:"332401",
}

let arr = [userAdv,userBasic]


let [userAInfo, userBInfo] = arr


let {addresh:Ads,pincode:PinCode} = userAInfo

// console.log(PinCode)

console.log(arr[0]["pincode"])


// ex - create a object with 5 arr and mix all the array value and create a new array value sum find
