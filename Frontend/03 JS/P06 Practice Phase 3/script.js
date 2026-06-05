// ******************* Part 1: Variables, Functions & Conditions

// Q1. Create a function that returns the sum of two numbers.
const add = (a,b) => {
    return a+b
}
console.log('Sum',add(10,20));

// Q2. Create a function that returns the square of a number.
const sq = (a) => {
    return a*a
}
console.log('square',sq(5));

// Q3. Create a function that checks whether a number is Even or Odd.
const checkEvenOdd = (a) => {
    if (a%2==0){
        return 'even'
    }
    return 'odd'
}
console.log('Even/odd',checkEvenOdd(7));

// Q4. Create a function that returns the larger number among two numbers.
const max = (a,b) => {
    if (a>b){
        return a
    }
    return b
}
console.log('Maximum',max(10,20));

// Q5. Create a function that checks if a person is eligible to vote.
const isEligible = (a) => {
    if (a>=18){
        return 'Eligible for vote'
    }
    return 'Not eligible'
}
console.log(isEligible(28));


//****************************** */ Part 2: Loops

// Print numbers from 1 to 50 using a loop.
const num = []
for (let i=1; i<=50; i++){
    num.push(i)
}
console.log(num);

// Q7. Print all even numbers between 1 and 100.
const even = []
for (let i=1; i<=100; i++){
    if(i%2 ==0){
        even.push(i)
    }
}
console.log(even);

// Q8. Find the sum of numbers from 1 to 100.
let sum = 0
for (let i=1; i<=100; i++){
    sum += i
}
console.log('Sum from 1 to 100: ',sum);

// Q9. Print the multiplication table of a number.
const table = (n) => {
    for (let i=1; i<=10; i++){
        console.log(`${n} X ${i} = ${n*i}`);
    }
}
table(5)

// Q10. Count how many digits are present in a number.
const countDigit = (n) => {
    count = 0
    while (n>0) {
        n = Math.floor(n/10)
        count ++
    }
    console.log(count);
}
countDigit(34445345)


// ********************************* Part 3: Strings

// Q11. Reverse a string.
let ans = ''
const revStr = (s) => {
    for(let i=s.length-1; i>=0; i--){
    ans += s[i]
    }
    return ans
}
console.log(revStr('rohan'));

// Q12. Count vowels in a string.
const vowel = 'aeiou'
const countVowel = (s) => {
    count = 0
    for (let char of s){
        if (vowel.includes(char))
            count++
    }
    return count
}
console.log(countVowel('javascript'));

// Q13. Check whether a string is a palindrome.
var isPalindrome = (s) => {
    let st = 0
    let end = s.length-1
    while (st < end) {
        if(s[st] !== s[end]){
            return false
        }
        st++
        end--
    }
    return true
}
console.log(isPalindrome('madam'));

// Q14. Convert the first letter of every word to uppercase.
var s = 'mantu kumar tiwari';
var words = s.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
}
console.log(words.join(' '));

// Q15. Count how many times a character appears in a string.
const countChar = (word,letter) => {
    let count = 0
    for (let i=0; i<word.length; i++){
        if (word[i] == letter){
            count ++
        }
    }
    return count
}
console.log('Count char',countChar('javascript', 'a'));


// ************************************ Part 4: Arrays

// Q16. Find the largest number in an array.
function largest (a) {
    return Math.max(...a)
}
var arr = [10, 20, 30, 405, 50]
console.log('largest',largest(arr));

// Q17. Find the smallest number in an array.
function smallest (a) {
    return Math.min(...a)
}
var arr = [10, 20, 30, 405, 50]
console.log('Smallest',smallest(arr));

// Q18. Find the sum of all array elements.
var n = [1,2,3,4,5]
let jorna = n.reduce((acc, val) => {
    return acc+val
},0)
console.log('Sum',jorna);

// Q19. Return only even numbers from an array.
let ar = [1,2,3,4,5,6]
const onlyEven = ar.filter((e) => {
    return e%2 ==0
})
console.log(onlyEven);

// Q20. Remove duplicate values from an array.
const number = [1,2,2,3,4,4,5]
const unique = []
for (let i=0; i<number.length; i++){
    if(!unique.includes(number[i])){
        unique.push(number[i])
    }
}
console.log(unique);

// // *************************** SELF PRACTICE phase 1
// // fasly value
// if (NaN){  // 0, '', null, false, NaN, unidentified
//     console.log('true');
// }else{
//     console.log('false');
// }

// // loops
// var num = [10,20,30,40,50,60,70]
// for (value of num){
//     console.log(value);
// }
// for (index in num){
//     console.log(index);
// }

// // Maths
// console.log('Printing Random value');
// // console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
// // console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
// // console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
// // console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
// // console.log(Math.floor(Math.random()*(9999-1000+1))+1000);
// console.log(Math.ceil(Math.random()*900)+100);
// console.log(Math.ceil(Math.random()*900)+100);
// console.log(Math.ceil(Math.random()*900)+100);
// console.log(Math.ceil(Math.random()*900)+100);
// console.log(Math.ceil(Math.random()*900)+100);
// console.log(Math.ceil(Math.random()*900)+100);


// // ************************* SELF PRACRICE phase 2
// // Basic function
// function multiply (a,b){
//     console.log(a*b);
// }
// multiply(3,7)

// // Function Expression
// var check = (age) => {
//     if(age<0){
//         return 'invalid input'
//     }else if(age>=18){
//         return 'adult'
//     }
//     return 'Minor'
// }
// console.log(check(8));

// // Callback fuction
// function primary(cb) {
//     console.log('This is the primary function');
//     cb()
// }
// function called() {
//     console.log('This is the callback function');
// }
// primary(called)

// // Array Basics
// var arr = [11,22,31,42,51]
// // arr.splice(1,2)
// console.log(arr);
// var join = arr.join('-')
// console.log(join);
// console.log(arr[-1]); // it return unidentified
// console.log(arr.at(-2)); // .at parameter can return from right side
// console.log(arr.reverse());
// console.log(arr.sort((a,b) => a-b));
// console.log(arr.at(1));
// arr.forEach((e,i) => {
//     console.log(e,i);
// })
// var double = arr.map((e,i) => {
//     return e*2
// })
// console.log(double);
// var filter = arr.filter((e) => {
//     return e%2 == 0
// })
// console.log(filter);
// var sum = arr.reduce((acc, val) => {
//     return acc+val
// },0)
// console.log(sum);

// // Object 
// var obj = {
//     user: 'Rahul',
//     age: 20,
//     isPlaced: true,
//     city: 'Delhi'
// }
// Object.keys(obj).forEach((e,i) => {
//     console.log(e,i);
// })
// Object.values(obj).forEach((e,i) => {
//     console.log(e,i);
// })


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
