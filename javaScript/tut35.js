// nested Destructuring in js

let parent = {
  value1: "ajay",
  value2: "vijay",
  value3: "sonu",
  child: {
    v1: "sonu",
    v2: "sarita",
    v3: "mukesh",
    baby:{
        b1:"good",
        b2:"osm"
    }
  },
};

// nested destructuring 

// let {value1,value2,value3,child} = parent

// let {v1,v2,v3} = parent.child

let {b1,b2} = parent.child.baby

console.log(b1)