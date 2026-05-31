// ***************************************** 1. forEach()

// ### Intermediate Question You are given an array of prices. Print each price with `"₹"` before it.
console.log('price with `"₹"`');
let prices = [100, 250, 399, 499];
prices.forEach(function(p){
    console.log('₹ '+ p);
})

// ### Hard Question You are given an array of students.- `"Pass"` if marks are greater than 50`"Fail"` otherwise
console.log('Pass or Fail');
let students = [
  { name: "Anubhav", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Aman", marks: 90 },
];
students.forEach(function(ele,idx){
    if (students[idx].marks > 50){
        console.log(students[idx].name, '- Pass');
    }else{
        console.log(students[idx].name,'- Fail');
    }
})


// ***************************************** 2. map()

// ### Intermediate Question Convert all names into uppercase.
let names = ["anubhav", "rahul", "aman"];
var capsName = names.map(function(e){
    return e.toUpperCase()
})
console.log('to Uppercase', capsName);

// ### Hard Question You are given products. Create a new array where:- Every product has a new property `discountPrice`- Discount is 10%
let products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
];
var dp = products.map(function(e){
    return {
        ...e,
        discountPrice: 0.9*e.price
    }
})
console.log('Discounted price',dp);


// ***************************************** 3. filter()

// ### Intermediate Question Filter all even numbers.
let nums = [1,2,3,4,5,6,7,8];
var even = nums.filter(function(n){
    return n%2==0
})
console.log('Even Number filter',even);

// ### Hard Question You are given users. Return only active users.
let users = [
  { name: "Anubhav", active: true },
  { name: "Rahul", active: false },
  { name: "Aman", active: true },
];
var activeUser = users.filter(function(e,i){
    return e.active === true
})
console.log('Return Active User',activeUser);


// ***************************************** 4. reduce()

// ### Intermediate Question Find total sum of array.
let nums1 = [10,20,30,40];
var sum = nums1.reduce(function(acc, val) {
    return acc+val
},0)
console.log('Sum of Array',sum);

// ### Hard Question Count frequency of elements. (doubt)
let fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
let count = fruits.reduce(function(acc,val){
    if(acc[val]){
        acc[val] ++
    }else{
        acc[val] =1
    }
    return acc
},{})
console.log('Count Frequency',count);


// ***************************************** 5. find()

// ### Intermediate Question Find first number greater than 50.
let nums2 = [20, 35, 60, 80];
var greatNum = nums2.find(function(e){
    return e>59
})
console.log('Number Greater than 50 ',greatNum);

// ### Hard Question Find a user with username `"admin"`.
let user = [
  { username: "rahul" },
  { username: "admin" },
  { username: "aman" }
];
// var adminUser = user.find( e => e.username === 'admin')
var adminUser = user.find((e) =>{
    return e.username === 'admin'
})
console.log(adminUser);


// ***************************************** 6. findIndex()

// ### Intermediate Question Find index of number `90`.
let nums4 = [10, 40, 90, 50];
var numIdx = nums4.findIndex( a => a == 90)
// var numIdx = nums4.findIndex((a) => {
//     return a == 90
// })
console.log('finding index',numIdx);

// ### Hard Question Find index of first failed student.
let stu = [
  { name: "A", marks: 90 },
  { name: "B", marks: 30 },
  { name: "C", marks: 70 },
];
var failed = stu.findIndex( a => a.marks<40)
// var failed = stu.findIndex(function (e) {
//     return e.marks < 40
// })
console.log('Index of failed student',failed);


// ***************************************** 7. some()

// ### Intermediate Question Check if any number is negative.
let nums5 = [10, 20, -5, 40];
var negNum = nums5.some((a) => a<0)
console.log('is Negative',negNum);

// ### Hard Question Check if any product is out of stock.
let product = [
  { name: "Laptop", stock: 5 },
  { name: "Phone", stock: 0 },
];
var os = product.some(function (a) {
    return a.stock === 0
})
console.log('is out of stock',os);


// ***************************************** 8. every()

// ### Intermediate Question Check if all numbers are positive.
let nums6 = [10, 20, 30, 40];
var posNum = nums6.every(function(a) {
    return a>=0
})
console.log('are all positive',posNum);

// ### Hard Question Check if all student passed.
let student = [
  { name: "A", marks: 80 },
  { name: "B", marks: 45 },
  { name: "C", marks: 60 },
];
var pass = student.every(function (a) {
    return a.marks > 40
})
console.log('is student passed',pass);