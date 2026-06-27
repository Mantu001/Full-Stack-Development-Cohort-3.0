// some js concept used in react
const obj = {
  name: "Raghav",
  age: 33,
  city: "Mumbai",
};
let fn = ({ name, age }) => {
  console.log(name, age);
};
fn(obj);

// isme lexical concept hai function jaha bana hai wo apne parent ke variable ko acces karta hai
let a = 990;
let print = () => {
  console.log(a);
};
let ab = () => {
  let a = 80;
  print();
};
ab();

// React 0 Started
console.log("this is window", window);
console.log("this is react", React);

// in Real DOM - process of creating element
const body = document.body;
const main = document.querySelector("main");
const h2 = document.createElement("h2");
console.log("real dom ", h2);
main.append(h2);
h2.textContent = "this is the dynamacally creted h2 tag by real DOM";

// Virtual DOM - process of creating element
const reacth2 = React.createElement(
  "h2",
  { class: "box" },
  "this is text content",
);
console.log(reacth2);
const newElemnt = React.createElement(
  "div",
  { class: "parent" },
  React.createElement(
    "div",
    { class: "child" },
    "Hello i am child under parent ",
  ),
);
console.log(newElemnt);

// virtual dom ko real dom me kaise show kare
const realDom = document.querySelector(".react-elem");
const virtualDom = ReactDOM.createRoot(realDom);
virtualDom.render(newElemnt);
// console.log(virtualDom);

// Import file form other js file
import { transfer, sum } from "./main.js";
// import {sum} from "./main.js"
console.log("This is imported from main.js file", transfer);
console.log("Sum is: ", sum(50, 70));

// practice to create element in virtual dom
const virtualDiv = React.createElement("div", {}, [
  React.createElement(
    "h1",
    {},
    React.createElement("span", {}, "This is span"),
  ),
  React.createElement("div", { class: "newDiv" }, "this is new div"),
]);
virtualDom.render(virtualDiv);
console.log(virtualDiv);

// const body = document.body
// const main = document.querySelector('main')
// const h2 = document.createElement('h2')
// h2.classList.add('testing')
// h2.textContent = 'hello this is real dom created by js'
// main.append(h2)


// console.log(React);
// const root = document.querySelector('.react-elem')
// const reactElem = React.createElement(
//   'h2',
//   {class: 'testing'},
//   'This is h2 created by react'
// )
// const store = ReactDOM.createRoot(root)
// store.render(reactElem)
// console.log(typeof(reactElem));
// console.log(reactElem);