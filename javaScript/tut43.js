// rest parameters

let ar = [3,4,5,6,7,8,6,7,6]
let ar1 = [3,4,5,6,7,8,6,7,666,1]
let obj = {
    name:"teckiajay",
    age:2
}

// function sum(...all) {
//     console.log(all)
//     let add = 0
//     let [a,b,c,ar1] = all
//     for (let item of ar1){
//         add += item
//     }
//     console.log(add)
//   }
  
//   sum(1,2,ar,ar1);

function ch ({...all}) {
    console.log(all.age)
}

ch(obj)