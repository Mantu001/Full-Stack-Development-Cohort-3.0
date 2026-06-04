// ************************************ SELF PRACTICE phase 3
const x = 10;
function greet() {
  console.log("hello");
  function first() {
    console.log("first");
  }
  first();
  return 20;
}
console.log(greet());

// ************************************
function one() {
  two();
  console.log("one done");
  return 20;
}
function two() {
  three();
  console.log("two done");
}
function three() {
  console.log("three done");
}
console.log(one());

// ***************************** Hoisting
const a = 10;
console.log(a);

// *********** hoisting with function
var sayHi = function () {
  console.log("Hello");
};
sayHi();

// Scope
let b = 22;
function skope() {
  console.log(b);
  var c = 99;
  function nest() {
    console.log(c);
  }
  return "mantu";
}
console.log(skope());
// console.log(c);

// scope chain
var money = 23;
function parent() {
  var par = 33;
  function child() {
    var chi = 43;
    console.log(money, par, chi);
  }
  child();
}
parent();

// 1
console.log(xa);
var xa = 5;
// 2
foo();
function foo() {
  console.log("called");
}
// 3
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// 4
function make() {
  let secret = "hidden";
  return () => secret;
}
const reveal = make();
console.log(reveal());

function parent1() {
  var user1 = "harsh";
  function child1() {
    var childName = "aman";
    console.log(childName);
    console.log(user1);
    function grandChild() {
        console.log('------');
      var gc = "rohan";
      console.log(childName);
      console.log(user1);
      console.log(gc);
    }
    return grandChild;
  }
  return child1;
}
parent1()()()
