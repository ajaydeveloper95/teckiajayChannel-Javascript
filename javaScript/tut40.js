// lexical scope in function

let name = "parent";

function hey() {
//   let name = "child";
//   console.log(name);

  function parent() {
    // let name = "baby";
    console.log(name);
  }


  parent()
}

hey();
