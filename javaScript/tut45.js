// intro to callback fucntions

function FullName(age){
    console.log(age)
}

function fn (name,callBack,age){
    console.log(`Hello this is ${name}`)
    callBack(age)
}

// fn("Teckiajay",FullName,20)






let ar = [5,345,4,5,4]

function ReturnSum (val){
    console.log("Total of all value is :",val)
}

function sum(callBack,[...arr]){
    let data = 0
    for(let item of arr){
        data +=item
    }
    callBack(data)
}

sum(ReturnSum,ar)