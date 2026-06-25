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


// ////////////////////// Part 2 — Advanced Functions (21–35)

// 1.Write a recursive function for factorial.
function fact(num) {
    if (num<=1) return 1
    return num*fact(num-1)
}
console.log('Factorial is ',fact(5));

// 2. Write recursive Fibonacci function.
function fibo(n) {
    if(n == 1){
        return 0
    }else if(n == 2){
        return 1
    }
    return fibo(n-1)+fibo(n-2)
}
let n = 9
console.log(`The ${n}th serie in fibonacci is: ${fibo(n)}`);

// 3. Create a function that finds power using recursion.
function power (n,p){
    if (p === 0) return 1
    return n*power(n,p-1)
}
console.log(`The power of number is ${power(3,4)}`);

// 4. Create an IIFE that prints "Executed".
(() => {
    console.log('executed');
})()

// 5. Write a function that memoizes factorial calculation.
// here memorization means store the previous value which help to prevelt the repeated calculation for the same
const cache = {}
function fa(n) {
    if(n in cache){
        return cache[n]
    }
    if(n <= 1) return 1
    cache[n] = n*fa(n-1)
    return cache[n]
}
console.log(`the factorial is : ${fa(7)}`);
console.log(cache);

// 6. Create a closure counter function.
function counter() {
    count = 0
    return function () {
        count ++
        return count
    }
}
const increase = counter()
console.log('counter',increase());
console.log('counter',increase());

// 7. Write a function currying example for addition.
// function ke andar function pass karna aur isme sab apne parent ke funciton ke argument ko access kar paye
function add(a) {
    return function(b) {
        return function (c){
            return a+b+c
        }
    }
}
console.log('add',add(1)(2)(3));

// 8. Create debounce function logic.
//  it limits the frequent exucutes of the function it run after a certain time 
function debounce(fn,delay){
    let timer
    return function (){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay);
    };
}
function greet() {
    console.log('hello');
}
const debounceGreet = debounce(greet,2000)
debounceGreet()
debounceGreet()

// 9. Create throttle function logic.
// ek speicfic time interval me ek baar hi chalega ex scorll me use hoga
function throttle(fn,delay) {
    let shouldCall = true
    return function(...args){
        if(!shouldCall) return
        fn(...args)
        shouldCall = false
        setTimeout(() => {
            shouldCall = true
        },delay)
    }
}
function greet() {
    console.log('Hello');
}
const throttleGreet = throttle(greet,2000)
throttleGreet()

// 10. Write a function that executes only once.
function once(fn){
    let called = false
    return function (...args){
        if (called) return 
        called = true
        return fn(...args)
    }
}
function onlyOnce(){
    console.log('Sirf ek baar call hoga');
}
const greetOnce = once(onlyOnce)
greetOnce()

// 11.Create custom implementation of map.
Array.prototype.myMap = function (callback) {
    const result = []
    for (let i=0; i<this.length; i++){
        result.push(callback(this[i], i, this))
    }
    return result
}
const arr = [2,3,4]
const resultMap = arr.myMap((e,i) => {
    return e*2
})
console.log(resultMap);

// 12. Create custom implementation of filter.
Array.prototype.myFilter = function(cb){
    const result = []
    for (let i=0; i<this.length; i++){
        if (cb(this[i], i, this)){
            result.push(this[i])
        }
    }
    return result
}
const resultFilter = arr.myFilter((e) => {
    return e>2
})
console.log(resultFilter);

// 13. Create custom implementation of reduce.
Array.prototype.myReduce = function (callback, initValue) {
    let acc = initValue
    for (let i=0; i<this.length; i++){
        acc = callback(acc, this[i], i, this);
    }
    return acc
}
const resultReduce = arr.myReduce((acc,curr) => {
    return acc + curr
},0)
console.log(resultReduce);

// 14. Create custom forEach.
Array.prototype.myForEach = function (cb){
    const result = []
    for (let i=0; i<this.length; i++){
        cb(this[i], i, this)
    }
}
arr.myForEach((e,i) => {
    console.log(e,i);
})

// 15. Explain output: 
function test() {
    return;
    console.log("Hello");
}
console.log(test());
// output is undefined because function doesn't read the hello because it return before the console 






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
