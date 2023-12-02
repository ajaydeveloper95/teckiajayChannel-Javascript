// spread operator in objects

let userBasic={
    firstName : "ajay",
    LastName:"kumar",
    age:34,
    status:"active"
}

let userAdv={
    addresh : "ajay",
    pincode:"kumar",
}

let v = "osm"

let completeInfo = {...userBasic,...userAdv,mobile:"34563454"}

completeInfo["hello"]= "good"

completeInfo[v] = "good osm"
completeInfo.v = "good osm"

let completCln = {...completeInfo}

console.log(completCln)

