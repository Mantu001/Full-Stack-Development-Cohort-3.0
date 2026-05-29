console.log('This is array class');
var arr3 = [12,23,34,45,56,67]
console.log(arr3);

var arr1 = ['rahul', 'shobhit', 'sandhya']
console.log(arr1);
arr1[1] = 'sweta'
console.log(arr1);

var arr2 = [12.45,'Shubham', 34, 'Nitin']
console.log(arr2);
arr2[2] = true
console.log(arr2 );

var test = [12,43,64,75,54,75,34,26,56,73,7,3,8,3]
console.log(test.length); // for finding lengrh
console.log(test[test.length -1]);  // last index element

// operation at end
let num1 = [10,20,30,40,50]
num1.push(99)
console.log(num1);
num1.pop()
num1.pop()
console.log(num1);

// operation at start
let num2 = [10,20,30]
num2.unshift(1)         
num2.unshift(2)         
console.log(num2);
num2.shift()
console.log(num2);

console.log('Splice application');
// (index, delete, add)
let a = [11,22,33,44,55]
a.splice(1,2,20,30)
console.log(a);

// empty array
let arr4 = [1,2,3,4]
arr4[10] = 10
console.log(arr4);

// 2d Array
var multiArr = [
    [10,20,30,40],
    [11,22,33,44],
    [12,24,36,48]
]
console.log(multiArr);
console.log(multiArr[1][2]);
console.log('length of array', multiArr.length);

// sort, reverse
var a1 = [54,93,964,38,25]
console.log('sorting', a1.sort());
// console.log('reversing', a1.reverse());

// Loop in array
var looop = [10,20,30,40,50]
// for (var i=0; i<looop.length; i++){
//     console.log(looop[i]);
// }
for (value of looop){ // this doesnot require length it automatically get
    console.log(value);
}

// inserting element in empty array
var num3 = []
for (let i=0; i<100; i++){
    if (i%2 == 0){
            num3.push(i)
    }
}
console.log(num3 );

// slice and  concat
var b1 = [10,20,30,40]
var b2 = [11,22,33,44]
console.log(b1.concat(b2));
var b3 = b1.slice(0,2)
console.log(b3);

// split and join
var str = 'Sheryians coding School'
var store = str.split(' ')
console.log(store);
console.log(store[1]);
var str1 = ['2', 'October', '2007']
var store1 = str1.join('/')
console.log(store1);

// Array storage concept 
// array is storing in their heap memory 
var arrr1 = [10,20,30,40,50]
// var arrr2 = arrr1
// arrr2 = [arrr1[0],arrr1[1],arrr1[2],arrr1[3],arrr1[4]] // this is the spread form to access the element ([...arrr1])
arrr2 = [...arrr1]  // now this is the shortest way to write the upper code
arrr2.push(99) // here if i apply changes on arrr2 but this will also reflect in arrr1 this is because array store in the heap memory which store the address of the array 
console.log(arrr1);
console.log(arrr2);