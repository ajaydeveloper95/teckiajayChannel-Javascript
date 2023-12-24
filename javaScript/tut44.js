// parameter destructure

let arr = [6, 5, 645, 4, 6];
let arr1 = [6, 5, 645, 4, 622];
let obj1 = {
  name: "tecki ajay",
  lastName: "budaniya",
};

let obj2 = {
  name: "tecki ajay",
  lastName: "budaniya",
};

function fn(...all) {
  console.log(all);
}

// fn(arr)
fn(obj1,obj2);
