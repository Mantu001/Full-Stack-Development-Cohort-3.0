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

