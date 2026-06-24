// forEach loop
var arr = [23,34,74,9,4,8]
arr.forEach(() => {
    console.log('this is forEach loop printing console statement');
})
// arr.forEach(function value(a){
//     console.log('printing value', a);
// })
arr.forEach((a) => {
    console.log('printing value',a);
})
var s = 0;
arr.forEach(function sum(elem) {
    s = s+elem
})
console.log('sum',s);

// Map 
var brr = [1,2,3,4,5]
var store = brr.map(function (x) {
    return x*x*x;
})
console.log('The cube of element: ',store);

var user = ['Sarthak', 'Abhishek','Anushka','Rohit']
var newUser = user.map(function (elem){
    return elem + ' Sharma'
})
var anotherUser = user.map(function (elem){
    return elem.length
})
console.log(newUser);
console.log(anotherUser);

// Filter
var marks = [23,65,54,75,45,24,86]
var passMarks = marks.filter(function(a){
    return a>60
})
console.log(passMarks);

var tarak = ['Arnav', 'Babita', 'chintu', 'Dev']
tarak.forEach(function (a) {
    console.log(a);
})
var tarakMap = tarak.map(function (a) {    
    return 'welcome '+ a
})
console.log(tarakMap);
var tarakFilter = tarak.filter(function (b) {
    return b.includes('a')
})
console.log(tarakFilter);

// Reduce
var red = [1,2,3,4,5]
var redFun = red.reduce(function (acc,val) {
    return acc*val
},1)
console.log(redFun);

// finding max value using reduce
var aarr = [ 23,64,87,234,76,47]
var maxi = aarr.reduce(function (acc,val) {
    if (val > acc){
        return val
    }
    return acc
},0)
console.log('The maximum value is :', maxi);

// Find 
var c = ['Mantu','Nitin', 'Rahul', 'Sweta', 'Dipti']
// var cResult = c.find(function (elem){
//     return elem == 'Mantu'
// })
var cResult = c.find((elem) => {
    return elem == 'Mantu'
})
console.log(cResult);

// Find and findIndex concept
const nums = [1,2,5,6,8,9]
const eleAns = nums.find((e) => {
    return e>6
})
const idxAns = nums.findIndex((e) => {
    return e>6
})
console.log(nums);
console.log(eleAns);
console.log(idxAns);

// Array Destructuring
const arr1 = [10,20,30,40]
const [aa,bb,cc,dd] = arr1
console.log(aa,bb,cc,dd);
const arr2 = [...arr1] 
console.log(arr2);
console.log(arr2[1]);