// *************************************** The this Keyword

// ## Problem 1: Global vs Function `this` Create a function `showThis()` and print the value of `this` when:
// // - Called in strict mode 
// 'use strict' 
// function showThisStrict() {
//     console.log(this);
// }
// showThisStrict()
// // - Called normally
// function showThis(){
//     console.log(this);
// }
// showThis()

// Problem 2: Object Method Context
const user = {
  name: "Anubhav",
  call(){
    console.log('hello ' + this.name);
  }
};
user.call() 

// Problem 3: Arrow Function vs Regular Function
const obj1 = {
    name: 'Rahul',
    normal() {
        console.log('normal function');
        console.log(this.name);
    }
}
obj1.normal()
const obj2 = {
    name: 'Rahul',
    arrow: () => {
        console.log('arrow function');
        console.log(this.name); // it throw undefined
    }
}
obj2.arrow()

// Problem 4: Nested Callback Problem // doubt solved in notes phase 4
const hoby = {
    name: "Rahul",
    hobbies: ["Coding", "Gaming", "Reading"],
    call(){
        this.hobbies.forEach((e) => {
            console.log(`${this.name} likes ${e}`);
        })
    }
}
hoby.call()

// Problem 5: Event Handler Simulation
var b = document.querySelector('button')
// b.addEventListener("click", function () { // normal function
//   console.log(this); // this uss button ko hi pass kar dega
// });
b.addEventListener("click", () => {
    console.log(this); // this will return window
})


// ************************************ call(), apply(), bind()

// Problem 6: Borrow a Method using call()
const person1 = {
    name: "Anubhav" ,
    intro() {
        console.log(`Hi, I am ${this.name}`);
    }
};
const person2 = {
    name: "Rahul" 
};
person1.intro()
person1.intro.call(person2)

// Problem 7: apply() with Array Arguments
function place(city,country) {
    console.log(`Hi I am ${this.name} from ${city}, ${country}`);
}
place.apply(person1, ['Indore', 'India'])
place.apply(person2, ['San Fransisco', 'USA'])

// Problem 8: bind() for Delayed Execution
const person3 = {
    name: 'Sarthak',
    age: 23,
}
function printName() {
    console.log(this.name);
}
setTimeout(printName.bind(person3) , 2000);

// Problem 9: Custom Calculator
const value = {
    val: 100
}
function add(a,b) {
    console.log(this.val+a+b);
}
add.call(value,10,20)
add.apply(value,[30,40])
const bindAdd = add.bind(value,30,60)
bindAdd()


// ************************************** Prototypes

// Problem 10: Prototype Lookup
const person = {
  name: "Rahul"
};
// console.log(person.hasOwnProperty("name") == person.__proto__);
console.log(person.hasOwnProperty("name"));
console.log(person.hasOwnProperty("toString"));

// Problem 11: Create a Custom Prototype Method
const arr = [10,20,30,40]
Array.prototype.sum = function () {
    let total = 0
    for (let i=0; i<this.length; i++){
        total += this[i]
    }
    return total
}
console.log(arr.sum());

// Problem 12: Object.create()
const animal = {
    eat(){
        console.log('Animal is eating');
    },
    sleep(){
        console.log('Animal is sleeping');
    }
}
const dog = Object.create(animal)
dog.bark = true
console.log(dog.bark);
dog.eat()
dog.sleep()

// Problem 13: Prototype Inheritance
const vehicle = {
    name: 'Gaddi',
    start() {
        console.log(this.name,'Start');
    },
    stop(){
        console.log(this.name,'Stop');
    },
}
let car = Object.create(vehicle)
let bike = Object.create(vehicle)
let truck = Object.create(vehicle)
// car.__proto__ = vehicle  //old methods
// bike.__proto__ = vehicle
// truck.__proto__ = vehicle
car.start()

// Problem 14: Constructor Function + Prototype  
class person4 {
    constructor(fname, age){
        this.fname = fname
        this.age = age
    }
    swagat(){
        console.log('Hello, I am ',this.fname);
    }
}   
const p1 = new person4('Sarthak', 23)
console.log(p1);
p1.swagat()
console.log(person4.prototype);

// Problem 15: Prototype Chain Investigation
const ar = [11,22,33,44,55]
console.log(ar.__proto__); // it show array prototype
console.log(ar.__proto__.__proto__); // it show object prototype
console.log(ar.__proto__.__proto__.__proto__); // it show null
// reson array/funtion prototype < object prototype (higher) < null


// ************************************* ES6 Classes

// Problem 16: Basic Class
class Student {
    constructor(name,course) {
        this.name = name;
        this.course = course;
    }
}
function intrduce(){
    console.log(`Hello My name is ${this.name} and I Study ${this.course}`);
}
console.log('before',Student.prototype);
// const protoCopy = {...Student.prototype} // self analysis
Student.prototype.intro = intrduce // funtion class ke bahar isliye ye use karna par raha hai
const st1 = new Student('Mantu', 'Cohort3.0')
st1.intro()

// Problem 17: Employee Management
class Employee {
    constructor(name,salary) {
        this.name = name
        this.salary = salary
    }
    increaseSalary(){
        console.log('Salary is increased');
    }
    showSalary(){
        console.log('your salary is: ', this.salary);
    }
}
console.log(Employee.prototype);
const e1 = new Employee('Muskan', 35000)
console.log(e1);
e1.increaseSalary()
e1.showSalary()

// Problem 18: Bank Account System
class BankAccount {
    constructor(balance, deposit,withdraw){
        this.balance = balance
        this.deposit = deposit
        this.withdraw = withdraw
    }
    checkBalance(){
        if(this.withdraw > this.balance){
            console.log('Insufficient Amout');
            console.log('Total Balance', this.balance);
        }else{
            console.log('Current Balance after withdraw: ',this.balance = this.balance - this.withdraw);
        }
    }
}
const c1 = new BankAccount(10000,0,3454)
console.log(c1);
c1.checkBalance()

// Problem 19: Inheritance Challenge
class Animal{
    constructor(name, house){
        this.name = name;
        this.house = house;
    }
    eat(){
        console.log(this.name, 'is eating');
    }
}
class Dog extends Animal {
    constructor(name,house,breed){
        super(name,house)
        this.breed = breed
    }
    bark(){
        console.log(this.name, 'is barking');
    }
}
const d1 = new Dog('sheru', 'dog house' ,'Pitbull')
d1.eat()
d1.bark()
console.log(d1);

// Problem 20: Multi-Level Inheritance
class Person {
    constructor(qulaity){
        this.qulaity = qulaity;
    }
}
class Employ extends Person{
    constructor(qulaity,empName, empId){
        super(qulaity)
        this.empName = empName;
        this.empId = empId;
    }
}
class Manager extends Employ {
    constructor(qulaity, empName, empId, power){
        super(qulaity, empName,empId)
        this.power = power
    }
}
const m1 = new Manager('Human', 'Rahul', 8001, true)
console.log(m1);
console.log(m1.__proto__);
console.log(m1.qulaity);


// ****************************************** Static Methods

// Problem 21: Math Utility Class
class MathHelper {
    static x = 10
    static add(a,b) {
        return a+b
    }
    static subtract(a,b){
        return a-b
    }
    static multiply(a,b){
        return a*b
    }
    static divide(a,b){
        return a/b
    }
}
console.log(MathHelper.add(4,6));
console.log(MathHelper.subtract(40,6));
console.log(MathHelper.multiply(4,6));
console.log(MathHelper.divide(42,6));

// Problem 22: User Counter
class User {
    static counter(a){
        let count = 0
        for (let i=0; i<a.length; i++){
            count ++
        }
        return count
    }
}
let arr1 = [12,43,45,7,52,32]
console.log(User.counter('Total user is: ',arr1));


// ******************************************* Getters & Setters

// Problem 23: Full Name Getter
class Person5 {
    constructor(fname,lname){
        this.fname = fname
        this.lname = lname 
    }
    get fullName (){ // getter
        return this.fname+" "+this.lname
    }
}
let per = new Person5('Kartik', 'Kaur')
console.log(per.fullName);

// Problem 24: Email Validation Setter
class User2 {
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    get email(){
        return this._email
    }
    set email(value){
        if(!value.includes('@') || !value.includes('.')){
            throw new error('Invalid Email')
        }
        this._email = value
    }
}
try{
    const u = new User2 ('Rohan', 'abc@gmail.com')
    console.log(u.email);
}catch(error){
    console.error(error.message)
}


// ************************************ Private Fields

// Problem 25: Secure Bank Account
class BankAcc {
    #balance = 0
    deposit(amount){
        this.#balance += amount
    }
    getBalance(){
        return this.#balance
    }
}
const acc = new BankAcc()
acc.deposit(5000)
console.log(acc.getBalance());

// Problem 26: Student Grades System
class Marksheet {
    #marks = 0
    setMarks(m){
        this.#marks += m
    }
    getMarks(){
        return this.#marks
    }
}
const mark = new Marksheet()
mark.setMarks(89)
console.log(mark.getMarks());