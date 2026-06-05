// ************************* SELF PRACRICE phase 2
// Basic function
function multiply (a,b){
    console.log(a*b);
}
multiply(3,7)

// Function Expression
var check = (age) => {
    if(age<0){
        return 'invalid input'
    }else if(age>=18){
        return 'adult'
    }
    return 'Minor'
}
console.log(check(8));

// Callback fuction
function primary(cb) {
    console.log('This is the primary function');
    cb()
}
function called() {
    console.log('This is the callback function');
}
primary(called)

// Array Basics
var arr = [11,22,31,42,51]
// arr.splice(1,2)
console.log(arr);
var join = arr.join('-')
console.log(join);
console.log(arr[-1]); // it return unidentified
console.log(arr.at(-2)); // .at parameter can return from right side
console.log(arr.reverse());
console.log(arr.sort((a,b) => a-b));
console.log(arr.at(1));
arr.forEach((e,i) => {
    console.log(e,i);
})
var double = arr.map((e,i) => {
    return e*2
})
console.log(double);
var filter = arr.filter((e) => {
    return e%2 == 0
})
console.log(filter);
var sum = arr.reduce((acc, val) => {
    return acc+val
},0)
console.log(sum);

// Object 
var obj = {
    user: 'Rahul',
    age: 20,
    isPlaced: true,
    city: 'Delhi'
}
Object.keys(obj).forEach((e,i) => {
    console.log(e,i);
})
Object.values(obj).forEach((e,i) => {
    console.log(e,i);
})


// // ************************************ SELF PRACTICE phase 3
// const x = 10;
// function greet() {
//   console.log("hello");
//   function first() {
//     console.log("first");
//   }
//   first();
//   return 20;
// }
// console.log(greet());

// // ************************************
// function one() {
//   two();
//   console.log("one done");
//   return 20;
// }
// function two() {
//   three();
//   console.log("two done");
// }
// function three() {
//   console.log("three done");
// }
// console.log(one());

// // ***************************** Hoisting
// const a = 10;
// console.log(a);

// // *********** hoisting with function
// var sayHi = function () {
//   console.log("Hello");
// };
// sayHi();

// // Scope
// let b = 22;
// function skope() {
//   console.log(b);
//   var c = 99;
//   function nest() {
//     console.log(c);
//   }
//   return "mantu";
// }
// console.log(skope());
// // console.log(c);

// // scope chain
// var money = 23;
// function parent() {
//   var par = 33;
//   function child() {
//     var chi = 43;
//     console.log(money, par, chi);
//   }
//   child();
// }
// parent();

// // 1
// console.log(xa);
// var xa = 5;
// // 2
// foo();
// function foo() {
//   console.log("called");
// }
// // 3
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 0);
// }
// // 4
// function make() {
//   let secret = "hidden";
//   return () => secret;
// }
// const reveal = make();
// console.log(reveal());

// function parent1() {
//   var user1 = "harsh";
//   function child1() {
//     var childName = "aman";
//     console.log(childName);
//     console.log(user1);
//     function grandChild() {
//         console.log('------');
//       var gc = "rohan";
//       console.log(childName);
//       console.log(user1);
//       console.log(gc);
//     }
//     return grandChild;
//   }
//   return child1;
// }
// parent1()()()
