// ******************************************** Beginner Level

// ### 1. Create an Object Create an object for a student with:- name- age- course Then print all values.
var student = {
    name: 'Rohan',
    age: 20,
    course: 'b.tech'
}
console.log(Object.values(student));

// ### 2. Access Properties Given: ```jsx const car = {  brand: "BMW",  model: "M4",  year: 2022} ``` Print:- brand- model using both:- dot notation- bracket notation
const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}
// using dot
console.log(car.brand);
console.log(car.model);
// using bracket
console.log(car['brand']);
console.log(car['model']);

// ### 3. Update Object Value Change the age of a user from 20 to 25.
const user = {
  name: "Anubhav",
  age: 20
}
user.age = 25
console.log('Age update',user);

// ### 4. Add New Property Add a new property:
user.isAdmin = true
console.log('adding admin',user);

// ### 5. Delete Property Remove the `password` property from the object.
const account = {
  username: "john",
  password: "12345"
}
delete account.password
console.log(account);


// ******************************************** Intermediate Level

// ### 6. Count Properties Write a function that returns how many properties an object has.
var prop = {
  a: 1,
  b: 2,
  c: 21
}
function countProperties(a) {
  return Object.keys(a).length
}
console.log(countProperties(prop));

// ### 7. Loop Through Object Print all keys and values from this object.
const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}
Object.keys(person).forEach(function(val) {
  console.log(val);
})
Object.values(person).forEach(function(val) {
  console.log(val);
})

// ### 8. Check Property Exists Check whether `"email"` exists inside an object or not.
var isExist = {
  name: 'Rahul',
  email: 'xyz@gmail.com',
  roll: 34434224,
  branch: 'AIML'
}
let found = false
for (let i=0; i<Object.keys(isExist).length; i++){
  if(Object.keys(isExist)[i] == 'email'){
    found = true
    break
  }
}
if(found){
  console.log('yes email exist');
}else{
  console.log('do not exist');
}

// ### 9. Merge Two Objects Merge these two objects into one.
const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

var mergeobj = {
  ...obj1,
  ...obj2
}
console.log(mergeobj);

// ### 10. Convert Object to Array Convert this object into an array of key-value pairs.
const userEntities = {
  name: "Aman",
  age: 21
}
console.log(Object.entries(userEntities));  // for printing all values in an array


// ******************************************** Problem Solving Level

// ### 11. Find Highest Value Find the student with highest marks.
var marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}
var higest = 0
var topper = ''
for (var stu in marks){
  if(marks[stu] > higest){
    higest = marks[stu]
    topper = stu
  }
}
console.log(topper);

// ### 12. Sum of Object Values Find total salary.
const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}
var sum = 0
for (var name in salaries){
  sum += salaries[name]
}
console.log(sum);

// ### 13. Nested Object Access Print:- city - pincode
console.log('Printing nested object');
const user2 = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}
console.log(user2.address.city);
console.log(user2.address.pincode);

// ### 14. Object Method Practice Create an object with:- name- marks- method called `getResult`
var obj = {
  name: 'kartik',
  marks: 87,
  getResult: function(marks){
    if(marks > 40){
      console.log('Pass');
    }else{
      console.log('Fail');
    }
  }
}
obj.getResult(78)

// ### 15. Convert Array to Object Convert this array into an object.
const arr = ["name", "Anubhav", "age", 24]
var arrToObj = {}
for (let i=0; i<arr.length; i+=2){
  arrToObj[arr[i]] = arr[i+1]
}
console.log(arrToObj);


// ******************************************** Harder Practice Questions (doubt solid questions)

// ### 16. Frequency Counter Count frequency of each character.
const str = 'banana'
const freq = {}
for (let char of str){
  freq[char] = (freq[char] || 0)+1
}
console.log(freq);

// ### 17. Group By Property Group users by age.
const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]
let result = {}
for (let user of users){
  if(!result[user.age]){
    result[user.age] = []
  }
  result[user.age].push(user)
}
console.log(result);

// ### 18. Deep Property Check Check whether this property exists:
// Doubt (chat gpt copy)
const objP = {
    user: {
        address: {
            city: "Delhi"
        }
    }
};
const path = "user.address.city";
let keys = path.split(".");
let current = objP;
let exists = true;
for(let key of keys){
    if(current[key] === undefined){
        exists = false;
        break;
    }
    current = current[key];
}
console.log(exists);

// ### 19. Object Comparison Check if two objects have same keys and values.
console.log('Object comparision');
o1 = {a:1,b:2}
o2 ={a:1,b:2}
if(JSON.stringify(o1) == JSON.stringify(o2)){
  console.log(true);
}else{
  console.log(false);
}

// ### 20. Remove Duplicate Objects Remove duplicate objects from array based on `id`.
// doubt (chat gpt copied)
let user1 = [
  {id:1, name:"A"},
  {id:2, name:"B"},
  {id:1, name:"A"}
];
let seen = {};
let res = [];
for(let user of user1){
    if(!seen[user.id]){
        seen[user.id] = true;
        res.push(user);
    }
}
console.log(res);