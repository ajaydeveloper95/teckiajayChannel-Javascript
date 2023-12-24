// function inside function

function parent(a, b) {
  let sum = a + b;
  function child(c) {
    // console.log(arguments)
    let sumAll = a + b + c;
    let sumAll1 = sum + c;
    console.log("Sum of all varible ", sumAll1);
    function child2(d) {
      console.log(arguments);
      let sumD = sumAll + d;
      console.log(sumD);
    }
    child2(5);
  }
  child(4);
}

parent(2, 3);


// ex - create a function inside function check if function is calling once then retrun this function is call already 
