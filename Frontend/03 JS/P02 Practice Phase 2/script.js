// //////////////////////PART 1 — FUNCTION BASICS (1–20)

// ******************************** Beginner Level

// 1. Create a function named greet that prints "Hello World".
function greet() {
    console.log('Hello World');
}
greet()

// 2. Create a function add(a, b) that returns the sum.
function add(a,b) {
    return a+b;
}
console.log(add(2,6));

// 3. Write a function to calculate the square of a number.
function sq(num) {  
    return num*num
}
console.log(sq(8));

// 4. Create a function that checks whether a number is even or odd.
function isEven(a) {
    if(a%2 == 0){
        return true
    }
    return false
}
console.log(isEven(87));

// 5. Write a function that converts Celsius to Fahrenheit.
function tofah(c) {
    var f = (c*1.8)+32
    console.log('The temperature in f ', f);
}
tofah(43)

// 6. Create a function with default parameter "Guest".
function def(user = 'Guest') {
    console.log('The user name is :', user);
}
def()

// 7. Write a function that returns the greater of two numbers.
var greater = (a,b) =>{
    if (a>b){
        return a
    }
    return b
}
console.log('The greater number is: ',greater(43,8));

// 8. Create a function to calculate area of rectangle.
var area = (l,b) => {
    return 2*(l+b)
}
console.log('Area of Rectange :', area(4,6));

// 9. Write a function that returns "Adult" if age ≥ 18 else "Minor".
function isAdult(age) {
    if (age >= 18){
        return 'Adult'
    }
    return 'Minor'
}
console.log(isAdult(7));

// 10. Create a function to reverse a string.
function revStr(s) {
    var rev = ''
    for (let i = s.length -1; i>=0; i--){
        rev = rev + s[i]
    }
    return rev;
}
console.log('The reverse of the string is :',revStr('shubham'));


// ******************************** Intermediate Level

// 1. Write a function expression for multiplication.
var multiply = function (a,b) {
    return a*b
}
console.log(multiply(6,9));

// 2. Convert a normal function into an arrow function.
function normal() {
    console.log('This is the normal function');
}
var arrow = () => {
    console.log('This is the arrow function');
}
normal()
arrow()

// 3. Create a function that accepts unlimited numbers and returns their sum using rest operator.
function sum(...num) {
    let total = 0
    for(let n of num){
        total = total + n
    }
    return total
}
console.log(sum(1,2,4,5));
console.log(sum(1,2,3,4,5,6,7,8,9,10));

// 4. Write a function that counts vowels in a string.
function countVovel(str) {
    var count = 0
    for (var i=0; i<str.length; i++){
        if (str[i]=='a' || str[i] =='e' || str[i] =='i' || str[i] =='o' || str[i] =='u'){
            count ++;
        }
    }
    console.log(count);
}
countVovel('mantu kumar tiwari')

// 5. Create a function that checks if a string is palindrome.
var isPalindrome = (s) =>{
    var st = 0
    var ed = s.length -1
    while(st < ed){
        if (s[st] !== s[ed]){
            console.log('no it is not palindrome');
            return
        }
        st ++
        ed --
    }
    console.log('yes it is palindrome');
}
isPalindrome('isari')

// 6. Write a callback function example using setTimeout.
var cb = () => {
    console.log('This is the callback function');
}
setTimeout(cb, 1000)

// 7. Create a higher-order function that executes another function twice.
var higher = (a) => {
    console.log('This is the higher order function');
    a();
    a();
}
var lower = () => {
    console.log('This is lower function');
}
higher(lower)

// 8. Write a function that returns another function.
function fun(childFun) {
    return childFun()
}
function anotherFun() {
    console.log('This is the child function');
}
fun(anotherFun)

// 9. Create a pure function for subtraction.
function subtraction(a,b) {
    return a-b
}
console.log(subtraction(8,3));

// 10. Create an impure function using global variable modification.
var p = 10
function global() {
    p += 5
    return p
}
console.log(global(10));
console.log(global(10));


// // Concept Revision Practice
// function test1(user){
//     console.log('Function Decleration', user);
// }
// test1("Aman")
// var test2 = function (user){
//     console.log('Function Expression', user);
// }
// test2('Rekha')
// var test3 = (user) => {
//     console.log('Arrow Function', user);
// }
// test3('Cathy')
// var multiply = (a,b) =>{
//     return a*b
// }
// console.log(multiply(3,6));
// // callback function
// function main(cb) {
//     console.log('this is the main function');
//     cb()
// }
// function side() {
//     console.log('This is the side function');
// }
// main(side)
// // using same as arrow funtion 
// var main = (callback)=>{
//     console.log('this is arrow main function');
//     callback()
// }
// var side = ()=>{
//     console.log('This is arrow side function');
// }
// main(side)
// // another example by using arrow funciton 
// var processUser = (name = 'Mantu', callback)=>{
//     console.log('Processing user', name);
//     callback(name)
// }
// var greetUser = (name)=>{
//     console.log('Good Morning',name);
// }
// processUser('Anjali', greetUser)
// processUser( undefined, greetUser)
// // setTimeout
// setTimeout(()=>{
//     console.log('This is set timeout funciton');
// },2000)
